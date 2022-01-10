// Global Variables

float x = 250;
float y = 250;
float angle;
float diameter = 5;

void setup(){
  size(800, 800);
  background(250);
  //surface.setLocation(987, 70);
  
}


void draw(){
  background(200);
  
  translate(width/2, height/2);
  fill(255, 255, 255, random(100));
  ellipse(0, 0, 500, 500);
  
  for (float a = 0; a < 360; a += 5){
    pushMatrix();
    rotate(radians(a));
    stroke(60, 50, 50);
    strokeWeight(4);
    line(x * sin(radians(angle)), y, y, y);
    //noFill();
    //rect(x * sin(radians(angle)), y, diameter, diameter);
    popMatrix();
  }
  angle++;
  
  
}
