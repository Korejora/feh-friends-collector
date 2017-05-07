

let adder =
{   list : {},
    options : [],

    show : divvy.prototype_show,
    hide : divvy.prototype_hide,

    setup : function()
    {
        let container_div = document.getElementById('adder_container');

        adder.div = document.createElement('div');
        adder.div.id = 'adder';
        container_div.appendChild(adder.div);

        // ally select by name
        adder.name_dropdown = document.createElement('select');
        adder.name_dropdown.className = ' dropdown ';
        allies.list.forEach( function(ally)
        {   if (ally.origin !== 0) // exclude Heroes heroes
            {   if (ally.subname) { adder.list[ally.name+ally.subname] = ally.tag;}
                else {adder.list[ally.name] = ally.tag; }
            }
        });
        for ( let name in adder.list )
        {   let option = document.createElement('option');
            option.innerText = name;
            adder.options.push(option);
            adder.name_dropdown.appendChild(option);
        }
        adder.name_dropdown.onchange = function() { adder.rebuild_ally(); };
        adder.div.appendChild(adder.name_dropdown);

        // rarity dropdown
        adder.rarity.setup();
        adder.div.appendChild(adder.rarity.dropdown);

        // boon dropdown
        adder.boon.setup();
        adder.div.appendChild(adder.boon.dropdown);

        // bane dropdown
        adder.bane.setup();
        adder.div.appendChild(adder.bane.dropdown);

        // add button
        adder.button = document.createElement('button');
        adder.button.onclick = function() { adder.add_click(); };
        adder.button.innerText = "+";
        adder.div.appendChild(adder.button);

        // stats div
        adder.stats = document.createElement('div');
        adder.stats.className = ' message ';
        adder.div.appendChild(adder.stats);

        // message div
        adder.message = document.createElement('div');
        adder.message.className = ' message ';
        adder.message.innerText = "";
        adder.div.appendChild(adder.message);

        // make sure there is an ally in the stream
        adder.rebuild_ally();

    },

    add_click : function()
    {   if(!adder.name_dropdown.value)
        {   tableau.friends_table.div.appendChild(tableau.feh_row.div);
            return;
        }
        let new_friend =
        {   tag : adder.list[adder.name_dropdown.value],
            rarity : adder.rarity.dropdown.value,
            boon : adder.boon.dropdown.value,
            bane : adder.bane.dropdown.value
        };
        friends.make_friend(new_friend);
        refreshment();
    },

    rebuild_ally : function()
    {   let tag = adder.list[adder.name_dropdown.value];
        adder.ally = new chars[tag]();
        this.rarity.refresh();
        adder.boon.dropdown.value = "neutral";
        adder.bane.dropdown.value = "neutral";
        this.refresh();
    },

    refresh : function()
    {
        let rarity_list = { '★★★★★':5, '★★★★':4, '★★★':3, '★★':2, '★':1 };
        adder.ally.set_rarity(adder.rarity.dropdown.value);

        let boondrop = adder.boon.dropdown;
        let banedrop = adder.bane.dropdown;

        if ( adder.ally.summon === false || adder.ally.rarity <= 2 )
        {   // do not edit the nature of a non-summonable ally
            boondrop.value = "neutral";
            boondrop.disabled = true;
            banedrop.value = "neutral";
            banedrop.disabled = true;
        }
        else // enable nature dropdowns if not enabled
        {   boondrop.disabled = false;
            banedrop.disabled = false;
        }

        adder.ally.set_boon(boondrop.value);
        adder.ally.set_bane(banedrop.value);
        adder.ally.assign_min_stats();

        adder.stats.innerHTML = " "
            + "hp "  + adder.ally.hp  + ", "
            + "atk " + adder.ally.atk
                + "("+(adder.ally.atk+adder.ally.get_base_weapon_might())+")" +", "
            + "spd " + adder.ally.spd + ", "
            + "def " + adder.ally.def + ", "
            + "res " + adder.ally.res + "  ";
    },

    rarity :
    {
        setup : function()
        {
            this.dropdown = document.createElement('select');
            this.dropdown.className = ' dropdown ';
            for (let i=5; i>=1; i--)
            {   let option = document.createElement('option');
                option.innerText = stringy.rar_num_to_star(i);
                this.dropdown.appendChild(option);
            }
            this.dropdown.onchange = function() { adder.refresh(); };
        },

        refresh : function()
        {   for ( let i=5; i>0; i-- )
            {   let drop = this.dropdown;
                let opt = drop.options[5-i];
                let minrar = adder.ally.minimum_rarity;

                opt.disabled = false;
                if ( i < minrar )
                {   opt.disabled = true;
                    if ( drop.value == opt.value )
                    {   drop.value = drop.options[5-minrar].value;
                    }
                }
            }
        }
    },

    boon :
    {
        setup : function()
        {
            this.dropdown = document.createElement('select');
            this.dropdown.className = ' dropdown ';
            this.dropdown.appendChild(document.createElement('option'));
            this.dropdown.childNodes[0].innerText = "neutral";

            let that = this;
            ["hp","atk","spd","def","res"].forEach(function(stat)
            {   let option = document.createElement('option');
                option.innerText = stat+"+";
                that.dropdown.appendChild(option);
            });
            this.dropdown.onchange = function()
            {   if (this.dropdown.value == "neutral")
                {   adder.bane.dropdown.value = "neutral"; // match neutral to neutral
                }
                adder.refresh();
            };
        }
    },

    bane :
    {
        setup : function()
        {
            this.dropdown = document.createElement('select');
            this.dropdown.className = ' dropdown ';
            this.dropdown.appendChild(document.createElement('option'));
            this.dropdown.childNodes[0].innerText = "neutral";

            let that = this;
            ["hp","atk","spd","def","res"].forEach(function(stat)
            {   let option = document.createElement('option');
                option.innerText = stat+"–";
                that.dropdown.appendChild(option);
            });
            this.dropdown.onchange = function()
            {   if (this.dropdown.value == "neutral")
                {   adder.boon.dropdown.value = "neutral";
                }
                adder.refresh();
            };
        }
    }
};

adder.setup();
