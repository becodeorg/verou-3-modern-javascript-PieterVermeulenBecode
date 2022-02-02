/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./data.gitignore/config.js":
/*!**********************************!*\
  !*** ./data.gitignore/config.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Data = {\n    key : '1dedbb6e934a73a79f3150eb6f17794f',\n    secretKey: 'IKEskFZD4J-FAgtMxX2AKilucM3MMqDcgGZ1Kq3vfMs',\n    accesKey:'11jA1IIh-tl6AyvZnUYojHEpMoCdSzRPFiA5wSNmxow'\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);\n\n\n\n//# sourceURL=webpack://modern_javascript/./data.gitignore/config.js?");

/***/ }),

/***/ "./displayWeather.js":
/*!***************************!*\
  !*** ./displayWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst displayWeather=(data)=>{\n    const voorspelZone=document.getElementById(\"voorspelling\");\n    voorspelZone.innerHTML=\"\";\n    let dagenVanDeWeek=getFirstFiveDays();\n       \n    for(let i=0;i<40;i=i+8){    \n        const newDiv4=document.createElement(\"div\");\n        newDiv4.className=\"eenDag\";\n        voorspelZone.appendChild(newDiv4);\n\n        const newTitle=document.createElement(\"h3\");\n        newTitle.innerText= dagenVanDeWeek[i/8];\n        newDiv4.appendChild(newTitle);\n        \n        const newDiv2=document.createElement(\"div\");\n        newDiv2.innerText=\"Temp: \"+(data.list[i].main.temp-273.15).toFixed(2)+ '°C';\n        newDiv4.appendChild(newDiv2);\n            \n        const newImg=document.createElement(\"img\");\n        newImg.src=\"http://openweathermap.org/img/wn/\"+data.list[i].weather[0].icon+\".png\";\n        newDiv4.appendChild(newImg);\n\n        const newDiv3=document.createElement(\"div\");\n        newDiv3.innerText=\"Feel's like: \"+(data.list[i].main.feels_like-273.15).toFixed(2)+ \"°C\";\n        newDiv4.appendChild(newDiv3);\n    }\n}\nconst daysInMonth=(month,year)=>{    \n    return new Date(year, month, 0).getDate();\n    //returns number of days in the month 28,29,30 or 31\n}\nconst nextDay=(dayPrevious,monthPrevious)=>{\n    let daymonth={\n        nextDay:\"\",\n        nextMonth:\"\"\n    }\n    let daysInThisMonth=daysInMonth(monthPrevious,2022);\n    if (dayPrevious<daysInThisMonth)\n        {\n            daymonth.nextDay=dayPrevious+1;\n            daymonth.nextMonth=monthPrevious;\n    }else {\n        daymonth.nextDay=1;\n        daymonth.nextMonth=monthPrevious+1;\n    }\n    return daymonth;\n}\n\nconst getFirstFiveDays=()=>{\n    let d=new Date();    \n    let day = d.getDate();    \n    let month=d.getMonth()+1;\n    \n    let firstFiveDays=[]\n    for (let i=0;i<5;i++){\n        firstFiveDays[i]=day+\"/\"+month\n        let daymonth=nextDay(day,month);\n        day=daymonth.nextDay;\n        month=daymonth.nextMonth;        \n    }\n    return firstFiveDays;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWeather);\n\n//# sourceURL=webpack://modern_javascript/./displayWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_gitignore_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data.gitignore/config.js */ \"./data.gitignore/config.js\");\n/* harmony import */ var _displayWeather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../displayWeather.js */ \"./displayWeather.js\");\n\n\nwindow.onload = ()=> {\n      \n    fetchAllCountries();\n    document.getElementById(\"landen\").focus(); \n    \n};\n\nconst startWeatherApp=(countryData)=>{\n    createCountryList(countryData);   \n    document.getElementById(\"steden\").onchange= () => citiesChanged(countryData);    \n    document.getElementById(\"landen\").onchange=()=>  createCityList(countryData);\n}\n\nconst citiesChanged=(countryData)=>{\n    fetchWeather(countryData);\n    fetchPicture();\n    changeTitle();\n}\nconst changeTitle=()=>{\n    const stad =getCityName();\n    document.getElementById(\"titel\").innerHTML=\"What is the weather in <span class='bold'>\"+stad+\"</span>\"     \n}\nconst createCityList=(countryData)=>{\n    const landenLijst=document.getElementById(\"landen\");  \n    document.getElementById(\"steden\").innerHTML=\"<option>Choose the city</option>\";\n   \n   for(let i=0;i<countryData.length;i++){\n       let landNaam=countryData[i].country;   \n       if(landenLijst.value==landNaam){        \n            createCityListOptions(countryData,i);\n            document.getElementById(\"steden\").focus();\n        }\n    }  \n}\nconst createCityListOptions=(countryData,i)=>{\n    for(let b=0;b<countryData[i].cities.length;b++){\n        const newOption=document.createElement(\"option\")\n        newOption.innerText=countryData[i].cities[b];\n        document.getElementById(\"steden\").appendChild(newOption);\n    }\n}\nconst getLandCode=(countryData)=>{        \n    const landenLijst=document.getElementById(\"landen\");    \n    for(let i=0;i<countryData.length;i++){\n        let landNaam=countryData[i].country;            \n        if(landenLijst.value==landNaam){\n            let landCode=countryData[i].iso2;\n            return landCode;\n        }\n    }\n}\nconst createCountryList=(countryData)=>{\n    for(let i=0;i<countryData.length;i++){            \n        const newOption=document.createElement(\"option\");\n        newOption.innerText=countryData[i].country;\n        document.getElementById(\"landen\").appendChild(newOption);\n    }        \n}\nconst getCityName=()=>{\n    const cityList=document.getElementById(\"steden\");    \n    return cityList.value;\n}\n\nconst fetchPicture=()=>{\n    let count=0;\n    const stad=getCityName();   \n   fetch(\"https://api.unsplash.com/search/photos?query=\" + stad + \"&client_id=\" +_data_gitignore_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].accesKey)\n   .then(function(resp) { return resp.json() })\n   .then(function(image) {\n       document.body.style.backgroundImage=\"url(\"+image.results[count].urls.regular+\")\";\n    //    setInterval(()=>{ \n    //     document.body.style.backgroundImage=\"url(\"+image.results[count].urls.regular+\")\";\n    //     count=count+1;\n    //     if (count==9){\n    //         count=0;\n    //     }\n    // }, 10000);       \n    });\n}\n\nconst fetchWeather= async(countryData)=>{  \n    const landCode=getLandCode(countryData);\n    const stad=getCityName();   \n    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+stad+','+landCode+'&APPID='+_data_gitignore_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].key)  \n    .then(function(resp) { return resp.json() })\n    .then(function(data) {\n        (0,_displayWeather_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n    })\n    .catch(function() {\n        // catch any errors\n        alert(stad+\" is not known in this application\");\n        document.getElementById(\"voorspelling\").innerHTML=\"<h1>Please select a different city</h1>\";\n    });\n}\n\nconst fetchAllCountries= async()=> {\n    fetch('https://countriesnow.space/api/v0.1/countries')  \n    .then(function(resp) { return resp.json() })\n    .then((json) => json.data)\n    .then(startWeatherApp)                \n    .catch(function(error) {      \n        console.log(error);  \n        console.log(\"their was an error with fetchAllCountries function\")\n    });\n}\n\n//# sourceURL=webpack://modern_javascript/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;