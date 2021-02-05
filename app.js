function getWeatherData(cityName){
    const apiKey='dee9275800c3640ddc66cf7b0ecfffb8';
    const apiBase='https://api.openweathermap.org/data/2.5/weather';
    const url=`${apiBase}?q=${cityName}&units=metric&appid=${apiKey}`;

    fetch(url)
    .then(res => res.json())
    .then(data => updateWeather(data))
}
function updateWeather(data){
    document.getElementById('setCity').innerText=data.name||'Unknown Location';
    document.getElementById('temperature').innerText=data.main.temp;
    document.getElementById('condition').innerText=data.weather[0].main;
    document.getElementById('icon').setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('getCity').value="";
}
const searchBtn=document.getElementById('searchBtn');
searchBtn.addEventListener('click',function(){
    const getCity= document.getElementById('getCity').value;
    getWeatherData(getCity);
})
getWeatherData('Dhaka');