int[] values = new int[100];
int[] positions = new int[100];
void setup(){
  size(1400, 800);
  frameRate(30);
  for(int i = 0; i < values.length; i++){
    values[i] = (int) random(100, 600);
    positions[i] = (int) random(0, width);
  }
}

void draw(){
  
  background(20);
  fill(random(255), 0, 100);
  strokeWeight(1);
  
  
  float wave = sin(radians(frameCount));
  float wave2 = cos(radians(frameCount));
  
  for (int i = 1; i < values.length; i++){
  ellipse(positions[i]+ wave * values[i], i * 70 + wave2 * values[i], 30, 30);
  }
  
  fill(random(0, 255));
    for (int i = 1; i < values.length; i++){
  rect(positions[i]+ wave * values[i], i * 120 + wave2, 30, 30);
  
  }
  
    fill(100, 0, random(255));
    for (int i = 1; i < values.length; i++){
  rect(positions[i] + 100 + wave * values[i], i * 120 + wave2, 30, 30);
  
  }


}
