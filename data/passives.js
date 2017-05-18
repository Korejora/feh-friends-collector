
dat.passive_a =
{

    armored_blow_1 :
    {   tag : 'armored_blow_1',
        name : "Armored Blow 1",
        effects : { initiate : { def: +2 } },
        text: "Grants Def+2 during combat if unit initiates the attack.",
        sp : 50,
        prerequisite: null,
        inherit: 'no_staff'
    },
    armored_blow_2 :
    {   tag : 'armored_blow_2',
        name : "Armored Blow 2",
        effects : { initiate : { def: +4 } },
        text: "Grants Def+4 during combat if unit initiates the attack.",
        sp : 100,
        prerequisite: 'armored_blow_1',
        inherit: 'no_staff'
    },
    armored_blow_3 :
    {   tag : 'armored_blow_3',
        name : "Armored Blow 3",
        effects : { initiate : { def: +6 } },
        text: "Grants Def+6 during combat if unit initiates the attack.",
        sp : 200,
        prerequisite: 'armored_blow_2',
        inherit: 'no_staff'
    },

    attack_plus_1 :
    {   tag : 'attack_plus_1',
        name : "Attack +1",
        effects : { passive : { atk: +2 } },
        text: "Grants Atk+1.",
        sp : 30,
        prerequisite: null,
        inherit : 'all'
    },
    attack_plus_2 :
    {   tag : 'attack_plus_2',
        name : "Attack +2",
        effects : { passive : { atk: +4 } },
        text: "Grants Atk+2.",
        sp : 60,
        prerequisite: 'attack_plus_1',
        inherit : 'all'
    },
    attack_plus_3 :
    {   tag : 'attack_plus_3',
        name : "Attack +3",
        effects : { passive : { atk: +6 } },
        text: "Grants Atk+3.",
        sp : 120,
        prerequisite: 'attack_plus_2',
        inherit : 'all'
    },

    attack_def_plus_1 :
    {   tag : 'attack_def_plus_1',
        name : "Attack Def +1",
        effects : { passive : { atk: +1, def: +1 } },
        text: "Grants Atk/Def+1.",
        sp : 80,
        prerequisite: 'defense_plus_1',
        inherit : 'all'
    },
    attack_def_plus_2 :
    {   tag : 'attack_def_plus_2',
        name : "Attack Def +2",
        effects : { passive : { atk: +2, def: +2 } },
        text: "Grants Atk/Def+2.",
        sp : 120,
        prerequisite: 'attack_def_plus_1',
        inherit : 'all'
    },

    close_counter :
    {   tag : 'close_counter',
        name : "Close Counter",
        effects : { counter : { range:0 } },
        text: "Enables unit to counterattack regardless of distance to attacker.",
        sp : 300,
        prerequisite: null,
        inherit : 'ranged'
    },

    darting_blow_1 :
    {   tag : 'darting_blow_1',
        name : "Darting Blow 1",
        effects : { initiate : { spd: +2 } },
        text: "Grants Spd+2 during combat if unit initiates the attack.",
        sp : 50,
        prerequisite: null,
        inherit : 'no_staff'
    },
    darting_blow_2 :
    {   tag : 'darting_blow_2',
        name : "Darting Blow 2",
        effects : { initiate : { spd: +4 } },
        text: "Grants Spd+4 during combat if unit initiates the attack.",
        sp : 100,
        prerequisite: 'darting_blow_1',
        inherit : 'no_staff'
    },
    darting_blow_3 :
    {   tag : 'darting_blow_3',
        name : "Darting Blow 3",
        effects : { initiate : { spd: +6 } },
        text: "Grants Spd+6 during combat if unit initiates the attack.",
        sp : 200,
        prerequisite: 'darting_blow_2',
        inherit : 'no_staff'
    },

    death_blow_1 :
    {   tag : 'death_blow_1',
        name : "Death Blow 1",
        effects : { initiate : { atk: +2 } },
        text: "Grants Atk+2 during combat if unit initiates the attack.",
        sp : 50,
        prerequisite: null,
        inherit : 'no_staff'
    },
    death_blow_2 :
    {   tag : 'death_blow_2',
        name : "Death Blow 2",
        effects : { initiate : { atk: +4 } },
        text: "Grants Atk+4 during combat if unit initiates the attack.",
        sp : 100,
        prerequisite: 'death_blow_1',
        inherit : 'no_staff'
    },
    death_blow_3 :
    {   tag : 'death_blow_3',
        name : "Death Blow 3",
        effects : { initiate : { atk: +6 } },
        text: "Grants Atk+6 during combat if unit initiates the attack.",
        sp : 200,
        prerequisite: 'death_blow_2',
        inherit : 'no_staff'
    },

    defense_plus_1 :
    {   tag : 'defense_plus_1',
        name : "Defense +1",
        effects : { passive : { def: +2 } },
        text: "Grants Def+1.",
        sp : 30,
        prerequisite: null,
        inherit : 'all'
    },
    defense_plus_2 :
    {   tag : 'defense_plus_2',
        name : "Defense +2",
        effects : { passive : { def: +4 } },
        text: "Grants Def+2.",
        sp : 60,
        prerequisite: 'defense_plus_1',
        inherit : 'all'
    },
    defense_plus_3 :
    {   tag : 'defense_plus_3',
        name : "Defense +3",
        effects : { passive : { def: +6 } },
        text: "Grants Def+3.",
        sp : 120,
        prerequisite: 'defense_plus_2',
        inherit : 'all'
    },

    defiant_atk_1 :
    {   tag : 'defiant_atk_1',
        name : "Defiant Atk 1",
        effects : { defiant : { atk: +3 } },
        text : "Grants Atk+3 at start of turn if unit's HP ≤ 50%.",
        sp : 40,
        prerequisite: null,
        inherit : 'all'
    },
    defiant_atk_2 :
    {   tag : 'defiant_atk_2',
        name : "Defiant Atk 2",
        effects : { defiant : { atk: +5 } },
        text : "Grants Atk+5 at start of turn if unit's HP ≤ 50%.",
        sp : 80,
        prerequisite : 'defiant_atk_1',
        inherit : 'all'
    },
    defiant_atk_3 :
    {   tag : 'defiant_atk_3',
        name : "Defiant Atk 3",
        effects : { defiant : { atk: +7 } },
        text : "Grants Atk+7 at start of turn if unit's HP ≤ 50%.",
        sp : 160,
        prerequisite : 'defiant_atk_2',
        inherit : 'all'
    },

    defiant_def_1 :
    {   tag : 'defiant_def_1',
        name : "Defiant Def 1",
        effects : { defiant : { def: +3 } },
        text : "Grants Def+3 at start of turn if unit's HP ≤ 50%.",
        sp : 40,
        prerequisite: null,
        inherit : 'all'
    },
    defiant_def_2 :
    {   tag : 'defiant_def_2',
        name : "Defiant Def 2",
        effects : { defiant : { def: +5 } },
        text : "Grants Def+5 at start of turn if unit's HP ≤ 50%.",
        sp : 80,
        prerequisite : 'defiant_def_1',
        inherit : 'all'
    },
    defiant_def_3 :
    {   tag : 'defiant_def_3',
        name : "Defiant Def 3",
        effects : { defiant : { def: +7 } },
        text : "Grants Def+7 at start of turn if unit's HP ≤ 50%.",
        sp : 160,
        prerequisite : 'defiant_def_2',
        inherit : 'all'
    },

    defiant_res_1 :
    {   tag : 'defiant_res_1',
        name : "Defiant Res 1",
        effects : { defiant : { res: +3 } },
        text : "Grants Res+3 at start of turn if unit's HP ≤ 50%.",
        sp : 40,
        prerequisite: null,
        inherit : 'all'
    },
    defiant_res_2 :
    {   tag : 'defiant_res_2',
        name : "Defiant Res 2",
        effects : { defiant : { res: +5 } },
        text : "Grants Res+5 at start of turn if unit's HP ≤ 50%.",
        sp : 80,
        prerequisite : 'defiant_res_1',
        inherit : 'all'
    },
    defiant_res_3 :
    {   tag : 'defiant_res_3',
        name : "Defiant Res 3",
        effects : { defiant : { res: +7 } },
        text : "Grants Res+7 at start of turn if unit's HP ≤ 50%.",
        sp : 160,
        prerequisite : 'defiant_res_2',
        inherit : 'all'
    },

    defiant_spd_1 :
    {   tag : 'defiant_spd_1',
        name : "Defiant Spd 1",
        effects : { defiant : { spd: +3 } },
        text : "Grants Spd+3 at start of turn if unit's HP ≤ 50%.",
        sp : 40,
        prerequisite: null,
        inherit : 'all'
    },
    defiant_spd_2 :
    {   tag : 'defiant_spd_2',
        name : "Defiant Spd 2",
        effects : { defiant : { spd: +5 } },
        text : "Grants Spd+5 at start of turn if unit's HP ≤ 50%.",
        sp : 80,
        prerequisite : 'defiant_spd_1',
        inherit : 'all'
    },
    defiant_spd_3 :
    {   tag : 'defiant_spd_3',
        name : "Defiant Spd 3",
        effects : { defiant : { spd: +7 } },
        text : "Grants Spd+7 at start of turn if unit's HP ≤ 50%.",
        sp : 160,
        prerequisite : 'defiant_spd_2',
        inherit : 'all'
    },

    distant_counter :
    {   tag : 'distant_counter',
        name : "Distant Counter",
        effects : { counter : { range:0 } },
        text: "Enables unit to counterattack regardless of distance to attacker.",
        sp : 300,
        prerequisite: null,
        inherit : 'melee'
    },

    distant_def_1 :
    {   tag : 'distant_def_1',
        name : "Distant Def 1",
        effects : { distant : { def: +2, res:+2 } },
        text : "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+2 during combat.",
        sp : 60,
        prerequisite: null,
        inherit : 'all'
    },
    distant_def_2 :
    {   tag : 'distant_def_2',
        name : "Distant Def 2",
        effects : { distant : { def: +4, res:+4 } },
        text : "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+4 during combat.",
        sp : 120,
        prerequisite : 'distant_def_1',
        inherit : 'all'
    },
    distant_def_3 :
    {   tag : 'distant_def_3',
        name : "Distant Def 3",
        effects : { distant : { def: +6, res:+6 } },
        text : "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+6 during combat.",
        sp : 240,
        prerequisite : 'distant_def_2',
        inherit : 'all'
    },

    earth_boost_1 :
    {   tag : 'earth_boost_1',
        name : "Earth Boost 1",
        effects : { boost: { check:{thresh:'beat',current_hp:3}, def:+2} },
        text : "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+2 during combat.",
        sp : 50,
        prerequisite: null,
        inherit : 'all'
    },
    earth_boost_2 :
    {   tag : 'earth_boost_2',
        name : "Earth Boost 2",
        effects : { boost: { check:{thresh:'beat',current_hp:3}, def:+4} },
        text : "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+4 during combat.",
        sp : 100,
        prerequisite : 'earth_boost_1',
        inherit : 'all'
    },
    earth_boost_3 :
    {   tag : 'earth_boost_3',
        name : "Earth Boost 3",
        effects : { boost: { check:{thresh:'beat',current_hp:3}, def:+6} },
        text : "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+6 during combat.",
        sp : 200,
        prerequisite : 'earth_boost_2',
        inherit : 'all'
    },

    fortress_def_1 :
    {   tag : 'fortress_def_1',
        name : "Fortress Def 1",
        effects : { passive : { atk: -3, def: +3 } },
        text: "Grants Def+3. Inflicts Atk-3.",
        sp : 40,
        prerequisite: null,
        inherit : 'all'
    },
    fortress_def_2 :
    {   tag : 'fortress_def_2',
        name : "Fortress Def 2",
        effects : { passive : { atk: -3, def: +4 } },
        text: "Grants Def+4. Inflicts Atk-3.",
        sp : 80,
        prerequisite: 'fortress_def_1',
        inherit : 'all'
    },
    fortress_def_3 :
    {   tag : 'fortress_def_3',
        name : "Fortress Def 3",
        effects : { passive : { atk: -3, def: +5 } },
        text: "Grants Def+5. Inflicts Atk-3.",
        sp : 160,
        prerequisite: 'fortress_def_2',
        inherit : 'all'
    },

    fury_1 :
    {   tag : 'fury_1',
        name : "Fury 1",
        effects : { passive : { atk:+1, spd:+1, def:+1, res:+1 }, bleed:2 },
        text: "Grants Atk/Spd/Def/Res+1. Unit takes 2 damage after combat.",
        sp : 50,
        prerequisite: null,
        inherit : 'no_staff'
    },
    fury_2 :
    {   tag : 'fury_2',
        name : "Fury 2",
        effects : { passive : { atk:+2, spd:+2, def:+2, res:+2 }, bleed:4 },
        text: "Grants Atk/Spd/Def/Res+2. Unit takes 4 damage after combat.",
        sp : 100,
        prerequisite: 'fury_1',
        inherit : 'no_staff'
    },
    fury_3 :
    {   tag : 'fury_3',
        name : "Fury 3",
        effects : { passive : { atk:+3, spd:+3, def:+3, res:+3 }, bleed:6 },
        text: "Grants Atk/Spd/Def/Res+3. Unit takes 6 damage after combat.",
        sp : 200,
        prerequisite: 'fury_2',
        inherit : 'no_staff'
    },

    granis_shield :
    {   tag : 'granis_shield',
        name : "Grani's Shield",
        effects : { effective: false },
        text : 'Neutralizes "effective against" bonuses.',
        sp : 200,
        prerequisite: null,
        inherit : 'cavalry'
    },

    heavy_blade_1 :
    {   tag : 'heavy_blade_1',
        name : "Heavy Blade 1",
        effects : { heavy: { margin: 5 } },
        text : "If unit's Atk - foe's Atk ≥ 5, unit gains Special cooldown charge +1 attack. (If using other similar skill, only highest value applied.)",
        sp : 60,
        prerequisite: null,
        inherit : 'no_staff'
    },
    heavy_blade_2 :
    {   tag : 'heavy_blade_2',
        name : "Heavy Blade 2",
        effects : { heavy: { margin: 3 } },
        text : "If unit's Atk - foe's Atk ≥ 3, unit gains Special cooldown charge +1 attack. (If using other similar skill, only highest value applied.)",
        sp : 120,
        prerequisite : 'heavy_blade_1',
        inherit : 'no_staff'
    },
    heavy_blade_3 :
    {   tag : 'heavy_blade_3',
        name : "Heavy Blade 3",
        effects : { heavy: { margin: 1 } },
        text : "If unit's Atk - foe's Atk ≥ 1, unit gains Special cooldown charge +1 attack. (If using other similar skill, only highest value applied.)",
        sp : 240,
        prerequisite : 'heavy_blade_2',
        inherit : 'no_staff'
    },

    hp_plus_3 :
    {   tag : 'hp_plus_3',
        name : "HP +3",
        effects : { passive : { hp: +3 } },
        text: "Grants HP+3.",
        sp : 40,
        prerequisite: null,
        inherit : 'all'
    },
    hp_plus_4 :
    {   tag : 'hp_plus_4',
        name : "HP +4",
        effects : { passive : { hp: +4 } },
        text: "Grants HP+4.",
        sp : 80,
        prerequisite: 'hp_plus_3',
        inherit : 'all'
    },
    hp_plus_5 :
    {   tag : 'hp_plus_5',
        name : "HP +5",
        effects : { passive : { hp: +5 } },
        text: "Grants HP+5.",
        sp : 160,
        prerequisite: 'hp_plus_4',
        inherit : 'all'
    },

    iotes_shield :
    {   tag : 'iotes_shield',
        name : "Iote's Shield",
        effects : { effective: false },
        text : 'Neutralizes "effective against" bonuses.',
        sp : 200,
        prerequisite: null,
        inherit : 'flyer'
    },

    life_and_death_1 :
    {   tag : 'life_and_death_1',
        name : "Life and Death 1",
        effects : { passive : { atk:+3, spd:+3, def:-3, res:-3 } },
        text: "Grants Atk/Spd+3. Inflicts Def/Res-3.",
        sp : 50,
        prerequisite: null,
        inherit : 'no_staff'
    },
    life_and_death_2 :
    {   tag : 'life_and_death_2',
        name : "Life and Death 2",
        effects : { passive : { atk:+4, spd:+4, def:-4, res:-4 } },
        text: "Grants Atk/Spd+4. Inflicts Def/Res-4.",
        sp : 100,
        prerequisite: 'life_and_death_1',
        inherit : 'no_staff'
    },
    life_and_death_3 :
    {   tag : 'life_and_death_3',
        name : "Life and Death 3",
        effects : { passive : { atk:+5, spd:+5, def:-5, res:-5 } },
        text: "Grants Atk/Spd+5. Inflicts Def/Res-5.",
        sp : 200,
        prerequisite: 'life_and_death_2',
        inherit : 'no_staff'
    },

    resistance_plus_1 :
    {   tag : 'resistance_plus_1',
        name : "Resistance +1",
        effects : { passive : { res: +2 } },
        text: "Grants Res+1.",
        sp : 30,
        prerequisite: null,
        inherit : 'all'
    },
    resistance_plus_2 :
    {   tag : 'resistance_plus_2',
        name : "Resistance +2",
        effects : { passive : { res: +4 } },
        text: "Grants Res+2.",
        sp : 60,
        prerequisite: 'resistance_plus_1',
        inherit : 'all'
    },
    resistance_plus_3 :
    {   tag : 'resistance_plus_3',
        name : "Resistance +3",
        effects : { passive : { res: +6 } },
        text: "Grants Res+3.",
        sp : 120,
        prerequisite: 'resistance_plus_2',
        inherit : 'all'
    },

    speed_plus_1 :
    {   tag : 'speed_plus_1',
        name : "Speed +1",
        effects : { passive : { spd: +2 } },
        text: "Grants Spd+1.",
        sp : 30,
        prerequisite: null,
        inherit : 'all'
    },
    speed_plus_2 :
    {   tag : 'speed_plus_2',
        name : "Speed +2",
        effects : { passive : { spd: +4 } },
        text: "Grants Spd+2.",
        sp : 60,
        prerequisite: 'speed_plus_1',
        inherit : 'all'
    },
    speed_plus_3 :
    {   tag : 'speed_plus_3',
        name : "Speed +3",
        effects : { passive : { spd: +6 } },
        text: "Grants Spd+3.",
        sp : 120,
        prerequisite: 'speed_plus_2',
        inherit : 'all'
    },

    svalinn_shield :
    {   tag : 'svalinn_shield',
        name : "Svalinn Shield",
        effects : { effective: false },
        text : 'Neutralizes "effective against" bonuses.',
        sp : 200,
        prerequisite: null,
        inherit : 'armor'
    },

    swift_sparrow_1 :
    {   tag : 'swift_sparrow_1',
        name : "Swift Sparrow 1",
        effects : { initiate : { atk: +2, spd: +2 } },
        text: "If unit initiates combat, unit granted Atk/Spd+2 during battle.",
        sp : 120,
        prerequisite: 'swift_sparrow_1',
        inherit : 'no_staff'
    },
    swift_sparrow_2 :
    {   tag : 'swift_sparrow_2',
        name : "Swift Sparrow 2",
        effects : { initiate : { atk: +4, spd: +4 } },
        text: "If unit initiates combat, unit granted Atk/Spd+4 during battle.",
        sp : 240,
        prerequisite: 'swift_sparrow_1',
        inherit : 'no_staff'
    },

    triangle_adept_1 :
    {   tag : 'triangle_adept_1',
        name : "Triangle Adept 1",
        text : "Gives Atk+10% if weapon-triangle advantage, Atk-10% if disadvantage.",
        effects : { triangle : { atk:0.1 } },
        sp : 50,
        prerequisite: null,
        inherit : 'no_colourless'
    },
    triangle_adept_2 :
    {   tag : 'triangle_adept_2',
        name : "Triangle Adept 2",
        text : "Gives Atk+15% if weapon-triangle advantage, Atk-15% if disadvantage.",
        effects : { triangle : { atk:0.15 } },
        sp : 100,
        prerequisite: 'triangle_adept_1',
        inherit : 'no_colourless'
    },
    triangle_adept_3 :
    {   tag : 'triangle_adept_3',
        name : "Triangle Adept 3",
        text : "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.",
        effects : { triangle : { atk:0.2 } },
        sp : 200,
        prerequisite : 'triangle_adept_2',
        inherit : 'no_staff'
    },

    warding_blow_1 :
    {   tag : 'warding_blow_1',
        name : "Warding Blow 1",
        effects : { initiate : { res: +2 } },
        text: "Grants Res+2 during combat if unit initiates the attack.",
        sp : 50,
        prerequisite: null,
        inherit : 'no_staff'
    },
    warding_blow_2 :
    {   tag : 'warding_blow_2',
        name : "Warding Blow 2",
        effects : { initiate : { res: +4 } },
        text: "Grants Res+4 during combat if unit initiates the attack.",
        sp : 100,
        prerequisite: 'warding_blow_1',
        inherit : 'no_staff'
    },
    warding_blow_3 :
    {   tag : 'warding_blow_3',
        name : "Warding Blow 3",
        effects : { initiate : { res: +6 } },
        text : "Grants Res+6 during combat if unit initiates attack.",
        sp : 200,
        prerequisite : 'warding_blow_2',
        inherit : 'no_staff'
    }

};


