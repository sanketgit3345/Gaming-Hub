let rat2 = document.getElementById("rat2");
let rat3 = document.getElementById("rat3");
let rat1 = document.getElementById("rat1");
let rat4 = document.getElementById("rat4");
let rat5 = document.getElementById("rat5");
let rat6 = document.getElementById("rat6");
let score = document.getElementById("score");
let count = 0;
let game = document.getElementById("game");
let youWin = document.getElementById("youwin");
let sound1 = document.getElementById("sound1")
let sound2 = document.getElementById("sound2");



setInterval(function(){
    let random = (Math.floor(Math.random()*6) + 1)
    let rat = "rat" + random 
   
    let ra = eval(rat)
    sound1.play()
    ra.classList.add("animate")
    setTimeout(function(){
        ra.classList.remove("animate")
    },1000)
    ra.onclick = function(){
        count++
        sound2.play()
        score.innerText = count
    }
},1000)

setInterval(function(){
    if(count > 2){
        youWin.style.display = "block";
        game.style.display = "none"
        sound1.pause()
    }
},10)