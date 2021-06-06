void setup(){
size(600, 600);
strokeWeight(4);
background(50);
}

void draw(){
//left down corner
for (int j = 0; j < 500; j += 10)
for(int i = 0; i < 4; i++){
  fill(random(0, 255), 0, 100);
  rect(1 * i * 20, 300 + j, 100, 400);
  
  fill(random(0, 255), 0, 50);
  rect(1 + i * 100, 1, 100, 100);
  
  fill(random(0, 255), 0, 255);
  rect(width - i * 100, 1 - j, 100, 100);
  
  fill(random(0, 255), 0, 0);
  rect(width - i * 100, height - j + 100, 50, 1 + j - 200);
  
  fill(random(100, 255), 0, 255);
  rect(width / 2 - 100, height - 200 + j, 40, 300);
  
  fill(random(100, 255), 0, 255);
  rect(1 + j - 200, height / 2 - 150, 100, 30);
  
  fill(random(100, 255), 0, 255);
  rect(1 + j - 400, height / 2 - 100, 100, 30);
  
  
}
  
//left up corner



}
