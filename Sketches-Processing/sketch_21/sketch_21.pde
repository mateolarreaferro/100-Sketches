int linesNumber = int(random(10, 300));
int rectNumber = int(random(10, 300));

void setup(){
  size(800, 800);
  background(random(255));
  
  
    noFill();
  strokeWeight(3);
    stroke(random(255), 10, random(255));
  
  ellipse(width/2, height/2, 600, 600);
  
  //lines
  strokeWeight(1);
  fill(random(255));
  stroke(0, 10, random(255));
  for(int i = 0; i < linesNumber; i++){
    line(random(width), random(height), random(width), random(height));
  }
  
  //rectangles
  
  strokeWeight(2);
  noFill();
    stroke(0, random(255), random(255));
  for (int j = 0; j < rectNumber; j++){
    rect(random(width), random(height), 10, 10);
  }
  
  

}
