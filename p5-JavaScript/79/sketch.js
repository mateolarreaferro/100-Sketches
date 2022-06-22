// Mateo Larrea Ferro - Sketch #79

// Visuals
let particles = [];// array of vectors for particles
const num = 500;
const noiseScale = 0.01;

// Audio
let osc, reverb, delay;
let frequencies = [73, 82, 87, 98, 110, 116, 130, 147, 165, 196, 220, 262, 294, 330, 392, 440, 523, 587, 659, 784, 880, 1047, 1175, 1319, 1568, 1760, 2093, 2349]; 


function setup() {
  createCanvas(800, 650);
  // Audio Parameters
  osc = new p5.Oscillator('sine');
  //osc = new p5.Oscillator('sawtooth');
  //osc = new p5.Oscillator('square');
  //osc = new p5.Oscillator('triangle');
  reverb = new p5.Reverb();
  delay = new p5.Delay();
  osc.freq(frequencies[random(frequencies.length)]);
  osc.amp(0.5);
  delay.process(osc, 0.9, 0.9, 100000);
  osc.start();
  reverb.process(osc);
  
  // Vector Creation
  for(let i = 0; i < num; i++){
    particles.push(createVector(random(width), random(height)));
  }
}

function draw() {
  noCursor();
  background(10, 4); // the second parameter is the fade
  
  // Audio XY Mod
  delay.process(osc, map(mouseX, 0, height + 100, 0.1, 0.9), 
  map(mouseX, 0, height + 100, 0.1, 0.9), map(mouseY, 0, 650, 100, 100000));

   
  // Particle
  for (let i = 0; i < num; i++){
    let p = particles[i];
    point(p.x, p.y); // draw points
    strokeWeight(2.0);
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n; // TAU is 2PI
    p.x += (-1) * cos(a);
    p.y += (-1) * sin(a);
    
    // Bring them back
    if (!onScreen(p)){
      p.x = random(width);
      p.y = random(height);
    }
  }
}

// Change
function mouseReleased(){
  // Visually
  noiseSeed(millis() / 2);
  stroke(random(200), 50, random(200));
  
  // Sonically
  let randomNote = int(random(0, frequencies.length));
  osc.freq(frequencies[randomNote]);
  osc.amp(random(0.4, 1));
}

// Checks if particles are within the range of the screen
function onScreen(v){
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}