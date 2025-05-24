function updateTime(){
    let now = new Date();
// Get the current hours
let hours = now.getHours();
let hours12 = hours % 12;
if(hours12 === 0){
    hours12 = 12
}
hours12 = hours12<10 ? '0' + hours12 : hours12;
document.querySelector('.left').textContent = hours12;

// get the current minutes
let minutes = now.getMinutes();
document.querySelector('.right').textContent = minutes;
minutes = minutes < 10 ? '0' + minutes : minutes;

let seconds = now.getSeconds();
seconds = seconds < 10 ? '0' + seconds : seconds;
document.querySelector('.second').textContent = seconds;
}

updateTime();
setInterval(updateTime, 1000);