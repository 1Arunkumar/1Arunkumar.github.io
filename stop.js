var hr = 0;//initializing hour value
var min = 0;//initializing minute value
var sec = 0;//initializing secnds value
var count = 0;//initializing miliseconds value

var timer = false;

function fun(id) {
    return document.getElementById(id);
}

function start() { // start button function
    timer = true;
    stopwatch();
}

function stop() { // stop button function
    timer = false;

}

function reset() { // reset button function
    timer = false;
    //resets the value to zero again
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    // displays the resetted values
    fun("hr").innerHTML = "00";
    fun("min").innerHTML = "00";
    fun("sec").innerHTML = "00";
    fun("count").innerHTML = "00";

}

function stopwatch() { // stopwatch function
    if (timer == true)
        count = count + 1;

    if (count == 99) {
        sec = sec + 1;
        count = 0;
    }
    if (sec == 59) {
        min = min + 1;
        sec = 0;
    }
    if (min == 59) {
        hr = hr + 1;
        min = 0;
        sec = 0;
    }

    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    if (hr < 10) {
        hrString = "0" + hrString;
    }
    if (min < 10) {
        minString = "0" + minString;
    }
    if (sec < 10) {
        secString = "0" + secString;
    }
    if (count < 10) {
        countString = "0" + countString;
    }
   //updates the value to html as the time changes 
    fun("hr").innerHTML = hrString;
    fun("min").innerHTML = minString;
    fun("sec").innerHTML = secString;
    fun("count").innerHTML = countString;
    setTimeout("stopwatch()", 10)
}

function lap() { //lap function
    console.log(hr, min, sec, count)
    var Laps = fun('laps');
    Laps.innerHTML += "<li>" + hr + ":" + min + ":" + sec + ":" + count + "</li>";
}

function clearLap() {
    fun('laps').remove();
}

function getLocalTime(){
    const d = new Date().toLocaleTimeString();
    console.log(d);
}