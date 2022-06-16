
function getdate() {
    var tt = document.getElementById('txtDate').value;
    var numberofDays = document.getElementById('numDays').value;
    

    var newdate = new Date(tt);
    var newDate = new Date(newdate);
    newDate.setDate(newDate.getDate() + parseInt(numberofDays));
    
    var dd = newDate.getDate();
    var mm = newDate.getMonth() + 1;
    var y = newDate.getFullYear();

    var someFormattedDate = mm + '/' + dd + '/' + y;
    //document.getElementById('follow_Date').value = someFormattedDate;
    document.getElementById('dateRange').value = tt + ' - ' + someFormattedDate;
    $(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  });
});
}
