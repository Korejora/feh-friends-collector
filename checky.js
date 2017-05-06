
class checky
{
    constructor(params)
    {
        this.div = document.createElement('div');
        this.checkbox = document.createElement('input');
        this.checkbox.type = 'checkbox';
        this.label = document.createElement('label');
        this.label.appendChild(this.checkbox);
        this.label.className = 'clickables';

        if (!params) { return; }

        if (params.default) { this.checkbox.defaultChecked = params.default; }
        if (params.label) { this.label.appendChild(document.createTextNode(params.label)); }

        if (params.classname) { this.div.className = params.classname; }
        if (params.id) { this.div.id = params.id; }
        if (params.parent) params.parent.append(this.div);

        this.div.appendChild(this.label);

    }

    show() { this.div.style.display = ''; }

    hide() { this.div.style.display = 'none'; }
}
