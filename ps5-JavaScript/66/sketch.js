
let oscSin, fft, oscTri;

function setup() {
  createCanvas(800, 500);
 
  oscSin = new p5.SinOsc(); // set frequency and type
  oscSin.amp(0.5);
  
  oscTri = new p5.SinOsc(); // set frequency and type
  oscTri.amp(0.5);
  
  oscSqr = new p5.SqrOsc(); // set frequency and type
  oscSqr.amp(0.5);
  
  

  fft = new p5.FFT();
  oscSin.start();
  oscTri.start();
  oscSqr.start();
}

function draw() {
  //background(255);
  noCursor();

  let waveform = fft.waveform(); // analyze the waveform
  
  beginShape();
  
  strokeWeight(1);
  for (let i = 0; i < waveform.length; i++) {
     
    
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height, 0);
    
  
    let z = map(i, 0, waveform.length, 30, width);
    let z2 = map(waveform[i], -1, 1, height, 30);
   
    
    
    stroke(random(255), random(43), random(180));
    vertex(x, y);
    vertex(z, z2);
  }
  endShape();

  // change oscillator frequency based on mouseX
  let freq = map(mouseX, 0, width, 20, 880);
  oscSin.freq(freq);
  oscTri.freq(freq + 200);
  oscSqr.freq(freq + 400)

  let amp = map(mouseY, 0, height, 1, 0.01);
  oscSin.amp(amp);
  oscTri.amp(amp);
  oscSqr.amp(amp);
}
