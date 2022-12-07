let events = {
    'birth':{
        'hover':'g7175',
        'target':'g8675',
        'skills':[],
    },
    'schools_1':{
        'hover':'g7171',
        'target':'g8592',
        'skills':[],
        'type':'education'
    },
    'moving_south':{
        'hover':'g7166',
        'target':'g22185',
        'skills':['adaptability'],
        'type':'personal',
        'seen':false
    },
    'multi_jobs':{
        'hover':'g4450',
        'target':'g25992',
        'skills':['teamwork', 'leardership', 'pb_solving', 'adaptability', 'autonomy', 'initiative'],
        'type':'work',
        'seen':false
    },
    'schools_2':{
        'hover':'g4442',
        'target':'g25949',
        'skills':['self_motivation', 'creativity'],
        'type':'education',
        'seen':false
    },
    'trip':{
        'hover':'g4435',
        'target':'g26033',
        'skills':['autonomy', 'adaptability', 'self_motivation', 'pb_solving'],
        'type':'personal',
        'seen':false
    },
    'data_architect':{
        'hover':'g4431',
        'target':'g26079',
        'skills':['teamwork', 'creativity', 'sql', 'js', 'php', 'python', 'initiative'],
        'type':'work',
        'seen':false
    },
    'schools_3':{
        'hover':'g4425',
        'target':'g25901',
        'skills':['statistics', 'python', 'css', 'html', 'js', 'data_mining'],
        'type':'education',
        'seen':false
    },
    'data_analyst':{
        'hover':'g4420',
        'target':'g26169',
        'skills':['adaptability', 'statistics', 'data_visualisation', 'teamwork', 'creativity', 'pb_solving', 'creativity', 'initiative'],
        'type':'work',
        'seen':false
    },
    'lirmm_internship':{
        'hover':'g4414',
        'target':'g26257',
        'skills':['pb_solving', 'self_motivation', 'autonomy', 'initiative', 'creativity', 'data_visualisation', 'js', 'html', 'css', 'python'],
        'type':'work',
        'seen':false
    },
    'schools_4':{
        'hover':'g4406',
        'target':'g25829',
        'skills':['pb_solving', 'leardership', 'teamwork', 'creativity', 'self_motivation', 'statistics', 'machine_learning', 'data_mining', 'data_visualisation', 'js', 'sql', 'html', 'css', 'php', 'python'],
        'type':'education',
        'seen':false
    },
    'iut_teacher':{
        'hover':'g4401',
        'target':'g25708',
        'skills':['pb_solving', 'leardership', 'teamwork', 'adaptability', 'self_motivation', 'initiative', 'data_visualisation', 'js', 'sql', 'html', 'css', 'php'],
        'type':'work',
        'seen':false
    },
    'papers_1':{
        'hover':'g4396',
        'target':'g25756',
        'skills':['pb_solving', 'autonomy', 'teamwork', 'creativity', 'self_motivation', 'statistics', 'deep_learning', 'machine_learning', 'data_mining', 'data_visualisation', 'js', 'html', 'css', 'python', 'nlp', 'xai', 'pytorch'],
        'type':'education',
        'seen':false
    },
    'pilou':{
        'hover':'g4392',
        'target':'g53201',
        'skills':['leardership', 'adaptability', 'initiative', 'creativity'],
        'type':'personal',
        'seen':false
    },
    'papers_2':{
        'hover':'g4388',
        'target':'g7936',
        'skills':['pb_solving', 'autonomy', 'teamwork', 'creativity', 'self_motivation', 'statistics', 'deep_learning', 'machine_learning', 'data_mining', 'data_visualisation', 'js', 'html', 'css', 'python', 'nlp', 'xai', 'pytorch'],
        'type':'education',
        'seen':false,
        'onclick':function (){window.open('https://ieeexplore.ieee.org/document/9801527', '_blank').focus();}
    },
    'papers_3':{
        'hover':'g4384',
        'target':'g7233',
        'skills':['pb_solving', 'autonomy', 'teamwork', 'creativity', 'self_motivation', 'statistics', 'deep_learning', 'machine_learning', 'data_mining', 'data_visualisation', 'js', 'html', 'css', 'python', 'nlp', 'xai', 'pytorch'],
        'type':'education',
        'seen':false,
        'onclick':function (){window.open('https://drive.google.com/file/d/1WQxfW65TCN0_S9449-JzYcj2Ymg6Gu7f/view?usp=share_link', '_blank').focus();}
    },
    'schools_5':{
        'hover':'g4380',
        'target':'g8280',
        'skills':['pb_solving', 'autonomy', 'teamwork', 'creativity', 'self_motivation', 'statistics', 'deep_learning', 'machine_learning', 'data_mining', 'data_visualisation', 'js', 'html', 'css', 'python', 'nlp', 'xai', 'pytorch', 'adaptability', 'php', 'initiative', 'sql'],
        'type':'education',
        'seen':false
    },
}

