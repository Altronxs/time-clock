window.onload = function() {
    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridiem = "AM";
        if (seconds < 10) {
            // Add the "0" digit to the front
            // so 9 becomes "09"
            seconds = "0" + seconds;
        }   
        if (minutes < 10) {
            // Add the "0" digit to the front
            // so 9 becomes "09"
            minutes = "0" + minutes;
        }
        if (hours > 12) {
            hours = hours - 12;
            meridiem = "PM";
        } else {
            meridiem = "AM";
        }
        // 0 AM and 0 PM should read as 12
        if (hours === 0) {
            hours = 12;    
        }


        var clockDiv = document.getElementById('clock');
        var ampm = document.getElementById('ampm');
        ampm.innerText = meridiem
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
        console.log( hours + ":" + minutes + ":" + seconds);
    }
    displayTime();
    setInterval(displayTime, 1000);

}

