// Notation System: Lines and Dots
// Mateo Larrea Ferro

// Synth
let polySynth;

// Lines and Dots Visual Logic
let clicked = false;
let startingX, startingY, endingX, endingY;

// Interface
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  
  // Initialize UI
  // Creating the save button for the file
  saveButton = createButton('SAVE');
  saveButton.mousePressed(saveFile);

  // Creating the clear screen button
  clearButton = createButton('CLEAR');
  clearButton.mousePressed(clearScreen);

  // Creating the button for Full Screen
  fullscreenButton = createButton('FULL SCREEN');
  fullscreenButton.mousePressed(screenFull);

  // Setting up the slider for the thickness of the brush
  brushSizeSlider = createButton('REVERB/WIDTH');
  sizeSlider = createSlider(1, 32, 4, 0.1);
  
  // Initialize Synth Parameters
  reverb = new p5.Reverb();
  delay = new p5.Delay();
  polySynth = new p5.PolySynth();
  
  
}

// Save File Function
function saveFile() {
  save('lines&dots.jpg');
}


// Clear Screen function
function clearScreen() {
  background(0);
  
}

// Full Screen Function
function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}



function playSynth(duration, velocity, frequency, delayFeedback) {

  // note duration (in seconds)
  let dur = duration;

  // time from now (in seconds)
  let time = 0;

  // velocity (volume, from 0 to 1)
  let vel = velocity;

  reverb.process(polySynth);
  reverb.amp(map(sizeSlider.value(), 0, 32, 0, 15));
  delay.process(polySynth, 0.12, delayFeedback, 2000);
  polySynth.play(frequency, vel, 0, dur);
}




function mousePressed(){
  
  if (mouseY > height - (height / 50)) {
    return;
  }
  
  fill(255);
  ellipse(mouseX, mouseY, 10, 10);
  
  if (!clicked){
    startingX = mouseX;
    startingY = mouseY;
    clicked = true;
  }
  else {
    
    let sw = sizeSlider.value();
    strokeWeight(map(sw, 0, 32, 0.5, 5));
    stroke(255);
    endingX = mouseX;
    endingY = mouseY;
    line(startingX, startingY, endingX, endingY);
    
    // Synth parameters
    let duration = map(abs(startingY - mouseY), 0, height, 0.1, 10);
    let frequency = map(startingX, 0, width, 20, 2000);
    let velocity = map(endingY, 0, height, 0.1, 127);
    let delayFeedback = map(abs(startingX - mouseX),0, width, 0.1, 0.99);

    playSynth(duration, velocity, frequency, delayFeedback);
    clicked = false;

    } 
}