dat.passive_b =
{

    axebreaker_1 :
    {   tag : 'axebreaker_1',
        name : "Axebreaker 1",
        effects : { break: { weapon_type:'axe', check:{thresh:'more',hp:0.9} } },
        text : "If unit's HP ≥ 90% in combat against an axe user, unit makes a follow-up attack and foe cannot.",
        sp: 50,
        prerequisite: null,
        inherit: 'no_blue'
    },
    axebreaker_2 :
    {   tag : 'axebreaker_2',
        name : "Axebreaker 2",
        effects : { break: { weapon_type:'axe', check:{thresh:'more',hp:0.7} } },
        text : "If unit's HP ≥ 70% in combat against an axe user, unit makes a follow-up attack and foe cannot.",
        sp: 100,
        prerequisite: 'axebreaker_1',
        inherit: 'no_blue'
    },
    axebreaker_3 :
    {   tag : 'axebreaker_3',
        name : "Axebreaker 3",
        effects : { break: { weapon_type:'axe', check:{thresh:'more',hp:0.5} } },
        text : "If unit's HP ≥ 50% in combat against an axe user, unit makes a follow-up attack and foe cannot.",
        sp: 200,
        prerequisite: 'axebreaker_2',
        inherit: 'no_blue'
    },

    bluetomebreaker_1 :
    {   tag : 'bluetomebreaker_1',
        name : "B Tomebreaker 1",
        effects : { break: { weapon_type:'blue_tome', check:{thresh:'more',hp:0.9} } },
        text : "If unit's HP ≥ 90% in combat against a blue tome user, unit makes a follow-up attack and foe cannot.",
        sp: 50,
        prerequisite: null,
        inherit: 'no_red'
    },
    bluetomebreaker_2 :
    {   tag : 'bluetomebreaker_2',
        name : "B Tomebreaker 2",
        effects : { break: { weapon_type:'blue_tome', check:{thresh:'more',hp:0.7} } },
        text : "If unit's HP ≥ 70% in combat against a blue tome user, unit makes a follow-up attack and foe cannot.",
        sp: 100,
        prerequisite: 'bluetomebreaker_1',
        inherit: 'no_red'
    },
    bluetomebreaker_3 :
    {   tag : 'bluetomebreaker_3',
        name : "B Tomebreaker 3",
        effects : { break: { weapon_type:'blue_tome', check:{thresh:'more',hp:0.5} } },
        text : "If unit's HP ≥ 50% in combat against a blue tome user, unit makes a follow-up attack and foe cannot.",
        sp: 200,
        prerequisite: 'bluetomebreaker_2',
        inherit: 'no_red'
    },

    bowbreaker_1 :
    {   tag : 'bowbreaker_1',
        name : "Bowbreaker 1",
        effects : { break: { weapon_type:'bow', check:{thresh:'more',hp:0.9} } },
        text : "If unit's HP ≥ 90% in combat against a bow user, unit makes a follow-up attack and foe cannot.",
        sp: 50,
        prerequisite: null,
        inherit: 'no_flyer'
    },
    bowbreaker_2 :
    {   tag : 'bowbreaker_2',
        name : "Bowbreaker 2",
        effects : { break: { weapon_type:'bow', check:{thresh:'more',hp:0.7} } },
        text : "If unit's HP ≥ 70% in combat against a bow user, unit makes a follow-up attack and foe cannot.",
        sp: 100,
        prerequisite: 'bowbreaker_1',
        inherit: 'no_flyer'
    },
    bowbreaker_3 :
    {   tag : 'bowbreaker_3',
        name : "Bowbreaker 3",
        effects : { break: { weapon_type:'bow', check:{thresh:'more',hp:0.5} } },
        text : "If unit's HP ≥ 50% in combat against a bow user, unit makes a follow-up attack and foe cannot.",
        sp: 200,
        prerequisite: 'bowbreaker_2',
        inherit: 'no_flyer'
    },

    brash_assault_1 :
    {   tag : 'brash_assault_1',
        name : "Brash Assault 1",
        effects : { followup: { check:{counter:true, hp:0.3} } },
        text : "Unit automatically makes a follow-up when at HP ≤ 30% and attacking a foe that can counter.",
        sp: 50,
        prerequisite: null,
        inherit: 'all'
    },
    brash_assault_2 :
    {   tag : 'brash_assault_2',
        name : "Brash Assault 2",
        effects : { followup: { check:{counter:true, hp:0.4} } },
        text : "Unit automatically makes a follow-up when at HP ≤ 40% and attacking a foe that can counter.",
        sp: 100,
        prerequisite: 'brash_assault_1',
        inherit: 'all'
    },
    brash_assault_3 :
    {   tag : 'brash_assault_3',
        name : "Brash Assault 3",
        effects : { followup: { check:{counter:true, hp:0.3} } },
        text : "Unit automatically makes a follow-up when at HP ≤ 50% and attacking a foe that can counter.",
        sp: 200,
        prerequisite: 'brash_assault_2',
        inherit: 'all'
    },

    daggerbreaker_1 :
    {   tag : 'daggerbreaker_1',
        name : "Daggerbreaker 1",
        effects : { break: { weapon_type:'dagger', check:{thresh:'more',hp:0.9} } },
        text : "If unit's HP ≥ 90% in combat against a dagger user, unit makes a follow-up attack and foe cannot.",
        sp: 50,
        prerequisite: null,
        inherit: 'all'
    },
    daggerbreaker_2 :
    {   tag : 'daggerbreaker_2',
        name : "Daggerbreaker 2",
        effects : { break: { weapon_type:'dagger', check:{thresh:'more',hp:0.7} } },
        text : "If unit's HP ≥ 70% in combat against a dagger user, unit makes a follow-up attack and foe cannot.",
        sp: 100,
        prerequisite: 'daggerbreaker_1',
        inherit: 'all'
    },
    daggerbreaker_3 :
    {   tag : 'daggerbreaker_3',
        name : "Daggerbreaker 3",
        effects : { break: { weapon_type:'dagger', check:{thresh:'more',hp:0.5} } },
        text : "If unit's HP ≥ 50% in combat against a dagger user, unit makes a follow-up attack and foe cannot.",
        sp: 200,
        prerequisite: 'daggerbreaker_2',
        inherit: 'all'
    },

    desperation_1 :
    {   tag : 'desperation_1',
        name : "Desperation 1",
        effects : { desperate: {check: { followup:1, thresh:'less', hp:0.25 } } },
        text : "If unit initiates combat with HP ≤ 25%, follow-up attacks occur immediately after unit's attack.",
        sp: 50,
        prerequisite: null,
        inherit: 'all'
    },
    desperation_2 :
    {   tag : 'desperation_2',
        name : "Desperation 2",
        effects : { desperate: {check: { followup:1, thresh:'less', hp:0.50 } } },
        text : "If unit initiates combat with HP ≤ 50%, follow-up attacks occur immediately after unit's attack.",
        sp: 100,
        prerequisite: 'desperation_1',
        inherit: 'all'
    },
    desperation_3 :
    {   tag : 'desperation_3',
        name : "Desperation 3",
        effects : { desperate: {check: { followup:1, thresh:'less', hp:0.75 } } },
        text : "If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack.",
        sp: 200,
        prerequisite: 'desperation_2',
        inherit: 'all'
    },

    drag_back :
    {   tag : 'drag_back',
        name : "Drag Back",
        effects : { after : { position_enemy: 'swap', position_self: 'back' } },
        text : "If unit initiates attack, the unit moves 1 space away after combat. Foe moves into unit's previous space.",
        sp: 150,
        prerequisite: null,
        inherit: 'melee'
    },

    escape_route_1 :
    {   tag : 'escape_route_1',
        name : "Escape Route 1",
        effects : { warp : { check:{thresh:'less',hp:0.3}} },
        text : "Enables unit whose own HP is ≤ 30% to warp adjacent to any ally.",
        sp: 60,
        prerequisite: null,
        inherit: 'all'
    },
    escape_route_2 :
    {   tag : 'escape_route_2',
        name : "Escape Route 2",
        effects : { warp : { check:{thresh:'less',hp:0.4}} },
        text : "Enables unit whose own HP is ≤ 40% to warp adjacent to any ally.",
        sp: 120,
        prerequisite: 'escape_route_1',
        inherit: 'all'
    },
    escape_route_3 :
    {   tag : 'escape_route_3',
        name : "Escape Route 3",
        effects : { warp : { check:{thresh:'less',hp:0.5}} },
        text : "Enables unit whose own HP is ≤ 50% to warp adjacent to any ally.",
        sp: 240,
        prerequisite: 'escape_route_2',
        inherit: 'all'
    },

    greentomebreaker_1 :
    {   tag : 'greentomebreaker_1',
        name : "G Tomebreaker 1",
        effects : { break: { weapon_type:'green_tome', check:{thresh:'more',hp:0.9} } },
        text : "If unit's HP ≥ 90% in combat against a green tome user, unit makes a follow-up attack and foe cannot.",
        sp: 50,
        prerequisite: null,
        inherit: 'no_blue'
    },
    greentomebreaker_2 :
    {   tag : 'greentomebreaker_2',
        name : "G Tomebreaker 2",
        effects : { break: { weapon_type:'green_tome', check:{thresh:'more',hp:0.7} } },
        text : "If unit's HP ≥ 70% in combat against a green tome user, unit makes a follow-up attack and foe cannot.",
        sp: 100,
        prerequisite: 'greentomebreaker_1',
        inherit: 'no_blue'
    },
    greentomebreaker_3 :
    {   tag : 'greentomebreaker_3',
        name : "G Tomebreaker 3",
        effects : { break: { weapon_type:'green_tome', check:{thresh:'more',hp:0.5} } },
        text : "If unit's HP ≥ 50% in combat against a green tome user, unit makes a follow-up attack and foe cannot.",
        sp: 200,
        prerequisite: 'greentomebreaker_2',
        inherit: 'no_blue'
    },

    guard_1 :
    {   tag : 'guard_1',
        name : "Guard 1",
        effects : { guard: { check:{thresh:'more',hp:1}, special:-1 } },
        text : "If unit's HP is 100% at start of combat, enemy is inflicted with Special cooldown charge-1. (If using similar skill, only highest value applied.)",
        sp: 50,
        prerequisite: null,
        inherit: 'all'
    },
    guard_2 :
    {   tag : 'guard_2',
        name : "Guard 2",
        effects : { guard: { check:{thresh:'more',hp:0.9}, special:-1 } },
        text : "If unit's HP is ≥ 90% at start of combat, enemy is inflicted with Special cooldown charge-1. (If using similar skill, only highest value applied.)",
        sp: 100,
        prerequisite: 'guard_1',
        inherit: 'all'
    },
    guard_3 :
    {   tag : 'guard_3',
        name : "Guard 3",
        effects : { guard: { check:{thresh:'more',hp:0.8}, special:-1 } },
        text : "If unit's HP is ≥ 80% at start of combat, enemy is inflicted with Special cooldown charge-1. (If using similar skill, only highest value applied.)",
        sp: 200,
        prerequisite: 'guard_2',
        inherit: 'all'
    },

    hit_and_run :
    {   tag : 'hit_and_run',
        name : "Hit and Run",
        effects : { initiate : { position_self: 'back' } },
        text : "If unit initiates attack, unit retreats 1 space after battle.",
        sp: 150,
        prerequisite: null,
        inherit: 'melee'
    },

    knock_back :
    {   tag : 'knock_back',
        name : "Knock Back",
        effects : { initiate : { position_enemy: 'back' } },
        text : "If unit initiates attack, foe is moved 1 space away after combat.",
        sp: 150,
        prerequisite: null,
        inherit: 'melee'
    },

    lancebreaker_1 :
    {   tag : 'lancebreaker_1',
        name : "Lancebreaker 1",
        effects : { break: { weapon_type:'lance', check:{thresh:'more',hp:0.9} } },
        text : "If unit's HP ≥ 90% in combat against a lance user, unit makes a follow-up attack and foe cannot.",
        sp: 50,
        prerequisite: null,
        inherit: 'no_red'
    },
    lancebreaker_2 :
    {   tag : 'lancebreaker_2',
        name : "Lancebreaker 2",
        effects : { break: { weapon_type:'lance', check:{thresh:'more',hp:0.7} } },
        text : "If unit's HP ≥ 70% in combat against a lance user, unit makes a follow-up attack and foe cannot.",
        sp: 100,
        prerequisite: 'lancebreaker_1',
        inherit: 'no_red'
    },
    lancebreaker_3 :
    {   tag : 'lancebreaker_3',
        name : "Lancebreaker 3",
        effects : { break: { weapon_type:'lance', check:{thresh:'more',hp:0.5} } },
        text : "If unit's HP ≥ 50% in combat against a lance user, unit makes a follow-up attack and foe cannot.",
        sp: 200,
        prerequisite: 'lancebreaker_2',
        inherit: 'no_red'
    },

    live_for_bounty :
    {   tag : 'live_for_bounty',
        name : "Live for Bounty",
        effects : { bonus: 'crystals' },
        text : "If unit survives, get 1.5x shards/crystals from a Training Tower map. (If similar skill effects also used, only highest multiplier applied.)",
        sp: 100,
        prerequisite: null,
        inherit: 'all'
    },

    live_for_honor :
    {   tag : 'live_for_honor',
        name : "Live for Honor",
        effects : { bonus: 'badges' },
        text : "If unit survives, get 1.5x normal badges from a Training Tower map. (If similar skill effects also used, only highest multiplier applied.)",
        sp: 100,
        prerequisite: null,
        inherit: 'all'
    },

    live_to_serve_1 :
    {   tag : 'live_to_serve_1',
        name : "Live to Serve 1",
        effects : { after: { heal_self:  0.5 } },
        text : "When healing allies with a staff, unit also recovers 50% of the HP restored.",
        sp: 40,
        prerequisite: null,
        inherit: 'staff'
    },
    live_to_serve_2 :
    {   tag : 'live_to_serve_2',
        name : "Live to Serve 2",
        effects : { after: { heal_self: 0.75 } },
        text : "When healing allies with a staff, unit also recovers 75% of the HP restored.",
        sp: 80,
        prerequisite: 'live_to_serve_1',
        inherit: 'staff'
    },
    live_to_serve_3 :
    {   tag : 'live_to_serve_3',
        name : "Live to Serve 3",
        effects : { after: { heal_self:    1 } },
        text : "When healing allies with a staff, unit also recovers the same amount.",
        sp: 160,
        prerequisite: 'live_to_serve_2',
        inherit: 'staff'
    },

    lunge :
    {   tag : 'lunge',
        name : "Lunge",
        effects : { initiate : { position_enemy: 'swap', position_self: 'swap' } },
        text : "If unit initiates attack, foe is moved 1 space away after combat.",
        sp: 150,
        prerequisite: null,
        inherit: 'melee'
    },


    obstruct_1 :
    {   tag : 'obstruct_1',
        name : "Obstruct 1",
        effects : { nopass : { check:{thresh:'more',hp:0.9}} },
        text : "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 90%. (No effect on foes with a Pass skill.)",
        sp: 50,
        prerequisite: null,
        inherit: 'all'
    },
    obstruct_2 :
    {   tag : 'obstruct_2',
        name : "Obstruct 2",
        effects : { nopass : { check:{thresh:'more',hp:0.7}} },
        text : "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 70%. (No effect on foes with a Pass skill.)",
        sp: 100,
        prerequisite: 'obstruct_1',
        inherit: 'all'
    },
    obstruct_3 :
    {   tag : 'obstruct_3',
        name : "Obstruct 3",
        effects : { nopass : { check:{thresh:'more',hp:0.5}} },
        text : "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 50%. (No effect on foes with a Pass skill.)",
        sp: 200,
        prerequisite: 'obstruct_2',
        inherit: 'all'
    },

    pass_1 :
    {   tag : 'pass_1',
        name : "Pass 1",
        effects : { pass : { check:{thresh:'more',hp:0.75}} },
        text : "Units can pass through foes if its own HP ≥ 75%.",
        sp: 50,
        prerequisite: null,
        inherit: 'all'
    },
    pass_2 :
    {   tag : 'pass_2',
        name : "Pass 2",
        effects : { pass : { check:{thresh:'more',hp:0.50}} },
        text : "Units can pass through foes if its own HP ≥ 50%.",
        sp: 100,
        prerequisite: 'pass_1',
        inherit: 'all'
    },
    pass_3 :
    {   tag : 'pass_3',
        name : "Pass 3",
        effects : { pass : { check:{thresh:'more',hp:0.25}} },
        text : "Units can pass through foes if its own HP ≥ 25%.",
        sp: 200,
        prerequisite: 'pass_2',
        inherit: 'all'
    },

    poison_strike_1 :
    {   tag : 'poison_strike_1',
        name : "Poison Strike 1",
        effects : { after : { poison:4 } },
        text : "Inflicts 4 damage to foe after any combat this unit initiates.",
        sp: 60,
        prerequisite: null,
        inherit: 'no_staff'
    },
    poison_strike_2 :
    {   tag : 'poison_strike_2',
        name : "Poison Strike 2",
        effects : { after : { poison:7 } },
        text : "Inflicts 7 damage to foe after any combat this unit initiates.",
        sp: 120,
        prerequisite: 'poison_strike_1',
        inherit: 'no_staff'
    },
    poison_strike_3 :
    {   tag : 'poison_strike_3',
        name : "Poison Strike 3",
        effects : { after : { poison:10 } },
        text : "Inflicts 10 damage to foe after any combat this unit initiates.",
        sp: 240,
        prerequisite: 'poison_strike_2',
        inherit: 'no_staff'
    },

    quick_riposte_1 :
    {   tag : 'quick_riposte_1',
        name : "Quick Riposte 1",
        effects : { counter: { followup:1, check: { thresh:'more', hp:0.9 } } },
        text : "Unit automatically makes a follow-up attack if attacked at HP ≥ 90%.",
        sp: 60,
        prerequisite: null,
        inherit: 'all'
    },
    quick_riposte_2 :
    {   tag : 'quick_riposte_2',
        name : "Quick Riposte 2",
        effects : { counter: { followup:1, check: { thresh:'more', hp:0.8 } } },
        text : "Unit automatically makes a follow-up attack if attacked at HP ≥ 90%.",
        sp: 120,
        prerequisite: 'quick_riposte_1',
        inherit: 'all'
    },
    quick_riposte_3 :
    {   tag : 'quick_riposte_3',
        name : "Quick Riposte 3",
        effects : { counter: { followup:1, check: { thresh:'more', hp:0.7 } } },
        text : "Unit automatically makes a follow-up attack if attacked at HP ≥ 90%.",
        sp: 240,
        prerequisite: 'quick_riposte_2',
        inherit: 'all'
    },

    redtomebreaker_1 :
    {   tag : 'redtomebreaker_1',
        name : "R Tomebreaker 1",
        effects : { break: { weapon_type:'red_tome', check:{thresh:'more',hp:0.9} } },
        text : "If unit's HP ≥ 90% in combat against a red tome user, unit makes a follow-up attack and foe cannot.",
        sp: 50,
        prerequisite: null,
        inherit: 'no_green'
    },
    redtomebreaker_2 :
    {   tag : 'redtomebreaker_2',
        name : "R Tomebreaker 2",
        effects : { break: { weapon_type:'red_tome', check:{thresh:'more',hp:0.7} } },
        text : "If unit's HP ≥ 70% in combat against a red tome user, unit makes a follow-up attack and foe cannot.",
        sp: 100,
        prerequisite: 'redtomebreaker_1',
        inherit: 'no_green'
    },
    redtomebreaker_3 :
    {   tag : 'redtomebreaker_3',
        name : "R Tomebreaker 3",
        effects : { break: { weapon_type:'red_tome', check:{thresh:'more',hp:0.5} } },
        text : "If unit's HP ≥ 50% in combat against a red tome user, unit makes a follow-up attack and foe cannot.",
        sp: 200,
        prerequisite: 'redtomebreaker_2',
        inherit: 'no_green'
    },

    renewal_1 :
    {   tag : 'renewal_1',
        name : "Renewal 1",
        effects : { start: { heal:10, count:4 } },
        text : "At the start of every fourth turn, restores 10 HP.",
        sp: 60,
        prerequisite: null,
        inherit: 'all'
    },
    renewal_2 :
    {   tag : 'renewal_2',
        name : "Renewal 2",
        effects : { start: { heal:10, count:3 } },
        text : "At the start of every third turn, restores 10 HP.",
        sp: 120,
        prerequisite: 'renewal_1',
        inherit: 'all'
    },
    renewal_3 :
    {   tag : 'renewal_3',
        name : "Renewal 3",
        effects : { start: { heal:10, count:2 } },
        text : "At the start of every second turn, restores 10 HP.",
        sp: 240,
        prerequisite: 'renewal_2',
        inherit: 'all'
    },

    seal_atk_1 :
    {   tag : 'seal_atk_1',
        name : "Seal Atk 1",
        effects : { after : { seal: { atk:-3 } } },
        text : "After combat, foe suffers Atk-3 through its next action.",
        sp: 40,
        prerequisite: null,
        inherit: 'no_staff'
    },
    seal_atk_2 :
    {   tag : 'seal_atk_2',
        name : "Seal Atk 2",
        effects : { after : { seal: { atk:-5 } } },
        text : "After combat, foe suffers Atk-5 through its next action.",
        sp: 80,
        prerequisite: 'seal_atk_1',
        inherit: 'no_staff'
    },
    seal_atk_3 :
    {   tag : 'seal_atk_3',
        name : "Seal Atk 3",
        effects : { after : { seal: { atk:-7 } } },
        text : "After combat, foe suffers Atk-7 through its next action.",
        sp: 160,
        prerequisite: 'seal_atk_2',
        inherit: 'no_staff'
    },

    seal_def_1 :
    {   tag : 'seal_def_1',
        name : "Seal Def 1",
        effects : { after : { seal: { def:-3 } } },
        text : "After combat, foe suffers Def-3 through its next action.",
        sp: 40,
        prerequisite: null,
        inherit: 'no_staff'
    },
    seal_def_2 :
    {   tag : 'seal_def_2',
        name : "Seal Def 2",
        effects : { after : { seal: { def:-5 } } },
        text : "After combat, foe suffers Def-5 through its next action.",
        sp: 80,
        prerequisite: 'seal_def_1',
        inherit: 'no_staff'
    },
    seal_def_3 :
    {   tag : 'seal_def_3',
        name : "Seal Def 3",
        effects : { after : { seal: { def:-7 } } },
        text : "After combat, foe suffers Def-7 through its next action.",
        sp: 160,
        prerequisite: 'seal_def_2',
        inherit: 'no_staff'
    },

    seal_res_1 :
    {   tag : 'seal_res_1',
        name : "Seal Res 1",
        effects : { after : { seal: { res:-3 } } },
        text : "After combat, foe suffers Res-3 through its next action.",
        sp: 40,
        prerequisite: null,
        inherit: 'no_staff'
    },
    seal_res_2 :
    {   tag : 'seal_res_2',
        name : "Seal Res 2",
        effects : { after : { seal: { res:-5 } } },
        text : "After combat, foe suffers Res-5 through its next action.",
        sp: 80,
        prerequisite: 'seal_res_1',
        inherit: 'no_staff'
    },
    seal_res_3 :
    {   tag : 'seal_res_3',
        name : "Seal Res 3",
        effects : { after : { seal: { res:-7 } } },
        text : "After combat, foe suffers Res-7 through its next action.",
        sp: 160,
        prerequisite: 'seal_res_2',
        inherit: 'no_staff'
    },

    seal_spd_1 :
    {   tag : 'seal_spd_1',
        name : "Seal Spd 1",
        effects : { after : { seal: { spd:-3 } } },
        text : "After combat, foe suffers Spd-3 through its next action.",
        sp: 40,
        prerequisite: null,
        inherit: 'no_staff'
    },
    seal_spd_2 :
    {   tag : 'seal_spd_2',
        name : "Seal Spd 2",
        effects : { after : { seal: { spd:-5 } } },
        text : "After combat, foe suffers Spd-5 through its next action.",
        sp: 80,
        prerequisite: 'seal_spd_1',
        inherit: 'no_staff'
    },
    seal_spd_3 :
    {   tag : 'seal_spd_3',
        name : "Seal Spd 3",
        effects : { after : { seal: { spd:-7 } } },
        text : "After combat, foe suffers Spd-7 through its next action.",
        sp: 160,
        prerequisite: 'seal_spd_2',
        inherit: 'no_staff'
    },

    swordbreaker_1 :
    {   tag : 'swordbreaker_1',
        name : "Swordbreaker 1",
        effects : { break: { weapon_type:'sword', check:{thresh:'more',hp:0.9} } },
        text : "If unit's HP ≥ 90% in combat against a sword user, unit makes a follow-up attack and foe cannot.",
        sp: 50,
        prerequisite: null,
        inherit: 'no_green'
    },
    swordbreaker_2 :
    {   tag : 'swordbreaker_2',
        name : "Swordbreaker 2",
        effects : { break: { weapon_type:'sword', check:{thresh:'more',hp:0.7} } },
        text : "If unit's HP ≥ 70% in combat against a sword user, unit makes a follow-up attack and foe cannot.",
        sp: 100,
        prerequisite: 'swordbreaker_1',
        inherit: 'no_green'
    },
    swordbreaker_3 :
    {   tag : 'swordbreaker_3',
        name : "Swordbreaker 3",
        effects : { break: { weapon_type:'sword', check:{thresh:'more',hp:0.5} } },
        text : "If unit's HP ≥ 50% in combat against a sword user, unit makes a follow-up attack and foe cannot.",
        sp: 200,
        prerequisite: 'swordbreaker_2',
        inherit: 'no_green'
    },

    vantage_1 :
    {   tag : 'vantage_1',
        name : "Vantage 1",
        effects : { vantage: { check:{hp:0.25} } },
        text : "Unit counterattacks first when attacked at HP ≤ 25%.",
        sp: 60,
        prerequisite: null,
        inherit: 'all'
    },
    vantage_2 :
    {   tag : 'vantage_2',
        name : "Vantage 2",
        effects : { vantage: { check:{hp:0.50} } },
        text : "Unit counterattacks first when attacked at HP ≤ 50%.",
        sp: 100,
        prerequisite: 'vantage_1',
        inherit: 'all'
    },
    vantage_3 :
    {   tag : 'vantage_3',
        name : "Vantage 3",
        effects : { vantage: { check:{hp:0.75} } },
        text : "Unit counterattacks first when attacked at HP ≤ 75%.",
        sp: 200,
        prerequisite: 'vantage_2',
        inherit: 'all'
    },

    wary_fighter_1 :
    {   tag : 'wary_fighter_1',
        name : "Wary Fighter 1",
        effects : { nofollowup:1, check:{thresh:'more',hp:0.9} },
        text : "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 90%.",
        sp: 60,
        prerequisite: null,
        inherit: 'armor'
    },
    wary_fighter_2 :
    {   tag : 'wary_fighter_2',
        name : "Wary Fighter 2",
        effects : { nofollowup:1, check:{thresh:'more',hp:0.7} },
        text : "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 70%.",
        sp: 120,
        prerequisite: 'wary_fighter_1',
        inherit: 'armor'
    },
    wary_fighter_3 :
    {   tag : 'wary_fighter_3',
        name : "Wary Fighter 3",
        effects : { nofollowup:1, check:{thresh:'more',hp:0.5} },
        text : "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 50%.",
        sp: 240,
        prerequisite: 'wary_fighter_2',
        inherit: 'armor'
    },

    watersweep_1 :
    {   tag : 'watersweep_1',
        name : "Watersweep 1",
        effects :
        {   followup:0, nocounter:1,
            check:{thresh:'beat',spd:5},
            weapon_types: ['tome','staff','dragon']
        },
        text : "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 5, foe can’t counterattack.",
        sp: 60,
        prerequisite: null,
        inherit: 'no_staff'
    },
    watersweep_2 :
    {   tag : 'watersweep_2',
        name : "Watersweep 2",
        effects :
        {   followup:0, nocounter:1,
            check:{thresh:'beat',spd:3},
            weapon_types: ['tome','staff','dragon']
        },
        text : "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 3, foe can’t counterattack.",
        sp: 120,
        prerequisite: 'watersweep_1',
        inherit: 'no_staff'
    },
    watersweep_3 :
    {   tag : 'watersweep_3',
        name : "Watersweep 3",
        effects :
        {   followup:0, nocounter:1,
            check:{thresh:'beat',spd:1},
            weapon_types: ['tome','staff','dragon']
        },
        text : "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 1, foe can’t counterattack.",
        sp: 240,
        prerequisite: 'watersweep_2',
        inherit: 'no_staff'
    },

    windsweep_1 :
    {   tag : 'windsweep_1',
        name : "Windsweep 1",
        effects :
        {   followup:0, nocounter:1,
            check:{thresh:'beat',spd:5},
            weapon_types: ['sword','lance','axe','bow','dagger']
        },
        text : "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 5, foe can’t counterattack.",
        sp: 60,
        prerequisite: null,
        inherit: 'no_staff'
    },
    windsweep_2 :
    {   tag : 'windsweep_2',
        name : "Windsweep 2",
        effects :
        {   followup:0, nocounter:1,
            check:{thresh:'beat',spd:3},
            weapon_types: ['sword','lance','axe','bow','dagger']
        },
        text : "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 3, foe can’t counterattack.",
        sp: 120,
        prerequisite: 'windsweep_1',
        inherit: 'no_staff'
    },
    windsweep_3 :
    {   tag : 'windsweep_3',
        name : "Windsweep 3",
        effects :
        {   followup:0, nocounter:1,
            check:{thresh:'beat',spd:1},
            weapon_types: ['sword','lance','axe','bow','dagger']
        },
        text : "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 1, foe can’t counterattack.",
        sp: 240,
        prerequisite: 'windsweep_2',
        inherit: 'no_staff'
    },

    wings_of_mercy_1 :
    {   tag : 'wings_of_mercy_1',
        name : "Wings of Mercy 1",
        effects : { warp : { check:{thresh:'ally',hp:0.5}} },
        text : "Enables unit to warp adjacent to any ally with HP ≤ 30%.",
        sp: 60,
        prerequisite: null,
        inherit: 'all'
    },
    wings_of_mercy_2 :
    {   tag : 'wings_of_mercy_2',
        name : "Wings of Mercy 2",
        effects : { warp : { check:{thresh:'ally',hp:0.5}} },
        text : "Enables unit to warp adjacent to any ally with HP ≤ 40%.",
        sp: 120,
        prerequisite: 'wings_of_mercy_1',
        inherit: 'all'
    },
    wings_of_mercy_3 :
    {   tag : 'wings_of_mercy_3',
        name : "Wings of Mercy 3",
        effects : { warp : { check:{thresh:'ally',hp:0.5}} },
        text : "Enables unit to warp adjacent to any ally with HP ≤ 50%.",
        sp: 240,
        prerequisite: 'wings_of_mercy_2',
        inherit: 'all'
    },

    wrathful_staff_1 :
    {   tag : 'wrathful_staff_1',
        name : "Wrathful Staff 1",
        effects : { staff:'wrathful', check:{ thresh:'more', hp:1.0 } },
        text : "If unit has 100% HP at the start of combat, damage from their staff will be calculated the same as other weapons.",
        sp: 60,
        prerequisite: null,
        inherit: 'staff'
    },
    wrathful_staff_2 :
    {   tag : 'wrathful_staff_2',
        name : "Wrathful Staff 2",
        effects : { staff:'wrathful', check:{ thresh:'more', hp:0.5 } },
        text : "If unit has ≥ 50% HP at the start of combat, damage from their staff will be calculated the same as other weapons.",
        sp: 120,
        prerequisite: 'wrathful_staff_1',
        inherit: 'staff'
    },
    wrathful_staff_3 :
    {   tag : 'wrathful_staff_3',
        name : "Wrathful Staff 3",
        effects : { staff:'wrathful', check: false },
        text : "Damage from unit's staff will be calculated the same as other weapons.",
        sp: 240,
        prerequisite: 'wrathful_staff_2',
        inherit: 'staff'
    }

};

