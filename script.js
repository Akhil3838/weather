



const search = async()=>{
    console.log(wheather.value);
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${wheather.value}&appid=5fe36b192ffd1c36dffb6752bc1722b2`)
    data.json().then((mood)=>{
        nam=mood.name
        temp=Math.floor(mood.main.temp)-273
        humidity=mood.main.humidity
        pressure=mood.main.pressure
        wher=mood.weather[0].main
        wind=mood.wind.speed
        // icon change
            let url;
         switch (wher) {
             case "Rain":
              url= "./Rain.svg";
                 break;
              case" Clear":
                 url= "./Clear.svg";
                        break;
             case "Mist":
                  url= "./Mist.svg";
                         break;
             case "Snow":
                  url= "./Snow.svg";
                          break;
             case "Haze":
                 url= "./Haze.svg";
                         break;
             case "Clouds":
                  url= "./Clouds.svg";
                          break;
             default:
                 url="./weather.svg"
                 break;
     
         }

     
     

        result.innerHTML=`            <div class="row">
                <div class="col-md-6">
                   <div class=" align-items-center justify-content-center">
                        <h1 class="text-center mt-3" style="font-size: 110px;">${temp}&deg;c</h1>
                        <!-- <h6 class="text-center ms-3"></h6> -->
                   </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-center justify-content-center mb-4">
                        <h4 class="text-center ms-3 shadow-lg border-dark fw-bolder p-4 rounded-pill ">${wher}</h4>
                        <img id="img" src=${url} alt="" style="height: 190px;">
    
                        <!-- <i class="fa-solid fa-temperature-three-quarters fa-sm"></i> <small></small> -->
    
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                
                <div class="col-md-10">
                             
                    <div class="row    d-flex align-items-center justify-content-center">
                        <!-- <div class="col-md-2"></div> -->
                        <div class="col-md-3">
                           <div class="text-center border-end"> 
                            <h4 class="fw-bolder"> <i class="fa-solid fa-droplet"></i> Humodity</h4>
                            <h3>${humidity}%</h3>
                        </div>
                        </div>
                        <div class="col-md-3">
                            <div class="text-center border-end"> 
                                <h4 class="fw-bolder"> <i class="fa-solid fa-wind"></i>Wind</h4>
                                <h3>${wind} km/h</h3>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="text-center"> 
                                <h4 class="fw-bolder"> <i class="fa-solid fa-temperature-three-quarters"></i>Pressure</h4>
                                <h3>${ pressure} me</h3>
                            </div>
                        </div>
                       <!-- <div class="col-md-2"></div> -->
                    </div>
            
                </div>
                <div class="col-md-1"></div>
            </div>
`
place.innerHTML=`             <div class="col-md-6">
               <div class=" align-items-center justify-content-center" style="display: grid;">
                    <h1 class="text-center fw-bolder">${nam}</h1>
                    <h6 class="text-center" id=date></h6>
                    
               </div>

            </div>
            <div class="col-md-6">
                <div class="d-flex align-items-center justify-content-center mt-3 ">
                    <input class="w-50 shadow-lg form-control rounded-3 border-2 border-dark " type="text" id="wheather" placeholder="Enter city Name" style="background-color: transparent; ">
                    <button type="button." onclick="search()" class="ms-3 px-4 py-1 rounded-3  text-dark" style="background-color: rgba(252, 247, 247, 0.036);" >Search</button>
               </div>
    

            </div>

            
`

function getTime(){
    //date
    const Time = new Date()
    console.log(Time);
    const hour = Time.getHours()

    console.log(hour );
    const minute = Time.getMinutes()
    console.log(minute );
    const second = Time.getSeconds()
    console.log(second );
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   const month=months[Time.getMonth()]
   const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]
   const day=days[Time.getDay()]
   const year=Time.getFullYear()
   console.log(year);
   

   
           
    setTimeout(()=>{
        getTime()
    },1000)

  date.innerHTML = `${day},${Time.getDate()} ${month} ${year} /${hour}:${minute}PM`
}
getTime()

const changeBackground=(wher)=>{
    let bgd;
    switch (wher) {
        case "Rain":
         bgd= "url('./rainbgg.gif')"
            break;
         case" Clear":
            bgd= "url('./clear.gif')";
                   break;
        case "Snow":
             bgd=" url('./snowbg.jpg')";
                     break;
        case "Clouds":
             bgd="url( './clouds.gif')";
                     break;
         case "Mist":
                 bgd="url( './mistbgg.gif')";
                      break;
         case "Haze":
             bgd="url( './haze2bgg.gif')";
                  break;
         case "Drizzle":
             bgd="url( './drizzlebgg.gif')";
                     break;
       
        default:
            bgd="url('./clear.gif')"
            break;

    }
    
  document.getElementById("bg").style.backgroundImage=bgd


}
changeBackground(wher)

 
        
        
    }).catch((err)=>{
        alert("City not found !! Try another One")
    })
}