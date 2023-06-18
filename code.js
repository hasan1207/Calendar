var currYear;
var currMonth;

var currYearNumber;
var currMonthNumber;

// window.addEventListener('resize', function() {
//   var contentAboveHeight = document.getElementById('submit').offsetHeight;
//   var absoluteDiv = document.getElementById('calendar');
  
//   absoluteDiv.style.top = contentAboveHeight + 'px';
// });


//window.addEventListener('resize', scaleContents);

function scaleContents() {
  var div = document.getElementById('calendar');
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  //var windowHeight = div.offsetWidth;
  //var windowHeight = div.offsetHeight;


  
  // Calculate the scale factor based on the window size
  var scaleFactor = Math.min(windowWidth / 1200, windowHeight / 1000);
  
  // Apply the scale transform
  div.style.transform = 'scale(' + scaleFactor + ')';
}

const date = new Date();
const options = {
  weekday: 'long', // Display the full weekday name (e.g., Sunday)
  day: 'numeric', // Display the numeric day (e.g., 18)
  month: 'long', // Display the full month name (e.g., June)
  year: 'numeric', // Display the full year (e.g., 2023)
};
const formattedDate = date.toLocaleDateString('en-US', options);

document.getElementById('dispDate').textContent = formattedDate;



window.addEventListener('DOMContentLoaded', function () {
    // Call the PrintCalendar function with the current year + 1
    var nextBtn = this.document.getElementById('next');
    //nextBtn.textContent = '';
    var prevBtn = this.document.getElementById('prev');
    //prevBtn.textContent = '';
    

    var year = new Date().getFullYear();
    currYear = year;
    var month = new Date().getMonth();
    month = month + 1;
    //this.document.querySelector('#bdaymonth').setAttribute('value',year + '-' + month);
    //var d = year + "-" + month;
    //this.document.querySelector('label').innerHTML = d;

    //currYearNumber = year;
    //currMonthNumber = month;

    


    if(month > 9){
      var m = month;
    }
    else{
      var m = "0" + month;
    }
    currMonth = m;
    this.document.querySelector('#bdaymonth').value = year + "-" + m;
    PrintCalendar(year, month);
    HideRest();
  });

  document.querySelector('#submit').addEventListener('click',function(){
    if(currYear != (document.querySelector('#bdaymonth').value).substring(0,4)){
      currYear = (document.querySelector('#bdaymonth').value).substring(0,4);
      PrintCalendar((document.querySelector('#bdaymonth').value).substring(0,4),(document.querySelector('#bdaymonth').value).substring(5));
    }

    if(currMonth != (document.querySelector('#bdaymonth').value).substring(5)){
      currMonth = (document.querySelector('#bdaymonth').value).substring(5);
      HideRest();
    }
  });


  document.querySelector('#next').addEventListener('click', function(){
    //currMonthNumber = currMonthNumber + 1;
    var input = document.getElementById('bdaymonth');
    var currentValue = input.value;

    var currentYear = parseInt(currentValue.substring(0, 4));
    var currentMonth = parseInt(currentValue.substring(5));

    var nextMonth = currentMonth + 1;
    var nextYear = currentYear;

    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear++;
    }

    if (nextMonth < 10) {
      nextMonth = '0' + nextMonth;
    }

    var nextValue = nextYear + '-' + nextMonth;
    input.value = nextValue;
    var lastYear = currYear;
    currYear = nextYear;
    currMonth = nextMonth;

    if(lastYear != currYear){
      PrintCalendar(currYear);
    }
    
    HideRest();
  });

  document.querySelector('#prev').addEventListener('click', function(){
    var input = document.getElementById('bdaymonth');
    var currentValue = input.value;

    var currentYear = parseInt(currentValue.substring(0, 4));
    var currentMonth = parseInt(currentValue.substring(5));

    var prevMonth = currentMonth - 1;
    var prevYear = currentYear;

    if (prevMonth < 1) {
      prevMonth = 12;
      prevYear--;
    }

    if (prevMonth < 10) {
      prevMonth = '0' + prevMonth;
    }

    var prevValue = prevYear + '-' + prevMonth;
    input.value = prevValue;
    var lastYear = currYear;
    currYear = prevYear;
    currMonth = prevMonth;

    if(lastYear != currYear){
      PrintCalendar(currYear);
    }

    HideRest();


  });

  function PrintCalendar(year, month){
        var date = new Date().getDate();
        var month = new Date().getMonth();
        //var year = new Date().getFullYear();
        var y = new Date().getFullYear();
    //document.querySelector('.mon').innerHTML = '';
    //document.getElementsByTagName('h1')[0].style.color = 'red';
    //document.querySelector(".mon").classList.add("visible");
    // for(var i = 0; i < document.querySelectorAll('.mon').length; i++){
    //   var singleMonth = document.querySelectorAll('.mon')[i];
    //   //PrintDayLabel(singleMonth);
    //   singleMonth.
    // }


    // for(var i = 0; i < document.querySelectorAll('span'); i++){
    //   document.querySelectorAll('span')[i].remove();
    // }


    var spans = document.getElementsByTagName('span');

    // Convert the HTMLCollection to an array and remove each span element
    Array.from(spans).forEach(function (span) {
      span.remove();
    });


    var brs = document.getElementsByTagName('br');

    // Convert the HTMLCollection to an array and remove each span element
    Array.from(brs).forEach(function (br) {
      br.remove();
    });

    var innerDivs = document.getElementsByClassName('inner-div');
    Array.from(innerDivs).forEach(function (inner) {
      inner.remove();
    });

    // var brk = document.createElement('br');
    //   document.querySelectorAll(".mon")[i].appendChild(brk);
    var start = new Date(year, 0, 1).getDay();
    //start = start - 1;

    //document.querySelector('label').innerHTML = start;
    for(var i = 0; i < document.querySelectorAll(".mon").length; i++){
      // document.querySelectorAll(".mon")[i].addEventListener("click", function(){
      //   //document.getElementsByTagName('h1')[0].style.color = 'red';

      // });
      var yearElement = document.createElement('span');
      yearElement.textContent = currYear;
      //yearElement.classList.add('cati');
      //yearElement.id = 
      yearElement.setAttribute('id','year');
      document.querySelectorAll(".mon > h1")[i].appendChild(yearElement);
      PrintDayLabel(document.querySelectorAll(".mon")[i]);
      var brk = document.createElement('br');
      document.querySelectorAll(".mon")[i].appendChild(brk);

      

      var daysInMonth = new Date(year, i + 1, 0).getDate();
      //var count = 0;
      var spaced = false;
      var daysGroup = document.createElement('div');
      daysGroup.innerHTML = "";
      for(var j = 1; j <= daysInMonth; j++){
        if(spaced === false){
          var spaceElement = document.createElement('div');
          spaceElement.classList.add('inner-div');

          spaceElement.classList.add('start' + start);
          document.querySelectorAll(".mon")[i].appendChild(spaceElement);
          spaced = true;
        }

        start = (start + 1) % 7;
        
        
        var dayElement = document.createElement('span');


        
        if(month == i){
          if(currYear == y){
            if(date == j){
              dayElement.classList.add('today');
            }
          }
        }


        dayElement.textContent = j;

        dayElement.addEventListener('click', function(){
          //document.getElementById('dispDate').textContent = 
          var d = new Date(currYear + "-" + currMonth + "-" + this.textContent);

          const options = {
            weekday: 'long', 
            day: 'numeric', 
            month: 'long',
            year: 'numeric', 
          };
          const formattedDate = d.toLocaleDateString('en-US', options);
          
          document.getElementById('dispDate').textContent = formattedDate;

          if(this.style.backgroundColor == "#0d6efd"){
            //document.getElementById('dispDate').textContent = document.getElementById('dispDate').textContent.concat(" (Today)");
            //document.getElementById('dispDate').textContent = '';
          }

          toggleShading(this);

        });

        dayElement.classList.add("shadable-button");

        document.querySelectorAll(".mon")[i].appendChild(dayElement);
        // daysGroup.appendChild(dayElement);
        // daysGroup.classList.add('mon');
        // document.querySelectorAll(".mon")[i].appendChild(daysGroup);


        

        if (start === 0) {
          document.querySelectorAll(".mon")[i].appendChild(document.createElement('br'));
        }
      }

    }




    // setTimeout(function() {
    //   div1.style.display = 'none';
    //   div2.classList.remove('show');
    // }, 500);
  }




  function toggleShading(button) {
    const shadedButtons = document.querySelectorAll('.shadable-button');
    
    shadedButtons.forEach(btn => {
      if (btn === button) {
        btn.classList.add('shaded');
      } else {
        btn.classList.remove('shaded');
      }
    });
  }




  function PrintDayLabel(obj){
    //obj.textContent = "Hasan";
    var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    //var days = ['S','M','T','W','T','F','S'];

    for(var i = 0; i < days.length; i++){
      var dayLbl = document.createElement('span');
      dayLbl.textContent = days[i] + '  ';
      dayLbl.id = "days";
      obj.appendChild(dayLbl);
    }
  }


  function HideRest(){
    var monToKeep = InputDayToMonth(document.querySelector('#bdaymonth').value);
    for(var i = 0; i < document.querySelectorAll('.mon').length; i++){
      document.querySelectorAll('.mon')[i].classList.add('invisibl');
    }
    document.querySelector("." + monToKeep).classList.remove('invisibl');
  }

  function InputDayToMonth(date){
    switch (date.substring(5)) {
      case "01":
        return "jan";
      break;
      case "02":
        return "feb";
      break;
      case "03":
        return "mar";
      break;

      case "04":
        return "apr";
      break;
      case "05":
        return "may";
      break;
      case "06":
        return "jun";
      break;
      case "07":
        return "jul";
      break;
      case "08":
        return "aug";
      break;
      case "09":
        return "sep";
      break;
      case "10":
        return "oct";
      break;
      case "11":
        return "nov";
      break;
      case "12":
        return "dec";
      break;

      default:
        break;
    }
  }
  
  document.getElementById('calendar').classList.add('invisibl');

  //document.getElementsByTagName('h1')[0].style.color = 'red';

  //alert('Hello');


  //document.querySelector('.dateEntered').setAttribute("value","2020-07");
  //document.querySelector('.dateEntered').value = "2020-07"

  //document.querySelector('.jan').classList.add('invisibl');



  // function DayOfWeek(year){

  // }