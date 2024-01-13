
const nav = document.getElementById('nav');

window.addEventListener('scroll',() => {
    if(window.scrollY >=100){
        nav.classList.add("nav__black");
    } else{
        nav.classList.remove("nav__black")
    }
})

//Banner Mute and Unmuted Button

var video = document.getElementById("banner-video");
var btn = document.getElementById("muteButton");
var icon = document.getElementById("muteIcon");

btn.addEventListener("click", function(event){
    event.preventDefault();
    if(video.muted) {
        video.muted = false;
        icon.className = "fas fa-volume-up";
    } else {
        video.muted = true;
        icon.className = "fas fa-volume-mute";
    }

});



// left right button for poster

window.onload = function() {
    var scrollAmount = 600;

    var container1 = document.querySelector('.firstRow .row_posters');
    var leftButton1 = document.getElementById('leftButton');
    var rightButton1 = document.getElementById('rightBtn');

    var container2 = document.querySelector('.secondRow .row_posters');
    var leftButton2 = document.getElementById('leftButton2');
    var rightButton2 = document.getElementById('rightBtn2');

    var container3 = document.querySelector('.thirdRow .row_posters');
    var leftButton3 = document.getElementById('leftButton3');
    var rightButton3 = document.getElementById('rightBtn3');

    var container4 = document.querySelector('.fourthRow .row_posters');
    var leftButton4 = document.getElementById('leftButton4');
    var rightButton4 = document.getElementById('rightBtn4');

    var container5 = document.querySelector('.fifthRow .row_posters');
    var leftButton5 = document.getElementById('leftButton5');
    var rightButton5 = document.getElementById('rightBtn5');

    // Initially hide the left buttons
    leftButton1.style.display = 'none';
    leftButton2.style.display = 'none';
    leftButton3.style.display = 'none';
    leftButton4.style.display = 'none';
    leftButton5.style.display = 'none';

    function scrollLeft(e, container, scrollAmount) {
        e.preventDefault();
        container.scrollTo({
            left: container.scrollLeft - scrollAmount,
            behavior: 'smooth'
        });
    }

    function scrollRight(e, container, scrollAmount) {
        e.preventDefault();
        container.scrollTo({
            left: container.scrollLeft + scrollAmount,
            behavior: 'smooth'
        });
    }

    function checkScroll(container, leftButton) {
        // If at the start, hide the left button
        if (container.scrollLeft <= 1) {
            leftButton.style.display = 'none';
        } else {
            // Show the left button when scrolling
            leftButton.style.display = 'block';
        }
    }

    //Button 1
    leftButton1.addEventListener('click', function(e) {
        scrollLeft(e, container1, scrollAmount);
    });

    rightButton1.addEventListener('click', function(e) {
        scrollRight(e, container1, scrollAmount);
    });

    container1.addEventListener('scroll', function() {
        checkScroll(container1, leftButton1);
    });

    //Button 2
    leftButton2.addEventListener('click', function(e) {
        scrollLeft(e, container2, scrollAmount);
    });

    rightButton2.addEventListener('click', function(e) {
        scrollRight(e, container2, scrollAmount);
    });

    container2.addEventListener('scroll', function() {
        checkScroll(container2, leftButton2);
    });

    //Button 3
    leftButton3.addEventListener('click', function(e) {
        scrollLeft(e, container3, scrollAmount);
    });

    rightButton3.addEventListener('click', function(e) {
        scrollRight(e, container3, scrollAmount);
    });

    container3.addEventListener('scroll', function() {
        checkScroll(container3, leftButton3);
    });

    //Button 4
    leftButton4.addEventListener('click', function(e) {
        scrollLeft(e, container4, scrollAmount);
    });

    rightButton4.addEventListener('click', function(e) {
        scrollRight(e, container4, scrollAmount);
    });

    container4.addEventListener('scroll', function() {
        checkScroll(container4, leftButton4);
    });

    //Button 5
    leftButton5.addEventListener('click', function(e) {
        scrollLeft(e, container5, scrollAmount);
    });

    rightButton5.addEventListener('click', function(e) {
        scrollRight(e, container5, scrollAmount);
    });

    container5.addEventListener('scroll', function() {
        checkScroll(container5, leftButton5);
    });
}

//Play Movie Section

// Select all the watch buttons
var watchButtons = document.querySelectorAll('.watchButton');

// Add a click event listener to each button
watchButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the video file from the data-video attribute
        var videoFile = button.dataset.video;

        // Navigate to videoPlayer.html with the video file as a URL parameter
        window.location.href = 'videoPlayer.html?video=' + encodeURIComponent(videoFile);
    });
});




//Movie slider in banner

