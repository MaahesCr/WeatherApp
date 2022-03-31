//--- del.js ---
/*
let lat;
let lon;


const del = () => {
  return getPromise();
}

let promise = new Promise((resolve, reject) => {

  navigator.geolocation.getCurrentPosition(getCoor, errorCoor, {maximumAge:60000, timeout:5000, enableHighAccuracy:true});

  function getCoor(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    
    let coords = [lat, lon]
    resolve(coords);
  }

  function errorCoor () {
    console.log('error');
  }

});

async function getPromise () {
 
  return promise
  .then()
  .then()

}
  

/*
const promise1 = new Promise( () => {
  function coord () {navigator.geolocation.getCurrentPosition(getCoor, errorCoor, {maximumAge:60000, timeout:5000, enableHighAccuracy:true});

    function getCoor(position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
      console.log('lat: ',lat)
      RETURN(lat);
    }

    function errorCoor () {
      console.log('error');
    }
  }

  function RETURN (lat){
    console.log('LAT: ',lat);
    //Promise.resolve(lat);
    return lat;
  }

  coord();
})

const del = () => {
  function coord () {navigator.geolocation.getCurrentPosition(getCoor, errorCoor, {maximumAge:60000, timeout:5000, enableHighAccuracy:true});

    function getCoor(position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
      console.log('lat: ',lat)
      RETURN(lat);
    }

    function errorCoor () {
      console.log('error');
    }
  }

  function RETURN (lat){
    console.log('LAT: ',lat);
    return Promise.resolve(lat);
    //return lat;
  }

  coord();
 
}

const del2 = () => { 
    navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;

    const currentPosition = [lat, lng]
    console.log('currentPosition: ', currentPosition)
    
    return currentPosition;
  })
}

export default promise1;
*/

//export default del;

/*
{
  
  promise
    .then(
      result => {
        b = result;
        //return result;
        // alert("Fulfilled: " + result); 
      },
      error => {
        alert("Rejected: " + error); 
          }
    ).then(() => {
      console.log('b: ',b); 
      return b
    });
  }
  */

//--- end del.js ---

// ---getApi.js ---

/*

const getApi = () => {
    
    let outputArray = [];

    let lat;
    let lon;
    let url;
    const Key = '8f14a99c167bb0e2da2199289ec32efe';

    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

    async function success(pos) {
        let crd = pos.coords;
      
        lat = crd.latitude;
        lon = crd.accuracy;
        url = getUrl(lat, lon, Key);   
        
        await LetFetch(url);
      }
      
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
    navigator.geolocation.getCurrentPosition(success, error, options);
      
    function LetFetch (url) {
        return fetch(url) 
            .then(response => response.json())
            .then(commits => {
                //outputArray = outputArray.push(commits.sys.country); 
                //console.log('out ', outputArray);    
                
                return commits;
        })
    }

    //return outputArray;
}

function getUrl(lat, lon, Key)  {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Key}`;
}

export default getApi;
*/

// --- end of getApi.js ---

// --- getApiInfo.js ---

/*
let outputArray = [];

let lat;
let lon;
let url;
const Key = '8f14a99c167bb0e2da2199289ec32efe';

    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

    async function success(pos) {
        let crd = pos.coords;
      
        lat = crd.latitude;
        lon = crd.accuracy;
        url = getUrl(lat, lon, Key);   
        
        await fetchTableData(url);
      }
      
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    
    async function getLatLon () {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }

    getLatLon();

const fetchTableData = (url) => {
    return fetch(url)
      .then(result => result.json())
      .then(data => {
          console.log(data)
          return data;
        })
  }

  
  export default fetchTableData();

  function getUrl(lat, lon, Key)  {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Key}`;
}
  
*/

// --- end of getApiInfo.js ---

// --- getApiTwo.js ---
/*
const fetchTableData = () => {
    return fetch('https://api.openweathermap.org/data/2.5/weather?lat=50&lon=5&appid=8f14a99c167bb0e2da2199289ec32efe')
      .then(result => result.json())
      .then(data => {
        return data;
        })
  }

  export default fetchTableData;
*/

// --- end of getApiTwo.js ---

// --- getApiThree.js ---
/*
const getApiThree = () => {
    let lat;
    let lon;

    return getLatLon(lat, lon);
}

async function getLatLon (lat, lon) {
    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

    function success(pos) {
        let crd = pos.coords;
        lat = crd.latitude;
        lon = crd.accuracy;
        return lat;
        console.log('s ',pos.coords)
        /*
        return pos.coords;

        /*
        let crd = pos.coords;
        return lat = crd.latitude;
        lon = crd.accuracy;
    }
      
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    navigator.geolocation.getCurrentPosition(success, error, options);
}

function getUrl () {

}

function getApi () {

}

export default getApiThree;
*/

