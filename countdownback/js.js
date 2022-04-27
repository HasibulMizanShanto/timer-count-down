// let newyear = "Jan 01, 2022 00:00:00";
// console.log(new Date(newyear).getTime())
// console.log(new Date().getTime())
// console.log(Date.now())
// console.log(new Date())
// console.log(Math.floor(4.2))

(function () {
    const second=1000;
    minute = second*60;
    hour = minute*60;
    day = hour*24;

    let newyear = "01 jan 2023 00:00:00";
    countDown = new Date(newyear).getTime()

    x = setInterval(function(){
        let now = new Date().getTime();
        distance = countDown - now;
     
    document.getElementById("days").innerText = Math.floor(distance/(day)),
    document.getElementById("hours").innerText = Math.floor((distance % day)/hour),
    document.getElementById("minutes").innerText = Math.floor((distance % hour)/minute),
    document.getElementById("seconds").innerText = Math.floor((distance % minute)/second);

    
    },0)
}());