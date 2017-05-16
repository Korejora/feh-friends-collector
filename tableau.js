
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

    active_table : this.allies_table,

    activate_friends_table()
    {
        this.active_table = this.friends_table;
        refreshment();
        alter.reset_ally();

        this.allies_table.hide();

        for ( let key in this.collection_filters)
        {   let current_filter = this.collection_filters[key];
            current_filter.enable();
        }

        this.friends_table.refresh();
        this.friends_table.show();
        adder.show();
        porter.show();

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

        if(this.sift.include === false && tableau.collection_filters[this.sift.isolate.tag])
        {   this.sift.isolate.checkbox.checked = false;
            this.sift.isolate = null;
        }
        for ( let key in this.collection_filters)
        {   let current_filter = this.collection_filters[key];
            current_filter.disable();
        }

        tableau.active_table.refresh();
    },

    add_feh_row()
    {   this.friends_table.div.appendChild(tableau.feh_row.div);
    },

    refresh()
    {   this.friends_table.refresh();
        this.allies_table.refresh();
    },

    rebuild()
    {   this.friends_table.rebuild_rows();
        // should never be necessary to rebuild allies table
    },

    is_collection_active()
    {   if (this.active_table == this.friends_table) { return true; }
        else { return false; }
    }

};


tableau.setup = function tableau_setup()
{
    this.table_output_div.innerHTML = '';
    this.table_setting = new divvy({id:'table_setting', parent:this.table_output_div});
    let sets = this.table_setting;


    // clicks to switch between collection and allies
    sets.switch = new divvy({ classname:'inner', parent:sets });

    sets.switch.add_squiggly();
    sets.switch.friends = new selectdiv({ innertext:"collection", parent:sets.switch.div });
    sets.switch.add_squiggly();

    sets.switch.add_linebreak();

    sets.switch.add_squiggly();
    sets.switch.allies = new selectdiv({ innertext:"all allies", parent:sets.switch.div });
    sets.switch.add_squiggly();
    sets.switch.add_linebreak(); // necessary to align line proeprly

    // FIXME
    sets.switch.friends.call_deselection = function() {sets.switch.allies.do_deselect();};
    sets.switch.friends.activate = function(){ tableau.activate_friends_table(); };
    sets.switch.allies.call_deselection = function() { sets.switch.friends.do_deselect(); };
    sets.switch.allies.activate = function(){ tableau.activate_allies_table(); };


    sets.add_divider();


    // ticks
    sets.ticks = new divvy({classname:'inner', parent:sets.div});
    sets.ticks.skill = new checky(
        {   default:true,
            label:"show skills",
            parent:sets.ticks.div
        });
    sets.ticks.skill.handle_click = function()
    {   if (sets.ticks.skill.checkbox.checked === true)
        {      tableau.show_skill_divs(); }
        else { tableau.hide_skill_divs(); }
    };

    sets.ticks.add_linebreak();
    sets.ticks.add_child(this.special_filters.home.div);


    sets.add_divider();


    // filters
    sets.filters = new divvy({id:'table_setting_filters', classname:'inner', parent:sets.div});

    sets.filters.options = new divvy({classname:'inner', parent:sets.filters});
    let fopt = sets.filters.options;
    fopt.include = new selectdiv({ innertext:"include", parent:fopt });
    fopt.include.activate = function(){ tableau.sift.activate_include_mode(); };

    fopt.add_linebreak();
    fopt.isolate = new selectdiv({ innertext:"isolate", parent:fopt });
    fopt.isolate.activate = function(){ tableau.sift.activate_isolate_mode(); };

    // FIXME: make these into selectables
    fopt.include.call_deselection = function() { fopt.isolate.do_deselect(); };
    fopt.isolate.call_deselection = function() { fopt.include.do_deselect(); };


    let addfilt = function append_filter_and_subfilters_to_appropriate_section(tag)
    {   let section = sets.filters.select[tag];
        let filter = tableau.filters[tag];
        if (!filter) { filter = tableau.dummy_filters[tag]; }
        section.add_child(filter.div);
        for ( let key in filter.subfilters )
        {   section.add_linebreak();
            section.add_child(filter.subfilters[key].div);
        }
    };

    sets.filters.select = new divvy({classname:'inner', parent:sets.filters});
    sets.filters.select.rar = new divvy({classname:'filter column', parent:sets.filters.select});
        sets.filters.select.fav = new divvy({classname:'filter', parent:sets.filters.select.rar});
        sets.filters.select.fav.add_child(tableau.subfilters.favourite.div);
        sets.filters.select.fav.add_child(tableau.subfilters.unfavourite.div);
    addfilt('rar');
    sets.filters.select.red = new divvy({classname:'filter column', parent:sets.filters.select});
    addfilt('red');
    sets.filters.select.blue = new divvy({classname:'filter column', parent:sets.filters.select});
    addfilt('blue');
    sets.filters.select.green = new divvy({classname:'filter column', parent:sets.filters.select});
    addfilt('green');
    sets.filters.select.grey = new divvy({classname:'filter column', parent:sets.filters.select});
    addfilt('grey');
    sets.filters.select.move = new divvy({classname:'filter column', parent:sets.filters.select});
    addfilt('move');

    this.filter_include = true;




    this.setup_friends_table();
    this.setup_allies_table();

 // this.activate_friends_table();
    sets.switch.friends.do_select();
    fopt.include.do_select();

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
        this.filtered_rows = [];
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
        this.hide();

        this.div.innerHTML = '';
        this.rebuild_title_row();

        this.rows = [];
        for ( let i = 0;  i < this.ally_list.length;  i++)
        {   let ally = this.ally_list[i];
            this.rows.push( new tableau.row(ally) );
            this.rows[i].build_items();
        }

        this.refresh();
        let previous_sort = this.last_sorted || 'obtained';
        this.last_sorted = null;
        this.sort_rows(previous_sort);

        this.show();

    }

    refresh ()
    {
        this.hide();

        let rows = this.rows;
        for ( let i = 0;  i < rows.length;  i++)
        {   this.div.appendChild(rows[i].div);
        }
        this.filter_rows();

        if ( tableau.hide_skills ) { this.hide_skill_divs(); }

        this.show();

    }

    filter_rows()
    {
        if (tableau.sift.include)
        {   for ( let key in tableau.filters)
            {   let current_filter = tableau.filters[key];
                if(current_filter.exclude_active) // run all active filters and hide their rows
                {   let filtered = this.rows.filter(current_filter.checkpoint,current_filter);
                    for ( let i=0; i < filtered.length; i++ )
                    {   tableau.hidden_div.appendChild(filtered[i].div);
                    }
                }
            }
        }
        else
        {   if(tableau.sift.isolate) // don't filter if there isn't a chosen filter
            {   let rows = this.rows; // hide the other rows
                for ( let i=0; i < rows.length; i++ )
                {   tableau.hidden_div.appendChild(rows[i].div);
                }
                let current_filter = tableau.sift.isolate;
                let filtered = this.rows.filter(current_filter.checkpoint,current_filter);
                for ( let i=0; i < filtered.length; i++ ) // show that filter's rows
                {   this.div.appendChild(filtered[i].div);
                }
            }

        }
        for ( let key in tableau.special_filters) // special filters are always running normally
            {   let current_filter = tableau.special_filters[key];
                if(current_filter.exclude_active) // run all active filters and hide their rows
                {   let filtered = this.rows.filter(current_filter.checkpoint,current_filter);
                    for ( let i=0; i < filtered.length; i++ )
                    {   tableau.hidden_div.appendChild(filtered[i].div);
                    }
                }
            }

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
    {   alter.select_ally(this.ally);
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


class sifter extends checky // handles filter
{   constructor(params)
    {   // params = { property: type, value: violet }
        super({default:params.default, classname: 'filter'});

        this.property = params.property;
        this.value = params.value;
        this.tag = params.tag;

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
            if (!params.special) { this.div.className += ' text'; }
        }

        this.exclude_active = !this.checkbox.checked;

        this.subfilters = [];
        if (params.sup)
        {   let sup = params.sup;
            if (tableau.filters[sup])
                { this.supfilter = tableau.filters[sup]; }
            else{ this.supfilter = tableau.dummy_filters[sup]; }
            this.supfilter.add_subfilter(this);
        }

        this.special = params.special;
    }

    handle_click()
    {
        // why are filters so depressing
        if (tableau.sift.include || tableau.special_filters[this.tag]) { this.activate_exclusion(); }
        else { this.activate_isolation(); }

        tableau.active_table.refresh();
    }

    activate_exclusion()
    {
        this.exclude_active = !this.checkbox.checked;
        if (this.exclude_active)
        {   for(let key in this.subfilters)
            {   let sub = this.subfilters[key];
                sub.disable(); // no need to run subfilters if superfilter active
            }
        }
        else
        {   for(let key in this.subfilters)
            {   let sub = this.subfilters[key];
                sub.enable();
            }
        }
    }

    activate_isolation()
    {
        tableau.sift.isolate = this;
        for ( let key in tableau.filters)
        {   if(this.subfilters[key]) { tableau.filters[key].checkbox.checked = true; }
            else { tableau.filters[key].checkbox.checked = false; }
        }
        this.checkbox.checked = true;
    }

    add_subfilter(sub) { this.subfilters[sub.tag] = sub; }

    checkpoint(row)
    {   let ally = row.ally;

        // special case, accept rarities 3, 2, 1 for "rarity 3"
        if(this.property == 'rarity' && this.value == 321) { return (ally[this.property] <= 3); }

        return (ally[this.property] == this.value);
    }

    enable()
    {   this.checkbox.disabled = false;
        this.exclude_active = !this.checkbox.checked;
    }

    disable()
    {   this.checkbox.disabled = true;
        this.exclude_active = false;
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

tableau.filters = // ALL filters are eventually included here
{
    red   : new sifter({ tag:'red',   property:'colour_type', value:'red',   default:true }),
    blue  : new sifter({ tag:'blue',  property:'colour_type', value:'blue',  default:true, }),
    green : new sifter({ tag:'green', property:'colour_type', value:'green', default:true, }),
    grey  : new sifter({ tag:'grey',  property:'colour_type', value:'grey',  default:true, }),
};

tableau.special_filters = // active even in isolate mode
{
    home  : new sifter({ tag:'home', label:'sent home', property:'home', value:true, default:false, special:true}),
};

tableau.dummy_filters = // containers (for subfilters) that are not filters themselves
{
    fav : new dummy_sifter(),
    rar : new dummy_sifter(),
    move : new dummy_sifter(),
};


tableau.subfilters = // subfilters must wait for their superfilter to exist
{
    favourite : new sifter({ property:'favourite', value:'❤', default:true, tag:'favourite', sup:'fav'}),
    unfavourite : new sifter({ property:'favourite', value:null, default:true, tag:'unfavourite', sup:'fav'}),
    rarity5 : new sifter({ property:'rarity', value:5, default:true, tag:'rarity5', sup:'rar'}),
    rarity4 : new sifter({ property:'rarity', value:4, default:true, tag:'rarity4', sup:'rar'}),
    rarity321 : new sifter({ property:'rarity', value:321, default:true, tag:'rarity321', sup:'rar'}),

    sword : new sifter({ property:'weapon_type', value:'sword', default:true, tag:'sword', sup:'red'}),
    lance : new sifter({ property:'weapon_type', value:'lance', default:true, tag:'lance', sup:'blue'}),
    axe   : new sifter({ property:'weapon_type', value:'axe',   default:true, tag:'axe',   sup:'green'}),
    bow   : new sifter({ property:'weapon_type', value:'bow',   default:true, tag:'bow',   sup:'grey'}),
    dagger: new sifter({ property:'weapon_type', value:'dagger',default:true, tag:'dagger',sup:'grey'}),

    tome_red   : new sifter({ property:'weapon_type', value:'tome_red',   default:true, tag:'tome_red',   sup:'red'}),
    tome_blue  : new sifter({ property:'weapon_type', value:'tome_blue',  default:true, tag:'tome_blue',  sup:'blue'}),
    tome_green : new sifter({ property:'weapon_type', value:'tome_green', default:true, tag:'tome_green', sup:'green'}),
    staff      : new sifter({ property:'weapon_type', value:'staff',      default:true, tag:'staff',      sup:'grey'}),

    dragon_red   : new sifter({ property:'weapon_type', value:'dragon_red',   default:true, tag:'dragon_red',   sup:'red'}),
    dragon_blue  : new sifter({ property:'weapon_type', value:'dragon_blue',  default:true, tag:'dragon_blue',  sup:'blue'}),
    dragon_green : new sifter({ property:'weapon_type', value:'dragon_green', default:true, tag:'dragon_green', sup:'green'}),

    // move is not an actual filter, just an organizational dummy
    infantry : new sifter({ property:'move_type', value:'infantry', default:true, tag:'infantry', sup:'move'}),
    armor    : new sifter({ property:'move_type', value:'armor',    default:true, tag:'armor',    sup:'move'}),
    cavalry  : new sifter({ property:'move_type', value:'cavalry',  default:true, tag:'cavalry',  sup:'move'}),
    flyer    : new sifter({ property:'move_type', value:'flyer',    default:true, tag:'flyer',    sup:'move'}),
};

for ( let key in tableau.subfilters )
{   tableau.filters[key] = tableau.subfilters[key];
}

tableau.collection_filters =
{
    favourite : tableau.subfilters.favourite,
    unfavourite : tableau.subfilters.unfavourite,
    rarity5 : tableau.subfilters.rarity5,
    rarity4 : tableau.subfilters.rarity4,
    rarity321 : tableau.subfilters.rarity321,
};

tableau.sift =
{   include : false,
    isolate : null,

    activate_include_mode()
    {   this.include = true;
        for ( let key in tableau.filters)
        {   let sifter = tableau.filters[key];
            sifter.checkbox.checked = sifter.checkbox.defaultChecked;
            sifter.activate_exclusion();
        }
        tableau.active_table.refresh();
    },

    activate_isolate_mode()
    {   this.include = false;
        this.isolate = null;
        for ( let key in tableau.filters)
        {   let sifter = tableau.filters[key];
            sifter.checkbox.checked = false;
            sifter.checkbox.disabled = false;
        }
        tableau.active_table.refresh();
    },

};
