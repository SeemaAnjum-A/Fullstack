/*console.log("===hour 1:json basics===");
let student={
    name:"seema",
    age:22,
    marks:[45,67,89],
    add:"srit",
};
let studentJSON=JSON.stringify(student);
console.log(studentJSON);
let parsedObj=Json.parse(jsonString);
console.log(parsedObj)*/

/*fetch("https://jsonplaceholder.typicode.com/posts/1")
   .then(response => response.json())
   .then(data => console.log("Fetched Data:",data))
   .catch(error => console.error("Error:",error));


fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users =>{
        let output="<h3>User List</h3><ul>";
        users.forEach(user =>{
            output+=<li>${user.name} - ${user.email}</li>;
        });
        output+="</ul>";
        document.body.innerHTML+=output;
    });*/




/*fetch("https://jsonplaceholder.typicode.com/users")
   .then(res => res.json())
   .then(users =>{
    let output="<h3>Users List</h3><ul>";
    users.forEach(user => {
        output +=`<li>${user.name} (${user.email})</li>`;
   });
    output += "</ul>";
    document.body.innerHTML += output;
    });


    console.log("==== weather info fetcher Project====");*/

    /*const cityCoords={
        "bangalore":{lat:12.97,lon:77.59},
        "delhi":{lat:28.61,lon:77.20},
        "mumbai":{lat:19.07,lon:72.87},
        "london":{lat:51.51,lon:-0.13},
        "newyork":{lat:40.71,lon:-74.01}
    };

    document.getElementById("getWeatherBtn").addEventListener("click",()=>{
        let cityName=document.getElementById("cityInput").value.toLowerCase();
        if(!cityCoords[cityName]){
            document.getElementById("weatherResult").innerHTML="<p>City not found in database.</p>";
            return;
        }
        let coords=cityCoords[cityName];
        let url=`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

        //AJAX FETCH
        fetch(url)
           .then(res => res.json())
              .then(data =>{
                if (data.current_weather) {
                    document.getElementById("weatherResult").innerHTML=`
                    <h3>Current Weather in ${city}</h3>
                    <p>Temperature: ${data.current_weather.temperature}°C</p>
                    <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
                    <p>Time: ${data.current_weather.time}</p>
                    `;
                } else {
                    document.getElementById("weatherResult").innerHTML="<p>Weather data not available.</p>";
                }
                })
                .catch(error =>{
                    console.error("Error fetching weather data:",error);
                    document.getElementById("weatherResult").innerHTML="<p>Error fetching weather data.</p>";
                });
    });*/
    

// Predefined city → coordinates
/*const cityCoords = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "delhi": { lat: 28.61, lon: 77.20 },
  "mumbai": { lat: 19.07, lon: 72.87 },
  "london": { lat: 51.51, lon: -0.13 },
  "new york": { lat: 40.71, lon: -74.01 }
};


// Event Listener for button
document.getElementById("fetchWeatherBtn").addEventListener("click", () => {
  let city = document.getElementById("cityInput").value.toLowerCase();

    if (!cityCoords[city]) {
    document.getElementById("weatherResult").innerHTML = "⚠ City not in list!";
    return;
  }

  let coords = cityCoords[city];
  let url = 'https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true';

  // AJAX Fetch
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.current_weather) {
        document.getElementById("weatherResult").innerHTML = `
          <h3>Weather in ${city}</h3>
          <p>🌡 Temp: ${data.current_weather.temperature}°C</p>
          <p>💨 Wind: ${data.current_weather.windspeed} km/h</p>
          <p>⏱ Time: ${data.current_weather.time}</p>
        `;
      } else {
        document.getElementById("weatherResult").innerHTML = "⚠ No data available.";
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weatherResult").innerHTML = "⚠ Error fetching weather.";
    });
});*/


/*const cityCoords = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "delhi": { lat: 28.61, lon: 77.20 },
  "mumbai": { lat: 19.07, lon: 72.87 },
  "london": { lat: 51.51, lon: -0.13 },
  "new york": { lat: 40.71, lon: -74.01 }
};


// Event Listener for button
document.getElementById("fetchBtn").addEventListener("click", () => {
  let city = document.getElementById("cityInput").value.toLowerCase();

    if (!cityCoords[city]) {
    document.getElementById("weather").innerHTML = "⚠ City not in list!";
    return;
  }

  let coords = cityCoords[city];
  let url = 'https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true'

  // AJAX Fetch
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.current_weather) {
        document.getElementById("weather").innerHTML = `
          <h3>Weather in ${city}</h3>
          <p>🌡 Temp: ${data.current_weather.temperature}°C</p>
          <p>💨 Wind: ${data.current_weather.windspeed} km/h</p>
          <p>⏱ Time: ${data.current_weather.time}</p>
        `;
      } else {
        document.getElementById("weather").innerHTML = "⚠ No data available.";
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weather").innerHTML = "⚠ Error fetching weather.";
    });
});*/


const cityCoords = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "delhi": { lat: 28.61, lon: 77.20 },
  "mumbai": { lat: 19.07, lon: 72.87 },
  "london": { lat: 51.51, lon: -0.13 },
  "new york": { lat: 40.71, lon: -74.01 }
};


// Event Listener for button
document.getElementById("fetchBtn").addEventListener("click", () => {
  let city = document.getElementById("cityInput").value.toLowerCase();

    if (!cityCoords[city]) {
    document.getElementById("weather").innerHTML = "⚠ City not in list!";
    return;
  }

  let coords = cityCoords[city];
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`

  // AJAX Fetch
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.current_weather) {
        document.getElementById("weather").innerHTML = `
          <h3>Weather in ${city}</h3>
          <p>🌡 Temp: ${data.current_weather.temperature}°C</p>
          <p>💨 Wind: ${data.current_weather.windspeed} km/h</p>
          <p>⏱ Time: ${data.current_weather.time}</p>
        `;
      } else {
        document.getElementById("weather").innerHTML = "⚠ No data available.";
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weather").innerHTML = "⚠ Error fetching weather.";
    });
});