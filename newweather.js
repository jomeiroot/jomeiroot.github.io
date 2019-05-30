// function setup() {
//     // create canvas
//     createCanvas(windowWidth, windowHeight);
//     loadJSON("https://api.darksky.net/forecast/cb4e57181c17b2e603f78b14894b3232/37.8267,-122.4233",load)
//     //
//     // input = createInput();
//     // input.position(20, 65);
//     //
//     // button = createButton('submit');
//     // button.position(input.x + input.width, 65);
//     // button.mousePressed(called);
//     //
//     // greeting = createElement('h2', 'what is your Zip Code/City Name?');
//     // greeting.position(20, 5);
//     //
//     // textAlign(CENTER);
//     // textSize(50);
// }
//
// function called() {
//     background(255)
//     const name = input.value();
//     loadJSON("https://api.darksky.net/forecast/cb4e57181c17b2e603f78b14894b3232/37.8267,-122.4233",load)
//     // greeting.html('You live in ' + name + '!');
//     // input.value('');
//
// }
//
// function load(data){
//     var weather = data
//     console.log(weather.timezone)
//     // var weather = data
//     // console.log('stuff')
//     // console.log(weather)
//     // text(weather.location.name,155,200)
//     // textSize(35)
//     // text("it's "+ weather.current.temp_f+ " degrees",160,270)
//     // text("Windspeed: "+weather.current.wind_mph+" pointing "+weather.current.wind_dir,240,340)
//
// }
// //weather.current?


// DarkSky API
// CORS requests are NOT allowed by the DarkSky server
// Requests from other Servers are allowed
// So, we would make a pass thru file on a server.
// Browser sends the fetch( ) AJAX request to OUR server
// OUR server sends the AJAX request to DarkSky server
// DarkSky responds to OUR Server
// OUR Server sends the DarkSky reply back to Browser
// Browser AJAX call => Our Server => DarkSky => Our Server => Browser AJAX call

// To simulate, we will make the call with NodeJS (outside a browser)
// this way, we can avoid the CORS issue.
// It requires installing node-fetch from the terminal
//  npm install node-fetch
// Then add a require statement at the top of our script
//



// getWeather(12, 77, "us", "&deg;F");
// function getWeather(latitude, longitude, units, deg){
//
//     var weatherUrl = "https://api.darksky.net/forecast/0214ddf09c891cbcc6919d1447cae41c/"+latitude+","+longitude+"?callback=?&exclude=minutely,alerts,flags&units=" + units;
//
//     $.getJSON(weatherUrl).then(function(json) {
//
//         setMainPanel(json, deg, units)
//         var arr = json.daily.data;
//         arr.shift();
//         arr.pop();
//         var subDays = [];
//         for(i=0;i<arr.length;i++){
//             var html = setSubPanel(json.daily.data[i], deg, json.timezone);
//             subDays += html;
//         }
//
//         $(".daily-summary").html(json.daily.summary);
//         $(".succeeding-days").html(subDays).animateCss("fadeIn");
//     })
//         .fail(function() {
//             var html = "<blockquote>Unable to get weather</blockquote>"
//             $(".weather-container").html(html);
//         });
//
// }


console.log(lp5https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/42.3601,-71.0589)