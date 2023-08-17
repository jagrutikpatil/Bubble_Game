

// --------------------------------------------Bubble part-----------------------------------------------------
function Bubble(){
let clutter=" ";

for (let i=1; i<=152; i++){
    let rn=Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rn}</div>`
}
document.querySelector('.bottomPortion').innerHTML=clutter
}
// ----------------------------------------------------------------


//-----------------------------------------hit part--------------------------------------------------------
var rn=0
function newHit(){
    rn=Math.floor(Math.random()*10)
    document.querySelector('#hit').textContent=rn;
}
//-Timer---------------------------------------------------------------



//------------------------------------- Score -----------------------------------------------------------------
var timer=60;
function runTimer(){
    var timeint=setInterval(function(){
        if(timer>0){
            timer --;
            document.querySelector('#timeval').textContent=timer;
        }else{
            clearInterval(timeint);
            document.querySelector('.bottomPortion').innerHTML=`
            <img src="./img GAme over.png" alt="img">
            `;
        }
    },1000);
}
//-----------------------------------------------------------------------

//------------------------------------- Score -----------------------------------------------------------------
var score=0;
function scorerec(){
score += 10;
document.querySelector('#scoreval').textContent=score;
}

//-----------------------------------------------------------------------


// ------------------------------Bubble Events ----------------------------------------------------------------
document.querySelector('.bottomPortion').addEventListener('click',function(dets) {
    var clickNum=(Number(dets.target.textContent));
    // alert('hii');
    if(clickNum===rn){
        scorerec();
        Bubble();
newHit();

    }
})
//-----------------------------------------------------------------------


runTimer();
Bubble();
newHit();
// scorerec();
// scorerec();

