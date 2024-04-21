
let waveHeight, swell, currentTime,wavesInSixHours, swellInSixHours,maxWave;
let weather_api = 'https://marine-api.open-meteo.com/v1/marine?latitude=-36.8882&longitude=175.8202&current=wave_height,swell_wave_height&hourly=wave_height,swell_wave_height&daily=wave_height_max,wind_wave_height_max,swell_wave_height_max&timezone=Pacific%2FAuckland&forecast_days=3';

async function getWeather(){
  let data = await fetch (weather_api);
  let j_data = await data.json();
  waveHeight = j_data.current.wave_height;
  swell = j_data.current.swell_wave_height;
  currentTime = j_data.current.time
  wavesInSixHours = j_data.hourly.wave_height[7]
  swellInSixHours = j_data.hourly.swell_wave_height[7]
  maxWave = j_data.daily.wave_height_max[0]
  
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER)

  getWeather();
  
}

function draw() {
  
  if (maxWave < 1){
    background(188, 225, 230);
  }
  if (maxWave > 1){
    background(17, 114, 128);
  }

  
  textStyle(BOLDITALIC)
  text("Wave Height: " + waveHeight + "m", windowWidth/2, windowHeight/4)
  text("Swell Height: "+ swell + "m" ,windowWidth/2, windowHeight/3)
  text("Wave Height In Six Hours: " + wavesInSixHours+ "m", windowWidth/2, windowHeight/2)
  text("Swell Height In Six Hours: " + swellInSixHours+ "m", windowWidth/2, windowHeight/2 + 40)
  text(currentTime,windowWidth/2, windowHeight/16 )
  text(maxWave, 100,100,)
  textStyle(BOLD)
  text( "Hot Water Beach",windowWidth/2, windowHeight/8  )
  
  textSize(30)

} 
