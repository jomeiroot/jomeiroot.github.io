//crayola = "https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/crayola.json"
//xkcd = "https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/xkcd.json"
var crayola
var crayolabool = false
var crayolaplus = 0
var xkcd
var xkcdbool = false
var xkcdplus = 0
var f = 0
function setup() {
  frameRate(10)
  createCanvas(windowWidth, windowHeight);
  loadJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/xkcd.json",loadxkcdcolors)
  // loadJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/crayola.json",loadcrayolacolors)
}
function loadcrayolacolors(data){
  crayola = data
      console.log(crayola.colors[0].hex)
  crayolabool = true
}
function loadxkcdcolors(data){
  xkcd = data
  xkcdbool = true
}


function draw() {
  // background(220);
  noStroke()
  
  if (xkcdbool & xkcdplus<100){
    xkcdloop()
  }
  if (crayolabool & crayolaplus<1){
    crayolaloop()
  }
}


function crayolaloop(){
  crayolaplus +=1
  for (i = crayola.colors.length-1;i>0;i-=10){//i=crayola.colors.length-1;i>0;i--){
    fill(crayola.colors[i].hex)
    ellipse(windowWidth/2,windowHeight/2,i-1,i-1)
    console.log("doing stuff")
  }

}
function xkcdloop(){

  xkcdplus +=1
  for (i = windowWidth-100;i>0;i--){
    fill(xkcd.colors[f].hex)
    ellipse(windowWidth/2,windowHeight/2,i-1,i-1)
    console.log("doing stuff")
    f+=1
    if (f>800){
    f = 0
    }
  }
}