let outputDate = document.querySelector('.date');
let outputTime = document.querySelector('.current-time');

    let today = new Date();
    
    let date = today.toLocaleDateString("en-US", { weekday: "long" });;

    let current_date = '${date}`;
    outputDate.innerText = current_date;

    let currentDate = new Date();
    let utcDateMilliseconds = today.getTime();
    let current_time = `${utcDateMilliseconds}`;
    outputTime.innerText = current_time;
