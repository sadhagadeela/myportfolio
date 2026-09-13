async function getWeather(){
  let city = document.getElementById("city").value;
  if(!city){alert("City peru kotu Sadha!"); return;}
  document.getElementById("result").innerText = "Loading...";
  try{
    let res = await fetch(`https://wttr.in/${city}?format=%C+%t`);
    let data = await res.text();
    document.getElementById("result").innerText = city + " lo: " + data;
  }catch(e){
    document.getElementById("result").innerText = "Error vachindi, malla try chey";
  }
}
