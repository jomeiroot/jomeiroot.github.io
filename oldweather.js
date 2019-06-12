

function setup() {
  // create canvas
  createCanvas(windowWidth, windowHeight);
  y = loadImage('partly_cloudy.jpg')


  input = createInput();
  input.position(windowWidth/2-150, 265);

  button = createButton('submit');
  button.position(input.x + input.width, 265);
  button.mousePressed(called);

  textAlign(CENTER);
  textSize(50);
}

function called() {
  background(255)
  const name = input.value();
    loadJSON("https://api.apixu.com/v1/current.json?key=ec5ad11626ab41e897a174701191005&q="+name,load)
  greeting.html('You live in ' + name + '!');
  input.value('');

}



function load(data){
  image(y,0,85)
  var weather = data
  console.log('stuff')
  console.log(weather)
  textAlign(CENTER)  
  text(weather.location.name,windowWidth/2,200-80)
    textSize(35)
    console.log(weather)
    text("it's "+ weather.current.temp_f+ " degrees",windowWidth/2,270-80)
    text("Windspeed: "+weather.current.wind_mph+"mph",windowWidth/2,340-80)
    
}
function stringify(){
  
}