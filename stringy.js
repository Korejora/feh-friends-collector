
// stringy.js
// handles strings and string-related functions


let stringy =
{
    includes_any(string, array)
    {   for( let i=0; i<array.length; i++ )
        {   if (string.includes(array[i])) { return true; }
        }
        return false;
    },

    img_feh : 'images/feh_owl.png',
    img_path : 'images/',

    img_path_type : 'images/type/',
    img_path_portrait : 'images/portrait/',
    img_path_other : 'images/other/',

    img_prefix_portrait : 'icon_portrait_',
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
        robin_green : ['(g)','green','girl','(f)','female'],

        corrin_dragon : ['dragon','(b)','blue','girl','(f)','female'],
        corrin_sword : ['sword','(r)','red','boy','(m)','(male)', ' male'],

        tiki_shadow : ['(s)','shadow','mystery','emblem','(y)','young'],
        tiki_awakening : ['(a)','adult','awakening'],

        spring : ['spring','bunny','(s)','(sf)'],
        bride : ['bride','bridal','(b)','(bb)'],
    },

    find_img_path (type,key)
    {
        if(type.includes('colour'))
        {   return this.img_path_type +
                this.img_prefix_colour +
                key +
                this.img_png_suffix;
        }

        if(type.includes('weapon') || type.includes('move'))
        {   return this.img_path_type +
                this.img_prefix_icon +
                type + '-' +
                key +
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

    origin :
    {    0 : { display: "Heroes",   text: "Fire Emblem Heroes" },
       1.1 : { display: "Shadow",   text: "Fire Emblem: Shadow Dragon and the Blade of Light" }, // Wrys
     //  2 : { display: "Gaiden",   text: "Fire Emblem Gaiden" },
         1 : { display: "Mystery",  text: "Fire Emblem: Mystery of the Emblem" },
         4 : { display: "Holy War", text: "Fire Emblem: Genealogy of the Holy War" },
         5 : { display: "Thracia",  text: "Fire Emblem: Thracia 776" },
         6 : { display: "Binding",  text: "Fire Emblem: The Binding Blade" },
         7 : { display: "Blazing",  text: "Fire Emblem: The Blazing Blade" },
         8 : { display: "Stones",   text: "Fire Emblem: The Sacred Stones" },
         9 : { display: "Radiance", text: "Fire Emblem: Path of Radiance" },
        10 : { display: "Radiant",  text: "Fire Emblem: Radiant Dawn" },
     // 11 : { display: "Dragon",   text: "Fire Emblem: Shadow Dragon" },
     // 12 : { display: "Emblem",   text: "Fire Emblem: New Mystery of the Emblem: Heroes of Light and Shadow" },
        13 : { display: "Awakening",text: "Fire Emblem Awakening" },
        14 : { display: "Fates",    text: "Fire Emblem Fates" },
        15 : { display: "Echoes",   text: "Fire Emblem Echoes: Shadows of Valentia" }
    },
    get_origin_display : function(number)
    {   return this.origin[number].display;
    },
    get_origin_text : function(number)
    {   return this.origin[number].text;
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
