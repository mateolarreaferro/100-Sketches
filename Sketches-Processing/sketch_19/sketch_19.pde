//Parametric Equations
// x = 5t
// y = 3t + 3
//x, y, t
static final int NUM_LINES = 20;

float t;

void setup(){
  background(100);
  size(800, 800);
}

void draw(){
  
  stroke(random(255), 40, random(255));
  strokeWeight(1);
  
  translate(width/2, height/2);
  //point(x1(t), y1(t));
  //point(x2(t), y2(t));
  
  for(int i = 0; i <NUM_LINES; i++){
  line(x1(t + i), y1(t+i), x2(t+i), y2(t+i)); 
  }
  t++;
}


float x1(float t) {
  
  return sin(t/10) * 100 + sin(t/10) * 100 + cos(t/12) * 200 + sin(t/20) * 400 + cos(t/30) * 200;
}

float y1(float t) {
  return cos(t/10) * 100 + sin(t/14) * 500 + cos(t/16) * 200 + sin(t/28) * 600 + cos(t/30) * 100 ;
}


float x2(float t) {
  
  return sin(t/10) * 100 + sin(t/12) * 400 + sin(t/22) * 500 + cos(t/12) * 200 + sin(t/20) * 100 + cos(t/30) * 200;
}

float y2(float t) {
  return cos(t/10) * 200 + cos(t/20) * 100 ;
}
