void setup()
{
  size(600, 600);
  background(10);
  smooth();
  stroke(255);
 
  for (int i = 0; i < 360; i+=18){
  pushMatrix();
  // move the origin to the pivot point
  translate(width/2, height/2); 
  
  // then pivot the grid
  rotate(radians(i));
  
  // and draw the square at the origin
  fill(random(255), random(255));
   rect(0, 0, 50, 90);
  popMatrix();
  }
}
