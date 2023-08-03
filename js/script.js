const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const amorpm = document.getElementById('amorpm');
function timeFormatting(date){
    if(date<10){
        date = `0${date}`;
    }
    return date;
}

function Clock(){
    const date = new Date();
    let hour = date.getHours();
    const minute = timeFormatting(date.getMinutes());
    const second = timeFormatting(date.getSeconds());
    let am='AM';
    if(hour>12){
        hour = hour-12;
        am = "PM";
    }else{
        am = 'AM';
    }
    hour = timeFormatting(hour);

    hours.innerHTML = hour;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;
    amorpm.innerHTML = am;
}

setInterval(Clock,1000);