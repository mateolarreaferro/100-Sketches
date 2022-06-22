var points = []; //starting points
var mult = 0.001


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(120);
  angleMode(DEGREES);
  
  var density = 20;
  var space = width / density;
  
  setInterval(changeColor, 2000);
  
  
  
  
  for (var x = 0; x < width; x += space){
    for ( var y = 0; y < height; y += space){
         var p = createVector(x + random(-100, 100), y + random(-1, 1));
    
      points.push(p);
    
    }
  }
}

function draw() {
  
  //rotate(sin(frameCount * 0.1) * 100);
  noStroke();
  background(0, 0.5);
  noCursor();
  
  
  
  for (var i = 0; i < points.length; i++) {

    
    var angle = map(noise(points[i].x * mult, points[i].y * mult, points[i].y * mult), 0, 1, 0, 360);
    
    
    points[i].add(createVector(sin(angle) * noise(0.01, 0.9), cos(angle)))
    
    
    rect(points[i].x, points[i].y, 0.9, 0.9);
    
  }
  
}

function changeColor(){
  let color = int(random(2));
  
  switch(color){
    case 0:
      fill(0);
      break;
    case 1:
      fill(100, 0, 255);
      break;
    // case 2:
    //   fill(0, 0, 255);
    //   break;
  }
}

