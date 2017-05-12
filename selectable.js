
class selectable
{
    constructor(params)
    {   // super(params);
        this.select = new divvy({ classname:'clickables' });

        this.display = new divvy();
        this.display.hide();

        this.partners = [];

        if(params)
        {   if(params.deselectable) { this.deselectable = true; }
        }


        let that = this;
        this.select.div.onmousedown = function selectable_click() { that.handle_click(); };

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
    {   this.select.div.style['text-decoration'] = 'underline';
        this.display.show();
        this.activate();
        this.selected = true;
    }

    do_deselect()
    {   this.select.div.style['text-decoration'] = '';
        this.display.hide();
        this.deactivate();
        this.selected = false;
    }

    call_deselection()
    {   // this should be assigned to a parent deslection method
    }

    activate()
    {   // if additional code is required on activation
    }

    deactivate()
    {   // if additional code is required on deactivation
    }

}
