
let helloDiv = document.createElement("div");
document.body.appendChild(helloDiv);
helloDiv.innerText = "hello yes this is div";

/*
import tableau from 'tableau.js',
import io_area from 'io_area.js',
import allies from 'allies.js',
import weapons from 'weapons.js',
import assists from 'assists.js',
import specials from 'specials.js',
import passives from 'passives.js',
import friends from 'friends.js',
import alter from 'alter.js',
import adder from 'adder.js'
*/

let queueue = new createjs.LoadQueue();

    queueue.on("error",handleerror);
        function handleerror(event)
        {
            console.log
            (   "o no ! ", " .. \n",
                event.title, " .. \n" ,
                event.message, " .. \n",
                event.data, " .. "
            );
        }

    queueue.on("complete", handleComplete, this);
        function handleComplete(event)
        {
        /*	window.setTimeout( run_this_function_on_complete, 100); // scripts were not finished loading before page... */
         // console.log("files loaded ..");
            run_this_function_on_queue_complete();
        }


    queueue.on("fileload", handlefileload, this);
        function handlefileload(event)
        {
         // console.log("file load event .. ", event.item );
        }

queueue.loadManifest
(   [   'stringy.js', 'divvy.js', 'checky.js', 'io_area.js',
        'allies.js','chars.js','weapons.js','assists.js','specials.js','passives.js',
        'alter.js', 'tableau.js', 'friends.js', 'adder.js', 'inheritance.js',
        'googly.js'
    ]
);


let dummy_class_to_break_internet_explorer = class{};
document.getElementById('sad_ie_div').innerHTML = '';

let happy_fun_key = '283882426948-bsibft17xbnxrvy1hiei2iadunkuk35v.apps.googleusercontent.com';
    happy_fun_key = '251759398213-bapsv8tdn9d9gnl5hkoh6p4g3bunrtkf.apps.googleusercontent.com';

function run_this_function_on_queue_complete()
{
    tableau.setup();
 // rebuild_table();

}

function refreshment()
{
    tableau.friends_table.rebuild_rows();
    inheritance.rebuild();
    alter.refresh();
}
