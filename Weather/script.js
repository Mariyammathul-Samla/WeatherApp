
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c3e84bfac4msh5c8723109e296d7p171e64jsn9bb908fa0e3d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city) => {
	cityName.innerHTML=city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {


			console.log(response)
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset

		})
		.catch(err => console.error(err))
};
const getWeather01 = (city1) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
		.then(response => response.json())
		.then((response) => {


			console.log(response)
			temp01.innerHTML = response.temp
			feels_like01.innerHTML = response.feels_like
			humidity01.innerHTML = response.humidity
			min_temp01.innerHTML = response.min_temp
			max_temp01.innerHTML = response.max_temp
			wind_speed01.innerHTML = response.wind_speed
			wind_degrees01.innerHTML = response.wind_degrees
			sunrise01.innerHTML = response.sunrise
			sunset01.innerHTML = response.sunset

		})
		.catch(err => console.error(err))
};

const getWeather02 = (city2) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
		.then(response => response.json())
		.then((response) => {


			console.log(response)
			temp02.innerHTML = response.temp
			feels_like02.innerHTML = response.feels_like
			humidity02.innerHTML = response.humidity
			min_temp02.innerHTML = response.min_temp
			max_temp02.innerHTML = response.max_temp
			wind_speed02.innerHTML = response.wind_speed
			wind_degrees02.innerHTML = response.wind_degrees
			sunrise02.innerHTML = response.sunrise
			sunset02.innerHTML = response.sunset

		})
		.catch(err => console.error(err))
};
const getWeather03 = (city3) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			temp03.innerHTML = response.temp
			feels_like03.innerHTML = response.feels_like
			humidity03.innerHTML = response.humidity
			min_temp03.innerHTML = response.min_temp
			max_temp03.innerHTML = response.max_temp
			wind_speed03.innerHTML = response.wind_speed
			wind_degrees03.innerHTML = response.wind_degrees
			sunrise03.innerHTML = response.sunrise
			sunset03.innerHTML = response.sunset

		})
		.catch(err => console.error(err))
};
const getWeather04 = (city4) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			temp04.innerHTML = response.temp
			feels_like04.innerHTML = response.feels_like
			humidity04.innerHTML = response.humidity
			min_temp04.innerHTML = response.min_temp
			max_temp04.innerHTML = response.max_temp
			wind_speed04.innerHTML = response.wind_speed
			wind_degrees04.innerHTML = response.wind_degrees
			sunrise04.innerHTML = response.sunrise
			sunset04.innerHTML = response.sunset

		})
		.catch(err => console.error(err))
};

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Mangalore");
getWeather01("Shanghai");
getWeather02("Tokyo");
getWeather03("Delhi");
getWeather04("Paris");