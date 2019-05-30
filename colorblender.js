function setup() {
    createCanvas(windowWidth, windowHeight);
}
var x = 0
var y = 0
var r = 0
var g = 0
var b = 0
var rgb = ['r','g','b']
var flip = false
arr = []

function draw() {
    for (i = 1;i<3;i++){
        colorswitch('b', 100, 100,'g',3,i);
    }
    // colorswitch('b', 100, 300,'r',3,1);
    // colorswitch('b', 100, 500,'g',3,0.3)
    // if (flip == true){
    //   x+=1
    //   g++
    // }if(!flip == true){
    // x -= 1
    //   g++
    // }if (x>255){
    // flip = false
    //   g = 0
    // }if (x<0){
    // flip = true
    //   g = 0
    // }




}

function colorswitch(colors, x1, y1, intcolor,sw,sc) {
    push()
    scale(sc)

    push()
    strokeWeight(sw)
    translate(x1, y1)
    for (i = 0; i < 255; i++) {
        point(x, y + i)
        if (intcolor == 'r'){
            stroke(r+i, g, b)
        }if (intcolor == 'b'){
            stroke(r,g,b+i)
        }if(intcolor == 'g'){
            stroke(r,g+i,b)
        }
    }


    if (colors == 'g') {
        if (flip == true) {
            x += 1
            g++
        }
        if (!flip == true) {
            x -= 1
            g++
        }
        if (x > 255) {
            flip = false
            g = 0
        }
        if (x < 0) {
            flip = true
            g = 0
        }

    }
    if (colors == 'r') {
        if (flip == true) {
            x += 1
            r++
        }
        if (!flip == true) {
            x -= 1
            r++
        }
        if (x > 255) {
            flip = false
            r = 0
        }
        if (x < 0) {
            flip = true
            r = 0
        }

    }
    if (colors == 'b') {
        if (flip == true) {
            x += 1
            b++
        }
        if (!flip == true) {
            x -= 1
            b++
        }
        if (x > 255) {
            flip = false
            b = 0
        }
        if (x < 0) {
            flip = true
            b = 0
        }
    }
    pop()
    pop()
}
