async function getWeather(){
  const city = document.getElementById("cityInput").value;
  if(!city){ alert("City name rayi Sadha!"); return; }
  const resDiv = document.getElementById("result");
  resDiv.innerHTML = "<p>Loading...</p>";
  try{
    const res = await fetch(`https://wttr.in/${city}?format=j1`);
    const data = await res.json();
    const current = data.current_condition[0];
    resDiv.innerHTML = `
      <h3>${city.toUpperCase()}</h3>
      <p style="font-size:48px;font-weight:bold;">${current.temp_C}°C</p>
      <p>${current.weatherDesc[0].value}</p>
      <p>💧 Humidity: ${current.humidity}%</p>
      <p>💨 Wind: ${current.windspeedKmph} km/h</p>
    `;
  }catch(e){
    resDiv.innerHTML = "<p>City not found! Hyderabad, London try chey</p>";
  }
}
