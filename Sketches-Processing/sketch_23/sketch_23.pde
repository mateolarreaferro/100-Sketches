import peasy.*;

Planet sun;

PeasyCam cam;


void setup(){
  noCursor(); //hides mouse
  size(600, 600, P3D);
  cam = new PeasyCam(this, 500);
  sun = new Planet(50, 0, 0.00001);
  sun.spawnMoons(6, 1);
  
}

void draw() {
  background(20);
  lights();
  //translate(width/2, height/2);
  sun.show();
  sun.orbit();
}
