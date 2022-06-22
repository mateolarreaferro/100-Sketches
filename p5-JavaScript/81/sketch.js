// Mateo Larrea Ferro - Sketch #79

// Visuals
let particles = [];// array of vectors for particles
const num = 400;
const noiseScale = 0.0001;

// Audio
let osc, reverb, delay, env, fft;
let t1 = 0.1; // attack time in seconds
let l1 = 0.7; // attack level 0.0 to 1.0
let t2 = 0.3; // decay time in seconds
let l2 = 0.1; // decay level  0.0 to 1.0

// Scale 1
//let frequencies = [73, 82, 87, 98, 110, 116, 130, 147, 165, 196, 220, 262, 294, 330, 392, 440, 523, 587, 659, 784, 880, 1047, 1175, 1319, 1568, 1760, 2093, 2349];

// Scale 2
 // let frequencies = [73, 82, 92, 98, 110, 123, 139, 147, 165, 185, 196, 220, 247, 277, 294, 330, 370, 392, 440, 494, 554, 587];

// Scale 3: Pentatonic in 432 Hz
 let frequencies = [64, 72, 81, 96, 108, 128, 144, 162, 192, 216, 257, 288, 324, 385, 432, 514, 577, 647, 770, 864, 1027, 1153, 1295, 1539, 1728, 2055];


function setup() {
  createCanvas(800, 650);
  // Audio Parameters
  osc = new p5.Oscillator('sine');
  //osc = new p5.Oscillator('sawtooth');
  //osc = new p5.Oscillator('square');
  //osc = new p5.Oscillator('triangle');
  
  reverb = new p5.Reverb();
  delay = new p5.Delay();
  env = new p5.Envelope(t1, l1, t2, l2);
  fft = new p5.FFT();
  //Initialization
  osc.freq(frequencies[random(frequencies.length)]);
  osc.amp(0.5);
  delay.process(osc, 0.9, 0.9, 100000);
  osc.start();
  env.play(osc);
  reverb.process(osc);
  
  
  
  // Vector Creation
  for(let i = 0; i < num; i++){
    particles.push(createVector(random(width), random(height - 50)));
  }
}

function draw() {
  noCursor();
  noFill();
  rect(mouseX, mouseY, 10, 10);
  background(10, 4); // the second parameter is the fade
  fill(100);
  rect(0, 0, width, height/10);
  
  // Audio XY Mod
  delay.process(osc, map(mouseX, 0, height + 100, 0.1, 0.9), 
  map(mouseX, 0, height + 100, 0.1, 0.9), map(mouseY, 0, 650, 100, 100000));
  
  // Envelope Parameters
  t1 = map(mouseX, 0, width, 5.0, 0.01);
  l1 = map(mouseY, 0, height, 0.0, 1.0);
  t2 = map(mouseX, 0, width, 0.1, 4.0);
  l2 = map(mouseY, 0, height, 0.0, 1.0);

   
  // Particle
  for (let i = 0; i < num; i++){
    let p = particles[i];
    point(p.x, p.y); // draw points
    strokeWeight(2.0);
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n; // TAU is 2PI
    p.x += (-1) * -cos(a);
    p.y += (-1) * sin(a);
    
    // Bring them back
    if (!onScreen(p)){
      p.x = random(width);
      p.y = random(height);
    }
  }
  
  // FFT 
  let waveform = fft.waveform();
  //noFill();
  beginShape();
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height / 10);
    vertex(x,y);
  }
  endShape();
}

// Change
function mouseReleased(){
  // Visually
  noiseSeed(millis() / 2);
  stroke(random(200), 50, random(200));
  
  // Sonically
  env.setADSR(t1, l1, t2, l2);
  let randomNote = int(random(0, frequencies.length));
  osc.freq(frequencies[randomNote]);
  osc.amp(random(0.4, 1));
  env.play(osc);
  
}

// Checks if particles are within the range of the screen
function onScreen(v){
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}