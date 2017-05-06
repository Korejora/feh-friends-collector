
class divvy
{
    constructor(params)
    {
        this.div = document.createElement('div');

        if (!params) { return; }
        
        if (params.classname) { this.div.className = params.classname; }
        if (params.id) { this.div.id = params.id; }
        if (params.innertext) { this.div.innerText = params.innertext; }
        if (params.parent) params.parent.append(this.div);
    }

    add_to_class(string) { this.div.className += string; }

    reset_to(string) { this.div.innerText = string; }

    append(child) { this.div.appendChild(child); }

    add_squiggly()
    {   this.div.appendChild(document.createTextNode(" 〜 "));
    }

    add_text(string) { this.div.appendChild(document.createTextNode(string)); }

    add_text_n(string)
    {   this.div.appendChild(document.createTextNode(string));
        this.div.appendChild(document.createElement('br'));
    }

    clear() { this.div.innerHTML = ''; }

    show() { this.div.style.display = ''; }

    hide() { this.div.style.display = 'none'; }

    toggle()
    {   if (this.div.style.display == 'none'){ this.show(); }
        else { this.hide(); }
    }

}

divvy.prototype_clear = function clear() { this.div.innerHTML = ''; };
divvy.prototype_show = function show() { this.div.style.display = ''; };
divvy.prototype_hide = function hide() { this.div.style.display = 'none'; };
divvy.prototype_toggle = function toggle()
{   if (this.div.style.display == 'none'){ this.show(); }
    else { this.hide(); }
};