let future_events = {
    'moving':{
        'hover':'g3886',
        'target':'g109216',
        'skills':[],
        'type':'personal',
        'seen':false
    },
    'find_job':{
        'hover':'g2458',
        'target':'g75516',
        'skills':[],
        'type':'personal',
        'seen':false
    }
}

let skills = {
    'pb_solving':{
        'target':'path125270',
    },
    'teamwork':{
        'target':'path129713',
    },
    'self_motivation':{
        'target':'path129721',
    },
    'adaptability':{
        'target':'path131076',
    },
    'initiative':{
        'target':'path129807',
    },
    'autonomy':{
        'target':'path129725',
    },
    'creativity':{
        'target':'path129717',
    },
    'leardership':{
        'target':'path129475',
    },
    'statistics':{
        'target':'path149303',
    },
    'machine_learning':{
        'target':'path149307',
    },
    'deep_learning':{
        'target':'path149311',
    },
    'pytorch':{
        'target':'path149315',
    },
    'nlp':{
        'target':'path149440',
    },
    'xai':{
        'target':'path149436',
    },
    'sql':{
        'target':'path149573',
    },
    'php':{
        'target':'path149577',
    },
    'html':{
        'target':'path149569',
    },
    'js':{
        'target':'path149561',
    },
    'css':{
        'target':'path149565',
    },
    'data_mining':{
        'target':'path149319',
    },
    'data_visualisation':{
        'target':'path149444',
    },
    'python':{
        'target':'path153732',
    },
}

// let path = document.getElementById('path125270')
// path.setAttribute('pathLength', '1')
// path.style.strokeDasharray = 1.1;
// path.style.strokeDashoffset = 1.1;
// path.classList.add('path-animate');
// path.addEventListener( "animationend",  function() {
//     path.classList.remove("path-animate");
// })


let secrets = {
    'find_job':''
}

let future_g = ['g3886', 'g2458', 'path154863-4', 'path154863-4-5', 'path154865', 'path154863', 'path154971', 'path154889', 'path154863-4-5-0', 'circle296226', 'g71053-3']


let pen_caps = ['path117058-1-8', 'path123770-2', 'path123770-7-4']

let hat_spinning = false;
let svgDoc =  document.getElementsByTagName('svg');
let found_secrets = []

const google_colors = ['#fbbc05', '#34a853', '#ea4335', '#4285f4'];
let all_seen = false;
let all_seen_animate = false;

function prepareDisplay(){
    setTimeout( function() {
        document.getElementById('all-page').classList.add('show')
    }, 1500)
    document.getElementById("tspan71723-0-3").innerHTML = ""
    document.getElementById("tspan114751-8").innerHTML = ""
    document.getElementById("tspan71723-04").innerHTML = ""
    document.getElementById("tspan72905-7").innerHTML = ""
    document.getElementById("rect45284").remove(); // USE FOR POSITION OF EVENTS
    document.getElementById('text66023').style.visibility = 'hidden'
    document.getElementById('g82293').style.visibility = 'hidden' // PYTHON COUNT OF SECRETS
    document.getElementById("tspan72905-7").onclick = function (){window.open('https://www.linkedin.com/in/alexis-delaforge/', '_blank').focus();}
    for (const [label, event] of Object.entries(events)) {
        // console.log(event.target)
        // console.log(document.getElementById(event.target))
        document.getElementById(event.target).classList.add('event')
        if(event.onclick !== undefined){
            document.getElementById(event.hover).onclick = event.onclick
        }
        document.getElementById(event.hover).style.cursor = "pointer";
    }
    document.getElementById("g8775").onclick = function (){window.open('https://www.linkedin.com/in/alexis-delaforge/', '_blank').focus();}
    document.getElementById("g8775").style.cursor = "pointer";
    for (const [label, event] of Object.entries(future_events)) {
        document.getElementById(event.target).classList.add('event')
    }
    for (const [skill, value] of Object.entries(skills)){
        let skill_path = document.getElementById(value.target)
        skill_path.setAttribute('pathLength', '1')
        skill_path.style.strokeDasharray = 1.1;
        skill_path.style.strokeDashoffset = 1.1;
    }
    future_g.forEach(function (element){
        document.getElementById(element).classList.add('hover-event-future')
    })
    document.getElementById('text10138').classList.add('hover-event-future')
    setTimeout( function() {
        document.getElementById('g1346').classList.add('hide')
        setTimeout( function() {
            document.getElementById('g1346').remove()
        }, 1000)
    }, 4500)
}

