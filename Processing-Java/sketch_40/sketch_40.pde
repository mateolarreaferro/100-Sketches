float noiseScale = 0.07;

void setup(){
  size (1000, 700);
  background(random(255), random(255), random(255), random(255));


//Perlin Noise (0-1.0)

  for (int i = 0; i < 1000; i++){
    for (int y = 0; y < 700; y++){
      
      float n = 255.0 * noise(i * noiseScale, y * noiseScale);
      
      if ( n > 0.5){
      stroke(random(255), random(255), random(255), n);
      
      }
      if (n > 0.6) {
         stroke(random(255), random(255), random(255), n);
      }
         if (n > 0.7) {
         stroke(random(255), random(255), random(255), n);
      }
          if (n > 0.8) {
         stroke(random(255), random(255), random(255), n);
      }
          if (n > 0.9) {
         stroke(random(255), random(255), random(255), n);
      }
      
      point(i, y);
        
    }
  }

}
