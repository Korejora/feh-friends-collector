
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
        if(tableau.is_collection_active()) { roster = friends.roster; }
        else { roster = allies.list; }

        for( let i=0;  i < roster.length;  i++ )
        {   let ally = roster[i];

            if( ally.is_askrian() ) { continue; } // cannot inherit from anna, alfonse, or sharena
            if( ally.is_favourite() ) { continue; } // do not inherit from favourites
            if( ally.is_home() ) { continue; } // cannot inherit from allies that have gone home

            let base_skills = ally.get_base_skills();

            for( let skill_type in this.legacy )
            {
                for( let i=0;  i < base_skills[skill_type].length;  i++ )
                {   // iterate over each skill in the ally's skill list
                    let skill = base_skills[skill_type][i];
                    let skill_name = skill.name;
                    if( skill.inherit == "Prf" ) { continue; } // don't add exclusive skills to the list

                    // make new entry if not already present
                    if(!this.legacy[skill_type][skill_name])
                    {   this.legacy[skill_type][skill_name] =
                            {   skill_name:skill_name,
                                inherit:skill.inherit,
                                weapon_type:skill.weapon_type,
                                teachers:[]
                            };
                    }
                    this.legacy[skill_type][skill_name].teachers.push(ally); // add the ally
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

        for( let skill_type in learnable )
        {
            for( let skill_name in this.legacy[skill_type] )
            {
                let skill = this.legacy[skill_type][skill_name];
                // don't bother inheriting skills already known
                if( ally.knows_skill(skill_name, skill_type) ) { continue; }

                let eligible;

                if( skill.weapon_type )
                {   // if(skill.inherit == "Prf"){ continue; } // this should already be caught
                    eligible = ally.check_if_inheritable_weapon( skill.weapon_type );
                }
                else
                {   eligible = ally.check_if_inheritable( skill.inherit );
                }

                if( eligible )
                {   learnable[skill_type][skill_name] = this.legacy[skill_type][skill_name];
                }
            }
        }



        return learnable;
    },

};
