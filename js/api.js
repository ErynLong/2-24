addCityField()

function addCityField(){
    input = document.createElement('input');
    input.placeholder="Enter a city name";
    input.name="city_name";
    input.classList.add("form-control");
    document.body.appendChild(input);
}
function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    cityName = document.getElementsByName("city_name")[0].value
    doAPICall(cityName)
}
function addSubmitButton(){
    button = document.createElement("button");
    document.body.appendChild(button);
    button.innerText = "Submit";
    button.classList.add('btn', 'btn-primary');
    button.addEventListener("click", (e)=>handleSubmit(e))
}
addSubmitButton()
async function doAPICall(cityName){
    result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.toLowerCase()}&units=imperial&appid=87bc12371c069b1d9d87283d99f42f50`)
    console.log(result.data)
    result=result.data
    cbody = document.getElementsByClassName("card-body")[0]
    h5 = document.createElement("h5")
    h5.classList.add("card-title")
    h5.innerText = result.name
    cbody.appendChild(h5)
    
    p = document.createElement("p")
    p.classList.add("card-text")
    p.innerText = result.main.temp_max
    cbody.appendChild(p)
    cbody = document.getElementsByClassName("card-body")[0]

    p = document.createElement("p")
    p.classList.add("card-text-two")
    p.innerText = result.main.temp_min
    cbody.appendChild(p)
    cbody = document.getElementsByClassName("card-body")[0]

    p = document.createElement("p")
    p.classList.add("card-text-three")
    p.innerText = result.main.humidity
    cbody.appendChild(p)
    cbody = document.getElementsByClassName("card-body")[0]

    p = document.createElement("p")
    p.classList.add("card-text-four")
    p.innerText = result.weather[0].main
    cbody.appendChild(p)
    cbody = document.getElementsByClassName("card-body")[0]
}
