class Planet {
  
  float radius;
  float angle;
  float distance;
  float orbitSpeed;
  PVector v;
  
  Planet[] planets;
  
  Planet(float r, float d, float o) {
   
   v = PVector.random3D();
   radius = r;
   distance = d;
   v.mult(distance);
   angle = random(TWO_PI);
   orbitSpeed = o;

}


void orbit(){
  angle = angle + orbitSpeed;
  if(planets != null) {
    for (int i = 0; i <planets.length; i++) {
      planets[i].orbit();
    }
  }
}
  


void spawnMoons(int total, int level) {
  planets = new Planet[total];
  for (int i = 0; i < planets.length; i++) {
    
    
    
    float r = radius/(level*1.3);
    float d = random((radius + r), (radius + r) *2);
    float o = random(-0.05, 0.05);
    
    planets[i] = new Planet(r, d, o);
    if (level < 2) {
     int num = int(random(0, 3));
    planets[i].spawnMoons(num, level + 2);
  }
  }
  
}

void show() {
  
  pushMatrix();
  noStroke();
  fill(100);
  PVector v2 = new PVector(1,0,1);
  PVector p = v.cross(v2);
  rotate(angle, p.x, p.y, p.z);
  
  stroke(random(100, 200), random (80, 100), random(100,150), random(100, 255));
  strokeWeight(5);
  line(0, 0, 0, v.x, v.y, v.z);
 
  
  translate(v.x, v.y, v.z);
  noStroke();
  fill(random(110,200), random(100, 150), random(100, 240), random(100, 215));
  box(radius);
  
  if(planets != null){
  
  for (int i = 0; i < planets.length; i++) {
    planets[i].show();
    }
  }
  popMatrix();
  }
}
