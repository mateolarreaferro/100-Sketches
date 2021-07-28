/**
 * Brownian motion. 
 * 
 * Recording random movement as a continuous line. 
 */
 
int num = 1000;
int range = 6;

float[] ax = new float[num];
float[] ay = new float[num]; 
float[] aZ = new float[num];

float[] bx = new float[num];
float[] by = new float[num]; 
float[] cx = new float[num];
float[] cy = new float[num]; 


void setup() 
{
  size(600, 600, P3D);
  for(int i = 0; i < num; i++) {
    ax[i] = width/2;
    ay[i] = height/2;
    aZ[i] = height/2;
    bx[i] = width/2;
    by[i] = height/2;
    cx[i] = width/2;
    cy[i] = height/2;
  }
  frameRate(30);
  background(50);
}

void draw() 
{
  //background(0);
  
  // Shift all elements 1 place to the left
  for(int i = 1; i < num; i++) {
    ax[i-1] = ax[i];
    ay[i-1] = ay[i];
    aZ[i-1] = aZ[i];
    bx[i-1] = bx[i];
    by[i-1] = by[i];
    cx[i-1] = cx[i];
    cy[i-1] = cy[i];
  }

  // Put a new value at the end of the array
  ax[num-1] += random(-range, range);
  ay[num-1] += random(-range, range);
  aZ[num-1] += random(-range, range);
  
  bx[num-1] += random(-range, range);
  by[num-1] += random(-range, range);
  
  cx[num-1] += random(-range, range);
  cy[num-1] += random(-range, range);
  


  // Constrain all points to the screen
  ax[num-1] = constrain(ax[num-1], 0, width);
  ay[num-1] = constrain(ay[num-1], 0, height);
  aZ[num-1] = constrain(aZ[num-1], 0, height);
  
  bx[num-1] = constrain(bx[num-1], 0, width);
  by[num-1] = constrain(by[num-1], 0, height);
  
  cx[num-1] = constrain(cx[num-1], 0, width);
  cy[num-1] = constrain(cy[num-1], 0, height);
  
  
  // Draw a line connecting the points

  for(int i=1; i<num; i++) {    
    float val = float(i)/num * 204.0 + 51;
    stroke(val);
    strokeWeight(2);
    
    line(ax[i-1], ay[i-1], aZ[i-1], ax[i], ay[i], aZ[i]);
  }
    for(int i=1; i<num; i++) {  
    float val2 = float(i)/num * 204.0 + 51;
    stroke(val2);
    strokeWeight(1);
  
    line(bx[i-1], by[i-1], bx[i], by[i]);
  }
  
   for(int i=1; i<num; i++) {  
    float val3 = float(i)/num * 204.0 + 51;
    stroke(val3);
    strokeWeight(3);
  
    line(cx[i-1], cy[i-1], cx[i], cy[i]);
  }
}
