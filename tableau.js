
let tableau =
{
    table_settings_div : document.getElementById('table_settings_div'),
    table_output_div : document.getElementById('table_output_div'),

    skill_tick : {},

    row_properties :
    [   { key : 'name', display : 'Name', parent_div : 'name' },

        { key:'obtained',   display:'#',    parent_div:'info', mouseover:'Obtained' },
        { key:'favourite',  display:'♡',    parent_div:'info', mouseover:'Favourite' },
        { key:'fruit',      display:'🍎',   parent_div:'info' },
        { key:'origin',     display:'Origin', parent_div:'info', mouseover:'Origin' },
        { key:'rarity',     display:'☆',     parent_div:'info', mouseover:'Rarity' },

        { key:'colour_type', display:'🔮', parent_div:'type', mouseover:'Type' },
        { key:'weapon_type', display:'🗡️', parent_div:'type', mouseover:'Weapon Type' },
        { key:'move_type'  , display:'👢', parent_div:'type', mouseover:'Move Type' },

        { key : 'nature', display : 'Nature', parent_div : 'stat' },
        { key : 'rating', display : 'Rating', parent_div : 'stat' },
        { key : 'hp' , display :  'HP', parent_div : 'stat' },
        { key : 'atk', display : 'ATK', parent_div : 'stat' },
        { key : 'spd', display : 'SPD', parent_div : 'stat' },
        { key : 'def', display : 'DEF', parent_div : 'stat' },
        { key : 'res', display : 'RES', parent_div : 'stat' },

        { key:'weapon',    display:'Weapon',    parent_div:'skill', container: dat.weapons },
        { key:'assist',    display:'Assist',    parent_div:'skill', container: dat.assists },
        { key:'special'  , display:'Special',   parent_div:'skill', container: dat.specials },
        { key:'passive_a', display:'Passive A', parent_div:'skill', container: dat.passive_a },
        { key:'passive_b', display:'Passive B', parent_div:'skill', container: dat.passive_b },
        { key:'passive_c', display:'Passive C', parent_div:'skill', container: dat.passive_c }
    ],

    setup_friends_table : function()
    {   this.friends_table = new this.table();
        this.friends_table.ally_list = friends.roster;
        this.friends_table.last_sorted = 'obtained';
        this.friends_table.rebuild_rows();
        this.friends_table.div.id = 'friends_table';
        this.table_output_div.appendChild(this.friends_table.div);
    },

    setup_allies_table : function()
    {   this.allies_table = new this.table();
        this.allies_table.ally_list = allies.list;
        this.allies_table.last_sorted = 'name';
        this.allies_table.rebuild_rows();
        this.allies_table.div.id = 'allies_table';
        this.table_output_div.appendChild(this.allies_table.div);
    },

    active_table : 'allies_table',

    activate_friends_table : function()
    {
        this.allies_table.hide();

        this.friends_table.show();
        adder.show();
        porter.show();

        this.active_table = 'friends_table';
    },

    activate_allies_table : function()
    {
        this.friends_table.hide();
        adder.hide();
        porter.hide();

        this.allies_table.show();

        this.active_table = 'allies_table';
    }

};

tableau.setup = function ( )
{
    this.table_output_div.innerHTML = '';

    // skill tick
    this.skill_tick = new checky({default:true,label:"show skills"});
    this.skill_tick.checkbox.onclick = function()
    {   if (tableau.skill_tick.checkbox.checked === true) { tableau.show_skill_divs(); }
        else { tableau.hide_skill_divs(); }
    };


    this.table_switch_div = document.createElement('div');
    this.table_settings_div.appendChild(this.table_switch_div);

    this.table_switch_div.appendChild(document.createTextNode(' 〜 '));

    this.activate_friends_div = document.createElement('div');
    this.activate_friends_div.className = ' clickables ';
    this.activate_friends_div.innerText = "collection";
    this.activate_friends_div.onmousedown = function() { tableau.activate_friends_table(); };
    this.table_switch_div.appendChild(this.activate_friends_div);

    this.table_switch_div.appendChild(document.createTextNode(' 〜 '));

    this.activate_allies_div = document.createElement('div');
    this.activate_allies_div.className = ' clickables ';
    this.activate_allies_div.innerText = "all allies";
    this.activate_allies_div.onmousedown = function() { tableau.activate_allies_table(); };
    this.table_switch_div.appendChild(this.activate_allies_div);

    this.table_switch_div.appendChild(document.createTextNode(" 〜 "));

    this.table_settings_div.appendChild(this.table_switch_div);

    this.table_settings_div.appendChild(this.skill_tick.div);




    this.setup_friends_table();
    this.setup_allies_table();

    this.activate_friends_table();

    this.feh_row = new this.row(allies.feh);
    this.feh_row.build_items();


};