var videos = [
    //0
    {
        videoUrl: 'https://dl.dropboxusercontent.com/scl/fi/ovtzjc2kby6nh44h8yila/aquamantrailer.mp4?rlkey=3hn32ww9vm2x56pfpcq4fz0cw&dl=0',
        titleUrl: 'images/titles/aquamantitle.png',
        description: 'Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.'
    },
    //1
    {
        videoUrl: 'https://dl.dropboxusercontent.com/scl/fi/3t6e2xolat7ewhgknedsl/fast7trailer.mp4?rlkey=zbqgivp2278avxuo1qafht521&dl=0',
        titleUrl: 'images/titles/fast7title.png',
        description: 'Dominic and his family are caught in a quagmire when Shaw brother seeks bloody revenge. They must not only deal with their enemy but also save a crucial programme from falling into the wrong hands.'
    },
    //2
    {
        videoUrl: 'https://dl.dropboxusercontent.com/scl/fi/68ly7c51jc7yeu3i2lqaz/missionimposibbletrailer.mp4?rlkey=4bv9sh9or062zolhdwsjujzdt&dl=0',
        titleUrl: 'images/titles/missionimposibbletitle.png',
        description: 'Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy.'
    },
    //3
    {
        videoUrl: 'https://dl.dropboxusercontent.com/scl/fi/vy0xq0zt14j5i6tm07x79/indianajones.mp4?rlkey=0wxyhyzjkkm5y083s2pg6fqxl&dl=0',
        titleUrl: 'images/titles/indianajones.webp',
        description: 'Experience the return of legendary hero, Indiana Jones, in the fifth installment of this beloved swashbuckling series of films. Finding himself in a new era, approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. '
    },
    //4
    {
        videoUrl: 'https://dl.dropboxusercontent.com/scl/fi/h9ydlqo5ma41lhgsuknzs/endgame.mp4?rlkey=6iy9d7fcs56a6by17tfymbuaz&dl=0',
        titleUrl: 'images/titles/endgametitle.png',
        description: 'The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones.However, Thanos is prepared to go to any lengths to carry out his insane plan.'
    },
    //5
    {
        videoUrl: 'https://dl.dropboxusercontent.com/scl/fi/p52g0z3ot64a4lpjb288q/homecoming.mp4?rlkey=u9qkdjxwlp4efsb51pemr681l&dl=0',
        titleUrl: 'images/titles/spidermanhomecomingtitle.png',
        description: 'Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.'
    },
    //6
    {
        videoUrl: 'https://dl.dropboxusercontent.com/scl/fi/dxov3idos9pu1mqfltdzi/interstellartrailer.mp4?rlkey=2tl3sg646pfeav1lfzt66ox1h&dl=0',
        titleUrl: 'images/titles/interstellartitle.png',
        description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.'
    },
    //7
    {
        videoUrl: 'https://dl.dropboxusercontent.com/scl/fi/e7gidt27bzorqk5l6rrq0/parasitetrailer.mp4?rlkey=uufxqu11yb8c4ou2qa7wd05qg&dl=0',
        titleUrl: 'images/titles/parasitetitle.png',
        description: 'The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.'
    },
    //8
    {
        videoUrl: 'https://dl.dropboxusercontent.com/scl/fi/jvpqogi351ose2a9qb4lw/starwarstrailer.mp4?rlkey=ocvpqo47fr91v6jw8kjfol15j&dl=0',
        titleUrl: 'images/titles/starwarstitle.png',
        description: 'A new order threatens to destroy the New Republic. Finn, Rey and Poe, backed by the Resistance and the Republic, must find a way to stop them and find Luke, the last surviving Jedi.'
    },
    //9
    {
        videoUrl: 'https://dl.dropboxusercontent.com/scl/fi/1tfekm1o6pct6jqrtwpwu/geostormtrailer.mp4?rlkey=vjm206c5z6mpcrdgi7ja53w7x&dl=0',
        titleUrl: 'images/titles/geostormtitle.png',
        description: 'The Dutch Boy Program staves off natural disasters but somehow a Geostorm is approaching many countries. Jake Lawson, a technology designer, is tasked with saving the world from this disaster.'
    },
    //10
    {
        videoUrl: 'https://dl.dropboxusercontent.com/scl/fi/z7d3fce5b9yqcoxvxpkqd/gangstercoptrailer.mp4?rlkey=zcrg59vnnqszrrh3gw833y3yt&dl=0',
        titleUrl: 'images/titles/gangstercoptitle.png',
        description: 'A strange murder after a car accident compels a police officer to think that it is the work of a serial killer. When a gangster falls prey to a similar incident, he joins forces with the officer.'
    },
    //11
    {
        videoUrl: 'https://dl.dropboxusercontent.com/scl/fi/9ifglaeuz8f47x1py2mra/jackreachertrailer.mp4?rlkey=8tvs04lbntoxqqi7b0iokqqfc&dl=0',
        titleUrl: 'images/titles/jackreachertitle.png',
        description: 'An ex-military police investigator sets out to prove the innocence of the head of his old unit when she is accused of treason. In his task, he discovers a major government conspiracy.'
    },
    
];

function changeVideo(index) {
    // Change video
    var video = document.getElementById("banner-video");
    var source = video.getElementsByTagName('source');
    source[0].src = videos[index].videoUrl;
    video.load();

    // Change title image
    var titleImage = document.querySelector(".banner__title img");
    titleImage.src = videos[index].titleUrl;

    // Change description
    var desc = document.querySelector(".banner__description");
    desc.textContent = videos[index].description;
}



