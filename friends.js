
let friends =
{
    roster : [],
    home : [],

    fruit : [ null, '🍇', '🍈', '🍉', '🍊', '🍋', '🍐', '🍑', '🍒', '🍓' ],

    next_fruit : function(fruit)
    {
        let index = friends.fruit.indexOf(fruit);
        if (index < 0) { return friends.fruit[1]; }
        let next_index = index + 1;
        if (next_index == friends.fruit.length) { next_index = 0; }
        let next_fruit = friends.fruit[next_index];
        return next_fruit;
    },

    make_friend : function (pass)
    // (tag, rarity, boon, bane, favourite)
    {
        if (chars[pass])
        {   let index = -1 + friends.roster.push( new chars[pass]() );
            let friend = friends.roster[index];
            friend.set_rarity(0);
            friend.refresh();
            friend.obtained = friends.roster.length;
            return;
        }
        else if (chars[pass.tag])
        {
            let index = -1 + friends.roster.push( new chars[pass.tag](pass.rarity) );
            let friend = friends.roster[index];

            let rarity = pass.rarity;
            let rarity_list = { '★★★★★':5, '★★★★':4, '★★★':3, '★★':2, '★':1 };
            if (rarity_list[pass.rarity]) { rarity = rarity_list[pass.rarity]; }
            friend.obtained = pass.obtained || friends.roster.length;

            friend.set_favourite(pass.favourite);
            friend.set_fruit(friends.fruit[pass.fruit] || pass.fruit);

            friend.boon = (pass.boon) ? pass.boon.replace('+','') : null;
            friend.bane = (pass.bane) ? pass.bane.replace('–','') : null;
            if (friend.bane == friend.boon) { friend.bane = null; friend.boon = null; }
            friend.set_rarity(rarity);
            friend.refresh();
            friend.assign_max_stats();

            if (pass.home) { friend.send_home(); }

        }
        else { console.log('ERR_ALLY_CONSTRUCTOR_NOT_FOUND'); }

    },

    restore_friends : function(restore_array)
    {
        friends.roster = [];
        for ( let i=0; i < restore_array.length; i++ )
        {   let friend = restore_array[i];
            if (!friend.tag) { friend.tag = friends.find_tag(friend); }
            friends.make_friend(friend);
        }

        friends.roster = friends.roster.sort(function(a,b){return a.obtained-b.obtained;});
        tableau.friends_table.ally_list = friends.roster;
        alter.reset();
        refreshment();
        tableau.last_sorted = null;
    },

    save_friends_string : function ()
    {
        // save tag, favourite, fruit, rarity, boon, bane
        let save = {};

        for (let i = 0; i < friends.roster.length; i++ )
        {   let ally = friends.roster[i];
            save[i] = {};
            let entry = save[i];
            entry.t = ally.tag;
            entry.f = ally.favourite ? 1 : 0;
            if(ally.fruit){entry['*'] = friends.fruit.indexOf(ally.fruit);}
            entry.r = ally.rarity;
            if(ally.summon && ally.boon && ally.bane)
            {   entry['+'] = stringy.shorten_nature(ally.boon);
                entry['-'] = stringy.shorten_nature(ally.bane);
            }
            if(ally.home) { entry.h = 1; }
        }

        let save_string = JSON.stringify(save);
        porter.stringy.set_text(save_string);
    },

    restore_friends_string : function ()
    {
        let save_string = porter.stringy.return_text();
        let save = JSON.parse(save_string);

        let restore_array = [];

        for (let key in save)
        {   let friend = {};
            let entry = save[key];
            friend.tag     = entry.t;
            friend.favourite  = (entry.f) ? '❤' : false;
            friend.fruit   = friends.fruit[entry['*']];
            friend.rarity  = entry.r || 5;
            friend.boon    = stringy.interpret_stat(entry['+']) || null;
            friend.bane    = stringy.interpret_stat(entry['-']) || null;
            friend.home    = (entry.h) ? true : false;

            restore_array.push(friend);

        }

        this.restore_friends(restore_array);

    },

    first_friends : function ()
    {
        friends.make_friend({tag:'anna',    rarity:2, /*fruit:'🍐'*/ });
        friends.make_friend({tag:'virion',  rarity:2, /*fruit:'🍇'*/ });
        friends.make_friend({tag:'matthew', rarity:2, /*fruit:'🍊'*/ });
        friends.make_friend({tag:'raigh',   rarity:2, /*fruit:'🍒'*/ });
        friends.make_friend({tag:'alfonse', rarity:2, /*fruit:'🍋'*/ });
        friends.make_friend({tag:'sharena', rarity:2, /*fruit:'🍑'*/ });
    },

    fetch_googly_text : function()
    {   let text = porter.googly.return_text();
        if (text.includes('spreadsheets'))
        {   let regexp = /\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/;
            let blop = regexp.exec(text);
            return blop[1];
        }
        else { return text; }
    },

    restore_friends_googly : function()
    {   let spreadsheet_ID = this.fetch_googly_text();
        this.get_googly_then_read(spreadsheet_ID);
    },

    get_googly_then_read : function(spreadsheet_ID)
    {
        if (!spreadsheet_ID)
        {   console.log('no spreadsheet ID found! ..'); return;
         // spreadsheet_ID = googly.spreadsheet_ID;
        }

        gapi.client.sheets.spreadsheets.values.get
        (   {   spreadsheetId: spreadsheet_ID,
                range: 'A:Z',
            }
        ).then(function(response)
        {
            let rows = response.result.values;
            if (rows && rows.length > 0)
            {
             // googly.rows = rows; // not currently used
                friends.read_googly_then_restore(rows); // read
            }
            else
            {   console.log('no data found.');
                porter.googly_note("Found sheet, but no data. Is the sheet empty?", 'error');
            }
        },
        function(response)
        {   let error_message = response.result.error.message;
            console.log('Error: ' + response.result.error.message);
            if (error_message.includes("request is missing a valid API key"))
            {   porter.googly_note("Couldn't authorize connection. Are you connected to Google?", 'error');
            }
            if (error_message.includes("does not have permission"))
            {   porter.googly_note("Couldn't access the sheet. Do you have permission to read that sheet?", 'error');
            }
        }      );
    },

    read_googly_then_restore : function(rows)
    {
        let columns = {};
        let title_row_index = 0;

        for ( i=0; i < rows.length; i++ )
        {
            let titles = rows[i];
            for ( let j=0; j < titles.length; j++ )
            {   let title = titles[j];
                // assign the number to the property so it knows which column to find it in
                switch(title.toLowerCase())
                {   case 'tag':
                        columns.tag = j;
                        break;
                    case 'name':
                    case 'friend':
                    case 'ally':
                    case 'hero':
                    case 'character':
                        columns.name = j;
                        break;
                    case 'obtained':
                    case 'order':
                        columns.obtained = j;
                        break;
                    case 'favourite':
                    case 'favorite':
                        columns.favourite = j;
                        break;
                    case 'gone':
                    case 'home':
                        columns.home = j;
                        break;
                    case 'fruit':
                        columns.fruit = j;
                        break;
                    case 'rarity':
                    case 'stars':
                        columns.rarity = j;
                        break;
                    case 'colour':
                    case 'color':
                        columns.colour = j;
                        break;
                    case 'boon':
                        columns.boon = j;
                        break;
                    case 'bane':
                        columns.bane = j;
                        break;
                    default:
                        console.log("didn't recognize property: ", title);
                        break;
                }
            }
            if (columns.tag !== undefined ) { title_row_index = i; break; }
            if (columns.name !== undefined ) { title_row_index = i; break; }
        }

        if (columns.tag === undefined && columns.name === undefined )
        {   console.log("couldn't find tags/names column! aborting ..");
            porter.googly_note("Couldn't find Name column. Do you have a column titled 'Name', 'Character', or similar?",'error');
            return;
        }


        let restore_array = [];
        for ( let i=0; i < rows.length; i++)
        {   if ( i == title_row_index ) { continue; }
            let row = rows[i];
            let friend = {};
            let c = columns;
            if (!row[c.name] && !row[c.tag]) { continue; } // can't add ally without identifier
            friend.tag      = row[c.tag];
            friend.name     = row[c.name];
            friend.obtained = row[c.obtained];
            friend.favourite= row[c.favourite] ? '❤' : null;
            friend.fruit    = row[c.fruit];
            friend.rarity   = stringy.interpret_rarity(row[c.rarity]);
            friend.colour   = row[c.colour]; // only used for tag check
            friend.boon     = stringy.interpret_stat(row[c.boon]);
            friend.bane     = stringy.interpret_stat(row[c.bane]);
            friend.home     = row[c.home] ? '✓' : null;

            restore_array.push(friend);
        }

        porter.googly_note("Roster restored from google sheet.",'inform');

        this.restore_friends(restore_array);
    },

    save_friends_googly : function()
    {
        let spreadsheet_ID = this.fetch_googly_text();
        this.save_googly(spreadsheet_ID);
    },

    save_googly : function(spreadsheet_ID)
    {
        // TODO: teach friends.js to write to a google spreadsheet

        // build array of values
        let rows = [];

        // title row
        rows[0] = [ "tag", "Name", "Obtained", "Favourite", "Fruit",
                    "Rarity", "Boon", "Bane", "Home" ];

        for ( let i = 0; i < friends.roster.length; i++ )
        {   let ally = friends.roster[i];
            rows[i+1] = [];

            for ( let j = 0; j < rows[0].length; j++ )
            {   let prop = rows[0][j].toLowerCase();
                let value = ally[prop];

                if (ally[prop] === true) { value = '✓'; }
                if (ally[prop] === false) { value = ''; }

                rows[i+1][j] = value;
            }

        }

        // update spreadsheet values
        this.write_googly(spreadsheet_ID, rows);

    },

    write_googly : function(spreadsheet_ID, values)
    {
        if (!spreadsheet_ID)
        {   console.log('no spreadsheet ID found! ..'); return;
         // spreadsheet_ID = googly.spreadsheet_ID;
        }

        gapi.client.sheets.spreadsheets.values.clear
        (   {   spreadsheetId: spreadsheet_ID,
                range: 'A:Z'
            }
        ).then(
        function(response)
        {
            gapi.client.sheets.spreadsheets.values.update
            (   {   spreadsheetId: spreadsheet_ID,
                    range: 'A:Z',
                    valueInputOption: 'RAW',
                    resource :
                    {   "range": 'A:Z',
                        "majorDimension":'ROWS',
                        "values":values
                    }
                }
            ).then(
            function(response)
            {
                porter.googly_note("Saved roster to google sheet. "+stringy.show_time(),'inform');
            },
            function(response)
            {   console.log('Error: ' + response.result.error.message);
            }     );
        },
        function(response)
        {
            let error_message = response.result.error.message;
            console.log('Error: ' + response.result.error.message);
            if (error_message.includes("missing required authentication credential"))
            {   porter.googly_note("Couldn't authorize connection. Are you connected to Google?", 'error');
            }
            if (error_message.includes("does not have permission"))
            {   porter.googly_note("Couldn't access the sheet. Do you have permission to write to that sheet?", 'error');
            }
        }     );

    },

    find_tag : function(friend)
    {
        let name = friend.name.toLowerCase();

        // try to find the tag in the database. should work for most allies.
        if (chars[name]) { return name; }

        // if that didn't work then they're probably special.

        if(name.includes('robin'))
        {   // it's robin! blue or green?
            if(friend.colour)
            {   let colour = friend.colour.toLowerCase();
                if (colour.includes('blue'))  { return 'robin_blue'; }
                if (colour.includes('green')) { return 'robin_green'; }
            }

            if(stringy.includes_any(name,['(b)','blue','boy','(m)','(male)']) )
            {   return 'robin_blue'; }
            if(stringy.includes_any(name,['(g)','green','girl','(f)','female']) )
            {   return 'robin_green'; }
            console.log("couldn't figure out which Robin was meant by: ", friend.name);
            console.log("assuming blue Robin ..");
            return 'robin_blue';
        }

        if(name.includes('corrin'))
        {   // it's corrin! dragon or corn?
            if(friend.colour)
            {   let colour = friend.colour.toLowerCase();
                if (colour.includes('blue')) { return 'corrin_dragon'; }
                if (colour.includes('red'))  { return 'corrin_sword'; }
            }

            if (stringy.includes_any(name,['dragon','(b)','blue','girl','(f)','female']) )
            {   return 'corrin_dragon'; }
            if (stringy.includes_any(name,['sword','(r)','red','boy','(m)','(male)']) )
            {   return 'corrin_sword'; }
            console.log("couldn't figure out which Corrin was meant by: ", friend.name);
            console.log("assuming blue Corrin..");
            return 'corrin_dragon';
        }

        if(name.includes('tiki'))
        {   // it's tiki! from shadow dragon or awakening?
            if (stringy.includes_any(name,['(s)','shadow','mystery','emblem','(y)','young']) )
            {   return 'tiki_shadow'; }
            if (stringy.includes_any(name,['(a)','adult','awakening']) )
            {   return 'tiki_awakening'; }
            console.log("couldn't figure out which Tiki was meant by: ", friend.name);
            console.log("assuming Awakening Tiki..");
            return 'tiki_awakening';
        }

        if( stringy.includes_any(name,['spring','bunny','(s)','(sf)']) )
        {   // it's a bunny! which one?
            if (name.includes('camilla')) { return 'camilla_spring'; }
            if (name.includes('chrom'))   { return 'chrom_spring'; }
            if (name.includes('lucina'))  { return 'lucina_spring'; }
            if (name.includes('xander'))  { return 'xander_spring'; }
            console.log("thought a bunny ally was found, but could not identify which");
        }

        if( name.includes("lon'qu"))
        {   // LON'QU YOUR NAME IS A PAIN
            return 'lonqu';
        }

        console.log("couldn't figure out which ally was meant by: ", friend.name);
        return null;

    },


};

friends.first_friends();
// friends.test_friends();
