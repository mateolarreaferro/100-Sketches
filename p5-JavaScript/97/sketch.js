// Visualizer NICO - Mateo Larrea


// GlobalVARS
var song;
var fft;
var particles = [];


// Load Song
function preload(){
  song = loadSound('nico.mp3');
  
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
  
  background(sin(frameCount * 0.05) * 40, 20, cos(frameCount * 0.05) * 70 ); //20 is in the sketch
  scale(sin(frameCount * 0.5) * 2 + 5); //30 
  rotateY(90);
  rotateX(sin(frameCount * 0.1) * 90);
  
  visualizer();
  
}


function visualizer(){
  noFill();
  var wave = fft.waveform(); //Gets waveform
  
  
  //Number of Rings
  let increment = 100; //200 achieves what is recorded in sketch
  
  for (var pos = 0; pos < height - 100; pos += increment){
    
    
    stroke(cos(frameCount * 0.01) * 200, 100, sin(frameCount * 0.1) * 100);
    strokeWeight(sin(frameCount * 0.1) * 0.8 + 0.05);
    
    for (var t = -1; t <= 1; t += 2){ // Phase - 2 sides of the circle
    
      beginShape();
  
      for (var i = 0; i <= 180; i+= 20) {
    
        var index = floor(map(i, 0, 180, 0, wave.length - 1));
        var r = map(wave[index], -1, 1, 10, pos);
    
        
        //Computing the 2 sides of the circle (mirrored)
        var x = r * sin(i * 0.0001) * t; // t will oscillate between -1 and 1
        var y = r * cos(i * 0.0001) * t;
        
            smooth();
            box(x,y + 100);
    
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
