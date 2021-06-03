PImage img;


void setup(){
  size(800, 1000);
  img = loadImage("lambs.JPG");
  img.resize(800, 900);
 //frameRate(x #)
}

void draw() {
background(255);

fill(10);
noStroke();

//image(img, mouseX, mouseY);

float tiles = mouseX/5;
float tilesSize = width/tiles;

translate(tilesSize/2, tilesSize/2);

for(int i = 0; i < tiles; i++){
  for(int j = 0; j < tiles; j++){
    
    color c = img.get(int(i* tilesSize), int(j*tilesSize));
    float size = map(brightness(c), 0, 255, tilesSize, 0);
    
    ellipse(i*tilesSize, j*tilesSize, size, size);
  }
}
    




}
