var x = 20
var y = 20
var easing = 0.1
var prevmouseX = 0
var prevmouseY = 0
var size = 20
var speed = 0
var second1 = 1000
var r = 0
var g = 0
var b = 0
function setup() {
    //	setInterval(askISS,1000); //every second
    setInterval(blah, second1 * 400)
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    // background(220);
    // ellipse(mouseX,mouseY,size)

    if(keyIsPressed){
        background(255)
    }
    x += (mouseX - prevmouseX) * easing
    y += (mouseY - prevmouseY) * easing
    var a = dist(x,y,prevmouseX,prevmouseY)
    if (mouseX - prevmouseX <=2 & mouseX - prevmouseX>=-2 & mouseY - prevmouseY <=2 & mouseY-prevmouseY >=-2){
        a = a + 5


    }
    strokeWeight(a)
    stroke(r,g,b)
    if (mouseIsPressed){
        line1()
    }
    prevmouseX = x
    prevmouseY = y

}
function blah (){
    console.log('l')
    background(255)

}function line1(){
    fill(255)
    line(x,y,prevmouseX,prevmouseY)
}