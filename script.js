// Function to get the current date in the format: "YYYY-MM-DD"
function getCurrentDate() {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
    return date;
}

// Function to get the current day of the week
function getCurrentDay() {
    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[today.getDay()];
}

// Function to get the current time in the format: "HH:MM:SS"
function getCurrentTime() {
    const today = new Date();
    const hours = today.getHours().toString().padStart(2, '0');
    const minutes = today.getMinutes().toString().padStart(2, '0');
    const seconds = today.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Function to calculate the next leap year
function getNextLeapYear() {
    const currentYear = new Date().getFullYear();
    let nextYear = currentYear;
    while (!isLeapYear(nextYear)) {
        nextYear++;
    }
    return nextYear;
}

// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

// Update the content in the HTML
document.getElementById('currentDate').innerText = getCurrentDate();
document.getElementById('currentDay').innerText = getCurrentDay();
document.getElementById('currentTime').innerText = getCurrentTime();
document.getElementById('nextLeapYear').innerText = getNextLeapYear();

// Optional: Update the time every second
setInterval(() => {
    document.getElementById('currentTime').innerText = getCurrentTime();
}, 1000);
