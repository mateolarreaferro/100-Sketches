//Lorenz System: ordinary differentual equations
//differential equations: equations that looks at how a variable changes depending on other variables
//rate of change of x, y, and z over time
//non-linear system: butterfly effect -> slight change on the input alters the output completeley
//system exists in nature

//Variables
let x = 0.11; //arbitrary
let y = 0;
let z = 0;

//Constants 
let a = 10; //sigma = 10
let b = 28; //row = 28
let c = 8.0 / 3.0; //beta = 8/3

let points = new Array();


function setup() {
  createCanvas(800, 800, WEBGL);
  colorMode(HSB);

  background(0);
}

function draw() {
  

  let dt = 0.01; //time variation

//formulas: https://en.wikipedia.org/wiki/Lorenz_system
  let dx = (a * (y - x)) * dt;
  let dy = (x * (b - z) - y) * dt;
  let dz = (x * y - c * z) * dt;

  //changes
  x = x + dx;
  y = y + dy;
  z = z + dz;

  points.push(new p5.Vector(x, y, z));

  translate(0, 0, -90); //bring to center

  let camX = map(mouseX, 0, width, -200, 200);
  let camY = map(mouseY, 0, height, -200, 200);

  camera(camX, camY, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);
  

  scale(8);
  stroke(255);
  noFill();

  let h = 0; //hu
  beginShape();

  for (let v of points) {
    stroke(h, 100, 155);
    vertex(v.x, v.y, v.z);
    
    //cycles over the color
    h += 1;
    if (h > 255) {
      h = 0;
    }
  }
  endShape();


}