tableau.show_skill_divs = function()
{   tableau.friends_table.show_skill_divs();
    tableau.allies_table.show_skill_divs();
    tableau.feh_row.show_skill_div();
    tableau.hide_skills = false;
};

tableau.hide_skill_divs = function()
{   tableau.friends_table.hide_skill_divs();
    tableau.allies_table.hide_skill_divs();
    tableau.feh_row.hide_skill_div();
    tableau.hide_skills = true;
};




tableau.table = class
{
    constructor()
    {   this.div = document.createElement('div');
        this.div.className = 'table_wrapper';
        this.ally_list = [];
        this.rows = [];
        this.last_sorted = null;
    }


    rebuild_title_row ()
    {
        this.title_row = new tableau.row();
        this.div.appendChild(this.title_row.div);

        let that = this;
        let title_row = this.title_row;
        title_row.titledivs = [];
        tableau.row_properties.forEach( function(prop)
        {
            let title_div = document.createElement('div');
            title_row.titledivs.push(title_div);
            title_row.subdivs[prop.parent_div].appendChild(title_div);

            title_div.className = "title item click_item noselect " + prop.key;
            title_div.innerText = prop.display;

            if (prop.mouseover) { title_div.title = prop.mouseover; }

            title_div.onmousedown = function(){ that.sort_rows(prop.key); };

        });
    }

    rebuild_rows ()
    {
        this.div.innerHTML = '';
        this.rebuild_title_row();

        this.rows = [];
        for ( let i = 0;  i < this.ally_list.length;  i++)
        {   let ally = this.ally_list[i];
            this.rows.push( new tableau.row(ally) );
            this.rows[i].build_items();
            // hide allies that have gone home TODO: MAKE A FILTER FOR THIS INSTEAD
            if (ally.is_home()) { this.rows[i].div.style.display = 'none'; }
        }

        this.refresh();
        let previous_sort = this.last_sorted || 'obtained';
        this.last_sorted = null;
        this.sort_rows(previous_sort);

    }

    refresh ()
    {
        let rows = this.filter_rows();
        for ( let i = 0;  i < rows.length;  i++)
        {   this.div.appendChild(rows[i].div);
        }

        if ( tableau.hide_skills ) { this.hide_skill_divs(); }

    }

    filter_rows()
    {   return this.rows;

    }

    sort_rows(property)
    {   let reverse = (property == this.last_sorted) ? true : false;
        if (tableau.check_if_reverse_sort(property)) { reverse = (reverse) ? false : true; }
        if (property == 'nature') { property = 'boon'; }

        this.rows.sort(tableau.comparison(property, reverse));

        this.last_sorted = (this.last_sorted == property) ? null : property;
        this.refresh();
    }

    show_skill_divs()
    {   this.title_row.show_skill_div();
        this.rows.forEach( function(row)
        {   row.show_skill_div();
        });
    }

    hide_skill_divs()
    {   this.title_row.hide_skill_div();
        this.rows.forEach( function(row)
        {   row.hide_skill_div();
        });
    }

    show()
    {   this.div.style.display = '';
    }

    hide()
    {   this.div.style.display = 'none';
    }


}; // end table class




