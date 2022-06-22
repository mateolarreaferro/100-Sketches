// El Pulpo

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  
    var r = map(sin(frameCount), -1, 1, 100, 200);
    var g = map(cos(frameCount), 0, 20, 100, 200);
    var b = map(cos(frameCount), -1, 1, 200, 100);
  
  background(0);
  rotateX(sin(frameCount / 20) * 90);
  noFill();
  scale(sin(frameCount / 40) * 10);
  
  for (var i = 0 ; i < 100; i++){
    
  
    stroke(r, r, r);
    
    rotateY(100);
    rotateZ(frameCount / 200);
    rotate(sin(frameCount / 100) * 50);
    
    
    beginShape();
    
    for (var j = 0; j < 80; j += 40){
      var rad = i * 10;
      var x = rad * -cos(j);
      var y = rad * sin(i);
      var z = sin(frameCount / 2) * 10 + 5;
      
      strokeWeight(sin(frameCount/10) * 1 + 0.001);
      //triangle(z, z, x , y, y, z);
      //rect(x, y, z, z);
      rect(z, x, y, y);
      
    }
    
    endShape(CLOSE);
  }
}