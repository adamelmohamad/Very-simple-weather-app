$(document).ready(function(){


var api = 'http://api.openweathermap.org/data/2.5/forecast?id=6619279&APPID=457ffe59df3b603c9f88a315e9b9342d';
$.getJSON(api,function(data){
	var Kelvintemperature = Math.ceil(data.list[1].main.temp_max);
	var temperatureInDegrees = Math.ceil(Kelvintemperature - 273.15) + "°c";
	$(".temperature").html(temperatureInDegrees);

    
    $('#icon').attr('class', 'owf owf-4x owf-' + data.cod);
    console.log(data.cod);
	
    var description = data.list[1].weather[0].description;
    $('#description').html(description);

    var windSpeed = data.list[1].wind.speed;
    var windKmh = Math.ceil(windSpeed * 3.6) + " km/h";
    $('#windSpeed').html(windKmh);

});


});






