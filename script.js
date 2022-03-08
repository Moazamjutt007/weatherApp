var city=document.querySelector(".city")
var temp=document.querySelector(".temp")
var max=document.querySelector(".max")
var haza=document.querySelector(".haza")
var box=document.querySelector(".box")
var btn=document.querySelector("button")
var inp=document.querySelector("input")
var main=document.querySelector(".main")

function check(){
var input=document.querySelector("input")
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=43746d95a500fe466a4173f77b84f71c&units=metric`)
     
    .then(res=>res.json())
.then(app=>weather(app))
}


function  weather(app){
    console.log(app);
    city.innerHTML=`${app.name},${app.sys.country}`
   temp.innerHTML= `${Math.trunc(app.main.temp)}&deg;C`
   max.innerHTML= `${Math.trunc(app.main.temp_max)}&deg;C(min) ${Math.trunc(app.main.temp_min)}&deg;C(min)`
   haza.innerHTML=`${app.weather[0].main}`
   
   
   switch(app.weather[0].main){
       case "Snow": main.style.backgroundImage="url(./pexels-mikhail-nilov-6530841.jpg)"
       break;
       case "Haze": main.style.backgroundImage="url(./pexels-johannes-plenio-1165991.jpg)"
       break;
       case "Sunny": main.style.backgroundImage="url(./pexels-fabian-wiktor-4011450.jpg)"
       break;
       case "Rain": main.style.backgroundImage="url(./pexels-kaique-rocha-125510.jpg)"
       break;
       case "Smoke": main.style.backgroundImage="url(./pexels-eberhard-grossgasteiger-1019979.jpg)"
       break;
       case "Clouds": main.style.backgroundImage="url(./pexels-moritz-böing-846980.jpg)"
       break;
       case "Clear": main.style.backgroundImage="url(./pexels-maksim-goncharenok-5046350.jpg)"
       break;
       case "mist": main.style.backgroundImage="url(./pexels-quang-nguyen-vinh-2132180.jpg)"
       break;
       default: main.style.backgroundImage="url(./pexels-aleksandar-pasaric-325185.jpg)"
   }
   
 
}
