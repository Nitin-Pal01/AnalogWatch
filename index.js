 let hr = document.getflemntByID('hour');
let min = document.getflemntByID('minute');
let sec = document.getflemntByID('second');

function displayTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSecond();

    let hRtation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = 'rotate(${hRotation}deg)';
    min.style.transform = 'rotate(${mRotation}deg)';
    sec.style.transform = 'rotate(${sRotation}deg)';


}
setInterval(displayTime,1000);
