let temperature = 0
let isRaining = false
let rain

let weather
let advice

if(temperature < 0){
    weather = "Շատ ցուրտ է" 
   // alert("Շատ ցուրտ է")
}else if(temperature <= 15){
    weather = "Ցուրտ է"
    //alert("Ցուրտ է")
}else if(temperature >= 16 && temperature <= 25){
    weather = "Հաճելի եղանակ է"
    //alert("Հաճելի եղանակ է")
}else if(temperature >= 26 && temperature <= 35){
    weather = "Շատ շոգ է"
    //alert("Շատ շոգ է")
}

if(isRaining === true){
    rain = "այո"
    advice = "Վերցրու անձրևանոց"
    //alert("Վերցրու անձրևանոց")
}else{
    rain = "ոչ"
    advice = "Անձրևանոց պետք չէ"
    //alert("Անձրևանոց պետք չէ")
}

console.log(`Ջերմաստիճան : ${temperature}`)
console.log(`Եղանակ : ${weather}`)
console.log(`Անձրև : ${rain}`)
console.log(`Խորհուրդ : ${advice}`)