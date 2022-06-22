// Funny Sines

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  //setInterval(changeColor, 1000);
}

function draw() {
  background(sin(frameCount * 0.05) * 255);
  stroke(10 + (cos(frameCount * 0.05) * 255));
  
  rotateX(0);
  scale(sin(frameCount * 0.05) * 15);
  
  noFill();
  strokeWeight(1.6);
  
  
  for (var i = 0 ; i < 100; i++){
    
    
    
    
    rotate(frameCount / 20);
    
    beginShape();
    
    for (var j = 0; j < 360; j += 60){
      var rad = i * 3;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount * 2 + i * 5) * 50;
      
      var noisy = noise(0, 0.9)
      
      //point(x * noisy , y, z);
      vertex(x * noisy, y, z);
    }
    
    
    endShape(CLOSE);
  }
}

function mouseClicked(){
  
  console.log("ok!");
  stroke(255);
  
}
  
