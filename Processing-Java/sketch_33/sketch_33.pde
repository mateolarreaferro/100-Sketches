float a = 0.0;
float aVelocity = 0.0;
float aAcceleration = 0.001;



void setup()
{
  size(700, 700);
  background(100, 100, 200);
  smooth();
  stroke(255);
 
  
}

void draw(){
  
   
  aAcceleration = map(mouseX, 0, width, -0.005, 0.005);
  noCursor();  
  
  a += aVelocity;
  aVelocity += aAcceleration;
  
  
  for (int i = 0; i < 360; i+=24){
  pushMatrix();
  // move the origin to the pivot point
  translate(width/2, height/2); 
  
  // then pivot the grid
  rotate(radians(i + a));
  
  // and draw the square at the origin
  fill(random(100), random(255), 91);
  triangle(20, 20, 20, 100, 100, 400);
  popMatrix();
  }
}
