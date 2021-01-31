let morningTime = 6;
let afternoonTime = 12;
let eveningTime = 18;
let partyTime;

const getTime = () => {
    let date = new Date();
    let timeDisplay = date.getHours() + "-" + ("0" + date.getMinutes()).slice(-2) + "-" + ("0" + date.getSeconds()).slice(-2);
    let currentHour = date.getHours();
    let timeFrame;
    if (currentHour >= 12) {
        timeFrame = "PM!";
    } else {
        timeFrame = "AM!";
    }
    document.getElementById("time-displayer").innerHTML = timeDisplay + " " + timeFrame;
}

getTime();
setInterval(getTime, 1000);

//Showing image functions
function onlyDisplayMorningImage() {
    document.getElementById('morning').style.display = 'block';
    document.getElementById('afternoon').style.display = 'none';
    document.getElementById('evening').style.display = 'none';
}
function onlyDisplayAfternoonImage() {
    document.getElementById('afternoon').style.display = 'block';
    document.getElementById('morning').style.display = 'none';
    document.getElementById('evening').style.display = 'none';
}
function onlyDisplayEveningImage() {
    document.getElementById('evening').style.display = 'block';
    document.getElementById('morning').style.display = 'none';
    document.getElementById('afternoon').style.display = 'none';
}
function removeDisplayedImage() {
    document.getElementById('morning').style.display = 'none';
    document.getElementById('afternoon').style.display = 'none';
    document.getElementById('evening').style.display = 'none';
}

//logic for displaying image
function getDisplayImage() {
    let currentHour = new Date().getHours();
    console.log("currenthour", currentHour, "mor", morningTime, "aft", afternoonTime, "eve", eveningTime, "party", partyTime);
    if (currentHour == partyTime) {
        document.getElementById('partytime').style.display = 'block';
        document.getElementById('partyTimeButton').innerHTML = 'PARTY OVER?';
        removeDisplayedImage();
    } else if (currentHour == morningTime) {
        onlyDisplayMorningImage();
    } else if (currentHour == afternoonTime) {
        onlyDisplayAfternoonImage()
    } else if (currentHour == eveningTime) {
        onlyDisplayEveningImage()
    } else if (currentHour < morningTime) {
        onlyDisplayEveningImage()
    } else if (currentHour < afternoonTime) {
        onlyDisplayMorningImage()
    } else if (currentHour < eveningTime) {
        onlyDisplayAfternoonImage()
    } else if (currentHour >= 6 && currentHour < 12) {
        onlyDisplayMorningImage();
    } else if (currentHour >= 12 && currentHour < 18) {
        onlyDisplayAfternoonImage();
    } else if (currentHour >= 18) {
        onlyDisplayEveningImage();
    }
}
//Wake Up selector
let wakeUpSelector = document.getElementById('wakeUpTimeSelector');

let wakeUpEvent = () => {
    let wakeUp = wakeUpSelector.value;
    morningTime = wakeUp;
}

wakeUpSelector.addEventListener("change", wakeUpEvent);

//Afternoon Selector
let afternoonSelector = document.getElementById('AfternoonSelector');

let afternoonEvent = () => {
    let afternoon = afternoonSelector.value;
    afternoonTime = afternoon;
}

afternoonSelector.addEventListener("change", afternoonEvent);

//Evening Selector
let eveningSelector = document.getElementById('EveningSelector');

let eveningEvent = () => {
    let evening = eveningSelector.value
    eveningTime = evening;
}
eveningSelector.addEventListener("change", eveningEvent);

//Party Time selector
let updatePartyTime = () => {
    let partyTimeCTAText = document.getElementById('partyTimeButton').innerHTML;
    if (partyTimeCTAText === "Party!") {
        let party = new Date().getHours();
        partyTime = party;
        getDisplayImage();
    } else {
        partyTime = '';
        document.getElementById('partyTimeButton').innerHTML = 'Party!';
        document.getElementById('partytime').style.display = 'none';
        getDisplayImage();
    }
}
let partyTimeCTA = document.querySelector('#partyTimeButton');
partyTimeCTA.addEventListener('click', updatePartyTime);


getDisplayImage();
setInterval(getDisplayImage, 1000)