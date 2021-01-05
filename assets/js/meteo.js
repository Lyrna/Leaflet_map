let url = "https://api.openweathermap.org/data/2.5/weather?q=Narbonne&appid=053ff5a863d7ca21aa4099c572f0e986&units=metric&lang=fr";
fetch(url).then((response) =>
 response.json().then((data) => {
   console.log(data);
   document.querySelector ('#city').innerHTML ="<i class='fas fa-city'></i>" + data.name;
   document.querySelector ('#temp').innerHTML ="<i class='fas fa-thermometer-three-quarters'></i>" +  data.main.temp + ' °C';
   document.querySelector ('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + ' %';
   document.querySelector ('#wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed  + ' m/sec';
 })

);
