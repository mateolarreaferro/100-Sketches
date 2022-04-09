//Visualizer - Mateo Larrea


//Global Variables
var song;
var fft;
var particles = [];

//Load Song into song variable
function preload(){
  song = loadSound('Miami.mp3');
  
}
//Setup
function setup() {
  createCanvas(windowWidth, windowHeight); //dynamic sizing
  angleMode(DEGREES); //change from radians to degrees
  fft = new p5.FFT(); //create Fast Fourier Transform variable
}
//Update
function draw() {
  
  background(0);
  noFill();
  translate(width / 2, height / 2); //Puts in center
  var wave = fft.waveform(); //Gets waveform
  
  
  //Number of Rings
  for (var pos = 0; pos < height - 100; pos += 100){
    
    stroke(255, 100, random(200)); //Color of rings
    var noiseVar = random(0, 1) //Initialize Perlin Noise in different places for each ring
    
    for (var t = -1; t <= 1; t += 2){ //Phase - 2 sides of the circle
    
      beginShape();
  
      for (var i = 0; i <= 180; i+= 0.5) {
    
        var index = floor(map(i, 0, 180, 0, wave.length - 1));
        var r = map(wave[index], -1, 1, 10, pos);
        //Perlin Noise
        noiseVar += 0.002;
        strokeWeight(noise(noiseVar) * 10);
        
        //Computing the 2 sides of the circle (mirrored)
        var x = r * sin(i) * t; // t will oscillate between -1 and 1
        var y = r * cos(i);
        point(x,y); //computes each individual point in circumference (can be replaced with vertex)
      }
  
    endShape();
    }
  }
  
//     var p = new Particle();
//     particles.push(p);
  
//     for (var x = 0; x < particles.lenght; x++){
//       particles[x].update();
//       particles[x].show();
//     }
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

// //Particle System
// class Particle {
//   constructor(){
//     this.pos = p5.Vector.random2D().mult(250);
//     this.vel = createVector(0,0);
//     this.acc = this.pos.copy().mult(random(0.0001, 0.00001));
    
//     this.w = random(3, 5);
//   }
//   update(){
//     this.vel.add(this.acc);
//     this.pos.add(this.vel);
//   }
//   show(){
//     noStroke();
//     fill(255);
//     ellipse(this.pos.x, this.pos.y, this.w);
//   }
// }