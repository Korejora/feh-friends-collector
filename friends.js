
// friends.js
// handles the friends roster


let friends =
{
    roster : [],
    home : [],

    setup : function friends_setup()
    {   this.first_friends();
    },

    make_friend (character)
    // (tag, rarity, boon, bane, favourite)
    {
        if (chars[character.tag])
        {
            // let index = -1 + this.roster.push( new chars[character.tag](character.rarity) );
            let friend = new ally(chars[character.tag]);

            if (stringy.rarity_list[character.rarity])
            {   friend.rarity = stringy.rarity_list[character.rarity]; }
            else { friend.rarity = character.rarity; }


            friend.favourite = character.favourite;
            friend.fruit = character.fruit;

            friend.boon = (character.boon) ? character.boon.replace('+','') : null;
            friend.bane = (character.bane) ? character.bane.replace('–','') : null;
            if (friend.bane == friend.boon) { friend.bane = null; friend.boon = null; }
            friend.rebuild();

            if (character.home) { friend.send_home(); }

            this.roster.push(friend);
            friend.obtained = character.obtained || this.roster.length;

            return friend;

        }
        else { console.log('ERR_ALLY_CONSTRUCTOR_NOT_FOUND', character.tag); }

    },

    remove_last : function friends_remove_last()
    {
        let last_friend = this.roster.pop();
        refreshment();
        return last_friend;
    },

    restore_friends (restore_array)
    {
        this.roster = [];
        for ( let i=0; i < restore_array.length; i++ )
        {   let current_friend = restore_array[i];
            if(!current_friend.tag) { current_friend.tag = this.find_tag(current_friend); }
            this.make_friend(current_friend);
        }
        this.roster = this.roster.sort(function(a,b){return a.obtained-b.obtained;});
        tableau.friends_table.ally_list = this.roster;
        alter.reset_ally();
        refreshment();
        tableau.last_sorted = null;
    },

    save_friends_string ()
    {
        // save tag, favourite, fruit, rarity, boon, bane
        let save = {};

        for (let i = 0; i < this.roster.length; i++ )
        {   let ally = this.roster[i];
            save[i] = {};
            let entry = save[i];
            entry.t = ally.tag;
            entry.f = ally.favourite ? 1 : 0;
            if(ally.fruit){entry['*'] = stringy.fruits.indexOf(ally.fruit);}
            entry.r = ally.rarity;
            if(ally.summon && ally.boon && ally.bane)
            {   entry['+'] = stringy.shorten_nature(ally.boon);
                entry['-'] = stringy.shorten_nature(ally.bane);
            }
            if(ally.home) { entry.h = 1; }
        }

        let save_string = JSON.stringify(save);
        porter.stringly.set_text(save_string);
    },

    restore_friends_string ()
    {
        let save_string = porter.stringly.return_text();
        let save = JSON.parse(save_string);

        let restore_array = [];

        for (let key in save)
        {   let friend = {};
            let entry = save[key];
            friend.tag     = entry.t;
            friend.favourite  = (entry.f) ? '❤' : false;
            friend.fruit   = stringy.fruits[entry['*']];
            friend.rarity  = entry.r || 5;
            friend.boon    = stringy.interpret_stat(entry['+']) || null;
            friend.bane    = stringy.interpret_stat(entry['-']) || null;
            friend.home    = (entry.h) ? true : false;

            restore_array.push(friend);

        }

        this.restore_friends(restore_array);

    },

    first_friends ()
    {
        this.make_friend({tag:'anna__commander',           rarity:2, /*fruit:'🍐'*/ });
        this.make_friend({tag:'virion__elite_archer',      rarity:2, /*fruit:'🍇'*/ });
        this.make_friend({tag:'matthew__faithful_spy',     rarity:2, /*fruit:'🍊'*/ });
        this.make_friend({tag:'raigh__dark_child',         rarity:2, /*fruit:'🍒'*/ });
        this.make_friend({tag:'alfonse__prince_of_askr',   rarity:2, /*fruit:'🍋'*/ });
        this.make_friend({tag:'sharena__princess_of_askr', rarity:2, /*fruit:'🍑'*/ });
    },

    restore_friends_googly ()
    {
        // this reads the google spreadsheet then calls the friends function read_googly_rows_then_restore
        googly.read_sheet_then_call_friends();
        // this has to be a chain of functions calling each other to prevent them racing each other
     // this.after_read_googly(rows);
    },

    after_read_googly(rows)
    {
        this.read_googly_rows_then_restore(rows);
    },

    read_googly_rows_then_restore (rows)
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
                    case 'rank':
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
            porter.googly_note(stringy.googly_warn_no_name,'error');
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

        this.restore_friends(restore_array);
        porter.googly_note(stringy.googly_info_roster_restored,'inform');
    },

    save_friends_googly ()
    {
        let spreadsheet_ID = porter.get_googly_spreadsheet_ID();
        this.save_googly(spreadsheet_ID);
    },

    save_googly (spreadsheet_ID)
    {
        // TODO: teach friends.js to write to a google spreadsheet

        // build array of values
        let rows = [];

        // title row
        rows[0] = [ "tag", "Name", "Obtained", "Favourite", "Fruit",
                    "Rarity", "Boon", "Bane", "Home" ];

        for ( let i = 0; i < this.roster.length; i++ )
        {   let ally = this.roster[i];
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
        googly.clear_write(spreadsheet_ID, rows);

    },

    find_tag : function find_friend_tag(friend)
    {

        if( !friend.name)
        { let name = "NO_NAME"; }
        else{ let name = friend.name.toLowerCase(); }
        if (!friend.tag) { friend.tag = "NO_TAG"; }

        // // try to find the tag in the database. should work for most allies.
        if (chars[friend.tag]) { return friend.tag; }

        // if that didn't work then check if they're special.

        if( stringy.includes_any(name, stringy.suffixes.spring) || friend.tag.includes('spring') )
        {   // it's a bunny! which one?
            if (name.includes('camilla')) { return 'camilla__spring_princess'; }
            if (name.includes('chrom'))   { return 'chrom__spring_exalt'; }
            if (name.includes('lucina'))  { return 'lucina__spring_exalt'; }
            if (name.includes('xander'))  { return 'xander__spring_prince'; }
            console.log("thought a bunny ally was found, but could not identify which");
        }

        if( stringy.includes_any(name, stringy.suffixes.bride) || friend.tag.includes('bride') )
        {   // it's a bride! which one?
            if (name.includes('caeda'))     { return 'caeda__talyss_bride'; }
            if (name.includes('charlotte')) { return 'charlotte__money_maiden'; }
            if (name.includes('cordelia'))  { return 'cordelia__perfect_bride'; }
            if (name.includes('lyn'))       { return 'lyn__bride_of_the_plains'; }
            console.log("thought a bridal ally was found, but could not identify which");
        }

        if( stringy.includes_any(name, stringy.suffixes.summer) || friend.tag.includes('summer') )
        {   // it's a beachgoer! which one?
            if (name.includes('frederick')) { return 'frederick__horizon_watcher'; }
            if (name.includes('gaius'))     { return 'gaius__thief_exposed'; }
            if (name.includes('robin'))     { return 'robin__seaside_tactician'; }
            if (name.includes('tiki'))      { return 'tiki__summering_scion'; }
            // maybe a nohrian swimmer?
            if (name.includes('corrin'))    { return 'corrin__novice_vacationer'; }
            if (name.includes('elise'))     { return 'elise__tropical_flower'; }
            if (name.includes('leo'))       { return 'leo__seashores_prince'; }
            if (name.includes('xander'))    { return 'xander__student_swimmer'; }
            console.log("thought a summer ally was found, but could not identify which");
        }

        if( stringy.includes_any(name, stringy.suffixes.brave) )
        {   // it's a brave hero! which one?
            if (name.includes('camilla')) { return 'camilla__spring_princess'; }
            if (name.includes('chrom'))   { return 'chrom__spring_exalt'; }
            if (name.includes('lucina'))  { return 'lucina__spring_exalt'; }
            if (name.includes('xander'))  { return 'xander__spring_prince'; }
            console.log("thought a brave ally was found, but could not identify which");
        }

        if(name.includes('robin'))
        {   // it's robin! blue or green?
            if(friend.colour)
            {   let colour = friend.colour.toLowerCase();
                if (colour.includes('blue'))  { return 'robin__high_deliverer'; }
                if (colour.includes('green')) { return 'robin__mystery_tactician'; }
            }

            if(stringy.includes_any(name, stringy.suffixes.robin_blue) )
            {   return 'robin__high_deliverer'; }
            if(stringy.includes_any(name, stringy.suffixes.robin_green) )
            {   return 'robin__mystery_tactician'; }

            if(friend.tag)
            {   if (friend.tag.includes('blue'))  { return 'robin__high_deliverer'; }
                if (friend.tag.includes('green')) { return 'robin__mystery_tactician'; }
            }

            console.log("couldn't figure out which Robin was meant by: ", friend.name);
            console.log("assuming blue Robin ..");
            return 'robin__high_deliverer';
            // summer robin should have been caught above!
        }

        if(name.includes('corrin'))
        {   // it's corrin! dracorrin or corrnin?
            if(friend.colour)
            {   let colour = friend.colour.toLowerCase();
                if (colour.includes('blue')) { return 'corrin__fateful_princess'; }
                if (colour.includes('red'))  { return 'corrin__fateful_prince'; }
            }

            if (stringy.includes_any(name, stringy.suffixes.corrin_dragon) )
            {   return 'corrin__fateful_princess'; }
            if (stringy.includes_any(name, stringy.suffixes.corrin_sword) )
            {   return 'corrin__fateful_prince'; }

            if(friend.tag)
            {   if (friend.tag.includes('dragon'))  { return 'corrin__fateful_princess'; }
                if (friend.tag.includes('sword')) { return 'corrin__fateful_prince'; }
            }

            console.log("couldn't figure out which Corrin was meant by: ", friend.name);
            console.log("assuming dragon Corrin..");
            return 'corrin__fateful_princess';
            // summer corrin should have been caught above!
        }

        if(name.includes('tiki'))
        {   // it's tiki! from shadow dragon or awakening?
            if (stringy.includes_any(name, stringy.suffixes.tiki_shadow) )
            {   return 'tiki__dragon_scion'; }
            if (stringy.includes_any(name, stringy.suffixes.tiki_awakening) )
            {   return 'tiki__nagas_voice'; }

            if(friend.tag)
            {   if (friend.tag.includes('shadow'))  { return 'tiki__dragon_scion'; }
                if (friend.tag.includes('awakening')) { return 'tiki__nagas_voice'; }
            }

            console.log("couldn't figure out which Tiki was meant by: ", friend.name);
            console.log("assuming Awakening Tiki..");
            return 'tiki__nagas_voice';
            // summer tiki should have been caught above!
        }

        if( name.includes("lon'qu"))
        {   // LON'QU YOUR NAME IS A PAIN
            return 'lonqu__solitary_blade';
        }

        if( name.includes("marth"))
        {   // masked marth
            if (stringy.includes_any(name, stringy.suffixes.mask)) {return 'marth__enigmatic_blade';}
            if(friend.tag)
            {   if (friend.tag.includes('masked'))  { return 'marth__enigmatic_blade'; }
            }
            // console.log("thought masked marth was found, but no proper suffix was found: ", friend.name);
            // console.log("assuming vanilla Marth..");
            return 'marth__altean_prince';
        }

        for( let i=0; i < catalog.length; i++)
        {   if( catalog[i].includes(friend.name.toLowerCase()) )
            {   return catalog[i];
            }
        }

        console.log("couldn't figure out which ally was meant by: ", friend.name);
        return null;

    },


};

friends.setup();
// friends.test_friends();
