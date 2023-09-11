let outputDate = document.querySelector('.date');
let outputTime = document.querySelector('.current-time');

    let today = new Date();
    
    let date = today.toLocaleDateString("en-US", { weekday: "long" });;

    let current_date = "Day: "+`${date}`;
    outputDate.innerText = current_date;

    let hours = today.getUTCHours();
    let minutes = today.getUTCMinutes();
    let seconds = today.getUTCSeconds();
    let millisecs = today.getUTCMilliseconds();

    let current_time = "Current Time: "+`${hours}:${minutes}:${seconds}:${millisecs}`;
    outputTime.innerText = current_time;
