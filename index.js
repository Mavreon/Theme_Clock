const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleBtn = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

toggleBtn.addEventListener('click', (e)=>{
    const html = document.querySelector('html');
    if(html.classList.contains('dark'))
    {
        html.classList.remove('dark')
        toggleBtn.innerHTML = "Dark Mode";
    }
    else{
        html.classList.add('dark')
        toggleBtn.innerHTML = "Light Mode";
    }
})

function setTime()
{
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 11, 0, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;
    if(minutes < 10)
    {
        timeEl.innerHTML = `${hours}:0${minutes}`;
    }
    else
    {
        timeEl.innerHTML = `${hours}:${minutes}`;
    }
    
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
    
}

setTime();
setInterval(setTime, 1000);

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

