
void setup()
{
  size(800, 800);
  noFill();
  stroke(0);
  strokeWeight(sin(random(1, 3)));
  
}

float t = 0;
float p = 0;

void draw() {
  background(random(0, 255), 0, random(0, 255));

  
  
  
  for (int a = 0; a < 30; a++) {
    
    beginShape();
  translate(width/2 + t, height / 2 + t);
  
  //add some vertices...
  
  for (float theta = 0; theta <= 2 * PI; theta += 0.001) {
   float rad = r(theta,
   random(2, 4), //a
   20, //b
   random(2, 9), //m
   random(1, 3), //n1
   sin(t) * random(0.2, 0.7) + 0.5, // n2
   cos(t) * random(0.5, 0.9) + 0.5 //n3
   );
   
   float x = rad * cos(theta) * random(10, 60);
   float y = rad * sin(theta) * random(10, 60);
   
   vertex(x + random(0.1, 0.9), y);
  }
  endShape();
  
  t += 0.1;
  p += 1;
  }
}
  
 
  


float r(float theta, float a, float b, float m, float n1, float n2, float n3)  {
  return pow(pow(abs(cos(m * theta / 4.0) / a), n2) + pow(abs(sin(m * theta / 4.0) / b), n3), -1.0 / n1);
}
