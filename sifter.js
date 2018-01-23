


class sifter // handles filter
{   constructor(params)
    {   // params = { property: type, value: violet }
        this.tick = new checky({default:params.default, classname: 'filter'});

        this.property   = params.property;
        this.value      = params.value;
        this.tag        = params.tag;
        this.collection = params.collection;

        if (!params.special)
        {   this.tick.img = document.createElement('img');
            this.tick.img.onerror = function(){this.src = stringy.img_error;};
            this.tick.img.src = stringy.find_img_path( this.property, this.value );
            this.tick.img.className = 'icon';
            this.tick.div.className += ' icon';
            this.tick.label.appendChild(this.tick.img);
        }
        else
        {   if(params.label) { this.tick.label.appendChild(document.createTextNode(params.label)); }
            else {this.tick.label.appendChild(document.createTextNode(this.tag));}
            if(!params.special) { this.tick.div.className += ' text'; }
        }

        this.exclude_active = !this.tick.is_ticked();

        this.subfilters = [];
        if (params.sup)
        {   let sup = params.sup;
            if (tableau.sift.superfilters[sup])
                { this.supfilter = tableau.sift.superfilters[sup]; }
            else{ this.supfilter = tableau.sift.dummy_filters[sup]; }
            this.supfilter.add_subfilter(this);
        }

        this.special = params.special;
        let that = this;
        this.tick.handle_click = this.handle_tick_click;
    }

    handle_tick_click()
    {
        // why are filters so depressing
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
    {   this.tick.checkbox.disabled = false;
        this.exclude_active = !this.tick.is_ticked();
    }

    disable()
    {   this.tick.checkbox.disabled = true;
        this.exclude_active = false;
    }

    refresh()
    {
        if (!tableau.is_collection_active() && this.collection)
        {   // do not show favourite or rarity in generic allies list
            this.tick.tick();
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

class dummy_sifter
{
    constructor()
    {   this.tick = new divvy({classname:'checky'});
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
            current_filter.tick.tick();
            current_filter.refresh();
        }
        this.refresh();
        tableau.active_table.refresh();
    }

    untick_weapons()
    {   for ( let key in this.subfilters)
        {   let current_filter = this.filters[key];
            if( current_filter.property == 'weapon_type' )
            {   current_filter.tick.untick();
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
            {   current_filter.tick.untick();
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

}
