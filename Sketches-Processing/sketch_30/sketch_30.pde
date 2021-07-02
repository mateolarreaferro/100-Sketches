//SKETCH #3
//Trigonometry Review


//Radians --> angle unit of measure
//whole circle is 2 PI



//global variables

float a = 0.0;
float aVelocity = 0.0;
float aAcceleration = 0.001;




void setup() {
  size(800, 800);
}

void draw(){
  background(0);
  
  aAcceleration = map(mouseX, 0, width, -0.001, 0.001);
  noCursor();  
  
  a += aVelocity;
  aVelocity += aAcceleration;
  
  rectMode(CENTER);
  stroke(0);
  fill(127);
  translate(width/2, height/2);
  rotate(a);
  fill(127);
  rect(0, 0, 500, 550);
  rotate(a);
  fill(0);
  rect(0, 0, 500, 300);
  rotate(a);
  fill(200);
  rect(0, 0, 300, 250);
  rotate(a);
  fill(255);
  rect(0, 0, 100, 200);
  rotate(a - random(0.01));
  fill(127);
  rect(0, 0, 64, 36);
  rotate(a - random(0.0001));
  fill(50);
  rect(0, 0, 20, 30);
  
  
}
  
