let symmetry = 25;   

let angle = 360 / symmetry;
let mouseButton, keyboardButton;
let slider;

//Load Song into song variable
function preload(){
  
}

function setup() { 
  createCanvas(1600, 1000);
  angleMode(DEGREES);
  background(0);
  fft = new p5.FFT(); //create Fast Fourier Transform variable



  // Creating the button for Full Screen
  fullscreenButton = createButton('FS');
  fullscreenButton.mousePressed(screenFull);
  fullscreenButton.position(0, 0);

}

// Full Screen Function
function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function draw() {
  
  background(0, 10);
  noCursor();
  
    var r = map(sin(frameCount), -1, 1, 100, 250);
    var g = map(cos(frameCount), 0, 20, 100, 200);
    var b = map(cos(frameCount), -1, 1, 200, 100);
  
  
  frameRate(map(mouseY, 0, height, 10, 30));
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = random(width) - width / 2;
    let my = random(height) - height / 2;
    let pmx = random(width) - width / 2;
    let pmy = random(height) - height / 2;
    
    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        noFill();
        stroke(r, g, b);
        rotate(angle);
        strokeWeight(map(mouseX, 0, width, 0.01, 1));
        ellipse(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        ellipse(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}
