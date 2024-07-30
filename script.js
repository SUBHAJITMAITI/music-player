let s = ["audio.mp3", "kabhi1.mp3", "Dipannita.mp3", "Thoda thoda pyaar.mp3", "Tum Hi Ho.mp3", "Bengali.mp3","kk.mp3","my.mp3","Arijit.mp3"];
let q = ["https://media.istockphoto.com/id/2101175462/photo/trekking-path-in-mountains-at-summer-sunset.jpg?s=1024x1024&w=is&k=20&c=EuwAQgptF73BKCwFbMUUyWgZfDl8oPTLpwOow2E-Ueo=", "https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/2865901/pexels-photo-2865901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/576494/pexels-photo-576494.jpeg", "https://images.pexels.com/photos/1510149/pexels-photo-1510149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1280162/pexels-photo-1280162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://imgs.search.brave.com/_AYeE8lS7t0pTekwaAgQSckOkT84SbmDFR2IB5ZuCjE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzA5L0tL/XyUyODEyNSUyOS5q/cGcvNTEycHgtS0tf/JTI4MTI1JTI5Lmpw/Zw","subha_1.png","https://static.toiimg.com/thumb/imgsize-23456,msid-92037952,width-600,resizemode-4/92037952.jpg"];
function convertSecondsToMinutesAndSeconds(seconds) {
    // Calculate minutes and remaining seconds
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Format seconds with leading zeros if needed
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

    return `${minutes}:${formattedSeconds}`;
}

// let w=document.body.getElementsByClassName("name")[0].firstElementChild
// let l=prompt("enter your name")
// w.innerHTML="hello "+l

let i = 0
let currentsong = new Audio(s[0]);

function play(src) {
    currentsong.src = src;
    currentsong.play();
}
let t;
let p;
currentsong.addEventListener("timeupdate", function () {
    t = currentsong.currentTime;
    p = currentsong.duration;
    k = document.body.getElementsByClassName("sovan")[0];
    k.style.left = `${((t / p) * 100) - 3}%`;
    console.log(k.style.left)
    j = convertSecondsToMinutesAndSeconds(t)
    w = j.split(".", 1)
    l = document.getElementsByClassName("subha1")[0]
    l.innerHTML = `${w}`
    g = convertSecondsToMinutesAndSeconds(p)
    h = g.split(".", 1)
    b = document.getElementsByClassName("subha2")[0]
    b.innerHTML = `${h}`

});

rightunderx.addEventListener("click", function () {
    i = 0
    play(s[i]);
    let d = q[i];
    let a = document.body.getElementsByClassName("left2under")[0];
    start.src = "play.svg"

    a.innerHTML = `<img src="${d}">`;
    let r = document.body.getElementsByClassName("priya")[0]
    let g = document.body.getElementsByClassName("rightunder2")[i].firstElementChild.innerHTML
    console.log(g)
    if (r) {
        r.innerHTML = `<p>${g} </p>`;
    }
});
rightundera.addEventListener("click", function () {
    i = 1
    play(s[i]);
    let d = q[i];
    let a = document.body.getElementsByClassName("left2under")[0];
    start.src = "play.svg"

    a.innerHTML = `<img src="${d}">`;
    let r = document.body.getElementsByClassName("priya")[0]
    let g = document.body.getElementsByClassName("rightunder2")[i].firstElementChild.innerHTML
    console.log(g)
    if (r) {
        r.innerHTML = `<p>${g} </p>`;
    }
});
rightunderb.addEventListener("click", function () {
    i = 2
    play(s[i]);
    let d = q[i];
    let a = document.body.getElementsByClassName("left2under")[0];
    start.src = "play.svg"

    a.innerHTML = `<img src="${d}">`;
    let r = document.body.getElementsByClassName("priya")[0]
    let g = document.body.getElementsByClassName("rightunder2")[i].firstElementChild.innerHTML
    console.log(g)
    if (r) {
        r.innerHTML = `<p>${g} </p>`;
    }
});
rightunderc.addEventListener("click", function () {
    i = 3
    play(s[i]);
    let d = q[i];
    let a = document.body.getElementsByClassName("left2under")[0];
    start.src = "play.svg"

    a.innerHTML = `<img src="${d}">`;
    let r = document.body.getElementsByClassName("priya")[0]
    let g = document.body.getElementsByClassName("rightunder2")[i].firstElementChild.innerHTML
    console.log(g)
    if (r) {
        r.innerHTML = `<p>${g} </p>`;
    }
});
rightunderd.addEventListener("click", function () {
    i = 4
    play(s[i]);
    let d = q[i];
    let a = document.body.getElementsByClassName("left2under")[0];
    start.src = "play.svg"

    a.innerHTML = `<img src="${d}">`;
    let r = document.body.getElementsByClassName("priya")[0]
    let g = document.body.getElementsByClassName("rightunder2")[i].firstElementChild.innerHTML
    console.log(g)
    if (r) {
        r.innerHTML = `<p>${g} </p>`;
    }
});

