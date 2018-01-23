
sorter = {};


sorter.comparison = function sort_comparison(property, reverse)
{   return function(a,b)
    {   let first_try = sorter.compare(a,b,property,reverse);
        if (first_try) { return first_try; }
        return sorter.cascade_tiebreaker(a,b,property);
    };
};


sorter.compare = function sort_compare(a, b, property, reverse)
{
    let x = 1; if(reverse) { x = -1; }

    let c = a.ally.get_sort_properties()[property];
    let d = b.ally.get_sort_properties()[property];

    if (isNaN(c - d) && property.includes('type'))
    {   c = sorter.properties[property].sort_array.indexOf(a.ally.get_sort_properties()[property]);
        d = sorter.properties[property].sort_array.indexOf(b.ally.get_sort_properties()[property]);
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

sorter.cascade_tiebreaker = function sort_tiebreaker(a,b, property)
{
    if (!this.properties[property]) { property = 'other'; }

    for( let i = 0; i < this.properties[property].tiebreaker.length; i++ )
    {   let prop = this.properties[property].tiebreaker[i];
        let reverse = sorter.check_if_reverse_sort(prop);

        let result = this.compare(a,b, prop, reverse);
        if (result) return result;
    }
    let e = a.ally.get_catalog_index();
    let f = a.ally.get_catalog_index();
    return (e - f);
};


sorter.properties =
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

sorter.check_if_reverse_sort = function check_if_reverse_sort(property)
{   let reverse_sorts = ['rarity','rating','hp','atk','spd','def','res','subname'];
    if ( reverse_sorts.indexOf(property) != -1 ) { return true; }
    else { return false; }
};
