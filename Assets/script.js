// Momentjs Time format for todays date
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    $("#currentDay").text(rightNow)
  };

// functions for present, past, future
function format() {
    var presentHour = moment().hours();
    $('.time-block').each(function(){
        var hour = parseInt($(this).attr('id'));
        if (hour === presentHour){
            $(this).addClass('present');
        }
        if (hour < presentHour){
            $(this).addClass('past');
        }
        if (hour > presentHour){
            $(this).addClass('future');
        }
    })
}
format();

//saves to local storage once clicking on lock button
$('.saveBtn').on('click', function(){
        var key = $(this).parent().attr('id');
        var value = $(this).siblings('.description').val();
    localStorage.setItem(key, value)
});

//saves tasks to be displayed 
$('#1 .description').val(localStorage.getItem('1'));
$('#2 .description').val(localStorage.getItem('2'));
$('#3 .description').val(localStorage.getItem('3'));
$('#4 .description').val(localStorage.getItem('4'));
$('#5 .description').val(localStorage.getItem('5'));
$('#6 .description').val(localStorage.getItem('6'));
$('#7 .description').val(localStorage.getItem('7'));
$('#8 .description').val(localStorage.getItem('8'));
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));