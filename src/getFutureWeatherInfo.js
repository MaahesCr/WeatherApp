import apiInfo from './getGeolocation';

let [lat, lon] = [0, 0];
const Key = '8f14a99c167bb0e2da2199289ec32efe';

const futureWeatherInfo = () => {
    return getWeatherResult();
}

async function getWeatherResult () {
    let latLon = await getLatLon ();
    let url = await getUrl(latLon[0], latLon[1], Key);   
    return await fetchUrl (url);
}

async function fetchUrl (url) {
    return fetch(url)
    .then(data => {
      data = data.json()
      return data;
    })
}

async function getUrl(lat, lon, Key)  {
    let part = 'current, minutely, hourly, alerts';
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${Key}`;
}

async function getLatLon () {
    let location;
    location = await apiInfo().then();
    [lat, lon] = [location.latitude, location.longitude]
    return [lat, lon];
}

export default futureWeatherInfo;