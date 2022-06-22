var points = []; //starting points




function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  
  var density = 25;
  var space = width / density;

  
  for (var x = 0; x < width; x += space){
    for ( var y = 0; y < height; y += space){
         var p = createVector(x + random(-width/2, width/2), y + random(-height/2, height/2));
    
      points.push(p);
    
    }
  }
}

function draw() {
  
  rotate(sin(frameCount / 50) * -90);
  //scale(sin(frameCount / 10) * 10.5);
  
  var mult = random(-0.001, 0.1);
  
  noStroke();
  background(0, 0.1);
  noCursor();
  
  
  for (var i = 0; i < points.length; i++) {

    // B
    var r = map(points[i].y, 0, width, 100, 55);
     var b = map(cos(frameCount), 0, 1, 10, 205);
    var g = map(sin(frameCount), 0, width, 50, 255);


    
    var angle = map(noise(points[i].x * mult, points[i].y * mult, points[i].y * mult), 0, 1, 0, 360);
    
    fill(r, sin(frameCount/10) * 100 , b, sin(frameCount) * 255);
    
    points[i].add(createVector((-1) * sin(angle) * noise(0.1, 0.9), -cos(angle)));
    
    
  let offset = random(0.1, 100);
    
    ellipse(points[i].x + random(offset), points[i].y, -sin(frameCount) * random(-0.1, 1.9) - random(offset),  cos(frameCount) * random(-0.1, 1.9));


  
    
    
  }
}