
// allies.js
// handles ally functions
// see chars.js for character databse


let allies = {};

allies.setup = function allies_setup()
{
    allies.list = [];

    for ( let key in chars )
    {   allies.list.push( new ally(chars[key]) );
        ally_index = (allies.list.length - 1);
        allies.list[ally_index].index = ally_index;
    }

    allies.list.forEach(function setup_ally(ally)
    {   ally.set_rarity(5);
        ally.rebuild();
    });

    allies.feh = new ally(allies.feh__messenger_owl);
    allies.feh.obtained = 0;
};

// allies.skills = ['weapons','support','special','passive_A','passive_B','passive_C'];

allies.inherit_rulebook =
{
    "Melee Weapon Users Only" : [ 'red_tome', 'blue_tome', 'green_tome', 'colorless_bow', 'colorless_dagger', 'colorless_staff' ],
    "Ranged Weapon Users Only" : [ 'red_sword', 'red_dragonstone', 'blue_lance', 'blue_dragonstone', 'green_axe', 'green_dragonstone' ],
    "Sword Users Only" : [ 'red_tome', 'red_dragonstone', 'blue_lance', 'blue_tome', 'blue_dragonstone', 'green_axe', 'green_tome', 'green_dragonstone', 'colorless_bow', 'colorless_dagger', 'colorless_staff' ],
    "Axe Users Only" : [ 'red_sword', 'red_tome', 'red_dragonstone', 'blue_lance', 'blue_tome', 'blue_dragonstone', 'green_tome', 'green_dragonstone', 'colorless_bow', 'colorless_dagger', 'colorless_staff' ],
    "Lance Users Only" : [ 'red_sword', 'red_tome', 'red_dragonstone', 'blue_tome', 'blue_dragonstone', 'green_axe', 'green_tome', 'green_dragonstone', 'colorless_bow', 'colorless_dagger', 'colorless_staff' ],
    "Bow Users Only" : [ 'red_sword', 'red_tome', 'red_dragonstone', 'blue_lance', 'blue_tome', 'blue_dragonstone', 'green_axe', 'green_tome', 'green_dragonstone', 'colorless_dagger', 'colorless_staff' ],
    "Dagger Users Only" : [ 'red_sword', 'red_tome', 'red_dragonstone', 'blue_lance', 'blue_tome', 'blue_dragonstone', 'green_axe', 'green_tome', 'green_dragonstone', 'colorless_bow', 'colorless_staff' ],
    "Red Tome Users Only" : [ 'red_sword', 'red_dragonstone', 'blue_lance', 'blue_tome', 'blue_dragonstone', 'green_axe', 'green_tome', 'green_dragonstone', 'colorless_bow', 'colorless_dagger', 'colorless_staff' ],
    "Blue Tome Users Only" : [ 'red_sword', 'red_tome', 'red_dragonstone', 'blue_lance', 'blue_dragonstone', 'green_axe', 'green_tome', 'green_dragonstone', 'colorless_bow', 'colorless_dagger', 'colorless_staff' ],
    "Green Tome Users Only" : [ 'red_sword', 'red_tome', 'red_dragonstone', 'blue_lance', 'blue_tome', 'blue_dragonstone', 'green_axe', 'green_dragonstone', 'colorless_bow', 'colorless_dagger', 'colorless_staff' ],
    "Staff Users Only" : [ 'red_sword', 'red_tome', 'red_dragonstone', 'blue_lance', 'blue_tome', 'blue_dragonstone', 'green_axe', 'green_tome', 'green_dragonstone', 'colorless_bow', 'colorless_dagger' ],
    "Breath Users Only" : [ 'red_sword', 'red_tome', 'blue_lance', 'blue_tome', 'green_axe', 'green_tome', 'colorless_bow', 'colorless_dagger', 'colorless_staff' ],
    "Infantry Only" : [ 'armored', 'cavalry', 'flying' ],
    "Cavalry Only" : [ 'infantry', 'armored', 'flying' ],
    "Armored Only" : [ 'infantry', 'cavalry', 'flying' ],
    "Fliers Only" : [ 'infantry', 'armored', 'cavalry' ],
    "Excludes Red Weapon Users" : [ 'red_axe', 'red_tome', 'red_dragonstone' ],
    "Excludes Blue Weapon Users" : [ 'blue_axe', 'blue_tome', 'blue_dragonstone' ],
    "Excludes Green Weapon Users" : [ 'green_axe', 'green_tome', 'green_dragonstone' ],
    "Excludes Colorless Weapon Users" : [ 'colorless_bow', 'colorless_dagger', 'colorless_staff' ],
    "Excludes Tome and Staff Users" : [ 'red_tome', 'blue_tome', 'green_tome', 'colorless_staff' ],
    "Excludes Staff Users" : [ 'colorless_staff' ],
    "Excludes Fliers" : [ 'flying' ],
    "Is exclusive" : 'Prf',
    'Prf' : 'Prf',
    "None" : [],
    "Melee Weapon Users Only <br />Infantry and Armored Only" : [ 'cavalry', 'flying', 'red_tome', 'blue_tome', 'green_tome', 'colorless_bow', 'colorless_dagger', 'colorless_staff' ],
    "Excludes Staff Users <br />Infantry and Armored Only" : [ 'cavalry', 'flying', 'colorless_staff' ],

    'ONLY_STAFF' : [ 'red_sword', 'red_tome', 'red_dragonstone', 'blue_lance', 'blue_tome', 'blue_dragonstone', 'green_axe', 'green_tome', 'green_dragonstone', 'colorless_bow', 'colorless_dagger' ],
    'NO_STAFF' : [ 'staff' ],
    'ONLY_MELEE' : [ 'red_tome', 'blue_tome', 'green_tome', 'colorless_bow', 'colorless_dagger', 'colorless_staff' ],
};


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
        {   let weapon = {}; let data = c.base_weapons[i];
            weapon.name   = data.name;
            weapon.might  = parseInt(data.mt);
            weapon.range  = parseInt(data.rng);
            weapon.effect = "Mt " + weapon.might + ". " + data.effect;
            weapon.cost   = parseInt(data.sp) || data.sp;
            weapon.known  = parseInt(data.known) || data.known;
            weapon.learn  = parseInt(data.learn) || data.learn;
            weapon.inherit = data.inherit || null;
            weapon.weapon_type = this.weapon_type;
            this.base_skills.weapons[i] = weapon;
        }
        this.base_skills.support = [];
        for ( let i = 0; i < c.base_support.length; i++)
        {   let support = {}; let data = c.base_support[i];
            support.name   = data.name;
            support.range  = parseInt(data.rng);
            support.effect = data.effect;
            support.cost   = parseInt(data.sp) || data.sp;
            support.known  = parseInt(data.known) || data.known;
            support.learn  = parseInt(data.learn) || data.learn;
            support.inherit = data.inherit || null;
            if( ["ONLY_STAFF","NO_STAFF"].includes(support.inherit) )
            {   support.inherit = allies.inherit_rulebook[support.inherit]; }
            this.base_skills.support[i] = support;
        }
        this.base_skills.special = [];
        for ( let i = 0; i < c.base_special.length; i++)
        {   let special = {}; let data = c.base_special[i];
            special.name   = data.name;
            special.cooldown = parseInt(data.cooldown);
            special.effect = data.effect;
            special.cost   = parseInt(data.sp) || data.sp;
            special.known  = parseInt(data.known) || data.known;
            special.learn  = parseInt(data.learn) || data.learn;
            special.inherit = data.inherit || null;
            if( ["ONLY_STAFF","NO_STAFF","ONLY_MELEE"].includes(special.inherit) > -1 )
            {   special.inherit = allies.inherit_rulebook[special.inherit]; }
            this.base_skills.special[i] = special;
        }
        this.base_skills.passive_A = [];
        for ( let i = 0; i < c.base_passive_A.length; i++)
        {   let passive = {}; let data = c.base_passive_A[i];
            passive.name   = data.name;
            passive.effect = data.effect;
            passive.cost   = parseInt(data.sp) || data.sp;
            passive.learn  = parseInt(data.learn) || data.learn;
            passive.inherit = allies.inherit_rulebook[data.inherit];
            this.base_skills.passive_A[i] = passive;
        }
        this.base_skills.passive_B = [];
        for ( let i = 0; i < c.base_passive_B.length; i++)
        {   let passive = {}; let data = c.base_passive_B[i];
            passive.name   = data.name;
            passive.effect = data.effect;
            passive.cost   = parseInt(data.sp) || data.sp;
            passive.learn  = parseInt(data.learn) || data.learn;
            passive.inherit = allies.inherit_rulebook[data.inherit];
            this.base_skills.passive_B[i] = passive;
        }
        this.base_skills.passive_C = [];
        for ( let i = 0; i < c.base_passive_C.length; i++)
        {   let passive = {}; let data = c.base_passive_C[i];
            passive.name   = data.name;
            passive.effect = data.effect;
            passive.cost   = parseInt(data.sp) || data.sp;
            passive.learn  = parseInt(data.learn) || data.learn;
            passive.inherit = allies.inherit_rulebook[data.inherit];
            this.base_skills.passive_C[i] = passive;
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
        {   return "";
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

    get_obtained() { return this.obtained; }
    get_index() { return this.index; }

    get_origin_text() { return this.origin; }
    get_catalog_index() { return catalog.indexOf(this.tag); }

    is_askrian()
    {   if( this.name == "Anna" || this.name == "Alfonse" || this.name == "Sharena")
        {   return true; }
        return false;
    }

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
    is_staff()
    {   return( this.weapon_type == 'staff' );
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

    get_max_gold_stats ()
    {   return this.get_max_stats(5);
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
        }
    }
    undo_send_home()
    {   this.home = false;
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
        properties.obtained = this.get_obtained();
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

    check_if_inheritable_weapon(weapon_type)
    {   if( weapon_type == this.weapon_type ) { return true; }
        if( weapon_type.includes('dragonstone') && this.is_dragon()) { return true; }
        return false;
    }

    check_if_inheritable(rule)
    {   if( !rule ) { return true; } // no rule, no exclusion
        if( rule == "Prf" ) { return false; } // cannot inherit exclusive skills

        // check if exclusion array contains ally properties
        let properties = [ this.weapon_type, this.move_type ];
        if( rule.includes(this.weapon_type) ) { return false; }
        if( rule.includes(this.move_type) ) { return false; }

        return true; // if not excluded
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
    "base_special":
    [   [ "Eavesdropping Owl", "100", "Snoop on the Order of Heroes to gather the juiciest scoops on Fire Emblem Heroes.", "100", "-", "-" ],
    ],
    "base_passive_A": [],
    "base_passive_B": [],
    "base_passive_C": []
};
