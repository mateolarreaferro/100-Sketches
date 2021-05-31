void setup(){
  size(500, 500);
  
  
  

}

void draw(){
  

  for (int a = 0; a < 10000; a++) {
    fill(random(0,255),random (0,255), random(0,255));
    rect(random(0, 500), random (0, 500), a, a);
  }
  
  
  
}