tableau.row = class
{
    constructor(ally)
    {
        this.ally = ally;
        if (ally && ally.gone_home) { return 0; }
        this.div = document.createElement('div');
        this.div.className += ' row ';

        this.subdivs = {};

        let that = this;
        ['name','info','type','stat','half','skill'].forEach(function(subdiv)
        {   that.subdivs[subdiv] = document.createElement('div');
            that.subdivs[subdiv].className = " subdiv " + subdiv + " ";
        });

        this.div.appendChild(that.subdivs.half);
            this.subdivs.half.appendChild(that.subdivs.name);
            this.subdivs.half.appendChild(that.subdivs.info);
            this.subdivs.half.appendChild(that.subdivs.type);
            this.subdivs.half.appendChild(that.subdivs.stat);
        this.div.appendChild(that.subdivs.skill);
    } // end constructor

    build_items ()
    {
        this.itemdivs = [];

        let that = this;
        tableau.row_properties.forEach( function(property)
        {
            let key = property.key;
            let val = that.ally[key]; // property value

            let item_div = document.createElement('div');
            that.itemdivs.push(item_div);
            that.subdivs[property.parent_div].appendChild(item_div);

            item_div.className  = " item " + key;
            item_div.className += " noselect ";

            // add info to the div.className
            switch(key)
            {
                case 'name': // nosummon so it knows to italicize the name
                    item_div.className += that.ally.summon ? "" : " nosummon ";
                    if (that.ally.text) {item_div.title = that.ally.text;}
                    item_div.onmousedown = function(){ that.name_click(); };
                    item_div.className += " click_item noselect ";
                    if (that.ally.home) { item_div.className += " strike "; }
                    break;
                case 'favourite':
                    item_div.onmousedown = function(){ that.favourite_click(); };
                    item_div.className += " click_item noselect ";
                    break;
                case 'fruit':
                    item_div.onmousedown = function(){ that.fruit_click(); };
                    item_div.className += " click_item noselect ";
                    break;
                case 'origin':
                    item_div.title = stringy.get_origin_text(val); // allies.properties[key][val].text;
                    break;
                case 'rarity':
                    item_div.className += ' stars ';
                    break;
                case 'weapon_type':
                    if(val.includes('tome')){item_div.className+=' tome ';}
                    if(val.includes('dragon')){item_div.className+=' dragon ';}
                    // fall;
                case 'colour_type':
                case 'move_type':
                    // catch;
                    item_div.className += " "+val+" ";
                    item_div.child_img = document.createElement('img');
                    item_div.child_img.onerror = function(){this.src = stringy.img_feh;};
                    item_div.child_img.src = stringy.find_img_path(key,val);
                    break;
                case 'weapon':
                    if ( dat.weapons[val] && dat.weapons[val].inherit == 'exclusive')
                    {   item_div.className += " exclusive ";
                    }
                    break;
                default:
                    break;
            }
        });
        this.refresh_items();
    } // end build_items


    refresh_items()
    {   // voodoo
        let that = this;
        tableau.row_properties.forEach( function(property, index)
        {
            let key = property.key;
            let val = that.ally[key];
            let item_div = that.itemdivs[index];
            let display_name = '';

            // find display name
            switch(key)
            {
                case 'name':
                    display_name = val || 'ERR_ALLY_NAME_NOT_FOUND';
                    break;
                case 'obtained':
                case 'favourite':
                case 'fruit':
                    display_name = val || "--";
                    break;
                case 'origin':
                    display_name = stringy.get_origin_display(val); // allies.properties[key][val].display;
                    break;
                case 'rarity':
                    display_name = stringy.rar_num_to_star(val); // allies.properties[key][val];
                    break;
                case 'colour_type':
                case 'weapon_type':
                case 'move_type':
                    display_name = '';
                    break;
                case 'nature':
                    display_name = that.ally.return_nature();
                    break;
                case 'bane':
                    display_name = (val && val != 'neutral') ? '–'+val : "neutral";
                    break;
                case 'rating':  case 'hp' :
                case 'atk':     case 'spd':
                case 'def':     case 'res':
                    display_name = val || "--";
                    break;
                case 'weapon':
                case 'assist':
                case 'special':
                case 'passive_a':
                case 'passive_b':
                case 'passive_c':
                    let container = property.container;
                    if (val && container[val])
                    {   display_name = container[val].name;
                        if (container[val].text)
                        {   item_div.title = container[val].text;
                        }
                    }
                    else { display_name = val ? val : "--"; }
                    break;
                default:
                    console.log("ERR_PROPERTY_KEY_NOT_FOUND",key);
                    display_name = val || "--";
                    break;
            }

            item_div.innerText = display_name;

            // sad hack to not italicize the book emoji
            if (key =='name' && that.ally.subname)
            {   let subname_div;
                subname_div = document.createElement('div');
                subname_div.innerText = that.ally.subname;
                subname_div.className = 'subname'; // font-style:normal;
                item_div.innerText = display_name;
                item_div.appendChild(subname_div);
            }
            else
            {   item_div.innerText = display_name;
            }

            if (item_div.child_img) { item_div.appendChild(item_div.child_img); }

        });
    } // end refresh_items

    name_click (item)
    {   if (tableau.active_table == 'friends_table')
        {   alter.select(this.ally);
        }
    }

    favourite_click (item)
    {   this.ally.toggle_favourite();
        refreshment();
    }

    fruit_click (item)
    {   this.ally.cycle_fruit();
        this.refresh_items();
    }

    show_skill_div()
    {   this.subdivs.half.style.width = '50%';
        this.subdivs.skill.style.display = '';
    }

    hide_skill_div()
    {   this.subdivs.half.style.width = '100%';
        this.subdivs.skill.style.display = 'none';
    }

}; // end row class


