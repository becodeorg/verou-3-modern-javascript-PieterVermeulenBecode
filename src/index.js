import Data from "../data.gitignore/config.js";
import displayWeather from "../displayWeather.js";
window.onload = ()=> {
      
    fetchAllCountries();
    document.getElementById("landen").focus(); 
    
};

const startWeatherApp=(countryData)=>{
    createCountryList(countryData);   
    document.getElementById("steden").onchange= () => citiesChanged(countryData);    
    document.getElementById("landen").onchange=()=>  createCityList(countryData);
}

const citiesChanged=(countryData)=>{
    fetchWeather(countryData);
    fetchPicture();
    changeTitle();
}
const changeTitle=()=>{
    const stad =getCityName();
    document.getElementById("titel").innerHTML="What is the weather in <span class='bold'>"+stad+"</span>"     
}
const createCityList=(countryData)=>{
    const landenLijst=document.getElementById("landen");  
    document.getElementById("steden").innerHTML="<option>Choose the city</option>";
   
   for(let i=0;i<countryData.length;i++){
       let landNaam=countryData[i].country;   
       if(landenLijst.value==landNaam){        
            createCityListOptions(countryData,i);
            document.getElementById("steden").focus();
        }
    }  
}
const createCityListOptions=(countryData,i)=>{
    for(let b=0;b<countryData[i].cities.length;b++){
        const newOption=document.createElement("option")
        newOption.innerText=countryData[i].cities[b];
        document.getElementById("steden").appendChild(newOption);
    }
}
const getLandCode=(countryData)=>{        
    const landenLijst=document.getElementById("landen");    
    for(let i=0;i<countryData.length;i++){
        let landNaam=countryData[i].country;            
        if(landenLijst.value==landNaam){
            let landCode=countryData[i].iso2;
            return landCode;
        }
    }
}
const createCountryList=(countryData)=>{
    for(let i=0;i<countryData.length;i++){            
        const newOption=document.createElement("option");
        newOption.innerText=countryData[i].country;
        document.getElementById("landen").appendChild(newOption);
    }        
}
const getCityName=()=>{
    const cityList=document.getElementById("steden");    
    return cityList.value;
}

const fetchPicture=()=>{
    let count=0;
    const stad=getCityName();   
   fetch("https://api.unsplash.com/search/photos?query=" + stad + "&client_id=" +Data.accesKey)
   .then(function(resp) { return resp.json() })
   .then(function(image) {
       document.body.style.backgroundImage="url("+image.results[count].urls.regular+")";
    //    setInterval(()=>{ 
    //     document.body.style.backgroundImage="url("+image.results[count].urls.regular+")";
    //     count=count+1;
    //     if (count==9){
    //         count=0;
    //     }
    // }, 10000);       
    });
}

const fetchWeather= async(countryData)=>{  
    const landCode=getLandCode(countryData);
    const stad=getCityName();   
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+stad+','+landCode+'&APPID='+Data.key)  
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        displayWeather(data);
    })
    .catch(function() {
        // catch any errors
        alert(stad+" is not known in this application");
        document.getElementById("voorspelling").innerHTML="<h1>Please select a different city</h1>";
    });
}

const fetchAllCountries= async()=> {
    fetch('https://countriesnow.space/api/v0.1/countries')  
    .then(function(resp) { return resp.json() })
    .then((json) => json.data)
    .then(startWeatherApp)                
    .catch(function(error) {      
        console.log(error);  
        console.log("their was an error with fetchAllCountries function")
    });
}