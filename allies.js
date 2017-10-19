
// allies.js
// handles ally functions
// see chars.js for character databse


let allies = {};


allies.setup = function allies_setup()
{
    allies.list = [];
    allies.tags = [];

    for ( let key in chars )
    {   allies.list.push( new ally(chars[key]) );
        allies.tags.push(key);
    }

    allies.list.forEach(function setup_ally(ally)
    {   ally.set_rarity(5);
        ally.rebuild();
    });

    allies.feh = new ally(allies.feh__messenger_owl);
};


// allies.skills = ['weapons','support','special','passive_A','passive_B','passive_C'];


class ally
{

    constructor(character)
    {
        // base character setup
        let c = character;

        this.tag            = c.tag;
        this.name           = c.name;
        if (c.subname) { this.subname = c.subname; }
        this.epithet        = c.epithet;
        this.description    = c.description;
        this.origin         = c.origin;
        this.weapon_type    = c.weapon_type.toLowerCase();
        this.colour         = c.colour.toLowerCase();
        this.move_type      = c.move_type.toLowerCase();
        this.summon         = c.summon;
        this.limited        = c.limited;

        this.base_stats = {};
        for ( let i = 1; i <= 5; i++ )
        {   if (c.base_stats[i])
            {   this.base_stats[i] = {};
                this.base_stats[i].hp  = parseInt(c.base_stats[i][0]);
                this.base_stats[i].atk = parseInt(c.base_stats[i][1]);
                this.base_stats[i].spd = parseInt(c.base_stats[i][2]);
                this.base_stats[i].def = parseInt(c.base_stats[i][3]);
                this.base_stats[i].res = parseInt(c.base_stats[i][4]);
            }
        }
        this.growth_points     = {};
            this.growth_points.hp  = parseInt(c.growth_points[0]);
            this.growth_points.atk = parseInt(c.growth_points[1]);
            this.growth_points.spd = parseInt(c.growth_points[2]);
            this.growth_points.def = parseInt(c.growth_points[3]);
            this.growth_points.res = parseInt(c.growth_points[4]);

        this.base_skills = {};

        this.base_skills.weapons = [];
        for ( let i = 0; i < c.base_weapons.length; i++)
        {   this.base_skills.weapons[i] = {};
            this.base_skills.weapons[i] = this.base_skills.weapons[i];
            this.base_skills.weapons[i].name   = c.base_weapons[i][0];
            this.base_skills.weapons[i].might  = parseInt(c.base_weapons[i][1]);
            this.base_skills.weapons[i].range  = parseInt(c.base_weapons[i][2]);
            this.base_skills.weapons[i].effect = c.base_weapons[i][3];
            this.base_skills.weapons[i].cost   = parseInt(c.base_weapons[i][4]) || c.base_weapons[i][4];
            this.base_skills.weapons[i].known  = parseInt(c.base_weapons[i][5]) || c.base_weapons[i][5];
            this.base_skills.weapons[i].learn  = parseInt(c.base_weapons[i][6]) || c.base_weapons[i][6];
            // inheritance rules show up only in the skill data, not character data
            this.base_skills.weapons[i].inherit = this.get_skill_inheritance_rule('weapons', this.base_skills.weapons[i].name);
            this.base_skills.weapons[i].weapon_type = this.weapon_type;
        }
        this.base_skills.support = [];
        for ( let i = 0; i < c.base_support.length; i++)
        {   this.base_skills.support[i] = {};
            this.base_skills.support[i].name   = c.base_support[i][0];
            this.base_skills.support[i].range  = parseInt(c.base_support[i][1]);
            this.base_skills.support[i].effect = c.base_support[i][2];
            this.base_skills.support[i].cost   = parseInt(c.base_support[i][3]) || c.base_support[i][3];
            this.base_skills.support[i].known  = parseInt(c.base_support[i][4]) || c.base_support[i][4];
            this.base_skills.support[i].learn  = parseInt(c.base_support[i][5]) || c.base_support[i][5];
            this.base_skills.support[i].inherit = this.get_skill_inheritance_rule('support', this.base_skills.support[i].name);
        }
        this.base_skills.special = [];
        for ( let i = 0; i < c.base_special.length; i++)
        {   this.base_skills.special[i] = {};
            this.base_skills.special[i].name   = c.base_special[i][0];
            this.base_skills.special[i].cooldown = parseInt(c.base_special[i][1]);
            this.base_skills.special[i].effect = c.base_special[i][2];
            this.base_skills.special[i].cost   = parseInt(c.base_special[i][3]) || c.base_special[i][3];
            this.base_skills.special[i].known  = parseInt(c.base_special[i][4]) || c.base_special[i][4];
            this.base_skills.special[i].learn  = parseInt(c.base_special[i][5]) || c.base_special[i][5];
            this.base_skills.special[i].inherit = this.get_skill_inheritance_rule('special',this.base_skills.special[i].name);
        }
        this.base_skills.passive_A = [];
        for ( let i = 0; i < c.base_passive_A.length; i++)
        {   this.base_skills.passive_A[i] = {};
            this.base_skills.passive_A[i].name   = c.base_passive_A[i][0];
            this.base_skills.passive_A[i].effect = c.base_passive_A[i][1];
            this.base_skills.passive_A[i].cost   = parseInt(c.base_passive_A[i][2]) || c.base_passive_A[i][2];
            this.base_skills.passive_A[i].learn  = parseInt(c.base_passive_A[i][3]) || c.base_passive_A[i][3];
            this.base_skills.passive_A[i].inherit = this.get_skill_inheritance_rule('passive_A',this.base_skills.passive_A[i].name);
        }
        this.base_skills.passive_B = [];
        for ( let i = 0; i < c.base_passive_B.length; i++)
        {   this.base_skills.passive_B[i] = {};
            this.base_skills.passive_B[i].name   = c.base_passive_B[i][0];
            this.base_skills.passive_B[i].effect = c.base_passive_B[i][1];
            this.base_skills.passive_B[i].cost   = parseInt(c.base_passive_B[i][2]) || c.base_passive_B[i][2];
            this.base_skills.passive_B[i].learn  = parseInt(c.base_passive_B[i][3]) || c.base_passive_B[i][3];
            this.base_skills.passive_B[i].inherit = this.get_skill_inheritance_rule('passive_B',this.base_skills.passive_B[i].name);
        }
        this.base_skills.passive_C = [];
        for ( let i = 0; i < c.base_passive_C.length; i++)
        {   this.base_skills.passive_C[i] = {};
            this.base_skills.passive_C[i].name   = c.base_passive_C[i][0];
            this.base_skills.passive_C[i].effect = c.base_passive_C[i][1];
            this.base_skills.passive_C[i].cost   = parseInt(c.base_passive_C[i][2]) || c.base_passive_C[i][2];
            this.base_skills.passive_C[i].learn  = parseInt(c.base_passive_C[i][3]) || c.base_passive_C[i][3];
            this.base_skills.passive_C[i].inherit = this.get_skill_inheritance_rule('passive_C',this.base_skills.passive_C[i].name);
        }


        // default status
        this.stats = {};
        this.rarity = 5;

        this.rebuild();

    }

