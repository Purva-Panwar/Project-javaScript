const apikey ="44ef86f9b78521c0786dd17884847577";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=Banglore";
async function checkWeather(){
    const response = await fetch(apiurl+`&appid=$(apikey)`);
    var data=await response.json();
    console.log(data);
}
checkWeather();