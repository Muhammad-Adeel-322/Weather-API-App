$(document).ready(function(){
    let city_name=$(".city_name")
    let temp=$(".temp")
    let icon =$(".icon")
    let description=$(".description")
    let speed=$(".speed")
    let input =$(".C-name")
    let btn=$(".search")

    fetchWeather("Lahore");

    function fetchWeather(city){
        const apiKey = "f65e32faa80c40a876bd4112cd36e525";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        fetch(apiUrl)
        .then(res=> res.json())
        .then(data =>{
            let temprature = Math.floor(data.main.temp - 273.15)+"'C"
            let iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            city_name.text(data.name);
            temp.text(temprature);
            icon.html(`<img src = '${iconUrl}'>`);
            description.text(data.weather[0].main);
            speed.text(`${data.wind.speed}Km/h`);
        })
        .catch(err => console.error("Error Fatching Weather :",err))
    }
    btn.click(function(){
        let city = input.val();
        if (city !==""){
            fetchWeather(city);
            input.val("")
        } else{
            alert("Plaease Type a City Name")
        }
    });
});