    get_tag() { return this.tag; }
    get_name() { return this.name; }
    get_subname()
    {   if (this.subname)
        {   return this.subname;
        }else
        {   return null;
        }
    }
    get_epithet() { return this.epithet; }
    get_description() { return this.description; }

    get_portrait_image() { return stringy.find_img_path('portrait',this.tag); }

    toggle_favourite () { this.favourite = (!this.favourite) ? '❤' : null ; }
    set_favourite(fav) { this.favourite = fav; }
    is_favourite()
    {   if(this.favourite) { return '❤'; } else { return false; }
    }

    get_obtained_order() { return this.obtained; }

    get_origin_text() { return this.origin; }
    get_catalog_index() { return catalog.indexOf(this.tag); }
    is_askrian() { return (this.get_origin_text() == "Fire Emblem Heroes"); }

    set_rarity (r)
    {
        r = stringy.interpret_rarity(r);
     // if(isNaN(r)) { r = this.minimum_rarity };
        r = Math.max(r||null, this.get_minimum_rarity());
        r = Math.min(r, 5);
        this.rarity = r;
        this.rebuild(); // should it be called automatically?
    }

    get_rarity() { return this.rarity; }
        return_rarity() { return this.rarity; }
        return_rarity_stars() { return stringy.rar_num_to_star(this.rarity); }
    get_minimum_rarity()
    {   for ( let i = 1; i <= 5; i++ )
        {   if (this.base_stats[i])
            return i;
        }
    }

    get_weapon_type() { return this.weapon_type; }
    get_colour() { return this.colour; }
    // return_colour() { return this.colour_type; }
    // TODO: get_colour_image() { }
    lookup_weapons (weapons_name) { return skill_data.weapons[weapons_name]; }

