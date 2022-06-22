function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  
 
  
  rotateY(sin(frameCount / 1000) * 360);
  
  
  
  
  background(0);
  
  for (var i = 0 ; i < 360; i++){
    beginShape();
    rotate(sin(frameCount / 1000) * 180);
    
    
    for (var j = 0; j < 1; j++){
          
          var rad = i * 1.0;
          var x = rad * -cos(i);
          var y = rad * sin(i);
          var z = sin(frameCount / 200) * 40 + 0.5;
      
      rotateX(sin(frameCount / 1000) * 360);
      rotateZ(sin(frameCount / 100) * 360);
      
      stroke(200, 0, 215);
      fill(266)
      strokeWeight(cos(frameCount / 10) * 2); 
          
      ellipse(x, y, z, z);
      
          
    }
    endShape(CLOSE);
  }
}