
// alter.js
// handles viewing and altering an friend from the friend roster


let alter =
{

    setup : function alter_setup()
    {
        let container_div = document.getElementById('alter_container');
        container_div.innerHTML = '';

        this.div = document.createElement('div');
        this.div.id = 'alter';
        container_div.appendChild(this.div);

        // ally picture display
        this.portrait_container = new divvy({ classname:'inner left', parent:this.div });
        this.portrait = document.createElement('img');
        this.portrait.className = 'portrait';
        this.portrait.onerror = function() { this.src = stringy.img_feh; };
        this.portrait.src = stringy.img_feh;
        this.portrait_container.add_child(this.portrait);

        // inner section to contain other (than portrait) contents
        this.inner = new divvy({ id:'alter_inner', classname:'inner', parent:this.div });

        this.note = new divvy ({ id:'alter_note', classname:'inner note', parent:this.inner.div });

        // left
        this.left = new divvy({ id:'alter_left', classname:'inner left', parent:this.inner.div});
        this.name = new divvy({parent:this.left.div, id:'alter_name'});
        this.left.add_linebreak();
        this.rarity = new divvy({parent:this.left.div});
        this.left.add_linebreak();
        this.nature = new divvy({parent:this.left.div});
        this.left.add_linebreak();


        this.right = new divvy({parent:this.inner.div, classname:'inner right', id:'alter_right'});
        this.right.upper = new divvy({parent:this.right.div, classname:'inner'});
        this.right.upper.add_squiggly();

        this.right.add_linebreak();
        this.right.lower = new divvy({parent:this.right.div, classname:'inner'});

        this.basic = new subalter_basic();
        this.add_to_selection(this.basic);

        // inherit skill list
        this.inherit.setup();

        this.sendhome = new subalter_sendhome();
        this.add_to_selection(this.sendhome);

        this.selection.forEach( function(selectable)
        {   selectable.call_deselection = function() { alter.deselection(); };
        });

        this.reset_ally();

    },


    select_ally : function alter_select_ally(ally)
    {   this.ally = ally;
        if(!ally) { this.reset_ally(); return -1; }
        this.rebuild();
    },


    rebuild : function alter_rebuild() // if the ally changes
    {
        this.portrait.src = stringy.find_img_path('portrait',this.ally.tag);

        this.deselection();

        this.basic.rebuild();
        this.inherit.rebuild();
        this.sendhome.rebuild();

        this.refresh();
    },

    refresh : function alter_refresh() // if something changes but the ally doesn't need to be redone
    {
        if (this.ally == allies.feh) { return; }
        this.note.clear(); this.note.hide();
        this.left_rebuild();
        this.left.show(); this.right.show();
        this.inherit.rebuild();
    },


    reset_ally : function alter_reset_ally() // if an ally was not found
    {   this.ally = allies.feh;
        this.portrait.src = stringy.img_feh;
        this.note.set_text(" No friend selected 〜 "); this.note.show();
        this.left.hide(); this.right.hide();
    },

    left_rebuild()
    {
        this.name.set_text(this.ally.return_name());
        if(this.ally.favourite) { this.name.add_text(" ❤ "); }
        this.rarity.set_text(this.ally.return_rarity_stars());
        this.nature.set_text(this.ally.return_nature());
    },

    send_ally_home()
    {
        let name = this.ally.return_name();
        if (!this.ally.is_home()) { this.ally.send_home(); }
        else { this.ally.undo_send_home(); }
        this.reset_ally();
        this.note.set_text(name + " sent home.");
    },

    selection : [],

    add_to_selection(sub)
    {   this.right.upper.add_child(sub.select);
        this.right.upper.add_squiggly();
        if(sub instanceof selectable) { this.selection.push(sub); } // FIXME: remove deprecated selectdivs
        else { this.selection.push(sub.select); }
        this.right.lower.add_child(sub.display);
    },

    deselection()
    {
        this.basic.do_deselect();
        this.inherit.select.do_deselect();
        this.sendhome.do_deselect();
    },


};


alter.construct_subalter = function subalter_constructor(select_text)
{
    this.select = new selectdiv({ innertext:select_text, deselectable:true });
    let that = this;
    this.select.activate = function(){ that.display.show(); };
    this.select.deactivate = function(){ that.display.hide(); };

    this.display = new divvy({ parent: alter.right.lower });
    this.display.hide();

    alter.add_to_selection(this);

};

class subalter_basic extends selectable
{
    constructor()
    {   super({deselectable:true});
        this.select.set_text("overview");

        this.rarity_setup();

        this.display.add_linebreak();

        this.nature_setup();

        this.deselection();

    }

