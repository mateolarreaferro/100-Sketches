function setup() {
  createCanvas(800, 700, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  
  let frames = frameCount;
  
  background(0);
  rotateX(sin(frames / 10) * 180);
  scale(cos(frames / 5) * -5);
  let layers = 100;
  
  for (var i = 0 ; i < layers; i++){
    
    rotate(sin(frames / 2));
    beginShape();
    
    for (var j = 0; j < 360; j += 12){
      var rad = i * 6;
      var x = rad * -cos(j);
      var y = rad * -sin(j);
      var z = -sin(frames * 2 + i * 5) * 20;
      
      stroke(255);
      noFill();
      var noisy = noise(0, 0.9);
      // Options
      //rect(x, y, z * noisy, z * noisy);
      ellipse(x, y, z * noisy, z * noisy);
      
    }
    endShape(CLOSE);
  }
}