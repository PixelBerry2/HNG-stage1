let outputDate = document.querySelector('.date');
let outputTime = document.querySelector('.current-time');

    let today = new Date();
    
    let date = today.toLocaleDateString("en-US", { weekday: "long" });;

    let current_date = `${date}`;
    outputDate.innerText = current_date;

    function updateCurrentTime() {
        const currentTimeMilliseconds = new Date().getTime();
        outputTime.innerText = currentTimeMilliseconds;
      }
      setInterval(updateCurrentTime, 100);
