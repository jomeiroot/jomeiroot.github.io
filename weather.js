function setup() {
    // create canvas
    createCanvas(windowWidth, windowHeight);

    input = createInput();
    input.position(20, 65);

    button = createButton('submit');
    button.position(input.x + input.width, 65);
    button.mousePressed(called);

    greeting = createElement('h2', 'what is your Zip Code/City Name?');
    greeting.position(20, 5);

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
    var weather = data
    console.log('stuff')
    console.log(weather)
    text(weather.location.name,100,200)
    textSize(35)
    text("it's "+ weather.current.temp_f+ " degrees",160,270)
    text("Windspeed: "+weather.current.wind_mph+" pointing "+weather.current.wind_dir,240,340)

}
//weather.current?
