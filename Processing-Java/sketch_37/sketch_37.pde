  
void setup() {
  size(1000, 1000, P3D); 
  frameRate(60);
  
}

void draw() {
  noCursor();
  //background(0);
  stroke(random(255), random(255), random(255));
  
  lights();
 
  
  float wave = sin(frameRate) * 5;
  
  for (int i = 0; i < 10000; i++){
    
  translate(i * 5, i *5, i * 5);
  rotateX( i * random(1));
  rotateY(i * random(2));
  fill(random(255));
  sphereDetail(mouseX/ 8);
  box(5 * wave);
  }
}
