const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const getScore = document.getElementById('score');
const btnstart = document.getElementById('btnStart');
const btnRestart = document.getElementById('btnReStart');
btnRestart.style.display = "none";
let x =5;

let ballX=20;
let ballY=20;
let flagx = false;
let flagy = false;
let flagover = false;
let t=100;
let score = 0;
let speed = 1.0;




slider(100);

ctx.strokeStyle = 'rgb(200, 0, 0)';
ctx.strokeRect(5, 5, 290, 390);

function gameStart(){
    start = setInterval(ballmove,10);
    btnstart.style.display = "none";
}

function gameReStart(){
    window.location.reload();
}


function ball(x,y){
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.arc(x,y,10,0,Math.PI*2);
    ctx.fill();   
    ctx.closePath(); 
}

function slider(x){
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(x, 370, 100, 10);
}

function ballmove(){
   if(speed==10){
       speed =2;
   }
    if(flagover){
        ctx.clearRect(10,10,280,380);
        ballY +=speed;
        if(flagx){
            ballX -= speed;
        }
        else{
            ballX += speed;
        }
        if(ballY==380){
            clearInterval(start);
            btnRestart.style.display = 'block';
        }
    }
    else{
    ctx.clearRect(10,10,280,360);
    if(ballX>=280){flagx=true;}
    if(ballY>=360){flagy=true;}
    if(ballX<=20){flagx=false;}
    if(ballY<=20){flagy=false;}
    if(flagx){
        ballX -= speed;
    }
    else{
        ballX += speed;
    }
    if(flagy){
        ballY -= speed;
    }
    else{
        ballY += speed;
    }
    if(ballX>=t && ballX<=(t+100) && ballY==360){
       score += 1;
       getScore.innerHTML = score;
    }
    else if(ballY==360){
        console.log("game over");
        flagover = true;
    }
}
    ball(ballX,ballY);
   // console.log(ballX,ballY);
}

//   let canvasWidth = canvas.width;
//   let canvasHeigth = canvas.height;
//   console.log(canvasHeigth,canvasWidth);
    canvas.addEventListener('click',function(event){
        x = event.x;
        if(x>150 ){
            if(t<180){
                t +=22;
            }
            ctx.clearRect(10, 370, 280, 10);
            slider(t);
        }
        else{
            if(t>20){
                t -=22;
            }
            ctx.clearRect(10, 370, 280, 10);
            slider(t);
        }
    });
