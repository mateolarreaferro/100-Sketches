// Visualizer NICO - Mateo Larrea


// GlobalVARS
var song;
var fft;
var particles = [];


// Load Song
function preload(){
  song = loadSound('TuVoz.mp3');
  
}
//Setup
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); // dynamic sizing
  angleMode(DEGREES); // change from radians to degrees
  fft = new p5.FFT(); // create Fast Fourier Transform variable
  setInterval(visualizer, 500); // call function only 2 times per second instead of every frame
  
  
}
//Update
function draw() {
  
  noCursor();
  
  background(cos(frameCount * 0.05) * 40, 20, sin(frameCount * 0.05) * 70 ); //20 is in the sketch
  scale(sin(frameCount * 0.5) * 2 + 5); //30 
  rotateY(90);
  rotateX(sin(frameCount) * 180);
  
  visualizer();
  
}


function visualizer(){
  noFill();
  var wave = fft.waveform(); //Gets waveform
  
  
  //Number of Rings
  let increment =  100; //200 achieves what is recorded in sketch
  
  for (var pos = 0; pos < height - 100; pos += increment){
    
    
    stroke(sin(frameCount * 0.01) * 200, 100, cos(frameCount * 0.1) * 100);
    strokeWeight(sin(frameCount * 0.1) * 0.2 + 0.05);
    
    for (var t = -1; t <= 1; t += 2){ // Phase - 2 sides of the circle
    
      beginShape();
  
      for (var i = 0; i <= 180; i+= 60) {
    
        var index = floor(map(i, 0, 180, 0, wave.length - 1));
        var r = map(wave[index], -1, 1, 10, pos);
    
        
        //Computing the 2 sides of the circle (mirrored)
        var x = r * sin(i * 0.0001) * t; // t will oscillate between -1 and 1
        var y = r * cos(i * 0.0001) * t;
        
            smooth();
            torus(sin(x * 0.05) * 200, sin(y * 0.05) * 200);
      }
  endShape();
    }
  }
}

//Turning ON/OFF
function mouseClicked(){
  if (song.isPlaying()){
    song.pause();
    noLoop();
  }
  else {
    song.play();
    loop();
  }
}
