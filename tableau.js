
let tableau =
{
    table_output_div : document.getElementById('table_output_div'),

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
        this.allies_table.hide();

        this.friends_table.show();
        adder.show();
        porter.show();

        this.active_table = this.friends_table;
    },

    activate_allies_table()
    {
        this.friends_table.hide();
        adder.hide();
        porter.hide();

        this.allies_table.show();

        this.active_table = this.allies_table;
    },

    add_feh_row()
    {   this.friends_table.div.appendChild(tableau.feh_row.div);
    },

    refresh()
    {   this.friends_table.refresh();
        this.allies_table.refresh();
    },

};


tableau.setup = function tableau_setup()
{
    this.table_output_div.innerHTML = '';
    this.table_setting = new divvy({id:'table_setting', parent:this.table_output_div});


    // clicks to switch between collection and allies
    this.table_setting.switch = new divvy({ classname:'inner', parent:this.table_setting });

    this.table_setting.switch.add_squiggly();
    this.activate_friends_select = new divvy(
        {   innertext: "collection",
            classname: 'clickables',
            parent: this.table_setting.switch.div,
        });
    this.table_setting.switch.add_squiggly();

    this.table_setting.switch.add_linebreak();

    this.table_setting.switch.add_squiggly();
    this.activate_allies_select = new divvy(
        {   innertext: "all allies",
            classname: 'clickables',
            parent: this.table_setting.switch.div
        });
    this.table_setting.switch.add_squiggly();

    this.activate_friends_select.div.onmousedown = function()
    {   tableau.activate_friends_table();
        tableau.activate_friends_select.underline();
        tableau.activate_allies_select.dont_underline();
    };
    this.activate_allies_select.div.onmousedown = function()
    {   tableau.activate_allies_table();
        tableau.activate_allies_select.underline();
        tableau.activate_friends_select.dont_underline();
    };




    this.table_setting.add_divider();


    // ticks
    this.table_setting.ticks = new divvy({classname:'inner', parent:this.table_setting.div});
    this.skill_tick = new checky(
        {   default:true,
            label:"show skills",
            parent:this.table_setting.ticks.div
        });
    this.skill_tick.handle_click = function()
    {   if (tableau.skill_tick.checkbox.checked === true)
        {      tableau.show_skill_divs(); }
        else { tableau.hide_skill_divs(); }
    };

    this.table_setting.ticks.add_linebreak();
    this.table_setting.ticks.append(this.subsifters.basic.home.div);


    this.table_setting.add_divider();


    // filters
    this.table_setting.filters = new divvy({id:'table_setting_filters', classname:'inner', parent:this.table_setting.div});


    for(let key in this.filters)
    {   let filter = this.filters[key];
        this.table_setting.filters.append(filter.div);
    }





    this.setup_friends_table();
    this.setup_allies_table();

    this.activate_friends_table();
    this.activate_friends_select.underline();

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
        this.div.innerHTML = '';
        this.rebuild_title_row();

        this.rows = [];
        for ( let i = 0;  i < this.ally_list.length;  i++)
        {   let ally = this.ally_list[i];
            this.rows.push( new tableau.row(ally) );
            this.rows[i].build_items();
            // hide allies that have gone home TODO: MAKE A FILTER FOR THIS INSTEAD
            // if (ally.is_home()) { this.rows[i].div.style.display = 'none'; }
        }

        this.refresh();
        let previous_sort = this.last_sorted || 'obtained';
        this.last_sorted = null;
        this.sort_rows(previous_sort);

    }

    refresh ()
    {
        let rows = this.rows;
        for ( let i = 0;  i < rows.length;  i++)
        {   this.div.appendChild(rows[i].div);
        }
        this.filter_rows();

        if ( tableau.hide_skills ) { this.hide_skill_divs(); }

    }

    filter_rows()
    {
        for ( let key in tableau.filters)
        {   let filter = tableau.filters[key];
            this.do_filter(filter);
        }
        for ( let key in tableau.subfilters)
        {   let subfilter = tableau.subfilters[key];
            this.do_filter(subfilter);
        }
    }

    do_filter(filter)
    {
        if(filter.active)
        {   let filtered = this.rows.filter(filter.checkpoint,filter);
            for ( let i=0; i < filtered.length; i++ )
            {   document.getElementById('hidden_div').appendChild(filtered[i].div);
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
    {   if (tableau.active_table == tableau.friends_table)
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


class sifter extends checky
{   constructor(params)
    {   // params = { property: type, value: violet }
        super({default:params.default});

        this.property = params.property;
        this.value = params.value;
        this.tag = params.tag;

        if (this.property.includes('type'))
        {   this.img = document.createElement('img');
            this.img.onerror = function(){this.src = stringy.img_feh;};
            this.img.src = stringy.find_img_path(this.property,this.tag);
            this.label.appendChild(this.img);
            this.label.className += ' icon ';
        }
        else
        {   if(params.label) { this.label.appendChild(document.createTextNode(params.label)); }
            else {this.label.appendChild(document.createTextNode(this.tag));}
        }

        this.default = params.default;
        this.active = !this.checkbox.checked;

        this.subfilters = [];
        if (params.super) { this.superfilter = tableau.filters[params.super]; }
        if(this.superfilter) { this.superfilter.add_subfilter(this); }
    }

    handle_click()
    {   this.active = !this.checkbox.checked; // if the type is shown, then the filter is inactive
        if (this.active) // no need to run subfilters if active
        {   for(let key in this.subfilters)
            {   let sub = this.subfilters[key];
                sub.active = false;
                sub.checkbox.disabled = true;
            }
        }
        else
        {   for(let key in this.subfilters)
            {   let sub = this.subfilters[key];
                sub.active = !sub.checkbox.checked;
                sub.checkbox.disabled = false;
            }
        }
        tableau.active_table.refresh();
    }

    add_subfilter(sub)
    {   this.div.appendChild(document.createElement('br'));
        this.div.appendChild(sub.div);
        this.subfilters[sub.tag] = sub;
    }

    checkpoint(row)
    {   let ally = row.ally;
        return (ally[this.property] === this.value);
    }
}

tableau.filters = {};

tableau.sifters =
{
    basic :
    {
     // favourite : new sifter({ tag:'favourite', label:'💔', property:'favourite', value:null, default:true})
    },
    weapon :
    {
        red   : new sifter({ tag:'red',   property:'colour_type', value:'red',   default:true }),
        blue  : new sifter({ tag:'blue',  property:'colour_type', value:'blue',  default:true, }),
        green : new sifter({ tag:'green', property:'colour_type', value:'green', default:true, }),
        grey  : new sifter({ tag:'grey',  property:'colour_type', value:'grey',  default:true, }),
    }
};
for ( let group in tableau.sifters)
{   for ( let key in tableau.sifters[group] )
    {   tableau.filters[key] = tableau.sifters[group][key];
    }
}
tableau.filters.dummy_move_filter =
{   div : document.createElement('div'),
    subfilters: [],
    add_subfilter(sub)
    {   if(Object.keys(this.subfilters).length === 0)
        {   this.div.className = 'checky'; }
        else { this.div.appendChild(document.createElement('br'));}
        this.div.appendChild(sub.div);
        this.subfilters[sub.tag] = sub;
    }
};

tableau.subfilters = {};

tableau.subsifters =
{
    basic :
    {
        home  : new sifter({ tag:'home', label:'sent home', property:'home', value:true, default:false}),
    },

    weapon :
    {
        sword : new sifter({ property:'weapon_type', value:'sword', default:true, tag:'sword', super:'red'}),
        lance : new sifter({ property:'weapon_type', value:'lance', default:true, tag:'lance', super:'blue'}),
        axe   : new sifter({ property:'weapon_type', value:'axe',   default:true, tag:'axe',   super:'green'}),
        bow   : new sifter({ property:'weapon_type', value:'bow',   default:true, tag:'bow',   super:'grey'}),
        dagger: new sifter({ property:'weapon_type', value:'dagger',default:true, tag:'dagger',super:'grey'}),

        tome_red   : new sifter({ property:'weapon_type', value:'tome_red',   default:true, tag:'tome_red',   super:'red'}),
        tome_blue  : new sifter({ property:'weapon_type', value:'tome_blue',  default:true, tag:'tome_blue',  super:'blue'}),
        tome_green : new sifter({ property:'weapon_type', value:'tome_green', default:true, tag:'tome_green', super:'green'}),
        staff      : new sifter({ property:'weapon_type', value:'staff',      default:true, tag:'staff',      super:'grey'}),

        dragon_red   : new sifter({ property:'weapon_type', value:'dragon_red',   default:true, tag:'dragon_red',   super:'red'}),
        dragon_blue  : new sifter({ property:'weapon_type', value:'dragon_blue',  default:true, tag:'dragon_blue',  super:'blue'}),
        dragon_green : new sifter({ property:'weapon_type', value:'dragon_green', default:true, tag:'dragon_green', super:'green'}),
    },

    move :
    {
        infantry : new sifter({ property:'move_type', value:'infantry', default:true, tag:'infantry', super:'dummy_move_filter'}),
        armor    : new sifter({ property:'move_type', value:'armor',    default:true, tag:'armor',    super:'dummy_move_filter'}),
        cavalry  : new sifter({ property:'move_type', value:'cavalry',  default:true, tag:'cavalry',  super:'dummy_move_filter'}),
        flyer    : new sifter({ property:'move_type', value:'flyer',    default:true, tag:'flyer',    super:'dummy_move_filter'}),
    }
};
for ( let group in tableau.subsifters)
{   for ( let key in tableau.subsifters[group] )
    {   tableau.subfilters[key] = tableau.subsifters[group][key];
    }
}
