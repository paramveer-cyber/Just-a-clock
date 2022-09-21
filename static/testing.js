let clock_div = document.getElementById("clock");
let date_div = document.getElementById("date")
function clock_func() {
    let a = new Date();
    let hours_ = a.getHours();
    let hour = (hours_ % 12)
    let minutes = a.getMinutes();
    let seconds = a.getSeconds();
    let date = a.getDate();
    let month = a.getMonth();
    let year = a.getFullYear();
    let day = a.getDay();
    let day_list = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    if (hour < 10){hour = "0"+hour}
    if (minutes < 10){minutes = "0"+minutes}
    if (seconds < 10){seconds = "0"+seconds}
    let time_ = ` ${hour}:${minutes}:${seconds}`;
    let date_ = `${date}-${month}-${year} / ${day_list[day]}`
    clock_div.innerHTML = time_;
    date_div.innerHTML = date_;
}
setInterval(clock_func, 1000)