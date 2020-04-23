window.addEventListener('load', ()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position =>{
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            let api = `https://api.climacell.co/v3/weather/realtime?unit_system=si&apikey=jUYHISZIqP2VaC2mCOYbqoCti6e9V7Fy` 
        })
    }else{
        h1.textContent = 'hey this is not working because reason';
    }

});