String [] words = {"HOY", "SKETCH", "HAY", "DIOS", "YO", "TODOS", "SABADO", "COMPUTADORA", "DIBUJO", 
"VIDA", "ERROR", "SENTIDO", "SIEMPRE", "AMOR", "ABSURDO", "SIGNIFICADO"};

String textHolder = "Hola";

int size = 500;


void setup(){
  size(600, 600);
  background(0);
  
  
  
  for (int i = 1; i < size; i++){
    Words();
    Squares();
    
  }
}

void Words(){
  textHolder = words[int(random(words.length))];
  textSize(random(5, 15));
  fill(random(255), random(255), random(255), random(100, 255));
  text(textHolder, random(width), random(height));
}

void Squares(){
  noFill();
  stroke(random(255), random(255), random(255), random(100, 255));
  rect(random(width), random(height), random(5, 30), random(5, 30));
}
