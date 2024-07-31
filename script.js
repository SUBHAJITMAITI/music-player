let s = ["Labon.mp3", "Bekhayali.mp3", "Dipannita.mp3", "Thoda thoda pyaar.mp3", "Tum Hi Ho.mp3", "avijog.mp3","kk1.mp3","Hasi.mp3","Pehle.mp3","Deewana.mp3","Toota.mp3","Lo.mp3","Galliyan.mp3","Kabhi1.mp3","Hawa.mp3","du.mp3","Saajna.mp3","Saiyaara.mp3","Mann.mp3","Brishti.mp3","Lokkhi.mp3","aviman.mp3","prithibir.mp3","Sajni.mp3","Piya.mp3","Sang.mp3","Aawara.mp3","Jeene.mp3","Halka.mp3","Jane.mp3","Amar.mp3","Jisan.mp3","KABHI.mp3","Sun.mp3","Is.mp3","ashi.mp3"];
let q = ["https://media.istockphoto.com/id/2101175462/photo/trekking-path-in-mountains-at-summer-sunset.jpg?s=1024x1024&w=is&k=20&c=EuwAQgptF73BKCwFbMUUyWgZfDl8oPTLpwOow2E-Ueo=", "https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/2865901/pexels-photo-2865901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/576494/pexels-photo-576494.jpeg", "https://images.pexels.com/photos/1510149/pexels-photo-1510149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1280162/pexels-photo-1280162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://imgs.search.brave.com/_AYeE8lS7t0pTekwaAgQSckOkT84SbmDFR2IB5ZuCjE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzA5L0tL/XyUyODEyNSUyOS5q/cGcvNTEycHgtS0tf/JTI4MTI1JTI5Lmpw/Zw","subha_1.png","https://static.toiimg.com/thumb/imgsize-23456,msid-92037952,width-600,resizemode-4/92037952.jpg","https://images.unsplash.com/photo-1613281512736-55bd4a24f0a6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://media.istockphoto.com/id/1204977605/photo/concept-of-teenage-love-or-affection-young-man-proposing-to-smiling-excited-girlfriend.jpg?s=1024x1024&w=is&k=20&c=E12noAXlsTrMz6aondcLwuMpmbTAq10ibhjxhuq6WX8=","https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.pexels.com/photos/1131575/pexels-photo-1131575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/3889785/pexels-photo-3889785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/1024963/pexels-photo-1024963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/2739305/pexels-photo-2739305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/1449670/pexels-photo-1449670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/1378723/pexels-photo-1378723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/1417255/pexels-photo-1417255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/258421/pexels-photo-258421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/792726/pexels-photo-792726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/1194036/pexels-photo-1194036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://media.istockphoto.com/id/650097030/photo/happy-couple-talking.jpg?s=1024x1024&w=is&k=20&c=qIjtzsANzCPZHaJxmP0DOwQ1woPu5OFiOoM_ByPz0s4=","https://cdn.pixabay.com/photo/2023/03/16/02/10/couple-7855777_1280.jpg","https://images.pexels.com/photos/694458/pexels-photo-694458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/1879877/pexels-photo-1879877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/3289156/pexels-photo-3289156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://imgs.search.brave.com/Ff5_WvuJPKAYEXyYVy91cULU-xV8OzZ_Fzc4nAkg3ls/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2JhL0hpcmFuX2lu/X0NvbmZlcmVuY2Uu/anBn","https://imgs.search.brave.com/pii5kawuHs0kGlhkbdpVlgZQEnYyqcoEsX-LnlEpedI/rs:fit:500:0:0:0/g:ce/aHR0cDovL3N0YXJz/dW5mb2xkZWQuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzA3L0Rldi5qcGc","https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/1134204/pexels-photo-1134204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/805002/pexels-photo-805002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/247908/pexels-photo-247908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/1066801/pexels-photo-1066801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/9266931/pexels-photo-9266931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]
function convertSecondsToMinutesAndSeconds(seconds) {
    // Calculate minutes and remaining seconds
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Format seconds with leading zeros if needed
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

    return `${minutes}:${formattedSeconds}`;
}

unic1.addEventListener("click",()=>{
unic1.style.background="red"

})
unic2.addEventListener("click",()=>{
    unic2.style.background="red"
    
    })



let w=document.body.getElementsByClassName("name")[0].firstElementChild
let l=prompt("enter your name short name")
w.innerHTML="hello "+l
alert(` from now, ${l} you are my new friend=>SUBHA, let's go we listen your favourite song`)
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
rightunder10.addEventListener("click", function () {
    i = 35
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
rightunder9.addEventListener("click", function () {
    i = 34
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
rightunder8.addEventListener("click", function () {
    i = 33
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
rightunder7.addEventListener("click", function () {
    i = 32
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
rightunder6.addEventListener("click", function () {
    i = 31
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
rightunder5.addEventListener("click", function () {
    i = 30
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
rightunder4.addEventListener("click", function () {
    i = 29
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
rightunder3.addEventListener("click", function () {
    i = 28
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
rightunder2.addEventListener("click", function () {
    i = 27
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
rightunder1.addEventListener("click", function () {
    i = 26
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
rightunderz.addEventListener("click", function () {
    i = 25
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
rightundery.addEventListener("click", function () {
    i = 24
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
rightunderw.addEventListener("click", function () {
    i = 23
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
rightunderv.addEventListener("click", function () {
    i = 22
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
rightunderu.addEventListener("click", function () {
    i = 21
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
rightundert.addEventListener("click", function () {
    i = 20
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
rightunders.addEventListener("click", function () {
    i = 19
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
rightunderr.addEventListener("click", function () {
    i = 18
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
rightunderq.addEventListener("click", function () {
    i = 17
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
rightunderp.addEventListener("click", function () {
    i = 16
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
rightundero.addEventListener("click", function () {
    i = 15
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

rightunderi.addEventListener("click", function () {
    i = 9
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
rightunderj.addEventListener("click", function () {
    i = 10
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
rightunderk.addEventListener("click", function () {
    i = 11
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
rightunderl.addEventListener("click", function () {
    i = 12
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
rightunderm.addEventListener("click", function () {
    i = 13
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
rightundern.addEventListener("click", function () {
    i = 14
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