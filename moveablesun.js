var ballArray = []
var gravity = 9.8/30.0;
var speed = 0.0005

var sunX = 300
var sunY = 300

class Ball {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.ySpeed = 0;
    this.xSpeed = 0;
    this.width = width;
    this.color = "hotpink"
  }
  
  update(){
		var directionX = sunX-this.x
    var directionY = sunX-this.y 
    
    this.xSpeed += directionX*speed // this.width *40
    this.ySpeed += directionY *speed // this.width *40
    
    this.x += this.xSpeed
    this.y += this.ySpeed
    
    //console.log("speed: ", this.xSpeed)
		
  }
  
  draw(){
    fill(this.xSpeed*150,this.ySpeed*150,150)
    ellipse(this.x, this.y, this.width, this.width)
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
	for(var i = 0;i<20;i++){
  	var newBall = new Ball(random(0, width), random(0, height), random(10, 100))
    ballArray.push(newBall)
  }
}

function draw() {
  background(255, 255, 255);
  if(mouseIsPressed){
    sunX = mouseX
    sunY = mouseY

  }
  
  
  fill("yellow")
  ellipse(sunX, sunY, 10, 10)
  ellipse(sunX +10,sunY +5,10,10)
	
  for(var i = 0;i<ballArray.length;i++){
  	ballArray[i].update()
    ballArray[i].draw()
  }
  
}