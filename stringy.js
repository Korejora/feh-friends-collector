
// stringy.js
// handles strings and string-related functions


let stringy =
{
    includes_any(string, array)
    {   return array.some( function(entry){ return string.includes(entry); });
    },

    fruits : [ '🍇', '🍈', '🍉', '🍊', '🍋', '🍐', '🍑', '🍒', '🍓', null ],
    rarity_list : { '★★★★★':5, '★★★★':4, '★★★':3, '★★':2, '★':1 },

    img_feh : 'images/feh_owl.png',
    img_error : this.img_feh,
    img_path : 'images/',

    img_path_type : 'images/type/',
    img_path_portrait : 'images/portrait/',
    img_path_other : 'images/other/',

    img_prefix_portrait : 'portrait__',
    img_prefix_colour : 'orb_',
    img_prefix_icon : 'icon-',
    img_prefix_stars : 'stars_',

    img_png_suffix : '.png',

    img_heart : 'images/other/heart.png',
    img_unfavourite : 'images/other/unfavourite.png',

    path_google_sheets_icon : 'images/other/icon_google_sheets.png',

    suffixes :
    {
        robin_blue : ['(b)','blue','boy','(m)','(male)',' male'],
        robin_green : ['(g)','green','girl','(f)','female','robinne'],

        corrin_dragon : ['dragon','(b)','blue','girl','(f)','female'],
        corrin_sword : ['sword','(r)','red','boy','(m)','(male)', ' male'],

        tiki_shadow : ['(s)','shadow','mystery','emblem','(y)','young'],
        tiki_awakening : ['(a)','adult','awakening'],

        mask : ['mask', '(m)'],

        spring : ['spring','bunny','(s)','(sf)'],
        bride : ['bride','bridal','(b)','(bb)'],
        summer : [ 'summer', 'beach', 'swim', '(ys)', '(ns)' ],
        brave : [ 'brave', 'brave hero', '(bh)' ],

    },

    inherit_restrictions :
    {   "None" : null,
        "Exclusive" : 'exclusive',
        "Is exclusive" : 'exclusive',

        "Excludes Staff Users" : 'no_staff',
        "Staff Users Only" : 'staff_only',

        "Melee Weapon Users Only" : 'melee_only',
        "Ranged Weapon Users Only" : 'ranged_only',

        "Infantry Only" : 'infantry_only',
        "Armored Only" : 'armored_only',
        "Cavalry Only" : 'cavalry_only',
        "Fliers Only" : 'flying_only',

        "Excludes Fliers" : 'no_flying',

        "Excludes Colorless Weapon Users" : 'no_colourless',
        "Excludes Red Weapon Users" : 'no_red',
        "Excludes Blue Weapon Users" : 'no_blue',
        "Excludes Green Weapon Users" : 'no_green',


        "Breath Users Only" : 'dragon_only',
        "Sword Users Only"  : 'sword_only',
        "Lance Users Only"  : 'lance_only',
        "Axe Users Only"    : 'axe_only',
        "Bow Users Only"    : 'bow_only',
     // "Red Tome Users Only"   : 'red_tome_only',
        "Blue Tome Users Only"  : 'blue_tome_only',
        "Green Tome Users Only" : 'green_tome_only',

        "Excludes Tome and Staff Users" : 'no_tome_no_staff',
        "Sword, Lance, Axe Users Only" : 'sword_axe_lance',
        "Melee Weapon Users Only, Infantry and Armored Only" : 'melee_only_infantry_only_armored_only',
    },

    find_img_path (type,key)
    {
        if(type.includes('colour'))
        {   return this.img_path_type +
                this.img_prefix_colour +
                key.toLowerCase() +
                this.img_png_suffix;
        }

        if(type.includes('weapon'))
        {   return this.img_path_type +
                this.img_prefix_icon +
                'weapon_type' + '-' +
                key.toLowerCase() +
                this.img_png_suffix;
        }

        if(type.includes('move'))
        {   return this.img_path_type +
                this.img_prefix_icon +
                'move_type' + '-' +
                key.toLowerCase() +
                this.img_png_suffix;
        }

        if(type.includes('portrait'))
        {   return this.img_path_portrait +
                this.img_prefix_portrait +
                key +
                this.img_png_suffix;
        }

        if(type.includes('favourite'))
        {   if(key) { return this.img_heart; }
            else { return this.img_unfavourite; }
        }

        if(type.includes('rarity'))
        {   return this.img_path_other +
                this.img_prefix_stars +
                key +
                this.img_png_suffix;

        }

        return this.img_feh;

    },

    final_tick_text : "end of chain only ",
    unlocked_tick_text : "unlocked only ",

    origin_display :
    {   "Fire Emblem Heroes" :                      "Heroes",
        "Fire Emblem: Shadow Dragon and the Blade of Light" :   "Shadow", // Wrys
     // "Fire Emblem Gaiden" :                      "Gaiden",
        "Fire Emblem: Mystery of the Emblem" :     "Mystery",
        "Fire Emblem: Genealogy of the Holy War" : "Holy War",
        "Fire Emblem: Thracia 776" :               "Thracia",
        "Fire Emblem: The Binding Blade":          "Binding",
        "Fire Emblem: The Blazing Blade":          "Blazing",
        "Fire Emblem: The Sacred Stones":          "Stones",
        "Fire Emblem: Path of Radiance":           "Radiance",
        "Fire Emblem: Radiant Dawn":               "Radiant",
     // "Fire Emblem: Shadow Dragon":              "Dragon",
     // "Fire Emblem: New Mystery of the Emblem: Heroes of Light and Shadow": "Emblem",
        "Fire Emblem: New Mystery of the Emblem":  "Emblem",
        "Fire Emblem Awakening":                   "Awaken",
        "Fire Emblem Fates":                       "Fates",
        "Fire Emblem Echoes: Shadows of Valentia": "Echoes"
    },

    // origin_order :
    // {   "Fire Emblem Heroes" :                      0,
    //     "Fire Emblem: Shadow Dragon and the Blade of Light" :   1.1, // Wrys
    //  // "Fire Emblem Gaiden" :                      2,
    //     "Fire Emblem: Mystery of the Emblem" :      1,
    //     "Fire Emblem: Genealogy of the Holy War" :  4,
    //     "Fire Emblem: Thracia 776" :                5,
    //     "Fire Emblem: The Binding Blade":           6,
    //     "Fire Emblem: The Blazing Blade":           7,
    //     "Fire Emblem: The Sacred Stones":           8,
    //     "Fire Emblem: Path of Radiance":            9,
    //     "Fire Emblem: Radiant Dawn":               10,
    //  // "Fire Emblem: Shadow Dragon":              11,
    //  // "Fire Emblem: New Mystery of the Emblem: Heroes of Light and Shadow": 12,
    //     "Fire Emblem: New Mystery of the Emblem":  1.2,
    //     "Fire Emblem Awakening":                   13,
    //     "Fire Emblem Fates":                       14,
    //     "Fire Emblem Echoes: Shadows of Valentia": 15
    //
    // },


    get_origin_display : function(text)
    {   return this.origin_display[text];
    },

    interpret_rarity : function(alias)
    {   let rarity;
        let stars =
        {   '★' : 1,
            '★★' : 2,
            '★★★' : 3,
            '★★★★' : 4,
            '★★★★★' : 5,
            1:1, 2:2, 3:3, 4:4, 5:5
        };
        rarity = stars[alias];
        return rarity;
    },

    rar_num_to_star : function(number)
    {   let rarity =
        {   1 : '★',
            2 : '★★',
            3 : '★★★',
            4 : '★★★★',
            5 : '★★★★★'
        };
        return rarity[number];
    },

    interpret_stat : function(alias)
    {
        if (!alias) { return alias; }
        alias = alias.toLowerCase();

        if (alias.includes('hp') ||alias.includes('health')){return 'hp';}
        if (alias.includes('atk')||alias.includes('attack')){return 'atk';}
        if (alias.includes('spd')||alias.includes('speed')) {return 'spd';}
        if (alias.includes('def')||alias.includes('defense'))   {return 'def';}
        if (alias.includes('res')||alias.includes('resistance')){return 'res';}

        // shorthand for concise save string
        switch(alias)
        {   case 'n': return null;
            case 'h': return 'hp';
            case 'a': return 'atk';
            case 's': return 'spd';
            case 'd': return 'def';
            case 'r': return 'res';
            default:  return null;
        }
    },

    shorten_nature : function (name)
    {
        if (!name) { return 'n'; }
        switch(name)
        {   case 'neutral': return 'n';
            case 'hp':      return 'h';
            case 'atk':     return 'a';
            case 'spd':     return 's';
            case 'def':     return 'd';
            case 'res':     return 'r';
            default: return 'n';
        }
    },

    display_nature : function(boon, bane)
    {
        let nature = "neutral";
        if( boon == 'neutral' || !boon || bane == 'neutral' || !bane )
        {   nature = "neutral";
        }
        else
        {   nature = "+"+boon+"/"+"–"+bane;
        }
        return nature;
    },

    show_time()
    {   let d = new Date();
        return d.toLocaleTimeString();
    },

    googly_do_error(err, mode)
    {
            if (err.includes("request is missing a valid API key"))
            {   porter.googly_note(stringy.googly_error_no_authorize, 'error');
            }
            else if (err.includes("does not have permission"))
            {
                if (mode=='read')
                {   porter.googly_note(stringy.googly_error_no_access_read, 'error');
                }
                else if (mode=='write')
                {   porter.googly_note(stringy.googly_error_no_access_write, 'error');
                }
                else
                {   porter.googly_note(stringy.googly_error_no_access, 'error');
                }
            }
            else if (err.includes("Requested entity was not found"))
            {   porter.googly_note(stringy.googly_error_not_found, 'error');
            }
            else if (err.includes("service is currently unavailable"))
            {   porter.googly_note(stringy.googly_error_unavailable, 'error');
            }
            else
            {
                porter.googly_note(stringy.googly_error_unknown, 'error');
            }
    },

    googly_info_roster_saved : "Saved roster to google sheet.",
    googly_info_roster_restored : "Roster restored from google sheet.",
    googly_warn_no_data : "Found sheet, but no data. Is the sheet empty?",
    googly_warn_no_name : "Couldn't find Name column. Do you have a column titled 'Name', 'Character', or similar?",
    googly_error_no_authorize :  "Couldn't authorize connection. Are you connected to Google?",
    googly_error_no_access : "Couldn't access the sheet. Do you have permission to access that sheet?",
    googly_error_no_access_read : "Couldn't access the sheet. Do you have permission to read that sheet?",
    googly_error_no_access_write : "Couldn't access the sheet. Do you have permission to write to that sheet?",
    googly_error_not_found : "Couldn't find the sheet. Are you sure the URL is correct?",
    googly_error_unavailable : "Google services reported unavailable. Maybe try again?",
    googly_error_unknown : "Unknown error. Please check the console and report this bug.",

    html_code_email : '<a href="http://www.google.com/recaptcha/mailhide/d?k=01XkIwjoh68Z_DqbpwypIUXQ==&amp;c=gLFFqYqP9wgprFLXQzrg9k9sRx8XZA1Ri5muu6Qz9GQ=" onclick="window.open(\'http://www.google.com/recaptcha/mailhide/d?k\x3d01XkIwjoh68Z_DqbpwypIUXQ\x3d\x3d\x26c\x3dgLFFqYqP9wgprFLXQzrg9k9sRx8XZA1Ri5muu6Qz9GQ\x3d\', \'\', \'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300\'); return false;" title="Reveal this e-mail address">f...</a>@gmail.com',

};
