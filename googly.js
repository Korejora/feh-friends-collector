
// googly.js
// handles google voodoo

var gapi; //define gapi?

let googly =
{
    signin  : document.getElementById('authorize-button'),
    signout : document.getElementById('signout-button'),

    spreadsheet_ID : '',
    range : 'A:Z',

    note : document.getElementById('googly_note'),

    rows : [],

    setup : function googly_setup()
    {
        this.init_client = function initClient()
        {
            gapi.client.init(
            {
                discoveryDocs: googly.discovery_docs,
                clientId: googly.happy_fun_key,
                scope: googly.scopes
            } ).then(function googly_init_success()
                {
                    gapi.auth2.getAuthInstance().isSignedIn.listen(googly.update_singin_status);
                    googly.update_singin_status(gapi.auth2.getAuthInstance().isSignedIn.get());
                    googly.signin.onclick = googly.handle_auth_click;
                    googly.signout.onclick = googly.handle_singout_click;
                }   );
        };

        this.load_gapi();

        porter.googly.attach_oauthbuttons();



    },

    discovery_docs : ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    happy_fun_key : '251759398213-bapsv8tdn9d9gnl5hkoh6p4g3bunrtkf.apps.googleusercontent.com',
    scopes : "https://www.googleapis.com/auth/spreadsheets",

    load_gapi : function handleClientLoad()
    {   gapi.load('client:auth2', this.init_client);
    },

    update_singin_status: function updateSigninStatus(isSignedIn)
    {   if (isSignedIn)
        {
            authorizeButton.style.display = 'none';
            signoutButton.style.display = 'inline';
            porter.googly.saverestoredivvy.show();
            porter.googly.active.show();
            porter.googly_note("Please be careful with the write function! It will CLEAR the spreadsheet (and may also set it on fire)!",'warning');
        }
        else
        {
            authorizeButton.style.display = 'inline';
            signoutButton.style.display = 'none';
            porter.googly.saverestoredivvy.hide();
            porter.googly_note("(authorization required to read/write to google sheets)",'inform');
        }
    } ,

    handle_auth_click(event)
    {   gapi.auth2.getAuthInstance().signIn();
    } ,
    handle_singout_click: function handleSignoutClick(event)
    {   gapi.auth2.getAuthInstance().signOut();
    } ,


    read_sheet_then_call_friends ()
    {
        let spreadsheet_ID = porter.get_googly_spreadsheet_ID();

        if (!spreadsheet_ID)
        {   porter.googly_note("No spreadsheet ID found.",'error');
            console.log('no spreadsheet ID found! ..');
            return;
         // spreadsheet_ID = googly.spreadsheet_ID;
        }

        if (!gapi || !gapi.client || !gapi.client.sheets)
        {   porter.googly_note("Couldn't find the google api.",'error');
            console.log("something went wrong with the gapi client ..");
            return;
        }

        gapi.client.sheets.spreadsheets.values.get
        (   {   spreadsheetId: spreadsheet_ID,
                range: 'A:Z',
            }
        ).then(function(response)
        {
            let rows = response.result.values;
            if (rows && rows.length > 0)
            {
             // googly.rows = rows; // not currently used
                friends.after_read_googly(rows); // read
            }
            else
            {   console.log('no data found.');
                porter.googly_note(stringy.googly_warn_no_data, 'error');
            }
        },
        function(response)
        {   let error_message = response.result.error.message;
            console.log('Error: ' + response.result.error.message);
            stringy.googly_do_error(error_message, 'read');
        }      );
    },


    clear_write : function(spreadsheet_ID, values)
    {
        if (!spreadsheet_ID)
        {   console.log('no spreadsheet ID found! ..'); return;
         // spreadsheet_ID = googly.spreadsheet_ID;
        }

        gapi.client.sheets.spreadsheets.values.clear
        (   {   spreadsheetId: spreadsheet_ID,
                range: 'A:Z'
            }
        ).then(
        function(response)
        {
            gapi.client.sheets.spreadsheets.values.update
            (   {   spreadsheetId: spreadsheet_ID,
                    range: 'A:Z',
                    valueInputOption: 'RAW',
                    resource :
                    {   "range": 'A:Z',
                        "majorDimension":'ROWS',
                        "values":values
                    }
                }
            ).then(
            function(response)
            {
                porter.googly_note(stringy.googly_info_roster_saved+" "+stringy.show_time(),'inform');
            },
            function(response)
            {   console.log('Error: ' + response.result.error.message);
            }     );
        },
        function(response)
        {
            let error_message = response.result.error.message;
            console.log('Error: ' + response.result.error.message);
            stringy.googly_do_error(error_message, 'write');
        }     );

    },

};





// ---- GOOGLE VOODOO ---- HANDLE WITH CARE ---- //


      var authorizeButton = document.getElementById('authorize-button');
      var signoutButton = document.getElementById('signout-button');
