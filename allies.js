
// allies.js
// handles ally functions
// see chars.js for character databse


let allies =
{
    check_dragon(ally)
    {   let dragons = [ 'dragon_red', 'dragon_blue', 'dragon_green' ];
        if ( dragons.indexOf(ally.weapon_type) != -1 ) { return true; }
        else {return false; }
    },

    check_melee(ally)
    {   let melee = [   'sword', 'lance', 'axe', 'cheese',
                        'dragon_red', 'dragon_blue', 'dragon_green'];
        if ( melee.indexOf(ally.weapon_type) != -1) { return true; }
        else { return false; }
    },

    check_ranged(ally)
    {   let ranged = [ 'bow', 'dagger', 'tome_red', 'tome_blue', 'tome_green', 'staff',];
        if ( ranged.indexOf(ally.weapon_type) != -1) { return true; }
        else { return false; }
    },

    check_colourless(ally)
    {   let shades = ['colourless','colorless','grey','gray','clear'];
        if ( shades.indexOf(ally.weapon_type) != -1) { return true; }
        else { return false; }
    },

};

allies.setup = function allies_setup()
{
    for ( let key in chars )
    {   allies.list.push(new chars[key]());
        allies.tags.push(key);
    }

    allies.list.forEach(function setup_ally(ally)
    {   ally.set_rarity(5);
        ally.rebuild();
    });

    allies.feh = new feh();
};

// allies.list = [];

// allies.constructors = {};

// see end of chars.js
allies.list = [];
allies.tags = [];
allies.growths =
        [   [ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11 ], // possible gp
            [ 6,  8,  9, 11, 13, 14, 16, 18, 19, 21, 23, 24 ], // rarity 1
            [ 7,  8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 26 ], // rarity 2
            [ 7,  9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29 ], // rarity 3
            [ 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 31 ], // rarity 4
            [ 8, 10, 13, 15, 17, 19, 22, 24, 26, 28, 30, 33 ]  // rarity 5
        ];



allies.skills = ['weapons','assists','specials','passive_a','passive_b','passive_c'];


