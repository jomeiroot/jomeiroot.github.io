function setup() {
    // create canvas
    createCanvas(windowWidth, windowHeight);

    // input = createInput();
    // input.position(20, 65);
    //
    // button = createButton('submit');
    // button.position(input.x + input.width, 65);
    // button.mousePressed(called);
    //
    // greeting = createElement('h2', 'what is your Zip Code/City Name?');
    // greeting.position(20, 5);

    textAlign(CENTER);
    textSize(50);
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            do_something(position.coords.latitude, position.coords.longitude);
        });
    }
}
function do_something(lat,long){
    alert(lat)
    alert(long)
    loadJSON("https://dataservice.accuweather.com/currentconditions/v1/332044?apikey=JVKrSuGhm5H7dLDAykGn3IURELzVVUE6&details=true",wow)

}

function called() {
    background(255)
    const name = input.value();
    // loadJSON("https://api.apixu.com/v1/current.json?key=ec5ad11626ab41e897a174701191005&q="+name,load)
    greeting.html('You live in ' + name + '!');
    input.value('');

}
function what(data){
    var whats = data
    console.log(what)

}
function wow(data){
    var weather = data[0]
    textSize(35)
    textAlign(LEFT)
    text(weather.WeatherText,25,200)
    console.log(weather)

}

function load(data){
    var weather = data
    console.log('stuff')
    console.log(weather)
    textAlign(LEFT)
    text(weather.location.name,25,200)
    textSize(35)
    text("it's "+ weather.current.temp_f+ " degrees",25,270)
    text("Windspeed: "+weather.current.wind_mph+" pointing "+"mph"+weather.current.wind_dir,25,340)

}
function stringify(){

}