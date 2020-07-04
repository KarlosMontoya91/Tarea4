var pacman2;
var pacman;
var angulo;
var x = 200;
var y = 200;
var velx = 200;
var vely = -200;
function setup() {
  createCanvas(400, 400);
  angulo= PI/4
   console.log(keyCode);        
}

function draw() {
  background(0);
  pacman();
    console.log(keyCode);

  if(keyCode == 39){
    x = x + 1
    } 
  if (keyCode == 37){
    x = x - 1
  } 
  if (keyCode == 40){
    y = y + 1
  } 
  if (keyCode == 38){
    y = y - 1
  }
  if (x > 400){
    x = 0;
  }
  if (x < 0){
    x = 400
  }
  if (y > 400){
    y = 0;
  }
  if (y < 0){
    y = 400
  }
}
 
  function pacman(){
  translate(x, y);    
  if (keyCode == 37){
  rotate(PI)  
  } else if (keyCode == 38){
  rotate(PI*2-(PI/2)) 
  } else if (keyCode == 40){
  rotate(PI/2)  
  } 
   
   fill('#FFFF00');
   arc(0, 0, 75, 75, angulo,7* (angulo));
    
  fill(0);
  if (keyCode == 37){
   circle(0,20,10,10);
  } 
  else {
  circle(0,-20,10,10);
  
  } 
    
}
