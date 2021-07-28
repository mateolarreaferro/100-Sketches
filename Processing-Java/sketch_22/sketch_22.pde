Planet sun;


void setup(){
  
  size(600, 600);
  sun = new Planet(50, 0, 0.001);
  sun.spawnMoons(9, 1);
  background(0);
  
}

void draw() {
  
  translate(width/2, height/2);
  sun.show();
  sun.orbit();
}