    is_dragon()
    {// let dragons = [ 'dragon_red', 'dragon_blue', 'dragon_green' ];
        let dragons = [ 'red_dragonstone', 'blue_dragonstone', 'green_dragonstone' ];
        if ( dragons.indexOf(this.weapon_type) != -1 ) { return true; }
        else { return false; }
    }
    is_melee()
    {   let melee = [   'red_sword', 'blue_lance', 'green_axe', 'cheese',
            'red_dragonstone', 'blue_dragonstone', 'green_dragonstone' ];
        if ( melee.indexOf(this.weapon_type) != -1) { return true; }
        else { return false; }
    }
    is_ranged()
    {   let ranged = [ 'bow', 'dagger', 'tome_red', 'tome_blue', 'tome_green', 'staff',];
        if ( ranged.indexOf(this.weapon_type) != -1) { return true; }
        else { return false; }
    }
    is_dancer()
    {   let dance = [ 'dance', 'sing' ];
        if ( !this.base_skills.support[0] ) { return false; }
        if ( dance.indexOf(this.base_skills.support[0].name.toLowerCase()) != -1) { return true; }
        else { return false; }
    }

    get_move_type() { return this.move_type; }

 // get_stats() { return this.stats; }
    get_rating() { return (this.stats.hp
        + this.stats.atk + this.stats.spd + this.stats.def + this.stats.res);
    }


    rebuild ()
    {   if (this.summon === false) { this.boon = null; this.bane = null; }
        // this.assign_max_stats();
        this.rebuild_unlocked_skills();
        this.equip_last_skills();
    }

    // assign_max_stats ()
    // {   let max_stats = this.get_max_stats();
    //     this.stats.hp  = max_stats.hp;
    //     this.stats.atk = max_stats.atk;
    //     this.stats.spd = max_stats.spd;
    //     this.stats.def = max_stats.def;
    //     this.stats.res = max_stats.res;
    //     this.rating = max_stats.rating;
    // }
    get_max_stats(rarity = this.rarity)
    {
        let growths =
            [   [ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13 ], // possible gp
                [ 6,  8,  9, 11, 13, 14, 16, 18, 19, 21, 23, 24, 26 ], // rarity 1
                [ 7,  8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 26, 28 ], // rarity 2
                [ 7,  9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33 ], // rarity 3
                [ 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 31, 33, 35 ], // rarity 4
                [ 8, 10, 13, 15, 17, 19, 22, 24, 26, 28, 30, 33, 35, 37 ]  // rarity 5
            ];

        let stats = {};
        for (let stat in this.base_stats[rarity])
        {   let min = this.base_stats[rarity][stat]; // value at level 1
            let gp = this.growth_points[stat];
            if (this.summon)
            {   if (stat == this.boon) { min++; gp++; }
                if (stat == this.bane) { min--; gp--; }
            }
            let max = (min + growths[rarity][gp]);
            stats[stat] = (max);
        }

        stats.rating = stats.hp + stats.atk + stats.spd + stats.def + stats.res;
        return stats;
    }
    // assign_min_stats ()
    // {   let min_stats = this.get_min_stats();
    //     this.stats.hp  = min_stats.hp;
    //     this.stats.atk = min_stats.atk;
    //     this.stats.spd = min_stats.spd;
    //     this.stats.def = min_stats.def;
    //     this.stats.res = min_stats.res;
    //     this.rating = min_stats.rating;
    // }
    get_min_stats (rarity = this.rarity)
    {   let stats = {};
        for (let stat in this.base_stats[rarity])
        {   let min = this.base_stats[rarity][stat];
            if (this.summon) // ignore boon/bane on special map allies
            {   if (stat == this.boon) { min++; }
                if (stat == this.bane) { min--; }
            }
            stats[stat] = (min);
        }
        stats.rating = stats.hp + stats.atk + stats.spd + stats.def + stats.res;
        return stats;
    }


    rebuild_unlocked_skills ()
    {   this.unlocked_skills =
        {   weapons:  [], support:  [], special:  [],
            passive_A:[], passive_B:[], passive_C:[]
        };

        for ( let type in this.base_skills )
        {   for ( let i = 0; i < this.base_skills[type].length; i++ )
            {   if ( !parseInt(this.base_skills[type][i].learn)
                  || this.base_skills[type][i].learn <= this.rarity )
                {   this.unlocked_skills[type].push(this.base_skills[type][i]);
                }
            }
        }

    }

