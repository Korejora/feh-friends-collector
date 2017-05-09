
let porter =
{

    setup : function porter_setup()
    {

        this.divvy = new divvy({id:'porter',parent:document.getElementById('for_textarea_stuff')});
        this.div = this.divvy.div;

        this.select = new divvy({parent:this.div});

        // must be created in time for toggle
        this.stringly.setup();
        this.googly.setup();

        this.select.div.appendChild(document.createTextNode(" 〜 "));
        this.select.stringly = new divvy(
            {   parent:this.select.div,
                innertext: "save/restore string",
                classname: "clickables"
            });
        this.select.div.appendChild(document.createTextNode(" 〜 "));
        this.select.googly = new divvy(
            {   parent:this.select.div,
                innertext: "write/read google sheet",
                classname: "clickables"
            });
        this.select.div.appendChild(document.createTextNode(" 〜 "));
        this.select.stringly.div.onclick = function() { porter.stringly_select(); };
        this.select.googly.div.onclick = function() { porter.googly_select(); };

        this.mode = '';

    },

    beautify_text : function()
    {   porter.set_text(JSON.stringify(JSON.parse(this.return_text()),null,2));
    },

    show() { this.divvy.show(); },
    hide() { this.divvy.hide(); },
    toggle() { this.divvy.toggle(); },

    rainbow :
    {
        active : false,
        hue : 240,
        toggle : function()
        {   if (!this.active)
            {   this.interval = this.activate();
                this.active = true;
            }
            else
            {   window.clearInterval( this.interval );
                this.active = false;
            }
        },
        activate : function()
        {
            let hue = this.hue;
            let inverse_hue = hue+180;
            let hue_hue_hue_hue = function()
            {   hue++;
                inverse_hue = hue+180;
                porter.stringly.textarea.style.backgroundColor = "hsl(" + hue + ", 40%,  20%)";
             // this.div.style.color   = "hsl(" + inverse_hue + ", 100%, 50%)";
                this.hue = hue;
            };
            return window.setInterval(hue_hue_hue_hue, 44);
        }
    },

    stringly :
    {
        setup : function()
        {
            this.div = document.createElement('div');

            this.textarea = document.createElement('textarea');
            this.textarea.placeholder = "save/restore string goes here";
            this.textarea.cols = '60';
            this.textarea.rows = '12';
            this.div.appendChild(this.textarea);

            this.div.appendChild(document.createTextNode(" 〜 "));

            this.save = new divvy(
                {   parent:this.div,
                    innertext:" save ",
                    classname:'clickables'
                });
            this.save.div.onclick = function() { friends.save_friends_string(); };

            this.div.appendChild(document.createTextNode(" 〜 "));

            this.restore = new divvy(
                {   parent:this.div,
                    innertext:" restore ",
                    classname:'clickables'
                });
            this.restore.div.onclick = function() { friends.restore_friends_string(); };

            this.div.appendChild(document.createTextNode(" 〜 "));

            this.rainbowtoggle = new divvy(
                {   parent:this.div,
                    innertext:" rainbow ",
                    classname:'clickables'
                });
            this.rainbowtoggle.div.onclick = function() { porter.rainbow.toggle(); };

            this.div.appendChild(document.createTextNode(" 〜 "));

            this.hide();
            porter.div.appendChild(this.div);

        },

        show : divvy.prototype_show,
        hide : divvy.prototype_hide,
        toggle()
        {   if (this.div.style.display == 'none')
            {   this.show();
                alter.select.stringly.underline();
            }
            else
            {   this.hide();
                alter.select.stringly.dont_underline();
            }
        },

        set_text : function(string){ this.textarea.value = string; },
        return_text : function(){ return this.textarea.value; },

     /* when_input : function()
        {// let test_area = document.getElementById('test_area');
         // test_area.innerText = porter_return_text();
     }, */

    },

    googly :
    {
        setup : function()
        {
            this.div = document.createElement('div');

            this.textarea = document.createElement('textarea');
            this.textarea.placeholder = "google spreadsheet ID goes here";
            this.textarea.cols = '60';
            this.textarea.rows = '2';
            this.textarea.oninput = function(){ porter.googly.handle_change(); };
            this.div.appendChild(this.textarea);

            if(localStorage.googlytext) { this.set_text(localStorage.googlytext); }

            this.div.appendChild(document.createTextNode(" 〜 "));

            this.saverestoredivvy = new divvy({parent:this.div});

            this.save = new divvy(
                {   parent:this.saverestoredivvy.div,
                    innertext:" write ",
                    classname:'clickables'
                });
            this.save.div.onclick = function() { friends.save_friends_googly(); };

            this.saverestoredivvy.add_squiggly();

            this.restore = new divvy(
                {   parent:this.saverestoredivvy.div,
                    innertext:" read ",
                    classname:'clickables'
                });
            this.restore.div.onclick = function() { friends.restore_friends_googly(); };

            this.saverestoredivvy.add_squiggly();

            this.oauthbutton = new divvy({parent:this.div});

            this.div.appendChild(document.createTextNode(" 〜 "));

            this.note = new divvy({id:'googly_note',parent:this.div, classname:'warning'});

            this.hide();
            porter.div.appendChild(this.div);
        },

        attach_oauthbuttons : function()
        {
            googly.signin.innerText = 'connect';
            googly.signin.className = 'clickables';
            this.oauthbutton.append(googly.signin);

            googly.signout.innerText = 'disconnect';
            googly.signout.className = 'clickables';
            this.oauthbutton.append(googly.signout);

        },

        show : divvy.prototype_show,
        hide : divvy.prototype_hide,
        toggle()
        {   if (this.div.style.display == 'none')
            {   this.div.style.display = '';
                alter.select.googly.underline();
            }
            else
            {   this.hide();
                alter.select.googly.dont_underline();
            }
        },

        set_text : function(string){ this.textarea.value = string; },
        return_text : function(){ return this.textarea.value; },

        handle_change : function()
        {   localStorage.googlytext = this.return_text();
        }

    },

    stringly_select : function()
    {   if (this.mode == 'stringly') { this.stringly.toggle(); }
        else
        {   this.googly.hide(); this.select.googly.dont_underline();
            this.stringly.show(); this.select.stringly.underline();
            this.mode = 'stringly';
        }
    },
    googly_select : function()
    {   if (this.mode == 'googly') { this.googly.toggle(); }
        else
        {   this.stringly.hide(); this.select.stringly.dont_underline();
            this.googly.show(); this.select.googly.underline();
            this.mode = 'googly';
        }
    },

    googly_note(string, type)
    {   porter.googly.note.set_text(string);
        porter.googly.note.set_class(type);
    }

};

function happy_fun_click(div)
{
    console.log('happy_fun_click');
 // let happyfundiv = document.getElementById('happy_fun_div');
    document.getElementById('happy_fun_div').appendChild(document.createTextNode(":) "));
}