rightundere.addEventListener("click", function () {
    i = 5
    play(s[i]);
    let d = q[i];
    let a = document.body.getElementsByClassName("left2under")[0];
    start.src = "play.svg"

    a.innerHTML = `<img src="${d}">`;
    let r = document.body.getElementsByClassName("priya")[0]
    let g = document.body.getElementsByClassName("rightunder2")[i].firstElementChild.innerHTML
    console.log(g)
    if (r) {
        r.innerHTML = `<p>${g} </p>`;
    }
});
rightunderf.addEventListener("click", function () {
    i = 6
    play(s[i]);
    let d = q[i];
    let a = document.body.getElementsByClassName("left2under")[0];
    start.src = "play.svg"

    a.innerHTML = `<img src="${d}">`;
    let r = document.body.getElementsByClassName("priya")[0]
    let g = document.body.getElementsByClassName("rightunder2")[i].firstElementChild.innerHTML
    console.log(g)
    if (r) {
        r.innerHTML = `<p>${g} </p>`;
    }
});
rightunderg.addEventListener("click", function () {
    i = 7
    play(s[i]);
    let d = q[i];
    let a = document.body.getElementsByClassName("left2under")[0];
    start.src = "play.svg"

    a.innerHTML = `<img src="${d}">`;
    let r = document.body.getElementsByClassName("priya")[0]
    let g = document.body.getElementsByClassName("rightunder2")[i].firstElementChild.innerHTML
    console.log(g)
    if (r) {
        r.innerHTML = `<p>${g} </p>`;
    }
});

rightunderh.addEventListener("click", function () {
    i = 8
    play(s[i]);
    let d = q[i];
    let a = document.body.getElementsByClassName("left2under")[0];
    start.src = "play.svg"

    a.innerHTML = `<img src="${d}">`;
    let r = document.body.getElementsByClassName("priya")[0]
    let g = document.body.getElementsByClassName("rightunder2")[i].firstElementChild.innerHTML
    console.log(g)
    if (r) {
        r.innerHTML = `<p>${g} </p>`;
    }
});



let k = document.body.getElementsByClassName("sovan")[0];
// console.log(k);
// console.log(p)
k.style.left = `${(currentsong.currentTime / currentsong.duration) * 100}%`;
console.log(k.style.left)





let f = document.body.getElementsByClassName("amit")[0]
f.addEventListener("click", (e) => {
    console.log(e)

    let h = (e.offsetX / e.target.getBoundingClientRect().width) * 100
    k.style.left = `${h - 3}%`
    currentsong.currentTime = ((currentsong.duration) * h) / 100

    // console.log(currentsong.currentTime)
    // k.style.left = `${h}%`;

})

document.getElementsByClassName("rupa")[0].addEventListener("click", () => {
    if (currentsong.paused) {
        currentsong.play()
        console.log(play)
        start.src = "play.svg"
        let a = document.body.getElementsByClassName("left2under")[0];
        a.innerHTML = `<img src="${q[i]}">`;
        
    }

    else {
        currentsong.pause()
        start.src = "stop.svg"
        let a = document.body.getElementsByClassName("left2under")[0];
        a.innerHTML = `<img src="${q[i]}">`;

    }
})




