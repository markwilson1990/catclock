let date = new Date();
let currentHour = date.getHours();
let morningHours = [06, 07, 08, 09, 10, 11, ""];
let afternoonHours = [12, 13, 14, 15, 16, 17, ""];
let eveningHours = [18, 19, 20, 21, 22, 23, 01, 02, 03, 04, 05, ""];
let lastSelected;

function updateMorningHoursImage2() {
    document.getElementById('morning').style.display = 'block';
    document.getElementById('afternoon').style.display = 'none';
    document.getElementById('evening').style.display = 'none';
    getLastSelected();
}

function updateAfternoonHoursImage2() {
    document.getElementById('afternoon').style.display = 'block';
    document.getElementById('morning').style.display = 'none';
    document.getElementById('evening').style.display = 'none';
    getLastSelected();
}

function updateEveningHoursImage2() {
    document.getElementById('afternoon').style.display = 'block';
    document.getElementById('morning').style.display = 'none';
    document.getElementById('evening').style.display = 'none';
    getLastSelected();
}




// function updateMorningHoursImage() {
//     morningHours.forEach((item) => {
//         if (item === currentHour) {
//             document.getElementById('morning').style.display = 'block';
//             document.getElementById('afternoon').style.display = 'none';
//             document.getElementById('evening').style.display = 'none';
//             getLastSelected();
//         }

//     })
// }
// function updateAfternoonHoursImage() {
//     afternoonHours.forEach((item) => {
//         if (item === currentHour) {
//             document.getElementById('afternoon').style.display = 'block';
//             document.getElementById('morning').style.display = 'none';
//             document.getElementById('evening').style.display = 'none';
//             getLastSelected();
//         }
//     })
// }
// function updateEveningHoursImage() {
//     eveningHours.forEach((item) => {
//         if (item === currentHour) {
//             document.getElementById('evening').style.display = 'block';
//             document.getElementById('morning').style.display = 'none';
//             document.getElementById('afternoon').style.display = 'none';
//             getLastSelected();
//         }
//     })
// }

const getTime = () => {
    let date = new Date();
    let timeDisplay = date.getHours() + "-" + date.getMinutes() + "-" + ("0" + date.getSeconds()).slice(-2);
    document.getElementById("time-displayer").innerHTML = timeDisplay;
}


//Morning Selector
let wakeUpSelector = document.getElementById('wakeUpTimeSelector');

let wakeUpEvent = () => {
    let wakeUpTime = parseInt(wakeUpSelector.value);
    let currentHour = new Date().getHours();
    if (wakeUpTime === currentHour) {
        updateMorningHoursImage2();
    }
}
wakeUpSelector.addEventListener("change", wakeUpEvent);

//Afternoon Selector
let afternoonSelector = document.getElementById('AfternoonSelector');

let afternoonEvent = () => {
    let afternoonTime = parseInt(afternoonSelector.value);
    afternoonHours.splice(-1)
    afternoonHours.push(afternoonTime);
    updateAfternoonHoursImage2();
}
afternoonSelector.addEventListener("change", afternoonEvent);

//Evening Selector
let eveningSelector = document.getElementById('EveningSelector');

let eveningEvent = () => {
    let eveningTime = parseInt(eveningSelector.value);
    eveningHours.splice(-1)
    eveningHours.push(eveningTime);
    updateEveningHoursImage2();
}
eveningSelector.addEventListener("change", eveningEvent);

//Party time Selector
let updatePartyTimeImage = () => {
    let partyTimeCTAText = document.getElementById('partyTimeButton').innerHTML;
    if (partyTimeCTAText === "Party!") {
        document.getElementById('partytime').style.display = 'block';
        document.getElementById('partyTimeButton').innerHTML = 'PARTY OVER?';
        document.getElementById('morning').style.display = 'none';
        document.getElementById('afternoon').style.display = 'none';
        document.getElementById('evening').style.display = 'none';
    } else {
        document.getElementById('partyTimeButton').innerHTML = 'Party!';
        document.getElementById('partytime').style.display = 'none';
        document.getElementById(lastSelected).style.display = 'block';
    }
}

let partyTimeCTA = document.querySelector('#partyTimeButton');
partyTimeCTA.addEventListener('click', updatePartyTimeImage);

function displayOnLandImage2() {
    if (currentHour > 5 && currentHour < 12) {
        updateMorningHoursImage2();
        console.log('morning', getLastSelected());
    }
    if (currentHour > 11 && currentHour < 18) {
        updateAfternoonHoursImage2();
        console.log('afternoon');
    }
    if (currentHour > 17 && currentHour < 6) {
        console.log('evening');
    }
}

function displayOnLandImage() {
    let currentHour = new Date().getHours();
    console.log(currentHour);
    morningHours.forEach((item) => {
        let currentHour = date.getHours();
        if (item === currentHour) {
            document.getElementById('morning').style.display = 'block';
            console.log(item, currentHour, 'morning');
        }
    })
    afternoonHours.forEach((item) => {
        let currentHour = date.getHours();
        if (item === currentHour) {
            document.getElementById('afternoon').style.display = 'block';
            console.log(item, currentHour, 'afternoon');
        }
    })
    eveningHours.forEach((item) => {
        let currentHour = date.getHours();
        if (item === currentHour) {
            document.getElementById('evening').style.display = 'block';
            console.log(item, currentHour, 'evening');
        }
    })
    getLastSelected();
}

function getLastSelected() {
    if (document.getElementById('morning').style.display === 'block') {
        lastSelected = 'morning';
    } else if (document.getElementById('afternoon').style.display === 'block') {
        lastSelected = 'afternoon';
    } else if (document.getElementById('evening').style.display === 'block') {
        lastSelected = 'evening';
    }

    return lastSelected;
}

getTime();
setInterval(getTime, 1000);
displayOnLandImage();
setInterval(displayOnLandImage, 1000);
