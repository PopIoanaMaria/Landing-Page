//DOM element
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

document.body.style.backgroundImage = "url('bkk.jpg')";

//show time
function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();


    //set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;
    setTimeout(showTime, 1000);
}

//add zero
function addZero(n) {
    return (parseInt(n,10) < 10 ? '0' : '') + n;
}

//set background and greeting
function setBgGreet() {
    let today = new Date();
    let hour = today.getHours();

     if( hour >= 5 && hour < 12) {
        //morning
        document.body.style.backgroundImage = "url('morning_bk.jpg')";
        greeting.textContent = 'Good Morning';
    } else if(hour >= 12 && hour < 17){
        //afternoon
        document.body.style.backgroungImage = "url('afernoon_bk.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else if(hour >= 17 && hour < 5){
        //evening
        document.body.style.backgroundImage = "url('evening_bk.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'red';
    }
}

//get Name
function getName() {
    if(localStorage.getItem('namee') === null) {
        namee.textContent = '[Enter Name]';
    } else {
        namee.textContent = localStorage.getItem('namee');
    }
}

//set Name 
function setName(e) {
    if(e.type ==='keypress') {
        //make sure enter is pressed
        if(e.wich == 13 || e.keyCode == 13){
            localStorage.setItem('namee', e.target.innerHTML);
            namee.blur();
        }
    } else {
        localStorage.setItem('namee',e.target.innerHTML);
    }
}

//get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//set focus 
function setFocus(e) {
    if(e.type ==='keypress') {
        //make sure enter is pressed
        if(e.wich == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerHTML);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus',e.target.innerHTML);
    }
}

namee.addEventLisener('keypress',setName);
namee.addEventLisener('blur', setName);

focus.addEventLisener('keypress',setFocus);
focus.addEventLisener('blur', setFocus);

//Run 
showTime();
setBgGreet();
getName();
getFocus();