const items = document.querySelectorAll(".countdown-item > h4");

var countdownDate = new Date(2022, 09, 26, 22, 27, 0).getTime();

function getCountdownTime() {
    const now = new Date().getTime();

    const distance = countdownDate - now

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    var days = Math.floor(distance / oneDay);
    var hours = Math.floor((distance % oneDay) / oneHour);
    var minutes = Math.floor((distance % oneHour) / oneMinute);
    var seconds = Math.floor((distance % oneMinute) / 1000);
    
    var value = [days, hours, minutes, seconds];
    console.log(value);

    items.forEach(function(item, index){
        item.textContent = (value[index])
    })
    if(distance < 0){
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4 class='expired'>Time out</h4>";
    }
}

var countdown = setInterval(getCountdownTime, 1000);

getCountdownTime();