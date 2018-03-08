var illusions = 7;
var current = 1;
var active = true;
var i = 0;
var xStartingPoint = [];
var yStartingPoint = [];
var xSpeed = [];
var ySpeed = [];

function setup() {
  createCanvas(800, 800, P2D);
  background('#FFFFFF');
  ballsSetup();
}

function draw() {
  background(255);
  push();
  if(mouseIsPressed){
    fill(0);
  } else {
    fill(255);
  }
  switch ( current ) {
    case 1:
      resizeCanvas(800, 800, true);
      scintillating();
      break;
    case 2:
      resizeCanvas(500, 500, true);
      whitesilu();
      break;
    case 3:
      resizeCanvas(400, 400, true);
      mbind();
      break;
    case 4:
      resizeCanvas(600, 500, true);
      anstis();
      break;
    case 5:
      createCanvas(800, 100);
      //resizeCanvas(800, 100, true);
      bars();
      break;
    case 6:
      resizeCanvas(600, 600, true);
      biohazard();
      break;
    case 7:
      resizeCanvas(800, 380, true);
      balls();
      break;
  }
  pop();
  // ellipse(mouseX, mouseY, 80, 80)
}

function keyPressed() {
  if (key == ' '){
    current = current < illusions ? current+1 : 1;
  }
  if (key == 'A'){
    active = !active;
    console.log( active );
  }
}

function scintillating() {
  background(0);          // black background

  //style
  strokeWeight(3);        // medium weight lines
  smooth();               // antialias lines
  stroke(100, 100, 100);  // dark grey colour for lines

  var step = 25;          // grid spacing

  //vertical lines
  for (var x = step; x < width; x = x + step) {
    line(x, 0, x, height);
  }

  //horizontal lines
  for (var y = step; y < height; y = y + step) {
    line(0, y, width, y);
  }

  // Circles
  if (active) {
    ellipseMode(CENTER);
    stroke(255, 255, 255);  // white circles
    for (var i = step; i < width -5; i = i + step) {
      for (var j = step; j < height -15; j = j + step) {
        strokeWeight(6);
        point(i, j);
        strokeWeight(3);
      }
    }
  }
}

function whitesilu(){
  noStroke();
  for( var i = 1; i < height/25; i+=2 ){
    fill( 0, 0, 0 );
    rect( 0, 25*i, 300, 25 );
    rect( 400, 25*i, 300, 25 );
    fill( 100, 100, 100 );
    rect( 300, 25*i, 100, 25 );
    rect( 100, 25*(i-1), 100, 25 );
  }
  if(!active){
    noStroke();
    fill( 0, 0, 0 );
    for( var i = 1; i < height/25; i+=2 ){
      rect( 0, 25*(i-1), 100, 25);
      rect( 200, 25*(i-1), 300, 25);
    }

  }
}

var ox1 = -20, oy1 = -20, ox2 = 0, oy2 = 0;
var s1 = true, s2 = true;
var speed = 1;

function mbind(){
  background( 180, 180, 180 );
  var o = 20;
  strokeWeight(2);
  line( 100+o+ox1, 200-o+oy1, 200-o+ox1, 100+o+oy1 );
  line( 200+o+ox2, 100+o+oy2, 300-o+ox2, 200-o+oy2 );
  line( 300-o+ox1, 200+o+oy1, 200+o+ox1, 300-o+oy1 );
  line( 200-o+ox2, 300-o+oy2, 100+o+ox2, 200+o+oy2 );

  if( s1 ){
    ox1 += speed;
    oy1 += speed;
    if( ox1 == 20 && oy1 == 20 ){
      s1 = false;
    }
  }
  else {
    ox1 -= speed;
    oy1 -= speed;
    if( ox1 == -20 && oy1 == -20 ){
      s1 = true;
    }
  }

  if( s2 ){
    ox2 += speed;
    oy2 -= speed;
    if( ox2 == 20 && oy2 == -20 ){
      s2 = false;
    }
  }
  else {
    ox2 -= speed;
    oy2 += speed;
    if( ox2 == -20 && oy2 == 20 ){
      s2 = true;
    }
  }

  if( !active ){
    noStroke();
    ellipseMode(RADIUS);
    fill( 140, 10, 20 );
    ellipse(100,200,40,40);
    ellipse(200,100,40,40);
    ellipse(300,200,40,40);
    ellipse(200,300,40,40);
  }
}

