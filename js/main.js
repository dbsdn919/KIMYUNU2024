/*Countdown*/
var countDownDate = new Date("Sep 3, 2023 18:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60 )) / 1000);


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
},1000);

/*mouse_pointer*/
const cursor = document.querySelector('#mouse_pointer');
document.addEventListener('mousemove', (e) =>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

/*vh error*/
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh + 'px');
window.addEventListener('resize',function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
});