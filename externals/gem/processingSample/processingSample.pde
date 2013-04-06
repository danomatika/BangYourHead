
void setup() {
  
  size(400, 400);
  
}

void draw() {
 
  background(204);
  
  //fill(0, 0, 255)
  //rect(20, 20, 10, 10);
  
  fill(255, 0, 0);
  noStroke();
  
  rect(60, 60, 30, 30);
  
    
    fill(0, 255, 0);
    rect(30, 30, 30, 30);
  
  stroke(0, 0, 255);
  line(20, 20, 100, 100);
  
  
}

void mousePressed() {

  println(mouseX+" " +mouseY);  
}

void keyPressed() {

  switch(key) {
  
    case 'q':
      rectMode(CORNER);
      println("corner");
      break;
   case 'w':
     rectMode(CENTER);
     println("center");
     break;
  }  
}
