
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

        alter.left = new divvy({parent:alter.inner.div, classname:'inner'});

        // name display
        alter.name = new divvy({parent:alter.left.div, classname:'name div'});

        alter.left.div.appendChild(document.createElement('br'));

        // rarity display & dropdown selector
        alter.rarity.setup();
        alter.left.append(alter.rarity.div);


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
        this.portrait.src =
            stringy.img_portrait_path
          + stringy.img_portrait_prefix
          + this.ally.tag
          + '.png';

        this.name.reset_to(this.ally.return_name());

        this.refresh();
    },

    refresh : function() // if something changes but the ally doesn't need to be redone
    {
        this.rarity.display.innerText = stringy.rar_num_to_star(this.ally.rarity);
        this.rarity.edit.refresh();
        this.inherit.rebuild();
    },


    reset : function() // if an ally was not found
    {   this.ally = allies.feh;
        this.portrait.src = stringy.img_feh;
        this.name.reset_to(" No friend selected 〜 ");
    },



    rarity :
    {
        setup : function()
        {
            let that = this;
            this.div = document.createElement('div');
            this.div.id = 'RARITY_DIV_TEST';
            this.div.className += ' rarity ';

                this.display = new divvy({parent:this.div,classname:' clicky noselect '});
                this.display.div.onmousedown = function() { that.edit.toggle(); };

                // it's not a divvy cause it has preexisting stuff
                this.edit.div = document.createElement('div');
                this.edit.div.style.display = 'none';
                this.edit.div.appendChild(document.createTextNode(" 〜 "));
                this.div.appendChild(this.edit.div);
                this.edit.dropdown = document.createElement('select');
                this.edit.dropdown.className = ' dropdown ';
                for (let i=5; i>=1; i--)
                {   let option = document.createElement('option');
                    option.innerText = stringy.rar_num_to_star(i);
                    this.edit.dropdown.appendChild(option);
                }
                this.edit.dropdown.onchange = function() { that.edit.update(); };
                this.edit.div.appendChild(this.edit.dropdown);
        },

        edit :
        {
            toggle : function()
            {   if (!this.active) { this.enable(); }
                else { this.disable(); }
            },
            enable : function ()
            {   this.div.style.display = '';
                this.dropdown.value = alter.rarity.display.div.innerText;
                this.active = true;
            },
            disable : function()
            {   this.div.style.display = 'none';
                this.active = false;
            },
            update : function()
            {   if (this.active)
                {   alter.ally.set_rarity(stringy.interpret_rarity(this.dropdown.value));
                    refreshment();
                }
            },
            refresh : function()
            {   for ( let i=5; i>0; i-- )
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

                this.disable();
            }
        }
    },

    inherit :
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
                    label:"final only",
                    id:"final_text"
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
            {   this.note.reset_to("Feh is already knowledgeable enough :)");
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
                let type = this.type;
                let skills_array = Object.keys(alter.inherit.learnable[type]);

                if (alter.ally == allies.feh)
                {   this.learn.reset_to('');
                    return 0;
                }

                if (!skills_array.length)
                {   this.learn.reset_to("No "+type+" :( ");
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

    }

};


alter.setup();
