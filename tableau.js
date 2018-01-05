
// tableau.js
// handles the tables



let tableau =
{
    table_output_div : document.getElementById('table_output_div'),
    hidden_div : document.getElementById('hidden_div'),

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

        { key:'weapons',   display:'Weapon',    parent_div:'skill' },
        { key:'support',   display:'Support',   parent_div:'skill' },
        { key:'special'  , display:'Special',   parent_div:'skill' },
        { key:'passive_A', display:'Passive A', parent_div:'skill' },
        { key:'passive_B', display:'Passive B', parent_div:'skill' },
        { key:'passive_C', display:'Passive C', parent_div:'skill' }
    ],

    setup_friends_table()
    {   this.friends_table = new this.table();
        this.friends_table.ally_list = friends.roster;
        this.friends_table.last_sorted = 'obtained';
        this.friends_table.rebuild_rows();
        this.friends_table.div.id = 'friends_table';
        this.table_output_div.appendChild(this.friends_table.div);
    },

    setup_allies_table()
    {   this.allies_table = new this.table();
        this.allies_table.ally_list = allies.list;
        this.allies_table.last_sorted = 'name';
        this.allies_table.rebuild_rows();
        this.allies_table.div.id = 'allies_table';
        this.table_output_div.appendChild(this.allies_table.div);
    },

    active_table : this.allies_table,

    activate_friends_table()
    {
        this.active_table = this.friends_table;
        refreshment();
        alter.reset_ally();

        this.allies_table.hide();

        this.friends_table.refresh();
        this.friends_table.show();
        adder.show();
        porter.show();

        tableau.sift.refresh();

        tableau.active_table.refresh();
    },

    activate_allies_table()
    {
        this.active_table = this.allies_table;
        refreshment();
        alter.reset_ally();

        this.friends_table.hide();
        adder.hide();
        porter.hide();

        this.allies_table.refresh();
        this.allies_table.show();

        tableau.sift.refresh();

        tableau.active_table.refresh();
    },

    add_feh_row()
    {   this.friends_table.contents_div.appendChild(tableau.feh_row.div);
    },

    refresh : function tableau_refresh()
    {   this.friends_table.refresh();
        this.allies_table.refresh();
    },

    rebuild : function tableau_rebuild()
    {   this.active_table.rebuild_rows();
    },

    is_collection_active()
    {   if (this.active_table == this.friends_table) { return true; }
        else { return false; }
    }

};


