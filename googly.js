
let googly =
{
    signin  : document.getElementById('authorize-button'),
    signout : document.getElementById('signout-button'),

    spreadsheet_ID : '1fmzBXuu9gOts9pR4GqMxqaRul73szErqbmSeQi94rYo',
    range : 'A:Z',

    rows : [],

    setup : function()
    {   porter.googly.attach_oauthbuttons();
    },



    discovery_docs : ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    happy_fun_key : '251759398213-bapsv8tdn9d9gnl5hkoh6p4g3bunrtkf.apps.googleusercontent.com',
    scopes : "https://www.googleapis.com/auth/spreadsheets",

};





// ---- GOOGLE VOODOO ---- HANDLE WITH CARE ---- //


      // Client ID and API key from the Developer Console
      var CLIENT_ID = googly.happy_fun_key;

      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = "https://www.googleapis.com/auth/spreadsheets";

      var authorizeButton = document.getElementById('authorize-button');
      var signoutButton = document.getElementById('signout-button');

      function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }
      function initClient() {
        gapi.client.init({
          discoveryDocs: DISCOVERY_DOCS,
          clientId: CLIENT_ID,
          scope: SCOPES
        }).then(function () {
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        });
      }

      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          authorizeButton.style.display = 'none';
          signoutButton.style.display = 'inline';
        } else {
          authorizeButton.style.display = 'inline';
          signoutButton.style.display = 'none';
        }
      }

      function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

      function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }
