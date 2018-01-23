let chars =
{
    "abel__the_panther":
    {   "tag": "abel__the_panther",
        "name": "Abel",
        "epithet": "The Panther",
        "description": "Altean cavalier known for his sensibility. Rode with Cain in service of Marth.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 16, 6, 8, 8, 5 ],
            "5": [ 17, 7, 8, 8, 6 ]
        },
        "growth_points": [ 6, 8, 7, 4, 5 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Brave Lance", "mt": "5", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Brave Lance+", "mt": "8", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Holy Vestments", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.", "sp": "100", "known": "4", "learn": "-", "inherit": "ONLY_MELEE" },
            { "name": "Aegis", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 50%.", "sp": "200", "known": "-", "learn": "4", "inherit": "ONLY_MELEE" }
        ],
        "base_passive_A":
        [   { "name": "HP +3", "effect": "Grants +3 to max HP.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "HP +4", "effect": "Grants +4 to max HP.", "sp": "80", "learn": "4", "inherit": "None" },
            { "name": "HP +5", "effect": "Grants +5 to max HP.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Swordbreaker 1", "effect": "If unit's HP ≥ 90% in combat against a sword user, unit makes a follow-up attack and foe cannot.", "sp": "50", "learn": "-", "inherit": "Excludes Green Weapon Users" },
            { "name": "Swordbreaker 2", "effect": "If unit's HP ≥ 70% in combat against a sword user, unit makes a follow-up attack and foe cannot.", "sp": "100", "learn": "-", "inherit": "Excludes Green Weapon Users" },
            { "name": "Swordbreaker 3", "effect": "If unit's HP ≥ 50% in combat against a sword user, unit makes a follow-up attack and foe cannot.", "sp": "200", "learn": "4", "inherit": "Excludes Green Weapon Users" }
        ],
        "base_passive_C": []
    },
    "alfonse__prince_of_askr":
    {   "tag": "alfonse__prince_of_askr",
        "name": "Alfonse",
        "epithet": "Prince of Askr",
        "description": "A prince of Askr and member of the Order of Heroes. Kind and serious, and eager to maintain peace.",
        "origin": "Fire Emblem Heroes",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": true,
        "summon": false,
        "base_stats":
        {   "2": [ 17, 8, 4, 7, 3 ],
            "3": [ 18, 8, 5, 7, 4 ],
            "4": [ 18, 9, 5, 8, 4 ],
            "5": [ 19, 9, 6, 8, 5 ]
        },
        "growth_points": [ 7, 8, 5, 7, 4 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "2", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "2" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "3" },
            { "name": "Fólkvangr", "mt": "16", "rng": "1", "effect": "Grants Atk+5 at start of turn if unit's HP ≤ 50%.", "sp": "400", "known": "-", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Daylight", "cooldown": "3", "effect": "Heal 30% of damage dealt.", "sp": "100", "known": "2", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Sol", "cooldown": "3", "effect": "Heal 50% of damage dealt.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Death Blow 1", "effect": "Grants Atk+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Death Blow 2", "effect": "Grants Atk+4 during combat if unit initiates the attack.", "sp": "100", "learn": "2", "inherit": "Excludes Staff Users" },
            { "name": "Death Blow 3", "effect": "Grants Atk+6 during combat if unit initiates the attack.", "sp": "200", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Atk 1", "effect": "Grants adjacent allies Atk+2 during combat.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Spur Atk 2", "effect": "Grants adjacent allies Atk+3 during combat.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Spur Atk 3", "effect": "Grants adjacent allies Atk+4 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "alm__hero_of_prophecy":
    {   "tag": "alm__hero_of_prophecy",
        "name": "Alm",
        "epithet": "Hero of Prophecy",
        "description": "A brave but kind young warrior, raised by the hero Mycen in Ram Village. His left hand is marked with the Brand.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 21, 9, 6, 6, 5 ]
        },
        "growth_points": [ 7, 7, 7, 6, 4 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Falchion", "mt": "16", "rng": "1", "effect": "Effective against dragons.  At the start of every third turn, unit recovers 10 HP.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Dragon Gaze", "cooldown": "4", "effect": "Grants +30% to Atk.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Draconic Aura", "cooldown": "3", "effect": "Grants +30% to Atk.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Attack +1", "effect": "Grants Atk+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Attack +2", "effect": "Grants Atk+2.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Attack +3", "effect": "Grants Atk+3.", "sp": "120", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Windsweep 1", "effect": "If unit initiates attack, no follow-up occurs. Against foe with sword, lance, axe, bow, or dagger, if unit’s Spd - foe’s Spd ≥ 5, foe can’t counterattack.", "sp": "60", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Windsweep 2", "effect": "If unit initiates attack, no follow-up occurs. Against foe with sword, lance, axe, bow, or dagger, if unit’s Spd - foe’s Spd ≥ 3, foe can’t counterattack.", "sp": "120", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Windsweep 3", "effect": "If unit initiates attack, no follow-up occurs. Against foe with sword, lance, axe, bow, or dagger, if unit’s Spd - foe’s Spd ≥ 1, foe can’t counterattack.", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C": []
    },
    "amelia__rose_of_the_war":
    {   "tag": "amelia__rose_of_the_war",
        "name": "Amelia",
        "epithet": "Rose of the War",
        "description": "A young soldier from a small village in Grado. She is honest and sincere.",
        "origin": "Fire Emblem: The Sacred Stones",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Armored",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 19, 6, 8, 9, 4 ]
        },
        "growth_points": [ 9, 9, 8, 8, 5 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Slaying Axe", "mt": "10", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Slaying Axe+", "mt": "14", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Holy Vestments", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.", "sp": "100", "known": "5", "learn": "-", "inherit": "ONLY_MELEE" },
            { "name": "Sacred Cowl", "cooldown": "2", "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.", "sp": "200", "known": "-", "learn": "5", "inherit": "ONLY_MELEE" }
        ],
        "base_passive_A":
        [   { "name": "Earth Boost 1", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Earth Boost 2", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+4 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Earth Boost 3", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+6 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Armor March 1", "effect": "If unit has 100% HP and an adjacent armored ally at start of turn, unit and any such allies can move 1 extra space. (That turn only; does not stack.)", "sp": "60", "learn": "-", "inherit": "Armored Only" },
            { "name": "Armor March 2", "effect": "If unit has ≥ 50% HP and an adjacent armored ally at start of turn, unit and any such allies can move 1 extra space. (That turn only; does not stack.)", "sp": "120", "learn": "-", "inherit": "Armored Only" },
            { "name": "Armor March 3", "effect": "If unit has an adjacent armored ally at the start of turn, unit and any such allies can move 1 extra space. (That turn only; does not stack.)", "sp": "240", "learn": "5", "inherit": "Armored Only" }
        ]
    },
    "anna__commander":
    {   "tag": "anna__commander",
        "name": "Anna",
        "epithet": "Commander",
        "description": "A veteran fighter who leads the Order of Heroes. Alfonse and Sharena's commander.",
        "origin": "Fire Emblem Heroes",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Infantry",
        "limited": true,
        "summon": false,
        "base_stats":
        {   "2": [ 17, 6, 9, 3, 4 ],
            "3": [ 18, 6, 9, 4, 5 ],
            "4": [ 18, 7, 10, 4, 5 ],
            "5": [ 19, 7, 10, 5, 6 ]
        },
        "growth_points": [ 6, 6, 9, 4, 6 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "2", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "2" },
            { "name": "Silver Axe", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "3" },
            { "name": "Nóatún", "mt": "16", "rng": "1", "effect": "Unit may move adjacent to any ally when HP ≤ 40%.", "sp": "400", "known": "-", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Night Sky", "cooldown": "3", "effect": "Grants +50% to damage dealt.", "sp": "100", "known": "2", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Astra", "cooldown": "4", "effect": "Grants +150% to damage dealt.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Vantage 1", "effect": "Unit counterattacks first when attacked at HP ≤ 25%.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Vantage 2", "effect": "Unit counterattacks first when attacked at HP ≤ 50%.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Vantage 3", "effect": "Unit counterattacks first when attacked at HP ≤ 75%.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Spur Res 1", "effect": "Grants adjacent allies Res+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Res 2", "effect": "Grants adjacent allies Res+3 during combat.", "sp": "100", "learn": "2", "inherit": "None" },
            { "name": "Spur Res 3", "effect": "Grants adjacent allies Res+4 during combat.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "arden__strong_and_tough":
    {   "tag": "arden__strong_and_tough",
        "name": "Arden",
        "epithet": "Strong and Tough",
        "description": "An armored knight from Chalphy. Dreams of fighting on the front lines, but is often assigned to castle defense.",
        "origin": "Fire Emblem: Genealogy of the Holy War",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Armored",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "4": [ 24, 10, 2, 13, 2 ],
            "5": [ 25, 10, 3, 13, 3 ]
        },
        "growth_points": [ 12, 8, 2, 9, 2 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Brave Sword", "mt": "5", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Brave Sword+", "mt": "8", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Buckler", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from adjacent foes by 30%.", "sp": "100", "known": "4", "learn": "-", "inherit": "ONLY_MELEE" },
            { "name": "Pavise", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from adjacent foes by 50%.", "sp": "200", "known": "-", "learn": "4", "inherit": "ONLY_MELEE" }
        ],
        "base_passive_A": [],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Def 1", "effect": "Grants adjacent allies Def+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Drive Def 1", "effect": "Grants allies within 2 spaces Def+2 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Drive Def 2", "effect": "Grants allies within 2 spaces Def+3 during combat.", "sp": "240", "learn": "4", "inherit": "None" }
        ]
    },
    "arthur__hapless_hero":
    {   "tag": "arthur__hapless_hero",
        "name": "Arthur",
        "epithet": "Hapless Hero",
        "description": "A sworn ally of justice with uncannily bad luck. One of Elise's retainers.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 18, 7, 6, 7, 4 ],
            "4": [ 18, 8, 6, 8, 4 ],
            "5": [ 19, 8, 7, 8, 5 ]
        },
        "growth_points": [ 7, 7, 6, 6, 5 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Emerald Axe", "mt": "8", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Emerald Axe+", "mt": "12", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Swap", "rng": "1", "effect": "Swap places with an adjacent ally.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "HP +3", "effect": "Grants +3 to max HP.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "HP +4", "effect": "Grants +4 to max HP.", "sp": "80", "learn": "3", "inherit": "None" },
            { "name": "HP +5", "effect": "Grants +5 to max HP.", "sp": "160", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Lancebreaker 1", "effect": "If unit's HP ≥ 90% in combat against a lance user, unit makes a follow-up attack and foe cannot.", "sp": "50", "learn": "3", "inherit": "Excludes Red Weapon Users" },
            { "name": "Lancebreaker 2", "effect": "If unit's HP ≥ 70% in combat against a lance user, unit makes a follow-up attack and foe cannot.", "sp": "100", "learn": "4", "inherit": "Excludes Red Weapon Users" },
            { "name": "Lancebreaker 3", "effect": "If unit's HP ≥ 50% in combat against a lance user, unit makes a follow-up attack and foe cannot.", "sp": "200", "learn": "5", "inherit": "Excludes Red Weapon Users" }
        ],
        "base_passive_C": []
    },
    "arvis__emperor_of_flame":
    {   "tag": "arvis__emperor_of_flame",
        "name": "Arvis",
        "epithet": "Emperor of Flame",
        "description": "Duke of Velthomer, and descendant of the crusader Fjalar and Maera of the imperial family.",
        "origin": "Fire Emblem: Genealogy of the Holy War",
        "weapon_type": "red_tome",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "3": [ 17, 7, 6, 3, 6 ],
            "4": [ 17, 8, 7, 3, 6 ],
            "5": [ 18, 8, 7, 4, 7 ]
        },
        "growth_points": [ 3, 8, 7, 2, 8 ],
        "base_weapons":
        [   { "name": "Fire", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elfire", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Bolganone", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Valflame", "mt": "14", "rng": "2", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk/Res-4 until the end of foe's next action.", "sp": "400", "known": "-", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Flame", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Growing Flame", "cooldown": "4", "effect": "Before combat this unit initiates, foes in a wide area around target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Recover Ring", "effect": "Restores 10 HP at the start of each turn. (Skill cannot be inherited.)", "sp": "200", "learn": "5", "inherit": "Prf" }
        ],
        "base_passive_C":
        [   { "name": "Def Ploy 1", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-3 until the end of foe's next action.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Def Ploy 2", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-4 until the end of foe's next action.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Def Ploy 3", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-5 until the end of foe's next action.", "sp": "240", "learn": "4", "inherit": "None" }
        ]
    },
    "athena__borderland_sword":
    {   "tag": "athena__borderland_sword",
        "name": "Athena",
        "epithet": "Borderland Sword",
        "description": "A foreign warrior with a straightforward personality. Speaks with an accent.",
        "origin": "Fire Emblem: New Mystery of the Emblem",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 16, 6, 10, 8, 4 ],
            "5": [ 17, 7, 10, 8, 5 ]
        },
        "growth_points": [ 5, 7, 9, 5, 5 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Wo Dao", "mt": "9", "rng": "1", "effect": "Grants +10 to damage when Special triggers.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Wo Dao+", "mt": "13", "rng": "1", "effect": "Grants +10 to damage when Special triggers.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Moonbow", "cooldown": "2", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Armored Blow 1", "effect": "Grants Def+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Sturdy Blow 1", "effect": "Grants Atk/Def+2 during combat if unit initiates combat.", "sp": "120", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Sturdy Blow 2", "effect": "Grants Atk/Def+4 during combat if unit initiates combat.", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C": []
    },
    "ayra__astras_wielder":
    {   "tag": "ayra__astras_wielder",
        "name": "Ayra",
        "epithet": "Astra's Wielder",
        "description": "Princess of Isaach, master of the sword, and descendant of the crusader Od. She fights for her homeland.",
        "origin": "Fire Emblem: Genealogy of the Holy War",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 19, 7, 11, 7, 4 ]
        },
        "growth_points": [ 6, 8, 8, 7, 4 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Ayra's Blade", "mt": "16", "rng": "1", "effect": "Grants Spd+3. If unit's Spd - foe's Spd ≥ 1, gain Special cooldown charge +1 per attack. (If similar skill also used, only highest value applied.)", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Night Sky", "cooldown": "3", "effect": "Grants +50% to damage dealt.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Astra", "cooldown": "4", "effect": "Grants +150% to damage dealt.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" },
            { "name": "Regnal Astra", "cooldown": "2", "effect": "Boosts damage dealt by 40% of unit's Spd. (Skill cannot be inherited.)", "sp": "500", "known": "-", "learn": "5", "inherit": "Prf" }
        ],
        "base_passive_A":
        [   { "name": "Darting Blow 1", "effect": "Grants Spd+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Swift Sparrow 1", "effect": "If unit initiates combat, unit granted Atk/Spd+2 during battle.", "sp": "120", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Swift Sparrow 2", "effect": "If unit initiates combat, unit granted Atk/Spd+4 during battle.", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Desperation 1", "effect": "If unit initiates combat with HP ≤ 25%, follow-up attacks occur immediately after unit's attack.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Desperation 2", "effect": "If unit initiates combat with HP ≤ 50%, follow-up attacks occur immediately after unit's attack.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Desperation 3", "effect": "If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "azama__carefree_monk":
    {   "tag": "azama__carefree_monk",
        "name": "Azama",
        "epithet": "Carefree Monk",
        "description": "A monk of Hoshido with a curious sense of humor. One of Hinoka's retainers.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "colorless_staff",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 18, 3, 6, 7, 5 ],
            "4": [ 18, 3, 7, 8, 5 ],
            "5": [ 19, 4, 7, 8, 6 ]
        },
        "growth_points": [ 7, 4, 5, 7, 5 ],
        "base_weapons":
        [   { "name": "Assault", "mt": "10", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "3", "inherit": "Prf" },
            { "name": "Pain", "mt": "3", "rng": "2", "effect": "After combat, if unit attacked, deals 10 damage to foe.", "sp": "150", "known": "-", "learn": "3" },
            { "name": "Pain+", "mt": "10", "rng": "2", "effect": "After combat, if unit attacked, deals 10 damage to target and foes within 2 spaces of target.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Heal", "rng": "1", "effect": "Restores 5 HP.", "sp": "-", "known": "3", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Reconcile", "rng": "1", "effect": "Restores 7 HP each to target and this unit.", "sp": "100", "known": "3", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Martyr", "rng": "1", "effect": "Restores HP=7+ this unit's suffered damage. Unit heals HP=half suffered damage. Slows Special trigger (cooldown count+1).", "sp": "200", "known": "-", "learn": "4", "inherit": "ONLY_STAFF" },
            { "name": "Martyr+", "rng": "1", "effect": "Restores HP = this unit's suffered damage +50% of Atk. (Minimum of 7 HP.) Also restores HP to unit = half suffered damage.", "sp": "300", "known": "-", "learn": "5", "inherit": "ONLY_STAFF" }
        ],
        "base_special":
        [   { "name": "Imbue", "cooldown": "1", "effect": "When healing an ally with a staff, increases recovered HP by 10.", "sp": "50", "known": "-", "learn": "3", "inherit": "ONLY_STAFF" },
            { "name": "Solid-Earth Balm", "cooldown": "1", "effect": "When healing an ally with a staff, grants all allies Def+4 for 1 turn.", "sp": "150", "known": "-", "learn": "3", "inherit": "ONLY_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Threaten Atk 1", "effect": "Inflicts Atk-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Threaten Atk 2", "effect": "Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Threaten Atk 3", "effect": "Inflicts Atk-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "azura__lady_of_the_lake":
    {   "tag": "azura__lady_of_the_lake",
        "name": "Azura",
        "epithet": "Lady of the Lake",
        "description": "An enchanting princess raised in Hoshido who sings in battle to help her allies.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 5, 7, 4, 6 ]
        },
        "growth_points": [ 5, 8, 8, 4, 6 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Sapphire Lance", "mt": "8", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Sapphire Lance+", "mt": "12", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Sing", "rng": "1", "effect": "Enables target to take another action. Cannot be used on units with Sing or Dance.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Speed +1", "effect": "Grants Spd+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Speed +2", "effect": "Grants Spd+2.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Speed +3", "effect": "Grants Spd+3.", "sp": "120", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Fortify Res 1", "effect": "Grants adjacent allies Res+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Fortify Res 2", "effect": "Grants adjacent allies Res+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Fortify Res 3", "effect": "Grants adjacent allies Res+4 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "azura__lady_of_ballads":
    {   "tag": "azura__lady_of_ballads",
        "name": "Azura",
        "epithet": "Lady of Ballads",
        "subname": "🎵",
        "description": "A mysterious songstress who appeared at the theater in Cyrkensia. Has overwhelming singing abilities.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 6, 8, 3, 6 ]
        },
        "growth_points": [ 5, 8, 8, 4, 6 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Axe", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Urðr", "mt": "16", "rng": "1", "effect": "If Sing or Dance is used, target also granted Atk/Spd/Def/Res+3.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support":
        [   { "name": "Sing", "rng": "1", "effect": "Enables target to take another action. Cannot be used on units with Sing or Dance.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Triangle Adept 1", "effect": "Gives Atk+10% if weapon-triangle advantage, Atk-10% if disadvantage.", "sp": "50", "learn": "-", "inherit": "Excludes Colorless Weapon Users" },
            { "name": "Triangle Adept 2", "effect": "Gives Atk+15% if weapon-triangle advantage, Atk-15% if disadvantage.", "sp": "100", "learn": "-", "inherit": "Excludes Colorless Weapon Users" },
            { "name": "Triangle Adept 3", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "200", "learn": "5", "inherit": "Excludes Colorless Weapon Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Res 1", "effect": "Grants adjacent allies Res+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Drive Res 1", "effect": "Grants allies within 2 spaces Res+2 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Drive Res 2", "effect": "Grants allies within 2 spaces Res+3 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "azura__celebratory_spirit":
    {   "tag": "azura__celebratory_spirit",
        "name": "Azura",
        "epithet": "Celebratory Spirit",
        "subname": "🎉",
        "description": "An enchanting princess raised in Hoshido who has never lost a match of the traditional sport hanetsuki when played at the New Year.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 15, 6, 9, 5, 4 ]
        },
        "growth_points": [ 6, 7, 8, 4, 6 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Hagoita", "mt": "10", "rng": "1", "effect": "Grants Def/Res+2 during combat to allies within 2 spaces.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Hagoita+", "mt": "14", "rng": "1", "effect": "Grants Def/Res+2 during combat to allies within 2 spaces.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Sing", "rng": "1", "effect": "Enables target to take another action. Cannot be used on units with Sing or Dance.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Earth Dance 1", "effect": "If Sing or Dance is used, target also granted Def+3.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Earth Dance 2", "effect": "If Sing or Dance is used, target also granted Def+4.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Earth Dance 3", "effect": "If Sing or Dance is used, target also granted Def+5.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C":
        [   { "name": "Hone Spd 1", "effect": "Grants adjacent allies Spd+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Hone Spd 2", "effect": "Grants adjacent allies Spd+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Hone Fliers", "effect": "Grants adjacent flying allies Atk/Spd+6 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "Fliers Only" }
        ]
    },
    "barst__the_hatchet":
    {   "tag": "barst__the_hatchet",
        "name": "Barst",
        "epithet": "The Hatchet",
        "description": "Warrior of Talys who works for Ogma and has been a pirate and woodcutter.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 19, 8, 7, 5, 3 ],
            "4": [ 19, 9, 8, 5, 3 ],
            "5": [ 20, 9, 8, 6, 4 ]
        },
        "growth_points": [ 8, 7, 7, 7, 2 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Brave Axe", "mt": "5", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Brave Axe+", "mt": "8", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Reposition", "rng": "1", "effect": "Moves adjacent ally to opposite side of unit.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Knock Back", "effect": "If unit initiates attack, foe is moved 1 space away after combat.", "sp": "150", "learn": "3", "inherit": "Melee Weapon Users Only" }
        ],
        "base_passive_C":
        [   { "name": "Spur Atk 1", "effect": "Grants adjacent allies Atk+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Atk 2", "effect": "Grants adjacent allies Atk+3 during combat.", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Spur Atk 3", "effect": "Grants adjacent allies Atk+4 during combat.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "bartre__fearless_warrior":
    {   "tag": "bartre__fearless_warrior",
        "name": "Bartre",
        "epithet": "Fearless Warrior",
        "description": "An outpost warrior who went on a journey to find his beloved daughter, Fir.",
        "origin": "Fire Emblem: The Binding Blade",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 20, 9, 5, 6, 2 ],
            "4": [ 20, 10, 5, 7, 2 ],
            "5": [ 21, 10, 6, 7, 3 ]
        },
        "growth_points": [ 9, 8, 5, 8, 1 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Hammer", "mt": "8", "rng": "1", "effect": "Effective against armored units. ", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Hammer+", "mt": "12", "rng": "1", "effect": "Effective against armored units. ", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Smite", "rng": "1", "effect": "Push adjacent ally 2 spaces farther away.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Fury 1", "effect": "Grants Atk/Spd/Def/Res+1. Unit takes 2 damage after combat.", "sp": "50", "learn": "3", "inherit": "Excludes Staff Users" },
            { "name": "Fury 2", "effect": "Grants Atk/Spd/Def/Res+2. Unit takes 4 damage after combat.", "sp": "100", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Fury 3", "effect": "Grants Atk/Spd/Def/Res+3. Unit takes 6 damage after combat.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Brash Assault 1", "effect": "If unit initiates combat against a foe that can counter and unit's HP ≤ 30%, unit makes a guaranteed follow-up attack.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Brash Assault 2", "effect": "If unit initiates combat against a foe that can counter and unit's HP ≤ 40%, unit makes a guaranteed follow-up attack.", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Brash Assault 3", "effect": "If unit initiates combat against a foe that can counter and unit's HP ≤ 50%, unit makes a guaranteed follow-up attack.", "sp": "200", "learn": "4", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "black_knight__sinister_general":
    {   "tag": "black_knight__sinister_general",
        "name": "Black Knight",
        "epithet": "Sinister General",
        "description": "One of Daein's Four Riders. An enigmatic knight encased in pitch-black armor.",
        "origin": "Fire Emblem: Path of Radiance",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Armored",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "4": [ 21, 10, 7, 9, 4 ],
            "5": [ 22, 10, 8, 9, 5 ]
        },
        "growth_points": [ 8, 7, 8, 8, 2 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Alondite", "mt": "16", "rng": "1", "effect": "Enables counterattack regardless of distance if this unit is attacked.", "sp": "400", "known": "5", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Luna", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-50%.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" },
            { "name": "Black Luna", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-80%. (Skill cannot be inherited.)", "sp": "500", "known": "-", "learn": "5", "inherit": "Prf" }
        ],
        "base_passive_A":
        [   { "name": "Steady Stance 1", "effect": "Grants Def+2 during combat when this unit is attacked.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Steady Stance 2", "effect": "Grants Def+4 during combat when this unit is attacked.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Steady Stance 3", "effect": "Grants Def+6 during combat when this unit is attacked.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Wings of Mercy 1", "effect": "Enables unit to warp adjacent to any ally with HP ≤ 30%.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Wings of Mercy 2", "effect": "Enables unit to warp adjacent to any ally with HP ≤ 40%.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Wings of Mercy 3", "effect": "Enables unit to warp adjacent to any ally with HP ≤ 50%.", "sp": "240", "learn": "4", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "berkut__prideful_prince":
    {   "tag": "berkut__prideful_prince",
        "name": "Berkut",
        "epithet": "Prideful Prince",
        "description": "First in line to the Rigelian throne. Prideful, but loves Rinea with all his heart.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Cavalry",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "3": [ 18, 7, 4, 6, 6 ],
            "4": [ 18, 8, 4, 7, 6 ],
            "5": [ 19, 8, 5, 7, 7 ]
        },
        "growth_points": [ 7, 8, 4, 7, 4 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Berkut's Lance", "mt": "10", "rng": "1", "effect": "Grants Res+4 when the unit is under attack.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Berkut's Lance+", "mt": "14", "rng": "1", "effect": "Grants Res+4 when the unit is under attack.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Flame", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Blazing Flame", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Water Boost 1", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Water Boost 2", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+4 during combat.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Water Boost 3", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+6 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Res 1", "effect": "Grants adjacent allies Res+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Res 2", "effect": "Grants adjacent allies Res+3 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Ward Cavalry", "effect": "Grants cavalry allies within 2 spaces Def/Res+4 during combat.", "sp": "200", "learn": "4", "inherit": "Cavalry Only" }
        ]
    },
    "beruka__quiet_assassin":
    {   "tag": "beruka__quiet_assassin",
        "name": "Beruka",
        "epithet": "Quiet Assassin",
        "description": "Wyvern-riding assassin who seems devoid of emotion. One of Camilla's retainers.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 19, 6, 5, 8, 4 ],
            "4": [ 19, 7, 5, 9, 4 ],
            "5": [ 20, 7, 6, 9, 5 ]
        },
        "growth_points": [ 8, 6, 4, 9, 4 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Killer Axe", "mt": "7", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Killer Axe+", "mt": "11", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Night Sky", "cooldown": "3", "effect": "Grants +50% to damage dealt.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Glimmer", "cooldown": "2", "effect": "Grants +50% to damage dealt.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Defiant Def 1", "effect": "Grants Def+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "Defiant Def 2", "effect": "Grants Def+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "3", "inherit": "None" },
            { "name": "Defiant Def 3", "effect": "Grants Def+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Lunge", "effect": "If unit initiates attack, after combat, unit and targeted foe swap places.", "sp": "150", "learn": "3", "inherit": "Melee Weapon Users Only" }
        ],
        "base_passive_C": []
    },
    "boey__skillful_survivor":
    {   "tag": "boey__skillful_survivor",
        "name": "Boey",
        "epithet": "Skillful Survivor",
        "description": "A mage from Novis who grew up dirt-poor. Of calm demeanor, but not great at magic.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "green_tome",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 18, 7, 4, 8, 4 ],
            "5": [ 19, 7, 5, 8, 5 ]
        },
        "growth_points": [ 7, 6, 6, 7, 2 ],
        "base_weapons":
        [   { "name": "Wind", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Elwind", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Gronnowl", "mt": "6", "rng": "2", "effect": "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Gronnowl+", "mt": "10", "rng": "2", "effect": "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Glowing Ember", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Def.", "sp": "100", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Ignis", "cooldown": "4", "effect": "Boosts damage dealt by 80% of unit's Def.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Earth Boost 1", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Earth Boost 2", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+4 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Earth Boost 3", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+6 during combat.", "sp": "200", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Renewal 1", "effect": "At the start of every fourth turn, restores 10 HP.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Renewal 2", "effect": "At the start of every third turn, restores 10 HP.", "sp": "120", "learn": "4", "inherit": "None" },
            { "name": "Renewal 3", "effect": "At the start of every second turn, restores 10 HP.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "caeda__talyss_heart":
    {   "tag": "caeda__talyss_heart",
        "name": "Caeda",
        "epithet": "Talys's Heart",
        "description": "Princess of Talys who's as talented as she is charming. Marth's betrothed.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 16, 5, 9, 4, 10 ],
            "5": [ 17, 6, 9, 5, 10 ]
        },
        "growth_points": [ 5, 5, 9, 5, 7 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Armorslayer", "mt": "8", "rng": "1", "effect": "Effective against armored units. ", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Armorslayer+", "mt": "12", "rng": "1", "effect": "Effective against armored units. ", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Rally Speed", "rng": "1", "effect": "Grants Spd+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Darting Blow 1", "effect": "Grants Spd+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Darting Blow 2", "effect": "Grants Spd+4 during combat if unit initiates the attack.", "sp": "100", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Darting Blow 3", "effect": "Grants Spd+6 during combat if unit initiates the attack.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Fortify Res 1", "effect": "Grants adjacent allies Res+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Fortify Res 2", "effect": "Grants adjacent allies Res+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Fortify Fliers", "effect": "Grants adjacent flying allies Def/Res+6 through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "Fliers Only" }
        ]
    },
    "caeda__talyss_bride":
    {   "tag": "caeda__talyss_bride",
        "name": "Caeda",
        "epithet": "Talys's Bride",
        "subname": "💐",
        "description": "The charming princess of Talys. Has grand dreams of being a bride.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "blue_tome",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 7, 9, 4, 8 ]
        },
        "growth_points": [ 4, 6, 9, 3, 6 ],
        "base_weapons":
        [   { "name": "Thunder", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elthunder", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Blessed Bouquet", "mt": "8", "rng": "2", "effect": "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Blessed Bouquet+", "mt": "12", "rng": "2", "effect": "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Chilling Wind", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Iceberg", "cooldown": "3", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Resistance +1", "effect": "Grants Res+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Attack Res 1", "effect": "Grants Atk/Res+1.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Attack Res 2", "effect": "Grants Atk/Res+2.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Hone Spd 1", "effect": "Grants adjacent allies Spd+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Hone Spd 2", "effect": "Grants adjacent allies Spd+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Hone Spd 3", "effect": "Grants adjacent allies Spd+4 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "cain__the_bull":
    {   "tag": "cain__the_bull",
        "name": "Cain",
        "epithet": "The Bull",
        "description": "Altean cavalier known for recklessness. Rode with Abel in service of Marth.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 17, 8, 5, 8, 5 ],
            "5": [ 18, 8, 6, 8, 6 ]
        },
        "growth_points": [ 7, 7, 8, 5, 3 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Brave Sword", "mt": "5", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Brave Sword+", "mt": "8", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Buckler", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from adjacent foes by 30%.", "sp": "100", "known": "4", "learn": "-", "inherit": "ONLY_MELEE" },
            { "name": "Escutcheon", "cooldown": "2", "effect": "Reduces damage inflicted by attacks from adjacent foes by 30%.", "sp": "200", "known": "-", "learn": "4", "inherit": "ONLY_MELEE" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Wings of Mercy 1", "effect": "Enables unit to warp adjacent to any ally with HP ≤ 30%.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Wings of Mercy 2", "effect": "Enables unit to warp adjacent to any ally with HP ≤ 40%.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Wings of Mercy 3", "effect": "Enables unit to warp adjacent to any ally with HP ≤ 50%.", "sp": "240", "learn": "4", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Threaten Atk 1", "effect": "Inflicts Atk-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Threaten Atk 2", "effect": "Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Threaten Atk 3", "effect": "Inflicts Atk-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "camilla__bewitching_beauty":
    {   "tag": "camilla__bewitching_beauty",
        "name": "Camilla",
        "epithet": "Bewitching Beauty",
        "description": "Princess of Nohr who dotes on her sibling Corrin and is merciless to foes.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 17, 8, 8, 5, 6 ],
            "5": [ 18, 8, 8, 6, 7 ]
        },
        "growth_points": [ 5, 6, 7, 6, 7 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Brave Axe", "mt": "5", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Brave Axe+", "mt": "8", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Dragon Gaze", "cooldown": "4", "effect": "Grants +30% to Atk.", "sp": "100", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Draconic Aura", "cooldown": "3", "effect": "Grants +30% to Atk.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Darting Blow 1", "effect": "Grants Spd+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Darting Blow 2", "effect": "Grants Spd+4 during combat if unit initiates the attack.", "sp": "100", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Darting Blow 3", "effect": "Grants Spd+6 during combat if unit initiates the attack.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Savage Blow 1", "effect": "If unit initiates attack, foes within 2 spaces of target take 3 damage after combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Savage Blow 2", "effect": "If unit initiates attack, foes within 2 spaces of target take 5 damage after combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Savage Blow 3", "effect": "If unit initiates attack, foes within 2 spaces of target take 7 damage after combat.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "camilla__spring_princess":
    {   "tag": "camilla__spring_princess",
        "name": "Camilla",
        "epithet": "Spring Princess",
        "subname": "🐇",
        "description": "Princess of Nohr who dotes on her sibling Corrin. Loves her new outfit ever since Corrin said it was cute.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "green_tome",
        "colour": "green",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 9, 6, 8, 4 ]
        },
        "growth_points": [ 6, 8, 5, 6, 3 ],
        "base_weapons":
        [   { "name": "Wind", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Elwind", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Green Egg", "mt": "7", "rng": "2", "effect": "If unit initiates attack, unit recovers 4 HP after the battle.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Green Egg+", "mt": "11", "rng": "2", "effect": "If unit initiates attack, unit recovers 4 HP after the battle.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Rally Attack", "rng": "1", "effect": "Grants Atk+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Defiant Spd 1", "effect": "Grants Spd+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "Defiant Spd 2", "effect": "Grants Spd+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Defiant Spd 3", "effect": "Grants Spd+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Live for Bounty", "effect": "If unit survives, get 1.5x shards/crystals from a Training Tower map. (If similar skill effects also used, only highest multiplier applied.)", "sp": "100", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "camilla__holiday_traveler":
    {   "tag": "camilla__holiday_traveler",
        "name": "Camilla",
        "epithet": "Holiday Traveler",
        "subname": "🎉",
        "description": "A princess of Nohr who dotes on her sibling Corrin and is trying to learn about Hoshidan culture through fashion.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 18, 9, 9, 7, 4 ]
        },
        "growth_points": [ 6, 7, 8, 7, 5 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Kadomatsu", "mt": "10", "rng": "1", "effect": "Grants Def/Res+2 during combat to allies within 2 spaces.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Kadomatsu+", "mt": "14", "rng": "1", "effect": "Grants Def/Res+2 during combat to allies within 2 spaces.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Dragon Gaze", "cooldown": "4", "effect": "Grants +30% to Atk.", "sp": "100", "known": "-", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Draconic Aura", "cooldown": "3", "effect": "Grants +30% to Atk.", "sp": "200", "known": "-", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Spd Def Bond 1", "effect": "Grants Spd/Def+3 to this unit during combat if unit is adjacent to an ally.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Spd Def Bond 2", "effect": "Grants Spd/Def+4 to this unit during combat if unit is adjacent to an ally.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Spd Def Bond 3", "effect": "Grants Spd/Def+5 to this unit during combat if unit is adjacent to an ally.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Def 1", "effect": "Grants adjacent allies Def+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Def 2", "effect": "Grants adjacent allies Def+3 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Ward Fliers", "effect": "Grants flying allies within 2 spaces Def/Res+4 during combat.", "sp": "200", "learn": "5", "inherit": "Fliers Only" }
        ]
    },
    "camus__sable_knight":
    {   "tag": "camus__sable_knight",
        "name": "Camus",
        "epithet": "Sable Knight",
        "description": "A knight who's devoted to his motherland, Grust. Wields the lance Gradivus.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Cavalry",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "3": [ 17, 7, 8, 6, 3 ],
            "4": [ 17, 8, 9, 6, 3 ],
            "5": [ 18, 8, 9, 7, 4 ]
        },
        "growth_points": [ 7, 7, 7, 7, 2 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Silver Lance", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Gradivus", "mt": "16", "rng": "1", "effect": "Enables counterattack regardless of distance if this unit is attacked.", "sp": "400", "known": "-", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Thunder", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Growing Thunder", "cooldown": "4", "effect": "Before combat this unit initiates, foes in a wide area around target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Grani's Shield", "effect": "Neutralizes \"effective against\" bonuses.", "sp": "200", "learn": "4", "inherit": "Cavalry Only" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Atk 1", "effect": "Grants adjacent allies Atk+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Atk 2", "effect": "Grants adjacent allies Atk+3 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Goad Cavalry", "effect": "Grants cavalry allies within 2 spaces Spd/Atk+4 during combat.", "sp": "200", "learn": "4", "inherit": "Cavalry Only" }
        ]
    },
    "catria__middle_whitewing":
    {   "tag": "catria__middle_whitewing",
        "name": "Catria",
        "epithet": "Middle Whitewing",
        "description": "The middle of three sisters who are pegasus knights for Macedon.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 16, 6, 9, 6, 5 ],
            "4": [ 16, 7, 10, 6, 5 ],
            "5": [ 17, 7, 10, 7, 6 ]
        },
        "growth_points": [ 6, 7, 7, 6, 5 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Killer Lance", "mt": "7", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Killer Lance+", "mt": "11", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Luna", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-50%.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Armored Blow 1", "effect": "Grants Def+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Armored Blow 2", "effect": "Grants Def+4 during combat if unit initiates the attack.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Armored Blow 3", "effect": "Grants Def+6 during combat if unit initiates the attack.", "sp": "200", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Seal Atk 1", "effect": "After combat, foe suffers Atk-3 through its next action.", "sp": "40", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Atk 2", "effect": "After combat, foe suffers Atk-5 through its next action.", "sp": "80", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Seal Atk 3", "effect": "After combat, foe suffers Atk-7 through its next action.", "sp": "160", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C": []
    },
    "cecilia__etrurian_general":
    {   "tag": "cecilia__etrurian_general",
        "name": "Cecilia",
        "epithet": "Etrurian General",
        "description": "Mage General of Etruria. Taught Roy and Lilina when they were young.",
        "origin": "Fire Emblem: The Binding Blade",
        "weapon_type": "green_tome",
        "colour": "green",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "1": [ 15, 6, 4, 3, 5 ],
            "2": [ 15, 7, 4, 3, 6 ],
            "3": [ 16, 7, 5, 4, 6 ],
            "4": [ 16, 8, 5, 4, 7 ],
            "5": [ 17, 8, 6, 5, 7 ]
        },
        "growth_points": [ 5, 7, 5, 4, 6 ],
        "base_weapons":
        [   { "name": "Wind", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "1", "learn": "-" },
            { "name": "Elwind", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Gronnraven", "mt": "7", "rng": "2", "effect": "Grants weapon advantage vs. colorless foes.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Gronnraven+", "mt": "11", "rng": "2", "effect": "Grants weapon advantage vs. colorless foes.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Rally Resistance", "rng": "1", "effect": "Grants Res+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Attack +1", "effect": "Grants Atk+1.", "sp": "30", "learn": "3", "inherit": "None" },
            { "name": "Attack +2", "effect": "Grants Atk+2.", "sp": "60", "learn": "4", "inherit": "None" },
            { "name": "Attack +3", "effect": "Grants Atk+3.", "sp": "120", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Escape Route 1", "effect": "Enables unit whose own HP is ≤ 30% to warp adjacent to any ally.", "sp": "60", "learn": "1", "inherit": "None" },
            { "name": "Escape Route 2", "effect": "Enables unit whose own HP is ≤ 40% to warp adjacent to any ally.", "sp": "120", "learn": "2", "inherit": "None" },
            { "name": "Escape Route 3", "effect": "Enables unit whose own HP is ≤ 50% to warp adjacent to any ally.", "sp": "240", "learn": "4", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "celica__caring_princess":
    {   "tag": "celica__caring_princess",
        "name": "Celica",
        "epithet": "Caring Princess",
        "description": "The princess of Zofia; trained as a priestess. Caring towards others, and dislikes fighting. Bears the Brand on her right hand.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "red_tome",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 8, 7, 5, 7 ]
        },
        "growth_points": [ 6, 7, 8, 4, 3 ],
        "base_weapons":
        [   { "name": "Fire", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elfire", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Bolganone", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Ragnarok", "mt": "14", "rng": "2", "effect": "If unit has 100% HP at the start of combat, unit receives Atk/Spd +5. If attacking, unit will receive 5 damage after combat.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Light", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Blazing Light", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Distant Def 1", "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+2 during combat.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Distant Def 2", "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+4 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Distant Def 3", "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+6 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Def 1", "effect": "Grants adjacent allies Def+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Def 2", "effect": "Grants adjacent allies Def+3 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Spur Def 3", "effect": "Grants adjacent allies Def+4 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "charlotte__money_maiden":
    {   "tag": "charlotte__money_maiden",
        "name": "Charlotte",
        "epithet": "Money Maiden",
        "subname": "💐",
        "description": "Nohrian border guard always on patrol, whether to find enemies to fight or a rich fellow to marry.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 20, 10, 8, 5, 4 ]
        },
        "growth_points": [ 8, 8, 7, 5, 3 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "First Bite", "mt": "10", "rng": "1", "effect": "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "First Bite+", "mt": "14", "rng": "1", "effect": "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Smite", "rng": "1", "effect": "Push adjacent ally 2 spaces farther away.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Wind Boost 1", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Spd+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Wind Boost 2", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Spd+4 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Wind Boost 3", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Spd+6 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Threaten Atk 1", "effect": "Inflicts Atk-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Threaten Atk 2", "effect": "Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Threaten Atk 3", "effect": "Inflicts Atk-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "cherche__wyvern_friend":
    {   "tag": "cherche__wyvern_friend",
        "name": "Cherche",
        "epithet": "Wyvern Friend",
        "description": "Wyvern-riding fighter in Virion's noble house. Thinks her wyvern Minerva is adorable.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 19, 9, 5, 7, 2 ],
            "4": [ 19, 10, 5, 8, 2 ],
            "5": [ 20, 10, 6, 8, 3 ]
        },
        "growth_points": [ 8, 9, 5, 7, 2 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Hammer", "mt": "8", "rng": "1", "effect": "Effective against armored units. ", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Hammer+", "mt": "12", "rng": "1", "effect": "Effective against armored units. ", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Pivot", "rng": "1", "effect": "Unit moves to opposite side of adjacent ally.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Attack +1", "effect": "Grants Atk+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Attack +2", "effect": "Grants Atk+2.", "sp": "60", "learn": "3", "inherit": "None" },
            { "name": "Attack +3", "effect": "Grants Atk+3.", "sp": "120", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Fortify Def 1", "effect": "Grants adjacent allies Def+2 through their next actions at the start of each turn.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Fortify Def 2", "effect": "Grants adjacent allies Def+3 through their next actions at the start of each turn.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Fortify Def 3", "effect": "Grants adjacent allies Def+4 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "chrom__exalted_prince":
    {   "tag": "chrom__exalted_prince",
        "name": "Chrom",
        "epithet": "Exalted Prince",
        "description": "A prince of Ylisse and descendant of the Hero-King. Leads the Shepherds.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 20, 9, 5, 7, 3 ],
            "5": [ 21, 9, 6, 7, 4 ]
        },
        "growth_points": [ 8, 9, 5, 7, 2 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Falchion", "mt": "16", "rng": "1", "effect": "Effective against dragons.  At the start of every third turn, unit recovers 10 HP.", "sp": "400", "known": "5", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Daylight", "cooldown": "3", "effect": "Heal 30% of damage dealt.", "sp": "100", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Sol", "cooldown": "3", "effect": "Heal 50% of damage dealt.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" },
            { "name": "Aether", "cooldown": "5", "effect": "Resolve combat as if foe suffered Def/Res-50%. Unit recovers HP=half damage dealt.", "sp": "500", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Defiant Def 1", "effect": "Grants Def+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "Defiant Def 2", "effect": "Grants Def+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Defiant Def 3", "effect": "Grants Def+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Def 1", "effect": "Grants adjacent allies Def+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Def 2", "effect": "Grants adjacent allies Def+3 during combat.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Spur Def 3", "effect": "Grants adjacent allies Def+4 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "chrom__spring_exalt":
    {   "tag": "chrom__spring_exalt",
        "name": "Chrom",
        "epithet": "Spring Exalt",
        "subname": "🐇",
        "description": "A prince of Ylisse and descendant of the Hero-King. Dressed to celebrate the spring festival.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 19, 9, 8, 6, 5 ]
        },
        "growth_points": [ 7, 8, 7, 6, 3 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Carrot Axe", "mt": "9", "rng": "1", "effect": "If unit initiates attack, unit recovers 4 HP after the battle.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Carrot Axe+", "mt": "13", "rng": "1", "effect": "If unit initiates attack, unit recovers 4 HP after the battle.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Shove", "rng": "1", "effect": "Push adjacent ally 1 space farther away.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Defense +1", "effect": "Grants Def+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Attack Def +1", "effect": "Grants Atk/Def+1.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Attack Def +2", "effect": "Grants Atk/Def+2.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Axe Experience 1", "effect": "If unit survives, unit gets 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "30", "learn": "-", "inherit": "Axe Users Only" },
            { "name": "Axe Experience 2", "effect": "If unit survives, all axe users on team get 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "60", "learn": "-", "inherit": "Axe Users Only" },
            { "name": "Axe Experience 3", "effect": "If unit survives, all axe users on team get 2x EXP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "120", "learn": "5", "inherit": "Axe Users Only" }
        ]
    },
    "chrom__gifted_leader":
    {   "tag": "chrom__gifted_leader",
        "name": "Chrom",
        "epithet": "Gifted Leader",
        "subname": "🎄",
        "description": "A prince of Ylisse and descendant of the Hero-King. He was summoned in the middle of a party for a winter festival.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Armored",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 25, 12, 4, 9, 5 ]
        },
        "growth_points": [ 8, 9, 3, 8, 7 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Sack o' Gifts", "mt": "10", "rng": "1", "effect": "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Sack o' Gifts+", "mt": "14", "rng": "1", "effect": "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Pivot", "rng": "1", "effect": "Unit moves to opposite side of adjacent ally.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Brazen Atk Def 1", "effect": "If unit's HP ≤ 80% at the start of combat, grants Atk/Def+3 during combat.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Brazen Atk Def 2", "effect": "If unit's HP ≤ 80% at the start of combat, grants Atk/Def+5 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Brazen Atk Def 3", "effect": "If unit's HP ≤ 80% at the start of combat, grants Atk/Def+7 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Wary Fighter 1", "effect": "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 90%.", "sp": "60", "learn": "-", "inherit": "Armored Only" },
            { "name": "Wary Fighter 2", "effect": "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 70%.", "sp": "120", "learn": "-", "inherit": "Armored Only" },
            { "name": "Wary Fighter 3", "effect": "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 50%.", "sp": "240", "learn": "5", "inherit": "Armored Only" }
        ],
        "base_passive_C": []
    },
    "clair__highborn_flier":
    {   "tag": "clair__highborn_flier",
        "name": "Clair",
        "epithet": "Highborn Flier",
        "description": "A pegasus knight with the Deliverance. Clive's younger sister. Secretly loves Alm.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 17, 6, 8, 4, 9 ],
            "5": [ 18, 7, 8, 5, 9 ]
        },
        "growth_points": [ 5, 5, 9, 5, 7 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Lance", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Silver Lance+", "mt": "15", "rng": "1", "effect": "-", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Harsh Command", "rng": "1", "effect": "Converts penalties on target into bonuses.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Hit and Run", "effect": "If unit initiates attack, unit retreats 1 space after battle.", "sp": "150", "learn": "4", "inherit": "Melee Weapon Users Only" }
        ],
        "base_passive_C":
        [   { "name": "Spur Spd 1", "effect": "Grants adjacent allies Spd+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Spd 2", "effect": "Grants adjacent allies Spd+3 during combat.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Spur Spd 3", "effect": "Grants adjacent allies Spd+4 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "clarine__refined_noble":
    {   "tag": "clarine__refined_noble",
        "name": "Clarine",
        "epithet": "Refined Noble",
        "description": "Noble daughter of Count Reglay of Etruria. Fond of her brother, Klein. Has lived a privileged life.",
        "origin": "Fire Emblem: The Binding Blade",
        "weapon_type": "colorless_staff",
        "colour": "colorless",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 15, 5, 8, 4, 6 ],
            "4": [ 15, 5, 9, 4, 7 ],
            "5": [ 16, 6, 9, 5, 7 ]
        },
        "growth_points": [ 5, 5, 7, 4, 6 ],
        "base_weapons":
        [   { "name": "Assault", "mt": "10", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Fear", "mt": "5", "rng": "2", "effect": "After combat, if unit attacked, inflicts Atk-6 on foe through its next action.", "sp": "150", "known": "-", "learn": "3" },
            { "name": "Fear+", "mt": "12", "rng": "2", "effect": "After combat, if unit attacked, inflicts Atk-7 on target and foes within 2 spaces of target through their next actions.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Heal", "rng": "1", "effect": "Restores 5 HP.", "sp": "-", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Reconcile", "rng": "1", "effect": "Restores 7 HP each to target and this unit.", "sp": "100", "known": "3", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Martyr", "rng": "1", "effect": "Restores HP=7+ this unit's suffered damage. Unit heals HP=half suffered damage. Slows Special trigger (cooldown count+1).", "sp": "200", "known": "5", "learn": "4", "inherit": "ONLY_STAFF" },
            { "name": "Martyr+", "rng": "1", "effect": "Restores HP = this unit's suffered damage +50% of Atk. (Minimum of 7 HP.) Also restores HP to unit = half suffered damage.", "sp": "300", "known": "-", "learn": "5", "inherit": "ONLY_STAFF" }
        ],
        "base_special":
        [   { "name": "Imbue", "cooldown": "1", "effect": "When healing an ally with a staff, increases recovered HP by 10.", "sp": "50", "known": "3", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Swift-Winds Balm", "cooldown": "1", "effect": "When healing an ally with a staff, grants all allies Spd+4 for 1 turn.", "sp": "150", "known": "5", "learn": "3", "inherit": "ONLY_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Resistance +1", "effect": "Grants Res+1.", "sp": "30", "learn": "3", "inherit": "None" },
            { "name": "Resistance +2", "effect": "Grants Res+2.", "sp": "60", "learn": "4", "inherit": "None" },
            { "name": "Resistance +3", "effect": "Grants Res+3.", "sp": "120", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C": []
    },
    "clarisse__sniper_in_the_dark":
    {   "tag": "clarisse__sniper_in_the_dark",
        "name": "Clarisse",
        "epithet": "Sniper in the Dark",
        "description": "One of a group of assassins plotting to kill Marth. Katarina's friend. Cruel and lacks manners, but yearns for a family.",
        "origin": "Fire Emblem: New Mystery of the Emblem",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "3": [ 17, 6, 7, 5, 4 ],
            "4": [ 17, 7, 8, 5, 4 ],
            "5": [ 18, 7, 8, 6, 5 ]
        },
        "growth_points": [ 5, 7, 8, 5, 3 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Clarisse's Bow", "mt": "7", "rng": "2", "effect": "After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next actions. Effective against flying units. ", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Clarisse's Bow+", "mt": "11", "rng": "2", "effect": "After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next actions. Effective against flying units. ", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Night Sky", "cooldown": "3", "effect": "Grants +50% to damage dealt.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Glimmer", "cooldown": "2", "effect": "Grants +50% to damage dealt.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Poison Strike 1", "effect": "Inflicts 4 damage to foe after any combat this unit initiates.", "sp": "60", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Poison Strike 2", "effect": "Inflicts 7 damage to foe after any combat this unit initiates.", "sp": "120", "learn": "3", "inherit": "Excludes Staff Users" },
            { "name": "Poison Strike 3", "effect": "Inflicts 10 damage to foe after any combat this unit initiates.", "sp": "240", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C":
        [   { "name": "Threaten Def 1", "effect": "Inflicts Def-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Threaten Def 2", "effect": "Inflicts Def-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Threaten Def 3", "effect": "Inflicts Def-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "clive__idealistic_knight":
    {   "tag": "clive__idealistic_knight",
        "name": "Clive",
        "epithet": "Idealistic Knight",
        "description": "Former leader of the Deliverance and Clair's brother. Idealistic and focused on the good of the kingdom.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Cavalry",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "4": [ 18, 9, 5, 8, 3 ],
            "5": [ 19, 9, 6, 8, 4 ]
        },
        "growth_points": [ 8, 7, 5, 7, 3 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Lance", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Silver Lance+", "mt": "15", "rng": "1", "effect": "-", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Buckler", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from adjacent foes by 30%.", "sp": "100", "known": "4", "learn": "-", "inherit": "ONLY_MELEE" },
            { "name": "Escutcheon", "cooldown": "2", "effect": "Reduces damage inflicted by attacks from adjacent foes by 30%.", "sp": "200", "known": "-", "learn": "4", "inherit": "ONLY_MELEE" }
        ],
        "base_passive_A":
        [   { "name": "Defense +1", "effect": "Grants Def+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Defense +2", "effect": "Grants Def+2.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Defense +3", "effect": "Grants Def+3.", "sp": "120", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Hit and Run", "effect": "If unit initiates attack, unit retreats 1 space after battle.", "sp": "150", "learn": "4", "inherit": "Melee Weapon Users Only" }
        ],
        "base_passive_C": []
    },
    "cordelia__knight_paragon":
    {   "tag": "cordelia__knight_paragon",
        "name": "Cordelia",
        "epithet": "Knight Paragon",
        "description": "The sole survivor of Ylisse's pegasus knights. Humble and supremely talented.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 17, 9, 9, 4, 5 ],
            "5": [ 18, 9, 9, 5, 6 ]
        },
        "growth_points": [ 6, 8, 8, 4, 5 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Brave Lance", "mt": "5", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Brave Lance+", "mt": "8", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Night Sky", "cooldown": "3", "effect": "Grants +50% to damage dealt.", "sp": "100", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Astra", "cooldown": "4", "effect": "Grants +150% to damage dealt.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" },
            { "name": "Galeforce", "cooldown": "5", "effect": "If this unit initiates an attack, it can take another action after combat. (Once per turn only.)", "sp": "500", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Triangle Adept 1", "effect": "Gives Atk+10% if weapon-triangle advantage, Atk-10% if disadvantage.", "sp": "50", "learn": "-", "inherit": "Excludes Colorless Weapon Users" },
            { "name": "Triangle Adept 2", "effect": "Gives Atk+15% if weapon-triangle advantage, Atk-15% if disadvantage.", "sp": "100", "learn": "4", "inherit": "Excludes Colorless Weapon Users" },
            { "name": "Triangle Adept 3", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "200", "learn": "5", "inherit": "Excludes Colorless Weapon Users" }
        ],
        "base_passive_B":
        [   { "name": "Pass 1", "effect": "Units can pass through foes if its own HP ≥ 75%.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Pass 2", "effect": "Units can pass through foes if its own HP ≥ 50%.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Pass 3", "effect": "Units can pass through foes if its own HP ≥ 25%.", "sp": "200", "learn": "4", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "cordelia__perfect_bride":
    {   "tag": "cordelia__perfect_bride",
        "name": "Cordelia",
        "epithet": "Perfect Bride",
        "subname": "💐",
        "description": "Pegasus knight of Ylisse who excels in all things, including being delightful. Hopes to marry her perfect match.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 9, 9, 4, 5 ]
        },
        "growth_points": [ 5, 8, 8, 3, 4 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Cupid Arrow", "mt": "8", "rng": "2", "effect": "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates. Effective against fliers. ", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Cupid Arrow+", "mt": "12", "rng": "2", "effect": "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates. Effective against fliers. ", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Rally Attack", "rng": "1", "effect": "Grants Atk+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Rally Attack Speed", "rng": "1", "effect": "Grants Atk/Spd+3 to an adjacent ally until the end of the turn.", "sp": "300", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Escape Route 1", "effect": "Enables unit whose own HP is ≤ 30% to warp adjacent to any ally.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Escape Route 2", "effect": "Enables unit whose own HP is ≤ 40% to warp adjacent to any ally.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Escape Route 3", "effect": "Enables unit whose own HP is ≤ 50% to warp adjacent to any ally.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Breath of Life 1", "effect": "If unit initiates attack, adjacent allies recover 3 HP after combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Breath of Life 2", "effect": "If unit initiates attack, adjacent allies recover 5 HP after combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Breath of Life 3", "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "corrin__fateful_princess":
    {   "tag": "corrin__fateful_princess",
        "name": "Corrin",
        "epithet": "Fateful Princess",
        "subname": "🐉",
        "description": "A Hoshidan princess raised in Nohr. Fights on her chosen path with the divine blade Yato.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "blue_dragonstone",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 18, 7, 5, 7, 5 ],
            "4": [ 18, 8, 5, 8, 5 ],
            "5": [ 19, 8, 6, 8, 6 ]
        },
        "growth_points": [ 6, 5, 9, 8, 3 ],
        "base_weapons":
        [   { "name": "Fire Breath", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Fire Breath+", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Dark Breath", "mt": "9", "rng": "1", "effect": "After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next actions.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Dark Breath+", "mt": "13", "rng": "1", "effect": "After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next actions.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Dragon Gaze", "cooldown": "4", "effect": "Grants +30% to Atk.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Draconic Aura", "cooldown": "3", "effect": "Grants +30% to Atk.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Seal Res 1", "effect": "After combat, foe suffers Res-3 through its next action.", "sp": "40", "learn": "3", "inherit": "Excludes Staff Users" },
            { "name": "Seal Res 2", "effect": "After combat, foe suffers Res-5 through its next action.", "sp": "80", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Seal Res 3", "effect": "After combat, foe suffers Res-7 through its next action.", "sp": "160", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C":
        [   { "name": "Hone Atk 1", "effect": "Grants adjacent allies Atk+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Hone Atk 2", "effect": "Grants adjacent allies Atk+3 through their next actions at the start of each turn.", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Hone Atk 3", "effect": "Grants adjacent allies Atk+4 through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "corrin__fateful_prince":
    {   "tag": "corrin__fateful_prince",
        "name": "Corrin",
        "epithet": "Fateful Prince",
        "subname": "🌽",
        "description": "A Hoshidan prince raised in Nohr. Fights on his chosen path with the divine blade Yato.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 19, 8, 8, 5, 4 ],
            "5": [ 20, 8, 8, 6, 5 ]
        },
        "growth_points": [ 6, 7, 7, 6, 5 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Yato", "mt": "16", "rng": "1", "effect": "Grants Spd+4 during combat if unit initiates attack.", "sp": "400", "known": "5", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Dragon Gaze", "cooldown": "4", "effect": "Grants +30% to Atk.", "sp": "100", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Dragon Fang", "cooldown": "4", "effect": "Grants +50% to Atk.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Defense +1", "effect": "Grants Def+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Defense +2", "effect": "Grants Def+2.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Defense +3", "effect": "Grants Def+3.", "sp": "120", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Obstruct 1", "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 90%. (No effect on foes with a Pass skill.)", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Obstruct 2", "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 70%. (No effect on foes with a Pass skill.)", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Obstruct 3", "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 50%. (No effect on foes with a Pass skill.)", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "corrin__novice_vacationer":
    {   "tag": "corrin__novice_vacationer",
        "name": "Corrin",
        "epithet": "Novice Vacationer",
        "subname": "🐠",
        "description": "A Hoshidan princess raised in Nohr. She won a ticket to a tropical island in a lottery.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "blue_tome",
        "colour": "blue",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 7, 8, 5, 7 ]
        },
        "growth_points": [ 4, 7, 8, 4, 5 ],
        "base_weapons":
        [   { "name": "Thunder", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elthunder", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Sealife Tome", "mt": "8", "rng": "2", "effect": "Grants allies within 2 spaces Atk/Spd+1 during combat.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Sealife Tome+", "mt": "12", "rng": "2", "effect": "Grants allies within 2 spaces Atk/Spd+1 during combat.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Dragon Gaze", "cooldown": "4", "effect": "Grants +30% to Atk.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Dragon Fang", "cooldown": "4", "effect": "Grants +50% to Atk.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Darting Blow 1", "effect": "Grants Spd+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Swift Strike 1", "effect": "If unit initiates combat, unit granted Spd/Res+2 during battle.", "sp": "120", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Swift Strike 2", "effect": "If unit initiates combat, unit granted Spd/Res+4 during battle.", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Fortify Res 1", "effect": "Grants adjacent allies Res+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Fortify Res 2", "effect": "Grants adjacent allies Res+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Fortify Fliers", "effect": "Grants adjacent flying allies Def/Res+6 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "Fliers Only" }
        ]
    },
    "corrin__enjoying_tradition":
    {   "tag": "corrin__enjoying_tradition",
        "name": "Corrin",
        "epithet": "Enjoying Tradition",
        "subname": "🎉",
        "description": "A Hoshidan prince raised in Nohr. His kimono was prepared by Mikoto while she was still alive.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "4": [ 17, 8, 8, 5, 4 ],
            "5": [ 18, 8, 8, 6, 5 ]
        },
        "growth_points": [ 5, 7, 6, 9, 2 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Hama Ya", "mt": "8", "rng": "2", "effect": "Effective against flying foes . Grants Def/Res+2 during combat to allies within 2 spaces.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Hama Ya+", "mt": "12", "rng": "2", "effect": "Effective against flying foes . Grants Def/Res+2 during combat to allies within 2 spaces.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Rally Defense", "rng": "1", "effect": "Grants Def+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Rally Defense Resistance", "rng": "1", "effect": "Grants Def/Res+3 to an adjacent ally until the end of the turn.", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Defense +1", "effect": "Grants Def+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Attack Def +1", "effect": "Grants Atk/Def+1.", "sp": "80", "learn": "4", "inherit": "None" },
            { "name": "Attack Def +2", "effect": "Grants Atk/Def+2.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Def 1", "effect": "Grants adjacent allies Def+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Def Res 1", "effect": "Grants adjacent allies Def/Res +2 during combat", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Spur Def Res 2", "effect": "Grants adjacent allies Def/Res +3 during combat.", "sp": "240", "learn": "4", "inherit": "None" }
        ]
    },
    "deirdre__lady_of_the_forest":
    {   "tag": "deirdre__lady_of_the_forest",
        "name": "Deirdre",
        "epithet": "Lady of the Forest",
        "description": "She lives hidden away in the Spirit Forest. She lost the memories of her past.",
        "origin": "Fire Emblem: Genealogy of the Holy War",
        "weapon_type": "green_tome",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 9, 6, 3, 9 ]
        },
        "growth_points": [ 5, 7, 6, 2, 8 ],
        "base_weapons":
        [   { "name": "Wind", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Elwind", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Rexcalibur", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "-", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Ardent Sacrifice", "rng": "1", "effect": "Heals adjacent ally 10 HP. Unit loses 10 HP (but cannot reach 0 this way).", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Quick Riposte 1", "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 90%.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Quick Riposte 2", "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 80%.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Quick Riposte 3", "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 70%.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Spd Ploy 1", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Spd-3 until the end of foe's next action.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Spd Ploy 2", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Spd-4 until the end of foe's next action.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Spd Ploy 3", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Spd-5 until the end of foe's next action.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "delthea__free_spirit":
    {   "tag": "delthea__free_spirit",
        "name": "Delthea",
        "epithet": "Free Spirit",
        "description": "A naturally talented mage who hates training and hard work. Has a brother, Luthier.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "blue_tome",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 10, 8, 3, 7 ]
        },
        "growth_points": [ 4, 8, 8, 1, 7 ],
        "base_weapons":
        [   { "name": "Thunder", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elthunder", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Thoron", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Dark Aura", "mt": "14", "rng": "2", "effect": "Grants adjacent allies who use swords, axes, lances, or dragonstones Atk+6 through their next actions at the start of each turn.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Death Blow 1", "effect": "Grants Atk+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Death Blow 2", "effect": "Grants Atk+4 during combat if unit initiates the attack.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Death Blow 3", "effect": "Grants Atk+6 during combat if unit initiates the attack.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Atk 1", "effect": "Grants adjacent allies Atk+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Drive Atk 1", "effect": "Grants allies within 2 spaces Atk+2 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Drive Atk 2", "effect": "Grants allies within 2 spaces Atk+3 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "donnel__village_hero":
    {   "tag": "donnel__village_hero",
        "name": "Donnel",
        "epithet": "Village Hero",
        "description": "A farm boy from a country village in the Halidom of Ylisse. Handy and hardy.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "1": [ 15, 5, 3, 4, 2 ],
            "2": [ 15, 6, 3, 5, 2 ],
            "3": [ 16, 6, 4, 5, 3 ],
            "4": [ 16, 7, 4, 6, 3 ],
            "5": [ 17, 7, 5, 6, 4 ]
        },
        "growth_points": [ 8, 9, 7, 8, 5 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "1", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Brave Lance", "mt": "5", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Brave Lance+", "mt": "8", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Reciprocal Aid", "rng": "1", "effect": "Swap HP with adjacent ally (neither unit can go above their max HP).", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "HP +3", "effect": "Grants +3 to max HP.", "sp": "40", "learn": "1", "inherit": "None" },
            { "name": "HP +4", "effect": "Grants +4 to max HP.", "sp": "80", "learn": "2", "inherit": "None" },
            { "name": "HP +5", "effect": "Grants +5 to max HP.", "sp": "160", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Drag Back", "effect": "If unit initiates attack, the unit moves 1 space away after combat. Foe moves into unit's previous space.", "sp": "150", "learn": "3", "inherit": "Melee Weapon Users Only" }
        ],
        "base_passive_C": []
    },
    "dorcas__serene_warrior":
    {   "tag": "dorcas__serene_warrior",
        "name": "Dorcas",
        "epithet": "Serene Warrior",
        "description": "A mercenary trying to earn money for his ill wife's treatment. Doesn't talk much and isn't expressive, but loves his family dearly.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 19, 9, 6, 9, 5 ]
        },
        "growth_points": [ 8, 8, 4, 8, 5 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Axe", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Stout Tomahawk", "mt": "16", "rng": "1", "effect": "Enables counterattack regardless of distance if this unit is attacked.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Dragon Gaze", "cooldown": "4", "effect": "Grants +30% to Atk.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Draconic Aura", "cooldown": "3", "effect": "Grants +30% to Atk.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Fierce Stance 1", "effect": "Grants Atk+2 during combat when this unit is attacked.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Fierce Stance 2", "effect": "Grants Atk+4 during combat when this unit is attacked.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Fierce Stance 3", "effect": "Grants Atk+6 during combat when this unit is attacked.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Quick Riposte 1", "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 90%.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Quick Riposte 2", "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 80%.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Quick Riposte 3", "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 70%.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Infantry Pulse 1", "effect": "Special cooldown count-1 at start of turn 1 for any Infantry allies with at least 5 fewer HP than unit. (Effects will stack with similar skills.)", "sp": "60", "learn": "-", "inherit": "Infantry Only" },
            { "name": "Infantry Pulse 2", "effect": "Special cooldown count-1 at start of turn 1 for any Infantry allies with at least 3 fewer HP than unit. (Effects will stack with similar skills.)", "sp": "120", "learn": "-", "inherit": "Infantry Only" },
            { "name": "Infantry Pulse 3", "effect": "Special cooldown count-1 at start of turn 1 for any Infantry allies with at least 1 fewer HP than unit. (Effects will stack with similar skills.)", "sp": "240", "learn": "5", "inherit": "Infantry Only" }
        ]
    },
    "draug__gentle_giant":
    {   "tag": "draug__gentle_giant",
        "name": "Draug",
        "epithet": "Gentle Giant",
        "description": "An armored knight of Altea who served as Marth's shield. Very sincere.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Armored",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "2": [ 22, 7, 4, 12, 1 ],
            "3": [ 23, 7, 5, 12, 2 ],
            "4": [ 23, 8, 5, 13, 2 ],
            "5": [ 24, 8, 6, 13, 3 ]
        },
        "growth_points": [ 8, 6, 8, 8, 3 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "2", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Brave Sword", "mt": "5", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Brave Sword+", "mt": "8", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Buckler", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from adjacent foes by 30%.", "sp": "100", "known": "4", "learn": "3", "inherit": "ONLY_MELEE" },
            { "name": "Pavise", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from adjacent foes by 50%.", "sp": "200", "known": "-", "learn": "4", "inherit": "ONLY_MELEE" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Lunge", "effect": "If unit initiates attack, after combat, unit and targeted foe swap places.", "sp": "150", "learn": "3", "inherit": "Melee Weapon Users Only" }
        ],
        "base_passive_C":
        [   { "name": "Spur Def 1", "effect": "Grants adjacent allies Def+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Def 2", "effect": "Grants adjacent allies Def+3 during combat.", "sp": "100", "learn": "2", "inherit": "None" },
            { "name": "Ward Armor", "effect": "Grants armored allies within 2 spaces Def/Res+4 during combat.", "sp": "200", "learn": "4", "inherit": "Armored Only" }
        ]
    },
    "effie__army_of_one":
    {   "tag": "effie__army_of_one",
        "name": "Effie",
        "epithet": "Army of One",
        "description": "A gentle knight with great strength and devotion. One of Elise's retainers.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Armored",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 21, 12, 4, 11, 3 ],
            "5": [ 22, 12, 5, 11, 4 ]
        },
        "growth_points": [ 9, 9, 4, 6, 5 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Lance", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Silver Lance+", "mt": "15", "rng": "1", "effect": "-", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Smite", "rng": "1", "effect": "Push adjacent ally 2 spaces farther away.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Death Blow 1", "effect": "Grants Atk+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Death Blow 2", "effect": "Grants Atk+4 during combat if unit initiates the attack.", "sp": "100", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Death Blow 3", "effect": "Grants Atk+6 during combat if unit initiates the attack.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Wary Fighter 1", "effect": "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 90%.", "sp": "60", "learn": "-", "inherit": "Armored Only" },
            { "name": "Wary Fighter 2", "effect": "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 70%.", "sp": "120", "learn": "-", "inherit": "Armored Only" },
            { "name": "Wary Fighter 3", "effect": "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 50%.", "sp": "240", "learn": "4", "inherit": "Armored Only" }
        ],
        "base_passive_C": []
    },
    "eirika__restoration_lady":
    {   "tag": "eirika__restoration_lady",
        "name": "Eirika",
        "epithet": "Restoration Lady",
        "description": "Princess of Renais. Ephraim's twin. Cares dearly for her brother. Her kindness has sometimes put her in danger.",
        "origin": "Fire Emblem: The Sacred Stones",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 17, 7, 9, 6, 5 ],
            "5": [ 18, 7, 9, 7, 6 ]
        },
        "growth_points": [ 7, 5, 8, 5, 6 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Sieglinde", "mt": "16", "rng": "1", "effect": "Grants adjacent allies Atk+3 through their next actions at the start of each turn.", "sp": "400", "known": "5", "learn": "5", "inherit": "Prf" }
        ],
        "base_support":
        [   { "name": "Pivot", "rng": "1", "effect": "Unit moves to opposite side of adjacent ally.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Drag Back", "effect": "If unit initiates attack, the unit moves 1 space away after combat. Foe moves into unit's previous space.", "sp": "150", "learn": "4", "inherit": "Melee Weapon Users Only" }
        ],
        "base_passive_C":
        [   { "name": "Hone Spd 1", "effect": "Grants adjacent allies Spd+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Hone Spd 2", "effect": "Grants adjacent allies Spd+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Hone Spd 3", "effect": "Grants adjacent allies Spd+4 through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "eldigan__lionheart":
    {   "tag": "eldigan__lionheart",
        "name": "Eldigan",
        "epithet": "Lionheart",
        "description": "Ruler of Nordion. Wields the Demon Sword in knightly devotion to any master. Older brother of Lachesis.",
        "origin": "Fire Emblem: Genealogy of the Holy War",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 19, 8, 5, 8, 6 ]
        },
        "growth_points": [ 8, 7, 5, 8, 2 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Killing Edge", "mt": "7", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Mystletainn", "mt": "16", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Light", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "-", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Growing Light", "cooldown": "4", "effect": "Before combat this unit initiates, foes in a wide area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Fury 1", "effect": "Grants Atk/Spd/Def/Res+1. Unit takes 2 damage after combat.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Fury 2", "effect": "Grants Atk/Spd/Def/Res+2. Unit takes 4 damage after combat.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Fury 3", "effect": "Grants Atk/Spd/Def/Res+3. Unit takes 6 damage after combat.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Lunge", "effect": "If unit initiates attack, after combat, unit and targeted foe swap places.", "sp": "150", "learn": "5", "inherit": "Melee Weapon Users Only" }
        ],
        "base_passive_C": []
    },
    "elincia__lost_princess":
    {   "tag": "elincia__lost_princess",
        "name": "Elincia",
        "epithet": "Lost Princess",
        "description": "The princess of Crimea, whose existence was concealed. Cares for her kingdom and people.",
        "origin": "Fire Emblem: Path of Radiance",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 8, 10, 5, 8 ]
        },
        "growth_points": [ 5, 8, 8, 5, 5 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Amiti", "mt": "11", "rng": "1", "effect": "Spd-2. Attack twice when initiating combat.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support":
        [   { "name": "Ardent Sacrifice", "rng": "1", "effect": "Heals adjacent ally 10 HP. Unit loses 10 HP (but cannot reach 0 this way).", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Death Blow 1", "effect": "Grants Atk+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Death Blow 2", "effect": "Grants Atk+4 during combat if unit initiates the attack.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Death Blow 3", "effect": "Grants Atk+6 during combat if unit initiates the attack.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Flier Formation 1", "effect": "If unit has 100% HP, unit can move to a space adjacent to a flier ally within 2 spaces.", "sp": "60", "learn": "-", "inherit": "Fliers Only" },
            { "name": "Flier Formation 2", "effect": "If unit has ≥ 50% HP, unit can move to a space adjacent to a flier ally within 2 spaces.", "sp": "120", "learn": "-", "inherit": "Fliers Only" },
            { "name": "Flier Formation 3", "effect": "Unit can move to a space adjacent to a flier ally within 2 spaces.", "sp": "240", "learn": "5", "inherit": "Fliers Only" }
        ],
        "base_passive_C": []
    },
    "elise__budding_flower":
    {   "tag": "elise__budding_flower",
        "name": "Elise",
        "epithet": "Budding Flower",
        "description": "Princess of Nohr who adores her siblings. A bit childish, but has a pure heart and keen eyes.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "colorless_staff",
        "colour": "colorless",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 15, 8, 8, 4, 8 ]
        },
        "growth_points": [ 3, 7, 7, 3, 7 ],
        "base_weapons":
        [   { "name": "Assault", "mt": "10", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Gravity", "mt": "6", "rng": "2", "effect": "After combat, if unit attacked, prevents foe from moving more than 1 space through its next action.", "sp": "150", "known": "-", "learn": "5" },
            { "name": "Gravity+", "mt": "10", "rng": "2", "effect": "After combat, if unit attacked, prevents target and foes within 1 space of target from moving more than 1 space through their next actions.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Heal", "rng": "1", "effect": "Restores 5 HP.", "sp": "-", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Mend", "rng": "1", "effect": "Restores 10 HP.", "sp": "100", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Recover", "rng": "1", "effect": "Restores 15 HP. Slows Special trigger (cooldown count+1).", "sp": "200", "known": "5", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Recover+", "rng": "1", "effect": "Restores HP = 50% of Atk +10. (Minimum of 15 HP.)", "sp": "300", "known": "-", "learn": "5", "inherit": "ONLY_STAFF" }
        ],
        "base_special":
        [   { "name": "Imbue", "cooldown": "1", "effect": "When healing an ally with a staff, increases recovered HP by 10.", "sp": "50", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Kindled-Fire Balm", "cooldown": "1", "effect": "When healing an ally with a staff, grants all allies Atk+4 for 1 turn.", "sp": "150", "known": "5", "learn": "-", "inherit": "ONLY_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Live to Serve 1", "effect": "When healing allies with a staff, unit also recovers 50% of the HP restored.", "sp": "40", "learn": "-", "inherit": "Staff Users Only" },
            { "name": "Live to Serve 2", "effect": "When healing allies with a staff, unit also recovers 75% of the HP restored.", "sp": "80", "learn": "-", "inherit": "Staff Users Only" },
            { "name": "Live to Serve 3", "effect": "When healing allies with a staff, unit also recovers the same amount.", "sp": "160", "learn": "5", "inherit": "Staff Users Only" }
        ],
        "base_passive_C": []
    },
    "elise__tropical_flower":
    {   "tag": "elise__tropical_flower",
        "name": "Elise",
        "epithet": "Tropical Flower",
        "subname": "🌺",
        "description": "A Nohrian princess who loves her siblings and has matured a little by taking a solo trip to a tropical island.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "green_tome",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 10, 8, 3, 6 ]
        },
        "growth_points": [ 4, 8, 8, 3, 5 ],
        "base_weapons":
        [   { "name": "Wind", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Elwind", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Hibiscus Tome", "mt": "8", "rng": "2", "effect": "Grants allies within 2 spaces Atk/Spd+1 during combat.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Hibiscus Tome+", "mt": "12", "rng": "2", "effect": "Grants allies within 2 spaces Atk/Spd+1 during combat.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Rally Attack", "rng": "1", "effect": "Grants Atk+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Rally Attack Resistance", "rng": "1", "effect": "Grants Atk/Res+3 to an adjacent ally until the end of the turn.", "sp": "300", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Speed +1", "effect": "Grants Spd+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Spd Res 1", "effect": "Grants Spd/Res+1.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Spd Res 2", "effect": "Grants Spd/Res+2.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "G Tome Valor 1", "effect": "If unit survives and uses a green tome, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "30", "learn": "-", "inherit": "Green Tome Users Only" },
            { "name": "G Tome Valor 2", "effect": "If unit survives, all green tome users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "60", "learn": "-", "inherit": "Green Tome Users Only" },
            { "name": "G Tome Valor 3", "effect": "If unit survives, all green tome users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "120", "learn": "5", "inherit": "Green Tome Users Only" }
        ]
    },
    "eliwood__knight_of_lycia":
    {   "tag": "eliwood__knight_of_lycia",
        "name": "Eliwood",
        "epithet": "Knight of Lycia",
        "description": "A sincere noble of Pherae. His friends Lyn and Hector serve him loyally.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 16, 6, 7, 5, 7 ],
            "4": [ 16, 6, 8, 5, 8 ],
            "5": [ 17, 7, 8, 6, 8 ]
        },
        "growth_points": [ 6, 7, 6, 4, 7 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Durandal", "mt": "16", "rng": "1", "effect": "Grants Atk+4 during combat if unit initiates attack.", "sp": "400", "known": "5", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Holy Vestments", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.", "sp": "100", "known": "4", "learn": "3", "inherit": "ONLY_MELEE" },
            { "name": "Sacred Cowl", "cooldown": "2", "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.", "sp": "200", "known": "-", "learn": "4", "inherit": "ONLY_MELEE" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Axebreaker 1", "effect": "If unit's HP ≥ 90% in combat against an axe user, unit makes a follow-up attack and foe cannot.", "sp": "50", "learn": "3", "inherit": "Excludes Blue Weapon Users" },
            { "name": "Axebreaker 2", "effect": "If unit's HP ≥ 70% in combat against an axe user, unit makes a follow-up attack and foe cannot.", "sp": "100", "learn": "4", "inherit": "Excludes Blue Weapon Users" },
            { "name": "Axebreaker 3", "effect": "If unit's HP ≥ 50% in combat against an axe user, unit makes a follow-up attack and foe cannot.", "sp": "200", "learn": "5", "inherit": "Excludes Blue Weapon Users" }
        ],
        "base_passive_C":
        [   { "name": "Spur Res 1", "effect": "Grants adjacent allies Res+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Res 2", "effect": "Grants adjacent allies Res+3 during combat.", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Ward Cavalry", "effect": "Grants cavalry allies within 2 spaces Def/Res+4 during combat.", "sp": "200", "learn": "4", "inherit": "Cavalry Only" }
        ]
    },
    "ephraim__restoration_lord":
    {   "tag": "ephraim__restoration_lord",
        "name": "Ephraim",
        "epithet": "Restoration Lord",
        "description": "Prince of Renais. Eirika's twin. Cares deeply for his sister. His confidence has sometimes put him in danger.",
        "origin": "Fire Emblem: The Sacred Stones",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 19, 9, 6, 8, 5 ]
        },
        "growth_points": [ 8, 8, 5, 7, 3 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Heavy Spear", "mt": "8", "rng": "1", "effect": "Effective against armored units. ", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Siegmund", "mt": "16", "rng": "1", "effect": "Grants adjacent allies Atk+3 through their next actions at the start of each turn.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Moonbow", "cooldown": "2", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Seal Def 1", "effect": "After combat, foe suffers Def-3 through its next action.", "sp": "40", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Def 2", "effect": "After combat, foe suffers Def-5 through its next action.", "sp": "80", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Def 3", "effect": "After combat, foe suffers Def-7 through its next action.", "sp": "160", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C":
        [   { "name": "Threaten Def 1", "effect": "Inflicts Def-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Threaten Def 2", "effect": "Inflicts Def-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Threaten Def 3", "effect": "Inflicts Def-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "est__junior_whitewing":
    {   "tag": "est__junior_whitewing",
        "name": "Est",
        "epithet": "Junior Whitewing",
        "description": "Youngest of three sisters who are pegasus knights for Macedon.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 16, 8, 7, 4, 7 ],
            "4": [ 16, 9, 8, 4, 7 ],
            "5": [ 17, 9, 8, 5, 8 ]
        },
        "growth_points": [ 5, 8, 6, 5, 7 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Heavy Spear", "mt": "8", "rng": "1", "effect": "Effective against armored units. ", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Heavy Spear+", "mt": "12", "rng": "1", "effect": "Effective against armored units. ", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Shove", "rng": "1", "effect": "Push adjacent ally 1 space farther away.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Defiant Res 1", "effect": "Grants Res+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "Defiant Res 2", "effect": "Grants Res+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "3", "inherit": "None" },
            { "name": "Defiant Res 3", "effect": "Grants Res+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Seal Spd 1", "effect": "After combat, foe suffers Spd-3 through its next action.", "sp": "40", "learn": "3", "inherit": "Excludes Staff Users" },
            { "name": "Seal Spd 2", "effect": "After combat, foe suffers Spd-5 through its next action.", "sp": "80", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Seal Spd 3", "effect": "After combat, foe suffers Spd-7 through its next action.", "sp": "160", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C": []
    },
    "fae__divine_dragon":
    {   "tag": "fae__divine_dragon",
        "name": "Fae",
        "epithet": "Divine Dragon",
        "description": "A surviving Divine Dragon with the nature of a child and very little life experience.",
        "origin": "Fire Emblem: The Binding Blade",
        "weapon_type": "green_dragonstone",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 15, 4, 3, 6, 8 ],
            "5": [ 16, 5, 4, 6, 8 ]
        },
        "growth_points": [ 10, 9, 7, 5, 6 ],
        "base_weapons":
        [   { "name": "Fire Breath", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Fire Breath+", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Light Breath", "mt": "9", "rng": "1", "effect": "Grants adjacent allies Def/Res+4 through their next actions after any combat this unit initiates.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Light Breath+", "mt": "13", "rng": "1", "effect": "Grants adjacent allies Def/Res+4 through their next actions after any combat this unit initiates.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Draw Back", "rng": "1", "effect": "Unit moves 1 space away from target ally, who moves to unit's former position.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Renewal 1", "effect": "At the start of every fourth turn, restores 10 HP.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Renewal 2", "effect": "At the start of every third turn, restores 10 HP.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Renewal 3", "effect": "At the start of every second turn, restores 10 HP.", "sp": "240", "learn": "4", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Threaten Atk 1", "effect": "Inflicts Atk-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Threaten Atk 2", "effect": "Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Threaten Atk 3", "effect": "Inflicts Atk-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "faye__devoted_heart":
    {   "tag": "faye__devoted_heart",
        "name": "Faye",
        "epithet": "Devoted Heart",
        "description": "A young woman from Ram Village, and Alm's childhood friend. Her devotion to him stretches back to those days.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 6, 3, 4, 7 ]
        },
        "growth_points": [ 8, 7, 6, 6, 7 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Firesweep Bow", "mt": "7", "rng": "2", "effect": "Effective against fliers.  Unit and enemies cannot use counterattacks.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Firesweep Bow+", "mt": "11", "rng": "2", "effect": "Effective against fliers.  Unit and enemies cannot use counterattacks.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Daylight", "cooldown": "3", "effect": "Heal 30% of damage dealt.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Noontime", "cooldown": "2", "effect": "Heal 30% of damage dealt.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Wings of Mercy 1", "effect": "Enables unit to warp adjacent to any ally with HP ≤ 30%.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Wings of Mercy 2", "effect": "Enables unit to warp adjacent to any ally with HP ≤ 40%.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Wings of Mercy 3", "effect": "Enables unit to warp adjacent to any ally with HP ≤ 50%.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "felicia__maid_mayhem":
    {   "tag": "felicia__maid_mayhem",
        "name": "Felicia",
        "epithet": "Maid Mayhem",
        "description": "A maid of Nohr who's eager to do good work yet often bungles. One of Corrin's retainers.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "colorless_dagger",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "1": [ 13, 4, 9, 1, 7 ],
            "2": [ 13, 4, 10, 1, 8 ],
            "3": [ 14, 5, 10, 2, 8 ],
            "4": [ 14, 5, 11, 2, 9 ],
            "5": [ 15, 6, 11, 3, 9 ]
        },
        "growth_points": [ 5, 4, 8, 3, 8 ],
        "base_weapons":
        [   { "name": "Iron Dagger", "mt": "3", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "50", "known": "1", "learn": "-" },
            { "name": "Steel Dagger", "mt": "5", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Silver Dagger", "mt": "7", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Silver Dagger+", "mt": "10", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-7 on foe through its next action.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Chilling Wind", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Glacies", "cooldown": "4", "effect": "Boosts damage dealt by 80% of unit's Res.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Resistance +1", "effect": "Grants Res+1.", "sp": "30", "learn": "3", "inherit": "None" },
            { "name": "Resistance +2", "effect": "Grants Res+2.", "sp": "60", "learn": "4", "inherit": "None" },
            { "name": "Resistance +3", "effect": "Grants Res+3.", "sp": "120", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Breath of Life 1", "effect": "If unit initiates attack, adjacent allies recover 3 HP after combat.", "sp": "50", "learn": "1", "inherit": "None" },
            { "name": "Breath of Life 2", "effect": "If unit initiates attack, adjacent allies recover 5 HP after combat.", "sp": "100", "learn": "2", "inherit": "None" },
            { "name": "Breath of Life 3", "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "fir__sword_student":
    {   "tag": "fir__sword_student",
        "name": "Fir",
        "epithet": "Sword Student",
        "description": "A woman who travels in search of the best swordplay opponents anywhere.",
        "origin": "Fire Emblem: The Binding Blade",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 18, 5, 9, 4, 6 ],
            "4": [ 18, 5, 10, 4, 7 ],
            "5": [ 19, 6, 10, 5, 7 ]
        },
        "growth_points": [ 6, 5, 8, 5, 7 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Killing Edge", "mt": "7", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Killing Edge+", "mt": "11", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Chilling Wind", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Glacies", "cooldown": "4", "effect": "Boosts damage dealt by 80% of unit's Res.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Speed +1", "effect": "Grants Spd+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Speed +2", "effect": "Grants Spd+2.", "sp": "60", "learn": "3", "inherit": "None" },
            { "name": "Speed +3", "effect": "Grants Spd+3.", "sp": "120", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Pass 1", "effect": "Units can pass through foes if its own HP ≥ 75%.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Pass 2", "effect": "Units can pass through foes if its own HP ≥ 50%.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Pass 3", "effect": "Units can pass through foes if its own HP ≥ 25%.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "fjorm__princess_of_ice":
    {   "tag": "fjorm__princess_of_ice",
        "name": "Fjorm",
        "epithet": "Princess of Ice",
        "description": "The gentle second princess of Nifl, the Kingdom of Ice. Seeks revenge against Surtr.",
        "origin": "Fire Emblem Heroes",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 8, 7, 8, 8 ]
        },
        "growth_points": [ 6, 6, 7, 6, 8 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Lance", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Leiptr", "mt": "16", "rng": "1", "effect": "Unit can counterattack regardless of foe's range.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Holy Vestments", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.", "sp": "100", "known": "5", "learn": "-", "inherit": "ONLY_MELEE" },
            { "name": "Sacred Cowl", "cooldown": "2", "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.", "sp": "200", "known": "-", "learn": "5", "inherit": "ONLY_MELEE" },
            { "name": "Ice Mirror", "cooldown": "2", "effect": "Reduces damage unit takes from foes 2 spaces away by 30%. If Special triggers, boosts unit's next attack by total damage was reduced (by any source, including other skills). Resets at end of combat. (Skill cannot be inherited.)", "sp": "500", "known": "-", "learn": "5", "inherit": "Prf" }
        ],
        "base_passive_A":
        [   { "name": "Atk Def Bond 1", "effect": "Grants Atk/Def+3 to this unit during combat if unit is adjacent to an ally.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Atk Def Bond 2", "effect": "Grants Atk/Def+4 to this unit during combat if unit is adjacent to an ally.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Atk Def Bond 3", "effect": "Grants Atk/Def+5 to this unit during combat if unit is adjacent to an ally.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Shield Pulse 1", "effect": "If unit's Special triggers based on a foe's attack, Special cooldown count-1 at start of turn 1.", "sp": "60", "learn": "-", "inherit": "Melee Weapon Users Only <br />Infantry and Armored Only" },
            { "name": "Shield Pulse 2", "effect": "If unit's Special triggers based on a foe's attack, Special cooldown count-1 at start of turn 1. Unit takes 5 less damage when Special triggers.", "sp": "120", "learn": "-", "inherit": "Melee Weapon Users Only <br />Infantry and Armored Only" },
            { "name": "Shield Pulse 3", "effect": "If unit's Special triggers based on a foe's attack, Special cooldown count-2 at start of turn 1. Unit takes 5 less damage when Special triggers.", "sp": "240", "learn": "5", "inherit": "Melee Weapon Users Only <br />Infantry and Armored Only" }
        ],
        "base_passive_C":
        [   { "name": "Spur Atk 1", "effect": "Grants adjacent allies Atk+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Drive Atk 1", "effect": "Grants allies within 2 spaces Atk+2 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Drive Atk 2", "effect": "Grants allies within 2 spaces Atk+3 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "florina__lovely_flier":
    {   "tag": "florina__lovely_flier",
        "name": "Florina",
        "epithet": "Lovely Flier",
        "description": "Youngest of three sisters who are Pegasus Knights of Ilia. Shy, gentle girl who loves animals.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 17, 6, 7, 5, 7 ],
            "4": [ 17, 6, 8, 5, 8 ],
            "5": [ 18, 7, 8, 6, 8 ]
        },
        "growth_points": [ 7, 6, 5, 5, 8 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Heavy Spear", "mt": "8", "rng": "1", "effect": "Effective against armored units. ", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Heavy Spear+", "mt": "12", "rng": "1", "effect": "Effective against armored units. ", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Ardent Sacrifice", "rng": "1", "effect": "Heals adjacent ally 10 HP. Unit loses 10 HP (but cannot reach 0 this way).", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Darting Blow 1", "effect": "Grants Spd+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Darting Blow 2", "effect": "Grants Spd+4 during combat if unit initiates the attack.", "sp": "100", "learn": "3", "inherit": "Excludes Staff Users" },
            { "name": "Darting Blow 3", "effect": "Grants Spd+6 during combat if unit initiates the attack.", "sp": "200", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Breath of Life 1", "effect": "If unit initiates attack, adjacent allies recover 3 HP after combat.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Breath of Life 2", "effect": "If unit initiates attack, adjacent allies recover 5 HP after combat.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Breath of Life 3", "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "frederick__polite_knight":
    {   "tag": "frederick__polite_knight",
        "name": "Frederick",
        "epithet": "Polite Knight",
        "description": "A knight who serves the royal house of Ylisse and helps lead Chrom's Shepherds.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 18, 8, 5, 7, 3 ],
            "4": [ 18, 9, 5, 8, 3 ],
            "5": [ 19, 9, 6, 8, 4 ]
        },
        "growth_points": [ 7, 8, 5, 9, 1 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Hammer", "mt": "8", "rng": "1", "effect": "Effective against armored units. ", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Hammer+", "mt": "12", "rng": "1", "effect": "Effective against armored units. ", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Luna", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-50%.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Wings of Mercy 1", "effect": "Enables unit to warp adjacent to any ally with HP ≤ 30%.", "sp": "60", "learn": "3", "inherit": "None" },
            { "name": "Wings of Mercy 2", "effect": "Enables unit to warp adjacent to any ally with HP ≤ 40%.", "sp": "120", "learn": "4", "inherit": "None" },
            { "name": "Wings of Mercy 3", "effect": "Enables unit to warp adjacent to any ally with HP ≤ 50%.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Fortify Def 1", "effect": "Grants adjacent allies Def+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Fortify Def 2", "effect": "Grants adjacent allies Def+3 through their next actions at the start of each turn.", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Fortify Def 3", "effect": "Grants adjacent allies Def+4 through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "frederick__horizon_watcher":
    {   "tag": "frederick__horizon_watcher",
        "name": "Frederick",
        "epithet": "Horizon Watcher",
        "subname": "🐚",
        "description": "A knight who serves the royal house of Ylisse. Collector of pebbles and shells on the beach.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "colorless_dagger",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 18, 8, 7, 6, 5 ]
        },
        "growth_points": [ 6, 7, 7, 6, 2 ],
        "base_weapons":
        [   { "name": "Iron Dagger", "mt": "3", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Dagger", "mt": "5", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Seashell", "mt": "7", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action. If unit's HP = 100% at start of combat, grants Atk/Spd/Def/Res+2, but unit takes 2 damage after combat.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Seashell+", "mt": "10", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-7 on foe through its next action. If unit's HP = 100% at start of combat, grants Atk/Spd/Def/Res+2, but unit takes 2 damage after combat.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Ardent Sacrifice", "rng": "1", "effect": "Heals adjacent ally 10 HP. Unit loses 10 HP (but cannot reach 0 this way).", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Armored Blow 1", "effect": "Grants Def+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Armored Blow 2", "effect": "Grants Def+4 during combat if unit initiates the attack.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Armored Blow 3", "effect": "Grants Def+6 during combat if unit initiates the attack.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Seal Spd 1", "effect": "After combat, foe suffers Spd-3 through its next action.", "sp": "40", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Atk Spd 1", "effect": "After combat, inflicts Atk/Spd-3 on foe through its next action.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Atk Spd 2", "effect": "After combat, inflicts Atk/Spd-5 on foe through its next action.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C": []
    },
    "gaius__candy_stealer":
    {   "tag": "gaius__candy_stealer",
        "name": "Gaius",
        "epithet": "Candy Stealer",
        "description": "Thief of Ylisse known for his nimble hands and sweet tooth. Hides sweets in his pocket.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "colorless_dagger",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 17, 6, 9, 4, 3 ],
            "4": [ 17, 7, 10, 4, 3 ],
            "5": [ 18, 7, 10, 5, 4 ]
        },
        "growth_points": [ 7, 6, 8, 4, 3 ],
        "base_weapons":
        [   { "name": "Iron Dagger", "mt": "3", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Dagger", "mt": "5", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Rogue Dagger", "mt": "4", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action. Grants unit Def/Res+3 for 1 turn.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Rogue Dagger+", "mt": "7", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action. Grants unit Def/Res+5 for 1 turn.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Rally Speed", "rng": "1", "effect": "Grants Spd+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Defiant Atk 1", "effect": "Grants Atk+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "3", "inherit": "None" },
            { "name": "Defiant Atk 2", "effect": "Grants Atk+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "4", "inherit": "None" },
            { "name": "Defiant Atk 3", "effect": "Grants Atk+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Pass 1", "effect": "Units can pass through foes if its own HP ≥ 75%.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Pass 2", "effect": "Units can pass through foes if its own HP ≥ 50%.", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Pass 3", "effect": "Units can pass through foes if its own HP ≥ 25%.", "sp": "200", "learn": "4", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "gaius__thief_exposed":
    {   "tag": "gaius__thief_exposed",
        "name": "Gaius",
        "epithet": "Thief Exposed",
        "subname": "🌅",
        "description": "A thief from Ylisse known for his sweet tooth. Usually secrets candy in his clothes, but can't when he's dressed like this.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 8, 9, 4, 6 ]
        },
        "growth_points": [ 4, 6, 9, 3, 6 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Refreshing Bolt", "mt": "8", "rng": "2", "effect": "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat. Effective against fliers. ", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Refreshing Bolt+", "mt": "12", "rng": "2", "effect": "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat. Effective against fliers. ", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Night Sky", "cooldown": "3", "effect": "Grants +50% to damage dealt.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Astra", "cooldown": "4", "effect": "Grants +150% to damage dealt.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Vantage 1", "effect": "Unit counterattacks first when attacked at HP ≤ 25%.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Vantage 2", "effect": "Unit counterattacks first when attacked at HP ≤ 50%.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Vantage 3", "effect": "Unit counterattacks first when attacked at HP ≤ 75%.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Def Ploy 1", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-3 until the end of foe's next action.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Def Ploy 2", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-4 until the end of foe's next action.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Def Ploy 3", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-5 until the end of foe's next action.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "genny__endearing_ally":
    {   "tag": "genny__endearing_ally",
        "name": "Genny",
        "epithet": "Endearing Ally",
        "description": "A meek young cleric from Novis. Likes to write her own stories.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "colorless_staff",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 9, 6, 4, 8 ]
        },
        "growth_points": [ 3, 8, 5, 4, 8 ],
        "base_weapons":
        [   { "name": "Assault", "mt": "10", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Gravity", "mt": "6", "rng": "2", "effect": "After combat, if unit attacked, prevents foe from moving more than 1 space through its next action.", "sp": "150", "known": "5", "learn": "-" },
            { "name": "Gravity+", "mt": "10", "rng": "2", "effect": "After combat, if unit attacked, prevents target and foes within 1 space of target from moving more than 1 space through their next actions.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Heal", "rng": "1", "effect": "Restores 5 HP.", "sp": "-", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Mend", "rng": "1", "effect": "Restores 10 HP.", "sp": "100", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Physic", "rng": "2", "effect": "Restores 8 HP. Rng: 2.", "sp": "200", "known": "5", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Physic+", "rng": "2", "effect": "Restores HP = 50% of Atk. (Minimum of 8 HP.) Rng: 2.", "sp": "300", "known": "-", "learn": "5", "inherit": "ONLY_STAFF" }
        ],
        "base_special":
        [   { "name": "Imbue", "cooldown": "1", "effect": "When healing an ally with a staff, increases recovered HP by 10.", "sp": "50", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Heavenly Light", "cooldown": "2", "effect": "When healing an ally with a staff, all other allies recover 10 HP.", "sp": "150", "known": "5", "learn": "-", "inherit": "ONLY_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Wrathful Staff 1", "effect": "If unit has 100% HP at the start of combat, damage from their staff will be calculated the same as other weapons.", "sp": "60", "learn": "-", "inherit": "Staff Users Only" },
            { "name": "Wrathful Staff 2", "effect": "If unit has ≥ 50% HP at the start of combat, damage from their staff will be calculated the same as other weapons.", "sp": "120", "learn": "-", "inherit": "Staff Users Only" },
            { "name": "Wrathful Staff 3", "effect": "Damage from unit's staff will be calculated the same as other weapons.", "sp": "240", "learn": "5", "inherit": "Staff Users Only" }
        ],
        "base_passive_C": []
    },
    "gordin__altean_archer":
    {   "tag": "gordin__altean_archer",
        "name": "Gordin",
        "epithet": "Altean Archer",
        "description": "Altean archer who is masterful with his bow. Looks younger than he actually is.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 18, 6, 5, 7, 3 ],
            "4": [ 18, 7, 5, 8, 3 ],
            "5": [ 19, 7, 6, 8, 4 ]
        },
        "growth_points": [ 7, 7, 5, 7, 2 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Brave Bow", "mt": "4", "rng": "2", "effect": "Spd-5. Effective against flying units.  Attacks twice if unit initiates combat.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Brave Bow+", "mt": "7", "rng": "2", "effect": "Spd-5. Effective against flying units.  Attacks twice if unit initiates combat.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Shove", "rng": "1", "effect": "Push adjacent ally 1 space farther away.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Attack +1", "effect": "Grants Atk+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Attack +2", "effect": "Grants Atk+2.", "sp": "60", "learn": "3", "inherit": "None" },
            { "name": "Attack +3", "effect": "Grants Atk+3.", "sp": "120", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Vantage 1", "effect": "Unit counterattacks first when attacked at HP ≤ 25%.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Vantage 2", "effect": "Unit counterattacks first when attacked at HP ≤ 50%.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Vantage 3", "effect": "Unit counterattacks first when attacked at HP ≤ 75%.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "gray__wry_comrade":
    {   "tag": "gray__wry_comrade",
        "name": "Gray",
        "epithet": "Wry Comrade",
        "description": "Alm's childhood friend from Ram Village. Worldly and competent.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 7, 6, 6, 3 ]
        },
        "growth_points": [ 8, 9, 8, 7, 5 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Zanbato", "mt": "10", "rng": "1", "effect": "Effective against cavalry units. ", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Zanbato+", "mt": "14", "rng": "1", "effect": "Effective against cavalry units. ", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Swap", "rng": "1", "effect": "Swap places with an adjacent ally.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Wind Boost 1", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Spd+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Wind Boost 2", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Spd+4 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Wind Boost 3", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Spd+6 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Sword Valor 1", "effect": "If unit survives and uses a sword, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "30", "learn": "-", "inherit": "Sword Users Only" },
            { "name": "Sword Valor 2", "effect": "If unit survives, all sword users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "60", "learn": "-", "inherit": "Sword Users Only" },
            { "name": "Sword Valor 3", "effect": "If unit survives, all sword users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "120", "learn": "5", "inherit": "Sword Users Only" }
        ]
    },
    "gunnthra__voice_of_dreams":
    {   "tag": "gunnthra__voice_of_dreams",
        "name": "Gunnthrá",
        "epithet": "Voice of Dreams",
        "description": "The eldest princess of Nifl, the Kingdom of Ice. A gentle and caring soul with strong maternal instincts.",
        "origin": "Fire Emblem Heroes",
        "weapon_type": "green_tome",
        "colour": "green",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 15, 7, 9, 6, 6 ]
        },
        "growth_points": [ 6, 7, 7, 2, 5 ],
        "base_weapons":
        [   { "name": "Wind", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Elwind", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Rexcalibur", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Blizzard", "mt": "14", "rng": "2", "effect": "Grants Res+3. Grants bonus to unit's Atk equal to total penalties on foe during combat.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Chilling Wind", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Glacies", "cooldown": "4", "effect": "Boosts damage dealt by 80% of unit's Res.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Fortress Res 1", "effect": "Grants Res+3. Inflicts Atk-3.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "Fortress Res 2", "effect": "Grants Res+4. Inflicts Atk-3.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Fortress Res 3", "effect": "Grants Res+5. Inflicts Atk-3.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Chilling Seal", "effect": "At the start of each turn, if unit's HP ≥ 50%, inflicts Atk/Spd-6 on foe on the enemy team with the lowest Def through its next action. (Skill cannot be inherited.)", "sp": "300", "learn": "5", "inherit": "Prf" }
        ],
        "base_passive_C":
        [   { "name": "Res Ploy 1", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-3 until the end of foe's next action.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Res Ploy 2", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-4 until the end of foe's next action.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Res Ploy 3", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-5 until the end of foe's next action.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "gunter__inveterate_soldier":
    {   "tag": "gunter__inveterate_soldier",
        "name": "Gunter",
        "epithet": "Inveterate Soldier",
        "description": "Veteran knight of Nohr. One of Corrin's retainers. Extremely strict.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "1": [ 19, 8, 5, 9, 3 ],
            "2": [ 19, 9, 5, 10, 3 ],
            "3": [ 20, 9, 6, 10, 4 ],
            "4": [ 20, 10, 6, 11, 4 ],
            "5": [ 21, 10, 7, 11, 5 ]
        },
        "growth_points": [ 6, 6, 4, 6, 2 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "1", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Silver Axe", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Silver Axe+", "mt": "15", "rng": "1", "effect": "-", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Harsh Command", "rng": "1", "effect": "Converts penalties on target into bonuses.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Armored Blow 1", "effect": "Grants Def+2 during combat if unit initiates the attack.", "sp": "50", "learn": "3", "inherit": "Excludes Staff Users" },
            { "name": "Armored Blow 2", "effect": "Grants Def+4 during combat if unit initiates the attack.", "sp": "100", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Armored Blow 3", "effect": "Grants Def+6 during combat if unit initiates the attack.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Hone Atk 1", "effect": "Grants adjacent allies Atk+2 through their next actions at the start of each turn.", "sp": "50", "learn": "1", "inherit": "None" },
            { "name": "Hone Atk 2", "effect": "Grants adjacent allies Atk+3 through their next actions at the start of each turn.", "sp": "100", "learn": "2", "inherit": "None" },
            { "name": "Hone Cavalry", "effect": "Grants adjacent cavalry allies Atk/Spd+6 through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "Cavalry Only" }
        ]
    },
    "gwendolyn__adorable_knight":
    {   "tag": "gwendolyn__adorable_knight",
        "name": "Gwendolyn",
        "epithet": "Adorable Knight",
        "description": "Armored knight of Ostia. Intent on mastering defense, despite feeling awkward in the armor.",
        "origin": "Fire Emblem: The Binding Blade",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Armored",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 22, 7, 4, 11, 5 ],
            "4": [ 22, 8, 4, 12, 5 ],
            "5": [ 23, 8, 5, 12, 6 ]
        },
        "growth_points": [ 8, 6, 5, 8, 6 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Killer Lance", "mt": "7", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Killer Lance+", "mt": "11", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Buckler", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from adjacent foes by 30%.", "sp": "100", "known": "4", "learn": "3", "inherit": "ONLY_MELEE" },
            { "name": "Escutcheon", "cooldown": "2", "effect": "Reduces damage inflicted by attacks from adjacent foes by 30%.", "sp": "200", "known": "-", "learn": "4", "inherit": "ONLY_MELEE" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Drag Back", "effect": "If unit initiates attack, the unit moves 1 space away after combat. Foe moves into unit's previous space.", "sp": "150", "learn": "3", "inherit": "Melee Weapon Users Only" }
        ],
        "base_passive_C":
        [   { "name": "Hone Atk 1", "effect": "Grants adjacent allies Atk+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Hone Atk 2", "effect": "Grants adjacent allies Atk+3 through their next actions at the start of each turn.", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Hone Armor", "effect": "Grants adjacent armored allies Atk/Spd+6 through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "Armored Only" }
        ]
    },
    "hana__focused_samurai":
    {   "tag": "hana__focused_samurai",
        "name": "Hana",
        "epithet": "Focused Samurai",
        "description": "A noble who is skilled with the katana. One of Sakura's retainers.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "1": [ 16, 7, 8, 4, 2 ],
            "2": [ 16, 8, 9, 4, 2 ],
            "3": [ 17, 8, 9, 5, 3 ],
            "4": [ 17, 9, 10, 5, 3 ],
            "5": [ 18, 9, 10, 6, 4 ]
        },
        "growth_points": [ 5, 8, 8, 4, 6 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "1", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Armorslayer", "mt": "8", "rng": "1", "effect": "Effective against armored units. ", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Armorslayer+", "mt": "12", "rng": "1", "effect": "Effective against armored units. ", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Rally Attack", "rng": "1", "effect": "Grants Atk+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Life and Death 1", "effect": "Grants Atk/Spd+3. Inflicts Def/Res-3.", "sp": "50", "learn": "3", "inherit": "Excludes Staff Users" },
            { "name": "Life and Death 2", "effect": "Grants Atk/Spd+4. Inflicts Def/Res-4.", "sp": "100", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Life and Death 3", "effect": "Grants Atk/Spd+5. Inflicts Def/Res-5.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Obstruct 1", "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 90%. (No effect on foes with a Pass skill.)", "sp": "50", "learn": "1", "inherit": "None" },
            { "name": "Obstruct 2", "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 70%. (No effect on foes with a Pass skill.)", "sp": "100", "learn": "2", "inherit": "None" },
            { "name": "Obstruct 3", "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 50%. (No effect on foes with a Pass skill.)", "sp": "200", "learn": "4", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "hawkeye__desert_guardian":
    {   "tag": "hawkeye__desert_guardian",
        "name": "Hawkeye",
        "epithet": "Desert Guardian",
        "description": "Guardian of the Nabata Desert and Arcadia, where dragons and humans live in harmony.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 20, 9, 4, 6, 5 ],
            "5": [ 21, 9, 5, 6, 6 ]
        },
        "growth_points": [ 7, 7, 4, 6, 7 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Killer Axe", "mt": "7", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Killer Axe+", "mt": "11", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Light", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Growing Light", "cooldown": "4", "effect": "Before combat this unit initiates, foes in a wide area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Death Blow 1", "effect": "Grants Atk+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Death Blow 2", "effect": "Grants Atk+4 during combat if unit initiates the attack.", "sp": "100", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Death Blow 3", "effect": "Grants Atk+6 during combat if unit initiates the attack.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Threaten Atk 1", "effect": "Inflicts Atk-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Threaten Atk 2", "effect": "Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Threaten Atk 3", "effect": "Inflicts Atk-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "hector__general_of_ostia":
    {   "tag": "hector__general_of_ostia",
        "name": "Hector",
        "epithet": "General of Ostia",
        "description": "Eliwood's friend and brother of the Marquess of Ostia. Prefers action to court formality.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Armored",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 24, 10, 5, 11, 4 ]
        },
        "growth_points": [ 9, 8, 5, 8, 3 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Axe", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Armads", "mt": "16", "rng": "1", "effect": "Unit makes a guaranteed follow-up attack when attacked at HP ≥ 80%.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Buckler", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from adjacent foes by 30%.", "sp": "100", "known": "5", "learn": "-", "inherit": "ONLY_MELEE" },
            { "name": "Pavise", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from adjacent foes by 50%.", "sp": "200", "known": "-", "learn": "5", "inherit": "ONLY_MELEE" }
        ],
        "base_passive_A":
        [   { "name": "Distant Counter", "effect": "Enables unit to counterattack regardless of distance to attacker.", "sp": "300", "learn": "5", "inherit": "Melee Weapon Users Only" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Atk 1", "effect": "Grants adjacent allies Atk+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Atk 2", "effect": "Grants adjacent allies Atk+3 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Goad Armor", "effect": "Grants armored allies within 2 spaces Spd/Atk+4 during combat.", "sp": "200", "learn": "5", "inherit": "Armored Only" }
        ]
    },
    "henry__twisted_mind":
    {   "tag": "henry__twisted_mind",
        "name": "Henry",
        "epithet": "Twisted Mind",
        "description": "A dark mage of Plegia with a bright grin and a taste for the gruesome in battle.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "red_tome",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 18, 5, 4, 7, 5 ],
            "4": [ 18, 6, 4, 8, 5 ],
            "5": [ 19, 6, 5, 8, 6 ]
        },
        "growth_points": [ 8, 4, 4, 7, 5 ],
        "base_weapons":
        [   { "name": "Flux", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Ruin", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Rauðrraven", "mt": "7", "rng": "2", "effect": "Grants weapon advantage vs. colorless foes.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Rauðrraven+", "mt": "11", "rng": "2", "effect": "Grants weapon advantage vs. colorless foes.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Glowing Ember", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Def.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Ignis", "cooldown": "4", "effect": "Boosts damage dealt by 80% of unit's Def.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Defiant Def 1", "effect": "Grants Def+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "3", "inherit": "None" },
            { "name": "Defiant Def 2", "effect": "Grants Def+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "4", "inherit": "None" },
            { "name": "Defiant Def 3", "effect": "Grants Def+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "G Tomebreaker 1", "effect": "If unit's HP ≥ 90% in combat against a green tome user, unit makes a follow-up attack and foe cannot.", "sp": "50", "learn": "-", "inherit": "Excludes Blue Weapon Users" },
            { "name": "G Tomebreaker 2", "effect": "If unit's HP ≥ 70% in combat against a green tome user, unit makes a follow-up attack and foe cannot.", "sp": "100", "learn": "3", "inherit": "Excludes Blue Weapon Users" },
            { "name": "G Tomebreaker 3", "effect": "If unit's HP ≥ 50% in combat against a green tome user, unit makes a follow-up attack and foe cannot.", "sp": "200", "learn": "4", "inherit": "Excludes Blue Weapon Users" }
        ],
        "base_passive_C": []
    },
    "henry__happy_vampire":
    {   "tag": "henry__happy_vampire",
        "name": "Henry",
        "epithet": "Happy Vampire",
        "subname": "👻",
        "description": "This dark mage of Plegia will curse you without a second thought if you withhold candy.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "green_tome",
        "colour": "green",
        "move_type": "Armored",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 9, 10, 4, 12 ]
        },
        "growth_points": [ 5, 7, 7, 6, 7 ],
        "base_weapons":
        [   { "name": "Wind", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Elwind", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Spectral Tome", "mt": "8", "rng": "2", "effect": "After combat, if unit attacked, bonuses on all foes within 2 spaces of target become penalties through foes' next actions.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Spectral Tome+", "mt": "12", "rng": "2", "effect": "After combat, if unit attacked, bonuses on all foes within 2 spaces of target become penalties through foes' next actions.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Retribution", "cooldown": "3", "effect": "Grants bonus to damage dealt equal to 30% of damage suffered.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Reprisal", "cooldown": "2", "effect": "Grants bonus to damage dealt equal to 30% of damage suffered.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Live for Honor", "effect": "If unit survives, get 1.5x normal badges from a Training Tower map. (If similar skill effects also used, only highest multiplier applied.)", "sp": "100", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Armor March 1", "effect": "If unit has 100% HP and an adjacent armored ally at start of turn, unit and any such allies can move 1 extra space. (That turn only; does not stack.)", "sp": "60", "learn": "-", "inherit": "Armored Only" },
            { "name": "Armor March 2", "effect": "If unit has ≥ 50% HP and an adjacent armored ally at start of turn, unit and any such allies can move 1 extra space. (That turn only; does not stack.)", "sp": "120", "learn": "-", "inherit": "Armored Only" },
            { "name": "Armor March 3", "effect": "If unit has an adjacent armored ally at the start of turn, unit and any such allies can move 1 extra space. (That turn only; does not stack.)", "sp": "240", "learn": "5", "inherit": "Armored Only" }
        ]
    },
    "hinata__wild_samurai":
    {   "tag": "hinata__wild_samurai",
        "name": "Hinata",
        "epithet": "Wild Samurai",
        "description": "A coarse, yet caring, samurai of Hoshido. One of Takumi's retainers.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 20, 7, 4, 9, 2 ],
            "4": [ 20, 8, 4, 10, 2 ],
            "5": [ 21, 8, 5, 10, 3 ]
        },
        "growth_points": [ 8, 7, 5, 8, 3 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "1", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Ruby Sword", "mt": "8", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Ruby Sword+", "mt": "12", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Buckler", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from adjacent foes by 30%.", "sp": "100", "known": "4", "learn": "3", "inherit": "ONLY_MELEE" },
            { "name": "Pavise", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from adjacent foes by 50%.", "sp": "200", "known": "-", "learn": "4", "inherit": "ONLY_MELEE" }
        ],
        "base_passive_A":
        [   { "name": "Fury 1", "effect": "Grants Atk/Spd/Def/Res+1. Unit takes 2 damage after combat.", "sp": "50", "learn": "1", "inherit": "Excludes Staff Users" },
            { "name": "Fury 2", "effect": "Grants Atk/Spd/Def/Res+2. Unit takes 4 damage after combat.", "sp": "100", "learn": "2", "inherit": "Excludes Staff Users" },
            { "name": "Fury 3", "effect": "Grants Atk/Spd/Def/Res+3. Unit takes 6 damage after combat.", "sp": "200", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Brash Assault 1", "effect": "If unit initiates combat against a foe that can counter and unit's HP ≤ 30%, unit makes a guaranteed follow-up attack.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Brash Assault 2", "effect": "If unit initiates combat against a foe that can counter and unit's HP ≤ 40%, unit makes a guaranteed follow-up attack.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Brash Assault 3", "effect": "If unit initiates combat against a foe that can counter and unit's HP ≤ 50%, unit makes a guaranteed follow-up attack.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "hinoka__warrior_princess":
    {   "tag": "hinoka__warrior_princess",
        "name": "Hinoka",
        "epithet": "Warrior Princess",
        "description": "Hoshidan princess who prefers battles over court life. Excels at watching over others.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 19, 7, 8, 6, 7 ]
        },
        "growth_points": [ 6, 9, 7, 5, 4 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Brave Lance", "mt": "5", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Brave Lance+", "mt": "8", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Wind", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Blazing Wind", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Defiant Def 1", "effect": "Grants Def+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "Defiant Def 2", "effect": "Grants Def+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Defiant Def 3", "effect": "Grants Def+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Hone Spd 1", "effect": "Grants adjacent allies Spd+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Hone Spd 2", "effect": "Grants adjacent allies Spd+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Hone Fliers", "effect": "Grants adjacent flying allies Atk/Spd+6 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "Fliers Only" }
        ]
    },
    "ike__young_mercenary":
    {   "tag": "ike__young_mercenary",
        "name": "Ike",
        "epithet": "Young Mercenary",
        "description": "A kindhearted but stoic young man who has taken command of his father's mercenary band.",
        "origin": "Fire Emblem: Path of Radiance",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 18, 9, 7, 8, 5 ]
        },
        "growth_points": [ 7, 8, 7, 7, 2 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Ragnell", "mt": "16", "rng": "1", "effect": "Enables counterattack regardless of distance if this unit is attacked.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Luna", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-50%.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" },
            { "name": "Aether", "cooldown": "5", "effect": "Resolve combat as if foe suffered Def/Res-50%. Unit recovers HP=half damage dealt.", "sp": "500", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Heavy Blade 1", "effect": "If unit's Atk - foe's Atk ≥ 5, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)", "sp": "60", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Heavy Blade 2", "effect": "If unit's Atk - foe's Atk ≥ 3, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)", "sp": "120", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Heavy Blade 3", "effect": "If unit's Atk - foe's Atk ≥ 1, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Swordbreaker 1", "effect": "If unit's HP ≥ 90% in combat against a sword user, unit makes a follow-up attack and foe cannot.", "sp": "50", "learn": "-", "inherit": "Excludes Green Weapon Users" },
            { "name": "Swordbreaker 2", "effect": "If unit's HP ≥ 70% in combat against a sword user, unit makes a follow-up attack and foe cannot.", "sp": "100", "learn": "-", "inherit": "Excludes Green Weapon Users" },
            { "name": "Swordbreaker 3", "effect": "If unit's HP ≥ 50% in combat against a sword user, unit makes a follow-up attack and foe cannot.", "sp": "200", "learn": "5", "inherit": "Excludes Green Weapon Users" }
        ],
        "base_passive_C": []
    },
    "ike__brave_mercenary":
    {   "tag": "ike__brave_mercenary",
        "name": "Ike",
        "epithet": "Brave Mercenary",
        "subname": "🌟",
        "description": "A kindhearted but stoic young man who has taken command of his father's mercenary band. Wields the axe of his father, Greil.",
        "origin": "Fire Emblem: Path of Radiance",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 10, 6, 9, 5 ]
        },
        "growth_points": [ 8, 8, 6, 8, 3 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Axe", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Urvan", "mt": "16", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1). If unit receives consecutive attacks, damage from second attack onward reduced by 80%.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Luna", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-50%.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" },
            { "name": "Aether", "cooldown": "5", "effect": "Resolve combat as if foe suffered Def/Res-50%. Unit recovers HP=half damage dealt.", "sp": "500", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Steady Stance 1", "effect": "Grants Def+2 during combat when this unit is attacked.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Steady Stance 2", "effect": "Grants Def+4 during combat when this unit is attacked.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Steady Breath", "effect": "If attacked, unit granted Def+4 during combat; also gains Special cooldown charge +1. (If using other similar skill, only highest value applied.)", "sp": "240", "learn": "5", "inherit": "Melee Weapon Users Only <br />Infantry and Armored Only" }
        ],
        "base_passive_B":
        [   { "name": "Beorc's Blessing", "effect": "If foe is cavalry or flier type, foe's bonuses (from skills like Fortify, Rally, etc.) are nullified during combat. (Skill cannot be inherited.)", "sp": "300", "learn": "5", "inherit": "Prf" }
        ],
        "base_passive_C":
        [   { "name": "Threaten Def 1", "effect": "Inflicts Def-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Threaten Def 2", "effect": "Inflicts Def-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Threaten Def 3", "effect": "Inflicts Def-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "inigo__indigo_dancer":
    {   "tag": "inigo__indigo_dancer",
        "name": "Inigo",
        "epithet": "Indigo Dancer",
        "subname": "🎵",
        "description": "A descendant of the dancer Olivia. He carries on his departed mother's dancing and her power.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "green_tome",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 15, 6, 7, 5, 3 ]
        },
        "growth_points": [ 6, 6, 8, 4, 4 ],
        "base_weapons":
        [   { "name": "Wind", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Elwind", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Dancer's Ring", "mt": "8", "rng": "2", "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Dancer's Ring+", "mt": "12", "rng": "2", "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Dance", "rng": "1", "effect": "Enables target to take another action. Cannot be used on units with Sing or Dance.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Gale Dance 1", "effect": "If Sing or Dance is used, target also granted Spd+2.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Gale Dance 2", "effect": "If Sing or Dance is used, target also granted Spd+3.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Gale Dance 3", "effect": "If Sing or Dance is used, target also granted Spd+4.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C":
        [   { "name": "Hone Atk 1", "effect": "Grants adjacent allies Atk+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Hone Atk 2", "effect": "Grants adjacent allies Atk+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Hone Atk 3", "effect": "Grants adjacent allies Atk+4 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "innes__regal_strategician":
    {   "tag": "innes__regal_strategician",
        "name": "Innes",
        "epithet": "Regal Strategician",
        "description": "The prince of Frelia. Tana's brother. He's brash and arrogant, but good at heart.",
        "origin": "Fire Emblem: The Sacred Stones",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 9, 8, 4, 7 ]
        },
        "growth_points": [ 5, 7, 8, 1, 7 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Bow", "mt": "9", "rng": "2", "effect": "Effective against flying units. ", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Nidhogg", "mt": "14", "rng": "2", "effect": "Effective against flying units.  During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Chilling Wind", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Iceberg", "cooldown": "3", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Fortress Res 1", "effect": "Grants Res+3. Inflicts Atk-3.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "Fortress Res 2", "effect": "Grants Res+4. Inflicts Atk-3.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Fortress Res 3", "effect": "Grants Res+5. Inflicts Atk-3.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Cancel Affinity 1", "effect": "Any weapon triangle affinity granted by unit's skills is negated. Also negates any weapon triangle affinity granted by foe's skills.", "sp": "50", "learn": "-", "inherit": "Excludes Tome and Staff Users" },
            { "name": "Cancel Affinity 2", "effect": "Any weapon triangle affinity granted by unit's skills is negated. If affinity disadvantage exists, weapon triangle affinity granted by foe's skills is negated.", "sp": "100", "learn": "-", "inherit": "Excludes Tome and Staff Users" },
            { "name": "Cancel Affinity 3", "effect": "Any weapon triangle affinity granted by unit's skills is negated. If affinity disadvantage exists, weapon triangle affinity granted by foe's skills is reversed.", "sp": "200", "learn": "5", "inherit": "Excludes Tome and Staff Users" }
        ],
        "base_passive_C": []
    },
    "jaffar__angel_of_death":
    {   "tag": "jaffar__angel_of_death",
        "name": "Jaffar",
        "epithet": "Angel of Death",
        "description": "An emotionless member of the Black Fang assassins. Known as the Angel of Death.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "colorless_dagger",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 7, 9, 6, 5 ]
        },
        "growth_points": [ 7, 5, 7, 5, 4 ],
        "base_weapons":
        [   { "name": "Iron Dagger", "mt": "3", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Dagger", "mt": "5", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Dagger", "mt": "7", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Deathly Dagger", "mt": "11", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-7 on foe through its next action. If unit initiated combat, deals 7 damage to foe after combat.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Night Sky", "cooldown": "3", "effect": "Grants +50% to damage dealt.", "sp": "100", "known": "-", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Glimmer", "cooldown": "2", "effect": "Grants +50% to damage dealt.", "sp": "200", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Life and Death 1", "effect": "Grants Atk/Spd+3. Inflicts Def/Res-3.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Life and Death 2", "effect": "Grants Atk/Spd+4. Inflicts Def/Res-4.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Life and Death 3", "effect": "Grants Atk/Spd+5. Inflicts Def/Res-5.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Threaten Spd 1", "effect": "Inflicts Spd-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Threaten Spd 2", "effect": "Inflicts Spd-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Threaten Spd 3", "effect": "Inflicts Spd-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "jagen__veteran_knight":
    {   "tag": "jagen__veteran_knight",
        "name": "Jagen",
        "epithet": "Veteran Knight",
        "description": "Veteran knight of Altea who protected Marth since he was young.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 19, 7, 6, 7, 10 ],
            "4": [ 19, 8, 6, 7, 11 ],
            "5": [ 20, 8, 7, 8, 11 ]
        },
        "growth_points": [ 4, 5, 4, 4, 7 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Silver Lance", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Silver Lance+", "mt": "15", "rng": "1", "effect": "-", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Holy Vestments", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.", "sp": "100", "known": "4", "learn": "3", "inherit": "ONLY_MELEE" },
            { "name": "Aegis", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 50%.", "sp": "200", "known": "-", "learn": "4", "inherit": "ONLY_MELEE" }
        ],
        "base_passive_A":
        [   { "name": "Fury 1", "effect": "Grants Atk/Spd/Def/Res+1. Unit takes 2 damage after combat.", "sp": "50", "learn": "3", "inherit": "Excludes Staff Users" },
            { "name": "Fury 2", "effect": "Grants Atk/Spd/Def/Res+2. Unit takes 4 damage after combat.", "sp": "100", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Fury 3", "effect": "Grants Atk/Spd/Def/Res+3. Unit takes 6 damage after combat.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Fortify Res 1", "effect": "Grants adjacent allies Res+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Fortify Res 2", "effect": "Grants adjacent allies Res+3 through their next actions at the start of each turn.", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Fortify Cavalry", "effect": "Grants adjacent cavalry allies Def/Res+6 through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "Cavalry Only" }
        ]
    },
    "jakob__devoted_servant":
    {   "tag": "jakob__devoted_servant",
        "name": "Jakob",
        "epithet": "Devoted Servant",
        "description": "A butler of Nohr who's superb at his work yet dislikes serving anyone but his liege, Corrin.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "colorless_dagger",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 16, 7, 9, 5, 4 ],
            "5": [ 17, 7, 9, 6, 5 ]
        },
        "growth_points": [ 6, 6, 6, 5, 5 ],
        "base_weapons":
        [   { "name": "Iron Dagger", "mt": "3", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Dagger", "mt": "5", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Dagger", "mt": "7", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Silver Dagger+", "mt": "10", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-7 on foe through its next action.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Rally Resistance", "rng": "1", "effect": "Grants Res+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Defense +1", "effect": "Grants Def+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Defense +2", "effect": "Grants Def+2.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Defense +3", "effect": "Grants Def+3.", "sp": "120", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Renewal 1", "effect": "At the start of every fourth turn, restores 10 HP.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Renewal 2", "effect": "At the start of every third turn, restores 10 HP.", "sp": "120", "learn": "4", "inherit": "None" },
            { "name": "Renewal 3", "effect": "At the start of every second turn, restores 10 HP.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "jakob__devoted_monster":
    {   "tag": "jakob__devoted_monster",
        "name": "Jakob",
        "epithet": "Devoted Monster",
        "subname": "👻",
        "description": "A butler of Nohr who serves Corrin. He would rather receive tea than candy.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Armored",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 20, 9, 6, 9, 8 ]
        },
        "growth_points": [ 6, 8, 4, 7, 7 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Monstrous Bow", "mt": "8", "rng": "2", "effect": "Effective against flying foes.  After combat, if unit attacked, bonuses on all foes within 2 spaces of target become penalties through foes' next actions.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Monstrous Bow+", "mt": "12", "rng": "2", "effect": "Effective against flying foes.  After combat, if unit attacked, bonuses on all foes within 2 spaces of target become penalties through foes' next actions.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Glowing Ember", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Def.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Ignis", "cooldown": "4", "effect": "Boosts damage dealt by 80% of unit's Def.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Armored Blow 1", "effect": "Grants Def+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Bracing Blow 1", "effect": "Grants Def/Res+2 during combat if unit initiates combat.", "sp": "120", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Bracing Blow 2", "effect": "Grants Def/Res+4 during combat if unit initiates combat.", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Wary Fighter 1", "effect": "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 90%.", "sp": "60", "learn": "-", "inherit": "Armored Only" },
            { "name": "Wary Fighter 2", "effect": "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 70%.", "sp": "120", "learn": "-", "inherit": "Armored Only" },
            { "name": "Wary Fighter 3", "effect": "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 50%.", "sp": "240", "learn": "5", "inherit": "Armored Only" }
        ],
        "base_passive_C": []
    },
    "jeorge__perfect_shot":
    {   "tag": "jeorge__perfect_shot",
        "name": "Jeorge",
        "epithet": "Perfect Shot",
        "description": "Archanean archer thought to be the best on his continent. A skilled strategist.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 17, 8, 8, 4, 4 ],
            "5": [ 18, 8, 8, 5, 5 ]
        },
        "growth_points": [ 5, 7, 7, 5, 4 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Bow", "mt": "9", "rng": "2", "effect": "Effective against flying units. ", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Parthia", "mt": "14", "rng": "2", "effect": "Effective against flying units.  Grants Res+4 during combat if initiating attack.", "sp": "400", "known": "5", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Flame", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Blazing Flame", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Seal Atk 1", "effect": "After combat, foe suffers Atk-3 through its next action.", "sp": "40", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Atk 2", "effect": "After combat, foe suffers Atk-5 through its next action.", "sp": "80", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Atk 3", "effect": "After combat, foe suffers Atk-7 through its next action.", "sp": "160", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C":
        [   { "name": "Spur Spd 1", "effect": "Grants adjacent allies Spd+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Spd 2", "effect": "Grants adjacent allies Spd+3 during combat.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Spur Spd 3", "effect": "Grants adjacent allies Spd+4 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "joshua__tempest_king":
    {   "tag": "joshua__tempest_king",
        "name": "Joshua",
        "epithet": "Tempest King",
        "description": "A mercenary who loves to gamble. He has an evasive, almost aggravating personality.",
        "origin": "Fire Emblem: The Sacred Stones",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "4": [ 17, 6, 9, 8, 5 ],
            "5": [ 18, 7, 9, 8, 6 ]
        },
        "growth_points": [ 6, 7, 8, 6, 6 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Slaying Edge", "mt": "10", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Audhulma", "mt": "16", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1). Grants Res+5.", "sp": "400", "known": "5", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Moonbow", "cooldown": "2", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Close Def 1", "effect": "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+2 during combat.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Close Def 2", "effect": "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+4 during combat.", "sp": "120", "learn": "4", "inherit": "None" },
            { "name": "Close Def 3", "effect": "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+6 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Windsweep 1", "effect": "If unit initiates attack, no follow-up occurs. Against foe with sword, lance, axe, bow, or dagger, if unit’s Spd - foe’s Spd ≥ 5, foe can’t counterattack.", "sp": "60", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Windsweep 2", "effect": "If unit initiates attack, no follow-up occurs. Against foe with sword, lance, axe, bow, or dagger, if unit’s Spd - foe’s Spd ≥ 3, foe can’t counterattack.", "sp": "120", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Windsweep 3", "effect": "If unit initiates attack, no follow-up occurs. Against foe with sword, lance, axe, bow, or dagger, if unit’s Spd - foe’s Spd ≥ 1, foe can’t counterattack.", "sp": "240", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C": []
    },
    "julia__nagas_blood":
    {   "tag": "julia__nagas_blood",
        "name": "Julia",
        "epithet": "Naga's Blood",
        "description": "Inheritor of the Book of Naga. Seliph’s half sister by a different father. Gentle, yet faces her destiny with strength.",
        "origin": "Fire Emblem: Genealogy of the Holy War",
        "weapon_type": "green_tome",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 9, 7, 4, 8 ]
        },
        "growth_points": [ 6, 8, 5, 2, 7 ],
        "base_weapons":
        [   { "name": "Wind", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Elwind", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Rexcalibur", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "-", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Dragon Gaze", "cooldown": "4", "effect": "Grants +30% to Atk.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Dragon Fang", "cooldown": "4", "effect": "Grants +50% to Atk.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Resistance +1", "effect": "Grants Res+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Resistance +2", "effect": "Grants Res+2.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Resistance +3", "effect": "Grants Res+3.", "sp": "120", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Breath of Life 1", "effect": "If unit initiates attack, adjacent allies recover 3 HP after combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Breath of Life 2", "effect": "If unit initiates attack, adjacent allies recover 5 HP after combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Breath of Life 3", "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "kagero__honorable_ninja":
    {   "tag": "kagero__honorable_ninja",
        "name": "Kagero",
        "epithet": "Honorable Ninja",
        "description": "A ninja of Hoshido who is ready to lay down her life for her liege. One of Ryoma's retainers.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "colorless_dagger",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 15, 9, 8, 4, 5 ],
            "5": [ 16, 9, 8, 5, 6 ]
        },
        "growth_points": [ 3, 8, 7, 4, 6 ],
        "base_weapons":
        [   { "name": "Iron Dagger", "mt": "3", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Dagger", "mt": "5", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Poison Dagger", "mt": "2", "rng": "2", "effect": "Effective against infantry foes.  After combat, if unit attacked, inflicts Def/Res-4 on infantry foe through its next action.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Poison Dagger+", "mt": "5", "rng": "2", "effect": "Effective against infantry foes.  After combat, if unit attacked, inflicts Def/Res-6 on infantry foe through its next action.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Retribution", "cooldown": "3", "effect": "Grants bonus to damage dealt equal to 30% of damage suffered.", "sp": "100", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Reprisal", "cooldown": "2", "effect": "Grants bonus to damage dealt equal to 30% of damage suffered.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Warding Blow 1", "effect": "Grants Res+2 during combat if unit initiates attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Warding Blow 2", "effect": "Grants Res+4 during combat if unit initiates attack.", "sp": "100", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Warding Blow 3", "effect": "Grants Res+6 during combat if unit initiates attack.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Daggerbreaker 1", "effect": "If unit's HP ≥ 90% in combat against a dagger user, unit makes a follow-up attack and foe cannot.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Daggerbreaker 2", "effect": "If unit's HP ≥ 70% in combat against a dagger user, unit makes a follow-up attack and foe cannot.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Daggerbreaker 3", "effect": "If unit's HP ≥ 50% in combat against a dagger user, unit makes a follow-up attack and foe cannot.", "sp": "200", "learn": "4", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "karel__sword_demon":
    {   "tag": "karel__sword_demon",
        "name": "Karel",
        "epithet": "Sword Demon",
        "description": "A vicious swordsman from a family devoted to mastering the blade. Known as the Sword Demon.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 19, 8, 9, 6, 5 ]
        },
        "growth_points": [ 9, 6, 8, 5, 3 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Wo Dao", "mt": "9", "rng": "1", "effect": "Grants +10 to damage when Special triggers.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Wo Dao+", "mt": "13", "rng": "1", "effect": "Grants +10 to damage when Special triggers.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Retribution", "cooldown": "3", "effect": "Grants bonus to damage dealt equal to 30% of damage suffered.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Reprisal", "cooldown": "2", "effect": "Grants bonus to damage dealt equal to 30% of damage suffered.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Defiant Atk 1", "effect": "Grants Atk+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "Defiant Atk 2", "effect": "Grants Atk+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Defiant Atk 3", "effect": "Grants Atk+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Desperation 1", "effect": "If unit initiates combat with HP ≤ 25%, follow-up attacks occur immediately after unit's attack.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Desperation 2", "effect": "If unit initiates combat with HP ≤ 50%, follow-up attacks occur immediately after unit's attack.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Desperation 3", "effect": "If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "katarina__wayward_one":
    {   "tag": "katarina__wayward_one",
        "name": "Katarina",
        "epithet": "Wayward One",
        "description": "Reserved and harboring a dark secret, this trainee tactician depends on others.",
        "origin": "Fire Emblem: New Mystery of the Emblem",
        "weapon_type": "red_tome",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 6, 8, 5, 8 ]
        },
        "growth_points": [ 4, 8, 8, 1, 7 ],
        "base_weapons":
        [   { "name": "Fire", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elfire", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Rauðrowl", "mt": "6", "rng": "2", "effect": "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Rauðrowl+", "mt": "10", "rng": "2", "effect": "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Chilling Wind", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Glacies", "cooldown": "4", "effect": "Boosts damage dealt by 80% of unit's Res.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Death Blow 1", "effect": "Grants Atk+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Swift Sparrow 1", "effect": "If unit initiates combat, unit granted Atk/Spd+2 during battle.", "sp": "120", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Swift Sparrow 2", "effect": "If unit initiates combat, unit granted Atk/Spd+4 during battle.", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Atk Ploy 1", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-3 until the end of foe's next action.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Atk Ploy 2", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-4 until the end of foe's next action.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Atk Ploy 3", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-5 until the end of foe's next action.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "klein__silver_nobleman":
    {   "tag": "klein__silver_nobleman",
        "name": "Klein",
        "epithet": "Silver Nobleman",
        "description": "A young general of Etruria. Clarine's brother. Treats all as equals.",
        "origin": "Fire Emblem: The Binding Blade",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 17, 9, 7, 4, 4 ],
            "5": [ 18, 9, 7, 5, 5 ]
        },
        "growth_points": [ 6, 6, 8, 3, 5 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Brave Bow", "mt": "4", "rng": "2", "effect": "Spd-5. Effective against flying units.  Attacks twice if unit initiates combat.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Brave Bow+", "mt": "7", "rng": "2", "effect": "Spd-5. Effective against flying units.  Attacks twice if unit initiates combat.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Chilling Wind", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "100", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Glacies", "cooldown": "4", "effect": "Boosts damage dealt by 80% of unit's Res.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Death Blow 1", "effect": "Grants Atk+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Death Blow 2", "effect": "Grants Atk+4 during combat if unit initiates the attack.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Death Blow 3", "effect": "Grants Atk+6 during combat if unit initiates the attack.", "sp": "200", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Quick Riposte 1", "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 90%.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Quick Riposte 2", "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 80%.", "sp": "120", "learn": "4", "inherit": "None" },
            { "name": "Quick Riposte 3", "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 70%.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "lachesis__lionhearts_sister":
    {   "tag": "lachesis__lionhearts_sister",
        "name": "Lachesis",
        "epithet": "Lionheart's Sister",
        "description": "Lady of House Nordion. Adores her older brother, Eldigan, to the point that other men pale in comparison.",
        "origin": "Fire Emblem: Genealogy of the Holy War",
        "weapon_type": "colorless_staff",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 16, 5, 8, 4, 8 ],
            "5": [ 17, 6, 8, 5, 8 ]
        },
        "growth_points": [ 6, 8, 4, 4, 6 ],
        "base_weapons":
        [   { "name": "Assault", "mt": "10", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Absorb", "mt": "4", "rng": "2", "effect": "Recovers HP=50% of damage dealt.", "sp": "150", "known": "-", "learn": "4" },
            { "name": "Absorb+", "mt": "7", "rng": "2", "effect": "Restores HP = 50% of damage dealt. After combat, if unit attacked, restores 7 HP to allies within 2 spaces of unit.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Heal", "rng": "1", "effect": "Restores 5 HP.", "sp": "-", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Mend", "rng": "1", "effect": "Restores 10 HP.", "sp": "100", "known": "4", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Physic", "rng": "2", "effect": "Restores 8 HP. Rng: 2.", "sp": "200", "known": "5", "learn": "4", "inherit": "ONLY_STAFF" },
            { "name": "Physic+", "rng": "2", "effect": "Restores HP = 50% of Atk. (Minimum of 8 HP.) Rng: 2.", "sp": "300", "known": "-", "learn": "5", "inherit": "ONLY_STAFF" }
        ],
        "base_special":
        [   { "name": "Imbue", "cooldown": "1", "effect": "When healing an ally with a staff, increases recovered HP by 10.", "sp": "50", "known": "4", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Solid-Earth Balm", "cooldown": "1", "effect": "When healing an ally with a staff, grants all allies Def+4 for 1 turn.", "sp": "150", "known": "5", "learn": "4", "inherit": "ONLY_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Res 1", "effect": "Grants adjacent allies Res+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Res 2", "effect": "Grants adjacent allies Res+3 during combat.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Spur Res 3", "effect": "Grants adjacent allies Res+4 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "laslow__dancing_duelist":
    {   "tag": "laslow__dancing_duelist",
        "name": "Laslow",
        "epithet": "Dancing Duelist",
        "description": "A mysterious man with a flair for dancing and flirting. One of Xander's retainers.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 19, 8, 6, 5, 4 ],
            "4": [ 19, 9, 7, 5, 4 ],
            "5": [ 20, 9, 7, 6, 5 ]
        },
        "growth_points": [ 7, 8, 5, 7, 4 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Silver Sword+", "mt": "15", "rng": "1", "effect": "-", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Daylight", "cooldown": "3", "effect": "Heal 30% of damage dealt.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Noontime", "cooldown": "2", "effect": "Heal 30% of damage dealt.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Axebreaker 1", "effect": "If unit's HP ≥ 90% in combat against an axe user, unit makes a follow-up attack and foe cannot.", "sp": "50", "learn": "-", "inherit": "Excludes Blue Weapon Users" },
            { "name": "Axebreaker 2", "effect": "If unit's HP ≥ 70% in combat against an axe user, unit makes a follow-up attack and foe cannot.", "sp": "100", "learn": "3", "inherit": "Excludes Blue Weapon Users" },
            { "name": "Axebreaker 3", "effect": "If unit's HP ≥ 50% in combat against an axe user, unit makes a follow-up attack and foe cannot.", "sp": "200", "learn": "4", "inherit": "Excludes Blue Weapon Users" }
        ],
        "base_passive_C":
        [   { "name": "Hone Spd 1", "effect": "Grants adjacent allies Spd+2 through their next actions at the start of each turn.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Hone Spd 2", "effect": "Grants adjacent allies Spd+3 through their next actions at the start of each turn.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Hone Spd 3", "effect": "Grants adjacent allies Spd+4 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "legion__masked_maniac":
    {   "tag": "legion__masked_maniac",
        "name": "Legion",
        "epithet": "Masked Maniac",
        "description": "One of a group of assassins. Wears an odd mask, as do his many \"brothers.\"",
        "origin": "Fire Emblem: New Mystery of the Emblem",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "3": [ 19, 9, 8, 4, 2 ],
            "4": [ 19, 10, 9, 4, 2 ],
            "5": [ 20, 10, 9, 5, 3 ]
        },
        "growth_points": [ 8, 8, 8, 4, 3 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Legion's Axe", "mt": "10", "rng": "1", "effect": "After combat, bonuses on targeted foe become penalties through its next action.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Legion's Axe+", "mt": "14", "rng": "1", "effect": "After combat, bonuses on targeted foe become penalties through its next action.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Retribution", "cooldown": "3", "effect": "Grants bonus to damage dealt equal to 30% of damage suffered.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Reprisal", "cooldown": "2", "effect": "Grants bonus to damage dealt equal to 30% of damage suffered.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Fury 1", "effect": "Grants Atk/Spd/Def/Res+1. Unit takes 2 damage after combat.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Fury 2", "effect": "Grants Atk/Spd/Def/Res+2. Unit takes 4 damage after combat.", "sp": "100", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Fury 3", "effect": "Grants Atk/Spd/Def/Res+3. Unit takes 6 damage after combat.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Obstruct 1", "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 90%. (No effect on foes with a Pass skill.)", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Obstruct 2", "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 70%. (No effect on foes with a Pass skill.)", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Obstruct 3", "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 50%. (No effect on foes with a Pass skill.)", "sp": "200", "learn": "4", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "leo__sorcerous_prince":
    {   "tag": "leo__sorcerous_prince",
        "name": "Leo",
        "epithet": "Sorcerous Prince",
        "description": "A talented Nohrian prince who wields the divine tome Brynhildr.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "red_tome",
        "colour": "red",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 7, 5, 6, 8 ]
        },
        "growth_points": [ 6, 6, 4, 5, 6 ],
        "base_weapons":
        [   { "name": "Flux", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Ruin", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Fenrir", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Brynhildr", "mt": "14", "rng": "2", "effect": "If unit initiates attack, restricts foe's next-turn movement to 1 space or less.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Light", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Blazing Light", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Quick Riposte 1", "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 90%.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Quick Riposte 2", "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 80%.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Quick Riposte 3", "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 70%.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Savage Blow 1", "effect": "If unit initiates attack, foes within 2 spaces of target take 3 damage after combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Savage Blow 2", "effect": "If unit initiates attack, foes within 2 spaces of target take 5 damage after combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Savage Blow 3", "effect": "If unit initiates attack, foes within 2 spaces of target take 7 damage after combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "leo__seashores_prince":
    {   "tag": "leo__seashores_prince",
        "name": "Leo",
        "epithet": "Seashore's Prince",
        "subname": "🍅",
        "description": "A suntan-despising Nohrian prince who wields the divine tome Brynhildr. Loves red summer produce.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "red_tome",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 18, 8, 5, 6, 7 ]
        },
        "growth_points": [ 5, 7, 6, 1, 9 ],
        "base_weapons":
        [   { "name": "Flux", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Ruin", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Tomato Tome", "mt": "8", "rng": "2", "effect": "Grants allies within 2 spaces Atk/Spd+1 during combat.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Tomato Tome+", "mt": "12", "rng": "2", "effect": "Grants allies within 2 spaces Atk/Spd+1 during combat.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Chilling Wind", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Iceberg", "cooldown": "3", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Seal Res 1", "effect": "After combat, foe suffers Res-3 through its next action.", "sp": "40", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Res 2", "effect": "After combat, foe suffers Res-5 through its next action.", "sp": "80", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Res 3", "effect": "After combat, foe suffers Res-7 through its next action.", "sp": "160", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C":
        [   { "name": "Atk Ploy 1", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-3 until the end of foe's next action.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Atk Ploy 2", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-4 until the end of foe's next action.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Atk Ploy 3", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-5 until the end of foe's next action.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "leon__true_of_heart":
    {   "tag": "leon__true_of_heart",
        "name": "Leon",
        "epithet": "True of Heart",
        "description": "A handsome but narcissistic Zofian archer. Adores his friend Valbar.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 16, 8, 5, 8, 4 ],
            "5": [ 17, 8, 6, 8, 5 ]
        },
        "growth_points": [ 6, 8, 7, 6, 1 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Slaying Bow", "mt": "8", "rng": "2", "effect": "Effective against flying units.  Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Slaying Bow+", "mt": "12", "rng": "2", "effect": "Effective against flying units.  Accelerates Special trigger (cooldown count-1).", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Glowing Ember", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Def.", "sp": "100", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Ignis", "cooldown": "4", "effect": "Boosts damage dealt by 80% of unit's Def.", "sp": "200", "known": "5", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Speed +1", "effect": "Grants Spd+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Speed +2", "effect": "Grants Spd+2.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Speed +3", "effect": "Grants Spd+3.", "sp": "120", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Guard 1", "effect": "If unit's HP is 100% at start of combat, enemy is inflicted with Special cooldown charge -1. (If using other similar skill, only highest value applied.)", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Guard 2", "effect": "If unit's HP is ≥ 90% at start of combat, enemy is inflicted with Special cooldown charge -1. (If using other similar skill, only highest value applied.)", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Guard 3", "effect": "If unit's HP is ≥ 80% at start of combat, enemy is inflicted with Special cooldown charge -1. (If using other similar skill, only highest value applied.)", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "lilina__delightful_noble":
    {   "tag": "lilina__delightful_noble",
        "name": "Lilina",
        "epithet": "Delightful Noble",
        "description": "A noble of Ostia and daughter of Hector with a natural gift for magic. Roy's friend since childhood.",
        "origin": "Fire Emblem: The Binding Blade",
        "weapon_type": "red_tome",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 15, 9, 5, 3, 9 ],
            "5": [ 16, 9, 6, 4, 9 ]
        },
        "growth_points": [ 5, 9, 5, 3, 6 ],
        "base_weapons":
        [   { "name": "Fire", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elfire", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Bolganone", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Bolganone+", "mt": "13", "rng": "2", "effect": "-", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Flame", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Growing Flame", "cooldown": "4", "effect": "Before combat this unit initiates, foes in a wide area around target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Attack +1", "effect": "Grants Atk+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Attack +2", "effect": "Grants Atk+2.", "sp": "60", "learn": "4", "inherit": "None" },
            { "name": "Attack +3", "effect": "Grants Atk+3.", "sp": "120", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Atk 1", "effect": "Grants adjacent allies Atk+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Atk 2", "effect": "Grants adjacent allies Atk+3 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Spur Atk 3", "effect": "Grants adjacent allies Atk+4 during combat.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "linde__light_mage":
    {   "tag": "linde__light_mage",
        "name": "Linde",
        "epithet": "Light Mage",
        "description": "Daughter of Pontifex Miloah from Archanea. Inherited the light tome Aura. Wants to avenge her father's death.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "blue_tome",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 9, 10, 4, 5 ]
        },
        "growth_points": [ 5, 8, 8, 1, 6 ],
        "base_weapons":
        [   { "name": "Thunder", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elthunder", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Thoron", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Aura", "mt": "14", "rng": "2", "effect": "Restores 5 HP to adjacent allies after any combat this unit initiates.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support":
        [   { "name": "Ardent Sacrifice", "rng": "1", "effect": "Heals adjacent ally 10 HP. Unit loses 10 HP (but cannot reach 0 this way).", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Speed +1", "effect": "Grants Spd+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Speed +2", "effect": "Grants Spd+2.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Speed +3", "effect": "Grants Spd+3.", "sp": "120", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Fortify Res 1", "effect": "Grants adjacent allies Res+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Fortify Res 2", "effect": "Grants adjacent allies Res+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Fortify Res 3", "effect": "Grants adjacent allies Res+4 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "lissa__sprightly_cleric":
    {   "tag": "lissa__sprightly_cleric",
        "name": "Lissa",
        "epithet": "Sprightly Cleric",
        "description": "Princess of Ylisse's royal house and Chrom's younger sister. Determined to prove herself.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "colorless_staff",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "1": [ 15, 5, 4, 4, 6 ],
            "2": [ 15, 6, 4, 4, 7 ],
            "3": [ 16, 6, 5, 5, 7 ],
            "4": [ 16, 7, 5, 5, 8 ],
            "5": [ 17, 7, 6, 6, 8 ]
        },
        "growth_points": [ 6, 5, 5, 6, 6 ],
        "base_weapons":
        [   { "name": "Assault", "mt": "10", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "1", "inherit": "Prf" },
            { "name": "Gravity", "mt": "6", "rng": "2", "effect": "After combat, if unit attacked, prevents foe from moving more than 1 space through its next action.", "sp": "150", "known": "-", "learn": "3" },
            { "name": "Gravity+", "mt": "10", "rng": "2", "effect": "After combat, if unit attacked, prevents target and foes within 1 space of target from moving more than 1 space through their next actions.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Heal", "rng": "1", "effect": "Restores 5 HP.", "sp": "-", "known": "1", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Reconcile", "rng": "1", "effect": "Restores 7 HP each to target and this unit.", "sp": "100", "known": "3", "learn": "2", "inherit": "ONLY_STAFF" },
            { "name": "Rehabilitate", "rng": "1", "effect": "Restores 7 HP or more the further below 50% the target's HP is. Slows special trigger (cooldown count+1).", "sp": "200", "known": "-", "learn": "4", "inherit": "ONLY_STAFF" },
            { "name": "Rehabilitate+", "rng": "1", "effect": "Restores HP = 50% of Atk -10. (Minimum of 7 HP.) If target's HP is ≤ 50%, the lower the target's HP, the more HP is restored.", "sp": "300", "known": "-", "learn": "5", "inherit": "ONLY_STAFF" }
        ],
        "base_special":
        [   { "name": "Imbue", "cooldown": "1", "effect": "When healing an ally with a staff, increases recovered HP by 10.", "sp": "50", "known": "4", "learn": "2", "inherit": "ONLY_STAFF" },
            { "name": "Kindled-Fire Balm", "cooldown": "1", "effect": "When healing an ally with a staff, grants all allies Atk+4 for 1 turn.", "sp": "150", "known": "-", "learn": "3", "inherit": "ONLY_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Renewal 1", "effect": "At the start of every fourth turn, restores 10 HP.", "sp": "60", "learn": "3", "inherit": "None" },
            { "name": "Renewal 2", "effect": "At the start of every third turn, restores 10 HP.", "sp": "120", "learn": "4", "inherit": "None" },
            { "name": "Renewal 3", "effect": "At the start of every second turn, restores 10 HP.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "lissa__pure_joy":
    {   "tag": "lissa__pure_joy",
        "name": "Lissa",
        "epithet": "Pure Joy",
        "subname": "🎄",
        "description": "A princess of Ylisse and Chrom's sister. Of all the winter-festival party foods, she loves cake the most.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Armored",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 21, 9, 8, 9, 8 ]
        },
        "growth_points": [ 6, 7, 6, 8, 8 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Handbell", "mt": "10", "rng": "1", "effect": "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Handbell+", "mt": "14", "rng": "1", "effect": "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Glowing Ember", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Def.", "sp": "100", "known": "-", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Bonfire", "cooldown": "3", "effect": "Boosts damage dealt by 50% of unit's Def.", "sp": "200", "known": "-", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Bold Fighter 1", "effect": "If unit's HP = 100% and unit initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)", "sp": "60", "learn": "-", "inherit": "Armored Only" },
            { "name": "Bold Fighter 2", "effect": "If unit's HP ≥ 50% and unit initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)", "sp": "120", "learn": "-", "inherit": "Armored Only" },
            { "name": "Bold Fighter 3", "effect": "If unit initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)", "sp": "240", "learn": "5", "inherit": "Armored Only" }
        ],
        "base_passive_C":
        [   { "name": "Fortify Def 1", "effect": "Grants adjacent allies Def+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Fortify Def 2", "effect": "Grants adjacent allies Def+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Fortify Armor", "effect": "Grants adjacent armor allies Def/Res+6 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "Armored Only" }
        ]
    },
    "lloyd__white_wolf":
    {   "tag": "lloyd__white_wolf",
        "name": "Lloyd",
        "epithet": "White Wolf",
        "description": "A member of the Black Fang assassins. Delivers justice to those they deem criminals. Known as the White Wolf. Son of the group's leader.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "3": [ 16, 7, 8, 4, 7 ],
            "4": [ 16, 8, 9, 4, 7 ],
            "5": [ 17, 8, 9, 5, 8 ]
        },
        "growth_points": [ 7, 7, 8, 3, 6 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Regal Blade", "mt": "16", "rng": "1", "effect": "If foe's HP is 100% when combat starts, unit receives Atk/Spd+2 during combat.", "sp": "400", "known": "-", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Chilling Wind", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Iceberg", "cooldown": "3", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Pass 1", "effect": "Units can pass through foes if its own HP ≥ 75%.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Pass 2", "effect": "Units can pass through foes if its own HP ≥ 50%.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Pass 3", "effect": "Units can pass through foes if its own HP ≥ 25%.", "sp": "200", "learn": "4", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Threaten Atk 1", "effect": "Inflicts Atk-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Threaten Atk 2", "effect": "Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Threaten Atk 3", "effect": "Inflicts Atk-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "lonqu__solitary_blade":
    {   "tag": "lonqu__solitary_blade",
        "name": "Lon'qu",
        "epithet": "Solitary Blade",
        "description": "A skilled swordsman of Regna Ferox who is oddly skittish around women.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 18, 6, 10, 4, 4 ],
            "4": [ 18, 7, 11, 4, 4 ],
            "5": [ 19, 7, 11, 5, 5 ]
        },
        "growth_points": [ 8, 6, 9, 4, 4 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Killing Edge", "mt": "7", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Killing Edge+", "mt": "11", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Night Sky", "cooldown": "3", "effect": "Grants +50% to damage dealt.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Glimmer", "cooldown": "2", "effect": "Grants +50% to damage dealt.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Speed +1", "effect": "Grants Spd+1.", "sp": "30", "learn": "3", "inherit": "None" },
            { "name": "Speed +2", "effect": "Grants Spd+2.", "sp": "60", "learn": "4", "inherit": "None" },
            { "name": "Speed +3", "effect": "Grants Spd+3.", "sp": "120", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Vantage 1", "effect": "Unit counterattacks first when attacked at HP ≤ 25%.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Vantage 2", "effect": "Unit counterattacks first when attacked at HP ≤ 50%.", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Vantage 3", "effect": "Unit counterattacks first when attacked at HP ≤ 75%.", "sp": "200", "learn": "4", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "lucina__future_witness":
    {   "tag": "lucina__future_witness",
        "name": "Lucina",
        "epithet": "Future Witness",
        "description": "A princess and daughter of Chrom who traveled to her past to prevent apocalypse.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 19, 8, 10, 6, 4 ]
        },
        "growth_points": [ 7, 8, 8, 5, 3 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Falchion", "mt": "16", "rng": "1", "effect": "Effective against dragons.  At the start of every third turn, unit recovers 10 HP.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Luna", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-50%.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" },
            { "name": "Aether", "cooldown": "5", "effect": "Resolve combat as if foe suffered Def/Res-50%. Unit recovers HP=half damage dealt.", "sp": "500", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Defiant Spd 1", "effect": "Grants Spd+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "Defiant Spd 2", "effect": "Grants Spd+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Defiant Spd 3", "effect": "Grants Spd+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Atk 1", "effect": "Grants adjacent allies Atk+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Atk 2", "effect": "Grants adjacent allies Atk+3 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Spur Atk 3", "effect": "Grants adjacent allies Atk+4 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "lucina__spring_exalt":
    {   "tag": "lucina__spring_exalt",
        "name": "Lucina",
        "epithet": "Spring Exalt",
        "subname": "🐇",
        "description": "Daughter of Chrom. Future exalt of Ylisse. Curious about the old festival traditions of Ylisse.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "blue_tome",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 7, 10, 5, 6 ]
        },
        "growth_points": [ 5, 6, 8, 4, 5 ],
        "base_weapons":
        [   { "name": "Thunder", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elthunder", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Blue Egg", "mt": "7", "rng": "2", "effect": "If unit initiates attack, unit recovers 4 HP after the battle.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Blue Egg+", "mt": "11", "rng": "2", "effect": "If unit initiates attack, unit recovers 4 HP after the battle.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Rally Speed", "rng": "1", "effect": "Grants Spd+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Darting Blow 1", "effect": "Grants Spd+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Swift Sparrow 1", "effect": "If unit initiates combat, unit granted Atk/Spd+2 during battle.", "sp": "120", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Swift Sparrow 2", "effect": "If unit initiates combat, unit granted Atk/Spd+4 during battle.", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Seal Res 1", "effect": "After combat, foe suffers Res-3 through its next action.", "sp": "40", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Res 2", "effect": "After combat, foe suffers Res-5 through its next action.", "sp": "80", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Res 3", "effect": "After combat, foe suffers Res-7 through its next action.", "sp": "160", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C": []
    },
    "lucina__brave_princess":
    {   "tag": "lucina__brave_princess",
        "name": "Lucina",
        "epithet": "Brave Princess",
        "subname": "🌟",
        "description": "A princess and the daughter of Chrom with a strong sense of justice. Fights in similar garb to her beloved father.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 8, 10, 8, 4 ]
        },
        "growth_points": [ 7, 8, 8, 5, 3 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Lance", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Geirskögul", "mt": "16", "rng": "1", "effect": "Grants Def+3. Grants allies with sword, lance, axe, bow, or dagger within 2 spaces Atk/Spd+3 during combat.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Daylight", "cooldown": "3", "effect": "Heal 30% of damage dealt.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Sol", "cooldown": "3", "effect": "Heal 50% of damage dealt.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" },
            { "name": "Aether", "cooldown": "5", "effect": "Resolve combat as if foe suffered Def/Res-50%. Unit recovers HP=half damage dealt.", "sp": "500", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Armored Blow 1", "effect": "Grants Def+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Sturdy Blow 1", "effect": "Grants Atk/Def+2 during combat if unit initiates combat.", "sp": "120", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Sturdy Blow 2", "effect": "Grants Atk/Def+4 during combat if unit initiates combat.", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Spd 1", "effect": "Grants adjacent allies Spd+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Drive Spd 1", "effect": "Grants allies within 2 spaces Spd+2 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Drive Spd 2", "effect": "Grants allies within 2 spaces Spd+3 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "lucius__the_light":
    {   "tag": "lucius__the_light",
        "name": "Lucius",
        "epithet": "The Light",
        "description": "A gentle cleric who serves Raven. Carries a heavy burden from a dark childhood.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "colorless_staff",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 17, 5, 8, 2, 9 ],
            "5": [ 18, 6, 8, 3, 9 ]
        },
        "growth_points": [ 5, 8, 6, 1, 8 ],
        "base_weapons":
        [   { "name": "Assault", "mt": "10", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Pain", "mt": "3", "rng": "2", "effect": "After combat, if unit attacked, deals 10 damage to foe.", "sp": "150", "known": "-", "learn": "4" },
            { "name": "Pain+", "mt": "10", "rng": "2", "effect": "After combat, if unit attacked, deals 10 damage to target and foes within 2 spaces of target.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Heal", "rng": "1", "effect": "Restores 5 HP.", "sp": "-", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Reconcile", "rng": "1", "effect": "Restores 7 HP each to target and this unit.", "sp": "100", "known": "4", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Martyr", "rng": "1", "effect": "Restores HP=7+ this unit's suffered damage. Unit heals HP=half suffered damage. Slows Special trigger (cooldown count+1).", "sp": "200", "known": "5", "learn": "4", "inherit": "ONLY_STAFF" },
            { "name": "Martyr+", "rng": "1", "effect": "Restores HP = this unit's suffered damage +50% of Atk. (Minimum of 7 HP.) Also restores HP to unit = half suffered damage.", "sp": "300", "known": "-", "learn": "5", "inherit": "ONLY_STAFF" }
        ],
        "base_special":
        [   { "name": "Imbue", "cooldown": "1", "effect": "When healing an ally with a staff, increases recovered HP by 10.", "sp": "50", "known": "4", "learn": "-", "inherit": "ONLY_STAFF" },

            {   "name": "Miracle",
                "cooldown": "5",
                "effect": "If HP &gt; 1, survive a lethal attack with 1 HP remaining.",
                "sp": "200",
                "known": "5",
                "learn": "4",
                "inherit": null
            }
        ],
        "base_passive_A":
        [   { "name": "HP +3", "effect": "Grants +3 to max HP.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "HP +4", "effect": "Grants +4 to max HP.", "sp": "80", "learn": "4", "inherit": "None" },
            { "name": "HP +5", "effect": "Grants +5 to max HP.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C": []
    },
    "lukas__sharp_soldier":
    {   "tag": "lukas__sharp_soldier",
        "name": "Lukas",
        "epithet": "Sharp Soldier",
        "description": "A young noble fighting for the Deliverance. Strict, calm, and considerate.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 18, 9, 4, 10, 3 ],
            "5": [ 19, 9, 5, 10, 4 ]
        },
        "growth_points": [ 8, 8, 4, 9, 2 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Killer Lance", "mt": "7", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Killer Lance+", "mt": "11", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Holy Vestments", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.", "sp": "100", "known": "4", "learn": "-", "inherit": "ONLY_MELEE" },
            { "name": "Sacred Cowl", "cooldown": "2", "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.", "sp": "200", "known": "-", "learn": "4", "inherit": "ONLY_MELEE" }
        ],
        "base_passive_A":
        [   { "name": "Fortress Def 1", "effect": "Grants Def+3. Inflicts Atk-3.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "Fortress Def 2", "effect": "Grants Def+4. Inflicts Atk-3.", "sp": "80", "learn": "4", "inherit": "None" },
            { "name": "Fortress Def 3", "effect": "Grants Def+5. Inflicts Atk-3.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Obstruct 1", "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 90%. (No effect on foes with a Pass skill.)", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Obstruct 2", "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 70%. (No effect on foes with a Pass skill.)", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Obstruct 3", "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 50%. (No effect on foes with a Pass skill.)", "sp": "200", "learn": "4", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "luke__rowdy_squire":
    {   "tag": "luke__rowdy_squire",
        "name": "Luke",
        "epithet": "Rowdy Squire",
        "description": "An aspiring knight of Altea. Flirtatious. Roderick's longtime friend and rival.",
        "origin": "Fire Emblem: New Mystery of the Emblem",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 19, 8, 6, 8, 5 ]
        },
        "growth_points": [ 7, 8, 6, 6, 3 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Brave Sword", "mt": "5", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Brave Sword+", "mt": "8", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Glowing Ember", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Def.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Bonfire", "cooldown": "3", "effect": "Boosts damage dealt by 50% of unit's Def.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Fire Boost 1", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Fire Boost 2", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+4 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Fire Boost 3", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+6 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Panic Ploy 1", "effect": "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 5 or more lower than unit through foe's next action.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Panic Ploy 2", "effect": "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 3 or more lower than unit through foe's next action.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Panic Ploy 3", "effect": "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 1 or more lower than unit through foe's next action.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "lute__prodigy":
    {   "tag": "lute__prodigy",
        "name": "Lute",
        "epithet": "Prodigy",
        "description": "A young mage of Renais with an unusual temperament. Confident in her abilities.",
        "origin": "Fire Emblem: The Sacred Stones",
        "weapon_type": "blue_tome",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 10, 8, 3, 8 ]
        },
        "growth_points": [ 4, 8, 7, 2, 8 ],
        "base_weapons":
        [   { "name": "Thunder", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elthunder", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Thoron", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Weirding Tome", "mt": "14", "rng": "2", "effect": "Grants Spd+3. At start of turn, all foes in cardinal directions, and with Res 1 or more lower than unit, suffer Spd-5 until the end of foes' next actions.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support":
        [   { "name": "Rally Attack", "rng": "1", "effect": "Grants Atk+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Rally Attack Resistance", "rng": "1", "effect": "Grants Atk/Res+3 to an adjacent ally until the end of the turn.", "sp": "300", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Resistance +1", "effect": "Grants Res+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "HP Res 1", "effect": "Grants HP+3, Res+1.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "HP Res 2", "effect": "Grants HP+4, Res+2.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Res Ploy 1", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-3 until the end of foe's next action.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Res Ploy 2", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-4 until the end of foe's next action.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Res Ploy 3", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-5 until the end of foe's next action.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "lyn__lady_of_the_plains":
    {   "tag": "lyn__lady_of_the_plains",
        "name": "Lyn",
        "epithet": "Lady of the Plains",
        "description": "A woman who grew up on the plains before learning she is the nobility of Caelin.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 18, 6, 11, 7, 5 ]
        },
        "growth_points": [ 5, 6, 8, 5, 7 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Sol Katti", "mt": "16", "rng": "1", "effect": "If wielder initiates attack at HP ≤ 50%, any follow-up occurs immediately.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Night Sky", "cooldown": "3", "effect": "Grants +50% to damage dealt.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Astra", "cooldown": "4", "effect": "Grants +150% to damage dealt.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" },
            { "name": "Galeforce", "cooldown": "5", "effect": "If this unit initiates an attack, it can take another action after combat. (Once per turn only.)", "sp": "500", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Defiant Atk 1", "effect": "Grants Atk+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "Defiant Atk 2", "effect": "Grants Atk+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Defiant Atk 3", "effect": "Grants Atk+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Spd 1", "effect": "Grants adjacent allies Spd+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Spd 2", "effect": "Grants adjacent allies Spd+3 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Spur Spd 3", "effect": "Grants adjacent allies Spd+4 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "lyn__bride_of_the_plains":
    {   "tag": "lyn__bride_of_the_plains",
        "name": "Lyn",
        "epithet": "Bride of the Plains",
        "subname": "💐",
        "description": "Noblewoman of Caelin. Eager to win the bridal tournament and nab the prize bouquet.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "colorless_staff",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 6, 10, 6, 5 ]
        },
        "growth_points": [ 6, 6, 7, 4, 5 ],
        "base_weapons":
        [   { "name": "Assault", "mt": "10", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Candlelight", "mt": "7", "rng": "2", "effect": "After combat, if unit attacked, inflicts status on foe preventing counterattacks through its next action.", "sp": "150", "known": "5", "learn": "-" },
            { "name": "Candlelight+", "mt": "11", "rng": "2", "effect": "After combat, if unit attacked, inflicts status on target and foes within 2 spaces of target preventing counterattacks through their next actions.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Heal", "rng": "1", "effect": "Restores 5 HP.", "sp": "-", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Reconcile", "rng": "1", "effect": "Restores 7 HP each to target and this unit.", "sp": "100", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Rehabilitate", "rng": "1", "effect": "Restores 7 HP or more the further below 50% the target's HP is. Slows special trigger (cooldown count+1).", "sp": "200", "known": "5", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Rehabilitate+", "rng": "1", "effect": "Restores HP = 50% of Atk -10. (Minimum of 7 HP.) If target's HP is ≤ 50%, the lower the target's HP, the more HP is restored.", "sp": "300", "known": "-", "learn": "5", "inherit": "ONLY_STAFF" }
        ],
        "base_special":
        [   { "name": "Imbue", "cooldown": "1", "effect": "When healing an ally with a staff, increases recovered HP by 10.", "sp": "50", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Swift-Winds Balm", "cooldown": "1", "effect": "When healing an ally with a staff, grants all allies Spd+4 for 1 turn.", "sp": "150", "known": "5", "learn": "-", "inherit": "ONLY_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Dazzling Staff 1", "effect": "If unit has 100% HP at the start of combat, the enemy cannot counterattack.", "sp": "60", "learn": "-", "inherit": "Staff Users Only" },
            { "name": "Dazzling Staff 2", "effect": "If unit has ≥ 50% HP at the start of combat, the enemy cannot counterattack.", "sp": "120", "learn": "-", "inherit": "Staff Users Only" },
            { "name": "Dazzling Staff 3", "effect": "The enemy cannot counterattack.", "sp": "240", "learn": "5", "inherit": "Staff Users Only" }
        ],
        "base_passive_C": []
    },
    "lyn__brave_lady":
    {   "tag": "lyn__brave_lady",
        "name": "Lyn",
        "epithet": "Brave Lady",
        "subname": "🏹",
        "description": "A woman who grew up on the plains. Uses the bow, like her father, Hassar.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 7, 9, 5, 6 ]
        },
        "growth_points": [ 5, 8, 8, 2, 6 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Bow", "mt": "9", "rng": "2", "effect": "Effective against flying units. ", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Mulagir", "mt": "14", "rng": "2", "effect": "Effective against flying units.  Grants Spd+3. If foe is magic user, foe's bonuses (from skills like Fortify, Rally, etc.) are nullified during combat.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Dragon Gaze", "cooldown": "4", "effect": "Grants +30% to Atk.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Draconic Aura", "cooldown": "3", "effect": "Grants +30% to Atk.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Death Blow 1", "effect": "Grants Atk+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Swift Sparrow 1", "effect": "If unit initiates combat, unit granted Atk/Spd+2 during battle.", "sp": "120", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Swift Sparrow 2", "effect": "If unit initiates combat, unit granted Atk/Spd+4 during battle.", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Sacae's Blessing", "effect": "If foe has sword, lance, or axe, foe cannot counterattack. (Skill cannot be inherited.)", "sp": "300", "learn": "5", "inherit": "Prf" }
        ],
        "base_passive_C":
        [   { "name": "Atk Smoke 1", "effect": "After combat, inflicts Atk-3 on foes within 2 spaces of target through their next actions.", "sp": "60", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Atk Smoke 2", "effect": "After combat, inflicts Atk-5 on foes within 2 spaces of target through their next actions.", "sp": "120", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Atk Smoke 3", "effect": "After combat, inflicts Atk-7 on foes within 2 spaces of target through their next actions.", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ]
    },
    "mae__bundle_of_energy":
    {   "tag": "mae__bundle_of_energy",
        "name": "Mae",
        "epithet": "Bundle of Energy",
        "description": "A mage from Novis and a dear friend of Celica. Always cheerful and energetic, but she has a tendency to get carried away.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "blue_tome",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 15, 10, 6, 2, 8 ],
            "5": [ 16, 10, 7, 3, 8 ]
        },
        "growth_points": [ 5, 8, 7, 2, 6 ],
        "base_weapons":
        [   { "name": "Thunder", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elthunder", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Blárowl", "mt": "6", "rng": "2", "effect": "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Blárowl+", "mt": "10", "rng": "2", "effect": "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Draw Back", "rng": "1", "effect": "Unit moves 1 space away from target ally, who moves to unit's former position.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Desperation 1", "effect": "If unit initiates combat with HP ≤ 25%, follow-up attacks occur immediately after unit's attack.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Desperation 2", "effect": "If unit initiates combat with HP ≤ 50%, follow-up attacks occur immediately after unit's attack.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Desperation 3", "effect": "If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "maria__minervas_sister":
    {   "tag": "maria__minervas_sister",
        "name": "Maria",
        "epithet": "Minerva's Sister",
        "description": "Princess of Macedon. Younger sister of Minerva and Michalis, whom she loves dearly.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "colorless_staff",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 16, 4, 8, 3, 10 ],
            "5": [ 17, 5, 8, 4, 10 ]
        },
        "growth_points": [ 5, 6, 8, 3, 6 ],
        "base_weapons":
        [   { "name": "Assault", "mt": "10", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Panic", "mt": "7", "rng": "2", "effect": "After combat, if unit attacked, bonuses on foe become penalties through its next action.", "sp": "150", "known": "-", "learn": "4" },
            { "name": "Panic+", "mt": "11", "rng": "2", "effect": "After combat, if unit attacked, bonuses on target and foes within 2 spaces of target become penalties through their next actions.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Heal", "rng": "1", "effect": "Restores 5 HP.", "sp": "-", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Mend", "rng": "1", "effect": "Restores 10 HP.", "sp": "100", "known": "4", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Physic", "rng": "2", "effect": "Restores 8 HP. Rng: 2.", "sp": "200", "known": "5", "learn": "4", "inherit": "ONLY_STAFF" },
            { "name": "Physic+", "rng": "2", "effect": "Restores HP = 50% of Atk. (Minimum of 8 HP.) Rng: 2.", "sp": "300", "known": "-", "learn": "5", "inherit": "ONLY_STAFF" }
        ],
        "base_special":
        [   { "name": "Imbue", "cooldown": "1", "effect": "When healing an ally with a staff, increases recovered HP by 10.", "sp": "50", "known": "4", "learn": "-", "inherit": "ONLY_STAFF" },

            {   "name": "Miracle",
                "cooldown": "5",
                "effect": "If HP &gt; 1, survive a lethal attack with 1 HP remaining.",
                "sp": "200",
                "known": "5",
                "learn": "4",
                "inherit": null
            }
        ],
        "base_passive_A": [],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Fortify Res 1", "effect": "Grants adjacent allies Res+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Fortify Res 2", "effect": "Grants adjacent allies Res+3 through their next actions at the start of each turn.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Fortify Res 3", "effect": "Grants adjacent allies Res+4 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "marth__altean_prince":
    {   "tag": "marth__altean_prince",
        "name": "Marth",
        "epithet": "Altean Prince",
        "description": "Prince of Altea who fights for his homeland and deeply values his friends.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 18, 7, 8, 6, 5 ],
            "5": [ 19, 7, 8, 7, 6 ]
        },
        "growth_points": [ 6, 7, 8, 6, 4 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Falchion", "mt": "16", "rng": "1", "effect": "Effective against dragons.  At the start of every third turn, unit recovers 10 HP.", "sp": "400", "known": "5", "learn": "5", "inherit": "Prf" }
        ],
        "base_support":
        [   { "name": "Pivot", "rng": "1", "effect": "Unit moves to opposite side of adjacent ally.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Escape Route 1", "effect": "Enables unit whose own HP is ≤ 30% to warp adjacent to any ally.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Escape Route 2", "effect": "Enables unit whose own HP is ≤ 40% to warp adjacent to any ally.", "sp": "120", "learn": "4", "inherit": "None" },
            { "name": "Escape Route 3", "effect": "Enables unit whose own HP is ≤ 50% to warp adjacent to any ally.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Spur Spd 1", "effect": "Grants adjacent allies Spd+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Spd 2", "effect": "Grants adjacent allies Spd+3 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Spur Spd 3", "effect": "Grants adjacent allies Spd+4 during combat.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "marth__enigmatic_blade":
    {   "tag": "marth__enigmatic_blade",
        "name": "Marth",
        "epithet": "Enigmatic Blade",
        "subname": "🎭",
        "description": "A mysterious swordsman who hides his face behind a mask. Calls himself Marth.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "4": [ 18, 8, 10, 5, 3 ],
            "5": [ 19, 8, 10, 6, 4 ]
        },
        "growth_points": [ 7, 8, 8, 5, 3 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Falchion", "mt": "16", "rng": "1", "effect": "Effective against dragons.  At the start of every third turn, unit recovers 10 HP.", "sp": "400", "known": "5", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B": [],
        "base_passive_C": []
    },
    "mathilda__legendary_knight":
    {   "tag": "mathilda__legendary_knight",
        "name": "Mathilda",
        "epithet": "Legendary Knight",
        "description": "A paladin of the Deliverance and Clive's betrothed. Strong as a demon, yet gentle to her love.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 15, 6, 8, 6, 8 ],
            "5": [ 16, 7, 8, 7, 8 ]
        },
        "growth_points": [ 5, 6, 7, 4, 8 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Ridersbane", "mt": "10", "rng": "1", "effect": "Effective against cavalry units. ", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Ridersbane+", "mt": "14", "rng": "1", "effect": "Effective against cavalry units. ", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Rally Resistance", "rng": "1", "effect": "Grants Res+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Cancel Affinity 1", "effect": "Any weapon triangle affinity granted by unit's skills is negated. Also negates any weapon triangle affinity granted by foe's skills.", "sp": "50", "learn": "-", "inherit": "Excludes Tome and Staff Users" },
            { "name": "Cancel Affinity 2", "effect": "Any weapon triangle affinity granted by unit's skills is negated. If affinity disadvantage exists, weapon triangle affinity granted by foe's skills is negated.", "sp": "100", "learn": "4", "inherit": "Excludes Tome and Staff Users" },
            { "name": "Cancel Affinity 3", "effect": "Any weapon triangle affinity granted by unit's skills is negated. If affinity disadvantage exists, weapon triangle affinity granted by foe's skills is reversed.", "sp": "200", "learn": "5", "inherit": "Excludes Tome and Staff Users" }
        ],
        "base_passive_C":
        [   { "name": "Hone Atk 1", "effect": "Grants adjacent allies Atk+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Hone Atk 2", "effect": "Grants adjacent allies Atk+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Hone Atk 3", "effect": "Grants adjacent allies Atk+4 through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "matthew__faithful_spy":
    {   "tag": "matthew__faithful_spy",
        "name": "Matthew",
        "epithet": "Faithful Spy",
        "description": "Happy-go-lucky spy who's actually quite sly. Serves Hector, brother of the Marquess of Ostia.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "colorless_dagger",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "2": [ 15, 5, 9, 4, 3 ],
            "3": [ 16, 5, 9, 5, 4 ],
            "4": [ 16, 6, 10, 5, 4 ],
            "5": [ 17, 6, 10, 6, 5 ]
        },
        "growth_points": [ 7, 5, 7, 7, 2 ],
        "base_weapons":
        [   { "name": "Iron Dagger", "mt": "3", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "50", "known": "2", "learn": "-" },
            { "name": "Steel Dagger", "mt": "5", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Rogue Dagger", "mt": "4", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action. Grants unit Def/Res+3 for 1 turn.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Rogue Dagger+", "mt": "7", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action. Grants unit Def/Res+5 for 1 turn.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Reciprocal Aid", "rng": "1", "effect": "Swap HP with adjacent ally (neither unit can go above their max HP).", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Poison Strike 1", "effect": "Inflicts 4 damage to foe after any combat this unit initiates.", "sp": "60", "learn": "3", "inherit": "Excludes Staff Users" },
            { "name": "Poison Strike 2", "effect": "Inflicts 7 damage to foe after any combat this unit initiates.", "sp": "120", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Poison Strike 3", "effect": "Inflicts 10 damage to foe after any combat this unit initiates.", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C":
        [   { "name": "Hone Spd 1", "effect": "Grants adjacent allies Spd+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Hone Spd 2", "effect": "Grants adjacent allies Spd+3 through their next actions at the start of each turn.", "sp": "100", "learn": "2", "inherit": "None" },
            { "name": "Hone Spd 3", "effect": "Grants adjacent allies Spd+4 through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "merric__wind_mage":
    {   "tag": "merric__wind_mage",
        "name": "Merric",
        "epithet": "Wind Mage",
        "description": "Wind mage who studied in Khadein, known for its magical school. Marth's childhood friend.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "green_tome",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 18, 7, 8, 5, 3 ],
            "5": [ 19, 7, 8, 6, 4 ]
        },
        "growth_points": [ 7, 5, 7, 6, 3 ],
        "base_weapons":
        [   { "name": "Wind", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Elwind", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Rexcalibur", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Excalibur", "mt": "14", "rng": "2", "effect": "Effective against flying units. ", "sp": "400", "known": "5", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Wind", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Growing Wind", "cooldown": "4", "effect": "Before combat this unit initiates, foes in a wide area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "HP +3", "effect": "Grants +3 to max HP.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "HP +4", "effect": "Grants +4 to max HP.", "sp": "80", "learn": "4", "inherit": "None" },
            { "name": "HP +5", "effect": "Grants +5 to max HP.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Res 1", "effect": "Grants adjacent allies Res+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Res 2", "effect": "Grants adjacent allies Res+3 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Spur Res 3", "effect": "Grants adjacent allies Res+4 during combat.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "mia__lady_of_blades":
    {   "tag": "mia__lady_of_blades",
        "name": "Mia",
        "epithet": "Lady of Blades",
        "description": "A mercenary fighting to improve her sword skills. In life, she doesn't sweat the details.",
        "origin": "Fire Emblem: Path of Radiance",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 8, 12, 6, 6 ]
        },
        "growth_points": [ 6, 7, 9, 6, 5 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Wo Dao", "mt": "9", "rng": "1", "effect": "Grants +10 to damage when Special triggers.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Resolute Blade", "mt": "16", "rng": "1", "effect": "Grants Atk+3. Grants +10 to damage when Special triggers.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Luna", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-50%.", "sp": "200", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Flashing Blade 1", "effect": "If unit's Spd - foe's Spd ≥ 5, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)", "sp": "60", "learn": "-", "inherit": "Excludes Staff Users <br />Infantry and Armored Only" },
            { "name": "Flashing Blade 2", "effect": "If unit's Spd - foe's Spd ≥ 3, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)", "sp": "120", "learn": "-", "inherit": "Excludes Staff Users <br />Infantry and Armored Only" },
            { "name": "Flashing Blade 3", "effect": "If unit's Spd - foe's Spd ≥ 1, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users <br />Infantry and Armored Only" }
        ],
        "base_passive_B":
        [   { "name": "Vantage 1", "effect": "Unit counterattacks first when attacked at HP ≤ 25%.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Vantage 2", "effect": "Unit counterattacks first when attacked at HP ≤ 50%.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Vantage 3", "effect": "Unit counterattacks first when attacked at HP ≤ 75%.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "micaiah__priestess_of_dawn":
    {   "tag": "micaiah__priestess_of_dawn",
        "name": "Micaiah",
        "epithet": "Priestess of Dawn",
        "description": "A member of the Dawn Brigade with silver hair and mysterious powers. As close with Sothe as a sister, though they're not related by blood.",
        "origin": "Fire Emblem: Radiant Dawn",
        "weapon_type": "blue_tome",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 9, 6, 5, 9 ]
        },
        "growth_points": [ 5, 8, 6, 2, 8 ],
        "base_weapons":
        [   { "name": "Light", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Ellight", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Shine", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Thani", "mt": "14", "rng": "2", "effect": "Grants Res+3. Effective against armored and cavalry foes.  Against armored and cavalry foes using bow, dagger, magic, or staff, damage from first attack received by unit during combat reduced by 30%.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support":
        [   { "name": "Ardent Sacrifice", "rng": "1", "effect": "Heals adjacent ally 10 HP. Unit loses 10 HP (but cannot reach 0 this way).", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Sacrifice", "rng": "1", "effect": "Converts penalties on target into bonuses. Restores target's HP = unit's current HP -1. Unit's HP reduced by amount restored. (Skill cannot be inherited.)", "sp": "400", "known": "-", "learn": "5", "inherit": "Prf" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Distant Def 1", "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+2 during combat.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Distant Def 2", "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+4 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Distant Def 3", "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+6 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Guard 1", "effect": "If unit's HP is 100% at start of combat, enemy is inflicted with Special cooldown charge -1. (If using other similar skill, only highest value applied.)", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Guard 2", "effect": "If unit's HP is ≥ 90% at start of combat, enemy is inflicted with Special cooldown charge -1. (If using other similar skill, only highest value applied.)", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Guard 3", "effect": "If unit's HP is ≥ 80% at start of combat, enemy is inflicted with Special cooldown charge -1. (If using other similar skill, only highest value applied.)", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Spur Atk 1", "effect": "Grants adjacent allies Atk+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Drive Atk 1", "effect": "Grants allies within 2 spaces Atk+2 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Drive Atk 2", "effect": "Grants allies within 2 spaces Atk+3 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "michalis__ambitious_king":
    {   "tag": "michalis__ambitious_king",
        "name": "Michalis",
        "epithet": "Ambitious King",
        "description": "King of Macedon who had great ambitions for his country. Murdered his father. Brother to Minerva and Maria.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Flying",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "3": [ 18, 7, 6, 8, 3 ],
            "4": [ 18, 8, 6, 9, 3 ],
            "5": [ 19, 8, 7, 9, 4 ]
        },
        "growth_points": [ 7, 8, 5, 8, 3 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Silver Axe", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Hauteclere", "mt": "16", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "400", "known": "-", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Thunder", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Blazing Thunder", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Iote's Shield", "effect": "Neutralizes \"effective against\" bonuses.", "sp": "200", "learn": "4", "inherit": "Fliers Only" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Threaten Def 1", "effect": "Inflicts Def-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Threaten Def 2", "effect": "Inflicts Def-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Threaten Def 3", "effect": "Inflicts Def-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "minerva__red_dragoon":
    {   "tag": "minerva__red_dragoon",
        "name": "Minerva",
        "epithet": "Red Dragoon",
        "description": "Princess of Macedon who took up arms against her brother, Michalis.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 18, 7, 9, 8, 5 ]
        },
        "growth_points": [ 6, 7, 7, 7, 4 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Axe", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Hauteclere", "mt": "16", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Holy Vestments", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.", "sp": "100", "known": "5", "learn": "-", "inherit": "ONLY_MELEE" },
            { "name": "Sacred Cowl", "cooldown": "2", "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.", "sp": "200", "known": "-", "learn": "5", "inherit": "ONLY_MELEE" }
        ],
        "base_passive_A":
        [   { "name": "Life and Death 1", "effect": "Grants Atk/Spd+3. Inflicts Def/Res-3.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Life and Death 2", "effect": "Grants Atk/Spd+4. Inflicts Def/Res-4.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Life and Death 3", "effect": "Grants Atk/Spd+5. Inflicts Def/Res-5.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Def 1", "effect": "Grants adjacent allies Def+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Def 2", "effect": "Grants adjacent allies Def+3 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Ward Fliers", "effect": "Grants flying allies within 2 spaces Def/Res+4 during combat.", "sp": "200", "learn": "5", "inherit": "Fliers Only" }
        ]
    },
    "mist__helpful_sister":
    {   "tag": "mist__helpful_sister",
        "name": "Mist",
        "epithet": "Helpful Sister",
        "description": "Ike's younger sister. Active and cheerful, and takes care of the Greil Mercenaries.",
        "origin": "Fire Emblem: Path of Radiance",
        "weapon_type": "colorless_staff",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 8, 6, 5, 8 ]
        },
        "growth_points": [ 6, 5, 6, 3, 8 ],
        "base_weapons":
        [   { "name": "Assault", "mt": "10", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Slow", "mt": "5", "rng": "2", "effect": "After combat, if unit attacked, inflicts Spd-6 on foe through its next action.", "sp": "150", "known": "-", "learn": "5" },
            { "name": "Slow+", "mt": "12", "rng": "2", "effect": "After combat, if unit attacked, inflicts Spd-7 on target and foes within 2 spaces of target through their next actions.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Heal", "rng": "1", "effect": "Restores 5 HP.", "sp": "-", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Mend", "rng": "1", "effect": "Restores 10 HP.", "sp": "100", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Recover", "rng": "1", "effect": "Restores 15 HP. Slows Special trigger (cooldown count+1).", "sp": "200", "known": "5", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Recover+", "rng": "1", "effect": "Restores HP = 50% of Atk +10. (Minimum of 15 HP.)", "sp": "300", "known": "-", "learn": "5", "inherit": "ONLY_STAFF" }
        ],
        "base_special":
        [   { "name": "Imbue", "cooldown": "1", "effect": "When healing an ally with a staff, increases recovered HP by 10.", "sp": "50", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },

            {   "name": "Miracle",
                "cooldown": "5",
                "effect": "If HP &gt; 1, survive a lethal attack with 1 HP remaining.",
                "sp": "200",
                "known": "5",
                "learn": "-",
                "inherit": null
            }
        ],
        "base_passive_A": [],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Res 1", "effect": "Grants adjacent allies Res+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Def Res 1", "effect": "Grants adjacent allies Def/Res +2 during combat", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Spur Def Res 2", "effect": "Grants adjacent allies Def/Res +3 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "narcian__wyvern_general":
    {   "tag": "narcian__wyvern_general",
        "name": "Narcian",
        "epithet": "Wyvern General",
        "description": "One of three Wyvern Generals of Bern. Conceited and vainglorious.",
        "origin": "Fire Emblem: The Binding Blade",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Flying",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "2": [ 16, 6, 5, 7, 5 ],
            "3": [ 17, 6, 6, 7, 6 ],
            "4": [ 17, 7, 6, 8, 6 ],
            "5": [ 18, 7, 7, 8, 7 ]
        },
        "growth_points": [ 7, 6, 6, 7, 5 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "2", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Emerald Axe", "mt": "8", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Emerald Axe+", "mt": "12", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Retribution", "cooldown": "3", "effect": "Grants bonus to damage dealt equal to 30% of damage suffered.", "sp": "100", "known": "-", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Vengeance", "cooldown": "3", "effect": "Grants bonus to damage dealt equal to 50% of damage suffered.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Lancebreaker 1", "effect": "If unit's HP ≥ 90% in combat against a lance user, unit makes a follow-up attack and foe cannot.", "sp": "50", "learn": "-", "inherit": "Excludes Red Weapon Users" },
            { "name": "Lancebreaker 2", "effect": "If unit's HP ≥ 70% in combat against a lance user, unit makes a follow-up attack and foe cannot.", "sp": "100", "learn": "2", "inherit": "Excludes Red Weapon Users" },
            { "name": "Lancebreaker 3", "effect": "If unit's HP ≥ 50% in combat against a lance user, unit makes a follow-up attack and foe cannot.", "sp": "200", "learn": "4", "inherit": "Excludes Red Weapon Users" }
        ],
        "base_passive_C":
        [   { "name": "Savage Blow 1", "effect": "If unit initiates attack, foes within 2 spaces of target take 3 damage after combat.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Savage Blow 2", "effect": "If unit initiates attack, foes within 2 spaces of target take 5 damage after combat.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Savage Blow 3", "effect": "If unit initiates attack, foes within 2 spaces of target take 7 damage after combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "navarre__scarlet_sword":
    {   "tag": "navarre__scarlet_sword",
        "name": "Navarre",
        "epithet": "Scarlet Sword",
        "description": "Skilled fighter known as the Scarlet Sword. Prefers his blade to do the talking.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "3": [ 17, 6, 10, 5, 4 ],
            "4": [ 17, 7, 11, 5, 4 ],
            "5": [ 18, 7, 11, 6, 5 ]
        },
        "growth_points": [ 7, 7, 8, 4, 5 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Killing Edge", "mt": "7", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Killing Edge+", "mt": "11", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Wind", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Blazing Wind", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Desperation 1", "effect": "If unit initiates combat with HP ≤ 25%, follow-up attacks occur immediately after unit's attack.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Desperation 2", "effect": "If unit initiates combat with HP ≤ 50%, follow-up attacks occur immediately after unit's attack.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Desperation 3", "effect": "If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Threaten Spd 1", "effect": "Inflicts Spd-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Threaten Spd 2", "effect": "Inflicts Spd-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Threaten Spd 3", "effect": "Inflicts Spd-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "nephenee__fierce_halberdier":
    {   "tag": "nephenee__fierce_halberdier",
        "name": "Nephenee",
        "epithet": "Fierce Halberdier",
        "description": "A militia member from the Crimean countryside. Since she's quiet, people think she's shy, but...",
        "origin": "Fire Emblem: Path of Radiance",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 18, 7, 9, 8, 5 ]
        },
        "growth_points": [ 5, 7, 8, 8, 3 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Slaying Lance", "mt": "10", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Slaying Lance+", "mt": "14", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Moonbow", "cooldown": "2", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Speed +1", "effect": "Grants Spd+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Atk Spd 1", "effect": "Grants Atk/Spd+1.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Atk Spd 2", "effect": "Grants Atk/Spd+2.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Wrath 1", "effect": "If unit's HP ≤ 25%, Special cooldown count-1 at start of turn if Special triggers by attacking. If Special triggers, +10 damage from Special.", "sp": "60", "learn": "-", "inherit": "Melee Weapon Users Only <br />Infantry and Armored Only" },
            { "name": "Wrath 2", "effect": "If unit's HP ≤ 50%, Special cooldown count-1 at start of turn if Special triggers by attacking. If Special triggers, +10 damage from Special.", "sp": "120", "learn": "-", "inherit": "Melee Weapon Users Only <br />Infantry and Armored Only" },
            { "name": "Wrath 3", "effect": "If unit's HP ≤ 75%, Special cooldown count-1 at start of turn if Special triggers by attacking. If Special triggers, +10 damage from Special.", "sp": "240", "learn": "5", "inherit": "Melee Weapon Users Only <br />Infantry and Armored Only" }
        ],
        "base_passive_C": []
    },
    "niles__cruel_to_be_kind":
    {   "tag": "niles__cruel_to_be_kind",
        "name": "Niles",
        "epithet": "Cruel to Be Kind",
        "description": "Nohrian scoundrel who wags his saucy tongue at everyone. One of Leo's retainers.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 17, 5, 7, 3, 7 ],
            "4": [ 17, 5, 8, 3, 8 ],
            "5": [ 18, 6, 8, 4, 8 ]
        },
        "growth_points": [ 5, 5, 8, 2, 8 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Killer Bow", "mt": "5", "rng": "2", "effect": "Effective against flying units.  Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Killer Bow+", "mt": "9", "rng": "2", "effect": "Effective against flying units.  Accelerates Special trigger (cooldown count-1).", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Chilling Wind", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Iceberg", "cooldown": "3", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Warding Blow 1", "effect": "Grants Res+2 during combat if unit initiates attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Warding Blow 2", "effect": "Grants Res+4 during combat if unit initiates attack.", "sp": "100", "learn": "3", "inherit": "Excludes Staff Users" },
            { "name": "Warding Blow 3", "effect": "Grants Res+6 during combat if unit initiates attack.", "sp": "200", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Res 1", "effect": "Grants adjacent allies Res+2 during combat.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Spur Res 2", "effect": "Grants adjacent allies Res+3 during combat.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Spur Res 3", "effect": "Grants adjacent allies Res+4 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "ninian__oracle_of_destiny":
    {   "tag": "ninian__oracle_of_destiny",
        "name": "Ninian",
        "epithet": "Oracle of Destiny",
        "description": "A young dancer who has a serene and mystical presence. Her dances are divine tributes.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "blue_dragonstone",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 5, 7, 6, 5 ]
        },
        "growth_points": [ 8, 5, 8, 4, 6 ],
        "base_weapons":
        [   { "name": "Fire Breath", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Fire Breath+", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Light Breath", "mt": "9", "rng": "1", "effect": "Grants adjacent allies Def/Res+4 through their next actions after any combat this unit initiates.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Light Breath+", "mt": "13", "rng": "1", "effect": "Grants adjacent allies Def/Res+4 through their next actions after any combat this unit initiates.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Dance", "rng": "1", "effect": "Enables target to take another action. Cannot be used on units with Sing or Dance.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Escape Route 1", "effect": "Enables unit whose own HP is ≤ 30% to warp adjacent to any ally.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Escape Route 2", "effect": "Enables unit whose own HP is ≤ 40% to warp adjacent to any ally.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Escape Route 3", "effect": "Enables unit whose own HP is ≤ 50% to warp adjacent to any ally.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Fortify Def 1", "effect": "Grants adjacent allies Def+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Fortify Def 2", "effect": "Grants adjacent allies Def+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Fortify Dragons", "effect": "Grants adjacent Dragon allies Def/Res+6 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "Breath Users Only" }
        ]
    },
    "nino__pious_mage":
    {   "tag": "nino__pious_mage",
        "name": "Nino",
        "epithet": "Pious Mage",
        "description": "A kindhearted member of the Black Fang assassins. Longed to help her mother.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "green_tome",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 15, 6, 9, 3, 6 ],
            "4": [ 15, 7, 10, 3, 6 ],
            "5": [ 16, 7, 10, 4, 7 ]
        },
        "growth_points": [ 4, 8, 8, 3, 5 ],
        "base_weapons":
        [   { "name": "Wind", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Elwind", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Gronnblade", "mt": "9", "rng": "2", "effect": "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Gronnblade+", "mt": "13", "rng": "2", "effect": "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Draw Back", "rng": "1", "effect": "Unit moves 1 space away from target ally, who moves to unit's former position.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Resistance +1", "effect": "Grants Res+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Resistance +2", "effect": "Grants Res+2.", "sp": "60", "learn": "3", "inherit": "None" },
            { "name": "Resistance +3", "effect": "Grants Res+3.", "sp": "120", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Hone Atk 1", "effect": "Grants adjacent allies Atk+2 through their next actions at the start of each turn.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Hone Atk 2", "effect": "Grants adjacent allies Atk+3 through their next actions at the start of each turn.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Hone Atk 3", "effect": "Grants adjacent allies Atk+4 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "nowi__eternal_youth":
    {   "tag": "nowi__eternal_youth",
        "name": "Nowi",
        "epithet": "Eternal Youth",
        "description": "Manakete who travels with Chrom's group. Looks young but is truly over a thousand years old.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "blue_dragonstone",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 16, 6, 4, 6, 4 ],
            "5": [ 17, 6, 5, 6, 5 ]
        },
        "growth_points": [ 9, 9, 6, 7, 6 ],
        "base_weapons":
        [   { "name": "Fire Breath", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Fire Breath+", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Lightning Breath", "mt": "7", "rng": "1", "effect": "Enables counterattack regardless of attacker's range. Slows Special trigger (cooldown count+1).", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Lightning Breath+", "mt": "11", "rng": "1", "effect": "Enables counterattack regardless of attacker's range. Slows Special trigger (cooldown count+1).", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Rally Defense", "rng": "1", "effect": "Grants Def+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Defense +1", "effect": "Grants Def+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Defense +2", "effect": "Grants Def+2.", "sp": "60", "learn": "4", "inherit": "None" },
            { "name": "Defense +3", "effect": "Grants Def+3.", "sp": "120", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Threaten Res 1", "effect": "Inflicts Res-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Threaten Res 2", "effect": "Inflicts Res-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Threaten Res 3", "effect": "Inflicts Res-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "nowi__eternal_witch":
    {   "tag": "nowi__eternal_witch",
        "name": "Nowi",
        "epithet": "Eternal Witch",
        "subname": "👻",
        "description": "Manakete who travels with Chrom's group. She may be over a thousand years old, but she still gets candy.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "red_tome",
        "colour": "red",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 8, 6, 5, 8 ]
        },
        "growth_points": [ 4, 8, 8, 3, 5 ],
        "base_weapons":
        [   { "name": "Flux", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Ruin", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Fenrir", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Grimoire", "mt": "14", "rng": "2", "effect": "If unit has ≥ 50% HP, unit can move to a space adjacent to an ally within 2 spaces.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support":
        [   { "name": "Reposition", "rng": "1", "effect": "Moves adjacent ally to opposite side of unit.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Atk Res Bond 1", "effect": "Grants Atk/Res+3 to this unit during combat if unit is adjacent to an ally.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Atk Res Bond 2", "effect": "Grants Atk/Res+4 to this unit during combat if unit is adjacent to an ally.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Atk Res Bond 3", "effect": "Grants Atk/Res+5 to this unit during combat if unit is adjacent to an ally.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Live for Bounty", "effect": "If unit survives, get 1.5x shards/crystals from a Training Tower map. (If similar skill effects also used, only highest multiplier applied.)", "sp": "100", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Hone Atk 1", "effect": "Grants adjacent allies Atk+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Hone Atk 2", "effect": "Grants adjacent allies Atk+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Hone Fliers", "effect": "Grants adjacent flying allies Atk/Spd+6 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "Fliers Only" }
        ]
    },
    "oboro__fierce_fighter":
    {   "tag": "oboro__fierce_fighter",
        "name": "Oboro",
        "epithet": "Fierce Fighter",
        "description": "Lance wielder who loves fashion and hates Nohr. One of Takumi's retainers.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 17, 7, 6, 8, 4 ],
            "4": [ 17, 8, 6, 9, 4 ],
            "5": [ 18, 8, 7, 9, 5 ]
        },
        "growth_points": [ 6, 7, 5, 8, 5 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Heavy Spear", "mt": "8", "rng": "1", "effect": "Effective against armored units. ", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Heavy Spear+", "mt": "12", "rng": "1", "effect": "Effective against armored units. ", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Rally Defense", "rng": "1", "effect": "Grants Def+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Seal Def 1", "effect": "After combat, foe suffers Def-3 through its next action.", "sp": "40", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Def 2", "effect": "After combat, foe suffers Def-5 through its next action.", "sp": "80", "learn": "3", "inherit": "Excludes Staff Users" },
            { "name": "Seal Def 3", "effect": "After combat, foe suffers Def-7 through its next action.", "sp": "160", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C":
        [   { "name": "Threaten Res 1", "effect": "Inflicts Res-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Threaten Res 2", "effect": "Inflicts Res-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Threaten Res 3", "effect": "Inflicts Res-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "odin__potent_force":
    {   "tag": "odin__potent_force",
        "name": "Odin",
        "epithet": "Potent Force",
        "description": "A mysterious man who tends to be overly theatrical. One of Leo's retainers.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "blue_tome",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 18, 4, 7, 5, 5 ],
            "4": [ 18, 4, 8, 6, 5 ],
            "5": [ 19, 5, 8, 6, 6 ]
        },
        "growth_points": [ 7, 4, 7, 5, 5 ],
        "base_weapons":
        [   { "name": "Thunder", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elthunder", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Blárblade", "mt": "9", "rng": "2", "effect": "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Blárblade+", "mt": "13", "rng": "2", "effect": "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Moonbow", "cooldown": "2", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Defiant Atk 1", "effect": "Grants Atk+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "3", "inherit": "None" },
            { "name": "Defiant Atk 2", "effect": "Grants Atk+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "4", "inherit": "None" },
            { "name": "Defiant Atk 3", "effect": "Grants Atk+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "R Tomebreaker 1", "effect": "If unit's HP ≥ 90% in combat against a red tome user, unit makes a follow-up attack and foe cannot.", "sp": "50", "learn": "-", "inherit": "Excludes Green Weapon Users" },
            { "name": "R Tomebreaker 2", "effect": "If unit's HP ≥ 70% in combat against a red tome user, unit makes a follow-up attack and foe cannot.", "sp": "100", "learn": "3", "inherit": "Excludes Green Weapon Users" },
            { "name": "R Tomebreaker 3", "effect": "If unit's HP ≥ 50% in combat against a red tome user, unit makes a follow-up attack and foe cannot.", "sp": "200", "learn": "4", "inherit": "Excludes Green Weapon Users" }
        ],
        "base_passive_C": []
    },
    "ogma__loyal_blade":
    {   "tag": "ogma__loyal_blade",
        "name": "Ogma",
        "epithet": "Loyal Blade",
        "description": "A mercenary who was once a slave gladiator. Serves Princess Caeda of Talys.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 20, 7, 10, 5, 2 ],
            "5": [ 21, 7, 10, 6, 3 ]
        },
        "growth_points": [ 8, 9, 7, 6, 1 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Brave Sword", "mt": "5", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Brave Sword+", "mt": "8", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Daylight", "cooldown": "3", "effect": "Heal 30% of damage dealt.", "sp": "100", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Noontime", "cooldown": "2", "effect": "Heal 30% of damage dealt.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Defiant Atk 1", "effect": "Grants Atk+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "Defiant Atk 2", "effect": "Grants Atk+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Defiant Atk 3", "effect": "Grants Atk+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Atk 1", "effect": "Grants adjacent allies Atk+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Atk 2", "effect": "Grants adjacent allies Atk+3 during combat.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Spur Atk 3", "effect": "Grants adjacent allies Atk+4 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "oliver__admirer_of_beauty":
    {   "tag": "oliver__admirer_of_beauty",
        "name": "Oliver",
        "epithet": "Admirer of Beauty",
        "description": "A member of the Begnion Senate. Cherishes everything beautiful and puts all his effort into the preservation of the arts.",
        "origin": "Fire Emblem: Radiant Dawn",
        "weapon_type": "blue_tome",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "3": [ 17, 7, 4, 5, 7 ],
            "4": [ 17, 8, 4, 5, 8 ],
            "5": [ 18, 8, 5, 6, 8 ]
        },
        "growth_points": [ 7, 7, 3, 4, 8 ],
        "base_weapons":
        [   { "name": "Light", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Ellight", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Shine", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Shine+", "mt": "13", "rng": "2", "effect": "-", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Light", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Blazing Light", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Warding Blow 1", "effect": "Grants Res+2 during combat if unit initiates attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Mirror Strike 1", "effect": "Grants Atk/Res+2 during combat if unit initiates combat.", "sp": "120", "learn": "3", "inherit": "Excludes Staff Users" },
            { "name": "Mirror Strike 2", "effect": "Grants Atk/Res+4 during combat if unit initiates combat.", "sp": "240", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Atk Ploy 1", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-3 until the end of foe's next action.", "sp": "60", "learn": "3", "inherit": "None" },
            { "name": "Atk Ploy 2", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-4 until the end of foe's next action.", "sp": "120", "learn": "4", "inherit": "None" },
            { "name": "Atk Ploy 3", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-5 until the end of foe's next action.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "olivia__blushing_beauty":
    {   "tag": "olivia__blushing_beauty",
        "name": "Olivia",
        "epithet": "Blushing Beauty",
        "description": "A dancer who travels widely and is quite gifted, despite extreme shyness.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "1": [ 15, 4, 5, 3, 2 ],
            "2": [ 15, 5, 6, 3, 2 ],
            "3": [ 16, 5, 6, 4, 3 ],
            "4": [ 16, 6, 7, 4, 3 ],
            "5": [ 17, 6, 7, 5, 4 ]
        },
        "growth_points": [ 5, 6, 8, 6, 6 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "1", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Silver Sword+", "mt": "15", "rng": "1", "effect": "-", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Dance", "rng": "1", "effect": "Enables target to take another action. Cannot be used on units with Sing or Dance.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Knock Back", "effect": "If unit initiates attack, foe is moved 1 space away after combat.", "sp": "150", "learn": "3", "inherit": "Melee Weapon Users Only" }
        ],
        "base_passive_C":
        [   { "name": "Hone Atk 1", "effect": "Grants adjacent allies Atk+2 through their next actions at the start of each turn.", "sp": "50", "learn": "1", "inherit": "None" },
            { "name": "Hone Atk 2", "effect": "Grants adjacent allies Atk+3 through their next actions at the start of each turn.", "sp": "100", "learn": "2", "inherit": "None" },
            { "name": "Hone Atk 3", "effect": "Grants adjacent allies Atk+4 through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "olivia__festival_dancer":
    {   "tag": "olivia__festival_dancer",
        "name": "Olivia",
        "epithet": "Festival Dancer",
        "subname": "🎵",
        "description": "A dancer who brings a smile to people's faces. She had appeared at a performing arts festival in Ylisse.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "colorless_dagger",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 15, 6, 8, 3, 4 ]
        },
        "growth_points": [ 5, 6, 8, 2, 7 ],
        "base_weapons":
        [   { "name": "Iron Dagger", "mt": "3", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Dagger", "mt": "5", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Dancer's Fan", "mt": "7", "rng": "2", "effect": "If unit initiates combat, restores 7 HP to adjacent allies after combat. After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Dancer's Fan+", "mt": "10", "rng": "2", "effect": "If unit initiates combat, restores 7 HP to adjacent allies after combat. After combat, if unit attacked, inflicts Def/Res-7 on foe through its next action.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Dance", "rng": "1", "effect": "Enables target to take another action. Cannot be used on units with Sing or Dance.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Distant Def 1", "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+2 during combat.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Distant Def 2", "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+4 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Distant Def 3", "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+6 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Blaze Dance 1", "effect": "If Sing or Dance is used, target also granted Atk+2.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Blaze Dance 2", "effect": "If Sing or Dance is used, target also granted Atk+3.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Blaze Dance 3", "effect": "If Sing or Dance is used, target also granted Atk+4.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C": []
    },
    "olwen__blue_mage_knight":
    {   "tag": "olwen__blue_mage_knight",
        "name": "Olwen",
        "epithet": "Blue Mage Knight",
        "description": "A mage knight in Friege's army. Her ideals sometimes put her in opposition with her beloved brother, Reinhardt.",
        "origin": "Fire Emblem: Thracia 776",
        "weapon_type": "blue_tome",
        "colour": "blue",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 7, 8, 5, 6 ]
        },
        "growth_points": [ 4, 5, 8, 3, 7 ],
        "base_weapons":
        [   { "name": "Thunder", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elthunder", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Thoron", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Dire Thunder", "mt": "9", "rng": "2", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support":
        [   { "name": "Reposition", "rng": "1", "effect": "Moves adjacent ally to opposite side of unit.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Warding Blow 1", "effect": "Grants Res+2 during combat if unit initiates attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Warding Blow 2", "effect": "Grants Res+4 during combat if unit initiates attack.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Warding Blow 3", "effect": "Grants Res+6 during combat if unit initiates attack.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Res 1", "effect": "Grants adjacent allies Res+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Res 2", "effect": "Grants adjacent allies Res+3 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Ward Cavalry", "effect": "Grants cavalry allies within 2 spaces Def/Res+4 during combat.", "sp": "200", "learn": "5", "inherit": "Cavalry Only" }
        ]
    },
    "oscar__agile_horseman":
    {   "tag": "oscar__agile_horseman",
        "name": "Oscar",
        "epithet": "Agile Horseman",
        "description": "A straightforward but accommodating member of the Greil Mercenaries. Has good instincts.",
        "origin": "Fire Emblem: Path of Radiance",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 17, 7, 8, 6, 5 ],
            "5": [ 18, 7, 8, 7, 6 ]
        },
        "growth_points": [ 6, 8, 8, 5, 3 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Sapphire Lance", "mt": "8", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Sapphire Lance+", "mt": "12", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Rally Speed", "rng": "1", "effect": "Grants Spd+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Rally Speed Defense", "rng": "1", "effect": "Grants Spd/Def+3 to an adjacent ally until the end of the turn.", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Lancebreaker 1", "effect": "If unit's HP ≥ 90% in combat against a lance user, unit makes a follow-up attack and foe cannot.", "sp": "50", "learn": "-", "inherit": "Excludes Red Weapon Users" },
            { "name": "Lancebreaker 2", "effect": "If unit's HP ≥ 70% in combat against a lance user, unit makes a follow-up attack and foe cannot.", "sp": "100", "learn": "-", "inherit": "Excludes Red Weapon Users" },
            { "name": "Lancebreaker 3", "effect": "If unit's HP ≥ 50% in combat against a lance user, unit makes a follow-up attack and foe cannot.", "sp": "200", "learn": "4", "inherit": "Excludes Red Weapon Users" }
        ],
        "base_passive_C":
        [   { "name": "Spur Def 1", "effect": "Grants adjacent allies Def+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Spd Def 1", "effect": "Grants adjacent allies Spd/Def +2 during combat", "sp": "120", "learn": "4", "inherit": "None" },
            { "name": "Spur Spd Def 2", "effect": "Grants adjacent allies Spd/Def +3 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "palla__eldest_whitewing":
    {   "tag": "palla__eldest_whitewing",
        "name": "Palla",
        "epithet": "Eldest Whitewing",
        "description": "Eldest of three sisters who are pegasus knights for Macedon.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 17, 6, 8, 5, 6 ],
            "4": [ 17, 7, 9, 5, 6 ],
            "5": [ 18, 7, 9, 6, 7 ]
        },
        "growth_points": [ 7, 7, 6, 6, 5 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Ruby Sword", "mt": "8", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Ruby Sword+", "mt": "12", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Moonbow", "cooldown": "2", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Wings of Mercy 1", "effect": "Enables unit to warp adjacent to any ally with HP ≤ 30%.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Wings of Mercy 2", "effect": "Enables unit to warp adjacent to any ally with HP ≤ 40%.", "sp": "120", "learn": "4", "inherit": "None" },
            { "name": "Wings of Mercy 3", "effect": "Enables unit to warp adjacent to any ally with HP ≤ 50%.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Spur Spd 1", "effect": "Grants adjacent allies Spd+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Spd 2", "effect": "Grants adjacent allies Spd+3 during combat.", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Goad Fliers", "effect": "Grants flying allies within 2 spaces Spd/Atk+4 during combat.", "sp": "200", "learn": "4", "inherit": "Fliers Only" }
        ]
    },
    "peri__playful_slayer":
    {   "tag": "peri__playful_slayer",
        "name": "Peri",
        "epithet": "Playful Slayer",
        "description": "A cavalier of Nohr who massacres foes with childlike glee. One of Xander's retainers.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 15, 9, 9, 5, 5 ],
            "5": [ 16, 9, 9, 6, 6 ]
        },
        "growth_points": [ 5, 7, 7, 4, 7 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Killer Lance", "mt": "7", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Killer Lance+", "mt": "11", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Night Sky", "cooldown": "3", "effect": "Grants +50% to damage dealt.", "sp": "100", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Glimmer", "cooldown": "2", "effect": "Grants +50% to damage dealt.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Resistance +1", "effect": "Grants Res+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Resistance +2", "effect": "Grants Res+2.", "sp": "60", "learn": "4", "inherit": "None" },
            { "name": "Resistance +3", "effect": "Grants Res+3.", "sp": "120", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Threaten Def 1", "effect": "Inflicts Def-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Threaten Def 2", "effect": "Inflicts Def-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Threaten Def 3", "effect": "Inflicts Def-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "priscilla__delicate_princess":
    {   "tag": "priscilla__delicate_princess",
        "name": "Priscilla",
        "epithet": "Delicate Princess",
        "description": "The daughter of Count Caerleon. Also Raven's sister. Poised and gentle, with a jealous streak.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "colorless_staff",
        "colour": "colorless",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 16, 7, 6, 3, 8 ],
            "5": [ 17, 7, 7, 4, 8 ]
        },
        "growth_points": [ 5, 6, 6, 3, 7 ],
        "base_weapons":
        [   { "name": "Assault", "mt": "10", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Panic", "mt": "7", "rng": "2", "effect": "After combat, if unit attacked, bonuses on foe become penalties through its next action.", "sp": "150", "known": "-", "learn": "4" },
            { "name": "Panic+", "mt": "11", "rng": "2", "effect": "After combat, if unit attacked, bonuses on target and foes within 2 spaces of target become penalties through their next actions.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Heal", "rng": "1", "effect": "Restores 5 HP.", "sp": "-", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Reconcile", "rng": "1", "effect": "Restores 7 HP each to target and this unit.", "sp": "100", "known": "4", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Rehabilitate", "rng": "1", "effect": "Restores 7 HP or more the further below 50% the target's HP is. Slows special trigger (cooldown count+1).", "sp": "200", "known": "5", "learn": "4", "inherit": "ONLY_STAFF" },
            { "name": "Rehabilitate+", "rng": "1", "effect": "Restores HP = 50% of Atk -10. (Minimum of 7 HP.) If target's HP is ≤ 50%, the lower the target's HP, the more HP is restored.", "sp": "300", "known": "-", "learn": "5", "inherit": "ONLY_STAFF" }
        ],
        "base_special":
        [   { "name": "Imbue", "cooldown": "1", "effect": "When healing an ally with a staff, increases recovered HP by 10.", "sp": "50", "known": "4", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Still-Water Balm", "cooldown": "1", "effect": "When healing an ally with a staff, grants all allies Res+4 for 1 turn.", "sp": "150", "known": "5", "learn": "4", "inherit": "ONLY_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Def 1", "effect": "Grants adjacent allies Def+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Def 2", "effect": "Grants adjacent allies Def+3 during combat.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Spur Def 3", "effect": "Grants adjacent allies Def+4 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "raigh__dark_child":
    {   "tag": "raigh__dark_child",
        "name": "Raigh",
        "epithet": "Dark Child",
        "description": "Wielder of dark magic. A scornful loner with a troubled past as an orphan.",
        "origin": "Fire Emblem: The Binding Blade",
        "weapon_type": "red_tome",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "2": [ 15, 7, 6, 3, 5 ],
            "3": [ 16, 7, 6, 4, 6 ],
            "4": [ 16, 8, 7, 4, 6 ],
            "5": [ 17, 8, 7, 5, 7 ]
        },
        "growth_points": [ 5, 7, 6, 4, 6 ],
        "base_weapons":
        [   { "name": "Flux", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "2", "learn": "-" },
            { "name": "Ruin", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Rauðrwolf", "mt": "6", "rng": "2", "effect": "Effective against cavalry units. ", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Rauðrwolf+", "mt": "10", "rng": "2", "effect": "Effective against cavalry units. ", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Rally Attack", "rng": "1", "effect": "Grants Atk+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "HP +3", "effect": "Grants +3 to max HP.", "sp": "40", "learn": "3", "inherit": "None" },
            { "name": "HP +4", "effect": "Grants +4 to max HP.", "sp": "80", "learn": "4", "inherit": "None" },
            { "name": "HP +5", "effect": "Grants +5 to max HP.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Seal Res 1", "effect": "After combat, foe suffers Res-3 through its next action.", "sp": "40", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Res 2", "effect": "After combat, foe suffers Res-5 through its next action.", "sp": "80", "learn": "2", "inherit": "Excludes Staff Users" },
            { "name": "Seal Res 3", "effect": "After combat, foe suffers Res-7 through its next action.", "sp": "160", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C": []
    },
    "raven__peerless_fighter":
    {   "tag": "raven__peerless_fighter",
        "name": "Raven",
        "epithet": "Peerless Fighter",
        "description": "A noble heir whose true name is Raymond. Works as a mercenary to enact revenge.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 18, 8, 9, 5, 4 ],
            "5": [ 19, 8, 9, 6, 5 ]
        },
        "growth_points": [ 6, 8, 8, 5, 4 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Brave Axe", "mt": "5", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Brave Axe+", "mt": "8", "rng": "1", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Daylight", "cooldown": "3", "effect": "Heal 30% of damage dealt.", "sp": "100", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Sol", "cooldown": "3", "effect": "Heal 50% of damage dealt.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Defiant Spd 1", "effect": "Grants Spd+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "Defiant Spd 2", "effect": "Grants Spd+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Defiant Spd 3", "effect": "Grants Spd+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Threaten Def 1", "effect": "Inflicts Def-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Threaten Def 2", "effect": "Inflicts Def-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Threaten Def 3", "effect": "Inflicts Def-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "rebecca__wildflower":
    {   "tag": "rebecca__wildflower",
        "name": "Rebecca",
        "epithet": "Wildflower",
        "description": "A girl who lives in a remote village and spends her time hunting. Kind and sociable.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 17, 7, 8, 5, 4 ],
            "5": [ 18, 7, 8, 6, 5 ]
        },
        "growth_points": [ 5, 6, 8, 3, 6 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Bow", "mt": "9", "rng": "2", "effect": "Effective against flying units. ", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Silver Bow+", "mt": "13", "rng": "2", "effect": "Effective against flying units. ", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Ardent Sacrifice", "rng": "1", "effect": "Heals adjacent ally 10 HP. Unit loses 10 HP (but cannot reach 0 this way).", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Darting Blow 1", "effect": "Grants Spd+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Darting Blow 2", "effect": "Grants Spd+4 during combat if unit initiates the attack.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Darting Blow 3", "effect": "Grants Spd+6 during combat if unit initiates the attack.", "sp": "200", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Seal Atk 1", "effect": "After combat, foe suffers Atk-3 through its next action.", "sp": "40", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Atk 2", "effect": "After combat, foe suffers Atk-5 through its next action.", "sp": "80", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Seal Atk 3", "effect": "After combat, foe suffers Atk-7 through its next action.", "sp": "160", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C": []
    },
    "reinhardt__thunders_fist":
    {   "tag": "reinhardt__thunders_fist",
        "name": "Reinhardt",
        "epithet": "Thunder's Fist",
        "description": "Formidable and admired mage knight in Friege's army. Ever ready to lend an ear to his younger sister, Olwen.",
        "origin": "Fire Emblem: Thracia 776",
        "weapon_type": "blue_tome",
        "colour": "blue",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 15, 8, 5, 4, 8 ],
            "5": [ 16, 8, 6, 5, 8 ]
        },
        "growth_points": [ 6, 7, 4, 6, 4 ],
        "base_weapons":
        [   { "name": "Thunder", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elthunder", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Thoron", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Dire Thunder", "mt": "9", "rng": "2", "effect": "Spd-5. Attack twice when initiating combat.", "sp": "400", "known": "5", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Thunder", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Blazing Thunder", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Vantage 1", "effect": "Unit counterattacks first when attacked at HP ≤ 25%.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Vantage 2", "effect": "Unit counterattacks first when attacked at HP ≤ 50%.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Vantage 3", "effect": "Unit counterattacks first when attacked at HP ≤ 75%.", "sp": "200", "learn": "4", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Spur Atk 1", "effect": "Grants adjacent allies Atk+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Atk 2", "effect": "Grants adjacent allies Atk+3 during combat.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Goad Cavalry", "effect": "Grants cavalry allies within 2 spaces Spd/Atk+4 during combat.", "sp": "200", "learn": "5", "inherit": "Cavalry Only" }
        ]
    },
    "rhajat__black_magician":
    {   "tag": "rhajat__black_magician",
        "name": "Rhajat",
        "epithet": "Black Magician",
        "description": "Hayato's daughter. Tends toward the obsessive and has a horrifying temper.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "green_tome",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 9, 8, 4, 7 ]
        },
        "growth_points": [ 5, 8, 8, 4, 4 ],
        "base_weapons":
        [   { "name": "Wind", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Elwind", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Keen Gronnwolf", "mt": "8", "rng": "2", "effect": "Effective against cavalry foes. ", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Keen Gronnwolf+", "mt": "12", "rng": "2", "effect": "Effective against cavalry foes. ", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Rally Defense", "rng": "1", "effect": "Grants Def+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Rally Attack Defense", "rng": "1", "effect": "Grants Atk/Def+3 to an adjacent ally until the end of the turn.", "sp": "300", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Distant Def 1", "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+2 during combat.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Distant Def 2", "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+4 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Distant Def 3", "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+6 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Savage Blow 1", "effect": "If unit initiates attack, foes within 2 spaces of target take 3 damage after combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Savage Blow 2", "effect": "If unit initiates attack, foes within 2 spaces of target take 5 damage after combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Savage Blow 3", "effect": "If unit initiates attack, foes within 2 spaces of target take 7 damage after combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "robin__high_deliverer":
    {   "tag": "robin__high_deliverer",
        "name": "Robin",
        "epithet": "High Deliverer",
        "subname": "📘",
        "description": "A tactician of Ylisse and Chrom's close ally. Lost memory of his life before meeting Chrom.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "blue_tome",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 17, 6, 6, 6, 4 ],
            "4": [ 17, 7, 7, 6, 4 ],
            "5": [ 18, 7, 7, 7, 5 ]
        },
        "growth_points": [ 6, 6, 6, 6, 4 ],
        "base_weapons":
        [   { "name": "Thunder", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elthunder", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Blárraven", "mt": "7", "rng": "2", "effect": "Grants weapon advantage vs. colorless foes.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Blárraven+", "mt": "11", "rng": "2", "effect": "Grants weapon advantage vs. colorless foes.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Glowing Ember", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Def.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Bonfire", "cooldown": "3", "effect": "Boosts damage dealt by 50% of unit's Def.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Defiant Spd 1", "effect": "Grants Spd+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "3", "inherit": "None" },
            { "name": "Defiant Spd 2", "effect": "Grants Spd+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "4", "inherit": "None" },
            { "name": "Defiant Spd 3", "effect": "Grants Spd+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Def 1", "effect": "Grants adjacent allies Def+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Def 2", "effect": "Grants adjacent allies Def+3 during combat.", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Spur Def 3", "effect": "Grants adjacent allies Def+4 during combat.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "robin__festive_tactician":
    {   "tag": "robin__festive_tactician",
        "name": "Robin",
        "epithet": "Festive Tactician",
        "subname": "🎄",
        "description": "Chrom's right-hand man and a tactician who has amnesia. Spends all day thinking of plans for enjoying the winter festival.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Armored",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 23, 9, 8, 9, 6 ]
        },
        "growth_points": [ 6, 8, 8, 8, 5 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Tannenboom!", "mt": "10", "rng": "1", "effect": "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Tannenboom!+", "mt": "14", "rng": "1", "effect": "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Reciprocal Aid", "rng": "1", "effect": "Swap HP with adjacent ally (neither unit can go above their max HP).", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Brazen Atk Spd 1", "effect": "If unit's HP ≤ 80% at the start of combat, grants Atk/Spd+3 during combat.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Brazen Atk Spd 2", "effect": "If unit's HP ≤ 80% at the start of combat, grants Atk/Spd+5 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Brazen Atk Spd 3", "effect": "If unit's HP ≤ 80% at the start of combat, grants Atk/Spd+7 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Armor March 1", "effect": "If unit has 100% HP and an adjacent armored ally at start of turn, unit and any such allies can move 1 extra space. (That turn only; does not stack.)", "sp": "60", "learn": "-", "inherit": "Armored Only" },
            { "name": "Armor March 2", "effect": "If unit has ≥ 50% HP and an adjacent armored ally at start of turn, unit and any such allies can move 1 extra space. (That turn only; does not stack.)", "sp": "120", "learn": "-", "inherit": "Armored Only" },
            { "name": "Armor March 3", "effect": "If unit has an adjacent armored ally at the start of turn, unit and any such allies can move 1 extra space. (That turn only; does not stack.)", "sp": "240", "learn": "5", "inherit": "Armored Only" }
        ]
    },
    "robin__mystery_tactician":
    {   "tag": "robin__mystery_tactician",
        "name": "Robin",
        "epithet": "Mystery Tactician",
        "subname": "📗",
        "description": "A tactician of Ylisse and Chrom's close ally. Lost memory of her life before meeting Chrom.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "green_tome",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "2": [ 16, 6, 6, 5, 3 ],
            "3": [ 17, 6, 6, 6, 4 ],
            "4": [ 17, 7, 7, 6, 4 ],
            "5": [ 18, 7, 7, 7, 5 ]
        },
        "growth_points": [ 6, 6, 6, 6, 4 ],
        "base_weapons":
        [   { "name": "Wind", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "2", "learn": "-" },
            { "name": "Elwind", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Gronnwolf", "mt": "6", "rng": "2", "effect": "Effective against cavalry units. ", "sp": "200", "known": "-", "learn": "3" },
            { "name": "Gronnwolf+", "mt": "10", "rng": "2", "effect": "Effective against cavalry units. ", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Glowing Ember", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Def.", "sp": "100", "known": "-", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Ignis", "cooldown": "4", "effect": "Boosts damage dealt by 80% of unit's Def.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Defiant Res 1", "effect": "Grants Res+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "3", "inherit": "None" },
            { "name": "Defiant Res 2", "effect": "Grants Res+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "4", "inherit": "None" },
            { "name": "Defiant Res 3", "effect": "Grants Res+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "B Tomebreaker 1", "effect": "If unit's HP ≥ 90% in combat against a blue tome user, unit makes a follow-up attack and foe cannot.", "sp": "50", "learn": "-", "inherit": "Excludes Red Weapon Users" },
            { "name": "B Tomebreaker 2", "effect": "If unit's HP ≥ 70% in combat against a blue tome user, unit makes a follow-up attack and foe cannot.", "sp": "100", "learn": "2", "inherit": "Excludes Red Weapon Users" },
            { "name": "B Tomebreaker 3", "effect": "If unit's HP ≥ 50% in combat against a blue tome user, unit makes a follow-up attack and foe cannot.", "sp": "200", "learn": "4", "inherit": "Excludes Red Weapon Users" }
        ],
        "base_passive_C": []
    },
    "robin__seaside_tactician":
    {   "tag": "robin__seaside_tactician",
        "name": "Robin",
        "epithet": "Seaside Tactician",
        "subname": "🐟",
        "description": "A tactician of Ylisse and Chrom's close ally. Loves the strange creatures she finds on the beach.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 18, 8, 8, 6, 7 ]
        },
        "growth_points": [ 4, 7, 8, 6, 6 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Deft Harpoon", "mt": "10", "rng": "1", "effect": "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Deft Harpoon+", "mt": "14", "rng": "1", "effect": "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Reposition", "rng": "1", "effect": "Moves adjacent ally to opposite side of unit.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Defense +1", "effect": "Grants Def+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "HP Def 1", "effect": "Grants HP+3, Def+1.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "HP Def 2", "effect": "Grants HP+4, Def+2.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Lance Valor 1", "effect": "If unit survives and uses a lance, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "30", "learn": "-", "inherit": "Lance Users Only" },
            { "name": "Lance Valor 2", "effect": "If unit survives, all lance users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "60", "learn": "-", "inherit": "Lance Users Only" },
            { "name": "Lance Valor 3", "effect": "If unit survives, all lance users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "120", "learn": "5", "inherit": "Lance Users Only" }
        ]
    },
    "roderick__steady_squire":
    {   "tag": "roderick__steady_squire",
        "name": "Roderick",
        "epithet": "Steady Squire",
        "description": "An aspiring knight of Altea. Of calm demeanor. Luke's longtime friend and rival.",
        "origin": "Fire Emblem: New Mystery of the Emblem",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 17, 7, 8, 5, 6 ],
            "5": [ 18, 7, 8, 6, 7 ]
        },
        "growth_points": [ 6, 7, 8, 5, 4 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Firesweep Lance", "mt": "11", "rng": "1", "effect": "Unit and enemies cannot use counterattacks.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Firesweep Lance+", "mt": "15", "rng": "1", "effect": "Unit and enemies cannot use counterattacks.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Rally Defense", "rng": "1", "effect": "Grants Def+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Rally Defense Resistance", "rng": "1", "effect": "Grants Def/Res+3 to an adjacent ally until the end of the turn.", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Drag Back", "effect": "If unit initiates attack, the unit moves 1 space away after combat. Foe moves into unit's previous space.", "sp": "150", "learn": "4", "inherit": "Melee Weapon Users Only" }
        ],
        "base_passive_C":
        [   { "name": "Spur Def 1", "effect": "Grants adjacent allies Def+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Drive Def 1", "effect": "Grants allies within 2 spaces Def+2 during combat.", "sp": "120", "learn": "4", "inherit": "None" },
            { "name": "Drive Def 2", "effect": "Grants allies within 2 spaces Def+3 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "roy__young_lion":
    {   "tag": "roy__young_lion",
        "name": "Roy",
        "epithet": "Young Lion",
        "description": "The son of Eliwood, Marquess of Pherae and talented leader of its army.",
        "origin": "Fire Emblem: The Binding Blade",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 19, 8, 9, 5, 3 ],
            "5": [ 20, 8, 9, 6, 4 ]
        },
        "growth_points": [ 7, 6, 6, 5, 7 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Binding Blade", "mt": "16", "rng": "1", "effect": "Grants Def/Res+2 when this unit is attacked.", "sp": "400", "known": "5", "learn": "5", "inherit": "Prf" }
        ],
        "base_support":
        [   { "name": "Shove", "rng": "1", "effect": "Push adjacent ally 1 space farther away.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Triangle Adept 1", "effect": "Gives Atk+10% if weapon-triangle advantage, Atk-10% if disadvantage.", "sp": "50", "learn": "-", "inherit": "Excludes Colorless Weapon Users" },
            { "name": "Triangle Adept 2", "effect": "Gives Atk+15% if weapon-triangle advantage, Atk-15% if disadvantage.", "sp": "100", "learn": "-", "inherit": "Excludes Colorless Weapon Users" },
            { "name": "Triangle Adept 3", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "200", "learn": "4", "inherit": "Excludes Colorless Weapon Users" }
        ],
        "base_passive_B":
        [   { "name": "Seal Def 1", "effect": "After combat, foe suffers Def-3 through its next action.", "sp": "40", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Def 2", "effect": "After combat, foe suffers Def-5 through its next action.", "sp": "80", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Seal Def 3", "effect": "After combat, foe suffers Def-7 through its next action.", "sp": "160", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C": []
    },
    "roy__brave_lion":
    {   "tag": "roy__brave_lion",
        "name": "Roy",
        "epithet": "Brave Lion",
        "subname": "🌟",
        "description": "The son of Eliwood, Marquess of Pherae. Has immense respect for his father and wields his weapon, Durandal.",
        "origin": "Fire Emblem: The Binding Blade",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 8, 8, 7, 7 ]
        },
        "growth_points": [ 6, 7, 8, 5, 4 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Blazing Durandal", "mt": "16", "rng": "1", "effect": "Grants Atk+3. If unit's Atk &gt; foe's, unit gains Special cooldown charge +1. (If using other similar skill, only highest value applied.)", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Night Sky", "cooldown": "3", "effect": "Grants +50% to damage dealt.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Astra", "cooldown": "4", "effect": "Grants +150% to damage dealt.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" },
            { "name": "Galeforce", "cooldown": "5", "effect": "If this unit initiates an attack, it can take another action after combat. (Once per turn only.)", "sp": "500", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Darting Blow 1", "effect": "Grants Spd+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Steady Blow 1", "effect": "If unit initiates combat, unit granted Spd/Def+2 during battle.", "sp": "120", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Steady Blow 2", "effect": "If unit initiates combat, unit granted Spd/Def+4 during battle.", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Desperation 1", "effect": "If unit initiates combat with HP ≤ 25%, follow-up attacks occur immediately after unit's attack.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Desperation 2", "effect": "If unit initiates combat with HP ≤ 50%, follow-up attacks occur immediately after unit's attack.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Desperation 3", "effect": "If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "ryoma__peerless_samurai":
    {   "tag": "ryoma__peerless_samurai",
        "name": "Ryoma",
        "epithet": "Peerless Samurai",
        "description": "The eldest prince of Hoshido, who wields the legendary blade Raijinto.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 19, 8, 11, 5, 4 ]
        },
        "growth_points": [ 6, 8, 7, 6, 4 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Raijinto", "mt": "16", "rng": "1", "effect": "Enables counterattack regardless of distance if this unit is attacked.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Night Sky", "cooldown": "3", "effect": "Grants +50% to damage dealt.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Astra", "cooldown": "4", "effect": "Grants +150% to damage dealt.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Defiant Atk 1", "effect": "Grants Atk+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "Defiant Atk 2", "effect": "Grants Atk+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Defiant Atk 3", "effect": "Grants Atk+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Hone Spd 1", "effect": "Grants adjacent allies Spd+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Hone Spd 2", "effect": "Grants adjacent allies Spd+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Hone Spd 3", "effect": "Grants adjacent allies Spd+4 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "saber__driven_mercenary":
    {   "tag": "saber__driven_mercenary",
        "name": "Saber",
        "epithet": "Driven Mercenary",
        "description": "A mercenary who will take on any job...if he's paid enough. His identity is a mystery but his skills are unquestionable.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 18, 7, 9, 8, 5 ]
        },
        "growth_points": [ 6, 7, 7, 7, 4 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Slaying Edge", "mt": "10", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Slaying Edge+", "mt": "14", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Holy Vestments", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.", "sp": "100", "known": "-", "learn": "-", "inherit": "ONLY_MELEE" },
            { "name": "Aegis", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 50%.", "sp": "200", "known": "5", "learn": "-", "inherit": "ONLY_MELEE" }
        ],
        "base_passive_A":
        [   { "name": "HP +3", "effect": "Grants +3 to max HP.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "HP Spd 1", "effect": "Grants HP+3, Spd+1.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "HP Spd 2", "effect": "Grants HP+4, Spd+2.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Shield Pulse 1", "effect": "If unit's Special triggers based on a foe's attack, Special cooldown count-1 at start of turn 1.", "sp": "60", "learn": "-", "inherit": "Melee Weapon Users Only <br />Infantry and Armored Only" },
            { "name": "Shield Pulse 2", "effect": "If unit's Special triggers based on a foe's attack, Special cooldown count-1 at start of turn 1. Unit takes 5 less damage when Special triggers.", "sp": "120", "learn": "-", "inherit": "Melee Weapon Users Only <br />Infantry and Armored Only" },
            { "name": "Shield Pulse 3", "effect": "If unit's Special triggers based on a foe's attack, Special cooldown count-2 at start of turn 1. Unit takes 5 less damage when Special triggers.", "sp": "240", "learn": "5", "inherit": "Melee Weapon Users Only <br />Infantry and Armored Only" }
        ],
        "base_passive_C": []
    },
    "saizo__angry_ninja":
    {   "tag": "saizo__angry_ninja",
        "name": "Saizo",
        "epithet": "Angry Ninja",
        "description": "A severe ninja of Hoshido. Has a twin brother named Kaze. One of Ryoma's retainers.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "colorless_dagger",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 16, 6, 7, 8, 2 ],
            "4": [ 16, 6, 8, 9, 2 ],
            "5": [ 17, 7, 8, 9, 3 ]
        },
        "growth_points": [ 5, 6, 8, 7, 2 ],
        "base_weapons":
        [   { "name": "Iron Dagger", "mt": "3", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Dagger", "mt": "5", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Smoke Dagger", "mt": "6", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-4 on foes within 2 spaces of target through their next actions.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Smoke Dagger+", "mt": "9", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-6 on foes within 2 spaces of target through their next actions.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Harsh Command", "rng": "1", "effect": "Converts penalties on target into bonuses.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Poison Strike 1", "effect": "Inflicts 4 damage to foe after any combat this unit initiates.", "sp": "60", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Poison Strike 2", "effect": "Inflicts 7 damage to foe after any combat this unit initiates.", "sp": "120", "learn": "3", "inherit": "Excludes Staff Users" },
            { "name": "Poison Strike 3", "effect": "Inflicts 10 damage to foe after any combat this unit initiates.", "sp": "240", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C":
        [   { "name": "Spur Spd 1", "effect": "Grants adjacent allies Spd+2 during combat.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Spur Spd 2", "effect": "Grants adjacent allies Spd+3 during combat.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Spur Spd 3", "effect": "Grants adjacent allies Spd+4 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "sakura__loving_priestess":
    {   "tag": "sakura__loving_priestess",
        "name": "Sakura",
        "epithet": "Loving Priestess",
        "description": "Princess of Hoshido who is a gentle healer. Struggles with her shyness.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "colorless_staff",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 16, 5, 8, 4, 8 ],
            "5": [ 17, 6, 8, 5, 8 ]
        },
        "growth_points": [ 5, 6, 6, 5, 6 ],
        "base_weapons":
        [   { "name": "Assault", "mt": "10", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Fear", "mt": "5", "rng": "2", "effect": "After combat, if unit attacked, inflicts Atk-6 on foe through its next action.", "sp": "150", "known": "-", "learn": "4" },
            { "name": "Fear+", "mt": "12", "rng": "2", "effect": "After combat, if unit attacked, inflicts Atk-7 on target and foes within 2 spaces of target through their next actions.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Heal", "rng": "1", "effect": "Restores 5 HP.", "sp": "-", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Mend", "rng": "1", "effect": "Restores 10 HP.", "sp": "100", "known": "4", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Physic", "rng": "2", "effect": "Restores 8 HP. Rng: 2.", "sp": "200", "known": "5", "learn": "4", "inherit": "ONLY_STAFF" },
            { "name": "Physic+", "rng": "2", "effect": "Restores HP = 50% of Atk. (Minimum of 8 HP.) Rng: 2.", "sp": "300", "known": "-", "learn": "5", "inherit": "ONLY_STAFF" }
        ],
        "base_special":
        [   { "name": "Imbue", "cooldown": "1", "effect": "When healing an ally with a staff, increases recovered HP by 10.", "sp": "50", "known": "4", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Still-Water Balm", "cooldown": "1", "effect": "When healing an ally with a staff, grants all allies Res+4 for 1 turn.", "sp": "150", "known": "5", "learn": "4", "inherit": "ONLY_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Fortify Def 1", "effect": "Grants adjacent allies Def+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Fortify Def 2", "effect": "Grants adjacent allies Def+3 through their next actions at the start of each turn.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Fortify Def 3", "effect": "Grants adjacent allies Def+4 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "sakura__gentle_nekomata":
    {   "tag": "sakura__gentle_nekomata",
        "name": "Sakura",
        "epithet": "Gentle Nekomata",
        "subname": "🐱",
        "description": "This Hoshidan princess is so kind that she wouldn't play a trick on anyone, even if they didn't give her candy.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "colorless_dagger",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 8, 8, 4, 8 ]
        },
        "growth_points": [ 4, 7, 8, 1, 8 ],
        "base_weapons":
        [   { "name": "Iron Dagger", "mt": "3", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Dagger", "mt": "5", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Kitty Paddle", "mt": "5", "rng": "2", "effect": "Effective against magic foes.  After combat, if unit attacked and if foe uses magic, inflicts Def/Res-5 on foe through its next action.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Kitty Paddle+", "mt": "8", "rng": "2", "effect": "Effective against magic foes.  After combat, if unit attacked and if foe uses magic, inflicts Def/Res-7 on foe through its next action.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Chilling Wind", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Glacies", "cooldown": "4", "effect": "Boosts damage dealt by 80% of unit's Res.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Warding Stance 1", "effect": "Grants Res+2 during combat when this unit is attacked.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Warding Stance 2", "effect": "Grants Res+4 during combat when this unit is attacked.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Warding Stance 3", "effect": "Grants Res+6 during combat when this unit is attacked.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Guard 1", "effect": "If unit's HP is 100% at start of combat, enemy is inflicted with Special cooldown charge -1. (If using other similar skill, only highest value applied.)", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Guard 2", "effect": "If unit's HP is ≥ 90% at start of combat, enemy is inflicted with Special cooldown charge -1. (If using other similar skill, only highest value applied.)", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Guard 3", "effect": "If unit's HP is ≥ 80% at start of combat, enemy is inflicted with Special cooldown charge -1. (If using other similar skill, only highest value applied.)", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Dagger Valor 1", "effect": "If unit survives and uses a dagger, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "30", "learn": "-", "inherit": "Dagger Users Only" },
            { "name": "Dagger Valor 2", "effect": "If unit survives, all dagger users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "60", "learn": "-", "inherit": "Dagger Users Only" },
            { "name": "Dagger Valor 3", "effect": "If unit survives, all dagger users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "120", "learn": "5", "inherit": "Dagger Users Only" }
        ]
    },
    "sanaki__begnions_apostle":
    {   "tag": "sanaki__begnions_apostle",
        "name": "Sanaki",
        "epithet": "Begnion's Apostle",
        "description": "Empress of Begnion. Known as the Apostle, voice of the goddess. Young but dutiful ruler.",
        "origin": "Fire Emblem: Radiant Dawn",
        "weapon_type": "red_tome",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 16, 9, 7, 4, 8 ]
        },
        "growth_points": [ 4, 9, 5, 2, 8 ],
        "base_weapons":
        [   { "name": "Fire", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elfire", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Bolganone", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Cymbeline", "mt": "14", "rng": "2", "effect": "Grants adjacent allies Atk+4 through their next actions after any combat this unit initiates.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support":
        [   { "name": "Harsh Command", "rng": "1", "effect": "Converts penalties on target into bonuses.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Triangle Adept 1", "effect": "Gives Atk+10% if weapon-triangle advantage, Atk-10% if disadvantage.", "sp": "50", "learn": "-", "inherit": "Excludes Colorless Weapon Users" },
            { "name": "Triangle Adept 2", "effect": "Gives Atk+15% if weapon-triangle advantage, Atk-15% if disadvantage.", "sp": "100", "learn": "-", "inherit": "Excludes Colorless Weapon Users" },
            { "name": "Triangle Adept 3", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "200", "learn": "5", "inherit": "Excludes Colorless Weapon Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Hone Atk 1", "effect": "Grants adjacent allies Atk+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Hone Atk 2", "effect": "Grants adjacent allies Atk+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Hone Atk 3", "effect": "Grants adjacent allies Atk+4 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "selena__cutting_wit":
    {   "tag": "selena__cutting_wit",
        "name": "Selena",
        "epithet": "Cutting Wit",
        "description": "A mysterious woman devoted to service. One of Camilla's retainers. Snarky.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 17, 5, 8, 7, 5 ],
            "4": [ 17, 5, 9, 8, 5 ],
            "5": [ 18, 6, 9, 8, 6 ]
        },
        "growth_points": [ 5, 5, 8, 7, 6 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Armorslayer", "mt": "8", "rng": "1", "effect": "Effective against armored units. ", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Armorslayer+", "mt": "12", "rng": "1", "effect": "Effective against armored units. ", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Reposition", "rng": "1", "effect": "Moves adjacent ally to opposite side of unit.", "sp": "150", "known": "-", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Triangle Adept 1", "effect": "Gives Atk+10% if weapon-triangle advantage, Atk-10% if disadvantage.", "sp": "50", "learn": "3", "inherit": "Excludes Colorless Weapon Users" },
            { "name": "Triangle Adept 2", "effect": "Gives Atk+15% if weapon-triangle advantage, Atk-15% if disadvantage.", "sp": "100", "learn": "4", "inherit": "Excludes Colorless Weapon Users" },
            { "name": "Triangle Adept 3", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "200", "learn": "5", "inherit": "Excludes Colorless Weapon Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Threaten Spd 1", "effect": "Inflicts Spd-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Threaten Spd 2", "effect": "Inflicts Spd-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Threaten Spd 3", "effect": "Inflicts Spd-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "seliph__heir_of_light":
    {   "tag": "seliph__heir_of_light",
        "name": "Seliph",
        "epithet": "Heir of Light",
        "description": "Inheritor of the sacred sword Tyrfing. A savior in his time, but dislikes battle. Julia's half-brother.",
        "origin": "Fire Emblem: Genealogy of the Holy War",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 18, 8, 6, 8, 4 ],
            "5": [ 19, 8, 7, 8, 5 ]
        },
        "growth_points": [ 9, 8, 4, 6, 4 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Tyrfing", "mt": "16", "rng": "1", "effect": "Grants Def+4 in battle if unit's HP ≤ 50%.", "sp": "400", "known": "5", "learn": "5", "inherit": "Prf" }
        ],
        "base_support":
        [   { "name": "Rally Speed", "rng": "1", "effect": "Grants Spd+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "HP +3", "effect": "Grants +3 to max HP.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "HP +4", "effect": "Grants +4 to max HP.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "HP +5", "effect": "Grants +5 to max HP.", "sp": "160", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Brash Assault 1", "effect": "If unit initiates combat against a foe that can counter and unit's HP ≤ 30%, unit makes a guaranteed follow-up attack.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Brash Assault 2", "effect": "If unit initiates combat against a foe that can counter and unit's HP ≤ 40%, unit makes a guaranteed follow-up attack.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Brash Assault 3", "effect": "If unit initiates combat against a foe that can counter and unit's HP ≤ 50%, unit makes a guaranteed follow-up attack.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "serra__outspoken_cleric":
    {   "tag": "serra__outspoken_cleric",
        "name": "Serra",
        "epithet": "Outspoken Cleric",
        "description": "Cleric who thinks less of others, more of herself. Serves Hector, brother of the Marquess of Ostia.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "colorless_staff",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 15, 5, 8, 3, 8 ],
            "4": [ 15, 5, 9, 3, 9 ],
            "5": [ 16, 6, 9, 4, 9 ]
        },
        "growth_points": [ 4, 7, 6, 4, 7 ],
        "base_weapons":
        [   { "name": "Assault", "mt": "10", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Absorb", "mt": "4", "rng": "2", "effect": "Recovers HP=50% of damage dealt.", "sp": "150", "known": "-", "learn": "3" },
            { "name": "Absorb+", "mt": "7", "rng": "2", "effect": "Restores HP = 50% of damage dealt. After combat, if unit attacked, restores 7 HP to allies within 2 spaces of unit.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Heal", "rng": "1", "effect": "Restores 5 HP.", "sp": "-", "known": "-", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Mend", "rng": "1", "effect": "Restores 10 HP.", "sp": "100", "known": "3", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Recover", "rng": "1", "effect": "Restores 15 HP. Slows Special trigger (cooldown count+1).", "sp": "200", "known": "-", "learn": "4", "inherit": "ONLY_STAFF" },
            { "name": "Recover+", "rng": "1", "effect": "Restores HP = 50% of Atk +10. (Minimum of 15 HP.)", "sp": "300", "known": "-", "learn": "5", "inherit": "ONLY_STAFF" }
        ],
        "base_special":
        [   { "name": "Imbue", "cooldown": "1", "effect": "When healing an ally with a staff, increases recovered HP by 10.", "sp": "50", "known": "4", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Swift-Winds Balm", "cooldown": "1", "effect": "When healing an ally with a staff, grants all allies Spd+4 for 1 turn.", "sp": "150", "known": "-", "learn": "3", "inherit": "ONLY_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Hone Atk 1", "effect": "Grants adjacent allies Atk+2 through their next actions at the start of each turn.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Hone Atk 2", "effect": "Grants adjacent allies Atk+3 through their next actions at the start of each turn.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Hone Atk 3", "effect": "Grants adjacent allies Atk+4 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "seth__silver_knight":
    {   "tag": "seth__silver_knight",
        "name": "Seth",
        "epithet": "Silver Knight",
        "description": "A young commander of Renais. He's calm, composed, and skilled.",
        "origin": "Fire Emblem: The Sacred Stones",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 17, 8, 6, 8, 4 ],
            "5": [ 18, 8, 7, 8, 5 ]
        },
        "growth_points": [ 5, 7, 7, 7, 4 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Ruby Sword", "mt": "8", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Ruby Sword+", "mt": "12", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Swap", "rng": "1", "effect": "Swap places with an adjacent ally.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Fortress Def 1", "effect": "Grants Def+3. Inflicts Atk-3.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "Fortress Def 2", "effect": "Grants Def+4. Inflicts Atk-3.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Fortress Def 3", "effect": "Grants Def+5. Inflicts Atk-3.", "sp": "160", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Seal Atk 1", "effect": "After combat, foe suffers Atk-3 through its next action.", "sp": "40", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Atk Def 1", "effect": "After combat, inflicts Atk/Def-3 on foe through its next action.", "sp": "100", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Seal Atk Def 2", "effect": "After combat, inflicts Atk/Def-5 on foe through its next action.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C": []
    },
    "setsuna__absent_archer":
    {   "tag": "setsuna__absent_archer",
        "name": "Setsuna",
        "epithet": "Absent Archer",
        "description": "Hoshidan archer who is either fearless or daydreaming. One of Hinoka's retainers.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 17, 5, 8, 4, 5 ],
            "4": [ 17, 6, 9, 4, 5 ],
            "5": [ 18, 6, 9, 5, 6 ]
        },
        "growth_points": [ 5, 6, 9, 4, 4 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Assassin's Bow", "mt": "7", "rng": "2", "effect": "Effective against flying units.  If target has a dagger, it can't make a follow-up attack and this unit will.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Assassin's Bow+", "mt": "11", "rng": "2", "effect": "Effective against flying units.  If target has a dagger, it can't make a follow-up attack and this unit will.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Reciprocal Aid", "rng": "1", "effect": "Swap HP with adjacent ally (neither unit can go above their max HP).", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "HP +3", "effect": "Grants +3 to max HP.", "sp": "40", "learn": "3", "inherit": "None" },
            { "name": "HP +4", "effect": "Grants +4 to max HP.", "sp": "80", "learn": "4", "inherit": "None" },
            { "name": "HP +5", "effect": "Grants +5 to max HP.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Bowbreaker 1", "effect": "If unit's HP ≥ 90% in combat against a colorless bow foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.", "sp": "50", "learn": "-", "inherit": "Excludes Fliers" },
            { "name": "Bowbreaker 2", "effect": "If unit's HP ≥ 70% in combat against a colorless bow foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.", "sp": "100", "learn": "3", "inherit": "Excludes Fliers" },
            { "name": "Bowbreaker 3", "effect": "If unit's HP ≥ 50% in combat against a colorless bow foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.", "sp": "200", "learn": "4", "inherit": "Excludes Fliers" }
        ],
        "base_passive_C": []
    },
    "shanna__sprightly_flier":
    {   "tag": "shanna__sprightly_flier",
        "name": "Shanna",
        "epithet": "Sprightly Flier",
        "description": "A trainee of the Pegasus Knights of Ilia. Cheerful and optimistic.",
        "origin": "Fire Emblem: The Binding Blade",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 16, 7, 8, 5, 6 ],
            "4": [ 16, 8, 9, 5, 6 ],
            "5": [ 17, 8, 9, 6, 7 ]
        },
        "growth_points": [ 6, 6, 8, 5, 6 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Killer Lance", "mt": "7", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Killer Lance+", "mt": "11", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Chilling Wind", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Iceberg", "cooldown": "3", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Desperation 1", "effect": "If unit initiates combat with HP ≤ 25%, follow-up attacks occur immediately after unit's attack.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Desperation 2", "effect": "If unit initiates combat with HP ≤ 50%, follow-up attacks occur immediately after unit's attack.", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Desperation 3", "effect": "If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack.", "sp": "200", "learn": "4", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Threaten Spd 1", "effect": "Inflicts Spd-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Threaten Spd 2", "effect": "Inflicts Spd-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Threaten Spd 3", "effect": "Inflicts Spd-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "sharena__princess_of_askr":
    {   "tag": "sharena__princess_of_askr",
        "name": "Sharena",
        "epithet": "Princess of Askr",
        "description": "A princess of Askr and Alfonse's sister. Cheerful and loves making friends— especially with Heroes.",
        "origin": "Fire Emblem Heroes",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": true,
        "summon": false,
        "base_stats":
        {   "2": [ 17, 7, 7, 5, 3 ],
            "3": [ 18, 7, 7, 6, 4 ],
            "4": [ 18, 8, 8, 6, 4 ],
            "5": [ 19, 8, 8, 7, 5 ]
        },
        "growth_points": [ 7, 7, 7, 6, 4 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "2", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "2" },
            { "name": "Silver Lance", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "3" },
            { "name": "Fensalir", "mt": "16", "rng": "1", "effect": "Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "400", "known": "-", "learn": "5", "inherit": "Prf" }
        ],
        "base_support":
        [   { "name": "Rally Attack", "rng": "1", "effect": "Grants Atk+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "2", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Speed +1", "effect": "Grants Spd+1.", "sp": "30", "learn": "1", "inherit": "None" },
            { "name": "Speed +2", "effect": "Grants Spd+2.", "sp": "60", "learn": "2", "inherit": "None" },
            { "name": "Speed +3", "effect": "Grants Spd+3.", "sp": "120", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Fortify Def 1", "effect": "Grants adjacent allies Def+2 through their next actions at the start of each turn.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Fortify Def 2", "effect": "Grants adjacent allies Def+3 through their next actions at the start of each turn.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Fortify Def 3", "effect": "Grants adjacent allies Def+4 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "sheena__princess_of_gra":
    {   "tag": "sheena__princess_of_gra",
        "name": "Sheena",
        "epithet": "Princess of Gra",
        "description": "Princess of Gra, a failing realm. Feels the heavy weight of her responsibility.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Armored",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 20, 8, 5, 12, 6 ],
            "5": [ 21, 8, 6, 12, 7 ]
        },
        "growth_points": [ 7, 6, 5, 7, 8 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Killer Axe", "mt": "7", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Killer Axe+", "mt": "11", "rng": "1", "effect": "Accelerates Special trigger (cooldown count-1).", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Buckler", "cooldown": "3", "effect": "Reduces damage inflicted by attacks from adjacent foes by 30%.", "sp": "100", "known": "4", "learn": "-", "inherit": "ONLY_MELEE" },
            { "name": "Escutcheon", "cooldown": "2", "effect": "Reduces damage inflicted by attacks from adjacent foes by 30%.", "sp": "200", "known": "-", "learn": "4", "inherit": "ONLY_MELEE" }
        ],
        "base_passive_A":
        [   { "name": "Svalinn Shield", "effect": "Neutralizes \"effective against\" bonuses.", "sp": "200", "learn": "4", "inherit": "Armored Only" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Fortify Def 1", "effect": "Grants adjacent allies Def+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Fortify Def 2", "effect": "Grants adjacent allies Def+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Fortify Armor", "effect": "Grants adjacent armor allies Def/Res+6 through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "Armored Only" }
        ]
    },
    "shigure__dark_sky_singer":
    {   "tag": "shigure__dark_sky_singer",
        "name": "Shigure",
        "epithet": "Dark Sky Singer",
        "subname": "🎵",
        "description": "A descendant of the songstress Azura. Sings in Cyrkensia while hiding his identity.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "blue_tome",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 15, 7, 5, 4, 5 ]
        },
        "growth_points": [ 5, 7, 7, 4, 5 ],
        "base_weapons":
        [   { "name": "Thunder", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elthunder", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Dancer's Score", "mt": "8", "rng": "2", "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Dancer's Score+", "mt": "12", "rng": "2", "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Sing", "rng": "1", "effect": "Enables target to take another action. Cannot be used on units with Sing or Dance.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Torrent Dance 1", "effect": "If Sing or Dance is used, target also granted Res+3.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Geyser Dance 1", "effect": "If Sing or Dance is used, target also granted Def/Res+3.", "sp": "120", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Geyser Dance 2", "effect": "If Sing or Dance is used, target also granted Def/Res+4.", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C":
        [   { "name": "B Tome Valor 1", "effect": "If unit survives and uses a blue tome, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "30", "learn": "-", "inherit": "Blue Tome Users Only" },
            { "name": "B Tome Valor 2", "effect": "If unit survives, all blue tome users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "60", "learn": "-", "inherit": "Blue Tome Users Only" },
            { "name": "B Tome Valor 3", "effect": "If unit survives, all blue tome users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "120", "learn": "5", "inherit": "Blue Tome Users Only" }
        ]
    },
    "shiro__raw_talent":
    {   "tag": "shiro__raw_talent",
        "name": "Shiro",
        "epithet": "Raw Talent",
        "description": "Ryoma's son. Doesn't slack on training. Outgoing and easy to get along with.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 19, 9, 6, 9, 5 ]
        },
        "growth_points": [ 6, 8, 7, 8, 4 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Lance", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Bright Naginata", "mt": "16", "rng": "1", "effect": "Grants Atk/Def+4 during combat if foe initiates combat.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support":
        [   { "name": "Swap", "rng": "1", "effect": "Swap places with an adjacent ally.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Steady Stance 1", "effect": "Grants Def+2 during combat when this unit is attacked.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Steady Stance 2", "effect": "Grants Def+4 during combat when this unit is attacked.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Steady Stance 3", "effect": "Grants Def+6 during combat when this unit is attacked.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Def Tactic 1", "effect": "At start of turn, grants Def+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Def Tactic 2", "effect": "At start of turn, grants Def+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Def Tactic 3", "effect": "At start of turn, grants Def+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "siegbert__future_king":
    {   "tag": "siegbert__future_king",
        "name": "Siegbert",
        "epithet": "Future King",
        "description": "Xander's son. As a king-to-be, he received the finest education. Serious and kind.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 19, 8, 9, 7, 3 ]
        },
        "growth_points": [ 6, 8, 8, 7, 2 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Dark Greatsword", "mt": "16", "rng": "1", "effect": "Grants Atk/Spd+4 during combat if unit initiates combat.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Dragon Gaze", "cooldown": "4", "effect": "Grants +30% to Atk.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Dragon Fang", "cooldown": "4", "effect": "Grants +50% to Atk.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Death Blow 1", "effect": "Grants Atk+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Death Blow 2", "effect": "Grants Atk+4 during combat if unit initiates the attack.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Death Blow 3", "effect": "Grants Atk+6 during combat if unit initiates the attack.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Atk Tactic 1", "effect": "At start of turn, grants Atk+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Atk Tactic 2", "effect": "At start of turn, grants Atk+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Atk Tactic 3", "effect": "At start of turn, grants Atk+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "sigurd__holy_knight":
    {   "tag": "sigurd__holy_knight",
        "name": "Sigurd",
        "epithet": "Holy Knight",
        "description": "Heir to Chalphy, descendant of the crusader Baldr, and Seliph's father. He's courageous and has a strong sense of justice.",
        "origin": "Fire Emblem: Genealogy of the Holy War",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 19, 9, 8, 6, 4 ]
        },
        "growth_points": [ 6, 8, 7, 9, 2 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Divine Tyrfing", "mt": "16", "rng": "1", "effect": "Grants Res+3. If in combat against foe using magic, unit receives 50% less damage from the first attack.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":

        [   {   "name": "Miracle",
                "cooldown": "5",
                "effect": "If HP &gt; 1, survive a lethal attack with 1 HP remaining.",
                "sp": "200",
                "known": "5",
                "learn": "-",
                "inherit": null
            }
        ],
        "base_passive_A":
        [   { "name": "Close Def 1", "effect": "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+2 during combat.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Close Def 2", "effect": "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+4 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Close Def 3", "effect": "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+6 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Crusader's Ward", "effect": "If unit receives consecutive attack from a foe 2 spaces away, damage from second attack onward reduced by 80%. (Skill cannot be inherited.)", "sp": "300", "learn": "5", "inherit": "Prf" }
        ],
        "base_passive_C":
        [   { "name": "Spd Smoke 1", "effect": "After combat, inflicts Spd-3 on foes within 2 spaces of target through their next actions.", "sp": "60", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Spd Smoke 2", "effect": "After combat, inflicts Spd-5 on foes within 2 spaces of target through their next actions.", "sp": "120", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Spd Smoke 3", "effect": "After combat, inflicts Spd-7 on foes within 2 spaces of target through their next actions.", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ]
    },
    "soleil__adorable_adorer":
    {   "tag": "soleil__adorable_adorer",
        "name": "Soleil",
        "epithet": "Adorable Adorer",
        "description": "Laslow's daughter. Cheerful and not even slightly shy. Looks up to cool women.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 17, 10, 9, 5, 4 ],
            "5": [ 18, 10, 9, 6, 5 ]
        },
        "growth_points": [ 5, 9, 8, 6, 5 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Firesweep Sword", "mt": "11", "rng": "1", "effect": "Unit and foes cannot counterattack.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Firesweep Sword+", "mt": "15", "rng": "1", "effect": "Unit and foes cannot counterattack.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Wind", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Blazing Wind", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Darting Blow 1", "effect": "Grants Spd+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Darting Blow 2", "effect": "Grants Spd+4 during combat if unit initiates the attack.", "sp": "100", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Darting Blow 3", "effect": "Grants Spd+6 during combat if unit initiates the attack.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Res 1", "effect": "Grants adjacent allies Res+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Drive Res 1", "effect": "Grants allies within 2 spaces Res+2 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Drive Res 2", "effect": "Grants allies within 2 spaces Res+3 during combat.", "sp": "240", "learn": "4", "inherit": "None" }
        ]
    },
    "sonya__vengeful_mage":
    {   "tag": "sonya__vengeful_mage",
        "name": "Sonya",
        "epithet": "Vengeful Mage",
        "description": "A mage hired by Grieth. Cool but flamboyant. Vowed vengeance upon her father, Jedah.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "green_tome",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 7, 7, 5, 8 ]
        },
        "growth_points": [ 5, 8, 7, 1, 7 ],
        "base_weapons":
        [   { "name": "Wind", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Elwind", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Rexcalibur", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Dark Excalibur", "mt": "14", "rng": "2", "effect": "Grants +10 to damage when Special triggers.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Moonbow", "cooldown": "2", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Warding Blow 1", "effect": "Grants Res+2 during combat if unit initiates attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Mirror Strike 1", "effect": "Grants Atk/Res+2 during combat if unit initiates combat.", "sp": "120", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Mirror Strike 2", "effect": "Grants Atk/Res+4 during combat if unit initiates combat.", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Res Ploy 1", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-3 until the end of foe's next action.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Res Ploy 2", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-4 until the end of foe's next action.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Res Ploy 3", "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-5 until the end of foe's next action.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "sophia__nabata_prophet":
    {   "tag": "sophia__nabata_prophet",
        "name": "Sophia",
        "epithet": "Nabata Prophet",
        "description": "A shaman of Nabata who has lived a sheltered life away from other people. Sees the future.",
        "origin": "Fire Emblem: The Binding Blade",
        "weapon_type": "red_tome",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "1": [ 16, 7, 2, 4, 5 ],
            "2": [ 16, 8, 2, 4, 6 ],
            "3": [ 17, 8, 3, 5, 6 ],
            "4": [ 17, 9, 3, 5, 7 ],
            "5": [ 18, 9, 4, 6, 7 ]
        },
        "growth_points": [ 6, 7, 3, 6, 6 ],
        "base_weapons":
        [   { "name": "Flux", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "1", "learn": "-" },
            { "name": "Ruin", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Fenrir", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Fenrir+", "mt": "13", "rng": "2", "effect": "-", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Dragon Gaze", "cooldown": "4", "effect": "Grants +30% to Atk.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Dragon Fang", "cooldown": "4", "effect": "Grants +50% to Atk.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Warding Blow 1", "effect": "Grants Res+2 during combat if unit initiates attack.", "sp": "50", "learn": "3", "inherit": "Excludes Staff Users" },
            { "name": "Warding Blow 2", "effect": "Grants Res+4 during combat if unit initiates attack.", "sp": "100", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Warding Blow 3", "effect": "Grants Res+6 during combat if unit initiates attack.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Fortify Res 1", "effect": "Grants adjacent allies Res+2 through their next actions at the start of each turn.", "sp": "50", "learn": "1", "inherit": "None" },
            { "name": "Fortify Res 2", "effect": "Grants adjacent allies Res+3 through their next actions at the start of each turn.", "sp": "100", "learn": "2", "inherit": "None" },
            { "name": "Fortify Res 3", "effect": "Grants adjacent allies Res+4 through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "soren__shrewd_strategist":
    {   "tag": "soren__shrewd_strategist",
        "name": "Soren",
        "epithet": "Shrewd Strategist",
        "description": "An officer in the Greil Mercenaries. A coolheaded realist who has opened up to Ike.",
        "origin": "Fire Emblem: Path of Radiance",
        "weapon_type": "green_tome",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 16, 7, 9, 3, 6 ],
            "5": [ 17, 7, 9, 4, 7 ]
        },
        "growth_points": [ 5, 8, 7, 2, 6 ],
        "base_weapons":
        [   { "name": "Wind", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Elwind", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Rexcalibur", "mt": "9", "rng": "2", "effect": "-", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Rexcalibur+", "mt": "13", "rng": "2", "effect": "-", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Wind", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Growing Wind", "cooldown": "4", "effect": "Before combat this unit initiates, foes in a wide area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Watersweep 1", "effect": "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 5, foe can’t counterattack.", "sp": "60", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Watersweep 2", "effect": "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 3, foe can’t counterattack.", "sp": "120", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Watersweep 3", "effect": "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 1, foe can’t counterattack.", "sp": "240", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C":
        [   { "name": "Fortify Res 1", "effect": "Grants adjacent allies Res+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Fortify Res 2", "effect": "Grants adjacent allies Res+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Fortify Res 3", "effect": "Grants adjacent allies Res+4 through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "sothe__zephyr":
    {   "tag": "sothe__zephyr",
        "name": "Sothe",
        "epithet": "Zephyr",
        "description": "A thief for the Dawn Brigade. He generally shows little interest in others but tends to be overprotective of his Micaiah, who's like a sister to him.",
        "origin": "Fire Emblem: Radiant Dawn",
        "weapon_type": "colorless_dagger",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 10, 9, 5, 4 ]
        },
        "growth_points": [ 6, 8, 7, 4, 4 ],
        "base_weapons":
        [   { "name": "Iron Dagger", "mt": "3", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Dagger", "mt": "5", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Dagger", "mt": "7", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Peshkatz", "mt": "14", "rng": "2", "effect": "After combat, if unit attacked, inflicts Atk/Spd/Def/Res-4 on target and foes within 2 spaces of target through their next actions, and grants Atk/Spd/Def/Res+4 to unit and allies within 2 spaces for 1 turn.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Night Sky", "cooldown": "3", "effect": "Grants +50% to damage dealt.", "sp": "100", "known": "-", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Glimmer", "cooldown": "2", "effect": "Grants +50% to damage dealt.", "sp": "200", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Life and Death 1", "effect": "Grants Atk/Spd+3. Inflicts Def/Res-3.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Life and Death 2", "effect": "Grants Atk/Spd+4. Inflicts Def/Res-4.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Life and Death 3", "effect": "Grants Atk/Spd+5. Inflicts Def/Res-5.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Atk 1", "effect": "Grants adjacent allies Atk+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Atk Spd 1", "effect": "Grants adjacent allies Atk/Spd +2 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Spur Atk Spd 2", "effect": "Grants adjacent allies Atk/Spd +3 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "stahl__viridian_knight":
    {   "tag": "stahl__viridian_knight",
        "name": "Stahl",
        "epithet": "Viridian Knight",
        "description": "A kind but slightly scatterbrained knight who serves with the Shepherds.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "1": [ 17, 5, 5, 6, 3 ],
            "2": [ 17, 6, 5, 7, 3 ],
            "3": [ 18, 6, 6, 7, 4 ],
            "4": [ 18, 7, 6, 8, 4 ],
            "5": [ 19, 7, 7, 8, 5 ]
        },
        "growth_points": [ 8, 7, 5, 6, 4 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "1", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Ruby Sword", "mt": "8", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Ruby Sword+", "mt": "12", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Swap", "rng": "1", "effect": "Swap places with an adjacent ally.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Defense +1", "effect": "Grants Def+1.", "sp": "30", "learn": "1", "inherit": "None" },
            { "name": "Defense +2", "effect": "Grants Def+2.", "sp": "60", "learn": "2", "inherit": "None" },
            { "name": "Defense +3", "effect": "Grants Def+3.", "sp": "120", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Obstruct 1", "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 90%. (No effect on foes with a Pass skill.)", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Obstruct 2", "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 70%. (No effect on foes with a Pass skill.)", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Obstruct 3", "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 50%. (No effect on foes with a Pass skill.)", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "subaki__perfect_expert":
    {   "tag": "subaki__perfect_expert",
        "name": "Subaki",
        "epithet": "Perfect Expert",
        "description": "Sky Knight of Hoshido who aims for perfection. One of Sakura's retainers.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "1": [ 16, 4, 7, 7, 3 ],
            "2": [ 16, 4, 8, 8, 3 ],
            "3": [ 17, 5, 8, 8, 4 ],
            "4": [ 17, 5, 9, 9, 4 ],
            "5": [ 18, 6, 9, 9, 5 ]
        },
        "growth_points": [ 6, 5, 8, 8, 4 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "1", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Sapphire Lance", "mt": "8", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Sapphire Lance+", "mt": "12", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Swap", "rng": "1", "effect": "Swap places with an adjacent ally.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Resistance +1", "effect": "Grants Res+1.", "sp": "30", "learn": "1", "inherit": "None" },
            { "name": "Resistance +2", "effect": "Grants Res+2.", "sp": "60", "learn": "2", "inherit": "None" },
            { "name": "Resistance +3", "effect": "Grants Res+3.", "sp": "120", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Quick Riposte 1", "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 90%.", "sp": "60", "learn": "3", "inherit": "None" },
            { "name": "Quick Riposte 2", "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 80%.", "sp": "120", "learn": "4", "inherit": "None" },
            { "name": "Quick Riposte 3", "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 70%.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "sully__crimson_knight":
    {   "tag": "sully__crimson_knight",
        "name": "Sully",
        "epithet": "Crimson Knight",
        "description": "A member of the Shepherds who is serious about becoming a great knight.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 17, 6, 7, 6, 5 ],
            "4": [ 17, 7, 8, 6, 5 ],
            "5": [ 18, 7, 8, 7, 6 ]
        },
        "growth_points": [ 7, 5, 8, 4, 6 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "1", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Sapphire Lance", "mt": "8", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Sapphire Lance+", "mt": "12", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Draw Back", "rng": "1", "effect": "Unit moves 1 space away from target ally, who moves to unit's former position.", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Swordbreaker 1", "effect": "If unit's HP ≥ 90% in combat against a sword user, unit makes a follow-up attack and foe cannot.", "sp": "50", "learn": "-", "inherit": "Excludes Green Weapon Users" },
            { "name": "Swordbreaker 2", "effect": "If unit's HP ≥ 70% in combat against a sword user, unit makes a follow-up attack and foe cannot.", "sp": "100", "learn": "4", "inherit": "Excludes Green Weapon Users" },
            { "name": "Swordbreaker 3", "effect": "If unit's HP ≥ 50% in combat against a sword user, unit makes a follow-up attack and foe cannot.", "sp": "200", "learn": "5", "inherit": "Excludes Green Weapon Users" }
        ],
        "base_passive_C":
        [   { "name": "Spur Def 1", "effect": "Grants adjacent allies Def+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Def 2", "effect": "Grants adjacent allies Def+3 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Spur Def 3", "effect": "Grants adjacent allies Def+4 during combat.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "tailtiu__thunder_noble":
    {   "tag": "tailtiu__thunder_noble",
        "name": "Tailtiu",
        "epithet": "Thunder Noble",
        "description": "A noblewoman from Friege and descendant of the crusader Thrud. She appears cheerful but is hiding her troubles.",
        "origin": "Fire Emblem: Genealogy of the Holy War",
        "weapon_type": "blue_tome",
        "colour": "blue",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 16, 8, 9, 3, 5 ],
            "5": [ 17, 8, 9, 4, 6 ]
        },
        "growth_points": [ 6, 7, 8, 2, 5 ],
        "base_weapons":
        [   { "name": "Thunder", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elthunder", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Blárblade", "mt": "9", "rng": "2", "effect": "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Blárblade+", "mt": "13", "rng": "2", "effect": "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Rally Resistance", "rng": "1", "effect": "Grants Res+4 to an adjacent ally until the end of the turn.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Rally Speed Resistance", "rng": "1", "effect": "Grants Spd/Res+3 to an adjacent ally until the end of the turn.", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Attack +1", "effect": "Grants Atk+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Attack Res 1", "effect": "Grants Atk/Res+1.", "sp": "80", "learn": "4", "inherit": "None" },
            { "name": "Attack Res 2", "effect": "Grants Atk/Res+2.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Spd 1", "effect": "Grants adjacent allies Spd+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Drive Spd 1", "effect": "Grants allies within 2 spaces Spd+2 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Drive Spd 2", "effect": "Grants allies within 2 spaces Spd+3 during combat.", "sp": "240", "learn": "4", "inherit": "None" }
        ]
    },
    "takumi__wild_card":
    {   "tag": "takumi__wild_card",
        "name": "Takumi",
        "epithet": "Wild Card",
        "description": "Prince of Hoshido who wields the divine bow Fujin Yumi. Prickly at times.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 18, 8, 7, 6, 5 ]
        },
        "growth_points": [ 6, 7, 8, 5, 2 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Bow", "mt": "9", "rng": "2", "effect": "Effective against flying units. ", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Fujin Yumi", "mt": "14", "rng": "2", "effect": "Effective against flying units.  Unit can pass though foes if own HP ≥ 50%.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Retribution", "cooldown": "3", "effect": "Grants bonus to damage dealt equal to 30% of damage suffered.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Vengeance", "cooldown": "3", "effect": "Grants bonus to damage dealt equal to 50% of damage suffered.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Close Counter", "effect": "Enables unit to counterattack regardless of distance to attacker.", "sp": "300", "learn": "5", "inherit": "Ranged Weapon Users Only" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Threaten Spd 1", "effect": "Inflicts Spd-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Threaten Spd 2", "effect": "Inflicts Spd-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Threaten Spd 3", "effect": "Inflicts Spd-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "takumi__prince_of_soup":
    {   "tag": "takumi__prince_of_soup",
        "name": "Takumi",
        "epithet": "Prince of Soup",
        "subname": "🎉",
        "description": "The Hoshidan prince who wields the divine bow Fujin Yumi. Loves miso soup, but loves ozoni, eaten at the New Year, just as much.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "colorless_dagger",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 18, 8, 10, 4, 5 ]
        },
        "growth_points": [ 6, 8, 7, 2, 6 ],
        "base_weapons":
        [   { "name": "Iron Dagger", "mt": "3", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Dagger", "mt": "5", "rng": "2", "effect": "After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Kagami Mochi", "mt": "8", "rng": "2", "effect": "Accelerates Special trigger (cooldown count-1). After combat, if unit attacked, inflicts Def/Res-5 on target and foes within 2 spaces through their next actions.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Kagami Mochi+", "mt": "12", "rng": "2", "effect": "Accelerates Special trigger (cooldown count-1). After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces through their next actions.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Moonbow", "cooldown": "2", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Atk Res Bond 1", "effect": "Grants Atk/Res+3 to this unit during combat if unit is adjacent to an ally.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Atk Res Bond 2", "effect": "Grants Atk/Res+4 to this unit during combat if unit is adjacent to an ally.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Atk Res Bond 3", "effect": "Grants Atk/Res+5 to this unit during combat if unit is adjacent to an ally.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Bowbreaker 1", "effect": "If unit's HP ≥ 90% in combat against a colorless bow foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.", "sp": "50", "learn": "-", "inherit": "Excludes Fliers" },
            { "name": "Bowbreaker 2", "effect": "If unit's HP ≥ 70% in combat against a colorless bow foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.", "sp": "100", "learn": "-", "inherit": "Excludes Fliers" },
            { "name": "Bowbreaker 3", "effect": "If unit's HP ≥ 50% in combat against a colorless bow foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.", "sp": "200", "learn": "5", "inherit": "Excludes Fliers" }
        ],
        "base_passive_C": []
    },
    "tana__winged_princess":
    {   "tag": "tana__winged_princess",
        "name": "Tana",
        "epithet": "Winged Princess",
        "description": "The princess of Frelia. Innes's sister. Somewhat naive, but cheery and very sociable.",
        "origin": "Fire Emblem: The Sacred Stones",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Flying",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 17, 8, 10, 6, 6 ]
        },
        "growth_points": [ 5, 8, 8, 5, 5 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Heavy Spear", "mt": "8", "rng": "1", "effect": "Effective against armored units. ", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Vidofnir", "mt": "16", "rng": "1", "effect": "If unit is attacked by foe using sword, axe or lance, unit receives Def+7 during combat.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Moonbow", "cooldown": "2", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Speed +1", "effect": "Grants Spd+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Spd Def 1", "effect": "Grants Spd/Def+1.", "sp": "80", "learn": "-", "inherit": "None" },
            { "name": "Spd Def 2", "effect": "Grants Spd/Def+2.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Guidance 1", "effect": "If unit has 100% HP, infantry and armored allies within 2 spaces can move to a space adjacent to unit.", "sp": "60", "learn": "-", "inherit": "Fliers Only" },
            { "name": "Guidance 2", "effect": "If unit has ≥ 50% HP, infantry and armored allies within 2 spaces can move to a space adjacent to unit.", "sp": "120", "learn": "-", "inherit": "Fliers Only" },
            { "name": "Guidance 3", "effect": "Infantry and armored allies within 2 spaces can move to a space adjacent to unit.", "sp": "240", "learn": "5", "inherit": "Fliers Only" }
        ]
    },
    "tharja__dark_shadow":
    {   "tag": "tharja__dark_shadow",
        "name": "Tharja",
        "epithet": "Dark Shadow",
        "description": "A mage from Plegia with a dark side and a possessive streak, especially with Robin.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "red_tome",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 16, 8, 8, 5, 4 ],
            "5": [ 17, 8, 8, 6, 5 ]
        },
        "growth_points": [ 6, 7, 8, 4, 3 ],
        "base_weapons":
        [   { "name": "Flux", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Ruin", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Rauðrblade", "mt": "9", "rng": "2", "effect": "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Rauðrblade+", "mt": "13", "rng": "2", "effect": "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Retribution", "cooldown": "3", "effect": "Grants bonus to damage dealt equal to 30% of damage suffered.", "sp": "100", "known": "4", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Vengeance", "cooldown": "3", "effect": "Grants bonus to damage dealt equal to 50% of damage suffered.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Darting Blow 1", "effect": "Grants Spd+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Darting Blow 2", "effect": "Grants Spd+4 during combat if unit initiates the attack.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Darting Blow 3", "effect": "Grants Spd+6 during combat if unit initiates the attack.", "sp": "200", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Res 1", "effect": "Grants adjacent allies Res+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Res 2", "effect": "Grants adjacent allies Res+3 during combat.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Spur Res 3", "effect": "Grants adjacent allies Res+4 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "tharja__normal_girl":
    {   "tag": "tharja__normal_girl",
        "name": "Tharja",
        "epithet": "\"Normal Girl\"",
        "subname": "🎄",
        "description": "A mage from Plegia who, while usually creepy, is acting bright and cheerful...for some reason.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "red_tome",
        "colour": "red",
        "move_type": "Armored",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 19, 10, 5, 8, 10 ]
        },
        "growth_points": [ 7, 7, 2, 8, 8 ],
        "base_weapons":
        [   { "name": "Flux", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Ruin", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Candelabra", "mt": "8", "rng": "2", "effect": "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Candelabra+", "mt": "12", "rng": "2", "effect": "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Chilling Wind", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "100", "known": "-", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Iceberg", "cooldown": "3", "effect": "Boosts damage dealt by 50% of unit's Res.", "sp": "200", "known": "-", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Close Counter", "effect": "Enables unit to counterattack regardless of distance to attacker.", "sp": "300", "learn": "-", "inherit": "Ranged Weapon Users Only" }
        ],
        "base_passive_B":
        [   { "name": "Vengeful Fighter 1", "effect": "If unit's HP ≥ 90% and foe initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)", "sp": "60", "learn": "-", "inherit": "Armored Only" },
            { "name": "Vengeful Fighter 2", "effect": "If unit's HP ≥ 70% and foe initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)", "sp": "120", "learn": "-", "inherit": "Armored Only" },
            { "name": "Vengeful Fighter 3", "effect": "If unit's HP ≥ 50% and foe initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)", "sp": "240", "learn": "5", "inherit": "Armored Only" }
        ],
        "base_passive_C":
        [   { "name": "R Tome Valor 1", "effect": "If unit survives and uses a red tome, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "30", "learn": "-", "inherit": "Red Tome Users Only" },
            { "name": "R Tome Valor 2", "effect": "If unit survives, all red tome users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "60", "learn": "-", "inherit": "Red Tome Users Only" },
            { "name": "R Tome Valor 3", "effect": "If unit survives, all red tome users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "120", "learn": "5", "inherit": "Red Tome Users Only" }
        ]
    },
    "tiki__dragon_scion":
    {   "tag": "tiki__dragon_scion",
        "name": "Tiki",
        "epithet": "Dragon Scion",
        "subname": "🔥",
        "description": "A young Divine Dragon once put into a timeless sleep to keep her dragon impulses in check. Now longs for human company.",
        "origin": "Fire Emblem: Mystery of the Emblem",
        "weapon_type": "red_dragonstone",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 15, 5, 4, 8, 7 ]
        },
        "growth_points": [ 8, 8, 8, 7, 6 ],
        "base_weapons":
        [   { "name": "Fire Breath", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Fire Breath+", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Flametongue", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Flametongue+", "mt": "15", "rng": "1", "effect": "-", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Flame", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Growing Flame", "cooldown": "4", "effect": "Before combat this unit initiates, foes in a wide area around target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Armored Blow 1", "effect": "Grants Def+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Armored Blow 2", "effect": "Grants Def+4 during combat if unit initiates the attack.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Armored Blow 3", "effect": "Grants Def+6 during combat if unit initiates the attack.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Breath of Life 1", "effect": "If unit initiates attack, adjacent allies recover 3 HP after combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Breath of Life 2", "effect": "If unit initiates attack, adjacent allies recover 5 HP after combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Breath of Life 3", "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "tiki__nagas_voice":
    {   "tag": "tiki__nagas_voice",
        "name": "Tiki",
        "epithet": "Naga's Voice",
        "subname": "🐲",
        "description": "Known as the Voice of the Divine Dragon. Has lived for ages. Once friends with Marth.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "red_dragonstone",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "3": [ 17, 6, 5, 8, 6 ],
            "4": [ 17, 7, 5, 9, 6 ],
            "5": [ 18, 7, 6, 9, 7 ]
        },
        "growth_points": [ 6, 9, 4, 8, 4 ],
        "base_weapons":
        [   { "name": "Fire Breath", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Fire Breath+", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Lightning Breath", "mt": "7", "rng": "1", "effect": "Enables counterattack regardless of attacker's range. Slows Special trigger (cooldown count+1).", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Lightning Breath+", "mt": "11", "rng": "1", "effect": "Enables counterattack regardless of attacker's range. Slows Special trigger (cooldown count+1).", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Glowing Ember", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Def.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Bonfire", "cooldown": "3", "effect": "Boosts damage dealt by 50% of unit's Def.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Defiant Atk 1", "effect": "Grants Atk+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "-", "inherit": "None" },
            { "name": "Defiant Atk 2", "effect": "Grants Atk+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "3", "inherit": "None" },
            { "name": "Defiant Atk 3", "effect": "Grants Atk+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Res 1", "effect": "Grants adjacent allies Res+2 during combat.", "sp": "50", "learn": "3", "inherit": "None" },
            { "name": "Spur Res 2", "effect": "Grants adjacent allies Res+3 during combat.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Spur Res 3", "effect": "Grants adjacent allies Res+4 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "tiki__summering_scion":
    {   "tag": "tiki__summering_scion",
        "name": "Tiki",
        "epithet": "Summering Scion",
        "subname": "🍉",
        "description": "Known as the Voice of the Divine Dragon. Has lived through thousands of summers, but usually doesn't need to worry about swimming gear.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 18, 8, 6, 8, 7 ]
        },
        "growth_points": [ 4, 9, 7, 7, 4 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Melon Crusher", "mt": "10", "rng": "1", "effect": "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Melon Crusher+", "mt": "14", "rng": "1", "effect": "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Daylight", "cooldown": "3", "effect": "Heal 30% of damage dealt.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Sol", "cooldown": "3", "effect": "Heal 50% of damage dealt.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Close Def 1", "effect": "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+2 during combat.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Close Def 2", "effect": "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+4 during combat.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Close Def 3", "effect": "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+6 during combat.", "sp": "240", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Axe Valor 1", "effect": "If unit survives and uses an axe, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "30", "learn": "-", "inherit": "Axe Users Only" },
            { "name": "Axe Valor 2", "effect": "If unit survives, all axe users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "60", "learn": "-", "inherit": "Axe Users Only" },
            { "name": "Axe Valor 3", "effect": "If unit survives, all axe users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)", "sp": "120", "learn": "5", "inherit": "Axe Users Only" }
        ]
    },
    "titania__mighty_mercenary":
    {   "tag": "titania__mighty_mercenary",
        "name": "Titania",
        "epithet": "Mighty Mercenary",
        "description": "Deputy commander of the Greil Mercenaries. An idealistic former knight who values honor.",
        "origin": "Fire Emblem: Path of Radiance",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "4": [ 17, 5, 8, 5, 8 ],
            "5": [ 18, 6, 8, 6, 8 ]
        },
        "growth_points": [ 5, 6, 8, 5, 6 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Emerald Axe", "mt": "8", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Emerald Axe+", "mt": "12", "rng": "1", "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Reciprocal Aid", "rng": "1", "effect": "Swap HP with adjacent ally (neither unit can go above their max HP).", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Armored Blow 1", "effect": "Grants Def+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Armored Blow 2", "effect": "Grants Def+4 during combat if unit initiates the attack.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Armored Blow 3", "effect": "Grants Def+6 during combat if unit initiates the attack.", "sp": "200", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Guard 1", "effect": "If unit's HP is 100% at start of combat, enemy is inflicted with Special cooldown charge -1. (If using other similar skill, only highest value applied.)", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Guard 2", "effect": "If unit's HP is ≥ 90% at start of combat, enemy is inflicted with Special cooldown charge -1. (If using other similar skill, only highest value applied.)", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Guard 3", "effect": "If unit's HP is ≥ 80% at start of combat, enemy is inflicted with Special cooldown charge -1. (If using other similar skill, only highest value applied.)", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C": []
    },
    "tobin__the_clueless_one":
    {   "tag": "tobin__the_clueless_one",
        "name": "Tobin",
        "epithet": "The Clueless One",
        "description": "Alm's childhood friend from Ram Village. Honest to a fault, and suffers for it.",
        "origin": "Fire Emblem Echoes: Shadows of Valentia",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Infantry",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "4": [ 17, 7, 5, 4, 3 ],
            "5": [ 18, 7, 5, 5, 4 ]
        },
        "growth_points": [ 9, 7, 6, 9, 6 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Armorslayer", "mt": "8", "rng": "1", "effect": "Effective against armored units. ", "sp": "200", "known": "4", "learn": "-" },
            { "name": "Armorslayer+", "mt": "12", "rng": "1", "effect": "Effective against armored units. ", "sp": "300", "known": "5", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Pivot", "rng": "1", "effect": "Unit moves to opposite side of adjacent ally.", "sp": "150", "known": "4", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A":
        [   { "name": "Attack +1", "effect": "Grants Atk+1.", "sp": "30", "learn": "-", "inherit": "None" },
            { "name": "Attack +2", "effect": "Grants Atk+2.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Attack +3", "effect": "Grants Atk+3.", "sp": "120", "learn": "4", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Seal Spd 1", "effect": "After combat, foe suffers Spd-3 through its next action.", "sp": "40", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Seal Spd 2", "effect": "After combat, foe suffers Spd-5 through its next action.", "sp": "80", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Seal Spd 3", "effect": "After combat, foe suffers Spd-7 through its next action.", "sp": "160", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C": []
    },
    "ursula__blue_crow":
    {   "tag": "ursula__blue_crow",
        "name": "Ursula",
        "epithet": "Blue Crow",
        "description": "A cruel member of the Black Fang assassins. Lends her service only to someone truly perfect.",
        "origin": "Fire Emblem: The Blazing Blade",
        "weapon_type": "blue_tome",
        "colour": "blue",
        "move_type": "Cavalry",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "3": [ 15, 6, 7, 3, 7 ],
            "4": [ 15, 6, 8, 3, 8 ],
            "5": [ 16, 7, 8, 4, 8 ]
        },
        "growth_points": [ 5, 6, 7, 3, 6 ],
        "base_weapons":
        [   { "name": "Thunder", "mt": "4", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "-", "inherit": "Prf" },
            { "name": "Elthunder", "mt": "6", "rng": "2", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Blárwolf", "mt": "6", "rng": "2", "effect": "Effective against cavalry units. ", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Blárwolf+", "mt": "10", "rng": "2", "effect": "Effective against cavalry units. ", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Thunder", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Growing Thunder", "cooldown": "4", "effect": "Before combat this unit initiates, foes in a wide area around target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Death Blow 1", "effect": "Grants Atk+2 during combat if unit initiates the attack.", "sp": "50", "learn": "3", "inherit": "Excludes Staff Users" },
            { "name": "Death Blow 2", "effect": "Grants Atk+4 during combat if unit initiates the attack.", "sp": "100", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Death Blow 3", "effect": "Grants Atk+6 during combat if unit initiates the attack.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Threaten Res 1", "effect": "Inflicts Res-3 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Threaten Res 2", "effect": "Inflicts Res-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "100", "learn": "3", "inherit": "None" },
            { "name": "Threaten Res 3", "effect": "Inflicts Res-5 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "200", "learn": "4", "inherit": "None" }
        ]
    },
    "valter__dark_moonstone":
    {   "tag": "valter__dark_moonstone",
        "name": "Valter",
        "epithet": "Dark Moonstone",
        "description": "One of Grado's six generals. Cruelty intoxicates him. Known as Moonstone.",
        "origin": "Fire Emblem: The Sacred Stones",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Flying",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "3": [ 17, 7, 8, 7, 3 ],
            "4": [ 17, 8, 9, 7, 3 ],
            "5": [ 18, 8, 9, 8, 4 ]
        },
        "growth_points": [ 7, 7, 6, 8, 3 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Silver Lance", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Cursed Lance", "mt": "16", "rng": "1", "effect": "Grants Atk/Spd+2 and accelerates Special trigger (cooldown count-1). Unit takes 4 damage after combat.", "sp": "400", "known": "-", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Luna", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-50%.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Darting Blow 1", "effect": "Grants Spd+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Darting Blow 2", "effect": "Grants Spd+4 during combat if unit initiates the attack.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Darting Blow 3", "effect": "Grants Spd+6 during combat if unit initiates the attack.", "sp": "200", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Panic Ploy 1", "effect": "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 5 or more lower than unit through foe's next action.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Panic Ploy 2", "effect": "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 3 or more lower than unit through foe's next action.", "sp": "120", "learn": "4", "inherit": "None" },
            { "name": "Panic Ploy 3", "effect": "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 1 or more lower than unit through foe's next action.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "virion__elite_archer":
    {   "tag": "virion__elite_archer",
        "name": "Virion",
        "epithet": "Elite Archer",
        "description": "Rightful ruler of Rosanne in Valm who has a tendency for wit and puffery.",
        "origin": "Fire Emblem Awakening",
        "weapon_type": "colorless_bow",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "1": [ 18, 5, 5, 5, 1 ],
            "2": [ 18, 6, 6, 5, 1 ],
            "3": [ 19, 6, 6, 6, 2 ],
            "4": [ 19, 7, 7, 6, 2 ],
            "5": [ 20, 7, 7, 7, 3 ]
        },
        "growth_points": [ 8, 7, 7, 5, 1 ],
        "base_weapons":
        [   { "name": "Iron Bow", "mt": "4", "rng": "2", "effect": "Effective against flying units. ", "sp": "50", "known": "1", "learn": "-" },
            { "name": "Steel Bow", "mt": "6", "rng": "2", "effect": "Effective against flying units. ", "sp": "100", "known": "3", "learn": "2" },
            { "name": "Silver Bow", "mt": "9", "rng": "2", "effect": "Effective against flying units. ", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Silver Bow+", "mt": "13", "rng": "2", "effect": "Effective against flying units. ", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Night Sky", "cooldown": "3", "effect": "Grants +50% to damage dealt.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Astra", "cooldown": "4", "effect": "Grants +150% to damage dealt.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Defiant Res 1", "effect": "Grants Res+3 at start of turn if unit's HP ≤ 50%.", "sp": "40", "learn": "3", "inherit": "None" },
            { "name": "Defiant Res 2", "effect": "Grants Res+5 at start of turn if unit's HP ≤ 50%.", "sp": "80", "learn": "4", "inherit": "None" },
            { "name": "Defiant Res 3", "effect": "Grants Res+7 at start of turn if unit's HP ≤ 50%.", "sp": "160", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B":
        [   { "name": "Seal Spd 1", "effect": "After combat, foe suffers Spd-3 through its next action.", "sp": "40", "learn": "1", "inherit": "Excludes Staff Users" },
            { "name": "Seal Spd 2", "effect": "After combat, foe suffers Spd-5 through its next action.", "sp": "80", "learn": "2", "inherit": "Excludes Staff Users" },
            { "name": "Seal Spd 3", "effect": "After combat, foe suffers Spd-7 through its next action.", "sp": "160", "learn": "4", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_C": []
    },
    "wrys__kindly_priest":
    {   "tag": "wrys__kindly_priest",
        "name": "Wrys",
        "epithet": "Kindly Priest",
        "description": "Humble priest of Talys who likes a quiet life. Despises battle, preferring to heal allies.",
        "origin": "Fire Emblem: Shadow Dragon and the Blade of Light",
        "weapon_type": "colorless_staff",
        "colour": "colorless",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "1": [ 16, 3, 4, 3, 8 ],
            "2": [ 16, 3, 5, 3, 9 ],
            "3": [ 17, 4, 5, 4, 9 ],
            "4": [ 17, 4, 6, 4, 10 ],
            "5": [ 18, 5, 6, 5, 10 ]
        },
        "growth_points": [ 7, 5, 4, 4, 8 ],
        "base_weapons":
        [   { "name": "Assault", "mt": "10", "rng": "2", "effect": "-", "sp": "50", "known": "-", "learn": "1", "inherit": "Prf" },
            { "name": "Slow", "mt": "5", "rng": "2", "effect": "After combat, if unit attacked, inflicts Spd-6 on foe through its next action.", "sp": "150", "known": "-", "learn": "3" },
            { "name": "Slow+", "mt": "12", "rng": "2", "effect": "After combat, if unit attacked, inflicts Spd-7 on target and foes within 2 spaces of target through their next actions.", "sp": "300", "known": "-", "learn": "5" }
        ],
        "base_support":
        [   { "name": "Heal", "rng": "1", "effect": "Restores 5 HP.", "sp": "-", "known": "1", "learn": "-", "inherit": "ONLY_STAFF" },
            { "name": "Reconcile", "rng": "1", "effect": "Restores 7 HP each to target and this unit.", "sp": "100", "known": "3", "learn": "2", "inherit": "ONLY_STAFF" },
            { "name": "Rehabilitate", "rng": "1", "effect": "Restores 7 HP or more the further below 50% the target's HP is. Slows special trigger (cooldown count+1).", "sp": "200", "known": "-", "learn": "4", "inherit": "ONLY_STAFF" },
            { "name": "Rehabilitate+", "rng": "1", "effect": "Restores HP = 50% of Atk -10. (Minimum of 7 HP.) If target's HP is ≤ 50%, the lower the target's HP, the more HP is restored.", "sp": "300", "known": "-", "learn": "5", "inherit": "ONLY_STAFF" }
        ],
        "base_special":
        [   { "name": "Imbue", "cooldown": "1", "effect": "When healing an ally with a staff, increases recovered HP by 10.", "sp": "50", "known": "4", "learn": "2", "inherit": "ONLY_STAFF" },
            { "name": "Heavenly Light", "cooldown": "2", "effect": "When healing an ally with a staff, all other allies recover 10 HP.", "sp": "150", "known": "-", "learn": "3", "inherit": "ONLY_STAFF" }
        ],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Live to Serve 1", "effect": "When healing allies with a staff, unit also recovers 50% of the HP restored.", "sp": "40", "learn": "3", "inherit": "Staff Users Only" },
            { "name": "Live to Serve 2", "effect": "When healing allies with a staff, unit also recovers 75% of the HP restored.", "sp": "80", "learn": "4", "inherit": "Staff Users Only" },
            { "name": "Live to Serve 3", "effect": "When healing allies with a staff, unit also recovers the same amount.", "sp": "160", "learn": "5", "inherit": "Staff Users Only" }
        ],
        "base_passive_C": []
    },
    "xander__paragon_knight":
    {   "tag": "xander__paragon_knight",
        "name": "Xander",
        "epithet": "Paragon Knight",
        "description": "Nohrian prince respected for his military prowess. Wields the divine blade Siegfried.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Cavalry",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "3": [ 19, 7, 4, 8, 3 ],
            "4": [ 19, 8, 4, 9, 3 ],
            "5": [ 20, 8, 5, 9, 4 ]
        },
        "growth_points": [ 7, 7, 5, 9, 2 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Siegfried", "mt": "16", "rng": "1", "effect": "Enables counterattack regardless of distance if this unit is attacked.", "sp": "400", "known": "-", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Rising Light", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).", "sp": "150", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Blazing Light", "cooldown": "4", "effect": "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).", "sp": "300", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Armored Blow 1", "effect": "Grants Def+2 during combat if unit initiates the attack.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Armored Blow 2", "effect": "Grants Def+4 during combat if unit initiates the attack.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Armored Blow 3", "effect": "Grants Def+6 during combat if unit initiates the attack.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Spur Def 1", "effect": "Grants adjacent allies Def+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Spur Def 2", "effect": "Grants adjacent allies Def+3 during combat.", "sp": "100", "learn": "4", "inherit": "None" },
            { "name": "Spur Def 3", "effect": "Grants adjacent allies Def+4 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "xander__spring_prince":
    {   "tag": "xander__spring_prince",
        "name": "Xander",
        "epithet": "Spring Prince",
        "subname": "🐇",
        "description": "Nohrian prince who normally wields the divine blade Siegfried but left it behind for the festival.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "blue_lance",
        "colour": "blue",
        "move_type": "Cavalry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 18, 6, 6, 9, 7 ]
        },
        "growth_points": [ 6, 5, 6, 8, 5 ],
        "base_weapons":
        [   { "name": "Iron Lance", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Lance", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Carrot Lance", "mt": "9", "rng": "1", "effect": "If unit initiates attack, unit recovers 4 HP after the battle.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Carrot Lance+", "mt": "13", "rng": "1", "effect": "If unit initiates attack, unit recovers 4 HP after the battle.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support":
        [   { "name": "Swap", "rng": "1", "effect": "Swap places with an adjacent ally.", "sp": "150", "known": "5", "learn": "-", "inherit": "NO_STAFF" }
        ],
        "base_special": [],
        "base_passive_A": [],
        "base_passive_B":
        [   { "name": "Live for Honor", "effect": "If unit survives, get 1.5x normal badges from a Training Tower map. (If similar skill effects also used, only highest multiplier applied.)", "sp": "100", "learn": "5", "inherit": "None" }
        ],
        "base_passive_C":
        [   { "name": "Fortify Def 1", "effect": "Grants adjacent allies Def+2 through their next actions at the start of each turn.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Fortify Def 2", "effect": "Grants adjacent allies Def+3 through their next actions at the start of each turn.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Fortify Def 3", "effect": "Grants adjacent allies Def+4 through their next actions at the start of each turn.", "sp": "200", "learn": "5", "inherit": "None" }
        ]
    },
    "xander__student_swimmer":
    {   "tag": "xander__student_swimmer",
        "name": "Xander",
        "epithet": "Student Swimmer",
        "subname": "🌅",
        "description": "A Nohrian prince who wields the divine sword Siegfried but can't swim. Clings to his Lilith water toy.",
        "origin": "Fire Emblem Fates",
        "weapon_type": "green_axe",
        "colour": "green",
        "move_type": "Infantry",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 19, 8, 6, 8, 6 ]
        },
        "growth_points": [ 7, 7, 7, 9, 1 ],
        "base_weapons":
        [   { "name": "Iron Axe", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Axe", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Lilith Floatie", "mt": "10", "rng": "1", "effect": "Grants allies within 2 spaces Atk/Spd+1 during combat.", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Lilith Floatie+", "mt": "14", "rng": "1", "effect": "Grants allies within 2 spaces Atk/Spd+1 during combat.", "sp": "300", "known": "5", "learn": "-" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Glowing Ember", "cooldown": "4", "effect": "Boosts damage dealt by 50% of unit's Def.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Bonfire", "cooldown": "3", "effect": "Boosts damage dealt by 50% of unit's Def.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Fire Boost 1", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+2 during combat.", "sp": "50", "learn": "-", "inherit": "None" },
            { "name": "Fire Boost 2", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+4 during combat.", "sp": "100", "learn": "-", "inherit": "None" },
            { "name": "Fire Boost 3", "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+6 during combat.", "sp": "200", "learn": "5", "inherit": "None" }
        ],
        "base_passive_B": [],
        "base_passive_C":
        [   { "name": "Infantry Pulse 1", "effect": "Special cooldown count-1 at start of turn 1 for any Infantry allies with at least 5 fewer HP than unit. (Effects will stack with similar skills.)", "sp": "60", "learn": "-", "inherit": "Infantry Only" },
            { "name": "Infantry Pulse 2", "effect": "Special cooldown count-1 at start of turn 1 for any Infantry allies with at least 3 fewer HP than unit. (Effects will stack with similar skills.)", "sp": "120", "learn": "-", "inherit": "Infantry Only" },
            { "name": "Infantry Pulse 3", "effect": "Special cooldown count-1 at start of turn 1 for any Infantry allies with at least 1 fewer HP than unit. (Effects will stack with similar skills.)", "sp": "240", "learn": "5", "inherit": "Infantry Only" }
        ]
    },
    "zelgius__jet-black_general":
    {   "tag": "zelgius__jet-black_general",
        "name": "Zelgius",
        "epithet": "Jet-Black General",
        "description": "A general clad head to toe in the blackest of armor, naturally known as the Black Knight. His holy sword, Alondite, has the power to rend the heavens.",
        "origin": "Fire Emblem: Radiant Dawn",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Armored",
        "limited": false,
        "summon": true,
        "base_stats":
        {   "5": [ 22, 10, 7, 10, 6 ]
        },
        "growth_points": [ 7, 8, 8, 9, 3 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "-", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "-", "learn": "-" },
            { "name": "Alondite", "mt": "16", "rng": "1", "effect": "Enables counterattack regardless of distance if this unit is attacked.", "sp": "400", "known": "5", "learn": "-", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "New Moon", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-30%.", "sp": "100", "known": "5", "learn": "-", "inherit": "NO_STAFF" },
            { "name": "Luna", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-50%.", "sp": "200", "known": "-", "learn": "5", "inherit": "NO_STAFF" },
            { "name": "Black Luna", "cooldown": "3", "effect": "Resolve combat as if foe suffered Def/Res-80%. (Skill cannot be inherited.)", "sp": "500", "known": "-", "learn": "5", "inherit": "Prf" }
        ],
        "base_passive_A":
        [   { "name": "Fierce Stance 1", "effect": "Grants Atk+2 during combat when this unit is attacked.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Fierce Stance 2", "effect": "Grants Atk+4 during combat when this unit is attacked.", "sp": "100", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Fierce Stance 3", "effect": "Grants Atk+6 during combat when this unit is attacked.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Warp Powder", "effect": "If unit's HP ≥ 80%, unit can move adjacent to any ally within 2 spaces. (Skill cannot be inherited.)", "sp": "300", "learn": "5", "inherit": "Prf" }
        ],
        "base_passive_C":
        [   { "name": "Panic Ploy 1", "effect": "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 5 or more lower than unit through foe's next action.", "sp": "60", "learn": "-", "inherit": "None" },
            { "name": "Panic Ploy 2", "effect": "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 3 or more lower than unit through foe's next action.", "sp": "120", "learn": "-", "inherit": "None" },
            { "name": "Panic Ploy 3", "effect": "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 1 or more lower than unit through foe's next action.", "sp": "240", "learn": "5", "inherit": "None" }
        ]
    },
    "zephiel__the_liberator":
    {   "tag": "zephiel__the_liberator",
        "name": "Zephiel",
        "epithet": "The Liberator",
        "description": "King of Bern. Once a kindhearted boy who became disillusioned with humanity. Wants his world to be ruled by dragons.",
        "origin": "Fire Emblem: The Binding Blade",
        "weapon_type": "red_sword",
        "colour": "red",
        "move_type": "Armored",
        "limited": false,
        "summon": false,
        "base_stats":
        {   "3": [ 24, 8, 2, 11, 4 ],
            "4": [ 24, 9, 2, 12, 4 ],
            "5": [ 25, 9, 3, 12, 5 ]
        },
        "growth_points": [ 10, 8, 2, 8, 5 ],
        "base_weapons":
        [   { "name": "Iron Sword", "mt": "6", "rng": "1", "effect": "-", "sp": "50", "known": "-", "learn": "-" },
            { "name": "Steel Sword", "mt": "8", "rng": "1", "effect": "-", "sp": "100", "known": "3", "learn": "-" },
            { "name": "Silver Sword", "mt": "11", "rng": "1", "effect": "-", "sp": "200", "known": "4", "learn": "3" },
            { "name": "Eckesachs", "mt": "16", "rng": "1", "effect": "Inflicts Def-4 on foes within 2 spaces through their next actions at the start of each turn.", "sp": "400", "known": "-", "learn": "5", "inherit": "Prf" }
        ],
        "base_support": [],
        "base_special":
        [   { "name": "Retribution", "cooldown": "3", "effect": "Grants bonus to damage dealt equal to 30% of damage suffered.", "sp": "100", "known": "4", "learn": "3", "inherit": "NO_STAFF" },
            { "name": "Reprisal", "cooldown": "2", "effect": "Grants bonus to damage dealt equal to 30% of damage suffered.", "sp": "200", "known": "-", "learn": "4", "inherit": "NO_STAFF" }
        ],
        "base_passive_A":
        [   { "name": "Life and Death 1", "effect": "Grants Atk/Spd+3. Inflicts Def/Res-3.", "sp": "50", "learn": "-", "inherit": "Excludes Staff Users" },
            { "name": "Life and Death 2", "effect": "Grants Atk/Spd+4. Inflicts Def/Res-4.", "sp": "100", "learn": "4", "inherit": "Excludes Staff Users" },
            { "name": "Life and Death 3", "effect": "Grants Atk/Spd+5. Inflicts Def/Res-5.", "sp": "200", "learn": "5", "inherit": "Excludes Staff Users" }
        ],
        "base_passive_B":
        [   { "name": "Wary Fighter 1", "effect": "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 90%.", "sp": "60", "learn": "-", "inherit": "Armored Only" },
            { "name": "Wary Fighter 2", "effect": "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 70%.", "sp": "120", "learn": "-", "inherit": "Armored Only" },
            { "name": "Wary Fighter 3", "effect": "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 50%.", "sp": "240", "learn": "4", "inherit": "Armored Only" }
        ],
        "base_passive_C": []
    }
};
