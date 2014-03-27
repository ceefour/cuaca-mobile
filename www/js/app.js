$(document).ready(function() {
    $('#weatherBtn').click(function() {
        var city = $('#cityFld').val();
        var countryCode = $('#countryCodeFld').val();
        $.getJSON('http://api.openweathermap.org/data/2.5/weather',
            {
                q: city + ',' + countryCode,
                units: 'metric'
            }, function(data) {
                console.debug('OpenWeatherMap data for ', city, countryCode, '>', data);
                $('#weatherFld').val( data.weather[0].description );
                $('#tempFld').val( data.main.temp_min + ' - ' + data.main.temp_max + ' °C');
            });
            
    });
});