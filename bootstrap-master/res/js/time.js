$(function(){
		function showTime(){
			$('.time').text(date_long_format(new Date()));
		}
		
		setInterval(showTime,1000);
	})

function date_long_format(data){
        var data=new Date(data);
        var year=data.getFullYear();
        var month=data.getMonth()+1;
        var day=data.getDate();
        var hour=data.getHours();
        var minute=data.getMinutes();
        var second=data.getSeconds();
        return year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
}