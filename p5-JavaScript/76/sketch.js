var points = []; //starting points
var mult = 0.005;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  
  var density = 58;
  var space = width / density;
  
  
  for (var x = 0; x < width; x += space){
    for ( var y = 0; y < height; y += space){
         var p = createVector(x + random(-10, 10), y + random(-10, 10));
    
      points.push(p);
    
    }
  }
}

function draw() {
  
  noStroke();
  //background(0);
  
  
  for (var i = 0; i < points.length; i++) {
    
    var r = map(sin(frameCount), 0, 1, 50, 255);
    var g = map(points[i].y, 0, width, 50, 255);
    var b = map(points[i].y, 0, width, 100, 255);
    
    var a = map(sin(frameCount), 0, 1, 1, 255);
  
    

    
    var angle = map(noise(points[i].x * mult, points[i].y * mult, points[i].y * mult), 0, 1, 0, 1080);
    
    fill(r, g, b, a);
    
    points[i].add(createVector(cos(angle), sin(angle)))
    
    
    
    
    ellipse(points[i].x, points[i].y, cos(frameCount) * 5);
    
    
  }
}