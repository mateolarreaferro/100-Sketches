void setup() {
  size(400, 400);
}

void draw(){

 for (int i = 0; i < 40; i++){
   for (int j = 0; j < 40; j++) {
      
     fill(random(0, 255), random(0, 255), random(0, 255));
     ellipse(10 * i, 10 * j , 10 * j , 10 * i);
   
   }
   
 }


}
