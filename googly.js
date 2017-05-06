
let googly =
{
    signin  : document.getElementById('authorize-button'),
    signout : document.getElementById('signout-button'),

    spreadsheet_ID : '1fmzBXuu9gOts9pR4GqMxqaRul73szErqbmSeQi94rYo',
    range : 'A:Z',

    rows : [],

    setup : function()
    {   io_area.googly.attach_oauthbuttons();
    },

    /*
    fetch_spreadsheet_values: function(spreadsheet_ID, range)
    {
        if (!spreadsheet_ID) { spreadsheet_ID = this.spreadsheet_ID; }
        if (!range) { range = this.range; }

        gapi.client.sheets.spreadsheets.values.get(
        {   spreadsheetId: spreadsheet_ID,
            range: range,
        } ).then(
        function(response)
        {
            let rows = response.result.values;
            if (rows.length > 0)
            {   googly.rows = rows;
            }
            else
            {   console.log('No data found.');
            }
        },
        function(response)
        {   console.log('Error: ' + response.result.error.message);
        }      );

    },*/

};

googly.setup();
happy_fun_key = '251759398213-bapsv8tdn9d9gnl5hkoh6p4g3bunrtkf.apps.googleusercontent.com';
