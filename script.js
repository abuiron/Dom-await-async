//async / await
// 1. need to give the function async
// await can used only inside the async function


//promise using then and catch

function display(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>console.error(error))
}


//async / await
//

//weather details

async function getWeather(lat,lon){
    const API_KEY = "0ee99e37a1a597232d5edbdc04f41494"
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    let res = await fetch(url);
    let data = await res.json() 

    //converting kelvin to celcius
    let temp = Math.round(data.main.temp - 273.15)

    alert(`The weather is : ${data.weather[0].description} with temprature of : ${temp} Celcius`)

}



async function display1(){

    try{
        let res = await fetch('https://restcountries.com/v3.1/all')
        let data = await res.json()
        if(data)
        {

            let root = document.getElementById("root")
            
            data.forEach((e)=>{
                let div = document.createElement("div")
            div.innerHTML=`
          <div class="card cd">
            <img src="${e.flags.png}" class="card-img-top ci" alt="${e.name.common}">
            <div class="card-body cb">
              <h5 class="card-title">${e.name.common}</h5>
              <p class="card-text">${e.capital?e.capital[0]:"No Capital"}</p>
              <p class="card-text"><a class="mp" href="${e.maps.googleMaps}">Location</a></p>
              <button class="btn btn-primary" onclick="getWeather(${e.latlng[0]},${e.latlng[1]})">Go weather</button>
            </div>
          </div>`

          root.appendChild(div)
            })
        }
        else{
            
        }
    }
    catch(error)
    {
        console.error(error)
    }
}

display1()
display()