// Aman's Solo

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {

// Option 1

 background(0);
  
  rotateX(sin(frameCount * 0.1) * 180);
  scale(map(cos(frameCount * 0.01), 0, 1, 90, 100));
  
  noFill();
  
  

  
  
  for (var i = 0 ; i < 100; i++){
    
    var r = map(sin(frameCount), 0, width, 100, 155);
    var g = map(sin(frameCount), 0, width, 50, 255);
    var b = map(cos(frameCount), 0, 1, 10, 20);
    
    
    rotate(frameCount / 50);
    
    beginShape();
    
    for (var j = 0; j < 360; j += 60){
      var rad = i * 1;
      var x = rad * -sin(j);
      var y = rad * cos(j);
      var z = sin(frameCount * 2 + i * 1) * 60;
      
      var offset = 60;
      var offsetB = 10;
      stroke(b, g, r);
      line(x * offsetB, y - offset, z / offsetB, x / offset);
      //ellipse(x, y, z, z);
      //rect(x, y, z, z);
      
      
    }
    
    
    endShape(CLOSE);

  }
}

