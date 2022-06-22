let particles = [];// array of vectors for particles
const num = 1000;
const noiseScale = 0.001;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < num; i++){
    particles.push(createVector(random(width), random(height)));
  }
  stroke(255);
}

function draw() {
  noCursor();
  
  background(0, 20); // the second parameter is the alpha

   
  for (let i = 0; i < num; i++){
    let p = particles[i];
    
   
    
    noFill();
    ellipse(p.x, p.y, 10, 10); // draw points
    
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n; // TAU is 2PI
    p.x += sin(a);
    p.y -= cos(a);
    
    if (!onScreen(p)){
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function mouseReleased(){
  noiseSeed(millis());
}


function onScreen(v){
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}