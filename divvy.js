
// divvy.js
// divvy class, selectdiv class

class divvy
{
    constructor(params)
    {
        this.div = document.createElement('div');
     // this.div.className = 'divvy';

        if (params)
        {
            if (params.classname) { this.add_to_class(params.classname); }
            if (params.id) { this.div.id = params.id; }
            if (params.innertext) { this.div.innerText = params.innertext; }
            if (params.parent)
            {   let par = params.parent;
                if (par.tagName == 'DIV')
                    { par.appendChild(this.div); }
                else{ par.add_child(this.div); }
            }
        }
    }

    add_to_class(string) { this.div.className += ' '+string; }

    set_text(string) { this.div.innerText = string; }

    set_class(string) { this.div.className = string; }

    add_child(child)
    {   if (child instanceof divvy)
            { this.div.appendChild(child.div); }
        else{ this.div.appendChild(child); }
    }

    add_squiggly()
    {   this.div.appendChild(document.createTextNode(" 〜 "));
    }

    add_text(string) { this.div.appendChild(document.createTextNode(string)); }

    add_text_n(string)
    {   this.div.appendChild(document.createTextNode(string));
        this.div.appendChild(document.createElement('br'));
    }

    add_linebreak()
    {   this.div.appendChild(document.createElement('br'));
    }

    clear() { this.div.innerHTML = ''; }

    show() { this.div.style.display = ''; }

    hide() { this.div.style.display = 'none'; }

    toggle()
    {   if (this.div.style.display == 'none'){ this.show(); }
        else { this.hide(); }
    }

    add_divider()
    {   let divider = document.createElement('div');
        divider.className = 'divider';
        this.div.appendChild(divider);
    }

}

divvy.prototype_clear = function clear() { this.div.innerHTML = ''; };
divvy.prototype_show = function show() { this.div.style.display = ''; };
divvy.prototype_hide = function hide() { this.div.style.display = 'none'; };
divvy.prototype_toggle = function toggle()
{   if (this.div.style.display == 'none'){ this.show(); }
    else { this.hide(); }
};


class selectdiv extends divvy // DEPRECATED, USE SELECTABLE CLASS INSTEAD // see selectable.js
{
    constructor(params)
    {   super(params);
        this.div.className += ' clickables ';

        this.partners = [];
        if(params.deselectable) { this.deselectable = true; }

        let that = this;
        this.div.onmousedown = function selectdiv_click() { that.handle_click(); };

        /*
        this.div.addEventListener('mousedown', function selectdiv_click() { that.select_me(); });
        this.div.addEventListener('mousedown', function selectdiv_click() { that.handle_click(); });
        */
    }

    handle_click()
    {
        let currently_selected = this.selected;
        this.call_deselection();
        if(this.deselectable && currently_selected)
            { this.do_deselect(); }
        else{ this.do_select(); }
    }

    do_select()
    {   this.underline();
        this.activate();
        this.selected = true;
    }

    do_deselect()
    {   this.dont_underline();
        this.deactivate();
        this.selected = false;
    }

    call_deselection()
    {   // console.log("Ran deselection an uninitialized default selectdiv.", this.div.innerText);
    }

    activate()
    {   // console.log("Activated an uninitialized default selectdiv.", this.div.innerText);
    }

    deactivate()
    {   // console.log("Deactivated an uninitialized default selectdiv.", this.div.innerText);
    }

    select_me() // register this first to allow handle_click to override
    {
    }

    underline() { this.div.style['text-decoration'] = 'underline'; }

    dont_underline() { this.div.style['text-decoration'] = ''; }

    add_partner(partner) { this.partners.push(partner); }

    add_partners(partners)
    {   for ( let j = 0; j < partners.length; j++ )
        {   this.add_partner(partners[j]);
        }
    }

}
