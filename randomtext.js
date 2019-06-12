
var listOfWords = ["word","中国🇨🇳","狗🐶","猴子🐒","other stuff","你好","明天"]
var indexOfWords = 0
var oldIndexOfWords = -1
var listOfColors = ['red','orange','blue','yellow','white','black']
var indexOfColors = 0
var oldIndexOfColors = -1

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  textSize(25)
  fill(listOfColors[indexOfColors])
  print(indexOfColors)
  text(listOfWords[indexOfWords],width/2,height/2)
}

function mousePressed(){
  indexOfWords = int(random(listOfWords.length))
  indexOfColors = int(random(listOfWords.length))
  if (indexOfWords >= listOfWords.length){
  indexOfWords = 0
  }if (indexOfColors >= int(listOfColors.length)){
    indexOfColors = 0
  
  }if (indexOfWords == oldIndexOfWords|| indexOfColors == oldIndexOfColors & indexOfColors < listOfColors.length-1 & indexOfWords < listOfWords.length-1){
    indexOfWords +=1
    indexOfColors += 1
  }    
    oldIndexOfColors = indexOfColors
    oldIndexOfWords = indexOfWords
}