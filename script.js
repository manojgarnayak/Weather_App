const API_KEY = "311f2765388f25c8b24a896ae1756652";

const renderWeatherInfo = (data) => {
    let newPara = document.createElement('p');
        newPara.textContent = `${data?.main?.temp.toFixed(2)} C`
        document.body.appendChild(newPara);
}

async function fetchWeatherDetails(){
    try{
        let city = 'Rourkela';

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        const data = await response.json();
        console.log("Weather data:-> " , data);

        renderWeatherInfo(data);
    }
    catch(err){
        //handle error
    }  
}

const switchTab = (clickedTab) => {
    apiErrorContainer.classList.remove("active");

    if(clickedTab !== currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove('active');
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
    }
}

const geolocation = () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No Geolocation Supported");
    }
}

const showPosition = (position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    console.log(lat);
    console.log(long);
}