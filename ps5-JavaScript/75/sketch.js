// Particle with Image

let img;
let cnv; // canvas

// loads image for files
function preload(){
  img = loadImage('mate.jpg');
  //img = loadImage('negrilla.png');
  //img = loadImage('flor.jpg');
}

function setup() {
  cnv = createCanvas(img.width, img.height); //adapt to image size
  let newCanvasX = (windowWidth - img.width) / 2;
  let newCanvasY = (windowHeight - img.height) / 2;
  cnv.position(newCanvasX, newCanvasY); // center
  
  // Access pixel information
  for (let col = 0; col < img.width; col += 2){
    for (let row = 0; row < img.height; row += 2){
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos, yPos); // gets color
      push();
      translate(xPos, yPos);
      rotate(radians(random(360)));
      noFill();
      //point(xPos, yPos);
      //strokeWeight(random(3));
      stroke(color(c));
      strokeWeight(random(5));
      
      //Actually draw it
      curve(xPos, yPos, sin(xPos) * random(60), cos(xPos) * sin(xPos) * random(90), random(10), random(80), cos(yPos) * sin(yPos) * random(140), cos(xPos) * sin(xPos) * 50);
      
      pop();
    }
  }
  
}

