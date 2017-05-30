
let chars = {};




// 17-04-25 finished entry
// 17-04-26 added ike, mist, soren, titania; updated clair, lukas
// 17-05-15 added boey, celica, mae, genny; updated soren, titania




chars.abel = class abel extends allies.ally
{   constructor()
    {   super();
        this.tag = 'abel';
        this.name = "Abel";
        this.title = "The Panther";
        this.text = "Altean cavalier known for his sensibility. Rode with Cain in service of Marth.";
        this.summon = true;
     // this.obtained = -1;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 4;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 16, atk: 6, spd: 8, def: 8, res: 5 },
            5 : { hp: 17, atk: 7, spd: 8, def: 8, res: 6 },
        };
        this.growth_points =
                { hp:  6, atk: 8, spd: 7, def: 4, res: 5 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'brave_lance', 'brave_lance_plus' ],
            assists   : [ null ],
            specials  : [ 'holy_vestments', 'aegis' ],
            passive_a : [ 'hp_plus_3', 'hp_plus_4', 'hp_plus_5' ],
            passive_b : [ 'swordbreaker_1', 'swordbreaker_2', 'swordbreaker_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};




chars.alfonse = class alfonse extends allies.ally
{   constructor()
    {   super();
        this.tag = 'alfonse';
        this.name = "Alfonse";
        this.title = "Prince of Askr";
        this.text = "A prince of Askr and member of the Order of Heroes. Kind and serious, and eager to maintain peace.";
        this.summon = false;
     // this.obtained = 8;
     // this.favourite;
        this.origin = 0;
        this.minimum_rarity = 2;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : { hp: 17, atk: 8, spd: 4, def: 7, res: 3 },
            3 : { hp: 18, atk: 8, spd: 5, def: 7, res: 4 },
            4 : { hp: 18, atk: 9, spd: 5, def: 8, res: 4 },
            5 : { hp: 19, atk: 9, spd: 6, def: 8, res: 5 },
        };
        this.growth_points =
                { hp:  7, atk: 8, spd: 5, def: 7, res: 4 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'folkvangr' ],
            assists   : [ null ],
            specials  : [ 'daylight', 'sol' ],
            passive_a : [ 'death_blow_1', 'death_blow_2', 'death_blow_3' ],
            passive_b : [ null ],
            passive_c : [ 'spur_atk_1', 'spur_atk_2', 'spur_atk_3' ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_c';
    }
};




chars.alm = class alm extends allies.ally
{   constructor()
    {   super();
        this.tag = 'alm';
        this.name = "Alm";
        this.title = "Hero of Prophecy";
        this.text = "A brave but kind young warrior, raised by the hero Mycen in Ram Village. His left hand is marked with the Brand.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 15;
        this.minimum_rarity = 5;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 21, atk: 9, spd: 6, def: 6, res: 5 },
        };
        this.growth_points =
                { hp:  7, atk: 7, spd: 7, def: 6, res: 4 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'falchion' ],
            assists   : [ null ],
            specials  : [ 'dragon_gaze', 'draconic_aura' ],
            passive_a : [ 'attack_plus_1', 'attack_plus_2', 'attack_plus_3' ],
            passive_b : [ 'windsweep_1', 'windsweep_2', 'windsweep_3' ],
            passive_c : [ null ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.anna = class anna extends allies.ally
{   constructor()
    {   super();
        this.tag  = 'anna';
        this.name = "Anna";
        this.text = "A veteran fighter who leads the Order of Heroes. Alfonse and Sharena's commander.";
        this.summon = false;
     // this.obtained = 6;
     // this.favourite;
        this.origin = 0;
        this.minimum_rarity = 2;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : { hp: 17, atk: 6, spd:  9, def: 3, res: 4 },
            3 : { hp: 18, atk: 6, spd:  9, def: 4, res: 5 },
            4 : { hp: 18, atk: 7, spd: 10, def: 4, res: 5 },
            5 : { hp: 19, atk: 7, spd: 10, def: 5, res: 6 },
        };
        this.growth_points =
                { hp:  6, atk: 6, spd:  9, def: 4, res: 6 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'silver_axe', 'noatun' ],
            assists   : [ null ],
            specials  : [ 'night_sky', 'astra' ],
            passive_a : [ null ],
            passive_b : [ 'vantage_1', 'vantage_2', 'vantage_3' ],
            passive_c : [ 'spur_res_1', 'spur_res_2', 'spur_res_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_b';
    }
};



chars.arthur = class arthur extends allies.ally
{   constructor()
    {   super();
        this.tag = 'arthur';
        this.name = "Arthur";
        this.title = "Hapless Hero";
        this.text = "A sworn ally of justice with uncannily bad luck. One of Elise's retainers.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 3;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 18, atk: 7, spd: 6, def: 7, res: 4 },
            4 : { hp: 18, atk: 8, spd: 6, def: 8, res: 4 },
            5 : { hp: 19, atk: 8, spd: 7, def: 8, res: 5 },
        };
        this.growth_points =
                { hp:  7, atk: 7, spd: 6, def: 6, res: 5 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'emerald_axe', 'emerald_axe_plus' ],
            assists   : [ 'swap' ],
            specials  : [ null ],
            passive_a : [ 'hp_plus_3', 'hp_plus_4', 'hp_plus_5' ],
            passive_b : [ 'lancebreaker_1', 'lancebreaker_2', 'lancebreaker_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_b';
    }
};




chars.azama = class azama extends allies.ally
{   constructor()
    {   super();
        this.tag = 'azama';
        this.name = "Azama";
        this.title = "Carefree Monk";
        this.text = "A monk of Hoshido with a curious sense of humor. One of Hinoka's retainers.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 3;
        this.colour_type = 'colourless';
        this.weapon_type = 'staff';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 18, atk: 3, spd: 6, def: 7, res: 5 },
            4 : { hp: 18, atk: 3, spd: 7, def: 8, res: 5 },
            5 : { hp: 19, atk: 4, spd: 7, def: 8, res: 6 },
        };
        this.growth_points =
                { hp:  7, atk: 4, spd: 5, def: 7, res: 5 };

        this.base_skills =
        {   weapons   : [ 'assault', 'pain' ],
            assists   : [ 'heal', 'reconcile', 'martyr' ],
            specials  : [ 'imbue', 'solid_earth_balm' ],
            passive_a : [ null ],
            passive_b : [ null ],
            passive_c : [ 'threaten_atk_1', 'threaten_atk_2', 'threaten_atk_3' ]
        };
        this.early_passive = null;
        this.late_passive =  'passive_c';
    }
};




chars.azura = class azura extends allies.ally
{   constructor()
    {   super();
        this.tag = 'azura';
        this.name = "Azura";
        this.title = "Lady of the Lake";
        this.text = "An enchanting princess raised in Hoshido who sings in battle to help her allies.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 5;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 10;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 17, atk: 5, spd: 7, def: 4, res: 6 },
        };
        this.growth_points =
                { hp:  5, atk: 8, spd: 8, def: 4, res: 6 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'sapphire_lance', 'sapphire_lance_plus' ],
            assists   : [ 'sing' ],
            specials  : [ null ],
            passive_a : [ 'speed_plus_1', 'speed_plus_2', 'speed_plus_3' ],
            passive_b : [ null ],
            passive_c : [ 'fortify_res_1', 'fortify_res_2', 'fortify_res_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.barst = class barst extends allies.ally
{   constructor()
    {   super();
        this.tag = 'barst';
        this.name = "Barst";
        this.title = "The Hatchet";
        this.text = "Warrior of Talys who works for Ogma and has been a pirate and woodcutter.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 3;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 19, atk: 8, spd: 7, def: 5, res: 3 },
            4 : { hp: 19, atk: 9, spd: 8, def: 5, res: 3 },
            5 : { hp: 20, atk: 9, spd: 8, def: 6, res: 4 },
        };
        this.growth_points =
                { hp:  8, atk: 7, spd: 7, def: 7, res: 2 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'brave_axe', 'brave_axe_plus' ],
            assists   : [ 'reposition' ],
            specials  : [ null ],
            passive_a : [ null ],
            passive_b : [ 'knock_back' ],
            passive_c : [ 'spur_atk_1', 'spur_atk_2', 'spur_atk_3' ]
        };
        this.early_passive = 'passive_c';
        this.position_passive =  'passive_b';
    }
};




chars.bartre = class bartre extends allies.ally
{   constructor()
    {   super();
        this.tag = 'bartre';
        this.name = "Bartre";
        this.title = "Fearless Warrior";
        this.text = "An outpost warrior who went on a journey to find his beloved daughter, Fir.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 6;
        this.minimum_rarity = 3;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 156;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 20, atk:  9, spd: 5, def: 6, res: 2 },
            4 : { hp: 20, atk: 10, spd: 5, def: 7, res: 2 },
            5 : { hp: 21, atk: 10, spd: 6, def: 7, res: 3 },
        };
        this.growth_points =
                { hp:  8, atk:  7, spd: 7, def: 7, res: 2 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'hammer', 'hammer_plus' ],
            assists   : [ 'smite' ],
            specials  : [ null ],
            passive_a : [ 'fury_1', 'fury_2', 'fury_3' ],
            passive_b : [ 'brash_assault_1', 'brash_assault_2', 'brash_assault_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};




chars.beruka = class beruka extends allies.ally
{   constructor()
    {   super();
        this.tag = 'beruka';
        this.name = "Beruka";
        this.title = "Quiet Assassin";
        this.text = "Wyvern-riding assassin who seems devoid of emotion. One of Camilla's retainers.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 3;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 19, atk: 6, spd: 5, def: 8, res: 4 },
            4 : { hp: 19, atk: 7, spd: 5, def: 9, res: 4 },
            5 : { hp: 20, atk: 7, spd: 6, def: 9, res: 5 },
        };
        this.growth_points =
                { hp:  8, atk: 6, spd: 4, def: 9, res: 4 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'killer_axe', 'killer_axe_plus' ],
            assists   : [ null ],
            specials  : [ 'night_sky', 'glimmer' ],
            passive_a : [ 'defiant_def_1', 'defiant_def_2', 'defiant_def_3' ],
            passive_b : [ 'lunge' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_a';
        this.position_passive =  'passive_b';
    }
};




chars.boey = class boey extends allies.ally
{   constructor()
    {   super();
        this.tag = 'boey';
        this.name = "Boey";
        this.title = "Skillful Survivor";
        this.text = "A mage from Novis who grew up dirt-poor. Of calm demeanor, but not great at magic.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 15;
        this.minimum_rarity = 5;
        this.colour_type = 'green';
        this.weapon_type = 'tome_green';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 149;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 19, atk: 7, spd: 5, def: 8, res: 5 },
        };
        this.growth_points =
                { hp:  7, atk: 6, spd: 6, def: 7, res: 2 };

        this.base_skills =
        {   weapons   : [ 'wind', 'elwind', 'gronnowl', 'gronnowl_plus' ],
            assists   : [ null ],
            specials  : [ 'glowing_ember', 'ignis' ],
            passive_a : [ 'earth_boost_1', 'earth_boost_2', 'earth_boost_3' ],
            passive_b : [ 'renewal_1', 'renewal_2', 'renewal_3' ],
            passive_c : [ null ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.caeda = class caeda extends allies.ally
{   constructor()
    {   super();
        this.tag = 'caeda';
        this.name = "Caeda";
        this.title = "Talys's Heart";
        this.text = "Princess of Talys who's as talented as she is charming. Marth's betrothed.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 4;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 156;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 16, atk: 5, spd: 9, def: 4, res: 10 },
            5 : { hp: 17, atk: 6, spd: 9, def: 5, res: 10 },
        };
        this.growth_points =
                { hp:  5, atk: 5, spd: 9, def: 5, res: 7 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'armorslayer', 'armorslayer_plus' ],
            assists   : [ 'rally_speed' ],
            specials  : [ null ],
            passive_a : [ 'darting_blow_1', 'darting_blow_2', 'darting_blow_3' ],
            passive_b : [ null ],
            passive_c : [ 'fortify_res_1', 'fortify_res_2', 'fortify_flyers' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_a';
    }
};




chars.caeda_bride = class caeda_bride extends allies.ally
{   constructor()
    {   super();
        this.tag = 'caeda_bride';
        this.name = "Caeda";
        this.subname = "💐";
        this.title = "Talys's Bride";
        this.text = "The charming princess of Talys. Has grand dreams of being a bride.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 5;
        this.colour_type = 'blue';
        this.weapon_type = 'tome_blue';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 16, atk: 7, spd: 9, def: 4, res: 8 },
        };
        this.growth_points =
                { hp:  4, atk: 6, spd: 9, def: 3, res: 6 };

        this.base_skills =
        {   weapons   : [ 'thunder', 'elthunder', 'blessed_bouquet', 'blessed_bouquet_plus' ],
            assists   : [ null ],
            specials  : [ 'chilling_wind', 'iceberg' ],
            passive_a : [ 'resistance_plus_1', 'attack_res_plus_1', 'attack_res_plus_2' ],
            passive_b : [ null ],
            passive_c : [ 'hone_spd_1', 'hone_spd_2', 'hone_spd_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.cain = class cain extends allies.ally
{   constructor()
    {   super();
        this.tag = 'cain';
        this.name = "Cain";
        this.title = "The Bull";
        this.text = "Altean cavalier known for recklessness. Rode with Abel in service of Marth.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 4;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 154;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 17, atk: 8, spd: 5, def: 8, res: 5 },
            5 : { hp: 18, atk: 8, spd: 6, def: 8, res: 6 },
        };
        this.growth_points =
                { hp:  7, atk: 7, spd: 8, def: 5, res: 3 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'brave_sword', 'brave_sword_plus' ],
            assists   : [ null ],
            specials  : [ 'buckler', 'escutcheon' ],
            passive_a : [ null ],
            passive_b : [ 'wings_of_mercy_1', 'wings_of_mercy_2', 'wings_of_mercy_3' ],
            passive_c : [ 'threaten_atk_1', 'threaten_atk_2', 'threaten_atk_3' ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_c';
    }
};




chars.camilla = class camilla extends allies.ally
{   constructor()
    {   super();
        this.tag  = 'camilla';
        this.name = "Camilla";
        this.title = "Bewitching Beauty";
        this.text = "Princess of Nohr who dotes on her sibling Corrin and is merciless to foes.";
        this.summon = true;
     // this.obtained = 3;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 4;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
          2 : null,
          3 : null,
          4 : { hp: 17, atk: 8, spd: 8, def: 5, res: 6 },
          5 : { hp: 18, atk: 8, spd: 8, def: 6, res: 7 },
        };
        this.growth_points =
              { hp:  5, atk: 6, spd: 7, def: 6, res: 7 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'brave_axe', 'brave_axe_plus' ],
          assists   : [ null ],
          specials  : [ 'dragon_gaze', 'draconic_aura' ],
          passive_a : [ 'darting_blow_1', 'darting_blow_2', 'darting_blow_3' ],
          passive_b : [ null ],
          passive_c : [ 'savage_blow_1', 'savage_blow_2', 'savage_blow_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_a';
    }
};




chars.camilla_spring = class camilla_spring extends allies.ally
{   constructor()
    {   super();
        this.tag = 'camilla_spring';
        this.name = "Camilla";
        this.subname = "🐇";
        this.title = "Spring Princess";
        this.text = "Princess of Nohr who dotes on her sibling Corrin. Loves her new outfit ever since Corrin said it was cute.";
        this.summon = true;
     // this.obtained = 4;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 5;
        this.colour_type = 'green';
        this.weapon_type = 'tome_green';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 17, atk: 9, spd: 6, def: 8, res: 4 },
        };
        this.growth_points =
                { hp:  6, atk: 8, spd: 5, def: 6, res: 3 };

        this.base_skills =
        {   weapons   : [ 'wind', 'elwind', 'green_egg', 'green_egg_plus' ],
            assists   : [ 'rally_attack' ],
            specials  : [ null ],
            passive_a : [ 'defiant_spd_1', 'defiant_spd_2', 'defiant_spd_3',  ],
            passive_b : [ 'live_for_bounty' ],
            passive_c : [ null ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};



    /*
chars.camus = class camus extends allies.ally
{   constructor()
    {   super();
        this.tag = 'camus';
        this.name = "Camus";
        this.title = "Sable Knight";
        this.text = "A knight who's devoted to his motherland, Grust. Wields the lance Gradivus."
        this.summon = false;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = #;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'cavalry';
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
        {   weapons   : [ 'iron_axe', 'steel_axe', 'silver_axe', 'noatun' ],
            assists   : [ null ],
            specials  : [ 'night_sky', 'astra' ],
            passive_a : [ null ],
            passive_b : [ 'vantage_1', 'vantage_2', 'vantage_3' ],
            passive_c : [ 'spur_res_1', 'spur_res_2', 'spur_res_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};
    */



chars.catria = class catria extends allies.ally
{   constructor()
    {   super();
        this.tag = 'catria';
        this.name = "Catria";
        this.title = "Middle Whitewing";
        this.text = "The middle of three sisters who are pegasus knights for Macedon.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 3;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 10;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 16, atk: 6, spd:  9, def: 6, res: 5 },
            4 : { hp: 16, atk: 7, spd: 10, def: 6, res: 5 },
            5 : { hp: 17, atk: 7, spd: 10, def: 7, res: 6 },
        };
        this.growth_points =
                { hp:  6, atk: 7, spd:  7, def: 6, res: 5 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'killer_lance', 'killer_lance_plus' ],
            assists   : [ null ],
            specials  : [ 'new_moon', 'luna' ],
            passive_a : [ 'armored_blow_1', 'armored_blow_2', 'armored_blow_3' ],
            passive_b : [ 'seal_atk_1', 'seal_atk_2', 'seal_atk_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_b';
    }
};




chars.cecilia = class cecilia extends allies.ally
{   constructor()
    {   super();
        this.tag = 'cecilia';
        this.name = "Cecilia";
        this.title = "Etrurian General";
        this.text = "Mage General of Etruria. Taught Roy and Lilina when they were young.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 6;
        this.minimum_rarity = 1;
        this.colour_type = 'green';
        this.weapon_type = 'tome_green';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 144;
        this.base_stats =
        {   1 : { hp: 15, atk: 6, spd: 4, def: 3, res: 5 },
            2 : { hp: 15, atk: 7, spd: 4, def: 3, res: 6 },
            3 : { hp: 16, atk: 7, spd: 5, def: 4, res: 6 },
            4 : { hp: 16, atk: 8, spd: 5, def: 4, res: 7 },
            5 : { hp: 17, atk: 8, spd: 6, def: 5, res: 7 },
        };
        this.growth_points =
                { hp:  5, atk: 7, spd: 5, def: 4, res: 6 };

        this.base_skills =
        {   weapons   : [ 'wind', 'elwind', 'gronnraven', 'gronnraven_plus' ],
            assists   : [ 'rally_resistance' ],
            specials  : [ null ],
            passive_a : [ 'attack_plus_1', 'attack_plus_2', 'attack_plus_3' ],
            passive_b : [ 'escape_route_1', 'escape_route_2', 'escape_route_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};




chars.celica = class celica extends allies.ally
{   constructor()
    {   super();
        this.tag = 'celica';
        this.name = "Celica";
        this.title = "Caring Princess";
        this.text = "The princess of Zofia; trained as a priestess. Caring towards others, and dislikes fighting. Bears the Brand on her right hand.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 15;
        this.minimum_rarity = 5;
        this.colour_type = 'red';
        this.weapon_type = 'tome_red';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 17, atk: 8, spd: 7, def: 5, res: 7 },
        };
        this.growth_points =
                { hp:  6, atk: 7, spd: 8, def: 4, res: 3 };

        this.base_skills =
        {   weapons   : [ 'fire', 'elfire', 'bolganone', 'ragnarok' ],
            assists   : [ null ],
            specials  : [ 'rising_light', 'blazing_light' ],
            passive_a : [ 'distant_def_1', 'distant_def_2', 'distant_def_3' ],
            passive_b : [ null ],
            passive_c : [ 'spur_def_1', 'spur_def_2', 'spur_def_3' ],
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.charlotte_bride = class charlotte_bride extends allies.ally
{   constructor()
    {   super();
        this.tag = 'charlotte_bride';
        this.name = "Charlotte";
        this.subname = "💐";
        this.title = "Money Maiden";
        this.text = "Nohrian border guard always on patrol, whether to find enemies to fight or a rich fellow to marry.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 5;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 20, atk: 10, spd: 8, def: 5, res: 4 },
        };
        this.growth_points =
                { hp:  8, atk:  8, spd: 7, def: 5, res: 3 };

        this.base_skills =
        {   weapons   : [ 'thunder', 'elthunder', 'first_bite', 'first_bite_plus' ],
            assists   : [ 'smite' ],
            specials  : [ null ],
            passive_a : [ 'wind_boost_1', 'wind_boost_2', 'wind_boost_3' ],
            passive_b : [ null ],
            passive_c : [ 'threaten_atk_1', 'threaten_atk_2', 'threaten_atk_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.cherche = class cherche extends allies.ally
{   constructor()
    {   super();
        this.tag = 'cherche';
        this.name = "Cherche";
        this.title = "Wyvern Friend";
        this.text = "Wyvern-riding fighter in Virion's noble house. Thinks her wyvern Minerva is adorable.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 3;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 19, atk:  9, spd: 5, def: 7, res: 2 },
            4 : { hp: 19, atk: 10, spd: 5, def: 8, res: 2 },
            5 : { hp: 20, atk: 10, spd: 6, def: 8, res: 3 },
        };
        this.growth_points =
                { hp:  8, atk:  9, spd: 5, def: 7, res: 2 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'hammer', 'hammer_plus' ],
            assists   : [ 'pivot' ],
            specials  : [ null ],
            passive_a : [ 'attack_plus_1', 'attack_plus_2', 'attack_plus_3' ],
            passive_b : [ null ],
            passive_c : [ 'fortify_def_1', 'fortify_def_2', 'fortify_def_3' ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_c';
    }
};




chars.chrom = class chrom extends allies.ally
{   constructor()
    {   super();
        this.tag = 'chrom';
        this.name = "Chrom";
        this.title = "Exalted Prince";
        this.text = "A prince of Ylisse and descendant of the Hero-King. Leads the Shepherds.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 4;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 20, atk: 9, spd: 5, def: 7, res: 3 },
            5 : { hp: 21, atk: 9, spd: 6, def: 7, res: 4 },
        };
        this.growth_points =
                { hp:  8, atk: 9, spd: 5, def: 7, res: 2 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'falchion' ],
            assists   : [ null ],
            specials  : [ 'daylight', 'sol', 'aether' ],
            passive_a : [ 'defiant_def_1', 'defiant_def_2', 'defiant_def_3' ],
            passive_b : [ null ],
            passive_c : [ 'spur_def_1', 'spur_def_2', 'spur_def_3' ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_c';
    }
};




chars.chrom_spring = class chrom_spring extends allies.ally
{   constructor()
    {   super();
        this.tag = 'chrom_spring';
        this.name = "Chrom";
        this.subname = "🐇";
        this.title = "Spring Exalt";
        this.text = "A prince of Ylisse and descendant of the Hero-King. Dressed to celebrate the spring festival.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 5;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 19, atk: 9, spd: 8, def: 6, res: 5 },
        };
        this.growth_points =
                { hp:  7, atk: 8, spd: 7, def: 6, res: 3 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'iron_axe', 'carrot_axe', 'carrot_axe_plus' ],
            assists   : [ 'shove' ],
            specials  : [ null ],
            passive_a : [ 'defense_plus_1', 'attack_def_plus_1', 'attack_def_plus_2' ],
            passive_b : [ null ],
            passive_c : [ 'axe_experience_1', 'axe_experience_2', 'axe_experience_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.clair = class clair extends allies.ally
{   constructor()
    {   super();
        this.tag = 'clair';
        this.name = "Clair";
        this.title = "Highborn Flier";
        this.text = "A pegasus knight with the Deliverance. Clive's younger sister. Secretly loves Alm.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 15;
        this.minimum_rarity = 4;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 10;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 17, atk: 6, spd: 8, def: 4, res: 9 },
            5 : { hp: 18, atk: 7, spd: 8, def: 5, res: 9 },
        };
        this.growth_points =
                { hp:  5, atk: 5, spd: 9, def: 5, res: 7 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'silver_lance', 'silver_lance_plus' ],
            assists   : [ 'harsh_command' ],
            specials  : [ null ],
            passive_a : [ null ],
            passive_b : [ 'hit_and_run' ],
            passive_c : [ 'spur_spd_1', 'spur_spd_2', 'spur_spd_3' ]
        };
        this.early_passive = null;
        this.late_passive =  'passive_c';
        this.position_passive = 'passive_b';
    }
};




chars.clarine = class clarine extends allies.ally
{   constructor()
    {   super();
        this.tag = 'clarine';
        this.name = "Clarine";
        this.title = "Refined Noble";
        this.text = "Noble daughter of Count Reglay of Etruria. Fond of her brother, Klein. Has lived a privileged life.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 6;
        this.minimum_rarity = 3;
        this.colour_type = 'grey';
        this.weapon_type = 'staff';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 144;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 15, atk: 5, spd: 8, def: 4, res: 6 },
            4 : { hp: 15, atk: 5, spd: 9, def: 4, res: 7 },
            5 : { hp: 16, atk: 6, spd: 9, def: 5, res: 7 },
        };
        this.growth_points =
                { hp:  5, atk: 5, spd: 7, def: 4, res: 6 };

        this.base_skills =
        {   weapons   : [ 'assault', 'fear' ],
            assists   : [ 'heal', 'reconcile', 'martyr' ],
            specials  : [ 'imbue', 'swift_winds_balm' ],
            passive_a : [ 'resistance_plus_1', 'resistance_plus_2', 'resistance_plus_3' ],
            passive_b : [ null ],
            passive_c : [ null ]
        };
        this.early_passive = null;
        this.late_passive =  'passive_a';
    }
};




chars.cordelia = class cordelia extends allies.ally
{   constructor()
    {   super();
        this.tag = 'cordelia';
        this.name = "Cordelia";
        this.title = "Knight Paragon";
        this.text = "The sole survivor of Ylisse's pegasus knights. Humble and supremely talented.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 4;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 17, atk: 9, spd: 9, def: 4, res: 5 },
            5 : { hp: 18, atk: 9, spd: 9, def: 5, res: 6 },
        };
        this.growth_points =
                { hp:  6, atk: 8, spd: 8, def: 4, res: 5 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'brave_lance', 'brave_lance_plus' ],
            assists   : [ null ],
            specials  : [ 'night_sky', 'astra', 'galeforce' ],
            passive_a : [ 'triangle_adept_1', 'triangle_adept_2', 'triangle_adept_3' ],
            passive_b : [ 'pass_1', 'pass_2', 'pass_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};




chars.cordelia_bride = class cordelia_bride extends allies.ally
{   constructor()
    {   super();
        this.tag = 'cordelia_bride';
        this.name = "Cordelia";
        this.subname = "💐";
        this.title = "Perfect Bride";
        this.text = "Pegasus knight of Ylisse who excels in all things, including being delightful. Hopes to marry her perfect match.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 5;
        this.colour_type = 'grey';
        this.weapon_type = 'bow';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 17, atk: 9, spd: 9, def: 4, res: 5 },
        };
        this.growth_points =
                { hp:  5, atk: 8, spd: 8, def: 3, res: 4 };

        this.base_skills =
        {   weapons   : [ 'thunder', 'elthunder', 'cupid_arrow', 'cupid_arrow_plus' ],
            assists   : [ 'rally_attack_speed' ],
            specials  : [ null ],
            passive_a : [ null ],
            passive_b : [ 'escape_route_1', 'escape_route_2', 'escape_route_3' ],
            passive_c : [ 'breath_of_life_1', 'breath_of_life_2', 'breath_of_life_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.corrin_dragon = class corrin_dragon extends allies.ally
{   constructor()
    {   super();
        this.tag = 'corrin_dragon';
        this.name = "Corrin";
        this.subname = '🐉';
        this.title = "Fateful Princess";
        this.text = "A Hoshidan princess raised in Nohr. Fights on her chosen path with the divine blade Yato.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 3;
        this.colour_type = 'blue';
        this.weapon_type = 'dragon_blue';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 18, atk: 7, spd: 5, def: 7, res: 5 },
            4 : { hp: 18, atk: 8, spd: 5, def: 8, res: 5 },
            5 : { hp: 19, atk: 8, spd: 6, def: 8, res: 6 },
        };
        this.growth_points =
                { hp:  6, atk: 5, spd: 9, def: 8, res: 3 };

        this.base_skills =
        {   weapons   : [ 'fire_breath', 'fire_breath_plus', 'dark_breath', 'dark_breath_plus' ],
            assists   : [ null ],
            specials  : [ 'dragon_gaze', 'draconic_aura' ],
            passive_a : [ null ],
            passive_b : [ 'seal_res_1', 'seal_res_2', 'seal_res_3' ],
            passive_c : [ 'hone_atk_1', 'hone_atk_2', 'hone_atk_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_b';
    }
};




chars.corrin_sword = class corrin_sword extends allies.ally
{   constructor()
    {   super();
        this.tag = 'corrin_sword';
        this.name = "Corrin";
        this.subname = '🌽';
        this.title = "Fateful Prince";
        this.text = "A Hoshidan prince raised in Nohr. Fights on his chosen path with the divine blade Yato.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 4;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 19, atk: 8, spd: 8, def: 5, res: 4 },
            5 : { hp: 20, atk: 8, spd: 8, def: 6, res: 5 },
        };
        this.growth_points =
                { hp:  6, atk: 7, spd: 7, def: 6, res: 5 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'yato' ],
            assists   : [ null ],
            specials  : [ 'dragon_gaze', 'dragon_fang' ],
            passive_a : [ 'defense_plus_1', 'defense_plus_2', 'defense_plus_3' ],
            passive_b : [ 'obstruct_1', 'obstruct_2', 'obstruct_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_b';
    }
};




chars.donnel = class donnel extends allies.ally
{   constructor()
    {   super();
        this.tag = 'donnel';
        this.name = "Donnel";
        this.title = "Village Hero";
        this.text = "A farm boy from a country village in the Halidom of Ylisse. Handy and hardy.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 1;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 162;
        this.base_stats =
        {   1 : { hp: 15, atk: 5, spd: 3, def: 4, res: 2 },
            2 : { hp: 15, atk: 6, spd: 3, def: 5, res: 2 },
            3 : { hp: 16, atk: 6, spd: 4, def: 5, res: 3 },
            4 : { hp: 16, atk: 7, spd: 4, def: 6, res: 3 },
            5 : { hp: 17, atk: 7, spd: 5, def: 6, res: 4 },
        };
        this.growth_points =
                { hp:  8, atk: 9, spd: 7, def: 8, res: 5 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'brave_lance', 'brave_lance_plus' ],
            assists   : [ 'reciprocal_aid' ],
            specials  : [ null ],
            passive_a : [ 'hp_plus_3', 'hp_plus_4', 'hp_plus_5' ],
            passive_b : [ 'drag_back' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_a';
        this.position_passive =  'passive_b';
    }
};




chars.draug = class draug extends allies.ally
{   constructor()
    {   super();
        this.tag = 'draug';
        this.name = "Draug";
        this.title = "Gentle Giant";
        this.text = "An armored knight of Altea who served as Marth's shield. Very sincere.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 2;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'armor';
     // this.level = 40;
     // this.rating = 169;
        this.base_stats =
        {   1 : null,
            2 : { hp: 22, atk: 7, spd: 4, def: 12, res: 1 },
            3 : { hp: 23, atk: 7, spd: 5, def: 12, res: 2 },
            4 : { hp: 23, atk: 8, spd: 5, def: 13, res: 2 },
            5 : { hp: 24, atk: 8, spd: 6, def: 13, res: 3 },
        };
        this.growth_points =
                { hp:  8, atk: 6, spd: 8, def: 8, res: 3 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'brave_sword', 'brave_sword_plus' ],
            assists   : [ null ],
            specials  : [ 'buckler', 'pavise' ],
            passive_a : [ null ],
            passive_b : [ 'lunge' ],
            passive_c : [ 'spur_def_1', 'spur_def_2', 'ward_armor' ]
        };
        this.early_passive = 'passive_c';
        this.position_passive =  'passive_b';
    }
};




chars.effie = class effie extends allies.ally
{   constructor()
    {   super();
        this.tag = 'effie';
        this.name = "Effie";
        this.title = "Army of One";
        this.text = "A gentle knight with great strength and devotion. One of Elise's retainers.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 4;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'armor';
     // this.level = 40;
     // this.rating = 168;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 21, atk: 12, spd: 4, def: 11, res: 3 },
            5 : { hp: 22, atk: 12, spd: 5, def: 11, res: 4 },
        };
        this.growth_points =
                { hp:  9, atk:  9, spd: 4, def:  6, res: 5 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'silver_lance', 'silver_lance_plus' ],
            assists   : [ 'smite' ],
            specials  : [ null ],
            passive_a : [ 'death_blow_1', 'death_blow_2', 'death_blow_3' ],
            passive_b : [ 'wary_fighter_1', 'wary_fighter_2', 'wary_fighter_3' ],
            passive_c : [ null ],
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};




chars.eirika = class eirika extends allies.ally
{   constructor()
    {   super();
        this.tag = 'eirika';
        this.name = "Eirika";
        this.title = "Restoration Lady";
        this.text = "Princess of Renais. Ephraim's twin. Cares dearly for her brother. Her kindness has sometimes put her in danger.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 8;
        this.minimum_rarity = 4;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 17, atk: 7, spd: 9, def: 6, res: 5 },
            5 : { hp: 18, atk: 7, spd: 9, def: 7, res: 6 },
        };
        this.growth_points =
                { hp:  7, atk: 5, spd: 8, def: 5, res: 6 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'sieglinde' ],
            assists   : [ 'pivot' ],
            specials  : [ null ],
            passive_a : [ null ],
            passive_b : [ 'drag_back' ],
            passive_c : [ 'hone_spd_1', 'hone_spd_2', 'hone_spd_3' ]
        };
        this.early_passive = 'passive_c';
        this.position_passive =  'passive_b';
    }
};




chars.eldigan = class eldigan extends allies.ally
{   constructor()
    {   super();
        this.tag = 'eldigan';
        this.name = "Eldigan";
        this.title = "Lionheart";
        this.text = "Ruler of Nordion. Wields the Demon Sword in knightly devotion to any master. Older brother of Lachesis.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 4;
        this.minimum_rarity = 5;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 154;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 19, atk: 8, spd: 5, def: 8, res: 6 },
        };
        this.growth_points =
                { hp:  8, atk: 7, spd: 5, def: 8, res: 2 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'killing_edge', 'mystletainn' ],
            assists   : [ null ],
            specials  : [ 'rising_light', 'growing_light' ],
            passive_a : [ 'fury_1', 'fury_2', 'fury_3' ],
            passive_b : [ 'lunge' ],
            passive_c : [ null ]
        };
        this.early_passive = null;
        this.position_passive =  'passive_b';
    }
};




chars.elise = class elise extends allies.ally
{   constructor()
    {   super();
        this.tag = 'elise';
        this.name = "Elise";
        this.title = "Budding Flower";
        this.text = "Princess of Nohr who adores her siblings. A bit childish, but has a pure heart and keen eyes.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 5;
        this.colour_type = 'colourless';
        this.weapon_type = 'staff';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 145;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 15, atk: 7, spd: 8, def: 4, res: 8 },
        };
        this.growth_points =
                { hp:  3, atk: 7, spd: 7, def: 3, res: 7 };

        this.base_skills =
        {   weapons   : [ 'assault', 'gravity' ],
            assists   : [ 'heal', 'mend', 'recover' ],
            specials  : [ 'imbue', 'kindled_fire_balm' ],
            passive_a : [ null ],
            passive_b : [ 'live_to_serve_1', 'live_to_serve_2', 'live_to_serve_3' ],
            passive_c : [ null ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.eliwood = class eliwood extends allies.ally
{   constructor()
    {   super();
        this.tag = 'eliwood';
        this.name = "Eliwood";
        this.title = "Knight of Lycia";
        this.text = "A sincere noble of Pherae. His friends Lyn and Hector serve him loyally.";
        this.summon = true;
     // this.obtained = 0;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 3;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 155;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 16, atk: 6, spd: 7, def: 5, res: 7 },
            4 : { hp: 16, atk: 6, spd: 8, def: 5, res: 8 },
            5 : { hp: 17, atk: 7, spd: 8, def: 6, res: 8 },
        };
        this.growth_points =
                { hp:  6, atk: 7, spd: 6, def: 4, res: 7 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'durandal' ],
            assists   : [ null ],
            specials  : [ 'holy_vestments', 'sacred_cowl' ],
            passive_a : [ null ],
            passive_b : [ 'axebreaker_1', 'axebreaker_2', 'axebreaker_3' ],
            passive_c : [ 'spur_res_1', 'spur_res_2', 'ward_cavalry' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_b';
    }
};




chars.ephraim = class ephraim extends allies.ally
{   constructor()
    {   super();
        this.tag = 'ephraim';
        this.name = "Ephraim";
        this.title = "Restoration Lord";
        this.text = "Prince of Renais. Eirika's twin. Cares deeply for his sister. His confidence has sometimes put him in danger.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 8;
        this.minimum_rarity = 5;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 19, atk: 9, spd: 6, def: 8, res: 5 },
        };
        this.growth_points =
                { hp:  8, atk: 8, spd: 5, def: 7, res: 3 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'heavy_spear', 'siegmund' ],
            assists   : [ null ],
            specials  : [ 'new_moon', 'moonbow' ],
            passive_a : [ null ],
            passive_b : [ 'seal_def_1', 'seal_def_2', 'seal_def_3' ],
            passive_c : [ 'threaten_def_1', 'threaten_def_2', 'threaten_def_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.est = class est extends allies.ally
{   constructor()
    {   super();
        this.tag = 'est';
        this.name = "Est";
        this.title = "Junior Whitewing";
        this.text = "Youngest of three sisters who are pegasus knights for Macedon.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 3;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 16, atk: 8, spd: 7, def: 4, res: 7 },
            4 : { hp: 16, atk: 9, spd: 8, def: 4, res: 7 },
            5 : { hp: 17, atk: 9, spd: 8, def: 5, res: 8 },
        };
        this.growth_points =
                { hp:  5, atk: 8, spd: 6, def: 5, res: 7 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'heavy_spear', 'heavy_spear_plus' ],
            assists   : [ 'shove' ],
            specials  : [ null ],
            passive_a : [ 'defiant_res_1', 'defiant_res_2', 'defiant_res_3' ],
            passive_b : [ 'seal_spd_1', 'seal_spd_2', 'seal_spd_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_b';
    }
};




chars.fae = class fae extends allies.ally
{   constructor()
    {   super();
        this.tag = 'fae';
        this.name = "Fae";
        this.title = "Divine Dragon";
        this.text = "A surviving Divine Dragon with the nature of a child and very little life experience.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 6;
        this.minimum_rarity = 4;
        this.colour_type = 'green';
        this.weapon_type = 'dragon_green';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 162;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 15, atk: 4, spd: 3, def: 6, res: 8 },
            5 : { hp: 16, atk: 5, spd: 4, def: 6, res: 8 },
        };
        this.growth_points =
                { hp: 10, atk: 9, spd: 7, def: 5, res: 6 };

        this.base_skills =
        {   weapons   : [ 'fire_breath', 'fire_breath_plus', 'light_breath', 'light_breath_plus' ],
            assists   : [ 'draw_back' ],
            specials  : [ null ],
            passive_a : [ null ],
            passive_b : [ 'renewal_1', 'renewal_2', 'renewal_3' ],
            passive_c : [ 'threaten_atk_1', 'threaten_atk_2', 'threaten_atk_3' ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_c';
    }
};




chars.faye = class faye extends allies.ally
{   constructor()
    {   super();
        this.tag = 'faye';
        this.name = "Faye";
        this.title = "Devoted Heart";
        this.text = "A young woman from Ram Village, and Alm's childhood friend. Her devotion to him stretches back to those days.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 15;
        this.minimum_rarity = 5;
        this.colour_type = 'grey';
        this.weapon_type = 'bow';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 154;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 16, atk: 6, spd: 3, def: 4, res: 7 },
        };
        this.growth_points =
                { hp:  8, atk: 7, spd: 6, def: 6, res: 7 };

        this.base_skills =
        {   weapons   : [ 'iron_bow', 'steel_bow', 'firesweep_bow', 'firesweep_bow_plus' ],
            assists   : [ null ],
            specials  : [ 'daylight', 'noontime' ],
            passive_a : [ null ],
            passive_b : [ 'wings_of_mercy_1', 'wings_of_mercy_2', 'wings_of_mercy_3' ],
            passive_c : [ 'bow_exp_1', 'bow_exp_2', 'bow_exp_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




let feh = class feh extends allies.ally
{   constructor()
    {   super();
        this.tag = 'feh';
        this.name = "「フェー」";
        this.title = "Happy Owl";
        this.text = "アスク王国特務機関の伝書ふくろう";
        this.summon = true;
     // this.obtained = #;
        this.favourite = '❤';
        this.fruit = '🍑';
        this.origin = 0;
        this.minimum_rarity = 5;
        this.colour_type = 'grey';
        this.weapon_type = 'heart';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : null,
        };

        this.base_skills =
        {   weapons   : [ null ],
            assists   : [ null ],
            specials  : [ null ],
            passive_a : [ null ],
            passive_b : [ null ],
            passive_c : [ null ],
        };
    }

    return_nature() { return "❤"; }
    set_rarity() { this.rarity = 5; }

};




chars.felicia = class felicia extends allies.ally
{   constructor()
    {   super();
        this.tag = 'felicia';
        this.name = "Felicia";
        this.title = "Maid Mayhem";
        this.text = "A maid of Nohr who's eager to do good work yet often bungles. One of Corrin's retainers.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 1;
        this.colour_type = 'grey';
        this.weapon_type = 'dagger';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : { hp: 13, atk: 4, spd:  9, def: 1, res: 7 },
            2 : { hp: 13, atk: 4, spd: 10, def: 1, res: 8 },
            3 : { hp: 14, atk: 5, spd: 10, def: 2, res: 8 },
            4 : { hp: 14, atk: 5, spd: 11, def: 2, res: 9 },
            5 : { hp: 15, atk: 6, spd: 11, def: 3, res: 9 },
        };
        this.growth_points =
                { hp:  5, atk: 4, spd: 8, def: 3, res: 8 };

        this.base_skills =
        {   weapons   : [ 'iron_dagger', 'steel_dagger', 'silver_dagger', 'silver_dagger_plus' ],
            assists   : [ null ],
            specials  : [ 'chilling_wind', 'glacies' ],
            passive_a : [ 'resistance_plus_1', 'resistance_plus_2', 'resistance_plus_3' ],
            passive_b : [ null ],
            passive_c : [ 'breath_of_life_1', 'breath_of_life_2', 'breath_of_life_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_a';
    }
};




chars.fir = class fir extends allies.ally
{   constructor()
    {   super();
        this.tag = 'fir';
        this.name = "Fir";
        this.title = "Sword Student";
        this.text = "A woman who travels in search of the best swordplay opponents anywhere.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 6;
        this.minimum_rarity = 3;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 18, atk: 5, spd:  9, def: 4, res: 6 },
            4 : { hp: 18, atk: 5, spd: 10, def: 4, res: 6 },
            5 : { hp: 19, atk: 6, spd: 10, def: 5, res: 7 },
        };
        this.growth_points =
                { hp:  6, atk: 5, spd: 8, def: 5, res: 7 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'killing_edge', 'killing_edge_plus' ],
            assists   : [ null ],
            specials  : [ 'chilling_wind', 'glacies' ],
            passive_a : [ 'speed_plus_1', 'speed_plus_2', 'speed_plus_3' ],
            passive_b : [ 'pass_1', 'pass_2', 'pass_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_b';
    }
};




chars.florina = class florina extends allies.ally
{   constructor()
    {   super();
        this.tag = 'florina';
        this.name = "Florina";
        this.title = "Lovely Flier";
        this.text = "Youngest of three sisters who are Pegasus Knights of Ilia. Shy, gentle girl who loves animals.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 3;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 17, atk: 6, spd: 7, def: 5, res: 7 },
            4 : { hp: 17, atk: 6, spd: 8, def: 5, res: 8 },
            5 : { hp: 18, atk: 7, spd: 8, def: 6, res: 8 },
        };
        this.growth_points =
                { hp:  7, atk: 6, spd: 5, def: 5, res: 8 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'heavy_spear', 'heavy_spear_plus' ],
            assists   : [ 'ardent_sacrifice' ],
            specials  : [ null ],
            passive_a : [ 'darting_blow_1', 'darting_blow_2', 'darting_blow_3' ],
            passive_b : [ null ],
            passive_c : [ 'breath_of_life_1', 'breath_of_life_2', 'breath_of_life_3' ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_c';
    }
};




chars.frederick = class frederick extends allies.ally
{   constructor()
    {   super();
        this.tag = 'frederick';
        this.name = "Frederick";
        this.title = "title";
        this.text = "thelongdescriptiontextnotthetitle";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 3;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 153;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 18, atk: 8, spd: 5, def: 7, res: 3 },
            4 : { hp: 18, atk: 9, spd: 5, def: 8, res: 3 },
            5 : { hp: 19, atk: 9, spd: 6, def: 8, res: 4 },
        };
        this.growth_points =
                { hp:  7, atk: 8, spd: 5, def: 9, res: 1 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'hammer', 'hammer_plus' ],
            assists   : [ null ],
            specials  : [ 'new_moon', 'luna' ],
            passive_a : [ null ],
            passive_b : [ 'wings_of_mercy_1', 'wings_of_mercy_2', 'wings_of_mercy_3' ],
            passive_c : [ 'fortify_def_1', 'fortify_def_2', 'fortify_def_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_b';
    }
};




chars.gaius = class gaius extends allies.ally
{   constructor()
    {   super();
        this.tag = 'gaius';
        this.name = "Gaius";
        this.title = "Candy Stealer";
        this.text = "Thief of Ylisse known for his nimble hands and sweet tooth. Hides sweets in his pocket.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 3;
        this.colour_type = 'grey';
        this.weapon_type = 'dagger';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 17, atk: 6, spd:  9, def: 4, res: 3 },
            4 : { hp: 17, atk: 7, spd: 10, def: 4, res: 3 },
            5 : { hp: 18, atk: 7, spd: 10, def: 5, res: 4 },
        };
        this.growth_points =
                { hp:  7, atk: 6, spd:  8, def: 4, res: 3 };

        this.base_skills =
        {   weapons   : [ 'iron_dagger', 'steel_dagger', 'rogue_dagger', 'rogue_dagger_plus' ],
            assists   : [ 'rally_speed' ],
            specials  : [ null ],
            passive_a : [ 'defiant_atk_1', 'defiant_atk_2', 'defiant_atk_3' ],
            passive_b : [ 'pass_1', 'pass_2', 'pass_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};




chars.genny = class genny extends allies.ally
{   constructor()
    {   super();
        this.tag = 'genny';
        this.name = "Genny";
        this.title = "Endearing Ally";
        this.text = "A meek young cleric from Novis. Likes to write her own stories.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 15;
        this.minimum_rarity = 5;
        this.colour_type = 'grey';
        this.weapon_type = 'staff';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 17, atk: 9, spd: 6, def: 4, res: 8 },
        };
        this.growth_points =
                { hp:  3, atk: 8, spd: 5, def: 4, res: 8 };

        this.base_skills =
        {   weapons   : [ 'assault', 'gravity' ],
            assists   : [ 'heal', 'mend', 'physic' ],
            specials  : [ 'imbue', 'heavenly_light' ],
            passive_a : [ null ],
            passive_b : [ 'wrathful_staff_1', 'wrathful_staff_2', 'wrathful_staff_3' ],
            passive_c : [ null ],
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.gordin = class gordin extends allies.ally
{   constructor()
    {   super();
        this.tag = 'gordin';
        this.name = "Gordin";
        this.title = "Altean Archer";
        this.text = "Altean archer who is masterful with his bow. Looks younger than he actually is.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 3;
        this.colour_type = 'grey';
        this.weapon_type = 'bow';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 18, atk: 6, spd: 5, def: 7, res: 3 },
            4 : { hp: 18, atk: 7, spd: 5, def: 8, res: 3 },
            5 : { hp: 19, atk: 7, spd: 6, def: 8, res: 4 },
        };
        this.growth_points =
                { hp:  7, atk: 7, spd: 5, def: 7, res: 2 };

        this.base_skills =
        {   weapons   : [ 'iron_bow', 'steel_bow', 'brave_bow', 'brave_bow_plus' ],
            assists   : [ 'shove' ],
            specials  : [ null ],
            passive_a : [ 'attack_plus_1', 'attack_plus_2', 'attack_plus_3' ],
            passive_b : [ 'vantage_1', 'vantage_2', 'vantage_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_b';
    }
};




chars.gunter = class gunter extends allies.ally
{   constructor()
    {   super();
        this.tag = 'gunter';
        this.name = "Gunter";
        this.title = "Inveterate Soldier";
        this.text = "Veteran knight of Nohr. One of Corrin's retainers. Extremely strict.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 1;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 150;
        this.base_stats =
        {   1 : { hp: 19, atk:  8, spd: 5, def:  9, res: 3 },
            2 : { hp: 19, atk:  9, spd: 5, def: 10, res: 3 },
            3 : { hp: 20, atk:  9, spd: 6, def: 10, res: 4 },
            4 : { hp: 20, atk: 10, spd: 6, def: 11, res: 4 },
            5 : { hp: 21, atk: 10, spd: 7, def: 11, res: 5 },
        };
        this.growth_points =
                { hp:  6, atk: 6, spd: 4, def: 6, res: 2 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'silver_axe', 'silver_axe_plus' ],
            assists   : [ 'harsh_command' ],
            specials  : [ null ],
            passive_a : [ 'armored_blow_1', 'armored_blow_2', 'armored_blow_3' ],
            passive_b : [ null ],
            passive_c : [ 'hone_atk_1', 'hone_atk_2', 'hone_cavalry' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_a';
    }
};




chars.gwendolyn = class gwendolyn extends allies.ally
{   constructor()
    {   super();
        this.tag = 'gwendolyn';
        this.name = "Gwendolyn";
        this.title = "Adorable Knight";
        this.text = "Armored knight of Ostia. Intent on mastering defense, despite feeling awkward in the armor.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 6;
        this.minimum_rarity = 3;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'armor';
     // this.level = 40;
     // this.rating = 169;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 22, atk: 7, spd: 4, def: 11, res: 5 },
            4 : { hp: 22, atk: 8, spd: 4, def: 12, res: 5 },
            5 : { hp: 23, atk: 8, spd: 5, def: 12, res: 6 },
        };
        this.growth_points =
                { hp:  8, atk: 6, spd: 5, def: 8, res: 6 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'killer_axe', 'killer_lance_plus' ],
            assists   : [ null ],
            specials  : [ 'buckler', 'escutcheon' ],
            passive_a : [ null ],
            passive_b : [ 'drag_back' ],
            passive_c : [ 'hone_atk_1', 'hone_atk_2', 'hone_armor' ]
        };
        this.early_passive = 'passive_c';
        this.position_passive =  'passive_b';
    }
};




chars.hana = class hana extends allies.ally
{   constructor()
    {   super();
        this.tag = 'hana';
        this.name = "Hana";
        this.title = "Focused Samurai";
        this.text = "A noble who is skilled with the katana. One of Sakura's retainers.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 1;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : { hp: 16, atk: 7, spd:  8, def: 4, res: 2 },
            2 : { hp: 16, atk: 8, spd:  9, def: 4, res: 2 },
            3 : { hp: 17, atk: 8, spd:  9, def: 5, res: 3 },
            4 : { hp: 17, atk: 9, spd: 10, def: 5, res: 3 },
            5 : { hp: 18, atk: 9, spd: 10, def: 6, res: 4 },
        };
        this.growth_points =
                { hp:  5, atk: 8, spd:  8, def: 4, res: 6 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'armorslayer', 'armorslayer_plus' ],
            assists   : [ 'rally_attack' ],
            specials  : [ null ],
            passive_a : [ 'life_and_death_1', 'life_and_death_2', 'life_and_death_3' ],
            passive_b : [ 'obstruct_1', 'obstruct_2', 'obstruct_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};




chars.hawkeye = class hawkeye extends allies.ally
{   constructor()
    {   super();
        this.tag = 'hawkeye';
        this.name = "Hawkeye";
        this.title = "Desert Guardian";
        this.text = "Guardian of the Nabata Desert and Arcadia, where dragons and humans live in harmony.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 4;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 20, atk: 9, spd: 4, def: 6, res: 5 },
            5 : { hp: 21, atk: 9, spd: 5, def: 6, res: 6 },
        };
        this.growth_points =
                { hp:  7, atk: 7, spd: 4, def: 6, res: 7 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'killer_axe', 'killer_axe_plus' ],
            assists   : [ null ],
            specials  : [ 'rising_light', 'growing_light' ],
            passive_a : [ 'death_blow_1', 'death_blow_2', 'death_blow_3' ],
            passive_b : [ null ],
            passive_c : [ 'threaten_atk_1', 'threaten_atk_2', 'threaten_atk_3' ],
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_a';
    }
};




chars.hector = class hector extends allies.ally
{   constructor()
    {   super();
        this.tag = 'hector';
        this.name = "Hector";
        this.title = "General of Ostia";
        this.text = "Eliwood's friend and brother of the Marquess of Ostia. Prefers action to court formality.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 5;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'armor';
     // this.level = 40;
     // this.rating = 168;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 24, atk: 10, spd: 5, def: 11, res: 4 },
        };
        this.growth_points =
                { hp:  9, atk: 8, spd: 5, def: 8, res: 3 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'silver_axe', 'armads' ],
            assists   : [ null ],
            specials  : [ 'buckler', 'pavise' ],
            passive_a : [ 'distant_counter' ],
            passive_b : [ null ],
            passive_c : [ 'spur_atk_2', 'spur_atk_3', 'goad_armor' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
        this.range_passive = 'passive_a';
    }
};




chars.henry = class henry extends allies.ally
{   constructor()
    {   super();
        this.tag = 'henry';
        this.name = "Henry";
        this.title = "Twisted Mind";
        this.text = "A dark mage of Plegia with a bright grin and a taste for the gruesome in battle.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 3;
        this.colour_type = 'red';
        this.weapon_type = 'tome_red';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 18, atk: 5, spd: 4, def: 7, res: 5 },
            4 : { hp: 18, atk: 6, spd: 4, def: 8, res: 5 },
            5 : { hp: 19, atk: 6, spd: 5, def: 8, res: 6 },
        };
        this.growth_points =
                { hp:  8, atk: 4, spd: 4, def: 7, res: 5 };

        this.base_skills =
        {   weapons   : [ 'flux', 'ruin', 'raudrraven', 'raudrraven_plus' ],
            assists   : [ null ],
            specials  : [ 'glowing_ember', 'ignis' ],
            passive_a : [ 'defiant_def_1', 'defiant_def_2', 'defiant_def_3' ],
            passive_b : [ 'greentomebreaker_1', 'greentomebreaker_2', 'greentomebreaker_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};




chars.hinata = class hinata extends allies.ally
{   constructor()
    {   super();
        this.tag = 'hinata';
        this.name = "Hinata";
        this.title = "Wild Samurai";
        this.text = "A coarse, yet caring, samurai of Hoshido. One of Takumi's retainers.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 3;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 20, atk: 7, spd: 4, def:  9, res: 2 },
            4 : { hp: 20, atk: 8, spd: 4, def: 10, res: 2 },
            5 : { hp: 21, atk: 8, spd: 5, def: 10, res: 3 },
        };
        this.growth_points =
                { hp:  8, atk: 7, spd: 5, def: 8, res: 3 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'ruby_sword', 'ruby_sword_plus' ],
            assists   : [ null ],
            specials  : [ 'buckler', 'pavise' ],
            passive_a : [ 'fury_1', 'fury_2', 'fury_3' ],
            passive_b : [ 'brash_assault_1', 'brash_assault_2', 'brash_assault_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_b';
    }
};




chars.hinoka = class hinoka extends allies.ally
{   constructor()
    {   super();
        this.tag = 'hinoka';
        this.name = "Hinoka";
        this.title = "Warrior Princess";
        this.text = "Hoshidan princess who prefers battles over court life. Excels at watching over others.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 5;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 19, atk: 7, spd: 8, def: 6, res: 7 },
        };
        this.growth_points =
                { hp:  6, atk: 9, spd: 7, def: 5, res: 4 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'brave_lance', 'brave_lance_plus' ],
            assists   : [ null ],
            specials  : [ 'rising_wind', 'blazing_wind' ],
            passive_a : [ 'defiant_def_1', 'defiant_def_2', 'defiant_def_3' ],
            passive_b : [ null ],
            passive_c : [ 'hone_spd_1', 'hone_spd_2', 'hone_flyers' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.ike = class ike extends allies.ally
{   constructor()
    {   super();
        this.tag = 'ike';
        this.name = "Ike";
        this.title = "Young Mercenary";
        this.text = "A kindhearted byt stoic young man who has taken command of his father's mercenary band.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 9;
        this.minimum_rarity = 5;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 18, atk: 9, spd: 7, def: 8, res: 5 },
        };
        this.growth_points =
                { hp:  7, atk: 8, spd: 7, def: 7, res: 2 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'ragnell' ],
            assists   : [ null ],
            specials  : [ 'new_moon', 'luna', 'aether' ],
            passive_a : [ 'heavy_blade_1', 'heavy_blade_2', 'heavy_blade_3' ],
            passive_b : [ 'swordbreaker_1', 'swordbreaker_2', 'swordbreaker_3' ],
            passive_c : [ null ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.jaffar = class jaffar extends allies.ally
{   constructor()
    {   super();
        this.tag = 'jaffar';
        this.name = "Jaffar";
        this.title = "Angel of Death";
        this.text = "An emotionless member of the Black Fang assassins. Known as the Angel of Death.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 5;
        this.colour_type = 'grey';
        this.weapon_type = 'dagger';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 17, atk: 7, spd: 9, def: 6, res: 5 },
        };
        this.growth_points =
                { hp:  7, atk: 5, spd: 7, def: 5, res: 4 };

        this.base_skills =
        {   weapons   : [ 'iron_dagger', 'steel_dagger', 'silver_dagger', 'deathly_dagger' ],
            assists   : [ null ],
            specials  : [ 'night_sky', 'glimmer' ],
            passive_a : [ 'life_and_death_1', 'life_and_death_2', 'life_and_death_3' ],
            passive_b : [ null ],
            passive_c : [ 'threaten_spd_1', 'threaten_spd_2', 'threaten_spd_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.jagen = class jagen extends allies.ally
{   constructor()
    {   super();
        this.tag = 'jagen';
        this.name = "Jagen";
        this.title = "Veteran Knight";
        this.text = "Veteran knight of Altea who protected Marth since he was young.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 3;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 19, atk: 7, spd: 6, def: 7, res: 10 },
            4 : { hp: 19, atk: 8, spd: 6, def: 7, res: 11 },
            5 : { hp: 20, atk: 8, spd: 7, def: 8, res: 11 },
        };
        this.growth_points =
                { hp:  4, atk: 5, spd: 4, def: 4, res:  7 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'silver_lance', 'silver_lance_plus' ],
            assists   : [ null ],
            specials  : [ 'holy_vestments', 'aegis' ],
            passive_a : [ 'fury_1', 'fury_2', 'fury_3' ],
            passive_b : [ null ],
            passive_c : [ 'fortify_res_1', 'fortify_res_2', 'fortify_cavalry' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_a';
    }
};




chars.jakob = class jakob extends allies.ally
{   constructor()
    {   super();
        this.tag = 'jakob';
        this.name = "Jakob";
        this.title = "Devoted Servant";
        this.text = "A butler of Nohr who's superb at his work yet dislikes serving anyone but his liege, Corrin.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 4;
        this.colour_type = 'colourless';
        this.weapon_type = 'dagger';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 16, atk: 7, spd: 9, def: 5, res: 4 },
            5 : { hp: 17, atk: 7, spd: 9, def: 6, res: 5 },
        };
        this.growth_points =
                { hp:  6, atk: 6, spd: 6, def: 5, res: 5 };

        this.base_skills =
        {   weapons   : [ 'iron_dagger', 'steel_dagger', 'silver_dagger', 'silver_dagger_plus' ],
            assists   : [ 'rally_resistance' ],
            specials  : [ null ],
            passive_a : [ 'defense_plus_1', 'defense_plus_2', 'defense_plus_3' ],
            passive_b : [ 'renewal_1', 'renewal_2', 'renewal_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_b';
    }
};




chars.jeorge = class jeorge extends allies.ally
{   constructor()
    {   super();
        this.tag = 'jeorge';
        this.name = "Jeorge";
        this.title = "Perfect Shot";
        this.text = "Archanean archer thought to be the best on his continent. A skilled strategist.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 4;
        this.colour_type = 'grey';
        this.weapon_type = 'bow';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 17, atk: 8, spd: 8, def: 4, res: 4 },
            5 : { hp: 18, atk: 8, spd: 8, def: 5, res: 5 },
        };
        this.growth_points =
                { hp:  5, atk: 7, spd: 7, def: 5, res: 4 };

        this.base_skills =
        {   weapons   : [ 'iron_bow', 'steel_bow', 'silver_bow', 'parthia' ],
            assists   : [ null ],
            specials  : [ 'rising_flame', 'blazing_flame' ],
            passive_a : [ null ],
            passive_b : [ 'seal_atk_1', 'seal_atk_2', 'seal_atk_3' ],
            passive_c : [ 'spur_spd_1', 'spur_spd_2', 'spur_spd_3' ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_c';
    }
};




chars.julia = class julia extends allies.ally
{   constructor()
    {   super();
        this.tag = 'julia';
        this.name = "Julia";
        this.title = "Naga's Blood";
        this.text = "Inheritor of the Book of Naga. Seliph’s half sister by a different father. Gentle, yet faces her destiny with strength.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 4;
        this.minimum_rarity = 5;
        this.colour_type = 'green';
        this.weapon_type = 'tome_green';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 16, atk: 9, spd: 7, def: 4, res: 8 },
        };
        this.growth_points =
                { hp:  6, atk: 8, spd: 5, def: 2, res: 7 };

        this.base_skills =
        {   weapons   : [ 'wind', 'elwind', 'rexcalibur', 'naga' ],
            assists   : [ null ],
            specials  : [ 'dragon_gaze', 'dragon_fang' ],
            passive_a : [ 'resistance_plus_1', 'resistance_plus_2', 'resistance_plus_3' ],
            passive_b : [ null ],
            passive_c : [ 'breath_of_life_1', 'breath_of_life_2', 'breath_of_life_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.kagero = class kagero extends allies.ally
{   constructor()
    {   super();
        this.tag = 'kagero';
        this.name = "Kagero";
        this.title = "Honorable Ninja";
        this.text = "A ninja of Hoshido who is ready to lay down her life for her liege. One of Ryoma's retainers.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 4;
        this.colour_type = 'colourless';
        this.weapon_type = 'dagger';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 15, atk: 9, spd: 8, def: 4, res: 5 },
            5 : { hp: 16, atk: 9, spd: 8, def: 5, res: 6 },
        };
        this.growth_points =
                { hp:  3, atk: 8, spd: 7, def: 4, res: 6 };

        this.base_skills =
        {   weapons   : [ 'iron_dagger', 'steel_dagger', 'poison_dagger', 'poison_dagger_plus' ],
            assists   : [ null ],
            specials  : [ 'retribution', 'reprisal' ],
            passive_a : [ 'warding_blow_1', 'warding_blow_2', 'warding_blow_3' ],
            passive_b : [ 'daggerbreaker_1', 'daggerbreaker_2', 'daggerbreaker_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};




chars.karel = class karel extends allies.ally
{   constructor()
    {   super();
        this.tag = 'karel';
        this.name = "Karel";
        this.title = "Sword Demon";
        this.text = "A vicious swordsman from a family devoted to mastering the blade. Known as the Sword Demon.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 5;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 19, atk: 8, spd: 9, def: 6, res: 5 },
        };
        this.growth_points =
                { hp:  9, atk: 6, spd: 8, def: 5, res: 3 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'wo_dao', 'wo_dao_plus' ],
            assists   : [ null ],
            specials  : [ 'retribution', 'reprisal' ],
            passive_a : [ 'defiant_atk_1', 'defiant_atk_2', 'defiant_atk_3' ],
            passive_b : [ 'desperation_1', 'desperation_2', 'desperation_3' ],
            passive_c : [ null ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.klein = class klein extends allies.ally
{   constructor()
    {   super();
        this.tag = 'klein';
        this.name = "Klein";
        this.title = "Silver Nobleman";
        this.text = "A young general of Etruria. Clarine's brother. Treats all as equals.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 6;
        this.minimum_rarity = 4;
        this.colour_type = 'grey';
        this.weapon_type = 'bow';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 17, atk: 9, spd: 7, def: 4, res: 4 },
            5 : { hp: 18, atk: 9, spd: 7, def: 5, res: 5 },
        };
        this.growth_points =
                { hp:  6, atk: 6, spd: 8, def: 3, res: 5 };

        this.base_skills =
        {   weapons   : [ 'iron_bow', 'steel_bow', 'brave_bow', 'brave_bow_plus' ],
            assists   : [ null ],
            specials  : [ 'chilling_wind', 'glacies' ],
            passive_a : [ 'death_blow_1', 'death_blow_2', 'death_blow_3' ],
            passive_b : [ 'quick_riposte_1', 'quick_riposte_2', 'quick_riposte_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_b';
    }
};




chars.lachesis = class lachesis extends allies.ally
{   constructor()
    {   super();
        this.tag = 'lachesis';
        this.name = "Lachesis";
        this.title = "Lionheart's Sister";
        this.text = "Lady of House Nordion. Adores her older brother, Eldigan, to the point that other men pale in comparison.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 4;
        this.minimum_rarity = 4;
        this.colour_type = 'colourless';
        this.weapon_type = 'staff';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 16, atk: 5, spd: 8, def: 4, res: 8 },
            5 : { hp: 17, atk: 6, spd: 8, def: 5, res: 8 },
        };
        this.growth_points =
                { hp:  6, atk: 8, spd: 4, def: 4, res: 6 };

        this.base_skills =
        {   weapons   : [ 'assault', 'absorb' ],
            assists   : [ 'heal', 'mend', 'physic' ],
            specials  : [ 'imbue', 'solid_earth_balm' ],
            passive_a : [ null ],
            passive_b : [ null ],
            passive_c : [ 'spur_res_1', 'spur_res_2', 'spur_res_3' ]
        };
        this.early_passive = null;
        this.late_passive =  'passive_c';
    }
};




chars.laslow = class laslow extends allies.ally
{   constructor()
    {   super();
        this.tag = 'laslow';
        this.name = "Laslow";
        this.title = "Dancing Duelist";
        this.text = "A mysterious man with a flair for dancing and flirting. One of Xander's retainers.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 3;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 19, atk: 8, spd: 6, def: 5, res: 4 },
            4 : { hp: 19, atk: 9, spd: 7, def: 5, res: 4 },
            5 : { hp: 20, atk: 9, spd: 7, def: 6, res: 5 },
        };
        this.growth_points =
                { hp:  7, atk: 8, spd: 5, def: 7, res: 4 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'silver_sword_plus' ],
            assists   : [ null ],
            specials  : [ 'daylight', 'noontime' ],
            passive_a : [ null ],
            passive_b : [ 'axebreaker_1', 'axebreaker_2', 'axebreaker_3' ],
            passive_c : [ 'hone_spd_1', 'hone_spd_2', 'hone_spd_3' ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_c';
    }
};




chars.leo = class leo extends allies.ally
{   constructor()
    {   super();
        this.tag = 'leo';
        this.name = "Leo";
        this.title = "Sorcerous Prince";
        this.text = "A talented Nohrian prince who wields the divine tome Brynhildr.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 5;
        this.colour_type = 'red';
        this.weapon_type = 'tome_red';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 145;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 17, atk: 7, spd: 5, def: 6, res: 8 },
        };
        this.growth_points =
                { hp:  6, atk: 6, spd: 4, def: 5, res: 6 };

        this.base_skills =
        {   weapons   : [ 'flux', 'ruin', 'fenrir', 'brynhildr' ],
            assists   : [ null ],
            specials  : [ 'rising_light', 'blazing_light' ],
            passive_a : [ null ],
            passive_b : [ 'quick_riposte_1', 'quick_riposte_2', 'quick_riposte_3' ],
            passive_c : [ 'savage_blow_1', 'savage_blow_2', 'savage_blow_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.lilina = class lilina extends allies.ally
{   constructor()
    {   super();
        this.tag = 'lilina';
        this.name = "Lilina";
        this.title = "Delightful Noble";
        this.text = "A noble of Ostia and daughter of Hector with a natural gift for magic. Roy's friend since childhood.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 6;
        this.minimum_rarity = 4;
        this.colour_type = 'red';
        this.weapon_type = 'tome_red';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 15, atk: 9, spd: 5, def: 3, res: 9 },
            5 : { hp: 16, atk: 9, spd: 6, def: 4, res: 9 },
        };
        this.growth_points =
                { hp:  5, atk: 9, spd: 5, def: 3, res: 6 };

        this.base_skills =
        {   weapons   : [ 'fire', 'elfire', 'bolganone', 'bolganone_plus' ],
            assists   : [ null ],
            specials  : [ 'rising_flame', 'growing_flame' ],
            passive_a : [ 'attack_plus_1', 'attack_plus_2', 'attack_plus_3' ],
            passive_b : [ null ],
            passive_c : [ 'spur_atk_1', 'spur_atk_2', 'spur_atk_3' ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_c';
    }
};




chars.linde = class linde extends allies.ally
{   constructor()
    {   super();
        this.tag = 'linde';
        this.name = "Linde";
        this.title = "Light Mage";
        this.text = "Daughter of Pontifex Miloah from Archanea. Inherited the light tome Aura. Wants to avenge her father's death.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 5;
        this.colour_type = 'blue';
        this.weapon_type = 'tome_blue';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 16, atk: 9, spd: 10, def: 4, res: 5 },
        };
        this.growth_points =
                { hp:  5, atk: 8, spd:  8, def: 1, res: 6 };

        this.base_skills =
        {   weapons   : [ 'thunder', 'elthunder', 'thoron', 'aura' ],
            assists   : [ 'ardent_sacrifice' ],
            specials  : [ null ],
            passive_a : [ 'speed_plus_1', 'speed_plus_2', 'speed_plus_3' ],
            passive_b : [ null ],
            passive_c : [ 'fortify_res_1', 'fortify_res_2', 'fortify_res_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.lissa = class lissa extends allies.ally
{   constructor()
    {   super();
        this.tag = 'lissa';
        this.name = "Lissa";
        this.title = "Sprightly Cleric";
        this.text = "Princess of Ylisse's royal house and Chrom's younger sister. Determined to prove herself.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 1;
        this.colour_type = 'colourless';
        this.weapon_type = 'staff';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : { hp: 15, atk: 5, spd: 4, def: 4, res: 6 },
            2 : { hp: 15, atk: 6, spd: 4, def: 4, res: 7 },
            3 : { hp: 16, atk: 6, spd: 5, def: 5, res: 7 },
            4 : { hp: 16, atk: 7, spd: 5, def: 5, res: 8 },
            5 : { hp: 17, atk: 7, spd: 6, def: 6, res: 8 },
        };
        this.growth_points =
                { hp:  6, atk: 5, spd: 5, def: 6, res: 6 };

        this.base_skills =
        {   weapons   : [ 'assault', 'gravity' ],
            assists   : [ 'heal', 'reconcile', 'rehabilitate' ],
            specials  : [ 'imbue', 'kindled_fire_balm' ],
            passive_a : [ null ],
            passive_b : [ 'renewal_1', 'renewal_2', 'renewal_3' ],
            passive_c : [ null ]
        };
        this.early_passive = null;
        this.late_passive =  'passive_b';
    }
};




chars.lloyd = class lloyd extends allies.ally
{   constructor()
    {   super();
        this.tag = 'lloyd';
        this.name = "Lloyd";
        this.title = "White Wolf";
        this.text = "A member of the Black Fang assassins. Delivers justice to those they deem criminals. Known as the White Wolf. Son of the group's leader.";
        this.summon = false;
     // this.obtained = #;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 3;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 16, atk: 7, spd: 8, def: 4, res: 7 },
            4 : { hp: 16, atk: 8, spd: 9, def: 4, res: 7 },
            5 : { hp: 17, atk: 8, spd: 9, def: 5, res: 8 },
        };
        this.growth_points =
                { hp:  7, atk: 7, spd: 8, def: 3, res: 6 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'regal_blade' ],
            assists   : [ null ],
            specials  : [ 'chilling_wind', 'iceberg' ],
            passive_a : [ null ],
            passive_b : [ 'pass_1', 'pass_2', 'pass_3' ],
            passive_c : [ 'threaten_atk_1', 'threaten_atk_2', 'threaten_atk_3' ],
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_c';
    }
};




chars.lonqu = class lonqu extends allies.ally
{   constructor()
    {   super();
        this.tag = 'lonqu';
        this.name = "Lon'qu";
        this.title = "Solitary Blade";
        this.text = "A skilled swordsman of Regna Ferox who is oddly skittish around women.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 3;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 18, atk: 6, spd: 10, def: 4, res: 4 },
            4 : { hp: 18, atk: 7, spd: 11, def: 4, res: 4 },
            5 : { hp: 19, atk: 7, spd: 11, def: 5, res: 5 },
        };
        this.growth_points =
                { hp:  8, atk: 6, spd:  9, def: 4, res: 4 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'killing_edge', 'killing_edge_plus' ],
            assists   : [ null ],
            specials  : [ 'night_sky', 'glimmer' ],
            passive_a : [ 'speed_plus_1', 'speed_plus_2', 'speed_plus_3' ],
            passive_b : [ 'vantage_1', 'vantage_2', 'vantage_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};




chars.lucina = class lucina extends allies.ally
{   constructor()
    {   super();
        this.tag = 'lucina';
        this.name = "Lucina";
        this.title = "Future Witness";
        this.text = "A princess and daughter of Chrom who traveled to her past to prevent apocalypse.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 5;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 19, atk: 8, spd: 10, def: 6, res: 4 },
        };
        this.growth_points =
                { hp:  7, atk: 8, spd:  8, def: 5, res: 3 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'falchion' ],
            assists   : [ null ],
            specials  : [ 'new_moon', 'luna', 'aether' ],
            passive_a : [ 'defiant_spd_1', 'defiant_spd_2', 'defiant_spd_3' ],
            passive_b : [ null ],
            passive_c : [ 'spur_atk_1', 'spur_atk_2', 'spur_atk_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.lucina_spring = class lucina_spring extends allies.ally
{   constructor()
    {   super();
        this.tag = 'lucina_spring';
        this.name = "Lucina";
        this.subname = "🐇";
        this.title = "Spring Exalt";
        this.text = "Daughter of Chrom. Future exalt of Ylisse. Curious about the old festival traditions of Ylisse.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 5;
        this.colour_type = 'blue';
        this.weapon_type = 'tome_blue';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 16, atk: 7, spd: 10, def: 5, res: 6 },
        };
        this.growth_points =
                { hp:  5, atk: 6, spd:  8, def: 4, res: 5 };

        this.base_skills =
        {   weapons   : [ 'thunder', 'elthunder', 'blue_egg', 'blue_egg_plus' ],
            assists   : [ 'rally_speed' ],
            specials  : [ null ],
            passive_a : [ 'darting_blow_1', 'swift_sparrow_1', 'swift_sparrow_2' ],
            passive_b : [ 'seal_res_1', 'seal_res_2', 'seal_res_3' ],
            passive_c : [ null ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.lucius = class lucius extends allies.ally
{   constructor()
    {   super();
        this.tag = 'lucius';
        this.name = "Lucius";
        this.title = "The Light";
        this.text = "A gentle cleric who serves Raven. Carries a heavy burden from a dark childhood.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 4;
        this.colour_type = 'grey';
        this.weapon_type = 'staff';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 17, atk: 5, spd: 8, def: 2, res: 9 },
            5 : { hp: 18, atk: 6, spd: 8, def: 3, res: 9 },
        };
        this.growth_points =
                { hp:  5, atk: 8, spd: 6, def: 1, res: 8 };

        this.base_skills =
        {   weapons   : [ 'assault', 'pain' ],
            assists   : [ 'heal', 'reconcile', 'martyr' ],
            specials  : [ 'imbue', 'miracle' ],
            passive_a : [ 'hp_plus_3', 'hp_plus_4', 'hp_plus_5' ],
            passive_b : [ null ],
            passive_c : [ null ]
        };
        this.early_passive = null;
        this.late_passive =  'passive_a';
    }
};




chars.lukas = class lukas extends allies.ally
{   constructor()
    {   super();
        this.tag = 'lukas';
        this.name = "Lukas";
        this.title = "Sharp Soldier";
        this.text = "A young noble fighting for the Deliverance. Strict, calm, and considerate.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 15;
        this.minimum_rarity = 4;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 18, atk: 9, spd: 4, def: 10, res: 3 },
            5 : { hp: 19, atk: 9, spd: 5, def: 10, res: 4 },
        };
        this.growth_points =
                { hp:  8, atk: 8, spd: 4, def:  9, res: 2 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'killer_lance', 'killer_lance_plus' ],
            assists   : [ null ],
            specials  : [ 'holy_vestments', 'sacred_cowl' ],
            passive_a : [ 'fortress_def_1', 'fortress_def_2', 'fortress_def_3' ],
            passive_b : [ 'obstruct_1', 'obstruct_2', 'obstruct_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};




chars.lyn = class lyn extends allies.ally
{   constructor()
    {   super();
        this.tag = 'lyn';
        this.name = "Lyn";
        this.title = "Lady of the Plains";
        this.text = "A woman who grew up on the plains before learning she is the nobility of Caelin.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 5;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 18, atk: 6, spd: 11, def: 7, res: 5 },
        };
        this.growth_points =
                { hp:  5, atk: 6, spd:  8, def: 5, res: 7 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'sol_katti' ],
            assists   : [ null ],
            specials  : [ 'night_sky', 'astra', 'galeforce' ],
            passive_a : [ 'defiant_atk_1', 'defiant_atk_2', 'defiant_atk_3' ],
            passive_b : [ null ],
            passive_c : [ 'spur_spd_1', 'spur_spd_2', 'spur_spd_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.lyn_bride = class lyn_bride extends allies.ally
{   constructor()
    {   super();
        this.tag = 'lyn_bride';
        this.name = "Lyn";
        this.subname = "💐";
        this.title = "Bride of the Plains";
        this.text = "Noblewoman of Caelin. Eager to win the bridal tournament and nab the prize bouquet.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 5;
        this.colour_type = 'grey';
        this.weapon_type = 'staff';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 17, atk: 6, spd: 10, def: 6, res: 5 },
        };
        this.growth_points =
                { hp:  6, atk: 6, spd:  7, def: 4, res: 5 };

        this.base_skills =
        {   weapons   : [ 'assault', 'candlelight' ],
            assists   : [ 'heal', 'reconcile', 'rehabilitate' ],
            specials  : [ 'imbue', 'swift_winds_balm' ],
            passive_a : [ null ],
            passive_b : [ 'dazzling_staff_1', 'dazzling_staff_2', 'dazzling_staff_3' ],
            passive_c : [ null ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.mae = class mae extends allies.ally
{   constructor()
    {   super();
        this.tag = 'mae';
        this.name = "Mae";
        this.title = "Bundle of Energy";
        this.text = "A mage from Novis and a dear friend of Celica. Always cheerful and energetic, but she has a tendency to get carried away.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 15;
        this.minimum_rarity = 5;
        this.colour_type = 'blue';
        this.weapon_type = 'tome_blue';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 16, atk: 10, spd: 7, def: 3, res: 8 },
        };
        this.growth_points =
                { hp:  5, atk:  8, spd: 7, def: 2, res: 6 };

        this.base_skills =
        {   weapons   : [ 'thunder', 'elthunder', 'blarowl', 'blarowl_plus' ],
            assists   : [ 'draw_back' ],
            specials  : [ null ],
            passive_a : [ null ],
            passive_b : [ 'desperation_1', 'desperation_2', 'desperation_3' ],
            passive_c : [ 'blue_tome_exp_1', 'blue_tome_exp_2', 'blue_tome_exp_3' ],
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.maria = class maria extends allies.ally
{   constructor()
    {   super();
        this.tag = 'maria';
        this.name = "Maria";
        this.title = "Minerva's Sister";
        this.text = "Princess of Macedon. Younger sister of Minerva and Michalis, whom she loves dearly.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 4;
        this.colour_type = 'colourless';
        this.weapon_type = 'staff';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 16, atk: 4, spd: 8, def: 3, res: 10 },
            5 : { hp: 17, atk: 5, spd: 8, def: 4, res: 10 },
        };
        this.growth_points =
                { hp:  5, atk: 6, spd: 8, def: 3, res:  6 };

        this.base_skills =
        {   weapons   : [ 'assault', 'panic' ],
            assists   : [ 'heal', 'mend', 'physic' ],
            specials  : [ 'imbue', 'miracle' ],
            passive_a : [ null ],
            passive_b : [ null ],
            passive_c : [ 'fortify_res_1', 'fortify_res_2', 'fortify_res_3' ]
        };
        this.early_passive = null;
        this.late_passive =  'passive_c';
    }
};




chars.marth = class marth extends allies.ally
{   constructor()
    {   super();
        this.tag = 'marth';
        this.name = "Marth";
        this.title = "Altean Prince";
        this.text = "Prince of Altea who fights for his homeland and deeply values his friends.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 4;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 18, atk: 7, spd: 8, def: 6, res: 5 },
            5 : { hp: 19, atk: 7, spd: 8, def: 7, res: 6 },
        };
        this.growth_points =
                { hp:  6, atk: 7, spd: 8, def: 6, res: 4 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'falchion' ],
            assists   : [ 'pivot' ],
            specials  : [ null ],
            passive_a : [ null ],
            passive_b : [ 'escape_route_1', 'escape_route_2', 'escape_route_3' ],
            passive_c : [ 'spur_spd_1', 'spur_spd_2', 'spur_spd_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_b';
    }
};




chars.matthew = class matthew extends allies.ally
{   constructor()
    {   super();
        this.tag = 'matthew';
        this.name = "Matthew";
        this.title = "Faithful Spy";
        this.text = "Happy-go-lucky spy who's actually quite sly. Serves Hector, brother of the Marquess of Ostia.";
        this.summon = true;
     // this.obtained = 7;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 2;
        this.colour_type = 'grey';
        this.weapon_type = 'dagger';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : { hp: 15, atk: 5, spd:  9, def: 4, res: 3 },
            3 : { hp: 16, atk: 5, spd:  9, def: 5, res: 4 },
            4 : { hp: 16, atk: 6, spd: 10, def: 5, res: 4 },
            5 : { hp: 17, atk: 6, spd: 10, def: 6, res: 5 },
        };
        this.growth_points =
                { hp:  7, atk: 5, spd: 7, def: 7, res: 2 };

        this.base_skills =
        {   weapons   : [ 'iron_dagger', 'steel_dagger', 'rogue_dagger', 'rogue_dagger_plus' ],
            assists   : [ 'reciprocal_aid' ],
            specials  : [ null ],
            passive_a : [ null ],
            passive_b : [ 'poison_strike_1', 'poison_strike_2', 'poison_strike_3' ],
            passive_c : [ 'hone_spd_1', 'hone_spd_2', 'hone_spd_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_b';
    }
};




chars.merric = class merric extends allies.ally
{   constructor()
    {   super();
        this.tag = 'merric';
        this.name = "Merric";
        this.title = "Wind Mage";
        this.text = "Wind mage who studied in Khadein, known for its magical school. Marth's childhood friend.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 4;
        this.colour_type = 'green';
        this.weapon_type = 'tome_green';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 18, atk: 7, spd: 8, def: 5, res: 3 },
            5 : { hp: 19, atk: 7, spd: 8, def: 6, res: 4 },
        };
        this.growth_points =
                { hp:  7, atk: 5, spd: 7, def: 6, res: 3 };

        this.base_skills =
        {   weapons   : [ 'wind', 'elwind', 'rexcalibur', 'excalibur' ],
            assists   : [ null ],
            specials  : [ 'rising_wind', 'growing_wind' ],
            passive_a : [ 'hp_plus_3', 'hp_plus_4', 'hp_plus_5' ],
            passive_b : [ null ],
            passive_c : [ 'spur_res_1', 'spur_res_2', 'spur_res_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_a';
    }
};




chars.michalis = class michalis extends allies.ally
{   constructor()
    {   super();
        this.tag = 'michalis';
        this.name = "Michalis";
        this.title = "Ambitious King";
        this.text = "King of Macedon who had great ambitions for his country. Murdered his father. Brother to Minerva and Maria.";
        this.summon = false;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 3;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 18, atk: 6, spd: 9, def: 4, res: 5 },
            4 : { hp: 18, atk: 7, spd: 0, def: 4, res: 5 },
            5 : { hp: 19, atk: 7, spd: 0, def: 5, res: 6 },
        };
        this.growth_points =
                { hp:  7, atk: 8, spd: 5, def: 8, res: 3 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'silver_axe', 'hauteclere' ],
            assists   : [ null ],
            specials  : [ 'rising_thunder', 'blazing_thunder' ],
            passive_a : [ 'iotes_shield' ],
            passive_b : [ null ],
            passive_c : [ 'threaten_def_1', 'threaten_def_2', 'threaten_def_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  null;
        this.shield_passive = 'passive_a';
    }
};




chars.minerva = class minerva extends allies.ally
{   constructor()
    {   super();
        this.tag = 'minerva';
        this.name = "Minerva";
        this.title = "Red Dragoon";
        this.text = "Princess of Macedon who took up arms against her brother, Michalis.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 5;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 18, atk: 7, spd: 0, def: 5, res: 6 },
        };
        this.growth_points =
                { hp:  6, atk: 7, spd: 7, def: 7, res: 4 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'silver_axe', 'hauteclere' ],
            assists   : [ null ],
            specials  : [ 'holy_vestments', 'sacred_cowl' ],
            passive_a : [ 'life_and_death_1', 'life_and_death_2', 'life_and_death_3' ],
            passive_b : [ null ],
            passive_c : [ 'spur_def_1', 'spur_def_2', 'ward_flyers' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.mist = class mist extends allies.ally
{   constructor()
    {   super();
        this.tag = 'mist';
        this.name = "Mist";
        this.title = "Helpful Sister";
        this.text = "Ike's younger sister. Active and cheerful, and takes care of the Greil Mercenaries.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 9;
        this.minimum_rarity = 5;
        this.colour_type = 'colourless';
        this.weapon_type = 'staff';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 17, atk: 8, spd: 6, def: 5, res: 8 },
        };
        this.growth_points =
                { hp:  6, atk: 5, spd: 6, def: 3, res: 8 };

        this.base_skills =
        {   weapons   : [ 'assault', 'slow' ],
            assists   : [ 'heal', 'mend', 'recover' ],
            specials  : [ 'imbue', 'miracle' ],
            passive_a : [ null ],
            passive_b : [ null ],
            passive_c : [ 'spur_res_1', 'spur_def_res_1', 'spur_def_res_2' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.narcian = class narcian extends allies.ally
{   constructor()
    {   super();
        this.tag = 'narcian';
        this.name = "Narcian";
        this.title = "Wyvern General";
        this.text = "One of three Wyvern Generals of Bern. Conceited and vainglorious.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 6;
        this.minimum_rarity = 2;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : { hp: 16, atk: 6, spd: 5, def: 7, res: 5 },
            3 : { hp: 17, atk: 6, spd: 6, def: 7, res: 6 },
            4 : { hp: 17, atk: 7, spd: 6, def: 8, res: 6 },
            5 : { hp: 18, atk: 7, spd: 7, def: 8, res: 7 },
        };
        this.growth_points =
                { hp:  7, atk: 6, spd: 6, def: 7, res: 5 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'emerald_axe', 'emerald_axe_plus' ],
            assists   : [ null ],
            specials  : [ 'retribution', 'vengeance' ],
            passive_a : [ null ],
            passive_b : [ 'lancebreaker_1', 'lancebreaker_2', 'lancebreaker_3' ],
            passive_c : [ 'savage_blow_1', 'savage_blow_2', 'savage_blow_3' ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_c';
    }
};




chars.navarre = class navarre extends allies.ally
{   constructor()
    {   super();
        this.tag = 'navarre';
        this.name = "Navarre";
        this.title = "Scarlet Sword";
        this.text = "Skilled fighter known as the Scarlet Sword. Prefers his blade to do the talking.";
        this.summon = false;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 3;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 17, atk: 6, spd: 10, def: 5, res: 4 },
            4 : { hp: 17, atk: 7, spd: 11, def: 5, res: 4 },
            5 : { hp: 18, atk: 7, spd: 11, def: 6, res: 5 },
        };
        this.growth_points =
                { hp:  7, atk: 7, spd: 8, def: 4, res: 5 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'killing_edge', 'killing_edge_plus' ],
            assists   : [ null ],
            specials  : [ 'rising_wind', 'blazing_wind' ],
            passive_a : [ null ],
            passive_b : [ 'desperation_1', 'desperation_2', 'desperation_3' ],
            passive_c : [ 'threaten_spd_1', 'threaten_spd_2', 'threaten_spd_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_b';
    }
};




chars.niles = class niles extends allies.ally
{   constructor()
    {   super();
        this.tag = 'niles';
        this.name = "Niles";
        this.title = "Cruel to Be Kind";
        this.text = "Nohrian scoundrel who wags his saucy tongue at everyone. One of Leo's retainers.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 3;
        this.colour_type = 'grey';
        this.weapon_type = 'bow';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 17, atk: 5, spd: 7, def: 3, res: 7 },
            4 : { hp: 17, atk: 5, spd: 8, def: 3, res: 8 },
            5 : { hp: 18, atk: 6, spd: 8, def: 4, res: 8 },
        };
        this.growth_points =
                { hp:  5, atk: 5, spd: 8, def: 2, res: 8 };

        this.base_skills =
        {   weapons   : [ 'iron_bow', 'steel_bow', 'killer_bow', 'killer_bow_plus' ],
            assists   : [ null ],
            specials  : [ 'chilling_wind', 'iceberg' ],
            passive_a : [ 'warding_blow_1', 'warding_blow_2', 'warding_blow_3' ],
            passive_b : [ null ],
            passive_c : [ 'spur_res_1', 'spur_res_2', 'spur_res_3' ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_c';
    }
};




chars.ninian = class ninian extends allies.ally
{   constructor()
    {   super();
        this.tag = 'ninian';
        this.name = "Ninian";
        this.title = "Oracle of Destiny";
        this.text = "A young dancer who has a serene and mystical presence. Her dances are divine tributes.";
        this.summon = true;
     // this.obtained = 1;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 5;
        this.colour_type = 'blue';
        this.weapon_type = 'dragon_blue';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 149;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 16, atk: 5, spd: 7, def: 6, res: 5 },
        };
        this.growth_points =
                { hp:  8, atk: 5, spd: 8, def: 4, res: 6 };

        this.base_skills =
        {   weapons   : [ 'fire_breath', 'fire_breath_plus', 'light_breath', 'light_breath_plus'],
            assists   : [ 'dance' ],
            specials  : [],
            passive_a : [],
            passive_b : [ 'escape_route_1', 'escape_route_2', 'escape_route_3'  ],
            passive_c : [ 'fortify_def_1',  'fortify_def_2',  'fortify_dragons' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.nino = class nino extends allies.ally
{   constructor()
    {   super();
        this.tag = 'nino';
        this.name = "Nino";
        this.title = "Pious Mage";
        this.text = "A kindhearted member of the Black Fang assassins. Longed to help her mother.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 3;
        this.colour_type = 'green';
        this.weapon_type = 'tome_green';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 15, atk: 6, spd:  9, def: 3, res: 6 },
            4 : { hp: 15, atk: 7, spd: 10, def: 3, res: 6 },
            5 : { hp: 16, atk: 7, spd: 10, def: 4, res: 7 },
        };
        this.growth_points =
                { hp:  4, atk: 8, spd:  8, def: 3, res: 5 };

        this.base_skills =
        {   weapons   : [ 'wind', 'elwind', 'gronnblade', 'gronnblade_plus' ],
            assists   : [ 'draw_back' ],
            specials  : [ null ],
            passive_a : [ 'resistance_plus_1', 'resistance_plus_2', 'resistance_plus_3' ],
            passive_b : [ null ],
            passive_c : [ 'hone_atk_1', 'hone_atk_2', 'hone_atk_3' ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_c';
    }
};




chars.nowi = class nowi extends allies.ally
{   constructor()
    {   super();
        this.tag = 'nowi';
        this.name = "Nowi";
        this.title = "Eternal Youth";
        this.text = "Manakete who travels with Chrom's group. Looks young but is truly over a thousand years old.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 4;
        this.colour_type = 'blue';
        this.weapon_type = 'dragon_blue';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 163;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 16, atk: 6, spd: 4, def: 6, res: 4 },
            5 : { hp: 17, atk: 6, spd: 5, def: 6, res: 5 },
        };
        this.growth_points =
                { hp:  9, atk: 9, spd: 6, def: 7, res: 6 };

        this.base_skills =
        {   weapons   : [ 'fire_breath', 'fire_breath_plus', 'lightning_breath', 'lightning_breath_plus' ],
            assists   : [ 'rally_defense' ],
            specials  : [ null ],
            passive_a : [ 'defense_plus_1', 'defense_plus_2', 'defense_plus_3' ],
            passive_b : [ null ],
            passive_c : [ 'threaten_res_1', 'threaten_res_2', 'threaten_res_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_a';
    }
};




chars.oboro = class oboro extends allies.ally
{   constructor()
    {   super();
        this.tag = 'oboro';
        this.name = "Oboro";
        this.title = "Fierce Fighter";
        this.text = "Lance wielder who loves fashion and hates Nohr. One of Takumi's retainers.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 3;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 17, atk: 7, spd: 6, def: 8, res: 4 },
            4 : { hp: 17, atk: 8, spd: 6, def: 9, res: 4 },
            5 : { hp: 18, atk: 8, spd: 7, def: 9, res: 5 },
        };
        this.growth_points =
                { hp:  6, atk: 7, spd: 5, def: 8, res: 5 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'heavy_spear', 'heavy_spear_plus' ],
            assists   : [ 'rally_defense' ],
            specials  : [ null ],
            passive_a : [ null ],
            passive_b : [ 'seal_def_1', 'seal_def_2', 'seal_def_3' ],
            passive_c : [ 'threaten_res_1', 'threaten_res_2', 'threaten_res_3' ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_c';
    }
};




chars.odin = class odin extends allies.ally
{   constructor()
    {   super();
        this.tag = 'odin';
        this.name = "Odin";
        this.title = "Potent Force";
        this.text = "A mysterious man who tends to be overly theatrical. One of Leo's retainers.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 3;
        this.colour_type = 'blue';
        this.weapon_type = 'tome_blue';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 18, atk: 4, spd: 7, def: 5, res: 5 },
            4 : { hp: 18, atk: 4, spd: 8, def: 6, res: 5 },
            5 : { hp: 19, atk: 5, spd: 8, def: 6, res: 6 },
        };
        this.growth_points =
                { hp:  7, atk: 4, spd: 7, def: 5, res: 5 };

        this.base_skills =
        {   weapons   : [ 'thunder', 'elthunder', 'blarblade', 'blarblade_plus' ],
            assists   : [ null ],
            specials  : [ 'new_moon', 'moonbow' ],
            passive_a : [ 'defiant_atk_1', 'defiant_atk_2', 'defiant_atk_3' ],
            passive_b : [ 'redtomebreaker_1', 'redtomebreaker_2', 'redtomebreaker_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};




chars.ogma = class ogma extends allies.ally
{   constructor()
    {   super();
        this.tag = 'ogma';
        this.name = "Ogma";
        this.title = "Loyal Blade";
        this.text = "A mercenary who was once a slave gladiator. Serves Princess Caeda of Talys.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 4;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 20, atk: 7, spd: 10, def: 5, res: 2 },
            5 : { hp: 21, atk: 7, spd: 10, def: 6, res: 3 },
        };
        this.growth_points =
                { hp:  8, atk: 9, spd:  7, def: 6, res: 1 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'brave_sword', 'brave_sword_plus' ],
            assists   : [ null ],
            specials  : [ 'daylight', 'noontime' ],
            passive_a : [ 'defiant_atk_1', 'defiant_atk_2', 'defiant_atk_3' ],
            passive_b : [ null ],
            passive_c : [ 'spur_atk_1', 'spur_atk_2', 'spur_atk_3' ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_c';
    }
};




chars.olivia = class olivia extends allies.ally
{   constructor()
    {   super();
        this.tag = 'olivia';
        this.name = "Olivia";
        this.title = "Blushing Beauty";
        this.text = "A dancer who travels widely and is quite gifted, despite extreme shyness.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 1;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 150;
        this.base_stats =
        {   1 : { hp: 15, atk: 4, spd: 5, def: 3, res: 2 },
            2 : { hp: 15, atk: 5, spd: 6, def: 3, res: 2 },
            3 : { hp: 16, atk: 5, spd: 6, def: 4, res: 3 },
            4 : { hp: 16, atk: 6, spd: 7, def: 4, res: 3 },
            5 : { hp: 17, atk: 6, spd: 7, def: 5, res: 4 },
        };
        this.growth_points =
                { hp:  5, atk: 6, spd: 8, def: 6, res: 6 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'silver_sword_plus' ],
            assists   : [ 'dance' ],
            specials  : [ null ],
            passive_a : [ null ],
            passive_b : [ 'knock_back' ],
            passive_c : [ 'hone_atk_1', 'hone_atk_2', 'hone_atk_3' ]
        };
        this.early_passive = 'passive_c';
        this.position_passive =  'passive_b';
    }
};




chars.olwen = class olwen extends allies.ally
{   constructor()
    {   super();
        this.tag = 'olwen';
        this.name = "Olwen";
        this.title = "Blue Mage Knight";
        this.text = "A mage knight in Friege's army. Her ideals sometimes put her in opposition with her beloved brother, Reinhardt.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 5;
        this.minimum_rarity = 5;
        this.colour_type = 'blue';
        this.weapon_type = 'tome_blue';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 144;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 17, atk: 7, spd: 8, def: 5, res: 6 },
        };
        this.growth_points =
                { hp:  4, atk: 5, spd: 8, def: 3, res: 7 };

        this.base_skills =
        {   weapons   : [ 'thunder', 'elthunder', 'thoron', 'dire_thunder' ],
            assists   : [ 'reposition' ],
            specials  : [ null ],
            passive_a : [ 'warding_blow_1', 'warding_blow_2', 'warding_blow_3' ],
            passive_b : [ null ],
            passive_c : [ 'spur_res_1', 'spur_res_2', 'ward_cavalry' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.palla = class palla extends allies.ally
{   constructor()
    {   super();
        this.tag = 'palla';
        this.name = "Palla";
        this.title = "Eldest Whitewing";
        this.text = "Eldest of three sisters who are pegasus knights for Macedon.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 3;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 17, atk: 6, spd: 8, def: 5, res: 6 },
            4 : { hp: 17, atk: 7, spd: 9, def: 5, res: 6 },
            5 : { hp: 18, atk: 7, spd: 9, def: 6, res: 7 },
        };
        this.growth_points =
                { hp:  7, atk: 7, spd: 6, def: 6, res: 5 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'ruby_sword', 'ruby_sword_plus' ],
            assists   : [ null ],
            specials  : [ 'new_moon', 'moonbow' ],
            passive_a : [ null ],
            passive_b : [ 'wings_of_mercy_1', 'wings_of_mercy_2', 'wings_of_mercy_3' ],
            passive_c : [ 'spur_spd_1', 'spur_spd_2', 'goad_flyers' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_b';
    }
};




chars.peri = class peri extends allies.ally
{   constructor()
    {   super();
        this.tag = 'peri';
        this.name = "Peri";
        this.title = "Playful Slayer";
        this.text = "A cavalier of Nohr who massacres foes with childlike glee. One of Xander's retainers.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 4;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 154;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 15, atk: 9, spd: 9, def: 5, res: 5 },
            5 : { hp: 16, atk: 9, spd: 9, def: 6, res: 6 },
        };
        this.growth_points =
                { hp:  5, atk: 7, spd: 7, def: 4, res: 7 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'killer_lance', 'killer_lance_plus' ],
            assists   : [ null ],
            specials  : [ 'night_sky', 'glimmer' ],
            passive_a : [ 'resistance_plus_1', 'resistance_plus_2', 'resistance_plus_3' ],
            passive_b : [ null ],
            passive_c : [ 'threaten_def_1', 'threaten_def_2', 'threaten_def_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_a';
    }
};




chars.priscilla = class priscilla extends allies.ally
{   constructor()
    {   super();
        this.tag = 'priscilla';
        this.name = "Priscilla";
        this.title = "Delicate Princess";
        this.text = "The daughter of Count Caerleon. Also Raven's sister. Poised and gentle, with a jealous streak.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 4;
        this.colour_type = 'grey';
        this.weapon_type = 'staff';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 145;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 16, atk: 7, spd: 6, def: 3, res: 8 },
            5 : { hp: 17, atk: 7, spd: 7, def: 4, res: 8 },
        };
        this.growth_points =
                { hp:  5, atk: 6, spd: 6, def: 3, res: 7 };

        this.base_skills =
        {   weapons   : [ 'assault', 'panic' ],
            assists   : [ 'heal', 'reconcile', 'rehabilitate' ],
            specials  : [ 'imbue', 'still_water_balm' ],
            passive_a : [ null ],
            passive_b : [ null ],
            passive_c : [ 'spur_def_1', 'spur_def_2', 'spur_def_3' ]
        };
        this.early_passive = null;
        this.late_passive =  'passive_c';
    }
};




chars.raigh = class raigh extends allies.ally
{   constructor()
    {   super();
        this.tag = 'raigh';
        this.name = "Raigh";
        this.title = "Dark Child";
        this.text = "Wielder of dark magic. A scornful loner with a troubled past as an orphan.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 6;
        this.minimum_rarity = 2;
        this.colour_type = 'red';
        this.weapon_type = 'tome_red';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : { hp: 15, atk: 7, spd:  6, def: 3, res: 5 },
            3 : { hp: 16, atk: 7, spd:  6, def: 4, res: 6 },
            4 : { hp: 16, atk: 8, spd:  7, def: 4, res: 6 },
            5 : { hp: 17, atk: 8, spd:  7, def: 5, res: 7 },
        };
        this.growth_points =
                { hp:  5, atk: 7, spd: 6, def: 4, res: 6 };

        this.base_skills =
        {   weapons   : [ 'flux', 'ruin', 'raudrwolf', 'raudrwolf_plus' ],
            assists   : [ 'rally_attack' ],
            specials  : [ null ],
            passive_a : [ 'hp_plus_3', 'hp_plus_4', 'hp_plus_5' ],
            passive_b : [ 'seal_res_1', 'seal_res_2', 'seal_res_3' ],
            passive_c : [ null ],
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};




chars.raven = class raven extends allies.ally
{   constructor()
    {   super();
        this.tag = 'raven';
        this.name = "Raven";
        this.title = "Peerless Fighter";
        this.text = "A noble heir whose true name is Raymond. Works as a mercenary to enact revenge.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 4;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 18, atk: 8, spd: 9, def: 5, res: 4 },
            5 : { hp: 19, atk: 8, spd: 9, def: 6, res: 5 },
        };
        this.growth_points =
                { hp:  6, atk: 8, spd: 8, def: 5, res: 4 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'brave_axe', 'brave_axe_plus' ],
            assists   : [ null ],
            specials  : [ 'daylight', 'sol' ],
            passive_a : [ 'defiant_spd_1', 'defiant_spd_2', 'defiant_spd_3' ],
            passive_b : [ null ],
            passive_c : [ 'threaten_def_1', 'threaten_def_2', 'threaten_def_3' ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_c';
    }
};




chars.rebecca = class rebecca extends allies.ally
{   constructor()
    {   super();
        this.tag = 'rebecca';
        this.name = "Rebecca";
        this.title = "Wildflower";
        this.text = "A girl who lives in a remote village and spends her time hunting. Kind and sociable.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 4;
        this.colour_type = 'grey';
        this.weapon_type = 'bow';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 17, atk: 7, spd: 8, def: 5, res: 4 },
            5 : { hp: 18, atk: 7, spd: 8, def: 6, res: 5 },
        };
        this.growth_points =
                { hp:  5, atk: 6, spd: 8, def: 3, res: 6 };

        this.base_skills =
        {   weapons   : [ 'iron_bow', 'steel_bow', 'silver_bow', 'silver_bow_plus' ],
            assists   : [ 'ardent_sacrifice' ],
            specials  : [ null ],
            passive_a : [ 'darting_blow_1', 'darting_blow_2', 'darting_blow_3' ],
            passive_b : [ 'seal_atk_1', 'seal_atk_2', 'seal_atk_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_b';
    }
};




chars.reinhardt = class reinhardt extends allies.ally
{   constructor()
    {   super();
        this.tag = 'reinhardt';
        this.name = "Reinhardt";
        this.title = "Thunder's Fist";
        this.text = "Formidable and admired mage knight in Friege's army. Ever ready to lend an ear to his younger sister, Olwen.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 5;
        this.minimum_rarity = 4;
        this.colour_type = 'blue';
        this.weapon_type = 'tome_blue';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 145;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 15, atk: 8, spd: 5, def: 4, res: 8 },
            5 : { hp: 16, atk: 8, spd: 6, def: 5, res: 8 },
        };
        this.growth_points =
                { hp:  6, atk: 7, spd: 4, def: 6, res: 4 };

        this.base_skills =
        {   weapons   : [ 'thunder', 'elthunder', 'thoron', 'dire_thunder' ],
            assists   : [ null ],
            specials  : [ 'rising_thunder', 'blazing_thunder' ],
            passive_a : [ null ],
            passive_b : [ 'vantage_1', 'vantage_2', 'vantage_3' ],
            passive_c : [ 'spur_atk_1', 'spur_atk_2', 'goad_cavalry' ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_c';
    }
};




chars.robin_blue = class robin_blue extends allies.ally
{   constructor()
    {   super();
        this.tag = 'robin_blue';
        this.name = "Robin";
        this.subname = "📘";
        this.title = "High Deliverer";
        this.text = "A tactician of Ylisse and Chrom's close ally. Lost memory of his life before meeting Chrom.";
        this.summon = true;
     // this.obtained = 2;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 3;
        this.colour_type = 'blue';
        this.weapon_type = 'tome_blue';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 149;
        this.base_stats =
        {   1 : null,
            2 : { hp: 16, atk: 6, spd: 6, def: 5, res: 3 },
            3 : { hp: 17, atk: 6, spd: 6, def: 6, res: 4 },
            4 : { hp: 17, atk: 7, spd: 7, def: 6, res: 4 },
            5 : { hp: 18, atk: 7, spd: 7, def: 7, res: 5 },
        };
        this.growth_points =
                { hp:  6, atk: 6, spd: 6, def: 6, res: 4 };

        this.base_skills =
        {   weapons   : [ 'thunder', 'elthunder', 'blarraven', 'blarraven_plus' ],
            assists   : [ null ],
            specials  : [ 'glowing_ember', 'bonfire' ],
            passive_a : [ 'defiant_spd_1', 'defiant_spd_2', 'defiant_spd_3' ],
            passive_b : [ null ],
            passive_c : [ 'spur_def_1', 'spur_def_2', 'spur_def_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_a';
    }
};




chars.robin_green = class robin_green extends allies.ally
{   constructor()
    {   super();
        this.tag = 'robin_green';
        this.name = "Robin";
        this.subname = "📗";
        this.title = "Mystery Tactician";
        this.text = "A tactician of Ylisse and Chrom's close ally. Lost memory of her life before meeting Chrom.";
        this.summon = false;
     // this.obtained = 2;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 2;
        this.colour_type = 'green';
        this.weapon_type = 'tome_green';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 149;
        this.base_stats =
        {   1 : null,
            2 : { hp: 16, atk: 6, spd: 6, def: 5, res: 3 },
            3 : { hp: 17, atk: 6, spd: 6, def: 6, res: 4 },
            4 : { hp: 17, atk: 7, spd: 7, def: 6, res: 4 },
            5 : { hp: 18, atk: 7, spd: 7, def: 7, res: 5 },
        };
        this.growth_points =
                { hp:  6, atk: 6, spd: 6, def: 6, res: 4 };

        this.base_skills =
        {   weapons   : [ 'wind', 'elwind', 'gronnwolf', 'gronnwolf_plus' ],
            assists   : [ null ],
            specials  : [ 'glowing_ember', 'ignis' ],
            passive_a : [ 'defiant_res_1', 'defiant_res_2', 'defiant_res_3' ],
            passive_b : [ 'bluetomebreaker_1', 'bluetomebreaker_2', 'bluetomebreaker_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};




chars.roy = class roy extends allies.ally
{   constructor()
    {   super();
        this.tag = 'roy';
        this.name = "Roy";
        this.title = "Young Lion";
        this.text = "The son of Eliwood, Marquess of Pherae and talented leader of its army.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 6;
        this.minimum_rarity = 4;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 19, atk: 8, spd: 9, def: 5, res: 3 },
            5 : { hp: 20, atk: 8, spd: 9, def: 6, res: 4 },
        };
        this.growth_points =
                { hp:  7, atk: 6, spd: 6, def: 5, res: 7 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'binding_blade' ],
            assists   : [ 'shove' ],
            specials  : [ null ],
            passive_a : [ 'triangle_adept_1', 'triangle_adept_2', 'triangle_adept_3' ],
            passive_b : [ 'seal_def_1', 'seal_def_2', 'seal_def_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_b';
    }
};




chars.ryoma = class ryoma extends allies.ally
{   constructor()
    {   super();
        this.tag = 'ryoma';
        this.name = "Ryoma";
        this.title = "Peerless Samurai";
        this.text = "The eldest prince of Hoshido, who wields the legendary blade Raijinto.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 5;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 19, atk: 8, spd: 11, def: 5, res: 4 },
        };
        this.growth_points =
                { hp:  6, atk: 6, spd:  9, def: 4, res: 6 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'raijinto' ],
            assists   : [ null ],
            specials  : [ 'night_sky', 'astra' ],
            passive_a : [ 'defiant_atk_1', 'defiant_atk_2', 'defiant_atk_3' ],
            passive_b : [ null ],
            passive_c : [ 'hone_spd_1', 'hone_spd_2', 'hone_spd_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.saizo = class saizo extends allies.ally
{   constructor()
    {   super();
        this.tag = 'saizo';
        this.name = "Saizo";
        this.title = "Angry Ninja";
        this.text = "A severe ninja of Hoshido. Has a twin brother named Kaze. One of Ryoma's retainers.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 3;
        this.colour_type = 'colourless';
        this.weapon_type = 'dagger';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 16, atk: 6, spd: 7, def: 8, res: 2 },
            4 : { hp: 16, atk: 7, spd: 8, def: 9, res: 2 },
            5 : { hp: 17, atk: 7, spd: 8, def: 9, res: 3 },
        };
        this.growth_points =
                { hp:  5, atk: 6, spd: 8, def: 7, res: 2 };

        this.base_skills =
        {   weapons   : [ 'iron_dagger', 'steel_dagger', 'smoke_dagger', 'smoke_dagger_plus' ],
            assists   : [ 'harsh_command' ],
            specials  : [ null ],
            passive_a : [ null ],
            passive_b : [ 'poison_strike_1', 'poison_strike_2', 'poison_strike_3' ],
            passive_c : [ 'spur_spd_1', 'spur_spd_2', 'spur_spd_3' ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_c';
    }
};




chars.sakura = class sakura extends allies.ally
{   constructor()
    {   super();
        this.tag = 'sakura';
        this.name = "Sakura";
        this.title = "Loving Priestess";
        this.text = "Princess of Hoshido who is a gentle healer. Struggles with her shyness.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 4;
        this.colour_type = 'colourless';
        this.weapon_type = 'staff';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 16, atk: 5, spd: 8, def: 4, res: 8 },
            5 : { hp: 17, atk: 6, spd: 8, def: 5, res: 8 },
        };
        this.growth_points =
                { hp:  5, atk: 6, spd: 6, def: 5, res: 6 };

        this.base_skills =
        {   weapons   : [ 'assault', 'fear' ],
            assists   : [ 'heal', 'mend', 'physic' ],
            specials  : [ 'imbue', 'still_water_balm' ],
            passive_a : [ null ],
            passive_b : [ null ],
            passive_c : [ 'fortify_def_1', 'fortify_def_2', 'fortify_def_3' ]
        };
        this.early_passive = null;
        this.late_passive =  'passive_c';
    }
};




chars.sanaki = class sanaki extends allies.ally
{   constructor()
    {   super();
        this.tag = 'sanaki';
        this.name = "Sanaki";
        this.title = "Begnion's Apostle";
        this.text = "Empress of Begnion. Known as the Apostle, voice of the goddess. Young but dutiful ruler.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 10;
        this.minimum_rarity = 5;
        this.colour_type = 'red';
        this.weapon_type = 'tome_red';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 16, atk: 9, spd: 7, def: 4, res: 8 },
        };
        this.growth_points =
                { hp:  4, atk: 9, spd: 5, def: 2, res: 8 };

        this.base_skills =
        {   weapons   : [ 'fire', 'elfire', 'bolganone', 'cymbeline' ],
            assists   : [ 'harsh_command' ],
            specials  : [ null ],
            passive_a : [ 'triangle_adept_1', 'triangle_adept_2', 'triangle_adept_3' ],
            passive_b : [ null ],
            passive_c : [ 'hone_atk_1', 'hone_atk_2', 'hone_atk_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.selena = class selena extends allies.ally
{   constructor()
    {   super();
        this.tag = 'selena';
        this.name = "Selena";
        this.title = "Cutting Wit";
        this.text = "A mysterious woman devoted to service. One of Camilla's retainers.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 3;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 17, atk: 5, spd: 8, def: 7, res: 5 },
            4 : { hp: 17, atk: 5, spd: 9, def: 8, res: 5 },
            5 : { hp: 18, atk: 6, spd: 9, def: 8, res: 6 },
        };
        this.growth_points =
                { hp:  5, atk: 5, spd: 8, def: 7, res: 6 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'armorslayer', 'armorslayer_plus' ],
            assists   : [ 'reposition' ],
            specials  : [ null ],
            passive_a : [ 'triangle_adept_1', 'triangle_adept_2', 'triangle_adept_3' ],
            passive_b : [ null ],
            passive_c : [ 'threaten_spd_1', 'threaten_spd_2', 'threaten_spd_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_a';
    }
};




chars.seliph = class seliph extends allies.ally
{   constructor()
    {   super();
        this.tag = 'seliph';
        this.name = "Seliph";
        this.title = "Heir of Light";
        this.text = "Inheritor of the sacred sword Tyrfing. A savior in his time, but dislikes battle. Julia's half-brother.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 4;
        this.minimum_rarity = 4;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 18, atk: 8, spd: 6, def: 8, res: 4 },
            5 : { hp: 19, atk: 8, spd: 7, def: 8, res: 5 },
        };
        this.growth_points =
                { hp:  9, atk: 8, spd: 4, def: 6, res: 4 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'tyrfing' ],
            assists   : [ 'rally_speed' ],
            specials  : [ null ],
            passive_a : [ 'hp_plus_3', 'hp_plus_4', 'hp_plus_5' ],
            passive_b : [ 'brash_assault_1', 'brash_assault_2', 'brash_assault_3' ],
            passive_c : [ null ],
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_b';
    }
};




chars.serra = class serra extends allies.ally
{   constructor()
    {   super();
        this.tag = 'serra';
        this.name = "Serra";
        this.title = "Outspoken Cleric";
        this.text = "Cleric who thinks less of others, more of herself. Serves Hector, brother of the Marquess of Ostia.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 3;
        this.colour_type = 'colourless';
        this.weapon_type = 'staff';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 15, atk: 5, spd: 8, def: 3, res: 8 },
            4 : { hp: 15, atk: 5, spd: 9, def: 3, res: 9 },
            5 : { hp: 16, atk: 6, spd: 9, def: 4, res: 9 },
        };
        this.growth_points =
                { hp:  4, atk: 7, spd: 6, def: 4, res: 7 };

        this.base_skills =
        {   weapons   : [ 'assault', 'absorb' ],
            assists   : [ 'heal', 'mend', 'recover' ],
            specials  : [ 'imbue', 'swift_winds_balm' ],
            passive_a : [ null ],
            passive_b : [ null ],
            passive_c : [ 'hone_atk_1', 'hone_atk_2', 'hone_atk_3' ]
        };
        this.early_passive = null;
        this.late_passive =  'passive_c';
    }
};




chars.setsuna = class setsuna extends allies.ally
{   constructor()
    {   super();
        this.tag = 'setsuna';
        this.name = "Setsuna";
        this.title = "Absent Archer";
        this.text = "Hoshidan archer who is either fearless or daydreaming. One of Hinoka's retainers.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 3;
        this.colour_type = 'colourless';
        this.weapon_type = 'bow';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 17, atk: 5, spd: 8, def: 4, res: 5 },
            4 : { hp: 17, atk: 6, spd: 9, def: 4, res: 5 },
            5 : { hp: 18, atk: 6, spd: 9, def: 5, res: 6 },
        };
        this.growth_points =
                { hp:  5, atk: 6, spd: 9, def: 4, res: 4 };

        this.base_skills =
        {   weapons   : [ 'iron_bow', 'steel_bow', 'assassins_bow', 'assassins_bow_plus' ],
            assists   : [ 'reciprocal_aid' ],
            specials  : [ null ],
            passive_a : [ 'hp_plus_3', 'hp_plus_4', 'hp_plus_5' ],
            passive_b : [ 'bowbreaker_1', 'bowbreaker_2', 'bowbreaker_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};




chars.shanna = class shanna extends allies.ally
{   constructor()
    {   super();
        this.tag = 'shanna';
        this.name = "Shanna";
        this.title = "Sprightly Flier";
        this.text = "A trainee of the Pegasus Knights of Ilia. Cheerful and optimistic.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 6;
        this.minimum_rarity = 3;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 10;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 16, atk: 7, spd: 8, def: 5, res: 6 },
            4 : { hp: 16, atk: 8, spd: 9, def: 5, res: 6 },
            5 : { hp: 17, atk: 8, spd: 9, def: 6, res: 7 },
        };
        this.growth_points =
                { hp:  6, atk: 6, spd: 8, def: 5, res: 6 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'killer_lance', 'killer_lance_plus' ],
            assists   : [ null ],
            specials  : [ 'chilling_wind', 'iceberg' ],
            passive_a : [ null ],
            passive_b : [ 'desperation_1', 'desperation_2', 'desperation_3' ],
            passive_c : [ 'threaten_spd_1', 'threaten_spd_2', 'threaten_spd_3' ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_c';
    }
};




chars.sharena = class sharena extends allies.ally
{   constructor()
    {   super();
        this.tag = 'sharena';
        this.name = "Sharena";
        this.title = "Princess of Askr";
        this.text = "A princess of Askr and Alfonse's sister. Cheerful and loves making friends— especially with Heroes.";
        this.summon = false;
     // this.obtained = 9;
     // this.favourite;
        this.origin = 0;
        this.minimum_rarity = 2;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : null,
            2 : { hp: 17, atk: 7, spd:  7, def: 5, res: 3 },
            3 : { hp: 18, atk: 7, spd:  7, def: 6, res: 4 },
            4 : { hp: 18, atk: 8, spd:  8, def: 6, res: 4 },
            5 : { hp: 19, atk: 8, spd:  8, def: 7, res: 5 },
        };
        this.growth_points =
                { hp:  7, atk: 7, spd: 7, def: 6, res: 4 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'silver_lance', 'fensalir' ],
            assists   : [ 'rally_attack' ],
            specials  : [ null ],
            passive_a : [ 'speed_plus_1', 'speed_plus_2', 'speed_plus_3' ],
            passive_b : [ null ],
            passive_c : [ 'fortify_def_1', 'fortify_def_2', 'fortify_def_3' ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_c';
    }
};




chars.sheena = class sheena extends allies.ally
{   constructor()
    {   super();
        this.tag = 'sheena';
        this.name = "Sheena";
        this.title = "Princess of Gra";
        this.text = "Princess of Gra, a failing realm. Feels the heavy weight of her responsibility.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 4;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'armor';
     // this.level = 40;
     // this.rating = 169;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 20, atk: 8, spd: 5, def: 12, res: 6 },
            5 : { hp: 21, atk: 8, spd: 6, def: 12, res: 7 },
        };
        this.growth_points =
                { hp:  7, atk: 6, spd: 5, def:  7, res: 8 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'killer_axe', 'killer_axe_plus' ],
            assists   : [ null ],
            specials  : [ 'buckler', 'escutcheon' ],
            passive_a : [ 'svalinn_shield' ],
            passive_b : [ null ],
            passive_c : [ 'fortify_def_1', 'fortify_def_2', 'fortify_armor' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  null;
        this.shield_passive = 'passive_a';
    }
};




chars.sophia = class sophia extends allies.ally
{   constructor()
    {   super();
        this.tag = 'sophia';
        this.name = "Sophia";
        this.title = "Nabata Prophet";
        this.text = "A shaman of Nabata who has lived a sheltered life away from other people. Sees the future.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 6;
        this.minimum_rarity = 1;
        this.colour_type = 'red';
        this.weapon_type = 'tome_red';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 149;
        this.base_stats =
        {   1 : { hp: 16, atk: 7, spd: 2, def: 4, res: 5 },
            2 : { hp: 16, atk: 8, spd: 2, def: 4, res: 6 },
            3 : { hp: 17, atk: 8, spd: 3, def: 5, res: 6 },
            4 : { hp: 17, atk: 9, spd: 3, def: 5, res: 7 },
            5 : { hp: 18, atk: 9, spd: 4, def: 6, res: 7 },
        };
        this.growth_points =
                { hp:  6, atk: 7, spd: 3, def: 6, res: 6 };

        this.base_skills =
        {   weapons   : [ 'flux', 'ruin', 'fenrir', 'fenrir_plus' ],
            assists   : [ null ],
            specials  : [ 'dragon_gaze', 'dragon_fang' ],
            passive_a : [ 'warding_blow_1', 'warding_blow_2', 'warding_blow_3' ],
            passive_b : [ null ],
            passive_c : [ 'fortify_res_1', 'fortify_res_2', 'fortify_res_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_a';
    }
};




chars.soren = class soren extends allies.ally
{   constructor()
    {   super();
        this.tag = 'soren';
        this.name = "Soren";
        this.title = "Shrewd Strategist";
        this.text = "An officer in the Greil Mercenaries. A coolheaded realist who has opened up to Ike.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 9;
        this.minimum_rarity = 4;
        this.colour_type = 'green';
        this.weapon_type = 'tome_green';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 16, atk: 7, spd: 9, def: 3, res: 6 },
            5 : { hp: 17, atk: 7, spd: 9, def: 4, res: 7 },
        };
        this.growth_points =
                { hp:  5, atk: 8, spd: 7, def: 2, res: 6 };

        this.base_skills =
        {   weapons   : [ 'wind', 'elwind', 'rexcalibur', 'rexcalibur_plus' ],
            assists   : [ null ],
            specials  : [ 'rising_wind', 'growing_wind' ],
            passive_a : [ null ],
            passive_b : [ 'watersweep_1', 'watersweep_2', 'watersweep_3' ],
            passive_c : [ 'fortify_res_1', 'fortify_res_2', 'fortify_res_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_b';
    }
};




chars.stahl = class stahl extends allies.ally
{   constructor()
    {   super();
        this.tag = 'stahl';
        this.name = "Stahl";
        this.title = "Viridian Knight";
        this.text = "A kind but slightly scatterbrained knight who serves with the Shepherds.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 1;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 154;
        this.base_stats =
        {   1 : { hp: 17, atk: 5, spd: 5, def: 6, res: 3 },
            2 : { hp: 17, atk: 6, spd: 5, def: 7, res: 3 },
            3 : { hp: 18, atk: 6, spd: 6, def: 7, res: 4 },
            4 : { hp: 18, atk: 7, spd: 6, def: 8, res: 4 },
            5 : { hp: 19, atk: 7, spd: 7, def: 8, res: 5 },
        };
        this.growth_points =
                { hp:  8, atk: 7, spd: 5, def: 6, res: 4 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'ruby_sword', 'ruby_sword_plus' ],
            assists   : [ 'swap' ],
            specials  : [ null ],
            passive_a : [ 'defense_plus_1', 'defense_plus_2', 'defense_plus_3' ],
            passive_b : [ 'obstruct_1', 'obstruct_2', 'obstruct_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_b';
    }
};




chars.subaki = class subaki extends allies.ally
{   constructor()
    {   super();
        this.tag = 'subaki';
        this.name = "Subaki";
        this.title = "Perfect Expert";
        this.text = "Sky Knight of Hoshido who aims for perfection. One of Sakura's retainers.";
        this.summon = true;
     // this.obtained = 5;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 1;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'flyer';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : { hp: 16, atk: 4, spd: 7, def: 7, res: 3 },
            2 : { hp: 16, atk: 4, spd: 8, def: 8, res: 3 },
            3 : { hp: 17, atk: 5, spd: 8, def: 8, res: 4 },
            4 : { hp: 17, atk: 5, spd: 9, def: 9, res: 4 },
            5 : { hp: 18, atk: 6, spd: 9, def: 9, res: 5 },
        };
        this.growth_points =
                { hp:  6, atk: 5, spd: 8, def: 8, res: 4 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'sapphire_lance', 'sapphire_lance_plus' ],
            assists   : [ 'swap' ],
            specials  : [ null ],
            passive_a : [ 'resistance_plus_1', 'resistance_plus_2', 'resistance_plus_3' ],
            passive_b : [ 'quick_riposte_1', 'quick_riposte_2', 'quick_riposte_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_b';
    }
};



chars.sully = class sully extends allies.ally
{   constructor()
    {   super();
        this.tag = 'sully';
        this.name = "Sully";
        this.title = "Crimson Knight";
        this.text = "A member of the Shepherds who is serious about becoming a great knight.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 3;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 154;
        this.base_stats =
        {   1 : null,
            2 : null,
            4 : { hp: 17, atk: 7, spd: 8, def: 6, res: 5 },
            3 : { hp: 17, atk: 6, spd: 7, def: 6, res: 5 },
            5 : { hp: 18, atk: 7, spd: 8, def: 7, res: 6 },
        };
        this.growth_points =
                { hp:  7, atk: 5, spd: 8, def: 4, res: 6 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'sapphire_lance', 'sapphire_lance_plus' ],
            assists   : [ 'draw_back' ],
            specials  : [ null ],
            passive_a : [ null ],
            passive_b : [ 'swordbreaker_1', 'swordbreaker_2', 'swordbreaker_3' ],
            passive_c : [ 'spur_def_1', 'spur_def_2', 'spur_def_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_b';
    }
};




chars.takumi = class takumi extends allies.ally
{   constructor()
    {   super();
        this.tag = 'takumi';
        this.name = "Takumi";
        this.title = "Wild Card";
        this.text = "Prince of Hoshido who wields the divine bow Fujin Yumi. Prickly at times.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 5;
        this.colour_type = 'colourless';
        this.weapon_type = 'bow';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 18, atk: 8, spd: 7, def: 6, res: 5 },
        };
        this.growth_points =
                { hp:  6, atk: 7, spd: 8, def: 5, res: 2 };

        this.base_skills =
        {   weapons   : [ 'iron_bow', 'steel_bow', 'silver_bow', 'fujin_yumi' ],
            assists   : [ null ],
            specials  : [ 'retribution', 'vengeance' ],
            passive_a : [ 'close_counter' ],
            passive_b : [ null ],
            passive_c : [ 'threaten_spd_1', 'threaten_spd_2', 'threaten_spd_3' ]
        };
        this.early_passive = 'passive_c';
        this.range_passive =  'passive_a';
    }
};




chars.tharja = class tharja extends allies.ally
{   constructor()
    {   super();
        this.tag = 'tharja';
        this.name = "Tharja";
        this.title = "Dark Shadow";
        this.text = "A mage from Plegia with a dark side and a possessive streak, especially with Robin.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 4;
        this.colour_type = 'red';
        this.weapon_type = 'tome_red';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 148;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 16, atk: 8, spd: 8, def: 5, res: 4 },
            5 : { hp: 17, atk: 8, spd: 8, def: 6, res: 5 },
        };
        this.growth_points =
                { hp:  6, atk: 7, spd: 8, def: 4, res: 3 };

        this.base_skills =
        {   weapons   : [ 'flux', 'ruin', 'raudrblade', 'raudrblade_plus' ],
            assists   : [ null ],
            specials  : [ 'retribution', 'vengeance' ],
            passive_a : [ 'darting_blow_1', 'darting_blow_2', 'darting_blow_3' ],
            passive_b : [ null ],
            passive_c : [ 'spur_res_1', 'spur_res_2', 'spur_res_3' ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_c';
    }
};




chars.tiki_shadow = class tiki_shadow extends allies.ally
{   constructor()
    {   super();
        this.tag = 'tiki_shadow';
        this.name = "Tiki";
        this.subname = "🔥🐉";
        this.title = "Dragon Scion";
        this.text = "A young Divine Dragon once put into a timeless sleep to keep her dragon impulses in check. Now longs for human company.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1;
        this.minimum_rarity = 5;
        this.colour_type = 'red';
        this.weapon_type = 'dragon_red';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 163;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 15, atk: 5, spd: 4, def: 8, res: 7 },
        };
        this.growth_points =
                { hp:  8, atk: 8, spd: 8, def: 7, res: 6 };

        this.base_skills =
        {   weapons   : [ 'fire_breath', 'fire_breath_plus', 'flametongue', 'flametongue_plus' ],
            assists   : [ null ],
            specials  : [ 'rising_flame', 'growing_flame' ],
            passive_a : [ 'armored_blow_1', 'armored_blow_2', 'armored_blow_3' ],
            passive_b : [ null ],
            passive_c : [ 'breath_of_life_1', 'breath_of_life_2', 'breath_of_life_3' ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};




chars.tiki_awakening = class tiki_awakening extends allies.ally
{   constructor()
    {   super();
        this.tag = 'tiki_awakening';
        this.name = "Tiki";
        this.subname = "🗲🐲";
        this.title = "Naga's Voice";
        this.text = "Known as the Voice of the Divine Dragon. Has lived for ages. Once friends with Marth.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 3;
        this.colour_type = 'red';
        this.weapon_type = 'dragon_red';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 157;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 17, atk: 6, spd: 5, def: 8, res: 6 },
            4 : { hp: 17, atk: 7, spd: 5, def: 9, res: 6 },
            5 : { hp: 18, atk: 7, spd: 6, def: 9, res: 7 },
        };
        this.growth_points =
                { hp:  6, atk: 9, spd: 4, def: 8, res: 4 };

        this.base_skills =
        {   weapons   : [ 'fire_breath', 'fire_breath_plus', 'lightning_breath', 'lightning_breath_plus' ],
            assists   : [ null ],
            specials  : [ 'glowing_ember', 'bonfire' ],
            passive_a : [ 'defiant_atk_1', 'defiant_atk_2', 'defiant_atk_3' ],
            passive_b : [ null ],
            passive_c : [ 'spur_res_1', 'spur_res_2', 'spur_res_3' ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_c';
    }
};




chars.titania = class titania extends allies.ally
{   constructor()
    {   super();
        this.tag = 'titania';
        this.name = "Titania";
        this.title = "Mighty Mercenary";
        this.text = "Deputy commander of the Greil Mercenaries. An idealistic former knight who values honor.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 9;
        this.minimum_rarity = 4;
        this.colour_type = 'green';
        this.weapon_type = 'axe';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 154;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : { hp: 17, atk: 5, spd: 8, def: 5, res: 8 },
            5 : { hp: 18, atk: 6, spd: 8, def: 6, res: 8 },
        };
        this.growth_points =
                { hp:  5, atk: 6, spd: 8, def: 5, res: 6 };

        this.base_skills =
        {   weapons   : [ 'iron_axe', 'steel_axe', 'emerald_axe', 'emerald_axe_plus' ],
            assists   : [ 'reciprocal_aid' ],
            specials  : [ 'night_sky', 'astra' ],
            passive_a : [ 'armored_blow_1', 'armored_blow_2', 'armored_blow_3' ],
            passive_b : [ 'guard_1', 'guard_2', 'guard_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_a';
        this.late_passive =  'passive_b';
    }
};




chars.ursula = class ursula extends allies.ally
{   constructor()
    {   super();
        this.tag = 'ursula';
        this.name = "Ursula";
        this.title = "Blue Crow";
        this.text = "A cruel member of the Black Fang assassins. Lends her service only to someone truly perfect.";
        this.summon = false;
     // this.obtained = #;
     // this.favourite;
        this.origin = 7;
        this.minimum_rarity = 3;
        this.colour_type = 'blue';
        this.weapon_type = 'tome_blue';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 145;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 15, atk: 6, spd: 7, def: 3, res: 7 },
            4 : { hp: 15, atk: 6, spd: 8, def: 3, res: 8 },
            5 : { hp: 16, atk: 7, spd: 8, def: 4, res: 8 },
        };
        this.growth_points =
                { hp:  5, atk: 6, spd: 7, def: 3, res: 6 };

        this.base_skills =
        {   weapons   : [ 'thunder', 'elthunder', 'blarwolf', 'blarwolf_plus' ],
            assists   : [ null ],
            specials  : [ 'rising_thunder', 'growing_thunder' ],
            passive_a : [ 'death_blow_1', 'death_blow_2', 'death_blow_3' ],
            passive_b : [ null ],
            passive_c : [ 'threaten_res_1', 'threaten_res_2', 'threaten_res_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_a';
    }
};




/*
chars.veronica = class veronica extends allies.ally
{   constructor()
    {   super();
        this.tag = 'veronica';
        this.name = "Veronica";
        this.title = "Emblian Princess";
        this.text = "Imperial princess of the Emblian Empire. Uses Heroes against the Askran Kingdom."
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 0;
        this.minimum_rarity = 0;
        this.colour_type = 'green';
        this.weapon_type = 'tome_green';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 10;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : null
        };
        this.growth_points =
                { null };

        this.base_skills =
        {   weapons   : [ 'elivagar' ],
            assists   : [ null ],
            specials  : [ null ],
            passive_a : [ null ],
            passive_b : [ null ],
            passive_c : [ null ]
        };
        this.early_passive = null;
        this.late_passive =  null;
    }
};
*/




chars.virion = class virion extends allies.ally
{   constructor()
    {   super();
        this.tag = 'virion';
        this.name = "Virion";
        this.title = "Elite Archer";
        this.text = "Rightful ruler of Rosanne in Valm who has a tendency for wit and puffery.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 13;
        this.minimum_rarity = 1;
        this.colour_type = 'grey';
        this.weapon_type = 'bow';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 158;
        this.base_stats =
        {   1 : { hp: 18, atk: 5, spd:  5, def: 5, res: 1 },
            2 : { hp: 18, atk: 6, spd:  6, def: 5, res: 1 },
            3 : { hp: 19, atk: 6, spd:  6, def: 6, res: 2 },
            4 : { hp: 19, atk: 7, spd:  7, def: 6, res: 2 },
            5 : { hp: 20, atk: 7, spd:  7, def: 7, res: 3 },
        };
        this.growth_points =
                { hp:  8, atk: 7, spd: 7, def: 5, res: 1 };

        this.base_skills =
        {   weapons   : [ 'iron_bow', 'steel_bow', 'silver_bow', 'silver_bow_plus' ],
            assists   : [ null ],
            specials  : [ 'night_sky', 'astra' ],
            passive_a : [ 'defiant_res_1', 'defiant_res_2', 'defiant_res_3' ],
            passive_b : [ 'seal_spd_1', 'seal_spd_2', 'seal_spd_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};




chars.wrys = class wrys extends allies.ally
{   constructor()
    {   super();
        this.tag = 'wrys';
        this.name = "Wrys";
        this.title = "Kindly Priest";
        this.text = "Humble priest of Talys who likes a quiet life. Despises battle, preferring to heal allies.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 1.1;
        this.minimum_rarity = 1;
        this.colour_type = 'colourless';
        this.weapon_type = 'staff';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 147;
        this.base_stats =
        {   1 : { hp: 16, atk: 3, spd: 4, def: 3, res:  8 },
            2 : { hp: 16, atk: 3, spd: 5, def: 3, res:  9 },
            3 : { hp: 17, atk: 4, spd: 5, def: 4, res:  9 },
            4 : { hp: 17, atk: 4, spd: 6, def: 4, res: 10 },
            5 : { hp: 18, atk: 5, spd: 6, def: 5, res: 10 },
        };
        this.growth_points =
                { hp:  7, atk: 5, spd: 4, def: 4, res:  8 };

        this.base_skills =
        {   weapons   : [ 'assault', 'slow' ],
            assists   : [ 'heal', 'reconcile', 'rehabilitate' ],
            specials  : [ 'imbue', 'heavenly_light' ],
            passive_a : [ null ],
            passive_b : [ 'live_to_serve_1', 'live_to_serve_2', 'live_to_serve_3' ],
            passive_c : [ null ]
        };
        this.early_passive = null;
        this.late_passive =  'passive_b';
    }
};




chars.xander = class xander extends allies.ally
{   constructor()
    {   super();
        this.tag = 'xander';
        this.name = "Xander";
        this.title = "Paragon Knight";
        this.text = "Nohrian prince respected for his military prowess. Wields the divine blade Siegfried.";
        this.summon = false;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 3;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'cavalry';
     // this.level = 40;
     // this.rating = 154;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 19, atk: 7, spd: 4, def: 8, res: 3 },
            4 : { hp: 19, atk: 8, spd: 4, def: 9, res: 3 },
            5 : { hp: 20, atk: 8, spd: 5, def: 9, res: 4 },
        };
        this.growth_points =
                { hp:  7, atk: 7, spd: 5, def: 9, res: 2 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'siegfried' ],
            assists   : [ null ],
            specials  : [ 'rising_light', 'blazing_light' ],
            passive_a : [ 'armored_blow_1', 'armored_blow_2', 'armored_blow_3' ],
            passive_b : [ null ],
            passive_c : [ 'spur_def_1', 'spur_def_2', 'spur_def_3' ]
        };
        this.early_passive = null;
        this.late_passive =  'passive_c';
        this.special_passive = 'passive_a'; // ?? learns as 1,2,5?
        this.special_pattern = [ null, 'armored_blow_1', 'armored_blow_2', null, null, 'armored_blow_3' ];
    }
};




chars.xander_spring = class xander_spring extends allies.ally
{   constructor()
    {   super();
        this.tag = 'xander_spring';
        this.name = "Xander";
        this.subname = "🐇";
        this.title = "Spring Prince";
        this.text = "Nohrian prince who normally wields the divine blade Siegfried but left it behind for the festival.";
        this.summon = true;
     // this.obtained = #;
     // this.favourite;
        this.origin = 14;
        this.minimum_rarity = 5;
        this.colour_type = 'blue';
        this.weapon_type = 'lance';
        this.move_type = 'infantry';
     // this.level = 40;
     // this.rating = 154;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : { hp: 18, atk: 6, spd: 6, def: 9, res: 7 },
        };
        this.growth_points =
                { hp:  6, atk: 5, spd: 6, def: 8, res: 5 };

        this.base_skills =
        {   weapons   : [ 'iron_lance', 'steel_lance', 'carrot_lance', 'carrot_lance_plus' ],
            assists   : [ 'swap' ],
            specials  : [ null ],
            passive_a : [ null ],
            passive_b : [ 'live_for_honor' ],
            passive_c : [ 'fortify_def_1', 'fortify_def_2', 'fortify_def_3' ]
        };
        this.early_passive = 'passive_c';
        this.late_passive =  'passive_b';
    }
};




chars.zephiel = class zephiel extends allies.ally
{   constructor()
    {   super();
        this.tag = 'zephiel';
        this.name = "Zephiel";
        this.title = "The Liberator";
        this.text = "King of Bern. Once a kindhearted boy who became disillusioned with humanity. Wants his world to be ruled by dragons.";
        this.summon = false;
     // this.obtained = #;
     // this.favourite;
        this.origin = 6;
        this.minimum_rarity = 3;
        this.colour_type = 'red';
        this.weapon_type = 'sword';
        this.move_type = 'armor';
     // this.level = 40;
     // this.rating = 10;
        this.base_stats =
        {   1 : null,
            2 : null,
            3 : { hp: 24, atk: 8, spd: 2, def: 11, res: 4 },
            4 : { hp: 24, atk: 9, spd: 2, def: 11, res: 4 },
            5 : { hp: 25, atk: 9, spd: 3, def: 12, res: 5 },
        };
        this.growth_points =
                { hp: 10, atk: 8, spd: 2, def:  8, res: 5 };

        this.base_skills =
        {   weapons   : [ 'iron_sword', 'steel_sword', 'silver_sword', 'eckesachs' ],
            assists   : [ null ],
            specials  : [ 'retribution', 'reprisal' ],
            passive_a : [ 'life_and_death_1', 'life_and_death_2', 'life_and_death_3' ],
            passive_b : [ 'wary_fighter_1', 'wary_fighter_2', 'wary_fighter_3' ],
            passive_c : [ null ]
        };
        this.early_passive = 'passive_b';
        this.late_passive =  'passive_a';
    }
};