    equip_last_skills ()
    {   this.equipped_skills =
        {   weapons:  {}, support:  {}, special:  {},
            passive_A:{}, passive_B:{}, passive_C:{}
        }; // slice(-1).pop() last element of array
        this.equipped_skills.weapons   = this.unlocked_skills.weapons.slice(-1).pop()   || null;
        this.equipped_skills.support   = this.unlocked_skills.support.slice(-1).pop()   || null;
        this.equipped_skills.special   = this.unlocked_skills.special.slice(-1).pop()   || null;
        this.equipped_skills.passive_A = this.unlocked_skills.passive_A.slice(-1).pop() || null;
        this.equipped_skills.passive_B = this.unlocked_skills.passive_B.slice(-1).pop() || null;
        this.equipped_skills.passive_C = this.unlocked_skills.passive_C.slice(-1).pop() || null;
    }

    equip_known_skills ()
    {
        this.equipped_skills =
        {   weapons:  {}, support:  {}, special:  {},
            passive_A:{}, passive_B:{}, passive_C:{}
        };

        for ( let i = 0; i < this.unlocked_skills.weapons.length; i++)
        {   if ( this.rarity == this.unlocked_skills.weapons[i].known )
            {   this.equipped_skills.weapons = this.unlocked_skills.weapons[i];
                break;
            }
        }
        for ( let i = 0; i < this.unlocked_skills.support.length; i++)
        {   if ( this.rarity == this.unlocked_skills.support[i].known )
            {   this.equipped_skills.support = this.unlocked_skills.support[i];
                break;
            }
        }
        for ( let i = 0; i < this.unlocked_skills.special.length; i++)
        {   if ( this.rarity == this.unlocked_skills.special[i].known )
            {   this.equipped_skills.special = this.unlocked_skills.special[i];
                break;
            }
        }
    }

    goto_next_fruit ()
    {   let fruits = stringy.fruits;
        let index = fruits.indexOf(this.fruit);
        if (index < 0) { this.fruit = fruits[1]; }
        let next_index = index + 1;
        if (next_index == fruits.length) { next_index = 0; }
        this.fruit = fruits[next_index];
    }

