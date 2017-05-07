
let inheritance =
{
    legacy :
    {   weapons: {}, assists: {}, specials: {},
        passive_a:{}, passive_b:{}, passive_c:{} },

    rebuild : function()
    {
        this.legacy.weapons  = {};
        this.legacy.assists  = {};
        this.legacy.specials = {};
        this.legacy.passive_a = {};
        this.legacy.passive_b = {};
        this.legacy.passive_c = {};

        for ( let i=0; i < friends.roster.length; i++ )
        {   let friend = friends.roster[i];
            if ( friend.origin === 0 ) { continue; } // cannot inherit from anna, alfonse, or sharena
            if ( friend.favourite ) { continue; } // do not inherit from favourites
            if ( friend.home ) { continue; } // cannot inherit from allies that have gone home

            let skills = friend.return_skills();
            let ends = friend.return_final_base_skills();

            if (alter.inherit.final_tick.checkbox.checked === true)
            {
                for ( let type in this.legacy )
                {
                    let tag = skills[type][skills[type].length-1]; // get only last skill known
                    if( type != 'weapons' && tag != ends[type] ) { continue; } // skip if not the end of a chain

                    if (!dat[type][tag]) { continue; } // skip if not found in database
                    if (dat[type][tag].inherit == "exclusive") { continue; } // don't add exclusive skills to the list

                    // make new entry if not already present, else add to the list
                    if (!this.legacy[type][tag]) { this.legacy[type][tag] = { tag:tag, teachers:[friend] }; }
                    else { this.legacy[type][tag].teachers.push(friend); }

                }
            }
            else
            {
                for ( let type in this.legacy )
                {

                    for ( let i=0; i < skills[type].length; i++ )
                    {
                        // iterate over each skill in the friend's skill list
                        let tag = skills[type][i];

                        if (!dat[type][tag]) { continue; }
                        if (dat[type][tag].inherit == "exclusive") { continue; }

                        if (!this.legacy[type][tag]) { this.legacy[type][tag] = { tag:tag, teachers:[friend] }; }
                        else { this.legacy[type][tag].teachers.push(friend); }
                    }
                }
            }


        }
    },

    filter_for_ally : function(ally)
    {
        learnable =
        {   weapons: {}, assists: {}, specials: {},
            passive_a:{}, passive_b:{}, passive_c:{} };

        for ( let type in learnable )
        {
            for ( let tag in this.legacy[type] )
            {
                // skip if not found
                if (!dat[type]) { console.log("ERR_SKILL_NOT_FOUND"); continue; }

                // don't bother inheriting skills already known
                if ( ally.skills[type].indexOf(tag) != -1 ) { continue; }

                if (this.check_inherit(ally,dat[type][tag]))
                {   learnable[type][tag] = this.legacy[type][tag];
                }
            }
        }

        return learnable;
    },

    check_inherit : function(ally, skill)
    {
        let teachable = false;
        let inherit = skill.inherit;

        switch(inherit)
        {   case 'all':
                teachable = true;
                break;
            case 'weapon_type':
                if(ally.weapon_type == skill.weapon_type) { teachable = true; }
                break;
            case 'dragon':
                if(allies.check_dragon(ally)) { teachable = true;}
                break;
            case 'staff':
                if(ally.weapon_type == 'staff') { teachable = true; }
                break;
            case 'no_staff':
                if(ally.weapon_type != 'staff') { teachable = true; }
                break;
            case 'axe':
                if(ally.weapon_type != 'axe') { teachable = true; }
                break;
            case 'no_red':
                if(ally.return_colour() != 'red') { teachable = true; }
                break;
            case 'no_blue':
                if(ally.return_colour() != 'blue') { teachable = true; }
                break;
            case 'no_green':
                if(ally.return_colour() != 'green') { teachable = true; }
                break;
            case 'no_colourless':
                if(!allies.check_colourless(ally)) { teachable = true; }
                break;
            case 'melee':
                if(allies.check_melee(ally)) { teachable = true; }
                break;
            case 'ranged':
                if(allies.check_ranged(ally)) { teachable = true; }
                break;
            case 'armor':
                if(ally.move_type == 'armor' ) { teachable = true; }
                break;
            case 'cavalry':
                if(ally.move_type == 'cavalry' ) { teachable = true; }
                break;
            case 'flyer':
                if(ally.move_type == 'flyer' ) { teachable = true; }
                break;
            case 'no_flyer':
                if(ally.move_type != 'flyer' ) { teachable = true; }
                break;
            case 'ranged':
                if(ally.move_type == 'ranged' ) { teachable = true; }
                break;
            case 'exclusive':
                teachable = false;
                break;
            default:
                console.log("ERR_INHERIT_RULE_NOT_FOUND", skill.tag, inherit);
                break;
        }
        return teachable;
    },

};