    rarity_setup()
    {
        this.rarity = new selectable({deselectable:true});
        let rar = this.rarity;
        rar.call_deselection = function() { alter.basic.deselection(); };

        rar.container = new divvy({parent:this.display});
        rar.container.add_child(rar.select);
        rar.container.add_child(rar.display);

        rar.display.add_text(" ");

        rar.dropdown = document.createElement('select');
        rar.dropdown.className = 'dropdown';
        rar.dropdown.onchange = function alter_basic_rarity_onchange()
        {   alter.ally.set_rarity(rar.dropdown.value);
            rar.rebuild();
            rar.do_deselect();
            refreshment();
        };
        rar.display.add_child(rar.dropdown);

        for (let i=5; i>=1; i--)
        {   let option = document.createElement('option');
            option.innerText = stringy.rar_num_to_star(i);
            rar.dropdown.appendChild(option);
        }

        rar.rebuild = function()
        {
            this.select.set_text(alter.ally.return_rarity_stars());
            this.dropdown.value = this.select.div.innerText;

            // disable rarities inappropriate for the new ally
            for ( let i=5; i>0; i-- )
            {   let drop = this.dropdown;
                let opt = drop.options[5-i];
                let minrar = alter.ally.minimum_rarity;

                opt.disabled = false;
                if ( i < minrar )
                {   opt.disabled = true;
                    if ( drop.value == opt.value )
                    {   drop.value = drop.options[5-minrar].value;
                    }
                }
            }
            this.do_deselect();
        };
    }

    nature_setup()
    {
        this.nature = new selectable({deselectable:true});
        let nat = this.nature;
        nat.call_deselection = function() { alter.basic.deselection(); };

        nat.container = new divvy({parent:this.display});
        nat.container.add_child(nat.select);
        nat.container.add_child(nat.display);

        nat.display.add_text(" ");

        nat.boondrop = document.createElement('select');
        nat.boondrop.className = 'dropdown';
        nat.boondrop.appendChild(document.createElement('option'));
        nat.boondrop.childNodes[0].innerText = "neutral";
        ["hp","atk","spd","def","res"].forEach(function(stat)
        {   let option = document.createElement('option');
            option.innerText = stat+"+";
            nat.boondrop.appendChild(option);
        });
        nat.boondrop.onchange = function() { nat.resolve_input('boon'); };
        nat.display.add_child(nat.boondrop);

        nat.banedrop = document.createElement('select');
        nat.banedrop.className = ' dropdown ';
        nat.banedrop.appendChild(document.createElement('option'));
        nat.banedrop.childNodes[0].innerText = "neutral";
        ["hp","atk","spd","def","res"].forEach(function(stat)
        {   let option = document.createElement('option');
            option.innerText = stat+"–";
            nat.banedrop.appendChild(option);
        });
        nat.banedrop.onchange = function() { nat.resolve_input('bane'); };
        nat.display.add_child(nat.banedrop);

        nat.resolve_input = function(bone)
        {   if(this[bone+'drop'].value == "neutral")
            {   this.boondrop.value = "neutral";
                this.banedrop.value = "neutral";
            }
            alter.ally.set_nature(this.boondrop.value, this.banedrop.value);
            this.select.set_text(alter.ally.return_nature());
            tableau.friends_table.rebuild_rows();
        };

        nat.rebuild = function()
        {
            this.select.set_text(alter.ally.return_nature());
            if ( alter.ally.summon === false || alter.ally.rarity <= 2 )
            {   // do not change the nature of a non-summonable ally
                this.boondrop.value = "neutral";
                this.boondrop.disabled = true;
                this.banedrop.value = "neutral";
                this.banedrop.disabled = true;
            }
            else // enable nature dropdowns if not enabled
            {   this.boondrop.disabled = false;
                this.banedrop.disabled = false;
            }
            this.do_deselect();
        };

    }

    deselection()
    {   this.rarity.do_deselect();
        this.nature.do_deselect();
    }

    rebuild()
    {   this.rarity.rebuild();
        this.nature.rebuild();
    }
}

