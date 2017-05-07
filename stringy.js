
let stringy =
{
    includes_any(string, array)
    {   for( let i=0; i<array.length; i++ )
        {   if (string.includes(array[i])) { return true; }
        }
        return false;
    },

    img_feh : 'images/feh_owl.jpg',
    img_type_path : 'images/type/',
    img_portrait_path : 'images/portrait/',
    img_portrait_prefix : 'icon_portrait_',
    img_colour_prefix : 'orb_',
    img_icon_prefix : 'icon-',
    img_png_suffix : '.png',

    find_img_path (type,key)
    {
        if(type.includes('colour'))
        {   return this.img_type_path +
                this.img_colour_prefix +
                key +
                this.img_png_suffix;
        }

        if(type.includes('weapon') || type.includes('move'))
        {   return this.img_type_path +
                this.img_icon_prefix +
                type + '-' +
                key +
                this.img_png_suffix;
        }

        if(type.includes('portrait'))
        {   return stringy.img_portrait_path +
                stringy.img_portrait_prefix +
                key +
                this.img_png_suffix;
        }

        return this.img_feh;

    },

    final_tick_text : "end of chain only (except weapons)",

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

};
