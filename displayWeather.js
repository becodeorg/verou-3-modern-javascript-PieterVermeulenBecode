
const displayWeather=(data)=>{
    const voorspelZone=document.getElementById("voorspelling");
    voorspelZone.innerHTML="";
    let dagenVanDeWeek=getFirstFiveDays();
       
    for(let i=0;i<40;i=i+8){    
        const newDiv4=document.createElement("div");
        newDiv4.className="eenDag";
        voorspelZone.appendChild(newDiv4);

        const newTitle=document.createElement("h3");
        newTitle.innerText= dagenVanDeWeek[i/8];
        newDiv4.appendChild(newTitle);
        
        const newDiv2=document.createElement("div");
        newDiv2.innerText="Temp: "+(data.list[i].main.temp-273.15).toFixed(2)+ '°C';
        newDiv4.appendChild(newDiv2);
            
        const newImg=document.createElement("img");
        newImg.src="http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+".png";
        newDiv4.appendChild(newImg);

        const newDiv3=document.createElement("div");
        newDiv3.innerText="Feel's like: "+(data.list[i].main.feels_like-273.15).toFixed(2)+ "°C";
        newDiv4.appendChild(newDiv3);
    }
}
const daysInMonth=(month,year)=>{    
    return new Date(year, month, 0).getDate();
    //returns number of days in the month 28,29,30 or 31
}
const nextDay=(dayPrevious,monthPrevious)=>{
    let daymonth={
        nextDay:"",
        nextMonth:""
    }
    let daysInThisMonth=daysInMonth(monthPrevious,2022);
    if (dayPrevious<daysInThisMonth)
        {
            daymonth.nextDay=dayPrevious+1;
            daymonth.nextMonth=monthPrevious;
    }else {
        daymonth.nextDay=1;
        daymonth.nextMonth=monthPrevious+1;
    }
    return daymonth;
}

const getFirstFiveDays=()=>{
    let d=new Date();    
    let day = d.getDate();    
    let month=d.getMonth()+1;
    
    let firstFiveDays=[]
    for (let i=0;i<5;i++){
        firstFiveDays[i]=day+"/"+month
        let daymonth=nextDay(day,month);
        day=daymonth.nextDay;
        month=daymonth.nextMonth;        
    }
    return firstFiveDays;
}
export default displayWeather;