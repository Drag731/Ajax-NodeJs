var arrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var arrMonthNum = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
var currentData = document.getElementsByClassName("main__data")[0];
var currentDate = document.getElementsByClassName("main__date")[0];
var previous = document.getElementsByClassName("main__button_prev")[0];
var next = document.getElementsByClassName("main__button_next")[0];
var main = document.getElementsByClassName("main")[0];
var preloader = document.getElementsByClassName("preloader")[0];
var count = 0;

if (count == 0) {
    next.setAttribute('disabled', 'disabled');
}

window.addEventListener('load', function() {

    var script = document.createElement("script");
    script.src = "http://marsweather.ingenology.com/v1/latest/?format=jsonp&callback=myJsonpCallback";
    document.body.appendChild(script);

    script.remove();


});   

function myJsonpCallback(myObj) {   

    var monthNum = myObj.report.terrestrial_date.split('-');
    var monthText;
    for (var i = 1; i < arrMonth.length; i += 1) {

        if (monthNum[1] === arrMonthNum[i]) {
            monthText = arrMonth[i];
        }

    }

    currentData.innerHTML = myObj.report.min_temp + '<sup>o</sup> C' ;
    currentDate.innerHTML = 'last updated at 3:30 pm on ' + monthText + ' ' + monthNum[2] + ', ' + monthNum[0] + ' (earth time)' ;
    preloader.style.display = 'none';
}

main.addEventListener('click' , showIndex);

function showIndex(event) {
    
    var target = event.target;

    if (target.innerHTML == 'Previous') {
        preloader.style.display = 'block';
        preloader.style.backgroundColor = 'transparent';
        var script = document.createElement("script");
        script.src = "http://marsweather.ingenology.com/v1/archive/?format=jsonp&callback=myJsonpCallbackArchive";
        document.body.appendChild(script);

        script.remove();

        count++;
    } else if (target.innerHTML == 'Next') {
        preloader.style.display = 'block';
        var script = document.createElement("script");
        script.src = "http://marsweather.ingenology.com/v1/archive/?format=jsonp&callback=myJsonpCallbackArchive";
        document.body.appendChild(script);

        script.remove();

        count--;
    }
}

    function myJsonpCallbackArchive(myObj) {  

        var monthNum = myObj.results[count].terrestrial_date.split('-');
        var monthText;

        for (var i = 1; i < arrMonth.length; i += 1) {

            if (monthNum[1] === arrMonthNum[i]) {
                monthText = arrMonth[i];
            }

        }

        currentData.innerHTML = myObj.results[count].min_temp + '<sup>o</sup> C' ;
        currentDate.innerHTML = 'last updated at 3:30 pm on ' + monthText + ' ' + monthNum[2] + ', ' + monthNum[0] + ' (earth time)' ;
      
        if (count == 9) {
            previous.setAttribute('disabled', 'disabled');
        } else if (count == 0) {
            next.setAttribute('disabled', 'disabled');
        } else {
            next.removeAttribute('disabled');
            previous.removeAttribute('disabled');
        } 
        preloader.style.display = 'none';
    }


