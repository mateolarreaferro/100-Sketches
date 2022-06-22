function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(sin(frameCount * 0.01) * 30 + 10, 90, 120);
  
  scale(sin(frameCount * 0.01) * 2 + 3);
  for (let i = 0; i < 6; i++){
  rotateX(sin(frameCount * 0.0001) * 90);
  rotateZ(sin(frameCount * 0.0001) * 90);
  
  noFill();
  stroke(cos(frameCount * 0.01) * 240 + 10);
  strokeWeight(sin(frameCount * 0.01) * 1.6 + 0.6);
  let breathing = cos(frameCount * 0.01);
  let balancedI = i * 100;
  box(breathing * balancedI , balancedI);
  }
    
}