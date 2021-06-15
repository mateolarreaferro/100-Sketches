class Planet {
  
  float radius;
  float angle;
  float distance;
  float orbitSpeed;
  
  Planet[] planets;
  
  Planet(float r, float d, float o) {
   radius = r;
   distance = d;
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
    float d = radius + r;
    float o = random(-0.1, 0.1);
    
    planets[i] = new Planet(r, d, o);
    if (level < 2) {
     int num = int(random(0, 4));
    planets[i].spawnMoons(num, level + 1);
  }
  }
  
}

void show() {
  
  pushMatrix();
  
  fill(random(255), random(255), random(255), 70);
  rotate(angle);
  translate(distance, 0);
  
  
  rect(0, 0, radius*2, radius*2);
  if(planets != null){
  
  for (int i = 0; i < planets.length; i++) {
    planets[i].show();
    }
  }
  popMatrix();
  }
}
