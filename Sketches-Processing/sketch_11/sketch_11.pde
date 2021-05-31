void setup() {
size(800, 800);
background(0);
}

void draw() {
    

    ellipse(random(0, 800), random (0, 800), 100, 100);
  
  for (int i = 0; i < 50; i++) {
   fill(random(0, 255), 100, 100);
  ellipse(400, 400, 10 * i, 10 * i);

  }
}
