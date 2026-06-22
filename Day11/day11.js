function showWeather() {
  let temperature = 18;

  if (temperature < 20) {
    let jacketNeeded = true;
    console.log(`It's chilly. Temperature: 
        ${temperature}°C`);
  }

  // console.log(jacketNeeded); ❌ will fail
}

function greet() {
  console.log("Welcome!");
  //console.log(temperature); ❌ will fail
}

showWeather();
greet();
