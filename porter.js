
// porter.js
// interface for importing and exporting the friends roster


let porter =
{

    setup : function porter_setup()
    {

        this.divvy = new divvy({id:'porter',parent:document.getElementById('for_textarea_stuff')});
        this.div = this.divvy.div;

        this.select = new divvy({parent:this.div});

        this.stringly.setup();
        this.googly.setup();

        this.select.add_squiggly();
        this.select.add_child(this.stringly.select.div);
        this.select.add_squiggly();
        this.select.add_child(this.googly.select.div);
        this.select.add_squiggly();
        this.stringly.select.call_deselection = function () { porter.googly.select.do_deselect(); }; // FIXME
        this.googly.select.call_deselection = function () { porter.stringly.select.do_deselect(); }; // FIXME

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

    googly_note(string, type)
    {   porter.googly.note.set_text(string);
        porter.googly.note.set_class(type);
    }

};


porter.stringly = new divvy();

porter.stringly.setup = function porter_stringly_setup()
{
    this.select = new selectdiv({ innertext: "save/restore string" , deselectable:true});
    let that = this;
    this.select.activate = function porter_select_stringly() { that.show(); };
    this.select.deactivate = function porter_deselect_stringly() { that.hide(); };

    this.textarea = document.createElement('textarea');
    this.textarea.placeholder = "save/restore string goes here";
    this.textarea.cols = '60';
    this.textarea.rows = '12';
    this.div.appendChild(this.textarea);

    this.add_squiggly();

    this.save = new divvy(
        {   parent:this.div,
            innertext:" save ",
            classname:'clickables'
        });
    this.save.div.onclick = function() { friends.save_friends_string(); };

    this.add_squiggly();

    this.restore = new divvy(
        {   parent:this.div,
            innertext:" restore ",
            classname:'clickables'
        });
    this.restore.div.onclick = function() { friends.restore_friends_string(); };

    this.add_squiggly();

    this.rainbowtoggle = new divvy(
        {   parent:this.div,
            innertext:" rainbow ",
            classname:'clickables'
        });
    this.rainbowtoggle.div.onclick = function() { porter.rainbow.toggle(); };

    this.add_squiggly();

    this.hide();
    porter.div.appendChild(this.div);

};

porter.stringly.set_text = function porter_stringly_set_text(string){ this.textarea.value = string; };
porter.stringly.return_text = function porter_stringly_return_text(){ return this.textarea.value; };

     /* when_input : function()
        {// let test_area = document.getElementById('test_area');
         // test_area.innerText = porter_return_text();
     }, */



porter.googly = new divvy();

porter.googly.setup = function porter_googly_setup()
{
    this.select = new selectdiv({ innertext: "write/read google sheet ", deselectable:true });
    let that = this;
    this.select.activate = function porter_select_googly() { that.show(); };
    this.select.deactivate = function porter_deselect_googly() { that.hide(); };
    this.select.icon = document.createElement('img');
    this.select.icon.className = 'icon';
    this.select.icon.src = stringy.path_google_sheets_icon;
    this.select.add_child(this.select.icon);

    this.textarea = document.createElement('textarea');
    this.textarea.placeholder = "google spreadsheet ID goes here";
    this.textarea.cols = '60';
    this.textarea.rows = '2';
    this.textarea.oninput = function(){ porter.googly.handle_change(); };
    this.div.appendChild(this.textarea);

    if(localStorage.googlytext) { this.set_text(localStorage.googlytext); }

    this.add_squiggly();

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

    this.add_squiggly();

    this.note = new divvy({id:'googly_note',parent:this.div, classname:'warning'});

    this.hide();
    porter.div.appendChild(this.div);
};

porter.googly.attach_oauthbuttons = function porter_googly_attach_oauthbuttons()
{
    googly.signin.innerText = 'connect';
    googly.signin.className = 'clickables';
    this.oauthbutton.add_child(googly.signin);

    googly.signout.innerText = 'disconnect';
    googly.signout.className = 'clickables';
    this.oauthbutton.add_child(googly.signout);

};

porter.googly.set_text = function porter_googly_set_text(string){ this.textarea.value = string; };
porter.googly.return_text = function porter_googly_return_text(){ return this.textarea.value; };

porter.googly.handle_change = function porter_googly_handle_change()
{   localStorage.googlytext = this.return_text();
};


function happy_fun_click(div)
{
    console.log('happy_fun_click');
 // let happyfundiv = document.getElementById('happy_fun_div');
    document.getElementById('happy_fun_div').appendChild(document.createTextNode(":) "));
}