document.getElementsByClassName("surajit")[0].addEventListener("click", () => {
    currentsong.pause()
    console.log("Previous clicked")
    i--
    if (  i < 0) {
        i = s.length-1
        currentsong.pause()
        play(s[i])
        let a = document.body.getElementsByClassName("left2under")[0];
        a.innerHTML = `<img src="${q[i]}">`;
        let r = document.body.getElementsByClassName("priya")[0]
        let g = document.body.getElementsByClassName("rightunder2")[i].firstElementChild.innerHTML
        console.log(g)
        if (r) {
            r.innerHTML = `<p>${g} </p>`;
        }
    }
    else {
        play(s[i])
        let a = document.body.getElementsByClassName("left2under")[0];
        a.innerHTML = `<img src="${q[i]}">`;
        let r = document.body.getElementsByClassName("priya")[0]
        let g = document.body.getElementsByClassName("rightunder2")[i].firstElementChild.innerHTML
        console.log(g)
        if (r) {
            r.innerHTML = `<p>${g} </p>`;
        }
    }
})

document.getElementsByClassName("khokan")[0].addEventListener("click", () => {
    currentsong.pause()
    console.log("next clicked")
    i++
    if (i >=s.length) {
        currentsong.pause()
        i=0
       j=0   
        play(s[j])
        
        let a = document.body.getElementsByClassName("left2under")[0];
        a.innerHTML = `<img src="${q[j]}">`;
        let r = document.body.getElementsByClassName("priya")[0]
        let g = document.body.getElementsByClassName("rightunder2")[j].firstElementChild.innerHTML
        console.log(g)
        if (r) {
            r.innerHTML = `<p>${g} </p>`;
        }
    }
    
    else {
        play(s[i])
        let a = document.body.getElementsByClassName("left2under")[0];
        a.innerHTML = `<img src="${q[i]}">`;
        let r = document.body.getElementsByClassName("priya")[0]
        let g = document.body.getElementsByClassName("rightunder2")[i].firstElementChild.innerHTML
        console.log(g)
        if (r) {
            r.innerHTML = `<p>${g} </p>`;
        }
    }
})

document.getElementsByTagName("input")[0].addEventListener("change", (e) => {
    console.log(e)
    console.log("Setting volume to", e.target.value, "/ 100")
    
    currentsong.volume = parseInt(e.target.value) / 100
    if (currentsong.volume <= 0) {
        let r = document.getElementsByClassName("subha3")[0].firstElementChild
      r.src="mute.svg"
    }
    else if(currentsong.volume >0) {
        let r = document.getElementsByClassName("subha3")[0].firstElementChild
      r.src="sound.svg"
    }

})

document.getElementsByClassName("subha3")[0].firstElementChild.addEventListener('click',() => {
    let volumeIcon = document.getElementsByClassName("subha3")[0].firstElementChild;
    if (currentsong.volume > 0) {
        currentsong.volume = 0;
        volumeIcon.src = "mute.svg";
        document.getElementsByTagName("input")[0].addEventListener("change", (e) => {
            console.log(e)
            console.log("Setting volume to", e.target.value, "/ 100")
            currentsong.volume = parseInt(e.target.value) / 100

        })
    } else {
        currentsong.volume = 1;
        volumeIcon.src = "sound.svg";
    }
})

setInterval(()=>{
if(currentsong.currentTime==currentsong.duration){
    i++
    if(i>=s.length){
i=0
    }
play(s[i])
let a = document.body.getElementsByClassName("left2under")[0];
        a.innerHTML = `<img src="${q[i]}">`;
        let r = document.body.getElementsByClassName("priya")[0]
        let g = document.body.getElementsByClassName("rightunder2")[i].firstElementChild.innerHTML
        console.log(g)
        if (r) {
            r.innerHTML = `<p>${g} </p>`;
        }
    
    
}

},1000)

humberger1.addEventListener("click",(e)=>{
let r=document.body.getElementsByClassName("left")[0]
r.style.left="0"


})
cross.addEventListener("click",(e)=>{
    let r=document.body.getElementsByClassName("left")[0]
    r.style.left="-100%"
    
    
    })