var points = []; //starting points




function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  
  var density = 8;
  var space = width / density;

  
  for (var x = 0; x < width; x += space){
    for ( var y = 0; y < height; y += space){
         var p = createVector(x + random(-width/2, width/2), y + random(-height/2 + random(100), height/2) + random(100));
    
      points.push(p);
      
      
  // Color
  colorMode(HSB, 100);
    
    }
  }
}

function draw() {
  
    
    fill(cos(frameCount * 0.02) * 100, cos(frameCount * 0.005) * 200, sin(frameCount * 0.1) * random(50, 120));
  
  scale(sin(frameCount * 0.1) * 0.3);
  translate(width + 300, height + 400)
  rotate(sin(frameCount * 0.3) * random(100, 180));
  
  var mult = random(-0.0001, 0.9);
  
  noStroke();
  background(0, 0.001);
  
  for (var i = 0; i < points.length; i++) {


    
    var angle = map(noise(points[i].x * mult, points[i].y * mult, points[i].y * mult), 0, 1, 0, 360);
    
    
    
    
    points[i].add(createVector((-1) * cos(angle) * noise(0.1, 0.9), cos(angle)));
    
    
  let offset = random(0.001, 100);
    
    ellipse(points[i].x + random(offset), points[i].y, -sin(frameCount) * random(-0.01, 2.9) - random(offset),  cos(frameCount) * random(-0.001, 10.9));
    
  }
}