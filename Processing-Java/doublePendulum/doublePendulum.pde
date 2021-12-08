
float r1 = 200;
float r2 = 200;
float m1 = 40;
float m2 = 40;
float a1 = PI/2; //CONTROLS "MOVEMENT"
float a2 = PI/2; //CONTROLS "MOVEMENT"

float a1_v = 0;
float a2_v = 0;
float g = 0.3;

float px2 = -1;
float py2 = -1;


PGraphics tracingCanvas;


void setup(){
  size(800, 800);
  tracingCanvas = createGraphics(800, 800);
  tracingCanvas.beginDraw();
  tracingCanvas.background(255);
  tracingCanvas.endDraw();
  
}

void draw(){
  
  
  //Equation
  //#1
  float num1 = -g * (2 * m1 + m2) * sin(a1);
  float num2 = -m2 * g * sin(a1-2*a2);
  float num3 = -2*sin(a1-a2) * m2;
  float num4 = a2_v*a2_v*r2+a1_v*a1_v*r1*cos(a1-a2);
  float denominator = r1 * (2*m1+m2-m2*cos(2*a1-2*a2));
  
  float a1_a = (num1 + num2 + num3*num4)/denominator;
  
  //#2
  num1 = 2 * sin(a1-a2);
  num2 = (a1_v*a1_v*r1*(m1+m2));
  num3 = g * (m1 + m2) * cos(a1);
  num4 = a2_v*a2_v*r2*m2*cos(a1-a2);
  
  denominator = r2 * (2*m1+m2-m2*cos(2*a1-2*a2));
  
  float a2_a = (num1*(num2+num3+num4)) / denominator;
  
  
  
  image(tracingCanvas, 0, 0);
  stroke(0);
  strokeWeight(2);
  
  translate (400, 75);
  
  float x1 = r1 * sin(a1);
  float y1 = r1 * cos(a1);
  
  //Same but with offset from x1 and y1
  float x2 = x1 + r2 * sin(a2);
  float y2 = y1 + r2 * cos(a2);
  
  line(0, 0, x1, y1);
  fill(0);
  ellipse(x1, y1, m1, m1);
  
  line(x1, y1, x2, y2);
  fill(0);
  ellipse(x2, y2, m2, m2);
  
  //adjust velocity first
  a1_v += a1_a;
  a2_v += a2_a;
  a1 += a1_v;
  a2 += a2_v;
  
  
  
  
  tracingCanvas.beginDraw();
  tracingCanvas.translate(400, 75);
  tracingCanvas.strokeWeight(5);
  tracingCanvas.stroke(1);
  tracingCanvas.point(x2, y2);
  tracingCanvas.endDraw();
}
  
