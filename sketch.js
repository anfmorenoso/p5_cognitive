var illusions = 4;
var current = 1;
var active = true;

function setup() {
  createCanvas(800, 800, P2D);
  background('#FFFFFF');
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
