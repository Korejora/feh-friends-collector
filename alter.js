
let alter =
{

    setup : function()
    {
        let container_div = document.getElementById('alter_container');

        alter.div = document.createElement('div');
        alter.div.id = 'alter';
        container_div.appendChild(alter.div);

        // ally picture display
        alter.portrait = document.createElement('img');
        alter.portrait.className = 'portrait';
        alter.portrait.onerror = function() { this.src = stringy.img_feh; };
        alter.portrait.src = stringy.img_feh;
        alter.div.appendChild(alter.portrait);

        // inner section to contain other (than portrait) contents
        alter.inner = new divvy({parent:alter.div, classname:'inner', id:'alter_inner'});

        alter.note = new divvy ({parent:alter.inner.div, classname:'inner', id:'alter_note'});

        alter.left = new divvy({parent:alter.inner.div, classname:'inner'});

        // name display
        alter.name = new divvy({parent:alter.left.div, classname:'name div'});

        alter.left.div.appendChild(document.createElement('br'));

        // rarity display & dropdown selector
        alter.rarity_setup();
        alter.left.append(alter.rarity.div);
        alter.left.add_linebreak();
        alter.nature_setup();
        alter.left.append(alter.nature.div);


        alter.right = new divvy({parent:alter.inner.div, classname:'inner',});
        alter.right.upper = new divvy({parent:alter.right.div, classname:'inner'});
        alter.right.upper.add_squiggly();

        alter.right.append(document.createElement('br'));
        alter.right.lower = new divvy({parent:alter.right.div, classname:'inner'});

        // inherit skill list
        alter.inherit.setup();

        alter.right.upper.append(alter.inherit.clicky.div);
        alter.right.upper.add_squiggly();


        alter.reset();

    },


    select : function (ally)
    {   this.ally = ally;
        if(!ally) { this.reset(); return -1; }
        this.rebuild();
    },


    rebuild : function() // if the ally changes
    {
        this.portrait.src = stringy.find_img_path('portrait',this.ally.tag);

        this.name.set_text(this.ally.return_name());

        this.refresh();
    },

    refresh : function() // if something changes but the ally doesn't need to be redone
    {
        if (this.ally == allies.feh) { return; }
        this.note.clear(); this.note.hide();
        this.left.show(); this.right.show();
        this.rarity.refresh();
        this.nature.refresh();
        this.inherit.rebuild();
    },


    reset : function() // if an ally was not found
    {   this.ally = allies.feh;
        this.portrait.src = stringy.img_feh;
        this.note.set_text(" No friend selected 〜 "); this.note.show();
        this.left.hide(); this.right.hide();
    },


    dropprop : class dropprop extends divvy
    {
        constructor()
        {   super({parent:alter.div, className:'basic'});
            let that = this;

            this.display = new divvy({parent:this.div, classname:'clicky noselect'});
            this.display.div.onmousedown = function() { that.handle_display_click(); };

            this.edit = new divvy({parent:this.div});
            this.edit.add_linebreak();
            this.edit.add_squiggly();
            this.edit.hide();
            this.edit.dropdown = document.createElement('select');
            this.edit.dropdown.className = ' dropdown ';
            this.edit.dropdown.onchange = function() { that.resolve_input(); };
            this.edit.append(this.edit.dropdown);

        }

        handle_display_click()
        {   if (!this.active)
            {   this.activate();
            }
            else
            {   this.deactivate();
            }
        }
        activate()
        {   alter.refresh();
            this.edit.show();
            this.active = true;
        }
        deactivate()
        {   this.edit.hide();
            this.active = false;
        }

    },



    rarity_setup()
    {
        this.rarity = new this.dropprop();
        let rarity = this.rarity;


        // when the ally's rarity is changed via the dropdown
        rarity.resolve_input = function()
        {   if (this.active)
            {   alter.ally.set_rarity(this.edit.dropdown.value);
                this.deactivate();
                refreshment();
            }
        };

        // when the alter's ally changes
        rarity.refresh = function()
        {
            this.display.set_text(stringy.rar_num_to_star(alter.ally.rarity));
            this.edit.dropdown.value = alter.rarity.display.div.innerText;

            // disable rarities inappropriate for the new ally
            for ( let i=5; i>0; i-- )
            {   let drop = this.edit.dropdown;
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
            this.deactivate();
        };


        rarity.setup = function()
        {
            this.div.className += ' rarity ';

            // dropdown options
            for (let i=5; i>=1; i--)
            {   let option = document.createElement('option');
                option.innerText = stringy.rar_num_to_star(i);
                this.edit.dropdown.appendChild(option);
            }

            this.deactivate();
        };

        rarity.setup();

    },


    nature_setup()
    {   this.nature = new this.dropprop();
        let nature = this.nature;

        nature.resolve_input = function(bone)
        {   if (this.active)
            {
                if(this[bone].dropdown.value == "neutral")
                {   this.boon.dropdown.value = "neutral";
                    this.bane.dropdown.value = "neutral";
                }

                alter.ally.set_boon(this.boon.dropdown.value);
                alter.ally.set_bane(this.bane.dropdown.value);
                alter.ally.assign_max_stats();
                this.display.set_text(stringy.display_nature(alter.ally.boon, alter.ally.bane));
                refreshment();
                this.activate();
            }
        };

        nature.refresh = function()
        {
            this.display.set_text(stringy.display_nature(alter.ally.boon, alter.ally.bane));
            if ( alter.ally.summon === false || alter.ally.rarity <= 2 )
            {   // do not edit the nature of a non-summonable ally
                this.boon.dropdown.value = "neutral";
                this.boon.dropdown.disabled = true;
                this.bane.dropdown.value = "neutral";
                this.bane.dropdown.disabled = true;
            }
            else // enable nature dropdowns if not enabled
            {   this.boon.dropdown.disabled = false;
                this.bane.dropdown.disabled = false;
            }
            this.deactivate();
        };

        nature.setup = function()
        {
            let that = this;

            this.edit.clear(); this.dropdown = null;
            this.edit.add_linebreak();
            this.edit.add_squiggly();

            this.boon = new divvy({parent:this.edit});
            let boon = this.boon;
            boon.dropdown = document.createElement('select');
            boon.dropdown.className = ' dropdown ';
            boon.dropdown.appendChild(document.createElement('option'));
            boon.dropdown.childNodes[0].innerText = "neutral";
            ["hp","atk","spd","def","res"].forEach(function(stat)
            {   let option = document.createElement('option');
                option.innerText = stat+"+";
                boon.dropdown.appendChild(option);
            });
            boon.dropdown.onchange = function() { that.resolve_input('boon'); };
            boon.append(boon.dropdown);

            this.bane = new divvy({parent:this.edit});
            let bane = this.bane;
            bane.dropdown = document.createElement('select');
            bane.dropdown.className = ' dropdown ';
            bane.dropdown.appendChild(document.createElement('option'));
            bane.dropdown.childNodes[0].innerText = "neutral";
            ["hp","atk","spd","def","res"].forEach(function(stat)
            {   let option = document.createElement('option');
                option.innerText = stat+"–";
                bane.dropdown.appendChild(option);
            });
            bane.dropdown.onchange = function() { that.resolve_input('bane'); };
            bane.append(bane.dropdown);

            this.deactivate();
        };

        nature.setup();
    },

};


alter.inherit =
{
    setup : function()
    {

        this.clicky = new divvy({innertext:"learnable skills", classname:'clicky'});
        let that = this;
        this.clicky.div.onmousedown = function() { that.display.toggle(); };

        this.display = new divvy({parent:alter.right.lower.div,classname:'inner'});
        this.display.hide();

        this.note = new divvy({parent:this.display.div});

        this.display.options = new divvy({parent:this.display.div});
        this.display.div.appendChild(document.createElement('br'));

        this.final_tick = new checky
        (   {   parent:this.display.options.div,
                default:true,
                label: stringy.final_tick_text,
                id:"final_tick"
            }
        );
        this.final_tick.checkbox.onclick = function()
        {   inheritance.rebuild();
            alter.inherit.rebuild();
        };

        this.weapons = new this.subsection('weapons');
        this.assists = new this.subsection('assists');
        this.specials = new this.subsection('specials');
        this.passive_a = new this.subsection('passive_a');
        this.passive_b = new this.subsection('passive_b');
        this.passive_c = new this.subsection('passive_c');

        this.teach = new divvy({parent:alter.inherit.display.div,classname:'inner'});
        let t = this.teach;
        t.title = document.createElement('div');
        t.title.style['text-decoration'] = 'underline';
        t.append(t.title);
        t.append(document.createElement('br'));
        t.name = new divvy({parent:t,classname:'inner'});
        t.obtained = new divvy({parent:t,classname:'inner'});
        t.fruit = new divvy({parent:t,classname:'inner'});
        t.rarity = new divvy({parent:t,classname:'inner'});
        t.nature = new divvy({parent:t,classname:'inner'});

    }, // end inherit setup

    display :
    {
        toggle : function()
        {   if (!this.active) { this.enable(); }
            else { this.disable(); }
        },
        enable : function ()
        {
            alter.inherit.rebuild();
            this.div.style.display = '';
            this.active = true;
        },
        disable : function()
        {   this.div.style.display = 'none';
            this.active = false;
        },
        update : function()
        {   // ?
        }
    },

    rebuild : function() // this = alter.inherit
    {
        if (alter.ally == allies.feh)
        {   this.note.set_text("Feh is already knowledgeable enough :)");
            this.note.append(document.createElement('br'));

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

    rebuild_teachers (type, tag)
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
                let div = document.createElement('div');
                div.innerText = dat[type][tag].name;
                div.onmousedown = function() { alter.inherit.rebuild_teachers(type, tag); };
                div.className = ' clicky ';
                this.learn.append(div);
                this.learn.append(document.createElement('br'));
            }
        }

    },

};

alter.setup();
