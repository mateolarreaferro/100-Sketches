void setup(){
size(400, 400, P2D);
}

void draw(){

  
  stroke(random(0, 255), random(0, 255), random(0, 255), random(100, 255));
  line(random(0, width/2), random(0, height/2) , random(0, width/2), random(0, height/2)); 
  
  stroke(random(0, 255), random(0, 255), random(0, 255), random(100, 255));
  line(random(width / 2, width), random(0, height/2), random(width / 2, width), random(0, height/2));
  
  stroke(random(0, 255), random(0, 255), random(0, 255), random(100, 255));
  line(random(0, width/2), random(height/2, height), random(0, width/2), random(height/2, height));
  
  stroke(random(0, 255), random(0, 255), random(0, 255), random(100, 255));
  line(random(width / 2, width), random(height/2, height), random(width / 2, width), random(height/2, height));


}
