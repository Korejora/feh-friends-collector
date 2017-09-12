
// inheritance.js
// compiles the list of skills an ally can inherit


let inheritance =
{
    legacy :
    {   weapons: {}, support: {}, special: {},
        passive_A:{}, passive_B:{}, passive_C:{} },

    rebuild : function()
    {
        this.legacy.weapons  = {};
        this.legacy.support  = {};
        this.legacy.special  = {};
        this.legacy.passive_A = {};
        this.legacy.passive_B = {};
        this.legacy.passive_C = {};

        let roster;
        if( tableau.is_collection_active() )
        {   roster = friends.roster;
        }
        else
        {   roster = allies.list;
        }

        for( let i=0; i < roster.length; i++ )
        {   let ally = roster[i];

            if( ally.is_askrian() ) { continue; } // cannot inherit from anna, alfonse, or sharena
            if( ally.is_favourite() ) { continue; } // do not inherit from favourites
            if( ally.is_home() ) { continue; } // cannot inherit from allies that have gone home

            let base_skills = ally.get_base_skills();

            for( let type in this.legacy )
            {
                for( let i=0; i < base_skills[type].length; i++ )
                {   // iterate over each skill in the ally's skill list
                    let skill = base_skills[type][i];
                    let skillname = skill.name;
                    if( skill.inherit == "exclusive" ) { continue; } // don't add exclusive skills to the list

                    // make new entry if not already present, else add to the list
                    if(!this.legacy[type][skillname])
                    {   this.legacy[type][skillname] =
                            {   skillname:skillname,
                                inherit:skill.inherit,
                                weapon_type:skill.weapon_type,
                                teachers:[ally]
                            };
                    } else
                    {   this.legacy[type][skillname].teachers.push(ally); }
                }
            }

        }
    },

    filter_for_ally : function(ally)
    {
        learnable =
        {   weapons : {}, support : {}, special : {},
            passive_A:{}, passive_B:{}, passive_C:{}
        };

        for( let type in learnable )
        {
            for( let skillname in this.legacy[type] )
            {
                // don't bother inheriting skills already known
                if( ally.knows_skill(skillname, type) ) { continue; }

                if( this.check_inherit(ally, this.legacy[type][skillname] ) )
                {   learnable[type][skillname] = this.legacy[type][skillname];
                }
            }
        }



        return learnable;
    },

    check_inherit : function(ally, skill)
    {
        let teachable = false; // default false, change to true if applicable

        switch(skill.inherit)
        {   case null:
            case 'none':
                if( skill.weapon_type )
                {   if( skill.weapon_type.includes('dragon') && ally.is_dragon() ) { teachable = true; }
                    if( skill.weapon_type == ally.get_weapon_type() ) { teachable = true; }
                } else
                {   teachable = true;
                }
                break;

            case 'staff_only':
                if(ally.get_weapon_type() == 'staff') { teachable = true; }
                break;
            case 'no_staff':
                if(ally.get_weapon_type() != 'staff') { teachable = true; }
                break;

            case 'melee_only':
                if(ally.is_melee()) { teachable = true; }
                break;
            case 'ranged_only':
                if(ally.is_ranged()) { teachable = true; }
                break;

            case 'infantry_only':
                if(ally.get_move_type() == 'infantry' ) { teachable = true; }
                break;
            case 'armored_only':
                if(ally.get_move_type() == 'armored' ) { teachable = true; }
                break;
            case 'cavalry_only':
                if(ally.get_move_type() == 'cavalry' ) { teachable = true; }
                break;
            case 'flying_only':
                if(ally.get_move_type() == 'flying' ) { teachable = true; }
                break;

            case 'no_flying':
                if(ally.get_move_type() != 'flying' ) { teachable = true; }
                break;

            case 'no_colourless':
                if(ally.get_colour() != 'colorless') { teachable = true; }
                break;
            case 'no_red':
                if(ally.get_colour() != 'red') { teachable = true; }
                break;
            case 'no_blue':
                if(ally.get_colour() != 'blue') { teachable = true; }
                break;
            case 'no_green':
                if(ally.get_colour() != 'green') { teachable = true; }
                break;

            case 'dragon_only':
                if(ally.is_dragon()) { teachable = true;}
                break;
            case 'sword_only':
                if(ally.get_weapon_type() == 'sword') { teachable = true; }
                break;
            case 'lance_only':
                if(ally.get_weapon_type() == 'lance') { teachable = true; }
                break;
            case 'axe_only':
                if(ally.get_weapon_type() == 'axe') { teachable = true; }
                break;
            case 'bow_only':
                if(ally.get_weapon_type() == 'bow') { teachable = true; }
                break;
            case 'blue_tome_only':
                if(ally.get_weapon_type() == 'blue_tome') { teachable = true; }
                break;
            case 'green_tome_only':
                if(ally.get_weapon_type() == 'green_tome') { teachable = true; }
                break;

            case 'no_tome_no_staff':
                if(!ally.get_weapon_type().includes('staff')
                && !ally.get_weapon_type().includes('tome') )
                {   teachable = true; }
                break;
            case 'sword_axe_lance':
                if( ally.get_weapon_type() == 'sword'
                 || ally.get_weapon_type() == 'lance'
                 || ally.get_weapon_type() == 'axe' )
                {   teachable = true; }
                break;
            case 'melee_only_infantry_only_armored_only':
                if( ally.is_melee()
                && (ally.get_move_type() == 'infantry' || ally.get_move_type() == 'armored') )
                {   teachable = true; }
                break;

            case 'exclusive':
                teachable = false;
                break;
            default:
                console.log("ERR_INHERIT_RULE_NOT_FOUND", skill.name, skill.inherit);
                break;
        }
        return teachable;
    },

};
