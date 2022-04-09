function setup() {
  createCanvas(700, 700, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(30);
  
  rotateX(60);
  scale(1.5);
  
  noFill();
  stroke(255);
  
  
  for (var i = 0 ; i < 50; i++){
    
    var r = map(sin(frameCount), -1, 1, 100, 200);
    var g = map(i, 0, 20, 100, 200);
    var b = map(cos(frameCount), -1, 1, 200, 100);
    
    stroke(r, g, b);
    
    rotate(frameCount / 20);
    
    beginShape();
    
    for (var j = 0; j < 360; j += 60){
      var rad = i * 3;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount * 2 + i * 5) * 50;
      
      var noisy = noise(0, 0.9)
      
      point(x * noisy , y, z);
      vertex(x * noisy, y, z);
    }
    
    
    endShape(CLOSE);
  }
}