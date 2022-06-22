// Dumplings!

function setup() {
  createCanvas(700, 700, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  
  background(250);
  rotateX(sin(frameCount) * 10);
  scale(cos(frameCount / 5) * 2);
  let layers = 100;
  
  for (var i = 0 ; i < layers; i++){
    
    rotate(sin(frameCount / 2));
    beginShape();
    
    for (var j = 0; j < 360; j += 24){
      var rad = i * 3;
      var x = rad * -cos(j);
      var y = rad * -sin(j);
      var z = -sin(frameCount * 2 + i * 5) * 30;
      
      stroke(0);
      noFill();
      var noisy = noise(0, 0.9);
      //ellipse(x, y, z * noisy, z * noisy);
      ellipse(x, y, z, z);
    }
    endShape(CLOSE);
  }
}