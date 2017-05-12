
// prime.js
// first file loaded, primes everything to work


let helloDiv = document.createElement("div");
document.body.appendChild(helloDiv);
helloDiv.innerText = "hello yes this is div";
helloDiv.style.display = 'none';

/*
import tableau from 'tableau.js',
import porter from 'porter.js',
import allies from 'allies.js',
import weapons from 'weapons.js',
import assists from 'assists.js',
import specials from 'specials.js',
import passives from 'passives.js',
import friends from 'friends.js',
import alter from 'alter.js',
import adder from 'adder.js'
*/

let tagload_queue_manifest =
    [   "https://apis.google.com/js/api.js"   ];

let queueueue_manifest =
    [   'googly.js',
        'stringy.js', 'divvy.js', 'checky.js', 'selectable.js', 'porter.js','allies.js',
        'data/chars.js','data/weapons.js','data/assists.js','data/specials.js','data/passives.js',
        'alter.js', 'tableau.js', 'friends.js', 'adder.js', 'inheritance.js',
    ];


function start_queues()
{
    tagload_queue.loadManifest(tagload_queue_manifest);
}
function tagload_queue__load_next_queue(){ queueueue.loadManifest(queueueue_manifest); }

let tagload_queue = new createjs.LoadQueue(false);

    tagload_queue.on("error",queue_handle_error);
    tagload_queue.on("complete", (event) => { tagload_queue__load_next_queue(); }, this );

let queueueue = new createjs.LoadQueue();

    queueueue.on("error",queue_handle_error);
        function queue_handle_error(event)
        {   console.log
            (   "o no ! ", " .. \n",
                event.title, " .. \n" ,
                event.message, " .. \n",
                event.data, " .. "
            );
        }

    queueueue.on("complete", (event) => { run_this_function_on_queue_complete(); }, this);

/*
    queueueue.on("fileload", handlefileload, this);
        function handlefileload(event)
        {
         // console.log("file load event .. ", event.item );
        }
*/


start_queues();

let dummy_class_to_break_internet_explorer = class{};


function run_this_function_on_queue_complete()
{

 // rebuild_table();

    porter.setup();

    googly.setup();


    allies.setup();
    alter.setup();
    adder.setup();

    tableau.setup();


    document.getElementById('sad_ie_div').innerHTML = 'Please send bug reports or feature requests to ' + stringy.html_code_email;

}

function refreshment()
{
    // if a new ally is added
    // if an ally changes rarity or favourite status
    tableau.friends_table.rebuild_rows();
    inheritance.rebuild();
    alter.refresh();
}
