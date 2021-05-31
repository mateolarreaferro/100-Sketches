void setup(){
size(1000, 1000);

}

void draw() {
background(0); //black background

stroke(0, 100, 100);
strokeWeight(4); //defines thickness of stroke
noFill(); //transperency 

//CREATE WAVES
float wave = sin(frameCount * 0.01) *10;


for (int i = 20; i < width; i += 20){

  for(int j = 20; j < height; j += 20){
    
    
    ellipse(j ,i, 20 + wave, 20 + wave); 
    
  }
}
stroke(255);
strokeWeight(4); //defines thickness of stroke
noFill(); //transperency 

//CREATE WAVES
float secondWave = sin(frameCount * 0.01) *10;


for (int i = 20; i < width; i += 20){

  for(int j = 20; j < height; j += 20){
    
    
    rect(j ,i, 20 + wave, 20 + secondWave); 
    
  }
}

}
