PImage img;

void setup(){
  size(800, 1200, P3D); //Makes 3D
  img = loadImage("mateo.jpg");
  img.resize(800,1200);
}

void draw(){
  
  background(#f1f1f1);
  fill(0);
  noStroke();
  sphereDetail(3);
   
   
   float tiles = mouseY;
   float tileSize = width/tiles;
   
   push(); //coordinate system
   translate(width/2, height/2);
   
   rotateY(radians(frameCount));
   
   for (int x = 0; x < tiles; x++){
     for (int y = 0; y < tiles; y++){
       color c = img.get(int(x * tileSize), int(y * tileSize)); //get gives you color of the pixel
       float b = map(brightness(c), 0, 255, 1, 0); //calculates the brigthness of that pixel
       
       float z = map(b, 0, 1, -100, 100);
       
       push(); //Check out what this does
       
       translate(x*tileSize - width/2, y*tileSize - height/2, z);
       sphere(tileSize*b*0.5);
       pop(); //Check out
     }
   }
   pop();


}  