function valideShow(target, e){
    for (const [label, event] of Object.entries(events)) {
        if(event.target==target){
            event.seen = true
        }
    }
    checkSeens(e)
}

function checkSeens(e){
    let seens = 0
    for (const [label, event] of Object.entries(events)) {
        if(event.seen){
            seens = seens+1
        }
    }
    if(seens == Object.keys(events).length){
        foundSecret('all_seen', e)
        allSeen()
        all_seen = true;
        checkSeens = function (){}
    }
}

function allSeen(){
    for (const [label, event] of Object.entries(events)) {
        document.getElementById(event.target).classList.remove('show')
    }
    future_g.unshift('text10138')
    for(let j = 0; j <= future_g.length; j++){
        let element = future_g[j]
        setTimeout(function (){
            if(j == future_g.length){
                all_seen_animate = true
            }else{
                let elem = document.getElementById(element)
                elem.classList.add('show')
                let rect = elem.getBoundingClientRect();
                if(j!=0){
                    explode((rect.right+rect.left)/2, (rect.top + rect.bottom)/2, 4);
                }
            }
        },(j+1)*200)
    }
}

function foundSecret(label, e){
    if(!found_secrets.includes(label)){
        if(label != 'all_seen' && label != 'mail_to'){
            explode(e.pageX, e.pageY, 10);
        }
        found_secrets.push(label);
        for(let k = 0; k < google_colors.length+1; k++) {
            if (k < google_colors.length) {
                setTimeout(function () {
                    document.getElementById('text71622').style.fill = google_colors[k]
                }, (k + 1) * 130)
            } else {
                setTimeout(function () {
                    document.getElementById('text71622').style.fill = "#4d4d4d"
                }, (k + 1) * 130)
            }
        }
    }
    if(found_secrets.length == 5){
        // alert('all secrets') // ALL SECRETS FOUND, DO SOMETHING.
        document.getElementById('text71622').innerHTML = found_secrets.length
    }else if(found_secrets.length == 1){
        document.getElementById('g82293').style.visibility = 'visible'
        document.getElementById('text71622').innerHTML = 1
    }else{
        document.getElementById('text71622').innerHTML = found_secrets.length
    }

}

function secretTick(){
    document.getElementById('rect60294').addEventListener('click', e => {
        // DO MORE THINGS ! Propose motivation letter ! :)
        document.getElementById('text66023').style.visibility = 'visible'
        foundSecret('find_job', e);
    })
}

function initializeSecrets(){
    secretTick()
}

function startHat(){
    hat_spinning = true;
    // Select all Hat
    document.getElementById('g8199').addEventListener('click', e => {
        if(hat_spinning){
            stopHat()
        }else{
            rotateHat()
        }
    })
}

function rotateHat(){
    hat_spinning = true;
    Array.from(document.getElementsByClassName("hat-spin")).forEach(
        function(element, index, array) {
            element.beginElement()
        }
    );
}

function stopHat(){
    hat_spinning = false; // VOIR SI C'EST PAS MIEUX AVCE FREEZE ET REPETITION (TO DO)
    Array.from(document.getElementsByClassName("hat-spin")).forEach(
        function(element, index, array) {
            element.endElementAt(6-element.getCurrentTime()%6)
        }
    );
}

function progressiveText(target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { progressiveText(target, message, index, interval); }, interval);
    }
}

function activePenCaps(){
    pen_caps.forEach(function (pencap){
        document.getElementById(pencap).classList.add('pen-cap')
    })
}

function showFuture(){
    for(let i = 0; i < future_g.length; i++){
        let elem = document.getElementById(future_g[i])
        elem.classList.add('show')
    }
}

function hideFuture(){
    for(let i = 0; i < future_g.length; i++){
        let elem = document.getElementById(future_g[i])
        elem.classList.remove('show')
    }
}

