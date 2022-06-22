// Recaman Sequence - "spooky"
// Invented by colombian mathematician Bernardo Recaman Santos

// Integer sequence - like Fibonacci --> strange balance between order and chaos 



// 0 1 2 3 4 5 6 7 8 9
// counter = 1 2 3 4 5 
// try to go backwards, check if there is a space available

// sequence: 0, 1, 2, 6, 2, 7, ....

// Logic
let numbers = [true]; //bools to determine if space is available or not
let count = 1;
let sequence = [];
let index = 0;


// Visual
let arcs = [];
let biggest = 0;


// Audio
let osc;
//Reverb
let reverb;



class Arc {
  constructor(start, end, dir){
    this.start = start;
    this.end = end;
    this.dir = dir;
  }
  
  show(){
  
  let diameter = abs(this.end - this.start);
  let x = (this.end + this.start) / 2; // assuming there is one pixel per number
  
   noFill();
  if (this.dir == 0){ 
  stroke(0, 0, 0, random(100, 255));
  rect(x, x, diameter + noise(0, 30), diameter + noise(0, 30));
  }
  
  else {
  stroke(0, 0, 0, random(100, 255));
  rect(x, x, diameter, diameter);
    
    }
  }
  
  
}


function setup() {
   createCanvas(800, 700);
  
  
  // Reverb
  reverb = new p5.Reverb();
  reverb.drywet(1);
 
  
  // Oscillator
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0.5);
  osc.start();
  
  reverb.process(osc);
  

  
  
  numbers[index] = true;
  sequence.push(index);
}

function step(){
  let next = index - count; //goes back
  if (next < 0 || numbers[next]){
    next = index + count; 
  }
  
  numbers[next] = true;
  sequence.push(next);
  
  let a = new Arc(index, next, count % 2);
  arcs.push(a);
  
  index = next; // sequence
  osc.freq(map(index, 0, 2000, 40, 100));
  
  let reverbDW = map(index, 0, 200, 0, 1);
  reverb.drywet(reverbDW);
  
  if (index > biggest) {
    biggest = index;
  }
  count++;
}

function draw() {
  background(250, 10);
  step();
  
  translate(0, 0);
  scale(width / biggest);
  
  for (let a of arcs){
    a.show();
  }
  //console.log(index);
}