
let porter =
{

    setup : function()
    {

        this.div = document.createElement('div');
        this.div.id = 'porter';
        document.getElementById('for_textarea_stuff').appendChild(this.div);

        this.select = new divvy({parent:this.div});

        // must be created in time for toggle
        this.stringy.setup();
        this.googly.setup();

        this.select.div.appendChild(document.createTextNode(" 〜 "));
        this.select.stringy = new divvy(
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
        this.select.stringy.div.onclick = function() { porter.stringy_select(); };
        this.select.googly.div.onclick = function() { porter.googly_select(); };

        this.mode = 'stringy';

    },

    beautify_text : function()
    {   porter.set_text(JSON.stringify(JSON.parse(this.return_text()),null,2));
    },

    show : function show(){ this.div.style.display = ''; },
    hide : function hide() { this.div.style.display = 'none'; },
    toggle : divvy.prototype_toggle,

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
                porter.stringy.textarea.style.backgroundColor = "hsl(" + hue + ", 40%,  20%)";
             // this.div.style.color   = "hsl(" + inverse_hue + ", 100%, 50%)";
                this.hue = hue;
            };
            return window.setInterval(hue_hue_hue_hue, 44);
        }
    },

    stringy :
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
        toggle : divvy.prototype_toggle,

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

            this.save = new divvy(
                {   parent:this.div,
                    innertext:" write ",
                    classname:'clickables'
                });
            this.save.div.onclick = function() { friends.save_friends_googly(); };

            this.div.appendChild(document.createTextNode(" 〜 "));

            this.restore = new divvy(
                {   parent:this.div,
                    innertext:" read ",
                    classname:'clickables'
                });
            this.restore.div.onclick = function() { friends.restore_friends_googly(); };

            this.div.appendChild(document.createTextNode(" 〜 "));

            this.oauthbutton = new divvy({parent:this.div});

            this.div.appendChild(document.createTextNode(" 〜 "));

            this.note = new divvy({parent:this.div});
            this.note.div.className = 'warning';
            this.note.div.innerText = "Please be careful with the write function! It will CLEAR the spreadsheet (and may also set it on fire)!";

            this.hide();
            porter.div.appendChild(this.div);
        },

        attach_oauthbuttons : function()
        {
            googly.signin.innerText = 'connect (authorization required to read/write to google sheets)';
            googly.signin.className = 'clickables';
            this.oauthbutton.append(googly.signin);

            googly.signout.innerText = 'disconnect';
            googly.signout.className = 'clickables';
            this.oauthbutton.append(googly.signout);

        },

        show : divvy.prototype_show,
        hide : divvy.prototype_hide,
        toggle : divvy.prototype_toggle,

        set_text : function(string){ this.textarea.value = string; },
        return_text : function(){ return this.textarea.value; },

        handle_change : function()
        {   localStorage.googlytext = this.return_text();
        }

    },

    stringy_select : function()
    {   if (this.mode == 'stringy') { this.stringy.toggle(); }
        else
        {   this.googly.hide();
            this.stringy.show();
            this.mode = 'stringy';
        }
    },
    googly_select : function()
    {   if (this.mode == 'googly') { this.googly.toggle(); }
        else
        {   this.stringy.hide();
            this.googly.show();
            this.mode = 'googly';
        }
    }

};

function happy_fun_click(div)
{
    console.log('happy_fun_click');
 // let happyfundiv = document.getElementById('happy_fun_div');
}