function animateEvents(){
    for (const [label, event] of Object.entries(events)) {
        document.getElementById(event.hover).addEventListener('mouseenter', e => {
            document.getElementById(event.target).classList.add('show')
            valideShow(event.target, e)
            hideFuture()
            event.skills.forEach(function(skill){
                let skill_path = document.getElementById(skills[skill].target)
                skill_path.classList.add('path-animate');
                skill_path.addEventListener( "animationend",  function() {
                    // skill_path.classList.remove("path-animate");
                })
            })
        })
        document.getElementById(event.hover).addEventListener('mouseleave', e => {
            document.getElementById(event.target).classList.remove('show')
            if(all_seen && all_seen_animate){
                showFuture()
            }
            Array.from(document.getElementsByClassName("path-animate")).forEach(
                function(element, index, array) {
                    element.classList.remove('path-animate')
                }
            );
        })
    }
    for (const [label, event] of Object.entries(future_events)) {
        document.getElementById(event.hover).addEventListener('mouseenter', e => {
            document.getElementById(event.target).classList.add('show')
            document.getElementById('text10138').classList.remove('show')
        })
        document.getElementById(event.hover).addEventListener('mouseleave', e => {
            document.getElementById(event.target).classList.remove('show')
            document.getElementById('text10138').classList.add('show')
        })
    }
    document.getElementById('g2848').addEventListener('click', e => {
        fallBook()
        foundSecret('thesis', e)
        // DISPLAY TEXT ABOUT THE THESIS AND PROVIDED LINK TO IT.
    })
    document.getElementById('g_google').addEventListener('click', e => {
        document.getElementById('g_google').style.opacity = 0;
        foundSecret('google', e)
        // DISPLAY TEXT ABOUT THE THESIS AND PROVIDED LINK TO IT.
    })
    document.getElementById('mail_to').addEventListener('click', e => {
        // document.getElementById('g_google').style.opacity = 0;
        foundSecret('mail_to', e)
        // DISPLAY TEXT ABOUT THE THESIS AND PROVIDED LINK TO IT.
    })
}

function popFuture(){
}

function fallBook() {
    document.getElementById('blue-book-fall').beginElement() // FALL BLUE BOOK
    fallBook = function () {
    }
}

function writeTexts(){
    setTimeout(function (){
        progressiveText("#tspan71723-0-3", "French (native)", 0, 100)
        setTimeout(function(){
            progressiveText("#tspan114751-8", "English (fluent)", 0, 100)
        }, 1500);
        setTimeout(function(){
            progressiveText("#tspan71723-04", "alexis.delaforge@outlook.fr", 0, 100)
        }, 3100);
        setTimeout(function(){
            progressiveText("#tspan72905-7", "+336 64 58 42 52", 0, 100)
        }, 6400);
    },5000)
}

// explosion construction
function explode(x, y, p) {
    let particles = p,
        // explosion container and its reference to be able to delete it on animation end
        explosion = $('<div class="explosion"></div>');

    // put the explosion container into the body to be able to get it's size
    $('body').append(explosion);
    // position the container to be centered on click
    explosion.css('left', x - explosion.width() / 2);
    explosion.css('top', y - explosion.height() / 2);

    for (let i = 0; i < particles; i++) {
        // positioning x,y of the particle on the circle (little randomized radius)
        let x = (explosion.width() / 2) + _.random(80, 150) * Math.cos(2 * Math.PI * i / _.random(particles - 10, particles + 10)),
            y = (explosion.height() / 2) + _.random(80, 150) * Math.sin(2 * Math.PI * i / _.random(particles - 10, particles + 10)),
            // particle element creation (could be anything other than div)
            elm = $('<div class="particle" style="' +
                'background-color: ' + _.sample(google_colors) + ' ;' +
                'top: ' + y + 'px; ' +
                'left: ' + x + 'px"></div>');
        if (i == 0) { // no need to add the listener on all generated elements
            // css3 animation end detection
            elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                explosion.remove(); // remove this explosion container when animation ended
            });
        }
        explosion.append(elm);
    }
}

// let svg = document.getElementById("svg_image");
// console.log(svg)
// let svg_content = svg.contentDocument;
// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
setTimeout(function(){
    console.log('là !');
    prepareDisplay(); // ADAPT THGS FOR INTERACTIVITY AND ANIMATIONS
    activePenCaps(); // GLOW PEN CAPS TO CLICK
    startHat(); // START SPINNING NOOGLER HAT
    animateEvents(); // ADD EVENT LISTENER
    writeTexts(); // TYPE TEXTS
    initializeSecrets(); // INITIALIZE SECRETS
}, 0);


