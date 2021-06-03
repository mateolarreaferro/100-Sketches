color [] colors = {color(102, 102, 155), color(255, 51, 255), color(51, 255, 255), color(255, 0, 127)};

void setup(){
size(1000, 800);
background(255);
MakeCircles();
MakeRect();
}

void MakeCircles(){
  
  for (int i = 0; i < 1000; i++){
  
  fill(colors[(int)random(0, 3)], random(100, 255)); 
  float circleSize = random(30, 100);
  ellipse(random(0, width), random(0, height), circleSize, circleSize);
  
  }
}
  
  void MakeRect(){
  
  for (int i = 0; i < 1000; i++){
  
  fill(colors[(int)random(0, 3)], random(100, 255)); 
  rect(random(0, width), random(0, height), random(10, 150), random(10, 150));
  
  }
  
}