tableau.setup = function tableau_setup()
{
    this.sift = new tableau_filter_handler();
    this.sift.construct_filters();

    this.table_output_div.innerHTML = '';
    this.table_setting = new divvy({id:'table_setting', parent:this.table_output_div});
    let sets = this.table_setting;

    // clicks to switch between collection and allies
    sets.switch = new divvy({ classname:'inner', parent:sets });
    let sw = sets.switch;

    sw.add_squiggly();
    sw.friends = new selectdiv({ innertext:"collection", parent:sw.div });
    sw.add_squiggly();

    sw.add_linebreak();

    sw.add_squiggly();
    sw.allies = new selectdiv({ innertext:"all allies", parent:sw.div });
    sw.add_squiggly();
    sw.add_linebreak(); // necessary to align line proeprly

    // FIXME
    sw.friends.call_deselection = function() {sw.allies.do_deselect();};
    sw.friends.activate = function(){ tableau.activate_friends_table(); };
    sw.allies.call_deselection = function() { sw.friends.do_deselect(); };
    sw.allies.activate = function(){ tableau.activate_allies_table(); };


    sets.add_divider();


    // ticks
    sets.ticks = new divvy({id:'table_setting_ticks',classname:'inner', parent:sets.div});

    let st = sets.ticks;

    st.skill = new checky({default:true,label:"show skills",parent:st.div});
    st.skill.handle_click = function()
    {   if( st.skill.is_ticked() )
        {      tableau.show_skill_divs(); }
        else { tableau.hide_skill_divs(); }
    };

    st.add_linebreak();
    st.stats = new checky({default:false,label:"show min stats",parent:st.div});
    st.stats.handle_click = function()
    {   if( st.stats.is_ticked() )
        {      tableau.show_min_stats(); }
        else { tableau.show_max_stats(); }
    };
    st.stats.div.title = "Columns will continue to sort by MAX stats";

    st.add_linebreak();
    st.add_child(this.sift.special_filters.home.div);


    sets.add_divider();


    // filters
    sets.filters = new divvy({id:'table_setting_filters', classname:'inner', parent:sets.div});

    sets.filters.options = new divvy({classname:'inner', parent:sets.filters});
    let fo = sets.filters.options;

    // TODO: decide if you are going to change the filter interface
    fo.include = new selectable({})

    fo.tick_filters = new divvy({ innertext:"select all", parent:fo });
    fo.tick_filters.div.onmousedown = function(){ tableau.sift.tick_all(); };
    fo.tick_filters.div.className += ' clickables ';

    fo.add_linebreak();
    fo.untick_weapons = new divvy({ innertext:"clear weapons", parent:fo });
    fo.untick_weapons.div.onmousedown = function(){ tableau.sift.untick_weapons(); };
    fo.untick_weapons.div.className += ' clickables ';

    fo.add_linebreak();
    fo.untick_move = new divvy({ innertext:"clear move", parent:fo });
    fo.untick_move.div.onmousedown = function(){ tableau.sift.untick_move(); };
    fo.untick_move.div.className += ' clickables ';

    let addfilt = function append_filter_and_subfilters_to_appropriate_section(tag)
    {   let section = sets.filters.select[tag];
        let filter = tableau.sift.filters[tag];
        if (!filter) { filter = tableau.sift.dummy_filters[tag]; }
        section.add_child(filter.div);
        for ( let key in filter.subfilters )
        {   section.add_linebreak();
            section.add_child(filter.subfilters[key].div);
        }
    };


    sets.filters.select = new divvy({classname:'inner', parent:sets.filters});
    let fs = sets.filters.select;
    fs.rar = new divvy({classname:'filter column', parent:fs});
        fs.fav = new divvy({classname:'filter', parent:fs.rar});
        fs.fav.add_child(tableau.sift.subfilters.favourite.div);
        fs.fav.add_child(tableau.sift.subfilters.unfavourite.div);
    addfilt('rar');
    fs.red = new divvy({classname:'filter column', parent:fs});
    addfilt('red');
    fs.blue = new divvy({classname:'filter column', parent:fs});
    addfilt('blue');
    fs.green = new divvy({classname:'filter column', parent:fs});
    addfilt('green');
    fs.colorless = new divvy({classname:'filter column', parent:fs});
    addfilt('colorless');
    fs.move = new divvy({classname:'filter column', parent:fs});
    addfilt('move');
    fs.dance = new divvy({classname:'filter column', parent:fs});
    addfilt('dance');



    this.feh_row = new tableau.row(allies.feh);
    this.feh_row.build_items();

    this.setup_friends_table();
    this.setup_allies_table();

    sw.allies.do_select(); // start tables in collection mode

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

tableau.show_max_stats = function()
{   tableau.show_min = false;
    tableau.rebuild();
};

tableau.show_min_stats = function()
{   tableau.show_min = true;
    tableau.rebuild();
};



tableau.table = class
{
    constructor()
    {   this.div = document.createElement('div');
        this.div.className = 'table_wrapper';

        // this.title_row_div = document.createElement('div');
        // this.div.appendChild(this.title_row_div);
        this.build_title_row();

        this.contents_div = document.createElement('div');
        this.contents_div.className = 'table_contents';
        this.div.appendChild(this.contents_div);

        this.ally_list = [];
        this.rows = [];
        this.filtered_rows = [];
        this.last_sorted = null;
    }


    build_title_row ()
    {   this.title_row = new tableau.row();
        this.title_row.div.className += ' title_row ';
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

            title_div.onmousedown = function()
            {   that.flip_sort = (prop.key == that.last_sorted) ? !that.flip_sort : false;
                that.sort_rows(prop.key);
                that.last_sorted = prop.key;
            };
        });
    }

    rebuild_rows ()
    {
        this.contents_div.innerHTML = '';
        // this.rebuild_title_row();

        this.rows = [];
        for ( let i = 0;  i < this.ally_list.length;  i++)
        {   let ally = this.ally_list[i];
            this.rows.push( new tableau.row(ally) );
            this.rows[i].build_items();
        }

        this.refresh();
        
        this.sort_rows(previous_sort);

    }

    refresh ()
    {
        this.div.appendChild(this.contents_div);
        if(this == tableau.active_table) { this.hide(); }

        let rows = this.rows;
        // this.contents_div.appendChild(tableau.feh_row.div);
        for ( let i = 0;  i < rows.length;  i++)
        {   this.contents_div.appendChild(rows[i].div);
        }
        this.filter_rows();

        if ( tableau.hide_skills ) { this.hide_skill_divs(); }

        if(this == tableau.active_table) { this.show(); }

    }

    filter_rows()
    {
        for ( let key in tableau.sift.filters)
        {   let current_filter = tableau.sift.filters[key];
            if(current_filter.exclude_active) // run all active filters and hide their rows
            {   let filtered = this.rows.filter(current_filter.checkpoint,current_filter);
                for ( let i=0; i < filtered.length; i++ )
                {   tableau.hidden_div.appendChild(filtered[i].div);
                }
            }
        }

        for ( let key in tableau.sift.special_filters) // special filter done separately TODO: necessary?
        {   let current_filter = tableau.sift.special_filters[key];
            if(current_filter.exclude_active) // run all active filters and hide their rows
            {   let filtered = this.rows.filter(current_filter.checkpoint,current_filter);
                for ( let i=0; i < filtered.length; i++ )
                {   tableau.hidden_div.appendChild(filtered[i].div);
                }
            }
        }

    }

    sort_rows(property)
    {   // let reverse = (property == this.last_sorted) ? true : false;
        let reverse = this.flip_sort;
        if (tableau.check_if_reverse_sort(property)) { reverse = (this.flip_sort) ? false : true; }
        if (property == 'nature') { property = 'boon'; }

        this.rows.sort(tableau.comparison(property, reverse));

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
        // if (ally && ally.is_home()) { return 0; } // shouldn't these still be constructed?
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
            let prop = that[key];
            // let val = that.ally[key]; // property value FIXME: deprecated

            let item_div = document.createElement('div');
            that.itemdivs.push(item_div);
            that.subdivs[property.parent_div].appendChild(item_div);

            item_div.className  = " item " + key;
            item_div.className += " noselect ";

            // add info to the div.className
            switch(key)
            {
                case 'name': // limited so it knows to italicize the name
                    item_div.className += that.ally.is_limited() ? " limited " : "";
                    // if (that.ally.text) {item_div.title = that.ally.text;}
                    item_div.title = that.ally.get_description();
                    item_div.onmousedown = function(){ that.name_click(); };
                    item_div.className += " click_item noselect ";
                    if (that.ally.is_home()) { item_div.className += " strike "; }
                    item_div.className += " "+that.ally.get_colour()+" ";
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
                    item_div.title = that.ally.get_origin_text();
                    break;
                case 'rarity':
                    item_div.className += " " + 'rarity' + " ";
                    that.rarity = {};
                    that.rarity.img = document.createElement('img');
                    that.rarity.img.onerror = function(){this.src = stringy.img_feh;};
                    that.rarity.img.src = stringy.find_img_path(
                        'rarity', that.ally.get_rarity() );
                    break;
                case 'weapon_type':
                    item_div.className += " " + that.ally.get_weapon_type() + " ";
                    that.weapon_type = {};
                    that.weapon_type.img = document.createElement('img');
                    that.weapon_type.img.onerror = function(){this.src = stringy.img_feh;};
                    that.weapon_type.img.src = stringy.find_img_path(
                        'weapon', that.ally.get_weapon_type() );
                    break;
                case 'colour_type':
                    item_div.className += " " + that.ally.get_colour() + " ";
                    that.colour_type = {};
                    that.colour_type.img = document.createElement('img');
                    that.colour_type.img.onerror = function(){this.src = stringy.img_feh;};
                    that.colour_type.img.src = stringy.find_img_path(
                        'colour', that.ally.get_colour() );
                    break;
                case 'move_type':
                    item_div.className += " " + that.ally.get_move_type() + " ";
                    that.move_type = {};
                    that.move_type.img = document.createElement('img');
                    that.move_type.img.onerror = function(){this.src = stringy.img_feh;};
                    that.move_type.img.src = stringy.find_img_path(
                        'move', that.ally.get_move_type() );
                    break;
                case 'weapon':
                    if ( that.ally.is_equipped_weapon_exclusive() ) { item_div.className += " exclusive "; }
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
            let prop = that[key];
            // let val = that.ally[key];
            let item_div = that.itemdivs[index];
            let display_name = '';

            // find display name
            switch(key)
            {
                case 'name':
                    display_name = that.ally.get_name() || 'ERR_ALLY_NAME_NOT_FOUND';
                    break;
                case 'obtained':
                    display_name = that.ally.get_obtained();
                    break;
                case 'favourite':
                    display_name = that.ally.is_favourite() || "--";
                    break;
                case 'fruit':
                    display_name = that.ally.get_fruit() || "--";
                    break;
                case 'origin':
                    display_name = stringy.get_origin_display( that.ally.get_origin_text() );
                    break; // allies.properties[key][val].display;
                case 'rarity':
                case 'colour_type':
                case 'weapon_type':
                case 'move_type':
                    display_name = '';
                    break;
                case 'nature':
                    display_name = that.ally.get_nature();
                    break;
                // case 'bane':
                //     display_name = (val && val != 'neutral') ? '–'+val : "neutral";
                //     break;
                case 'rating':
                    // display_name = that.ally.get_rating();
                    // break;
                case 'hp' :
                case 'atk':     case 'spd':
                case 'def':     case 'res':
                    if( !tableau.show_min )
                    {   display_name = that.ally.get_max_stats()[key] || "--";
                    } else
                    {   display_name = that.ally.get_min_stats()[key] || "--";
                    }
                    break;
                case 'weapons':
                case 'support':
                case 'special':
                case 'passive_A':
                case 'passive_B':
                case 'passive_C':
                    display_name = that.ally.get_equipped_skill_name(key)
                        ? that.ally.get_equipped_skill_name(key) : "--";
                    if (that.ally.get_equipped_skill_effect(key))
                    {   item_div.title = that.ally.get_equipped_skill_effect(key);
                    }
                    break;
                default:
                    console.log("ERR_PROPERTY_KEY_NOT_FOUND",key);
                    display_name = key || "--";
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

            if (prop && prop.img) { item_div.appendChild(prop.img); }

        });
    } // end refresh_items

    name_click (item)
    {   alter.select_ally(this.ally);
    }

    favourite_click (item)
    {   this.ally.toggle_favourite();
        refreshment();
    }

    fruit_click (item)
    {   this.ally.goto_next_fruit();
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

    let c = a.ally.get_sort_properties()[property];
    let d = b.ally.get_sort_properties()[property];

    if (isNaN(c - d) && property.includes('type'))
    {   c = tableau.sort_properties[property].sort_array.indexOf(a.ally.get_sort_properties()[property]);
        d = tableau.sort_properties[property].sort_array.indexOf(b.ally.get_sort_properties()[property]);
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
    let e = a.ally.get_catalog_index();
    let f = a.ally.get_catalog_index();
    return (e - f);
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
    {   tiebreaker : [ 'name', 'subname', 'rarity', 'obtained' ],
    }, // proximity to main character? // now by catalog index

    rarity :
    {   tiebreaker : [ 'colour_type', 'weapon_type', 'move_type', 'origin', 'obtained' ],
        reverse : true
    },

    colour_type :
    {   tiebreaker : [ 'rarity', 'weapon_type', 'move_type', 'origin', 'obtained' ],
        sort_array : [ 'red', 'blue', 'green', 'colorless' ],
    },

    weapon_type :
    {   tiebreaker : [ 'colour_type', 'rarity', 'move_type', 'origin', 'obtained' ],
        sort_array :
        [   'sword', 'lance', 'axe', 'bow', 'dagger',
            'red_tome', 'blue_tome', 'green_tome', 'staff',
            'red_dragonstone', 'blue_dragonstone', 'green_dragonstone'
        ],
    },

    move_type :
    {   tiebreaker : [ 'rarity', 'colour_type', 'weapon_type', 'origin', 'obtained' ],
        sort_array : [ 'infantry', 'armor', 'cavalry', 'flying' ]
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


class sifter extends checky // handles filter
{   constructor(params)
    {   // params = { property: type, value: violet }
        super({default:params.default, classname: 'filter'});

        this.property   = params.property;
        this.value      = params.value;
        this.tag        = params.tag;
        this.collection = params.collection;

        if (!params.special)
        {   this.img = document.createElement('img');
            this.img.onerror = function(){this.src = stringy.img_feh;};
            this.img.src = stringy.find_img_path(this.property,this.value);
            this.img.className = 'icon';
            this.div.className += ' icon';
            this.label.appendChild(this.img);
        }
        else
        {   if(params.label) { this.label.appendChild(document.createTextNode(params.label)); }
            else {this.label.appendChild(document.createTextNode(this.tag));}
            if(!params.special) { this.div.className += ' text'; }
        }

        this.exclude_active = !this.is_ticked();

        this.subfilters = [];
        if (params.sup)
        {   let sup = params.sup;
            if (tableau.sift.superfilters[sup])
                { this.supfilter = tableau.sift.superfilters[sup]; }
            else{ this.supfilter = tableau.sift.dummy_filters[sup]; }
            this.supfilter.add_subfilter(this);
        }

        this.special = params.special;
    }

    handle_click()
    {
        // why are filters so depressing
        this.refresh();
        tableau.sift.refresh();

        tableau.active_table.refresh();
    }

    add_subfilter(sub) { this.subfilters[sub.tag] = sub; }

    checkpoint(row)
    {   let properties = row.ally.get_sort_properties();

        // special case, accept rarities 3, 2, 1 for "rarity 3"
        if(this.property == 'rarity' && this.value == 321) { return (properties.rarity <= 3); }

        return (properties[this.property] == this.value);
    }

    enable()
    {   this.checkbox.disabled = false;
        this.exclude_active = !this.is_ticked();
    }

    disable()
    {   this.checkbox.disabled = true;
        this.exclude_active = false;
    }

    refresh()
    {
        if (!tableau.is_collection_active() && this.collection)
        {   // do not show favourite or rarity in generic allies list
            this.tick();
            this.disable();
            return;
        }
        if (this.supfilter && this.supfilter.exclude_active)
        {   // no need to run subfilters if superfilter active
            this.disable();
            return;
        }

        this.enable(); return;
    }
}

class dummy_sifter extends divvy
{
    constructor()
    {   super({classname:'checky'});
        this.subfilters = [];
    }

    add_subfilter(sub) { this.subfilters[sub.tag] = sub; }
}


class tableau_filter_handler // tableau.sift
{

    constructor()
    {   // external must call construct_filters
    }

    construct_filters()
    {
        this.filters = {};

        this.superfilters =
        {
            red   : new sifter({ tag:'red',   property:'colour_type', value:'red',   default:true }),
            blue  : new sifter({ tag:'blue',  property:'colour_type', value:'blue',  default:true }),
            green : new sifter({ tag:'green', property:'colour_type', value:'green', default:true }),
            colorless  : new sifter({ tag:'colorless',  property:'colour_type', value:'colorless',default:true }),
        };

        this.special_filters =
        {
            home  : new sifter({ tag:'home', property:'home', value:true, default:false, special:true, label:'sent home' }),
        };

        this.dummy_filters = // containers (for subfilters) that are not filters themselves
        {
            fav : new dummy_sifter(),
            rar : new dummy_sifter(),
            move : new dummy_sifter(),
            dance : new dummy_sifter(),
        };

        this.subfilters = // subfilters must wait for their superfilter to exist
        {
            favourite : new sifter({ property:'favourite', value:'❤',  default:true, tag:'favourite',  sup:'fav', collection:true}),
            unfavourite:new sifter({ property:'favourite', value:false,default:true, tag:'unfavourite',sup:'fav', collection:true}),

            rarity5 :   new sifter({ property:'rarity',    value:5,   default:true, tag:'rarity5',    sup:'rar', collection:true}),
            rarity4 :   new sifter({ property:'rarity',    value:4,   default:true, tag:'rarity4',    sup:'rar', collection:true}),
            rarity321 : new sifter({ property:'rarity',    value:321, default:true, tag:'rarity321',  sup:'rar', collection:true}),

            sword : new sifter({ property:'weapon_type', value:'red_sword',       default:true, tag:'red_sword',        sup:'red'}),
            lance : new sifter({ property:'weapon_type', value:'blue_lance',      default:true, tag:'blue_lance',       sup:'blue'}),
            axe   : new sifter({ property:'weapon_type', value:'green_axe',       default:true, tag:'green_axe',        sup:'green'}),
            bow   : new sifter({ property:'weapon_type', value:'colorless_bow',   default:true, tag:'colorless_bow',    sup:'colorless'}),
            dagger: new sifter({ property:'weapon_type', value:'colorless_dagger',default:true, tag:'colorless_dagger', sup:'colorless'}),

            red_tome   : new sifter({ property:'weapon_type', value:'red_tome',   default:true, tag:'red_tome',   sup:'red'}),
            blue_tome  : new sifter({ property:'weapon_type', value:'blue_tome',  default:true, tag:'blue_tome',  sup:'blue'}),
            green_tome : new sifter({ property:'weapon_type', value:'green_tome', default:true, tag:'green_tome', sup:'green'}),
            staff      : new sifter({ property:'weapon_type', value:'colorless_staff',default:true,tag:'colorless_staff',sup:'colorless'}),

            dragon_red   : new sifter({ property:'weapon_type', value:'red_dragonstone',   default:true, tag:'dragon_red',   sup:'red'}),
            dragon_blue  : new sifter({ property:'weapon_type', value:'blue_dragonstone',  default:true, tag:'dragon_blue',  sup:'blue'}),
            dragon_green : new sifter({ property:'weapon_type', value:'green_dragonstone', default:true, tag:'dragon_green', sup:'green'}),

            infantry : new sifter({ property:'move_type', value:'infantry', default:true, tag:'infantry', sup:'move'}),
            armored  : new sifter({ property:'move_type', value:'armored',  default:true, tag:'armored',  sup:'move'}),
            cavalry  : new sifter({ property:'move_type', value:'cavalry',  default:true, tag:'cavalry',  sup:'move'}),
            flying   : new sifter({ property:'move_type', value:'flying',   default:true, tag:'flying',   sup:'move'}),

            dancer : new sifter({ property:'is_dancer', value:true, default:true, tag:'dancer', sup:'dance', special:true, label:'dancer' }),
            not_dancer : new sifter({ property:'is_dancer', value:false, default:true, tag:'not_dancer', sup:'dance', special:true, label:'not dancer' }),
        };

        // put the filters in a list
        for ( let key in this.superfilters )
        {   this.filters[key] = this.superfilters[key];
        }
        for ( let key in this.subfilters )
        {   this.filters[key] = this.subfilters[key];
        }

    } // end constructor

    tick_all()
    {   for ( let key in this.filters)
        {   let current_filter = this.filters[key];
            current_filter.tick();
            current_filter.refresh();
        }
        this.refresh();
        tableau.active_table.refresh();
    }

    untick_weapons()
    {   for ( let key in this.subfilters)
        {   let current_filter = this.filters[key];
            if( current_filter.property == 'weapon_type' )
            {   current_filter.untick();
                current_filter.refresh();
            }
        }
        this.refresh();
        tableau.active_table.refresh();
    }

    untick_move()
    {   for ( let key in this.subfilters)
        {   let current_filter = this.filters[key];
            if( current_filter.property == 'move_type' )
            {   current_filter.untick();
                current_filter.refresh();
            }
        }
        this.refresh();
        tableau.active_table.refresh();
    }

    refresh()
    {   for ( let key in this.filters)
        {   let current_filter = this.filters[key];
            current_filter.refresh();
        }
    }

} // end tableau_filter_handler
