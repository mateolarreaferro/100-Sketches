// Global Variables

float x = 260;
float y = 260;
float angle;
float diameter = 8;

void setup(){
  size(800, 800);
  background(0);
  //surface.setLocation(987, 70);
}


void draw(){
  //background(0);
  
  translate(width/2, height/2);
  
  for (float a = 0; a < 360; a += 5){
    pushMatrix();
    rotate(radians(a));
    stroke(random(255), 100, 155, random(255));
    strokeWeight(1);
    line(x * sin(radians(angle)), random(100), 100, y);
    fill(255);
    ellipse(x * sin(radians(angle)), 100, diameter, diameter);
    popMatrix();
  }
  angle++;
}
