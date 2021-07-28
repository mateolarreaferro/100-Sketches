  
void setup() {
  size(1000, 1000, P3D); 
  frameRate(10);
  
}

void draw() {
  noCursor();
  background(0);
  stroke(255, 50);
  translate(width/2, height/2, 0);
  lights();
 
  
  float wave = sin(frameRate) * 5;
  
  for (int i = 0; i < 100; i++){
  rotateX( i * 0.9);
  rotateY(i * 0.05);
  fill(random(150), random(wave), random(100));
  sphereDetail(mouseX/ 8);
  sphere(100 * wave);
  }
}