allies.ally = class ally
{

    constructor()
    {
        this.rarity = 5; // default
        this.skills =
        {   weapons : [], assists : [], specials : [],
            passive_a:[], passive_b:[], passive_c: []
        };
        this.inherited_skills =
        {   weapons : [], assists : [], specials : [],
            passive_a:[], passive_b:[], passive_c: []
        };
    }


    assign_max_stats ()
    {
        let stats = this.return_max_stats();
        for ( let key in stats )
        {   this[key] = stats[key];
        }

        this.rating = this.hp + this.atk + this.spd + this.def + this.res;
    }

    return_max_stats(rarity = this.rarity)
    {
        let growths = allies.growths;

        let stats = {};
        for (let stat in this.base_stats[rarity])
        {   let min = this.base_stats[rarity][stat]; // value at level 1
            let gp = this.growth_points[stat];
            if (this.summon)
            {   if (stat == this.boon) { min++; gp++; }
                if (stat == this.bane) { min--; gp--; }
            }
            let max =  min + growths[rarity][gp];
            stats[stat] = max;
        }

        return stats;

    }

    assign_min_stats ()
    {
        let stats = this.return_min_stats();
        for ( let key in stats )
        {   this[key] = stats[key];
        }
    }

    return_min_stats (rarity = this.rarity)
    {
        let stats = {};
        for (let stat in this.base_stats[rarity])
        {   let min = this.base_stats[rarity][stat];
            if (this.summon) // ignore boon/bane on special map allies
            {   if (stat == this.boon) { min++; }
                if (stat == this.bane) { min--; }
            }
            this[stat] = min;
        }

        return stats;
    }


    rebuild_skills ()
    {
        this.skills =
        {   weapons : [], assists : [], specials : [],
            passive_a:[], passive_b:[], passive_c: []
        };

        for (let key in this.base_skills) // find all base skills
        {   if (!this.base_skills[key]) { continue; }
            let c = this.base_skills[key]; // base skill chain
            let chain = []; // skill chain (to be) arranged by rarity
            if ( this.weapon_type == 'staff' )
            {
                switch(key)
                {   case 'weapons':
                        chain = [ null, c[0], null, c[1], null, null ]; break;
                    case 'assists':
                        chain = [ null, c[0], c[1], null, c[2], null ]; break;
                    case 'specials':
                        chain = [ null, null, c[0], c[1], null, null ]; break;
                    case this.early_passive:
                        chain = [ null, c[0], c[1], null, c[2], null ]; break;
                    case this.late_passive:
                        chain = [ null, null, null, c[0], c[1], c[2] ]; break;
                    default:
                        chain = [ null, c[0], c[1], c[2], null, null ]; break;
                }
            }
            else
            {
                switch(key)
                {   case 'weapons':
                        chain = [ null, c[0], c[1], c[2], null, c[3] ]; break;
                    case 'assists':
                        chain = [ null, null, null, c[0], null, null ]; break;
                    case 'specials':
                        chain = [ null, null, null, c[0], c[1], c[2] ]; break;
                    case this.special_passive: // such as iotes_shield
                        chain = [ null, null, null, null, c[0], null ]; break;
                    case this.single_passive: // such as iotes_shield
                        chain = [ null, null, null, c[0], null, null ]; break;
                    case this.odd_passive: // xander's passive a breaks the rules
                        chain = [ null, c[0], c[1], null, null, c[2] ]; break;
                    case this.early_passive:
                        chain = [ null, c[0], c[1], null, c[2], null ]; break;
                    case this.late_passive:
                        chain = [ null, null, null, c[0], c[1], c[2] ]; break;
                    default:
                        chain = [ null, c[0], c[1], c[2], null, null ]; break;
                }
            }

            for( let i = 1; i <= this.rarity; i++ )
            {   let skill = chain[i];
                if( skill // do not add null skills
                 && this.skills[key].indexOf(skill) < 0) // do not add if already there
                {
                    this.skills[key].push(skill);
                }
            }
        }
    }


    assign_skills ()
    {   // slice(-1).pop() last element of array
        this.weapon    = this.skills.weapons.slice(-1).pop()    || null;
        this.assist    = this.skills.assists.slice(-1).pop()    || null;
        this.special   = this.skills.specials.slice(-1).pop()   || null;
        this.passive_a = this.skills.passive_a.slice(-1).pop() || null;
        this.passive_b = this.skills.passive_b.slice(-1).pop() || null;
        this.passive_c = this.skills.passive_c.slice(-1).pop() || null;
    }


    assign_final_base_skills ()
    {   // slice(-1).pop() last element of array
        this.weapon    = this.base_skills.weapons.slice(-1).pop()    || null;
        this.assist    = this.base_skills.assists.slice(-1).pop()    || null;
        this.special   = this.base_skills.specials.slice(-1).pop()   || null;
        this.passive_a = this.base_skills.passive_a.slice(-1).pop() || null;
        this.passive_b = this.base_skills.passive_b.slice(-1).pop() || null;
        this.passive_c = this.base_skills.passive_c.slice(-1).pop() || null;
    }


    rebuild ()
    {
        if (this.colour_type == 'colourless') { this.colour_type = 'grey'; }
        if (this.summon === false) { this.boon = null; this.bane = null; }

        this.assign_max_stats();
        this.rebuild_skills();
        this.assign_skills();

    }


    set_rarity (r)
    {
        r = stringy.interpret_rarity(r);
     // if(isNaN(r)) { r = this.minimum_rarity };
        r = Math.max(r||null, this.minimum_rarity);
        r = Math.min(r, 5);
        this.rarity = r;
        this.rebuild(); // should it be called automatically?
    }
    return_rarity() { return this.rarity; }
    return_rarity_stars() { return stringy.rar_num_to_star(this.rarity); }

    toggle_favourite () { this.favourite = (!this.favourite) ? '❤' : null ; }

    cycle_fruit () { this.fruit = friends.next_fruit(this.fruit); }

    return_name() { return this.name; }
    set_favourite(fav) { this.favourite = fav; }
    set_fruit(fruit) { this.fruit = fruit; }
    return_fruit()
    {   let fruit = this.fruit;
        if (fruit) { return fruit; } else { return ''; }
    }

    return_colour() { return this.colour_type; }

    set_boon(boon) { this.boon = stringy.interpret_stat(boon); }
    set_bane(bane) { this.bane = stringy.interpret_stat(bane); }

    set_nature(boon, bane)
    {   if( boon == 'neutral' || bane == 'neutral' )
        {   this.set_boon('neutral');
            this.set_bane('netural');
        }
        else
        {   this.set_boon(boon);
            this.set_bane(bane);
        }
        this.assign_max_stats();
    }

    return_nature() { return stringy.display_nature(this.boon, this.bane); }

    return_skills() { return this.skills; }

    return_base_skills() { return this.base_skills; }

    return_final_base_skills()
    {   let best_base_skills = {};
        best_base_skills.weapons   = this.base_skills.weapons.slice(-1).pop()    || null;
        best_base_skills.assists   = this.base_skills.assists.slice(-1).pop()    || null;
        best_base_skills.specials  = this.base_skills.specials.slice(-1).pop()   || null;
        best_base_skills.passive_a = this.base_skills.passive_a.slice(-1).pop() || null;
        best_base_skills.passive_b = this.base_skills.passive_b.slice(-1).pop() || null;
        best_base_skills.passive_c = this.base_skills.passive_c.slice(-1).pop() || null;
        return best_base_skills;
    }

    get_base_weapon_might()
    {   let c = this.base_skills.weapons;
        let chain = [];
        if (this.weapon_type == 'staff')
        {   return 0; // staff users NEVER have a weapon by default
        }
        else // weapon summon defaults, NOT unlocks
        {   chain = [ null, c[0], null, c[1], c[2], c[3] ];
            if (!dat.weapons[chain[5]]) { return "?"; }
        }

        let current_weapon;
        for ( let r=this.rarity; r>0; r-- )
        {   if (dat.weapons[chain[r]])
            {   current_weapon = dat.weapons[chain[r]];
                break;
            }
            else { continue; }
        }
        return current_weapon.might;
    }

    send_home()
    {   if (this.origin !== 0)
        {   this.home = true;
            refreshment();
        }
    }

    undo_send_home()
    {   this.home = false;
        refreshment();
    }

    is_home()
    {   return this.home;
    }

    inherit_skill(skill, type)
    {
        if(type) { this.inherited_skills[type].push(dat[type][skill]); }
        else
        {   for ( let key in dat )
            {   if (dat[key][skill])
                {   this.inherited_skills[key].push(dat[key][skill]);
                }
            }
        }
    }

};


