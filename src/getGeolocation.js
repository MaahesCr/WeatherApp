const apiInfo = () => {
    return fetch('https://geolocation-db.com/json/')
        .then(data => {
          data = data.json()
          //console.log('getGeolocatin.js data: ', data)
          return data;
        })
}

export default apiInfo;

