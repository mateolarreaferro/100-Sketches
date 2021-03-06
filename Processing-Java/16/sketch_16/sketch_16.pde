//Parametric Equations
// x = 5t
// y = 3t + 3
//x, y, t
static final int NUM_LINES = 10;

float t;

void setup(){
  background(20);
  size(800, 800);
}

void draw(){
  background(20);
  stroke(random(0, 255), 0, random(0, 255));
  strokeWeight(5);
  
  translate(width/2, height/2);
  //point(x1(t), y1(t));
  //point(x2(t), y2(t));
  
  for(int i = 0; i <NUM_LINES; i++){
  line(x1(t + i), y1(t+i), x2(t+i), y2(t+i)); 
  }
  t++;
}


float x1(float t) {
  
  return sin(t/10) * 100 + sin(t/10) * 100;
}

float y1(float t) {
  return cos(t/10) * 100 ;
}


float x2(float t) {
  
  return sin(t/10) * 100 + sin(t/12) * 400;
}

float y2(float t) {
  return cos(t/10) * 200 + cos(t/20) * 100 ;
}
