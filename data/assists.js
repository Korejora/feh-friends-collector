
dat.assists =
{

    ardent_sacrifice :
    {   tag : 'ardent_sacrifice',
        name : "Ardent Sacrifice",
        range : 1,
        effect : { heal_ally: 10, heal_self: -10 },
        text : "Heals adjacent ally 10 HP. Unit loses 10 HP (but cannot reach 0 this way).",
        sp: 150,
        inherit : 'no_staff'
    },

    dance :
    {   tag : 'dance',
        name : "Dance",
        range : 1,
        effect : { extra_turn : 'ally' },
        text : "Enables target to take another action. Cannot be used on units with Sing or Dance.",
        sp: 150,
        inherit : 'exclusive'
    },

    draw_back :
    {   tag : 'draw_back',
        name : "Draw Back",
        effect : { position_self: 'back', position_ally: 'swap' },
        range : 1,
        text : "Unit moves 1 space away from target ally, who moves to unit's former position.",
        sp: 150,
        inherit : 'no_staff'
    },

    harsh_command :
    {   tag : 'harsh_command',
        name : "Harsh Command",
        range : 1,
        effect : { unpanic: 'ally' },
        text : "Converts penalties on target into bonuses.",
        sp: 150,
        inherit : 'no_staff'
    },

    heal :
    {   tag : 'heal',
        name : "Heal",
        range : 1,
        effect : { heal_ally: 5 },
        text : "Restores 5 HP.",
        sp: 150,
        inherit : 'staff'
    },

    martyr :
    {   tag : 'martyr',
        name : "Martyr",
        range : 1,
        effect : { heal_ally: 'martyr', heal_self: 'martyr', special_count: +1 },
        text : "Restores HP=7+ this unit's suffered damage. Unit heals HP=half suffered damage. Slows Special trigger (cooldown count+1).",
        sp: 200,
        prerequisite: 'reconcile',
        inherit : 'staff'
    },

    mend :
    {   tag : 'mend',
        name : "Mend",
        range : 1,
        effect : { heal_ally: 10 },
        text : "Restores 10 HP.",
        sp: 0,
        prerequisite: 'heal',
        inherit : 'staff'
    },

    physic :
    {   tag : 'physic',
        name : "Physic",
        range : 2,
        effect : { heal_ally: 8 },
        text : "Restores 8 HP. Rng: 2.",
        sp: 200,
        prerequisite: 'mend',
        inherit : 'staff'
    },

    pivot :
    {   tag : 'pivot',
        name : "Pivot",
        effect : { position_self: 'flip' },
        range : 1,
        text : "Unit moves to opposite side of adjacent ally.",
        sp: 150,
        inherit : 'no_staff'
    },

    rally_attack :
    {   tag : 'rally_attack',
        name : "Rally Attack",
        range : 1,
        effect : { rally : { atk:4 } },
        text : "Grants Atk+4 to an adjacent ally until the end of the turn.",
        sp: 150,
        inherit : 'no_staff'
    },

    rally_attack_speed :
    {   tag : 'rally_attack_speed',
        name : "Rally Attack Speed",
        range : 1,
        effect : { rally : { atk:3, spd:3 } },
        text : "Grants Atk/Spd+3 to an adjacent ally until the end of the turn.",
        sp: 150,
        inherit : 'no_staff'
    },

    rally_defense :
    {   tag : 'rally_defense',
        name : "Rally Defense",
        range : 1,
        effect : { rally : { def:4 } },
        text : "Grants Def+4 to an adjacent ally until the end of the turn.",
        sp: 150,
        inherit : 'no_staff'
    },

    rally_defense_resistance :
    {   tag : 'rally_defense_resistance',
        name : "Rally Defense Resistance",
        range : 1,
        effect : { rally : { def:4, res:4 } },
        text : "Grants Def/Res+3 to an adjacent ally until the end of the turn.",
        sp: 150,
        inherit : 'no_staff'
    },

    rally_resistance :
    {   tag : 'rally_resistance',
        name : "Rally Resistance",
        range : 1,
        effect : { rally : { res:4 } },
        text : "Grants Res+4 to an adjacent ally until the end of the turn.",
        sp: 150,
        inherit : 'no_staff'
    },

    rally_speed :
    {   tag : 'rally_speed',
        name : "Rally Speed",
        range : 1,
        effect : { rally : { spd:4 } },
        text : "Grants Spd+4 to an adjacent ally until the end of the turn.",
        sp: 150,
        inherit : 'no_staff'
    },

    reciprocal_aid :
    {   tag : 'reciprocal_aid',
        name : "Reciprocal Aid",
        range : 1,
        effect : { heal_ally: 'swap', heal_self: 'swap' },
        text : "Swap HP with adjacent ally (neither unit can go above their max HP).",
        sp: 150,
        inherit : 'no_staff'
    },

    reconcile :
    {   tag : 'reconcile',
        name : "Reconcile",
        range : 1,
        effect : { heal_ally: 7, heal_self: 7 },
        text : "Restores 7 HP each to target and this unit.",
        sp: 100,
        prerequisite: 'heal',
        inherit : 'staff'
    },

    recover :
    {   tag : 'recover',
        name : "Recover",
        range : 1,
        effect : { heal_ally: 15, special_count: +1 },
        text : "Restores 15 HP. Slows Special trigger (cooldown count +1).",
        sp: 200,
        prerequisite: 'mend',
        inherit : 'staff'
    },

    rehabilitate :
    {   tag : 'rehabilitate',
        name : "Rehabilitate",
        range : 1,
        effect : { heal_ally: 'rehab', special_count: +1 },
        text : "Restores 7 HP or more the further below 50% the target's HP is. Slows special trigger (cooldown count+1).",
        sp: 200,
        prerequisite: 'reconcile',
        inherit : 'staff'
    },

    reposition :
    {   tag : 'reposition',
        name : "Reposition",
        effect : { position_ally: 'flip' },
        range : 1,
        text : "Moves adjacent ally to opposite side of unit.",
        sp: 150,
        inherit : 'no_staff'
    },

    sing :
    {   tag : 'sing',
        name : "Sing",
        range : 1,
        effect : { extra_turn : 'ally' },
        text : "Enables target to take another action. Cannot be used on units with Sing or Dance.",
        sp: 150,
        inherit : 'exclusive'
    },

    shove :
    {   tag : 'shove',
        name : "Shove",
        effect : { position_ally: 1 },
        range : 1,
        text : "Push adjacent ally 1 space farther away.",
        sp: 150,
        inherit : 'no_staff'
    },

    smite :
    {   tag : 'smite',
        name : "Smite",
        effect : { position_ally: 2 },
        range : 1,
        text : "Push adjacent ally 2 spaces farther away.",
        sp: 150,
        inherit : 'no_staff'
    },

    swap :
    {   tag : 'swap',
        name : "Swap",
        effect : { position_ally: 'swap', positon_self: 'swap' },
        range : 1,
        text : "Swap places with an adjacent ally.",
        sp: 150,
        inherit : 'no_staff'
    }

};
