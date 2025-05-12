const handOfSecond = document.getElementById("handOfSecond");
const handOfMinute = document.getElementById("handOfMinute");
const handOfHour = document.getElementById("handOfHour")
const displayTime =  document.getElementById("displayTime")
const displayDate = document.getElementById("displayDate");
const rotateSecond = 360/60 ; 
const rotateMin = 360/60;
const rotateHours = 360/12;
console.log(rotateHours);

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];




function time(){
const currentDate = new Date();
const day = days[currentDate.getDay()];
const date = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

displayDate.textContent = `${date}/${month}/${year}`;





const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
displayTime.textContent = `${day}:${hours}:${minutes}:${seconds}`;
//  console.log(`${hours}: ${minutes}: ${seconds}`);
handOfSecond.style.transform = `translate(-50%, -100%) rotate(${seconds*rotateSecond}deg)`;
  handOfHour.style.transform = `translate(-50%, -100%) rotate(${hours*rotateHours}deg)`;
 handOfMinute.style.transform = `translate(-50%, -100%) rotate(${minutes*rotateMin}deg)`;





}

setInterval(time,1000);






