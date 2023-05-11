var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

var clock = setInterval(
    function time(){
        var currentTime = new Date();
        var hr = currentTime.getHours();
        var min = currentTime.getMinutes();
        var sec = currentTime.getSeconds();
        if(hr < 10){
            hr = "0"+hr;
        }
        if(min < 10){
            min = "0"+min;
        }
        if(sec < 10){
            sec = "0"+sec;
        }
        hour.innerHTML = hr;
        minute.innerHTML = min;
        second.innerHTML= sec;
    },1000
)