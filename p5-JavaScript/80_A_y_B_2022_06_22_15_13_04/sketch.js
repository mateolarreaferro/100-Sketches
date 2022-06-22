var points = []; //starting points
var mult = -0.01;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
  angleMode(DEGREES);
  
  var density = 25;
  var space = width / density;
  
  
  for (var x = 0; x < width; x += space){
    for ( var y = 0; y < height; y += space){
         var p = createVector(x + random(-100, 100), y + random(-100, 100));
    
      points.push(p);
    
    }
  }
}

function draw() {
  
  noStroke();
  background(255, 0.5);
  noCursor();
  
  
  for (var i = 0; i < points.length; i++) {
    //A
    // var r = map(points[i].y, 0, width, 100, 255);
    // var b = map(cos(frameCount), 0, 1, 10, 205);
    // var g = map(points[i].y, 0, width, 50, 255);
    
    // B
    var r = map(points[i].y, 0, width, 100, 255);
    var b = map(cos(frameCount), 0, 1, 10, 205);
    var g = map(mouseX, 0, width, 50, 255);
    

    
  
    

    
    var angle = map(noise(points[i].x * mult, points[i].y * mult, points[i].y * mult), 0, 1, 0, 360);
    
    fill(r, g, b);
    
    points[i].add(createVector((-1) * sin(angle) * noise(0.1, 0.9), -cos(angle)))
    
    
    
    
    rect(points[i].x, points[i].y, -cos(frameCount) * -0.7);

  
    
    
  }
}