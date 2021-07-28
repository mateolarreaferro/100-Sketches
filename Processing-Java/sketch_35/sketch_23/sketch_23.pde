import peasy.*;

Planet sun;

PeasyCam cam;


void setup(){
  background(20);
  noCursor(); //hides mouse
  size(900, 900, P3D);
  cam = new PeasyCam(this, 4000);
  sun = new Planet(100, 0, 0.00001);
  sun.spawnMoons(10, 1);
  
}

void draw() {
  //background(20);
  lights();
  //translate(width/2, height/2);
  sun.show();
  sun.orbit();
  noCursor();
}