alter.inherit =
{
    setup()
    {
        this.construct_subalter = alter.construct_subalter;
        this.construct_subalter("learnable skills");

        this.note = new divvy({parent:this.display.div});

        this.display.options = new divvy({ parent:this.display });
        this.display.add_linebreak();

        this.final_tick = new checky
        (   {   parent:this.display.options,
                default:true,
                label: stringy.final_tick_text,
                id:"final_tick"
            }
        );
        this.final_tick.handle_click = function()
        {   inheritance.rebuild();
            alter.inherit.rebuild();
        };

        this.weapons = new this.subsection('weapons');
        this.assists = new this.subsection('assists');
        this.specials = new this.subsection('specials');
        this.passive_a = new this.subsection('passive_a');
        this.passive_b = new this.subsection('passive_b');
        this.passive_c = new this.subsection('passive_c');

        this.teach = new divvy({classname:'inner', parent:this.display });
        let t = this.teach;
        t.title = document.createElement('div');
        t.title.style['text-decoration'] = 'underline';
        t.add_child(t.title);
        t.add_child(document.createElement('br'));
        t.name = new divvy({parent:t,classname:'inner'});
        t.obtained = new divvy({parent:t,classname:'inner'});
        t.fruit = new divvy({parent:t,classname:'inner'});
        t.rarity = new divvy({parent:t,classname:'inner'});
        t.nature = new divvy({parent:t,classname:'inner'});

    }, // end inherit setup

    rebuild() // this = alter.inherit
    {
        if (alter.ally == allies.feh)
        {   this.note.set_text("Feh is already knowledgeable enough :)");
            this.note.add_linebreak();

        }
        else
        {   this.note.clear();
            this.learnable = inheritance.filter_for_ally(alter.ally);
        }

        this.weapons.rebuild();
        this.assists.rebuild();
        this.specials.rebuild();
        this.passive_a.rebuild();
        this.passive_b.rebuild();
        this.passive_c.rebuild();

        this.teach.hide();
    },

    rebuild_teachers(type, tag)
    {
        let t = this.teach;

        t.title.innerText = dat[type][tag].name+" teachers";
        t.name.clear();
        t.obtained.clear();
        t.fruit.clear();
        t.rarity.clear();
        t.nature.clear();

        if (alter.ally == allies.feh) { return; }

        let teachers = alter.inherit.learnable[type][tag].teachers;
        for ( let i=0; i < teachers.length; i++ )
        {   let teacher = teachers[i];
            t.name.add_text_n(teacher.return_name());
            t.obtained.add_text_n("(#"+teacher.obtained+")");
            t.fruit.add_text_n(teacher.return_fruit());
                if(teacher.return_fruit()) {t.fruit.show();} else {t.fruit.hide();}
            t.rarity.add_text_n(teacher.return_rarity_stars());
            t.nature.add_text_n(teacher.return_nature());
        }
        t.show();
    },

    subsection : class subsection
    {
        constructor(type)
        {
            this.type = type;
            this.learn = new divvy({parent:alter.inherit.display.div, classname:'inner'});
        }


        rebuild () // this = inherit[subsection]
        {
            this.learn.clear();
            if (alter.ally == allies.feh) { return; }

            let type = this.type;
            let skills_array = Object.keys(alter.inherit.learnable[type]);

            if (!skills_array.length)
            {   this.learn.set_text("No "+type+" :( ");
                return 0;
            }

            skills_array.sort();

            for ( let i=0; i < skills_array.length; i++ )
            {   let tag = skills_array[i];
                let that = this;
                let selecty = new selectdiv({innertext:dat[type][tag].name, classname:'clicky', parent:that.learn});
                /* jshint loopfunc: true */
                selecty.handle_click = function alter_inherit_subsection_handle_click()
                {   alter.inherit.rebuild_teachers(type, tag);
                    if(alter.inherit.last_clicked){alter.inherit.last_clicked.dont_underline();}
                    selecty.underline();
                    alter.inherit.last_clicked = selecty;
                };
                this.learn.add_linebreak();
            }
        }
    }

};




class subalter_inherited extends selectable // single
{
    constructor()
    {
        super({deselectable:true});

        this.list = new divvy({ parent:this.display });

        this.adder = new divvy({ parent: this.display });

    }

}




class subalter_sendhome extends selectable // single
{
    constructor()
    {
        super({deselectable:true});

        this.ask = new divvy({ parent:this.display });

        this.display.add_linebreak();

        this.confirm = new divvy({ parent:this.display, innertext:"confirm", classname:'clicky' });
        this.confirm.div.onclick = function() { alter.sendhome.resolve(); };

    }

    rebuild()
    {
        if (alter.ally.origin === 0)
        {   this.select.set_text("send home");
            this.ask.set_text(alter.ally.return_name() + " is already at home in Askr!");
            this.confirm.hide();
        }

        else if (!alter.ally.is_home())
        {   this.select.set_text("send home");
            this.ask.set_text("Really send " + alter.ally.return_name() + " home?");
            this.confirm.show();
        }
        else
        {   this.select.set_text("recall");
            this.ask.set_text("Really call " + alter.ally.return_name() + " back?");
            this.confirm.show();
        }
    }

    resolve()
    {
        if(!alter.ally.is_home())
        {   alter.send_ally_home();
        }
        else
        {   alter.ally.undo_send_home();
            this.ask.set_text(alter.ally.return_name() + " recalled.");
            this.confirm.hide();
        }
    }
}