dat.passive_c =
{

    axe_experience_1 :
    {   tag : 'axe_experience_1',
        name : "Axe Experience 1",
        effects : { bonus: 'axe' },
        text: "If unit survives, unit gets 1.5x EXP. (If similar skill effects also used, only highest multipler applied.)",
        sp : 50,
        prerequisite: null,
        inherit: 'axe'
    },
    axe_experience_2 :
    {   tag : 'axe_experience_2',
        name : "Axe Experience 2",
        effects : { bonus: 'axe' },
        text: "If unit survives, all axe users on team get 1.5x EXP. (If similar skill effects also used, only highest multipler applied.)",
        sp : 100,
        prerequisite: 'axe_experience_1',
        inherit: 'axe'
    },
    axe_experience_3 :
    {   tag : 'axe_experience_3',
        name : "Axe Experience 3",
        effects : { bonus: 'axe' },
        text: "If unit survives, all axe users on team get 2x EXP. (If similar skill effects also used, only highest multipler applied.)",
        sp : 200,
        prerequisite: 'axe_experience_2',
        inherit: 'axe'
    },

    blue_tome_exp_1 :
    {   tag : 'blue_tome_exp_1',
        name : "B Tome Exp. 1",
        effects : { bonus: 'tome_blue' },
        text: "If unit survives and uses a blue tome, unit gets 1.5x EXP. (If similar skill effects also used, only highest multiplier applies.)",
        sp : 50,
        prerequisite: null,
        inherit: 'tome_blue'
    },
    blue_tome_exp_2 :
    {   tag : 'blue_tome_exp_2',
        name : "B Tome Exp. 2",
        effects : { bonus: 'tome_blue' },
        text: "If unit survives, all blue tome users on team get 1.5x EXP. (If similar skill effects also used, only highest multipler applied.)",
        sp : 100,
        prerequisite: 'blue_tome_exp_1',
        inherit: 'tome_blue'
    },
    blue_tome_exp_3 :
    {   tag : 'blue_tome_exp_3',
        name : "B Tome Exp. 3",
        effects : { bonus: 'tome_blue' },
        text: "If unit survives, all blue tome users on team get 2x EXP. (If similar skill effects also used, only highest multipler applied.)",
        sp : 200,
        prerequisite: 'blue_tome_exp_2',
        inherit: 'tome_blue'
    },

    bow_exp_1 :
    {   tag : 'bow_exp_1',
        name : "Bow Exp. 1",
        effects : { bonus: 'bow' },
        text: "If unit survives and uses a bow, unit gets 1.5x EXP. (If similar skill effects also used, only highest multiplier applies.)",
        sp : 50,
        prerequisite: null,
        inherit: 'bow'
    },
    bow_exp_2 :
    {   tag : 'bow_exp_2',
        name : "Bow Exp. 2",
        effects : { bonus: 'bow' },
        text: "If unit survives, all bow users on team get 1.5x EXP. (If similar skill effects also used, only highest multipler applied.)",
        sp : 100,
        prerequisite: 'bow_exp_1',
        inherit: 'bow'
    },
    bow_exp_3 :
    {   tag : 'bow_exp_3',
        name : "Bow Exp. 3",
        effects : { bonus: 'bow' },
        text: "If unit survives, all bow users on team get 2x EXP. (If similar skill effects also used, only highest multipler applied.)",
        sp : 200,
        prerequisite: 'bow_exp_2',
        inherit: 'bow'
    },

    breath_of_life_1 :
    {   tag : 'breath_of_life_1',
        name : "Breath of Life 1",
        effects : { after : { heal_adjacent: 3 } },
        text: "If unit initiates attack, adjacent allies recover 3 HP after combat.",
        sp : 50,
        prerequisite: null,
        inherit: 'all'
    },
    breath_of_life_2 :
    {   tag : 'breath_of_life_2',
        name : "Breath of Life 2",
        effects : { after : { heal_adjacent: 5 } },
        text: "If unit initiates attack, adjacent allies recover 5 HP after combat.",
        sp : 100,
        prerequisite: 'breath_of_life_1',
        inherit: 'all'
    },
    breath_of_life_3 :
    {   tag : 'breath_of_life_3',
        name : "Breath of Life 3",
        effects : { after : { heal_adjacent: 7 } },
        text: "If unit initiates attack, adjacent allies recover 7 HP after combat.",
        sp : 200,
        prerequisite: 'breath_of_life_2',
        inherit: 'all'
    },

    fortify_armor :
    {   tag : 'fortify_armor',
        name : "Fortify Armor",
        effects : { fortify: {def:+6, res:+6, check:''} },
        text : "Grants adjacent armor allies Def/Res+6 through their next actions at the start of each turn.",
        sp: 200,
        prerequisites : ['fortify_def_2', 'fortify_res_2'],
        inherit : 'armor'
    },

    fortify_cavalry :
    {   tag : 'fortify_cavalry',
        name : "Fortify Cavalry",
        effects : { fortify: {def:+6, res:+6, check:'cavalry'} },
        text : "Grants adjacent cavalry allies Def/Res+6 through their next actions at the start of each turn.",
        sp: 200,
        prerequisites : ['fortify_def_2', 'fortify_res_2'],
        inherit : 'cavalry'
    },

    fortify_def_1 :
    {   tag : 'fortify_def_1',
        name : "Fortify Def 1",
        effects : { fortify: {def:+2} },
        text : "Grants adjacent allies Def+2 through their next actions at the start of each turn.",
        sp: 50,
        prerequisite : null,
        inherit : 'all'
    },
    fortify_def_2 :
    {   tag : 'fortify_def_2',
        name : "Fortify Def 2",
        effects : { fortify: {def:+3} },
        text : "Grants adjacent allies Def+3 through their next actions at the start of each turn.",
        sp: 100,
        prerequisite : 'fortify_def_1',
        inherit : 'all'
    },
    fortify_def_3 :
    {   tag : 'fortify_def_3',
        name : "Fortify Def 3",
        effects : { fortify: {def:+4} },
        text : "Grants adjacent allies Def+4 through their next actions at the start of each turn.",
        sp: 200,
        prerequisite : 'fortify_def_2',
        inherit : 'all'
    },

    fortify_dragons :
    {   tag : 'fortify_dragons',
        name : "Fortify Dragons",
        effects : { fortify: {def:+6, res:+6, check:'dragon'} },
        text : "Grants adjacent dragon allies Def/Res+6 through their next actions at the start of each turn.",
        sp: 200,
        prerequisites : ['fortify_def_2', 'fortify_res_2'],
        inherit : 'dragon'
    },

    fortify_flyers :
    {   tag : 'fortify_flyers',
        name : "Fortify Fliers",
        effects : { fortify: {def:+6, res:+6, check:'flyer'} },
        text : "Grants adjacent flying allies Def/Res+6 through their next actions at the start of each turn.",
        sp: 200,
        prerequisites : ['fortify_def_2', 'fortify_res_2'],
        inherit : 'flyer'
    },

    fortify_res_1 :
    {   tag : 'fortify_res_1',
        name : "Fortify Res 1",
        effects : { fortify: {res:+2} },
        text : "Grants adjacent allies Res+2 through their next actions at the start of each turn.",
        sp: 50,
        prerequisite : null,
        inherit : 'all'
    },
    fortify_res_2 :
    {   tag : 'fortify_res_2',
        name : "Fortify Res 2",
        effects : { fortify: {res:+3} },
        text : "Grants adjacent allies Res+3 through their next actions at the start of each turn.",
        sp: 100,
        prerequisite : 'fortify_res_1',
        inherit : 'all'
    },
    fortify_res_3 :
    {   tag : 'fortify_res_3',
        name : "Fortify Res 3",
        effects : { fortify: {res:+4} },
        text : "Grants adjacent allies Res+4 through their next actions at the start of each turn.",
        sp: 200,
        prerequisite : 'fortify_res_2',
        inherit : 'all'
    },

    goad_armor :
    {   tag : 'goad_armor',
        name : "Goad Armor",
        effects : { goad: {spd:+4, atk:+4, check:''} },
        text : "Grants armored allies within 2 spaces Spd/Atk+4 during combat.",
        sp: 200,
        prerequisites : ['spur_atk_2', 'spur_spd_2'],
        inherit : 'armor'
    },

    goad_cavalry :
    {   tag : 'goad_cavalry',
        name : "Goad Cavalry",
        effects : { goad: {spd:+4, atk:+4, check:'cavalry'} },
        text : "Grants cavalry allies within 2 spaces Spd/Atk+4 during combat.",
        sp: 200,
        prerequisites : ['spur_atk_2', 'spur_spd_2'],
        inherit : 'cavalry'
    },

    goad_flyers :
    {   tag : 'goad_flyers',
        name : "Goad Fliers",
        effects : { goad: {spd:+4, atk:+4, check:'flyer'} },
        text : "Grants flying allies within 2 spaces Spd/Atk+4 during combat.",
        sp: 200,
        prerequisites : ['spur_atk_2', 'spur_spd_2'],
        inherit : 'flyer'
    },

    hone_armor :
    {   tag : 'hone_armor',
        name : "Hone Armor",
        effects : { hone: {spd:+6, atk:+6, check:''} },
        text : "Grants adjacent armored allies Atk/Spd+6 through their next actions at the start of each turn.",
        sp: 200,
        prerequisites : ['hone_atk_2', 'hone_spd_2'],
        inherit : 'armor'
    },

    hone_atk_1 :
    {   tag : 'hone_atk_1',
        name : "Hone Atk 1",
        effects : { hone: {atk:+2} },
        text : "Grants adjacent allies Atk+2 through their next actions at the start of each turn.",
        sp: 50,
        prerequisite : null,
        inherit : 'all'
    },
    hone_atk_2 :
    {   tag : 'hone_atk_2',
        name : "Hone Atk 2",
        effects : { hone: {atk:+3} },
        text : "Grants adjacent allies Atk+3 through their next actions at the start of each turn.",
        sp: 100,
        prerequisite : 'hone_atk_1',
        inherit : 'all'
    },
    hone_atk_3 :
    {   tag : 'hone_atk_3',
        name : "Hone Atk 3",
        effects : { hone: {atk:+4} },
        text : "Grants adjacent allies Atk+4 through their next actions at the start of each turn.",
        sp: 200,
        prerequisite : 'hone_atk_2',
        inherit : 'all'
    },

    hone_cavalry :
    {   tag : 'hone_cavalry',
        name : "Hone Cavalry",
        effects : { hone: {spd:+6, atk:+6, check:'cavalry'} },
        text : "Grants adjacent cavalry allies Atk/Spd+6 through their next actions at the start of each turn.",
        sp: 200,
        prerequisites : ['hone_atk_2', 'hone_spd_2'],
        inherit : 'cavalry'
    },

    hone_flyers :
    {   tag : 'hone_flyers',
        name : "Hone Fliers",
        effects : { hone: {spd:+6, atk:+6, check:'flyer'} },
        text : "Grants adjacent flying allies Atk/Spd+6 through their next actions at the start of each turn.",
        sp: 200,
        prerequisites : ['hone_atk_2', 'hone_spd_2'],
        inherit : 'flyer'
    },

    hone_spd_1 :
    {   tag : 'hone_spd_1',
        name : "Hone Spd 1",
        effects : { hone: {spd:+2} },
        text : "Grants adjacent allies Spd+2 through their next actions at the start of each turn.",
        sp: 50,
        prerequisite : null,
        inherit : 'all'
    },
    hone_spd_2 :
    {   tag : 'hone_spd_2',
        name : "Hone Spd 2",
        effects : { hone: {spd:+3} },
        text : "Grants adjacent allies Spd+3 through their next actions at the start of each turn.",
        sp: 100,
        prerequisite : 'hone_spd_1',
        inherit : 'all'
    },
    hone_spd_3 :
    {   tag : 'hone_spd_3',
        name : "Hone Spd 3",
        effects : { hone: {spd:+4} },
        text : "Grants adjacent allies Spd+4 through their next actions at the start of each turn.",
        sp: 200,
        prerequisite : 'hone_spd_2',
        inherit : 'all'
    },

    savage_blow_1 :
    {   tag : 'savage_blow_1',
        name : "Savage Blow 1",
        effects : { after: { poison_2: 3 } },
        text: "If unit initiates attack, foes within 2 spaces of target take 3 damage after combat.",
        sp : 50,
        prerequisite: null,
        inherit : 'all'
    },
    savage_blow_2 :
    {   tag : 'savage_blow_2',
        name : "Savage Blow 2",
        effects : { after: { poison_2: 5 } },
        text: "If unit initiates attack, foes within 2 spaces of target take 5 damage after combat.",
        sp : 100,
        prerequisite: 'savage_blow_1',
        inherit : 'all'
    },
    savage_blow_3 :
    {   tag : 'savage_blow_3',
        name : "Savage Blow 3",
        effects : { after: { poison_2: 7 } },
        text: "If unit initiates attack, foes within 2 spaces of target take 7 damage after combat.",
        sp : 200,
        prerequisite: 'savage_blow_2',
        inherit : 'all'
    },

    spur_atk_1 :
    {   tag : 'spur_atk_1',
        name : "Spur Atk 1",
        effects : { spur: {atk:+2} },
        text : "Grants adjacent allies Atk+2 during combat.",
        sp: 50,
        prerequisite : null,
        inherit : 'all'
    },
    spur_atk_2 :
    {   tag : 'spur_atk_2',
        name : "Spur Atk 2",
        effects : { spur: {atk:+3} },
        text : "Grants adjacent allies Atk+3 during combat.",
        sp: 100,
        prerequisite : 'spur_atk_1',
        inherit : 'all'
    },
    spur_atk_3 :
    {   tag : 'spur_atk_3',
        name : "Spur Atk 3",
        effects : { spur: {atk:+4} },
        text : "Grants adjacent allies Atk+4 during combat.",
        sp: 200,
        prerequisite : 'spur_atk_2',
        inherit : 'all'
    },

    spur_def_1 :
    {   tag : 'spur_def_1',
        name : "Spur Def 1",
        effects : { spur: {def:+2} },
        text : "Grants adjacent allies Def+2 during combat.",
        sp: 50,
        prerequisite : null,
        inherit : 'all'
    },
    spur_def_2 :
    {   tag : 'spur_def_2',
        name : "Spur Def 2",
        effects : { spur: {def:+3} },
        text : "Grants adjacent allies Def+3 during combat.",
        sp: 100,
        prerequisite : 'spur_def_1',
        inherit : 'all'
    },
    spur_def_3 :
    {   tag : 'spur_def_3',
        name : "Spur Def 3",
        effects : { spur: {def:+4} },
        text : "Grants adjacent allies Def+4 during combat.",
        sp: 200,
        prerequisite : 'spur_def_2',
        inherit : 'all'
    },

    spur_def_res_1 :
    {   tag : 'spur_def_res_1',
        name : "Spur Def Res 1",
        effects : { spur: {def:+2,res:+2} },
        text : "Grants adjacent allies Def/Res +2 during combat.",
        sp: 120,
        prerequisite : 'spur_res_1',
        inherit : 'all'
    },
    spur_def_res_2 :
    {   tag : 'spur_def_res_2',
        name : "Spur Def Res 2",
        effects : { spur: {def:+3,res:+3} },
        text : "Grants adjacent allies Def/Res +3 during combat.",
        sp: 240,
        prerequisite : 'spur_def_res_1',
        inherit : 'all'
    },

    spur_res_1 :
    {   tag : 'spur_res_1',
        name : "Spur Res 1",
        effects : { spur: {res:+2} },
        text : "Grants adjacent allies Res+2 during combat.",
        sp: 50,
        prerequisite : null,
        inherit : 'all'
    },
    spur_res_2 :
    {   tag : 'spur_res_2',
        name : "Spur Res 2",
        effects : { spur: {res:+3} },
        text : "Grants adjacent allies Res+3 during combat.",
        sp: 100,
        prerequisite : 'spur_res_1',
        inherit : 'all'
    },
    spur_res_3 :
    {   tag : 'spur_res_3',
        name : "Spur Res 3",
        effects : { spur: {res:+4} },
        text : "Grants adjacent allies Res+4 during combat.",
        sp: 200,
        prerequisite : 'spur_res_2',
        inherit : 'all'
    },

    spur_spd_1 :
    {   tag : 'spur_spd_1',
        name : "Spur Spd 1",
        effects : { spur: {spd:+2} },
        text : "Grants adjacent allies Spd+2 during combat.",
        sp: 50,
        prerequisite : null,
        inherit : 'all'
    },
    spur_spd_2 :
    {   tag : 'spur_spd_2',
        name : "Spur Spd 2",
        effects : { spur: {spd:+3} },
        text : "Grants adjacent allies Spd+3 during combat.",
        sp: 100,
        prerequisite : 'spur_spd_1',
        inherit : 'all'
    },
    spur_spd_3 :
    {   tag : 'spur_spd_3',
        name : "Spur Spd 3",
        effects : { spur: {spd:+4} },
        text : "Grants adjacent allies Spd+4 during combat.",
        sp: 200,
        prerequisite : 'spur_spd_2',
        inherit : 'all'
    },

    threaten_atk_1 :
    {   tag : 'threaten_atk_1',
        name : "Threaten Atk 1",
        effects : { threaten: {atk:-3} },
        text : "Inflicts Atk-3 on foes within 2 spaces through their next actions at the start of each turn.",
        sp: 50,
        prerequisite : null,
        inherit : 'all'
    },
    threaten_atk_2 :
    {   tag : 'threaten_atk_2',
        name : "Threaten Atk 2",
        effects : { threaten: {atk:-4} },
        text : "Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn.",
        sp: 100,
        prerequisite : 'threaten_atk_1',
        inherit : 'all'
    },
    threaten_atk_3 :
    {   tag : 'threaten_atk_3',
        name : "Threaten Atk 3",
        effects : { threaten: {atk:-5} },
        text : "Inflicts Atk-6 on foes within 2 spaces through their next actions at the start of each turn.",
        sp: 200,
        prerequisite : 'threaten_atk_2',
        inherit : 'all'
    },

    threaten_def_1 :
    {   tag : 'threaten_def_1',
        name : "Threaten Def 1",
        effects : { threaten: {def:-3} },
        text : "Inflicts Def-3 on foes within 2 spaces through their next actions at the start of each turn.",
        sp: 50,
        prerequisite : null,
        inherit : 'all'
    },
    threaten_def_2 :
    {   tag : 'threaten_def_2',
        name : "Threaten Def 2",
        effects : { threaten: {def:-4} },
        text : "Inflicts Def-4 on foes within 2 spaces through their next actions at the start of each turn.",
        sp: 100,
        prerequisite : 'threaten_def_1',
        inherit : 'all'
    },
    threaten_def_3 :
    {   tag : 'threaten_def_3',
        name : "Threaten Def 3",
        effects : { threaten: {def:-5} },
        text : "Inflicts Def-6 on foes within 2 spaces through their next actions at the start of each turn.",
        sp: 200,
        prerequisite : 'threaten_def_2',
        inherit : 'all'
    },

    threaten_res_1 :
    {   tag : 'threaten_res_1',
        name : "Threaten Res 1",
        effects : { threaten: {res:-3} },
        text : "Inflicts Res-3 on foes within 2 spaces through their next actions at the start of each turn.",
        sp: 50,
        prerequisite : null,
        inherit : 'all'
    },
    threaten_res_2 :
    {   tag : 'threaten_res_2',
        name : "Threaten Res 2",
        effects : { threaten: {res:-4} },
        text : "Inflicts Res-4 on foes within 2 spaces through their next actions at the start of each turn.",
        sp: 100,
        prerequisite : 'threaten_res_1',
        inherit : 'all'
    },
    threaten_res_3 :
    {   tag : 'threaten_res_3',
        name : "Threaten Res 3",
        effects : { threaten: {res:-5} },
        text : "Inflicts Res-6 on foes within 2 spaces through their next actions at the start of each turn.",
        sp: 200,
        prerequisite : 'threaten_res_2',
        inherit : 'all'
    },

    threaten_spd_1 :
    {   tag : 'threaten_spd_1',
        name : "Threaten Spd 1",
        effects : { threaten: {spd:-3} },
        text : "Inflicts Spd-3 on foes within 2 spaces through their next actions at the start of each turn.",
        sp: 50,
        prerequisite : null,
        inherit : 'all'
    },
    threaten_spd_2 :
    {   tag : 'threaten_spd_2',
        name : "Threaten Spd 2",
        effects : { threaten: {spd:-4} },
        text : "Inflicts Spd-4 on foes within 2 spaces through their next actions at the start of each turn.",
        sp: 100,
        prerequisite : 'threaten_spd_1',
        inherit : 'all'
    },
    threaten_spd_3 :
    {   tag : 'threaten_spd_3',
        name : "Threaten Spd 3",
        effects : { threaten: {spd:-5} },
        text : "Inflicts Spd-6 on foes within 2 spaces through their next actions at the start of each turn.",
        sp: 200,
        prerequisite : 'threaten_spd_2',
        inherit : 'all'
    },

    ward_armor :
    {   tag : 'ward_armor',
        name : "Ward Armor",
        effects : { ward: {def:+4, res:+4, check:''} },
        text : "Grants armored allies within 2 spaces Def/Res+4 during combat.",
        sp: 200,
        prerequisites : [ 'spur_def_2', 'spur_res_2' ],
        inherit : 'armor'
    },

    ward_cavalry :
    {   tag : 'ward_cavalry',
        name : "Ward Cavalry",
        effects : { ward: {def:+4, res:+4, check:'cavalry'} },
        text : "Grants cavalry allies within 2 spaces Def/Res+4 during combat.",
        sp: 200,
        prerequisites : [ 'spur_def_2', 'spur_res_2' ],
        inherit : 'cavalry'
    },

    ward_flyers :
    {   tag : 'ward_flyers',
        name : "Ward Fliers",
        effects : { ward: {def:+4, res:+4, check:'flyer'} },
        text : "Grants flying allies within 2 spaces Def/Res+4 during combat.",
        sp: 200,
        prerequisites : [ 'spur_def_2', 'spur_res_2' ],
        inherit : 'flyer'
    }

};
