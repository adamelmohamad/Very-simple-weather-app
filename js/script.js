$(document).ready(function(){


var api = 'http://api.openweathermap.org/data/2.5/forecast?q=Sydney&APPID=5f58393e5e52a5ea5f839b1e402674ed';
$.getJSON(api,function(data){
	var Kelvintemperature = Math.ceil(data.list[0].main.temp_max);
	var temperatureInDegrees = Math.ceil(Kelvintemperature - 273.15) + "°c";
	$(".temperature").html(temperatureInDegrees);

    $('#icon').attr('class', 'owf owf-4x owf-' + data.cod);
	
    var description = data.list[0].weather[0].description;
    $('#description').html(description);

    var windSpeed = data.list[0].wind.speed;
    var windKmh = Math.ceil(windSpeed * 3.6) + " km/h";
    $('#windSpeed').html(windKmh);

});


});