tableau.compare = function (a, b, property, reverse)
{
    let x = 1; if(reverse) { x = -1; }

    let c = a.ally[property];
    let d = b.ally[property];

    if (isNaN(c - d) && property.includes('type'))
    {   c = tableau.sort_properties[property].sort_array.indexOf(a.ally[property]);
        d = tableau.sort_properties[property].sort_array.indexOf(b.ally[property]);
        return (c - d)*x;
    }
    else if (isNaN(c - d))
    {   if (  c && !d ) { return -1*x; }
        if ( !c &&  d ) { return  1*x; }
        if ( !c && !d ) { return  0;   }
        if ( c.toLowerCase() < d.toLowerCase() ) { return -1*x; }
        if ( c.toLowerCase() > d.toLowerCase() ) { return  1*x; }
        return 0;
    }
    else { return (c - d)*x; }

};

tableau.cascade_tiebreaker = function (a,b, property)
{
    if (!this.sort_properties[property]) { property = 'other'; }

    for( let i = 0; i < this.sort_properties[property].tiebreaker.length; i++ )
    {   let prop = this.sort_properties[property].tiebreaker[i];
        let reverse = tableau.check_if_reverse_sort(prop);

        let result = this.compare(a,b, prop, reverse);
        if (result) return result;
    }
    console.log('exhausted tiebreakers for',property);
    return 0;
};


tableau.comparison = function (property, reverse)
{   return function(a,b)
    {   let first_try = tableau.compare(a,b,property,reverse);
        if (first_try) { return first_try; }
        return tableau.cascade_tiebreaker(a,b,property);
    };
};


tableau.sort_properties =
{
    name :
    {   tiebreaker : [ 'subname', 'obtained' ] },

    favourite :
    {   tiebreaker :
        [ 'rarity', 'colour_type', 'weapon_type', 'move_type', 'obtained' ], },

    origin :
    {   tiebreaker : [ 'name', 'subname', 'obtained' ], // proximity to main character?
    },

    rarity :
    {   tiebreaker : [ 'colour_type', 'weapon_type', 'move_type', 'origin', 'obtained' ],
        reverse : true
    },

    colour_type :
    {   tiebreaker : [ 'rarity', 'weapon_type', 'move_type', 'origin', 'obtained' ],
        sort_array : [ 'red', 'blue', 'green', 'grey' ],
    },

    weapon_type :
    {   tiebreaker : [ 'colour_type', 'rarity', 'move_type', 'origin', 'obtained' ],
        sort_array :
        [   'sword', 'lance', 'axe', 'bow', 'dagger',
            'tome_red', 'tome_blue', 'tome_green', 'staff',
            'dragon_red', 'dragon_blue', 'dragon_green'
        ],
    },

    move_type :
    {   tiebreaker : [ 'rarity', 'colour_type', 'weapon_type', 'origin', 'obtained' ],
        sort_array : [ 'infantry', 'armor', 'cavalry', 'flyer' ]
    },

    rating :
    {   tiebreaker :
        [ 'rarity', 'colour_type', 'weapon_type', 'move_type', 'origin', 'obtained' ],
        reverse : true
    },
    // rarity, colour_type, weapon_type, move_type, origin, proximity to main character

    other :
    {   tiebreaker :
        [ 'rarity', 'colour_type', 'weapon_type', 'move_type', 'origin', 'obtained' ] },

    boon :
    {   tiebreaker :
        [   'bane', 'rarity', 'colour_type', 'weapon_type', 'move_type',
            'origin', 'obtained' ]
    }

}; // end sort_properties

tableau.check_if_reverse_sort = function(property)
{   let reverse_sorts = ['rarity','rating','hp','atk','spd','def','res','subname'];
    if ( reverse_sorts.indexOf(property) != -1 ) { return true; }
    else { return false; }
};




tableau.filters =
{

};

class tableau_filter
{   constructor(params)
    {   this.property = params.property;
        this.value = params.value;

        this.checky = new checky(
            {   default: true,
                label: params.value // FIXME: get this to display the icon!
            });



    }

}
