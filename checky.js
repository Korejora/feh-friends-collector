
// checky.js
// checky class

class checky
{
    constructor(params)
    {
        this.div = document.createElement('div');
        this.div.className = 'checky';
        this.checkbox = document.createElement('input');
        this.checkbox.type = 'checkbox';
        let that = this;
        this.checkbox.onclick = function on_click() { that.handle_click(); };
        this.label = document.createElement('label');
        this.label.appendChild(this.checkbox);
        this.label.className = 'clickables';

        if (!params) { return; }

        if (params.type) {this.checkbox.type = params.type; }

        if (params.default) { this.checkbox.defaultChecked = params.default; }
        if (params.label) { this.label.appendChild(document.createTextNode(params.label)); }

        if (params.classname) { this.div.className += ' '+params.classname; }
        if (params.id) { this.div.id = params.id; }
        if (params.parent)
        {   let par = params.parent;
            if (par.tagName == 'DIV')
            {   par.appendChild(this.div);
            }
            else
            {   par.add_child(this.div);
            }
        }

        this.div.appendChild(this.label);

    }

    show() { this.div.style.display = ''; }

    hide() { this.div.style.display = 'none'; }

    handle_click()
    {   console.log("Clicked on an uninitialized default checkbox.", this.label);
    }

    tick() { this.checkbox.checked = true; }
    untick() { this.checkbox.checked = false; }
    set_tick(booly) { this.checkbox.checked = booly; }
    is_ticked() { return this.checkbox.checked; }
}
