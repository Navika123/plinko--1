function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
var particle =  [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
{for(var k =0; k <= innerWidth; k=k+80){
  divisionHeight.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}


function draw() {
  background(255,255,255);  
  drawSprites();
}