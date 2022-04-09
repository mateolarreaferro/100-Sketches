// 2D Points: cartesian (x, y, z) and polar (r, angle)
// 3D Points: cartesian and sperical

// fractal formula: z = z^n + c

// **** play with value

import peasy.*;

int DIM = 32; // ***
PeasyCam cam;

ArrayList<PVector> mandelbulb = new ArrayList<PVector>();

void setup() {
  size(800, 800, P3D);
  //frameRate(100);
  windowMove(1200, 100);
  cam = new PeasyCam(this, 500);
  
  
  for (int i = 0; i < DIM; i++) {
    for (int j = 0; j < DIM; j++) {
      for (int k = 0; k < DIM; k++) {
        
        boolean edge = false; //
        
        float x = map(i, 0, DIM, -1, 1);
        float y = map(j, 0, DIM, -1, 1);
        float z = map(k, 0, DIM, -1, 1);
        
        
       
        PVector zeta = new PVector(0,0,0);
        int n = 128; // ***** 2, 4, 8, 16, ....
        
        int maxiterations = 20;
        int iteration = 0;
        
        while (true) {
          
        // conveerting to spherical coordinates
        
        Spherical sphericalZ = spherical(zeta.x,zeta.y,zeta.z);
        
       
        // new x,y,z
        float newx = pow(sphericalZ.r,n) * sin(sphericalZ.theta*n) * cos(sphericalZ.phi*n);
        float newy = pow(sphericalZ.r,n) * sin(sphericalZ.theta*n) * sin(sphericalZ.phi*n);
        float newz = pow(sphericalZ.r,n) * cos(sphericalZ.theta*n);
        
        zeta.x = newx + x;
        zeta.y = newy + y;
        zeta.z = newz + z;
        
        iteration++;
        
        if (sphericalZ.r > 8){
          if (edge) {
            edge = false;
          }
          break;
        }
        
        // bounded
        if (iteration > maxiterations){
          edge = true;
          mandelbulb.add(new PVector(x*100, y*200, z*100));
          break;
        }
        
        
      }
    }
  }
 }
}

class Spherical {
  float r, theta, phi;
  Spherical(float r, float theta, float phi) {
    
    this.r = r;
    this.theta = theta;
    this.phi = phi;
  }
}

Spherical spherical(float x, float y, float z) {
  
   float r = sqrt(x*x + y*y + x*z);
   float theta = atan2(sqrt(x*x+y*y), z);
   float phi = atan2(y, x);
        
    return new Spherical(r, theta, phi);
}

  
void draw() {
  background(0);
  noCursor();
  
  for (PVector v : mandelbulb) {
    stroke(random(255), random(255), 200);
    point(v.x, v.y, v.z);
}
}
