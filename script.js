var timer = 60;
var score=0;
var hitrn=0;
var check=false;

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent=hitrn;
}

function IncreaseScore(){
    score += 10;
    document.querySelector('#scoreval').textContent=score;
}

// function runTimer(){
//       var timerint = setInterval(function(){
//         if(timer>0){
//         timer--;
//         document.querySelector('#timerval').textContent = timer;
//         }
//         else{
//         clearInterval(timerint);
//         document.querySelector('#pbtm').innerHTML="<h1>Game Over!</h1>";
//     } 
//     },1000);
//  }

function makeBubble(){
    var clutter = "";

    for(var i=1;i<=168;i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div id="bubble">${rn}</div>`;
    }
    
    document.querySelector('#pbtm').innerHTML = clutter;
}


function startgame(){
    function runTimer(){
        var timerint = setInterval(function(){
          if(timer>0){
          timer--;
          document.querySelector('#timerval').textContent = timer;
          }
          else{
          clearInterval(timerint);
          document.querySelector('#pbtm').innerHTML="<h1>Game Over!</h1>";
      } 
      },1000);
   }
   runTimer();
}

document.querySelector('#pbtm').addEventListener('click',function(dets){
    if(check == false){
        startgame();
        check=true;  
    }

    // console.log(dets.target.textContent);
    var clickednum = Number(dets.target.textContent);
    // console.log(rn);

    if(clickednum === hitrn){
        IncreaseScore();
        getNewHit();
        makeBubble();
    }
})

// runTimer();
getNewHit();
makeBubble();
// IncreaseScore();