allies.calculate_growths = function (arrg, arrb)
{   let grow5 = [ 8, 10, 13, 15, 17, 19, 22, 24, 26, 28, 30, 33 ];
    console.log( 'total max', arrg[0]+arrg[1]+arrg[2]+arrg[3]+arrg[4] );
    console.log(  'hp', grow5.indexOf(arrg[0]-arrb[0]));
    console.log( 'atk', grow5.indexOf(arrg[1]-arrb[1]));
    console.log( 'spd', grow5.indexOf(arrg[2]-arrb[2]));
    console.log( 'def', grow5.indexOf(arrg[3]-arrb[3]));
    console.log( 'res', grow5.indexOf(arrg[4]-arrb[4]));
};




  /************************************************************\


chars.character = class character extends allies.ally
{   constructor()
    {   super();
        this.tag = 'character';
        this.name = "Characcter";
        this.title = "title";
        this.text = "thelongdescriptiontextnotthetitle";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = #;
        this.minimum_rarity = #;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 10;
        this.base_stats =
        {   1 : null,
            2 : { hp: 17, atk: 6, spd: 9, def: 3, res: 4 },
            3 : { hp: 18, atk: 6, spd: 9, def: 4, res: 5 },
            4 : { hp: 18, atk: 7, spd: 0, def: 4, res: 5 },
            5 : { hp: 19, atk: 7, spd: 0, def: 5, res: 6 },
        };
        this.growth_points =
                { hp:  6, atk: 6, spd: 9, def: 4, res: 6 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'silver_axe', 'axenoatun' ],
            assists   : [ null ],
            specials  : [ 'night_sky', 'astra' ],
            passive_a : [ null ],
            passive_b : [ 'vantage_1', 'vantage_2', 'vantage_3' ],
            passive_c : [ 'spur_res_1', 'spur_res_2', 'spur_res_3' ]
        };
        this.early_passive = 'passive_x';
        this.late_passive =  'passive_x';
    }
};




chars.next


  \************************************************************/


let dat = {};