var oc = 0, cnt = 0;
var anstate = true;

function anstis(){
  if( active ){
    stroke(0);
    strokeWeight(13);
    for( var i = 0; i <= width/25; i += 1 ){

      line( 25*i, 0, 25*i, height );
    }
  }
  noStroke();
  fill(255, 255, 80);
  rect(0+oc, 200, 50, 20);
  fill(0, 0, 80);
  rect(0+oc, 280, 50, 20);
  if( true ){
    if( anstate ){
      oc += 1;
      if( oc == width - 50 ){ anstate = false; }
    }
    else{
      oc -=1 ;
      if( oc == 0 ){ anstate = true; }
    }
  }
  cnt += 1;
}
function bars(){
  background(255);
  fill(0);
  while(i < 800){
    rect(i, 0, 16, 100);
    i += 32;
  }
  if(frameCount % 2 == 0)
    i = 16;
  else
    i = 0;
}
function biohazard(){
   background(125);
  translate(width/2, height/2);
  noStroke();
  fill(0,255,0);
  ellipse(0,0,450,450);
  fill(255,0,0);
  ellipse(0,0,350,350);
  //pushMatrix();
  push();
  fill(0,255,0);
  rotate(frameCount*radians(90) / 40);
  translate(0, 90);
  triangle(-90, 90, 0, -90, 90, 90);
  rotate(radians(120));
  translate(-77, 133);
  triangle(-90, 90, 0, -90, 90, 90);
  rotate(radians(120));
  translate(-77, 133);
  triangle(-90, 90, 0, -90, 90, 90);
  pop();
  //popMatrix();
  fill(255,0,0);
  ellipse(0,0,100,100);
  //rotate(frameCount*radians(90) / 30);
  fill(255);
  ellipse(0,0,10,10);
  fill(0);
  ellipse(0,0,5,5);
}

function ballsSetup(){
  //initialization for first layer circles
  for(j = 0; j <30; j++){
    xStartingPoint[j] = random(20, 780);
    yStartingPoint[j] = random(20, 360);
    ySpeed[j] = random(0.4, 0.8);
  }
  //initialization for second layer circles
  for(j = 30; j <70; j++){
    xStartingPoint[j] = random(20, 780);
    yStartingPoint[j] = random(20, 360);
    xSpeed[j] = random(-5,-8);
    ySpeed[j] = random(-0.3, 0.3);
  }
  //initialization for the third layer circles
  for(j = 70; j <110; j++){
    xStartingPoint[j] = random(20, 780);
    yStartingPoint[j] = random(20, 360);
    xSpeed[j] = random(6, 9);
    ySpeed[j] = random(-0.3, 0.3);
  }
}

function balls(){
    background(225);  
  fill(0);
  //movement for first layer cicrcles
  for(j = 0; j < 30; j++){
    
    ellipse(xStartingPoint[j], yStartingPoint[j], 15, 15);
    //photo.resize(15,15);
    //image(photo,xStartingPoint[j],yStartingPoint[j]);
    yStartingPoint[j] += ySpeed[j];
    if (yStartingPoint[j] > 380) {
      yStartingPoint[j] = -7;
      xStartingPoint[j] = random(0,780);
    }
  }
  //movement for second layer cicrcles
  
  for(j = 30; j < 70; j++){
    
    ellipse(xStartingPoint[j], yStartingPoint[j], 15, 15);
    xStartingPoint[j] += xSpeed[j];
    yStartingPoint[j] += ySpeed[j];
    
    if (yStartingPoint[j] > 380 || yStartingPoint[j] < 0 || xStartingPoint[j] < 0) {
      yStartingPoint[j] = random(20, 360);
      xStartingPoint[j] = 807;
    }
  }
  //movement for third layer cicrcles
  for(j = 70; j < 110; j++){
    
    ellipse(xStartingPoint[j], yStartingPoint[j], 15, 15);
    xStartingPoint[j] += xSpeed[j];
    yStartingPoint[j] += ySpeed[j];
    
    if (yStartingPoint[j] > 380 || yStartingPoint[j] < 0 || xStartingPoint[j] > 800) {
      yStartingPoint[j] = random(20, 360);
      xStartingPoint[j] = -7;
    }
  }
}