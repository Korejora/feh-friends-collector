
dat.weapons =
{
    // weapons

    absorb :
    {   tag : 'absorb',
        name : "Absorb",
        weapon_type : 'staff',
        might : 4,
        range : 2,
        text : "Recovers HP=50% of damage dealt.",
        effects : { after : { sun: 0.5 } },
        sp: 150,
        prerequisite : 'assault',
        inherit : 'weapon_type'
    },

    armads :
    {   tag : 'armads',
        name : "Armads",
        weapon_type : 'axe',
        might : 16,
        range : 1,
        text : "Unit makes a guaranteed follow-up attack when attacked at HP ≥ 80%.",
        effects : { followup: { check: 'self', less: 0.8, stat:'hp' } },
        sp: 400,
        prerequisite : 'silver_axe',
        inherit : 'exclusive'
    },

    armorslayer :
    {   tag : 'armorslayer',
        name : "Armorslayer",
        weapon_type : 'sword' ,
        might: 8,
        range: 1,
        effective: { move_types:['armor'] },
        text : "Effective against armored units.",
        sp: 200,
        prerequisite : 'steel_sword',
        inherit: 'weapon_type'
    },
    armorslayer_plus :
    {   tag : 'armorslayer_plus',
        name : "Armorslayer+",
        weapon_type : 'sword' ,
        might: 12,
        range: 1,
        effective: { move_types:['armor'] },
        text : "Effective against armored units.",
        sp: 300,
        prerequisite : 'armorslayer',
        inherit: 'weapon_type'
    },

    assassins_bow :
    {   tag : 'assassins_bow',
        name : "Assassin's Bow",
        weapon_type : 'bow',
        might : 7,
        range : 2,
        effective: { move_types:['flyer'] },
        text : "Effective against flying units. If target has a dagger, it can't make a follow-up attack and this unit will.",
        effects : { break: { weapon_type:'dagger', check:false } },
        sp: 200,
        prerequisite : 'steel_bow',
        inherit : 'weapon_type'
    },
    assassins_bow_plus :
    {   tag : 'assassins_bow_plus',
        name : "Assassin's Bow+",
        weapon_type : 'bow',
        might : 11,
        range : 2,
        effective: { move_types:['flyer'] },
        text : "Effective against flying units. If target has a dagger, it can't make a follow-up attack and this unit will.",
        effects : { break: { weapon_type:'dagger', check:false } },
        sp: 300,
        prerequisite : 'assassins_bow',
        inherit : 'weapon_type'
    },

    assault :
    {   tag : 'assault',
        name : "Assault",
        weapon_type : 'staff',
        might : 10,
        range : 2,
        sp: 50,
        inherit : 'weapon_type'
    },

    aura :
    {   tag : 'aura',
        name : "Aura",
        weapon_type : 'tome_blue',
        might : 14,
        range : 2,
        text : "Restores 5 HP to adjacent allies after any combat this unit initiates.",
        effects : { after : { heal_allies: 5 } },
        sp: 400,
        prerequisite : 'thoron',
        inherit : 'exclusive'
    },

    blarblade :
    {   tag : 'blarblade',
        name: "Blárblade",
        weapon_type : 'tome_blue',
        might : 9,
        range : 2,
        text : "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.",
        effects : { special_count:'+1' , damage: 'blade' },
        sp: 200,
        prerequisite : 'elthunder',
        inherit : 'weapon_type'
    },
    blarblade_plus :
    {   tag : 'blarblade_plus',
        name: "Blárblade+",
        weapon_type : 'tome_blue',
        might : 13,
        range : 2,
        text : "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.",
        effects : { special_count:'+1' , damage: 'blade' },
        sp: 300,
        prerequisite : 'blarblade',
        inherit : 'weapon_type'
    },

    blarowl :
    {   tag : 'blarowl',
        name: "Blárowl",
        weapon_type : 'tome_blue',
        might : 6,
        range : 2,
        text : "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.",
        effects : { bonus:'owl' },
        sp: 200,
        prerequisite : 'elthunder',
        inherit : 'weapon_type'
    },
    blarowl_plus :
    {   tag : 'blarowl_plus',
        name: "Blárowl+",
        weapon_type : 'tome_blue',
        might : 10,
        range : 2,
        text : "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.",
        effects : { bonus:'owl' },
        sp: 300,
        prerequisite : 'blarowl',
        inherit : 'weapon_type'
    },

    blarraven :
    {   tag : 'blarraven',
        name: "Blárraven",
        weapon_type : 'tome_blue',
        might : 7,
        range : 2,
        text : "Grants weapon advantage vs. colorless foes.",
        effects : { advantage: 'colourless' },
        sp: 200,
        prerequisite : 'elthunder',
        inherit : 'weapon_type'
    },
    blarraven_plus :
    {   tag : 'blarraven_plus',
        name: "Blárraven+",
        weapon_type : 'tome_blue',
        might : 11,
        range : 2,
        text : "Grants weapon advantage vs. colorless foes.",
        effects : { advantage: 'colourless' },
        sp: 300,
        prerequisite : 'blarraven',
        inherit : 'weapon_type'
    },

    blarwolf :
    {   tag : 'blarwolf',
        name: "Blárrwolf",
        weapon_type : 'tome_blue',
        might : 6,
        range : 2,
        effective: { move_types:['cavalry'] },
        text : "Effective against cavalry units.",
        sp: 200,
        prerequisite : 'elthunder',
        inherit : 'weapon_type'
    },
    blarwolf_plus :
    {   tag : 'blarwolf_plus',
        name: "Rauðrrwolf+",
        weapon_type : 'tome_blue',
        might : 10,
        range : 2,
        effective: { move_types:['cavalry'] },
        text : "Effective against cavalry units.",
        sp: 300,
        prerequisite : 'blarwolf',
        inherit : 'weapon_type'
    },

    blue_egg :
    {   tag : 'blue_egg',
        name: "Blue Egg",
        weapon_type : 'tome_blue',
        might : 7,
        range : 2,
        text : "If unit initiates attack, unit recovers 4 HP after the battle.",
        effects : { after : { init: { heal_self:4 } } },
        sp: 200,
        prerequisite : 'elwind',
        inherit : 'weapon_type'
    },
    blue_egg_plus :
    {   tag : 'blue_egg_plus',
        name: "Blue Egg+",
        weapon_type : 'tome_blue',
        might : 11,
        range : 2,
        text : "If unit initiates attack, unit recovers 4 HP after the battle.",
        effects : { after : { init: { heal_self:4 } } },
        sp: 300,
        prerequisite : 'blue_egg',
        inherit : 'weapon_type'
    },


    binding_blade :
    {   tag : 'binding_blade',
        name : "Binding Blade",
        weapon_type : 'sword',
        might : 16,
        range : 1,
        text : "Grants Def/Res+2 when this unit is attacked.",
        effects : { attacked : { def:2, res:2 } },
        sp: 400,
        prerequisite : 'silver_sword',
        inherit : 'exclusive'
    },

    bolganone :
    {   tag : 'bolganone',
        name : "Bolganone",
        weapon_type : 'tome_red',
        might: 9,
        range: 2,
        sp: 200,
        prerequisite : 'elfire',
        inherit : 'weapon_type'
    },
    bolganone_plus :
    {   tag : 'bolganone_plus',
        name : "Bolganone+",
        weapon_type : 'tome_red',
        might: 13,
        range: 2,
        sp: 300,
        prerequisite : 'bolganone',
        inherit : 'weapon_type'
    },

    brave_axe :
    {   tag : 'brave_axe',
        name : "Brave Axe",
        weapon_type : 'axe' ,
        might: 5,
        range: 1,
        text : "Spd-5. Attack twice when initiating combat.",
        effects : { spd: '-5', initiate : 'brave' },
        sp: 200,
        prerequisite : 'steel_axe',
        inherit: 'weapon_type'
    },
    brave_axe_plus :
    {   tag : 'brave_axe_plus',
        name : "Brave Axe+",
        weapon_type : 'axe',
        might: 8,
        range: 1,
        text : "Spd-5. Attack twice when initiating combat.",
        effects : { spd: '-5', initiate : 'brave' },
        sp: 300,
        prerequisite : 'brave_axe',
        inherit: 'weapon_type'
    },

    brave_bow :
    {   tag : 'brave_bow',
        name : "Brave Bow",
        weapon_type : 'bow' ,
        might: 4,
        range: 1,
        effective: { move_types:['flyer'] },
        text : "Spd-5. Effective against flying units. Attacks twice if unit initiates combat.",
        effects : { spd: '-5', initiate : 'brave' },
        sp: 200,
        prerequisite : 'steel_bow',
        inherit: 'weapon_type'
    },
    brave_bow_plus :
    {   tag : 'brave_bow_plus',
        name : "Brave Bow+",
        weapon_type : 'bow',
        might: 7,
        range: 1,
        effective: { move_types:['flyer'] },
        text : "Spd-5. Effective against flying units. Attacks twice if unit initiates combat.",
        effects : { spd: '-5', initiate : 'brave' },
        sp: 300,
        prerequisite : 'brave_bow',
        inherit: 'weapon_type'
    },

    brave_lance :
    {   tag : 'brave_lance',
        name : "Brave Lance",
        weapon_type : 'lance' ,
        might: 5,
        range: 1,
        text : "Spd-5. Attack twice when initiating combat.",
        effects : { spd: '-5', initiate : 'brave' },
        sp: 200,
        prerequisite : 'steel_lance',
        inherit: 'weapon_type'
    },
    brave_lance_plus :
    {   tag : 'brave_lance_plus',
        name : "Brave Lance+",
        weapon_type : 'lance',
        might: 8,
        range: 1,
        text : "Spd-5. Attack twice when initiating combat.",
        effects : { spd: '-5', initiate : 'brave' },
        sp: 300,
        prerequisite : 'brave_lance',
        inherit: 'weapon_type'
    },

    brave_sword :
    {   tag : 'brave_sword',
        name : "Brave Sword",
        weapon_type : 'sword' ,
        might: 5,
        range: 1,
        text : "Spd-5. Attack twice when initiating combat.",
        effects : { spd: '-5', initiate : 'brave' },
        sp: 200,
        prerequisite : 'steel_sword',
        inherit: 'weapon_type'
    },
    brave_sword_plus :
    {   tag : 'brave_sword_plus',
        name : "Brave Sword+",
        weapon_type : 'sword',
        might: 8,
        range: 1,
        text : "Spd-5. Attack twice when initiating combat.",
        effects : { spd: '-5', initiate : 'brave' },
        sp: 300,
        prerequisite : 'brave_sword',
        inherit: 'weapon_type'
    },

    brynhildr :
    {   tag : 'brynhildr',
        name : "Brynhildr",
        weapon_type : 'tome_red',
        might : 14,
        range : 2,
        text : "If unit initiates attack, restricts foe's next-turn movement to 1 space or less.",
        effects : { gravity : { move:1 } },
        sp: 400,
        prerequisite : 'fenrir',
        inherit : 'exclusive'
    },

    carrot_axe :
    {   tag : 'carrot_axe',
        name: "Carrot Axe",
        weapon_type : 'axe',
        might : 9,
        range : 1,
        text : "If unit initiates attack, unit recovers 4 HP after the battle.",
        effects : { after : { init: { heal_self:4 } } },
        sp: 200,
        prerequisite : 'steel_axe',
        inherit : 'weapon_type'
    },
    carrot_axe_plus :
    {   tag : 'carrot_axe_plus',
        name: "Carrot Axe+",
        weapon_type : 'axe',
        might : 13,
        range : 2,
        text : "If unit initiates attack, unit recovers 4 HP after the battle.",
        effects : { after : { init: { heal_self:4 } } },
        sp: 300,
        prerequisite : 'carrot_axe',
        inherit : 'weapon_type'
    },

    carrot_lance :
    {   tag : 'carrot_lance',
        name: "Carrot Lance",
        weapon_type : 'lance',
        might : 9,
        range : 1,
        text : "If unit initiates attack, unit recovers 4 HP after the battle.",
        effects : { after : { init: { heal_self:4 } } },
        sp: 200,
        prerequisite : 'steel_lance',
        inherit : 'weapon_type'
    },
    carrot_lance_plus :
    {   tag : 'carrot_lance_plus',
        name: "Carrot Lance+",
        weapon_type : 'lance',
        might : 13,
        range : 2,
        text : "If unit initiates attack, unit recovers 4 HP after the battle.",
        effects : { after : { init: { heal_self:4 } } },
        sp: 300,
        prerequisite : 'carrot_lance',
        inherit : 'weapon_type'
    },

    cymbeline :
    {   tag : 'cymbeline',
        name : "Cymbeline",
        weapon_type : 'tome_red',
        might : 14,
        range : 2,
        text : "Grants adjacent allies Atk+4 through their next actions after any combat this unit initiates.",
        effects : { after : { hone: { atk:4 } } },
        sp: 400,
        prerequisite : 'bolganone',
        inherit : 'exclusive'
    },

    dark_breath :
    {   tag : 'dark_breath',
        name : "Dark Breath",
        weapon_type : 'dragon',
        might : 9,
        range : 1,
        text : "After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next actions.",
        effects : { after : { threaten : { atk:4, spd:4 } } },
        sp: 200,
        prerequisite : 'fire_breath_plus',
        inherit : 'dragon'
    },
    dark_breath_plus :
    {   tag : 'dark_breath_plus',
        name : "Dark Breath+",
        weapon_type : 'dragon',
        might : 13,
        range : 1,
        text : "After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next actions.",
        effects : { after : { threaten : { atk:4, spd:4 } } },
        sp: 300,
        prerequisite : 'dark_breath',
        inherit : 'dragon'
    },

    deathly_dagger :
    {   tag : 'deathly_dagger',
        name : "Deathly Dagger",
        weapon_type : 'dagger',
        might: 11,
        range : 2,
        text : "After combat, inflicts Def/Res-7 on foe through its next action. If unit initiated combat, 7 damage to foe after battle.",
        effects : { after : { dagger:7, poison:7 } },
        sp: 400,
        prerequisite : 'silver_dagger',
        inherit : 'weapon_type'
    },

    dire_thunder :
    {   tag : 'dire_thunder',
        name : "Dire Thunder",
        weapon_type : 'lance',
        might: 9,
        range: 2,
        text : "Spd-5. Attack twice when initiating combat.",
        effects : { spd: '-5', initiate : 'brave' },
        sp: 300,
        prerequisite : 'thoron',
        inherit: 'weapon_type'
    },

    durandal :
    {   tag : 'durandal',
        name : "Durandal",
        weapon_type : 'sword',
        might : 16,
        range : 1,
        text : "Grants Atk+4 during combat if unit initiates attack.",
        effects : { initiate : { atk:+4 } },
        sp: 400,
        prerequisite : 'silver_sword',
        inherit : 'exclusive'
    },

    eckesachs :
    {   tag : 'eckesachs',
        name : "Eckesachs",
        weapon_type : 'sword',
        might : 16,
        range : 1,
        text : "Inflicts Def-4 on foes within 2 spaces through their next actions at the start of each turn.",
        effects : { threaten : { def:4 } },
        sp: 400,
        prerequisite : 'silver_sword',
        inherit : 'exclusive'
    },

    elfire :
    {   tag : 'elfire',
        name : "Elfire",
        weapon_type : 'tome_red',
        might : 6,
        range : 2,
        sp: 100,
        prerequisite : 'fire',
        inherit: 'weapon_type'
    },
    elthunder :
    {   tag : 'elthunder',
        name : "Elthunder",
        weapon_type : 'tome_blue',
        might : 6,
        range : 2,
        sp: 100,
        prerequisite : 'thunder',
        inherit: 'weapon_type'
    },
    elwind :
    {   tag : 'elwind',
        name : "Elwind",
        weapon_type : 'tome_green',
        might : 6,
        range : 2,
        sp: 100,
        prerequisite : 'wind',
        inherit: 'weapon_type'
    },

    elivagar :
    {   tag : 'elivagar',
        name : "Élivágar",
        weapon_type : 'tome_green',
        might : 14,
        range : 2,
        text : "If unit initiates attack, bonuses on foes within 2 spaces of the target become penalties through their next actions.",
        effects : { check: 'initiate', bonus:'swap', penalty:'swap' },
        sp: 400,
        prerequisite : 'rexcalibur',
        inherit : 'exclusive'
    },

    emerald_axe :
    {   tag : 'emerald_axe',
        name : "Emerald Axe",
        weapon_type : 'axe',
        might : 8,
        range : 1,
        text : "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.",
        effects : { triangle : { atk:0.2 } },
        sp: 200,
        prerequisite : 'steel_axe',
        inherit : 'weapon_type'
    },
    emerald_axe_plus :
    {   tag : 'emerald_axe_plus',
        name : "Emerald Axe+",
        weapon_type : 'axe',
        might : 12,
        range : 1,
        text : "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.",
        effects : { triangle : { atk:0.2 } },
        sp: 300,
        prerequisite : 'emerald_axe',
        inherit : 'weapon_type'
    },

    excalibur :
    {   tag : 'excalibur',
        name : "Excalibur",
        weapon_type : 'tome_green',
        might : 14,
        range : 2,
        effective: { move_types:['flyer'] },
        text : "Effective against flying units.",
        sp: 400,
        prerequisite : 'rexcalibur',
        inherit : 'exclusive'
    },

    falchion :
    {   tag : 'falchion',
        name : "Falchion",
        weapon_type : 'sword',
        might : 16,
        range : 1,
        effective: { weapon_types:['dragon_red','dragon_blue','dragon_green'] },
        text : "Effective against dragons. At the start of every third turn, unit recovers 10 HP.",
        effects : { renewal : { heal_self:10, countdown: 3 } },
        sp: 400,
        prerequisite : 'silver_sword',
        inherit : 'exclusive'
    },

    fear :
    {   tag : 'fear',
        name : "Fear",
        weapon_type : 'staff',
        might : 5,
        range : 2,
        text : "After combat, inflicts Atk-6 on targeted foe through its next action.",
        effects : { after : { penalty: { atk:6 } } },
        sp: 150,
        prerequisite : 'assault',
        inherit : 'weapon_type'
    },

    fenrir :
    {   tag : 'fenrir',
        name : "Fenrir",
        weapon_type : 'tome_red',
        might: 9,
        range: 2,
        sp: 200,
        prerequisite : 'ruin',
        inherit : 'weapon_type'
    },
    fenrir_plus :
    {   tag : 'fenrir_plus',
        name : "Fenrir+",
        weapon_type : 'tome_red',
        might: 13,
        range: 2,
        sp: 300,
        prerequisite : 'fenrir',
        inherit : 'weapon_type'
    },

    fensalir :
    {   tag : 'fensalir',
        name : "Fensalir",
        weapon_type : 'lance',
        might : 16,
        range : 1,
        text : "Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn.",
        effects : { threaten : { atk:4 } },
        sp: 400,
        prerequisite : 'silver_lance',
        inherit : 'exclusive'
    },

    fire :
    {   tag : 'fire',
        name : "Fire",
        weapon_type : 'tome_red',
        might : 4,
        range : 2,
        sp: 50,
        inherit : 'weapon_type'
    },

    fire_breath :
    {   tag : 'fire_breath',
        name : "Fire Breath",
        weapon_type : 'dragon',
        might : 6,
        range : 1,
        sp: 50,
        inherit : 'dragon'
    },
    fire_breath_plus :
    {   tag : 'fire_breath_plus',
        name : "Fire Breath+",
        weapon_type : 'dragon',
        might : 8,
        range : 1,
        sp: 100,
        prerequisite : 'fire_breath',
        inherit : 'dragon'
    },

    firesweep_bow :
    {   tag : 'firesweep_bow',
        name : "Firesweep Bow",
        weapon_type : 'bow',
        might : 7,
        range : 2,
        effective: { move_types:['flyer'] },
        text : "Effective against flying units. Unit and enemies cannot use counterattacks.",
        effects : { no_counter_self: true, no_counter_enemy: true },
        sp: 200,
        prerequisite : 'steel_bow',
        inherit : 'weapon_type'
    },
    firesweep_bow_plus :
    {   tag : 'firesweep_bow_plus',
        name : "Firesweep Bow+",
        weapon_type : 'bow',
        might : 11,
        range : 2,
        effective: { move_types:['flyer'] },
        text : "Effective against flying units. Unit and enemies cannot use counterattacks.",
       effects : { no_counter_self: true, no_counter_enemy: true },
        sp: 300,
        prerequisite : 'firesweep_bow',
        inherit : 'weapon_type'
    },

    flametongue :
    {   tag : 'flametongue',
        name : "Flametongue",
        weapon_type : 'dragon',
        might : 11,
        range : 1,
        sp: 200,
        prerequisite : 'fire_breath_plus',
        inherit : 'dragon'
    },
    flametongue_plus :
    {   tag : 'flametongue_plus',
        name : "Flametongue+",
        weapon_type : 'dragon',
        might : 15,
        range : 1,
        sp: 300,
        prerequisite : 'flametongue',
        inherit : 'dragon'
    },

    flux :
    {   tag : 'flux',
        name : "Flux",
        weapon_type : 'tome_red',
        might : 4,
        range : 2,
        sp: 50,
        inherit : 'weapon_type'
    },

    folkvangr :
    {   tag : 'folkvangr',
        name : "Fólkvangr",
        weapon_type : 'sword',
        might : 16,
        range : 1,
        text : "Grants Atk+5 at start of turn if unit's HP ≤ 50%.",
        effects : { defiant : { atk:5 } },
        sp: 400,
        prerequisite : 'silver_sword',
        inherit : 'exclusive'
    },

    fujin_yumi :
    {   tag : 'fujin_yumi',
        name : "Fujin Yumi",
        weapon_type : 'bow',
        might : 14,
        range : 2,
        effective: { move_types:['flyer'] },
        text : "Effective against flying units. Unit can pass though foes if own HP ≥ 50%.",
        effects : { pass : { check: 'hp', more:0.5 } },
        sp: 400,
        prerequisite : 'silver_bow',
        inherit : 'exclusive'
    },

    gradivus :
    {   tag : 'gradivus',
        name : "Gradivus",
        weapon_type : 'lance',
        might : 16,
        range : 1,
        text : "????",
        effects : { },
        sp: 400,
        prerequisite : 'silver_lance',
        inherit : 'exclusive'
    },

    gravity :
    {   tag : 'gravity',
        name : "Gravity",
        weapon_type : 'staff',
        might : 6,
        range : 2,
        text : "After any combat, prevents foe from moving more than 1 space through its next action.",
        effects : { after : { gravity:1 } },
        sp: 150,
        prerequisite : 'assault',
        inherit : 'weapon_type'
    },

    green_egg :
    {   tag : 'green_egg',
        name: "Green Egg",
        weapon_type : 'tome_green',
        might : 7,
        range : 2,
        text : "If unit initiates attack, unit recovers 4 HP after the battle.",
        effects : { after : { init: { heal_self:4 } } },
        sp: 200,
        prerequisite : 'elwind',
        inherit : 'weapon_type'
    },
    green_egg_plus :
    {   tag : 'green_egg_plus',
        name: "Green Egg+",
        weapon_type : 'tome_green',
        might : 11,
        range : 2,
        text : "If unit initiates attack, unit recovers 4 HP after the battle.",
        effects : { after : { init: { heal_self:4 } } },
        sp: 300,
        prerequisite : 'green_egg',
        inherit : 'weapon_type'
    },

    gronnblade :
    {   tag : 'gronnblade',
        name: "Gronnblade",
        weapon_type : 'tome_green',
        might : 9,
        range : 2,
        text : "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.",
        effects : { special_count:'+1' , damage: 'blade' },
        sp: 200,
        prerequisite : 'elwind',
        inherit : 'weapon_type'
    },
    gronnblade_plus :
    {   tag : 'gronnblade_plus',
        name: "Gronnblade+",
        weapon_type : 'tome_green',
        might : 13,
        range : 2,
        text : "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.",
        effects : { special_count:'+1' , damage: 'blade' },
        sp: 300,
        prerequisite : 'gronnblade',
        inherit : 'weapon_type'
    },

    gronnowl :
    {   tag : 'gronnowl',
        name: "Gronnowl",
        weapon_type : 'tome_green',
        might : 6,
        range : 2,
        text : "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.",
        effects : { bonus:'owl' },
        sp: 200,
        prerequisite : 'elwind',
        inherit : 'weapon_type'
    },
    gronnowl_plus :
    {   tag : 'gronnowl_plus',
        name: "Gronnowl+",
        weapon_type : 'tome_green',
        might : 10,
        range : 2,
        text : "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.",
        effects : { bonus:'owl' },
        sp: 300,
        prerequisite : 'gronnowl',
        inherit : 'weapon_type'
    },

    gronnraven :
    {   tag : 'gronnraven',
        name: "Gronnraven",
        weapon_type : 'tome_green',
        might : 7,
        range : 2,
        text : "Grants weapon advantage vs. colorless foes.",
        effects : { advantage: 'colourless' },
        sp: 200,
        prerequisite : 'elwind',
        inherit : 'weapon_type'
    },
    gronnraven_plus :
    {   tag : 'gronnraven_plus',
        name: "Gronnraven+",
        weapon_type : 'tome_green',
        might : 11,
        range : 2,
        text : "Grants weapon advantage vs. colorless foes.",
        effects : { advantage: 'colourless' },
        sp: 300,
        prerequisite : 'gronnraven',
        inherit : 'weapon_type'
    },

    gronnwolf :
    {   tag : 'gronnwolf',
        name: "Gronnwolf",
        weapon_type : 'tome_green',
        might : 6,
        range : 2,
        effective: { move_types:['cavalry'] },
        text : "Effective against cavalry units.",
        sp: 200,
        prerequisite : 'elwind',
        inherit : 'weapon_type'
    },
    gronnwolf_plus :
    {   tag : 'gronnwolf_plus',
        name: "Gronnwolf+",
        weapon_type : 'tome_green',
        might : 10,
        range : 2,
        effective: { move_types:['cavalry'] },
        text : "Effective against cavalry units.",
        sp: 300,
        prerequisite : 'gronnwolf',
        inherit : 'weapon_type'
    },

    hammer :
    {   tag : 'hammer',
        name : "Hammer",
        weapon_type : 'axe' ,
        might: 8,
        range: 1,
        effective: { move_types:['armor'] },
        text : "Effective against armored units.",
        sp: 200,
        prerequisite : 'steel_axe',
        inherit: 'weapon_type'
    },
    hammer_plus :
    {   tag : 'hammer_plus',
        name : "Armorslayer+",
        weapon_type : 'axe' ,
        might: 12,
        range: 1,
        effective: { move_types:['armor'] },
        text : "Effective against armored units.",
        sp: 300,
        prerequisite : 'hammer',
        inherit: 'weapon_type'
    },

    hauteclere :
    {   tag : 'hauteclere',
        name : "Hauteclere",
        weapon_type : 'axe',
        might : 16,
        range : 1,
        text : "Accelerates Special trigger (cooldown count-1).",
        effects : { special : { cooldown : '-1' } },
        sp: 400,
        prerequisite : 'silver_axe',
        inherit : 'exclusive'
    },

    heavy_spear :
    {   tag : 'heavy_spear',
        name : "Heavy Spear",
        weapon_type : 'lance' ,
        might: 8,
        range: 1,
        effective: { move_types:['armor'] },
        text : "Effective against armored units.",
        sp: 200,
        prerequisite : 'steel_lance',
        inherit: 'weapon_type'
    },
    heavy_spear_plus :
    {   tag : 'heavy_spear_plus',
        name : "Heavy Spear+",
        weapon_type : 'lance' ,
        might: 12,
        range: 1,
        effective: { move_types:['armor'] },
        text : "Effective against armored units.",
        sp: 300,
        prerequisite : 'heavy_spear',
        inherit: 'weapon_type'
    },

    iron_axe :
    {   tag : 'iron_axe',
        name : "Iron Axe",
        weapon_type : 'axe',
        might : 6,
        range : 1,
        sp: 50,
        inherit : 'weapon_type'
    },
    iron_bow :
    {   tag : 'iron_bow',
        name : "Iron Bow",
        weapon_type : 'bow',
        might : 4,
        range : 2,
        effective: { move_types:['flyer'] },
        text : "Effective against flying units.",
        sp: 50,
        prerequisite : null,
        inherit : 'weapon_type'
    },
    iron_dagger :
    {   tag : 'iron_dagger',
        name : "Iron Dagger",
        weapon_type : 'dagger',
        might : 3,
        range : 2,
        text : "After combat, inflicts Def/Res-3 on foe through its next action.",
        effects : { after : { dagger:3 } },
        sp: 50,
        prerequisite : null,
        inherit : 'weapon_type'
    },
    iron_lance :
    {   tag : 'iron_lance',
        name : "Iron Lance",
        weapon_type : 'lance',
        might : 6,
        range : 1,
        sp: 50,
        inherit : 'weapon_type'
    },
    iron_sword :
    {   tag : 'iron_sword',
        name : "Iron Sword",
        weapon_type : 'sword',
        might : 6,
        range : 1,
        sp: 50,
        inherit : 'weapon_type'
    },

    killer_axe :
    {   tag : 'killer_axe',
        name : "Killer Axe",
        weapon_type : 'axe',
        might : 7,
        range : 1,
        text : "Accelerates Special trigger (cooldown count-1).",
        effects : { special : { cooldown : '-1' } },
        sp: 200,
        prerequisite : 'steel_axe',
        inherit : 'weapon_type'
    },
    killer_axe_plus :
    {   tag : 'killer_axe_plus',
        name : "Killer Axe+",
        weapon_type : 'axe',
        might : 11,
        range : 1,
        text : "Accelerates Special trigger (cooldown count-1).",
        effects : { special : { cooldown : '-1' } },
        sp: 300,
        prerequisite : 'killer_axe',
        inherit : 'weapon_type'
    },

    killer_bow :
    {   tag : 'killer_bow',
        name : "Killer Bow",
        weapon_type : 'bow',
        might : 5,
        range : 2,
        effective: { move_types:['flyer'] },
        text : "Effective against flying units. Accelerates Special trigger (cooldown count-1).",
        effects : { special : { cooldown : '-1' } },
        sp: 200,
        prerequisite : 'steel_bow',
        inherit : 'weapon_type'
    },
    killer_bow_plus :
    {   tag : 'killer_bow_plus',
        name : "Killer Bow+",
        weapon_type : 'bow',
        might : 9,
        range : 2,
        effective: { move_types:['flyer'] },
        text : "Effective against flying units. Accelerates Special trigger (cooldown count-1).",
        effects : { special : { cooldown : '-1' } },
        sp: 300,
        prerequisite : 'killer_bow',
        inherit : 'weapon_type'
    },

    killer_lance :
    {   tag : 'killer_lance',
        name : "Killer Lance",
        weapon_type : 'lance',
        might : 7,
        range : 1,
        text : "Accelerates Special trigger (cooldown count-1).",
        effects : { special : { cooldown : '-1' } },
        sp: 200,
        prerequisite : 'steel_lance',
        inherit : 'weapon_type'
    },
    killer_lance_plus :
    {   tag : 'killer_lance_plus',
        name : "Killer Lance+",
        weapon_type : 'lance',
        might : 11,
        range : 1,
        text : "Accelerates Special trigger (cooldown count-1).",
        effects : { special : { cooldown : '-1' } },
        sp: 300,
        prerequisite : 'killer_lance',
        inherit : 'weapon_type'
    },

    killing_edge :
    {   tag : 'killing_edge',
        name : "Killing Edge",
        weapon_type : 'sword',
        might : 7,
        range : 1,
        text : "Accelerates Special trigger (cooldown count-1).",
        effects : { special : { cooldown : '-1' } },
        sp: 200,
        prerequisite : 'steel_sword',
        inherit : 'weapon_type'
    },
    killing_edge_plus :
    {   tag : 'killing_edge_plus',
        name : "Killing Edge+",
        weapon_type : 'sword',
        might : 11,
        range : 1,
        text : "Accelerates Special trigger (cooldown count-1).",
        effects : { special : { cooldown : '-1' } },
        sp: 300,
        prerequisite : 'killing_edge',
        inherit : 'weapon_type'
    },

    mystletainn :
    {   tag : 'mystletainn',
        name : "Mystletainn",
        weapon_type : 'sword',
        might : 16,
        range : 1,
        text : "Accelerates Special trigger (cooldown count-1).",
        effects : { special : { cooldown : '-1' } },
        sp: 400,
        prerequisite : 'killing_edge',
        inherit : 'exclusive'
    },

    light_breath :
    {   tag : 'light_breath',
        name : "Light Breath",
        weapon_type : 'dragon',
        might : 9,
        range : 1,
        text : "Grants adjacent allies Def/Res+4 through their next actions after any combat this unit initiates.",
        effects : { after : { hone : { def:4, res:4 } } },
        sp: 200,
        prerequisite : 'fire_breath_plus',
        inherit : 'dragon'
    },
    light_breath_plus :
    {   tag : 'light_breath_plus',
        name : "Light Breath+",
        weapon_type : 'dragon',
        might : 13,
        range : 1,
        text : "Grants adjacent allies Def/Res+4 through their next actions after any combat this unit initiates.",
        effects : { after : { hone : { def:4, res:4 } } },
        sp: 300,
        prerequisite : 'light_breath',
        inherit : 'dragon'
    },

    lightning_breath :
    {   tag : 'lightning_breath',
        name : "Lightning Breath",
        weapon_type : 'dragon',
        might : 7,
        range : 1,
        text : "Enables counterattack regardless of attacker's range. Slows Special trigger (cooldown count+1).",
        effects : { counter : { range:0 },  special_count:'+1' },
        sp: 200,
        prerequisite : 'fire_breath_plus',
        inherit : 'dragon'
    },
    lightning_breath_plus :
    {   tag : 'lightning_breath_plus',
        name : "Lightning Breath+",
        weapon_type : 'dragon',
        might : 11,
        range : 1,
        text : "Enables counterattack regardless of attacker's range. Slows Special trigger (cooldown count+1).",
        effects : { counter : { range:0 },  special_count:'+1' },
        sp: 300,
        prerequisite : 'lightning_breath',
        inherit : 'dragon'
    },

    naga :
    {   tag : 'naga',
        name : "Naga",
        weapon_type : 'tome_green',
        might : 14,
        range : 2,
        effective: { weapon_types:['dragon_red','dragon_blue','dragon_green'] },
        text : "Effective against dragons. Grants Def/Res+2 when this unit is attacked.",
        effects : { attacked : { def:2, res:2 } },
        sp: 400,
        prerequisite : 'rexcalibur',
        inherit : 'exclusive'
    },

    noatun :
    {   tag : 'noatun',
        name : "Nóatún",
        weapon_type : 'axe',
        might : 16,
        range : 1,
        text : "Unit may move adjacent to any ally when HP ≤ 40%.",
        effects : { warp : { check:'self', less:0.4, stat:'hp' } },
        sp: 400,
        prerequisite : 'silver_axe',
        inherit : 'exclusive'
    },

    pain :
    {   tag : 'pain',
        name : "Pain",
        weapon_type : 'staff',
        might : 3,
        range : 2,
        text : "Inflicts 10 damage on targeted foe after combat.",
        effects : { after : { poison:10 } },
        sp: 150,
        prerequisite : 'assault',
        inherit : 'weapon_type'
    },

    panic :
    {   tag : 'panic',
        name : "Panic",
        weapon_type : 'staff',
        might : 7,
        range : 2,
        text : "After combat, bonuses on targeted foe become penalties through its next action.",
        effects : { bonus:'swap', penalty:'swap' },
        sp: 150,
        prerequisite : 'assault',
        inherit : 'weapon_type'
    },

    parthia :
    {   tag : 'parthia',
        name : "Parthia",
        weapon_type : 'bow',
        might : 14,
        range : 2,
        effective: { move_types:['flyer'] },
        text : "Effective against flying units. Grants Res+4 during combat if initiating attack.",
        effects : { initiate : { res:4 } },
        sp: 400,
        prerequisite : 'silver_bow',
        inherit : 'exclusive'
    },

    poison_dagger :
    {   tag : 'poison_dagger',
        name : "Poison Dagger",
        weapon_type : 'dagger',
        might: 2,
        range : 2,
        effective: { move_types:['infantry'] },
        text : "Effective against infantry units. Infantry foes suffer Def/Res-4 after combat through their next actions.",
        effects : { after : { check:'move_type', move_type:'infantry', dagger:4 } },
        sp: 200,
        prerequisite : 'steel_dagger',
        inherit : 'weapon_type'
    },
    poison_dagger_plus :
    {   tag : 'poison_dagger_plus',
        name : "Poison Dagger+",
        weapon_type : 'dagger',
        might: 5,
        range : 2,
        effective: { move_types:['infantry'] },
        text : "Effective against infantry units. Infantry foes suffer Def/Res-6 after combat through their next actions.",
        effects : { after : { check:'move_type', move_type:'infantry', dagger:6 } },
        sp: 300,
        prerequisite : 'poison_dagger',
        inherit : 'weapon_type'
    },

    raijinto :
    {   tag : 'raijinto',
        name : "Raijinto",
        weapon_type : 'sword',
        might : 16,
        range : 1,
        text : "Enables counterattack regardless of distance if this unit is attacked.",
        effects : { counter : { range:0 } },
        sp: 400,
        prerequisite : 'silver_sword',
        inherit : 'exclusive'
    },

    ragnarok :
    {   tag : 'ragnarok',
        name : "Ragnarok",
        weapon_type : 'tome_red',
        might : 14,
        range : 2,
        text : "If unit has 100% HP at the start of combat, unit receives Atk/Spd +5. If attacking, unit will receive 5 damage after combat.",
        effects : { combat : { check:{thresh:'more',hp:1.0}, atk:+5, spd:+5 }, after : { check:'initiate', bleed:5 } },
        sp: 400,
        prerequisite : 'bolganone',
        inherit : 'exclusive'
    },

    ragnell :
    {   tag : 'ragnell',
        name : "Ragnell",
        weapon_type : 'sword',
        might : 16,
        range : 1,
        text : "Enables counterattack regardless of distance if this unit is attacked.",
        effects : { counter : { range:0 } },
        sp: 400,
        prerequisite : 'silver_sword',
        inherit : 'exclusive'
    },

    raudrblade :
    {   tag : 'raudrblade',
        name: "Rauðrblade",
        weapon_type : 'tome_red',
        might : 9,
        range : 2,
        text : "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.",
        effects : { special_count:'+1' , damage: 'blade' },
        sp: 200,
        prerequisite : 'ruin',
        inherit : 'weapon_type'
    },
    raudrblade_plus :
    {   tag : 'raudrblade_plus',
        name: "Rauðrblade+",
        weapon_type : 'tome_red',
        might : 13,
        range : 2,
        text : "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.",
        effects : { special_count:'+1' , damage: 'blade' },
        sp: 300,
        prerequisite : 'raudrblade',
        inherit : 'weapon_type'
    },

    raudrowl :
    {   tag : 'raudrowl',
        name: "Rauðrowl",
        weapon_type : 'tome_red',
        might : 6,
        range : 2,
        text : "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.",
        effects : { bonus:'owl' },
        sp: 200,
        prerequisite : 'ruin',
        inherit : 'weapon_type'
    },
    raudrowl_plus :
    {   tag : 'raudrowl_plus',
        name: "Rauðrowl+",
        weapon_type : 'tome_red',
        might : 10,
        range : 2,
        text : "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.",
        effects : { bonus:'owl' },
        sp: 300,
        prerequisite : 'raudrowl',
        inherit : 'weapon_type'
    },

    raudrraven :
    {   tag : 'raudrraven',
        name: "Rauðrraven",
        weapon_type : 'tome_red',
        might : 9,
        range : 2,
        text : "Grants weapon advantage vs. colorless foes.",
        effects : { advantage: 'colourless' },
        sp: 200,
        prerequisite : 'ruin',
        inherit : 'weapon_type'
    },
    raudrraven_plus :
    {   tag : 'raudrraven_plus',
        name: "Rauðrraven+",
        weapon_type : 'tome_red',
        might : 13,
        range : 2,
        text : "Grants weapon advantage vs. colorless foes.",
        effects : { advantage: 'colourless' },
        sp: 300,
        prerequisite : 'raudrraven',
        inherit : 'weapon_type'
    },

    raudrwolf :
    {   tag : 'raudrwolf',
        name: "Rauðrrwolf",
        weapon_type : 'tome_red',
        might : 6,
        range : 2,
        effective: { move_types:['cavalry'] },
        text : "Effective against cavalry units.",
        sp: 200,
        prerequisite : 'ruin',
        inherit : 'weapon_type'
    },
    raudrwolf_plus :
    {   tag : 'raudrwolf_plus',
        name: "Rauðrrwolf+",
        weapon_type : 'tome_red',
        might : 10,
        range : 2,
        effective: { move_types:['cavalry'] },
        text : "Effective against cavalry units.",
        sp: 300,
        prerequisite : 'raudrwolf',
        inherit : 'weapon_type'
    },

    regal_blade :
    {   tag : 'regal_blade',
        name : "Regal Blade",
        weapon_type : 'sword',
        might : 16,
        range : 1,
        text : "If foe's HP is 100% when combat starts, unit receives Atk/Spd+2 during combat.",
        effects : { combat : { check:{thresh:'more',hp:1.0}, atk:+2, spd:+2 } },
        sp: 400,
        prerequisite : 'silver_sword',
        inherit : 'exclusive'
    },

    rexcalibur :
    {   tag : 'rexcalibur',
        name : "Rexcalibur",
        weapon_type : 'tome_green',
        might: 9,
        range: 2,
        sp: 200,
        prerequisite : 'elthunder',
        inherit : 'weapon_type'
    },
    rexcalibur_plus :
    {   tag : 'rexcalibur_plus',
        name : "Rexcalibur+",
        weapon_type : 'tome_green',
        might: 13,
        range: 2,
        sp: 300,
        prerequisite : 'rexcalibur',
        inherit : 'weapon_type'
    },

    rogue_dagger :
    {   tag : 'rogue_dagger',
        name : "Rogue Dagger",
        weapon_type : 'dagger',
        might : 4,
        range : 2,
        text : "After combat, inflicts Def/Res-3 on foe through its next action. Grants unit Def/Res+3 for 1 turn.",
        effects : { after : { dagger:3, rogue:3 } },
        sp: 200,
        prerequisite : 'steel_dagger',
        inherit : 'weapon_type'
    },
    rogue_dagger_plus :
    {   tag : 'rogue_dagger_plus',
        name : "Rogue Dagger+",
        weapon_type : 'dagger',
        might : 7,
        range : 2,
        text : "After combat, inflicts Def/Res-5 on foe through its next action. Grants unit Def/Res+5 for 1 turn.",
        effects : { after : { dagger:5, rogue:5 } },
        sp: 300,
        prerequisite : 'rogue_dagger',
        inherit : 'weapon_type'
    },

    ruby_sword :
    {   tag : 'ruby_sword',
        name : "Ruby Sword",
        weapon_type : 'sword',
        might : 8,
        range : 1,
        text : "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.",
        effects : { triangle : { atk:0.2 } },
        sp: 200,
        prerequisite : 'steel_sword',
        inherit : 'weapon_type'
    },
    ruby_sword_plus :
    {   tag : 'ruby_sword_plus',
        name : "Ruby Sword+",
        weapon_type : 'sword',
        might : 12,
        range : 1,
        text : "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.",
        effects : { triangle : { atk:0.2 } },
        sp: 300,
        prerequisite : 'ruby_sword',
        inherit : 'weapon_type'
    },

    ruin :
    {   tag : 'ruin',
        name : "Ruin",
        weapon_type : 'tome_red',
        might : 6,
        range : 2,
        sp: 100,
        prerequisite : 'flux',
        inherit: 'weapon_type'
    },

    sapphire_lance :
    {   tag : 'sapphire_lance',
        name : "Sapphire Lance",
        weapon_type : 'lance',
        might : 8,
        range : 1,
        text : "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.",
        effects : { triangle : { atk:0.2 } },
        sp: 200,
        prerequisite : 'steel_lance',
        inherit : 'weapon_type'
    },
    sapphire_lance_plus :
    {   tag : 'sapphire_lance_plus',
        name : "Sapphire Lance+",
        weapon_type : 'lance',
        might : 12,
        range : 1,
        text : "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.",
        effects : { triangle : { atk:0.2 } },
        sp: 300,
        prerequisite : 'sapphire_lance',
        inherit : 'weapon_type'
    },

    siegfried :
    {   tag : 'siegfried',
        name : "Siegfried",
        weapon_type : 'sword',
        might : 16,
        range : 1,
        text : "Enables counterattack regardless of distance if this unit is attacked.",
        effects : { counter : { range:0 } },
        sp: 400,
        prerequisite : 'silver_sword',
        inherit : 'exclusive'
    },

    sieglinde :
    {   tag : 'sieglinde',
        name : "Sieglinde",
        weapon_type : 'sword',
        might : 16,
        range : 1,
        text : "Grants adjacent allies Atk+3 through their next actions at the start of each turn.",
        effects : { hone : { atk:3 } },
        sp: 400,
        prerequisite : 'silver_sword',
        inherit : 'exclusive'
    },
    siegmund :
    {   tag : 'siegmund',
        name : "Siegmund",
        weapon_type : 'lance',
        might : 16,
        range : 1,
        text : "Grants adjacent allies Atk+3 through their next actions at the start of each turn.",
        effects : { hone : { atk:3 } },
        sp: 400,
        prerequisite : 'heavy_spear',
        inherit : 'exclusive'
    },

    silver_axe :
    {   tag : 'silver_axe',
        name : "Silver Axe",
        weapon_type : 'axe',
        might: 11,
        range: 1,
        sp: 200,
        prerequisite : 'steel_axe',
        inherit : 'weapon_type'
    },
    silver_axe_plus :
    {   tag : 'silver_axe_plus',
        name : "Silver Axe+",
        weapon_type : 'axe',
        might: 15,
        range: 1,
        sp: 300,
        prerequisite : 'silver_axe',
        inherit : 'weapon_type'
    },

    silver_bow :
    {   tag : 'silver_bow',
        name : "Silver Bow",
        weapon_type : 'bow',
        might: 9,
        range : 2,
        effective: { move_types:['flyer'] },
        text : "Effective against flying units.",
        sp: 200,
        prerequisite : 'steel_bow',
        inherit : 'weapon_type'
    },
    silver_bow_plus :
    {   tag : 'silver_bow_plus',
        name : "Silver Bow+",
        weapon_type : 'bow',
        might: 13,
        range : 2,
        effective: { move_types:['flyer'] },
        text : "Effective against flying units.",
        sp: 300,
        prerequisite : 'silver_bow',
        inherit : 'weapon_type'
    },

    silver_dagger :
    {   tag : 'silver_dagger',
        name : "Silver Dagger",
        weapon_type : 'dagger',
        might: 7,
        range : 2,
        text : "After combat, inflicts Def/Res-5 on foe through its next action.",
        effects : { after : { dagger:5 } },
        sp: 200,
        prerequisite : 'steel_dagger',
        inherit : 'weapon_type'
    },
    silver_dagger_plus :
    {   tag : 'silver_dagger_plus',
        name : "Silver Dagger+",
        weapon_type : 'dagger',
        might: 10,
        range : 2,
        text : "After combat, inflicts Def/Res-7 on foe through its next action.",
        effects : { after : { dagger:7 } },
        sp: 300,
        prerequisite : 'silver_dagger',
        inherit : 'weapon_type'
    },

    silver_lance :
    {   tag : 'silver_lance',
        name : "Silver Lance",
        weapon_type : 'lance',
        might: 11,
        range: 1,
        sp: 200,
        prerequisite : 'steel_lance',
        inherit : 'weapon_type'
    },
    silver_lance_plus :
    {   tag : 'silver_lance_plus',
        name : "Silver Lance+",
        weapon_type : 'lance',
        might: 15,
        range: 1,
        sp: 300,
        prerequisite : 'silver_lance',
        inherit : 'weapon_type'
    },

    silver_sword :
    {   tag : 'silver_sword',
        name : "Silver Sword",
        weapon_type : 'sword',
        might: 11,
        range: 1,
        sp: 200,
        prerequisite : 'steel_sword',
        inherit : 'weapon_type'
    },
    silver_sword_plus :
    {   tag : 'silver_sword_plus',
        name : "Silver Sword+",
        weapon_type : 'sword',
        might: 15,
        range: 1,
        sp: 300,
        prerequisite : 'silver_sword',
        inherit : 'weapon_type'
    },

    slow :
    {   tag : 'slow',
        name : "Slow",
        weapon_type : 'staff',
        might : 5,
        range : 2,
        text : "After any combat, inflicts Spd-6 on foe through its next action.",
        effects : { after : { penalty: { spd:6 } } },
        sp: 150,
        prerequisite : 'assault',
        inherit : 'weapon_type'
    },

    smoke_dagger :
    {   tag : 'smoke_dagger',
        name : "Smoke Dagger",
        weapon_type : 'dagger',
        might: 6,
        range : 2,
        text : "After combat, inflicts Def/Res-4 on foe through its next action.",
        effects : { after : { dagger_bros:4 } },
        sp: 200,
        prerequisite : 'steel_dagger',
        inherit : 'weapon_type'
    },
    smoke_dagger_plus :
    {   tag : 'smoke_dagger_plus',
        name : "Smoke Dagger+",
        weapon_type : 'dagger',
        might: 9,
        range : 2,
        text : "After combat, inflicts Def/Res-6 on foe through its next action.",
        effects : { after : { dagger_bros:6 } },
        sp: 300,
        prerequisite : 'smoke_dagger',
        inherit : 'weapon_type'
    },

    sol_katti :
    {   tag : 'sol_katti',
        name : "Sol Katti",
        weapon_type : 'sword',
        might : 16,
        range : 1,
        text : "If wielder initiates attack at HP ≤ 50%, any follow-up occurs immediately.",
        effects : { desperate : { check:'self', less:0.5, stat:'hp' } },
        sp: 400,
        prerequisite : 'silver_sword',
        inherit : 'exclusive'
    },

    steel_axe :
    {   tag : 'steel_axe',
        name : "Steel Axe",
        weapon_type : 'axe',
        might: 8,
        range: 1,
        sp: 100,
        prerequisite : 'iron_axe',
        inherit : 'weapon_type'
    },
    steel_bow :
    {   tag : 'steel_bow',
        name : "Steel Bow",
        weapon_type : 'bow',
        might : 6,
        range : 2,
        effective: { move_types:['flyer'] },
        text : "Effective against flying units.",
        sp: 100,
        prerequisite : 'iron_bow',
        inherit : 'weapon_type'
    },
    steel_dagger :
    {   tag : 'steel_dagger',
        name : "Steel Dagger",
        weapon_type : 'dagger',
        might : 5,
        range : 2,
        text : "After combat, inflicts Def/Res-3 on foe through its next action.",
        effects : { after : { dagger:3 } },
        sp: 100,
        prerequisite : 'iron_dagger',
        inherit : 'weapon_type'
    },
    steel_lance :
    {   tag : 'steel_lance',
        name : "Steel Lance",
        weapon_type : 'lance',
        might: 8,
        range: 1,
        sp: 100,
        prerequisite : 'iron_lance',
        inherit : 'weapon_type'
    },
    steel_sword :
    {   tag : 'steel_sword',
        name : "Steel Sword",
        weapon_type : 'sword',
        might: 8,
        range: 1,
        sp: 100,
        prerequisite : 'iron_sword',
        inherit : 'weapon_type'
    },

    thoron :
    {   tag : 'thoron',
        name : "Thoron",
        weapon_type : 'tome_blue',
        might: 9,
        range: 2,
        sp: 200,
        prerequisite : 'elthunder',
        inherit : 'weapon_type'
    },
    thoron_plus :
    {   tag : 'thoron_plus',
        name : "Thoron+",
        weapon_type : 'tome_blue',
        might: 13,
        range: 2,
        sp: 300,
        prerequisite : 'thoron',
        inherit : 'weapon_type'
    },

    thunder :
    {   tag : 'thunder',
        name : "thunder",
        weapon_type : 'tome_blue',
        might : 4,
        range : 2,
        sp: 50,
        inherit : 'weapon_type'
    },

    tyrfing :
    {   tag : 'tyrfing',
        name : "Tyrfing",
        weapon_type : 'sword',
        might : 16,
        range : 1,
        text : "Grants Def+4 in battle if unit's HP ≤ 50%.",
        effects : { defiant : { def:4 } },
        sp: 400,
        prerequisite : 'silver_sword',
        inherit : 'exclusive'
    },

    valaskjalf :
    {   tag : 'valaskjalf',
        name : "Valaskjálf",
        weapon_type : 'tome_blue',
        might : 14,
        range : 2,
        text : "Enables unit at ≤ 50% HP to strike first, even when attacked.",
        effects : { attacked : 'vantage' },
        sp: 400,
        prerequisite : 'probably_thoron',
        inherit : 'exclusive'
    },

    wind :
    {   tag : 'wind',
        name : "Wind",
        weapon_type : 'tome_green',
        might : 4,
        range : 2,
        sp: 50,
        inherit : 'weapon_type'
    },

    wo_dao :
    {   tag : 'wo_dao',
        name : "Wo Dao",
        weapon_type : 'sword',
        might : 9,
        range : 1,
        text : "Grants +10 to damage when Special triggers.",
        effects : { special : { dmg : '+10' } },
        sp: 200,
        prerequisite : 'steel_sword',
        inherit : 'weapon_type'
    },
    wo_dao_plus :
    {   tag : 'wo_dao_plus',
        name : "Wo Dao+",
        weapon_type : 'sword',
        might : 13,
        range : 1,
        text : "Grants +10 to damage when Special triggers.",
        effects : { special : { dmg : '+10' } },
        sp: 300,
        prerequisite : 'wo_dao',
        inherit : 'weapon_type'
    },

    yato :
    {   tag : 'yato',
        name : "Yato",
        weapon_type : 'sword',
        might : 16,
        range : 1,
        text : "Grants Spd+4 during combat if unit initiates attack.",
        effects : { initiate : { spd:4 } },
        sp: 400,
        prerequisite : 'silver_sword',
        inherit : 'exclusive'
    }

};
