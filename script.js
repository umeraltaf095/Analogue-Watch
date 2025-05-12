const handOfSecond = document.getElementById("handOfSecond");
const handOfMinute = document.getElementById("handOfMinute");
const handOfHour = document.getElementById("handOfHour")
const rotateSecond = 360/60 ; 
const rotateMin = 360/60;
const rotateHours = 360/12;
console.log(rotateHours);




function time(){
const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
 console.log(`${hours}: ${minutes}: ${seconds}`);
handOfSecond.style.transform = `translate(-50%, -100%) rotate(${seconds*rotateSecond}deg)`;
  handOfHour.style.transform = `translate(-50%, -100%) rotate(${hours*rotateHours}deg)`;
 handOfMinute.style.transform = `translate(-50%, -100%) rotate(${minutes*rotateMin}deg)`;
console.log(minutes*rotateMin);




}

setInterval(time,1000);



