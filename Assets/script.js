// Momentjs Time format for todays date
var time = moment().format('lll');
$("#currentDay").text(time);

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
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));