    set_fruit(fruit) { this.fruit = fruit; }
    get_fruit() { return this.fruit; }
    get_fruit_index() { return stringy.fruits.indexOf(this.fruit); }

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
        // this.assign_max_stats();
    }

    get_nature() { return stringy.display_nature(this.boon, this.bane); }

    // return_skills() { return this.unlocked_skills; }

    get_base_skills() { return this.base_skills; }
    get_skill_inheritance_rule( type, skillname )
    {   if( skill_data[type][skillname] )
        {   let inherit_text;
            switch(type)
            {   case 'weapons':
                    inherit_text = skill_data.weapons[skillname][5];
                    break;
                case 'support': case 'special':
                    inherit_text = skill_data[type][skillname][4];
                    break;
                case 'passive_A':   case 'passive_B':   case 'passive_C':
                    inherit_text = skill_data[type][skillname][3];
                    break;
                default:
                    console.log("ERR_SKILL_TYPE_NOT_FOUND", type);
                    inherit_text = -2;
                    break;
            }
            let inherit_rule = stringy.inherit_restrictions[inherit_text];
            return inherit_rule;
        } else
        {   console.log("ERR_SKILL_NOT_FOUND", skillname);
            return -1;
        }
    }

    get_equipped_weapons_might()
    {   if (this.equipped_skills.weapons.might)
        {   return this.equipped_skills.weapons.might;
        } else { return 0; }
    }
    has_equipped_brave_speed_weapon()
    {   if (this.equipped_skills.weapons.effect)
        {   return this.equipped_skills.weapons.effect.startsWith("Spd-5.");
        } else { return false; }
    }
    is_equipped_weapon_exclusive() {  }

    get_equipped_skill(type) { return this.equipped_skills[type]; }
    get_equipped_skill_name(type)
    {   if ( this.equipped_skills[type] )
        {   return this.equipped_skills[type].name;
        }else
        {   return null;
        }
    }
    get_equipped_skill_effect(type)
    {   if ( this.equipped_skills[type] )
        {   return this.equipped_skills[type].effect;
        }else
        {   return null;
        }
    }

    // get_default_weapon_might()
    // {   for (let i=0;i<4;i++)
    //     {   let weapon_default_unlock = this.base_weapons[i][5];
    //
    //     }
    // }

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
    is_home() { return this.home; }

    is_summoned() { return this.summon; }
    is_not_summoned() { return !this.summon; }
    is_limited() { return this.limited; }

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

    knows_skill(skillname, type)
    {   for( let i = 0; i < this.unlocked_skills[type].length; i++ )
        {   if( skillname == this.unlocked_skills[type][i].name ) { return true; }
        }
        return false;
    }

    get_skill_unlock_rarity(skillname, type)
    {   for( let i = 0; i < this.base_skills[type].length; i++ )
        {   let this_skill = this.base_skills[type][i];
            if( skillname == this_skill.name )
            {   return this_skill.learn;
            }
        }
        console.log("ERR_SKILL_NOT_FOUND", this.base_skills[type], skillname, type );
        return -1;
    }

    skill_ends_chain(skill, type)
    {
        if(skill == this.base_skills[type].slice(-1).pop().name) { return true; }
        return false;
    }

    get_sort_properties()
    {   let properties = {};
        properties.name = this.get_name();
        properties.subname = this.get_subname();
        properties.obtained = this.get_obtained_order();
        properties.favourite = this.is_favourite();
        properties.fruit = this.get_fruit();
        properties.origin = this.get_catalog_index();
        properties.rarity = this.get_rarity();
        properties.colour_type = this.get_colour().toLowerCase();
        properties.weapon_type = this.get_weapon_type();
        properties.move_type = this.get_move_type().toLowerCase();
        properties.boon = this.boon;
        properties.bane = this.bane;
        let stats = this.get_max_stats();
        properties.rating = stats.rating;
        properties.hp  = stats.hp;
        properties.atk = stats.atk;
        properties.spd = stats.spd;
        properties.def = stats.def;
        properties.res = stats.res;
        properties.weapons = this.get_equipped_skill_name('weapons');
        properties.support = this.get_equipped_skill_name('support');
        properties.special = this.get_equipped_skill_name('special');
        properties.passive_A = this.get_equipped_skill_name('passive_A');
        properties.passive_B = this.get_equipped_skill_name('passive_B');
        properties.passive_C = this.get_equipped_skill_name('passive_C');
        properties.home = this.is_home();
        properties.is_dancer = this.is_dancer();
        return properties;
    }

}


// allies.calculate_growths = function (arrg, arrb)
// {   let grow5 = [ 8, 10, 13, 15, 17, 19, 22, 24, 26, 28, 30, 33 ];
//     console.log( 'total max', arrg[0]+arrg[1]+arrg[2]+arrg[3]+arrg[4] );
//     console.log(  'hp', grow5.indexOf(arrg[0]-arrb[0]));
//     console.log( 'atk', grow5.indexOf(arrg[1]-arrb[1]));
//     console.log( 'spd', grow5.indexOf(arrg[2]-arrb[2]));
//     console.log( 'def', grow5.indexOf(arrg[3]-arrb[3]));
//     console.log( 'res', grow5.indexOf(arrg[4]-arrb[4]));
// };



allies.feh__messenger_owl =
{
    "tag": "feh__messenger_owl",
    "name": "Feh",
    "epithet": "Messenger Owl",
    "description": "A messenger for the Order of Heroes and Askr.",
    "origin": "Fire Emblem Heroes",
    "weapon_type": "heart",
    "colour": "Colorless",
    "weapon": "Bubble",
    "move_type": "Flying",
    "rarities": [ "5" ],
    "limited": true,
    "summon": false,
    "base_stats":
    {   "5": [ "11", "1", "1", "1", "1" ]
    },
    "growth_points": [ "9", "9", "9", "9", "9" ],
    "base_weapons":
    [
        [   "Iron Sword",   // name
            "6",            // might
            "1",            // range
            "-",            // effect
            "50",           // SP cost
            "-",            // default
            "-"             // unlock
        ],
        [ "Steel Sword", "8", "1", "-", "100", "-", "-" ],
        [ "Silver Sword", "11", "1", "-", "200", "4", "-" ],
        [ "Falchion", "16", "1", "Effective against dragons. ", "~",
          "At the start of every third turn, unit recovers 10 HP.", "400" ]
    ],
    "base_support": [],
    "base_special": [],
    "base_passive_A": [],
    "base_passive_B": [],
    "base_passive_C": []
};
