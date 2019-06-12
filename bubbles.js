var x1 = 100 //int(random(0,width))
var y1 = 100 //int(random(0,height))
var w1 = 20 //random(20,200)
var bool = false
poppedstuff = 0
counter = 0;
function setup() {
  createCanvas(windowWidth, windowHeight-135);
  arr = []
  // b = new Bubble(windowWidth/2,windowHeight/2,80,255)
  // arr.push(b)
}

function draw() {
  // if (counter<2000){
  //   keyPressed();
 // }3
  background(220);
  x1 = int(random(0, width))
  y1 = int(random(0, height))
  w1 = int(random(20, 200))
  for (var bub of arr) {
    bub.move();
    bub.draw();
    counter+=1
    for (var bubs of arr){
      console.log(bub.intersecting(bubs))
    }
  }
    textSize(80)
  fill(0)
  text(str(poppedstuff),30,80)
}

class Bubble {
  constructor(x, y, w) {
    this.x = x
    this.y = y
    this.w = w
    this.filler = 255
  }
  intersecting(other){
    if (dist(this.x,this.y,other.x,other.y)>this.w/2,other.w/2){
      return dist(this.x,this.y,other.x,other.y)
    }else{
      return false
    }
  
  }
  move() {
    this.x += random(-5, 5)
    this.y += random(-5, 5)
  }
  draw() {
    fill(this.filler)
    ellipse(this.x, this.y, this.w)
  }
  isclicked(x, y) {
    if(dist(x,y,this.x,this.y)<this.w/2){
      this.filler = 100
      bool = true
    }
    //print(dist(x,y,this.x,this.y),this.w/2)
    // for(i=0;i<arr.length;i++){
    //   print(this.w)
    //   if(dist(x,y,this.x,this.y)<this.w/2){
    //     //print(1)
    //   }
    // }
  }
}

// function mouseDragged(){
//   bubble = new Bubble(mouseX,mouseY,w1)
//   arr.push(bubble)
// }

function mousePressed() {
  // bubble = new Bubble(mouseX,mouseY,w1)
  // arr.push(bubble)
  for (i=0;i<arr.length;i++){
    arr[i].isclicked(mouseX,mouseY)
    if (bool){
      arr.splice(i,1)
      bool = false
      poppedstuff +=1
    }
  }
}

function keyPressed() {
    bubble = new Bubble(mouseX,mouseY,w1)
  arr.push(bubble)
  // bubble = new Bubble(mouseX, mouseY, w1)
  // arr.push(bubble)
}