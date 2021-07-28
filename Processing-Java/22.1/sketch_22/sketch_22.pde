import ddf.minim.*;

Minim minim;
AudioSample note1;
AudioSample note2;

void setup()
{
  size(512, 200, P3D);
  
  // we pass this to Minim so that it can load files from the data directory
  minim = new Minim(this);
  
  // loadFile will look in all the same places as loadImage does.
  // this means you can find files that are in the data folder and the 
  // sketch folder. you can also pass an absolute path, or a URL.
  
  
  note1 = minim.loadSample("1.wav", 512); //works with any file format 
  note2 = minim.loadSample("5.wav", 512); //works with any file format 
}

void draw()
{
  
  background(255);
  rect(25, 25, 50, 50);
  
  rect(125, 25, 50, 50);
  
  
}

void mousePressed(){
  
  if(mouseX > 25 && mouseX <75 && mouseY > 25 && mouseY < 75){
  //note1.rewind();
  note1.trigger();
}

  if(mouseX > 125 && mouseX <175 && mouseY > 25 && mouseY < 75){
  //note2.rewind();
  note2.trigger();
}

}
