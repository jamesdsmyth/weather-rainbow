var app = angular.module('weather', ['ngRoute'])

var citiesJson = {"The Hague":{"country":["NL"]},"Cerritos":{"state":["CA"]},"Perugia":{"country":["IT"]},"New Brunswick":{"state":["NJ"]},"Vicenza":{"country":["IT"]},"Sellersville":{"state":["PA"]},"Oakland":{"state":["CA"]},"Chicago":{"state":["IL"]},"Kenosha":{"state":["WI"]},"Milwaukee":{"state":["WI"]},"Evanston":{"state":["IL"]},"Roselle":{"state":["IL"]},"Champaign":{"state":["IL"]},"Carbondale":{"state":["IL"]},"Des Moines":{"state":["IA"]},"Normal":{"state":["IL"]},"Madison":{"state":["WI"]},"Cincinnati":{"state":["OH"]},"Minneapolis":{"state":["MN"]},"Kalamazoo":{"state":["MI"]},"Indianapolis":{"state":["IN"]},"Grinnell":{"state":["IA"]},"Ottawa":{"province":["ON"]},"Ann Arbor":{"state":["MI"]},"Cleveland":{"state":["OH"]},"Hoboken":{"state":["NJ"]},"Cambridge":{"state":["MA"],"country":["UK"]},"Asbury Park":{"state":["NJ"]},"New York":{"state":["NY"]},"Philadelphia":{"state":["PA"]},"Baltimore":{"state":["MD"]},"Washington":{"state":["DC"]},"Columbus":{"state":["OH"]},"Detroit":{"state":["MI"]},"Omaha":{"state":["NE"]},"Kansas City":{"state":["MO","KS"]},"Toledo":{"state":["OH"]},"Toronto":{"province":["ON"]},"Northampton":{"state":["MA"]},"Providence":{"state":["RI"]},"New Haven":{"state":["CT"]},"Montreal":{"province":["QC"]},"Portland":{"state":["ME","OR"]},"Port Chester":{"state":["NY"]},"Richmond":{"state":["VA"],"country":["AU"]},"Carrboro":{"state":["NC"]},"Atlanta":{"state":["GA"]},"Houston":{"state":["TX"]},"Dallas":{"state":["TX"]},"Los Angeles":{"state":["CA"]},"Tempe":{"state":["AZ"]},"West Hollywood":{"state":["CA"]},"San Diego":{"state":["CA"]},"San Francisco":{"state":["CA"]},"Seattle":{"state":["WA"]},"Salt Lake City":{"state":["UT"]},"Denver":{"state":["CO"]},"Rotterdam":{"country":["NL"]},"London":{"country":["UK"]},"Gent":{"country":["BE"]},"Boston":{"state":["MA"]},"Island Park":{"state":["NY"]},"Bloomington":{"state":["IN"]},"Louisville":{"state":["KY"]},"Lexington":{"state":["KY"]},"Nashville":{"state":["TN"]},"Memphis":{"state":["TN"]},"Birmingham":{"state":["AL"],"country":["UK"]},"Athens":{"state":["GA"],"country":["GR"]},"DeKalb":{"state":["IL"]},"Ames":{"state":["IA"]},"E. Lansing":{"state":["MI"]},"Pittsburgh":{"state":["PA"]},"Rochester":{"state":["NY"]},"Burlington":{"state":["VT"]},"Springfield":{"state":["MA","MO"]},"Amherst":{"state":["MA"]},"Troy":{"state":["NY"]},"Syracuse":{"state":["NY"]},"Upper Darby":{"state":["PA"]},"Warwick":{"state":["RI"]},"State College":{"state":["PA"]},"St. Paul":{"state":["MN"]},"St. Louis":{"state":["MO"]},"New Orleans":{"state":["LA"]},"Austin":{"state":["TX"]},"Norman":{"state":["OK"]},"Sacramento":{"state":["CA"]},"Hilversum":{"country":["NL"]},"Brussels":{"country":["BE"]},"Eindhoven":{"country":["NL"]},"Den Haag":{"country":["NL"]},"Amsterdam":{"country":["NL"]},"Lund":{"country":["SE"]},"Copenhagen":{"country":["DK"]},"Hamburg":{"country":["DE"]},"Berlin":{"country":["DE"]},"Koeln":{"country":["DE"]},"Frankfurt":{"country":["DE"]},"Munich":{"country":["DE"]},"Lusanne":{"country":["CH"]},"Paris":{"country":["FR"]},"Newcastle":{"country":["UK"]},"Edinburgh":{"country":["UK"]},"Manchester":{"country":["UK"]},"Bristol":{"country":["UK"]},"Osaka":{"country":["JP"]},"Nagoya":{"country":["JP"]},"Kawasaki":{"country":["JP"]},"Tokyo":{"country":["JP"]},"Honolulu":{"state":["HI"]},"Oklahoma City":{"state":["OK"]},"Rosemont":{"state":["IL"]},"Torhout":{"country":["BE"]},"Werchter":{"country":["BE"]},"Orlando":{"state":["FL"]},"Miami":{"state":["FL"]},"Tampa":{"state":["FL"]},"Reading":{"country":["UK"]},"Duesseldorf":{"country":["DE"]},"Nottingham":{"country":["UK"]},"Barcelona":{"country":["ES"]},"Iowa City":{"state":["IA"]},"Lawrence":{"state":["KS"]},"Columbia":{"state":["SC","MO"]},"Pontiac":{"state":["MI"]},"Oslo":{"country":["NO"]},"Stockholm":{"country":["SE"]},"Dronten":{"country":["NL"]},"Kiewit":{"country":["BE"]},"Ljubijiana":{"country":["SI"]},"Modena":{"country":["IT"]},"Lyon":{"country":["FR"]},"Utrecht":{"country":["NL"]},"Wolverhampton":{"country":["UK"]},"Leeds":{"country":["UK"]},"Liverpool":{"country":["UK"]},"Glasgow":{"country":["UK"]},"Cardiff":{"country":["UK"]},"Southampton":{"country":["UK"]},"Vancouver":{"province":["BC"]},"Hollywood":{"state":["CA"]},"Santa Barbara":{"state":["CA"]},"Scottsdale":{"state":["AZ"]},"Phoenix":{"state":["AZ"]},"Del Mar":{"state":["CA"]},"Fort Lauderdale":{"state":["FL"]},"Gainesville":{"state":["FL"]},"Raleigh":{"state":["NC"]},"Norfolk":{"state":["VA"]},"Gold Coast":{"country":["AU"]},"Melbourne":{"country":["AU"]},"Sydney":{"country":["AU"]},"Adelaide":{"country":["AU"]},"Wellington":{"country":["NZ"]},"Auckland":{"country":["NZ"]},"Perth":{"country":["AU"]},"Davenport":{"state":["IA"]},"Tulsa":{"state":["OK"]},"Lubbock":{"state":["TX"]},"San Antonio":{"state":["TX"]},"Little Rock":{"state":["AR"]},"Oxford":{"state":["MS"]},"Biloxi":{"state":["MS"]},"Tallahassee":{"state":["FL"]},"Salem":{"state":["VA"]},"Williamsburg":{"state":["VA"]},"Buffalo":{"state":["NY"]},"Albany":{"state":["NY"]},"Fitchburg":{"state":["MA"]},"Dayton":{"state":["OH"]},"Nuerburg":{"country":["DE"]},"Landgraaf":{"country":["NL"]},"El Paso":{"state":["TX"]},"Odessa":{"state":["TX"]},"Santa Fe":{"state":["NM"]},"Las Vegas":{"state":["NV"]},"Englewood":{"state":["CO"]},"Bonner Springs":{"state":["KS"]},"Tinley Park":{"state":["IL"]},"Marylnd Heights":{"state":["MO"]},"Clarkston":{"state":["MI"]},"Barrie":{"province":["ON"]},"Burgettstown":{"state":["PA"]},"Saratoga":{"state":["NY","CA"]},"N. Kingston":{"state":["RI"]},"Randalls Island":{"state":["NY"]},"Charles Town":{"state":["WV"]},"Charlotte":{"state":["NC"]},"Mountain View":{"state":["CA"]},"George":{"state":["WA"]},"Carson":{"state":["CA"]},"Dublin":{"country":["IE"]},"Berkshire":{"country":["UK"]},"Peoria":{"state":["IL"]},"Sao Paulo":{"country":["BR"]},"S\u00e3o Paulo":{"country":["BR"]},"Rio de Janeiro":{"country":["BR"]},"Bangkok":{"country":["TH"]},"Singapore":{"country":["SG"]},"Brisbane":{"country":["AU"]},"Hannover":{"country":["DE"]},"Offenbach":{"country":["DE"]},"Stuttgart":{"country":["DE"]},"Muenchen":{"country":["DE"]},"Prague":{"country":["CZ"]},"Wiesen":{"country":["AT"]},"Vienna":{"country":["AT"]},"Graz":{"country":["AT"]},"Perugia":{"country":["IT"]},"Milan":{"country":["IT"]},"Sursee":{"country":["CH"]},"Nantes":{"country":["FR"]},"Lisbon":{"country":["PT"]},"Madrid":{"country":["ES"]},"Christchurch":{"country":["NZ"]},"Saginaw":{"state":["MI"]},"Auburn Hills":{"state":["MI"]},"Hampton":{"state":["VA"]},"Landover":{"state":["MD"]},"Wichita":{"state":["KS"]},"Quebec City":{"province":["QC"]},"E. Rutherford":{"state":["NJ"]},"Winnipeg":{"province":["MB"]},"Saskatoon":{"province":["SK"]},"Edmonton":{"province":["AB"]},"Calgary":{"province":["AB"]},"Moline":{"state":["IL"]},"Grand Rapids":{"state":["MI"]},"Fort Wayne":{"state":["IN"]},"Hartford":{"state":["CT"]},"Worcester":{"state":["MA"]},"Chapel Hill":{"state":["NC"]},"Tampa Bay":{"state":["FL"]},"Lakeland":{"state":["FL"]},"Lafayette":{"state":["LA"]},"Albuquerque":{"state":["NM"]},"Anaheim":{"state":["CA"]},"San Jose":{"state":["CA"]},"Inglewood":{"state":["CA"]},"Reno":{"state":["NV"]},"Billings":{"state":["MT"]},"Rapid City":{"state":["SD"]},"Sioux Falls":{"state":["SD"]},"Cedar Rapids":{"state":["IA"]},"Uniondale":{"state":["NY"]},"St. College":{"state":["PA"]},"Jacksonville":{"state":["FL","OR"]},"Pensacola":{"state":["FL"]},"Glastonbury":{"country":["UK"]},"Roskilde":{"country":["DK"]},"St. Gallen":{"country":["CH"]},"Porto":{"country":["PT"]},"Belfort":{"country":["FR"]},"Warsaw":{"country":["PL"]},"Katowice":{"country":["PL"]},"Fort Worth":{"state":["TX"]},"Genova":{"country":["IT"]},"Cannes":{"country":["FR"]},"Bilbao":{"country":["ES"]},"Rome":{"country":["IT"]},"Moscow":{"country":["RU"]},"Hachioji":{"country":["JP"]},"Cuyahoga Falls":{"state":["OH"]},"Sunrise":{"state":["FL"]},"Mexico City":{"country":["MX"]},"Santiago":{"country":["CL","ES"]},"Buenos Aires":{"country":["AR"]},"Sandy":{"state":["UT"]},"Boise":{"state":["ID"]},"Palo Alto":{"state":["CA"]},"Urbana":{"state":["IL"]},"West Lafayette":{"state":["IN"]},"Kent":{"state":["OH"]},"Fairfax":{"state":["VA"]},"Lowell":{"state":["MA"]},"Greensboro":{"state":["NC"]},"Clearwater":{"state":["FL"]},"Boulder":{"state":["CO"]},"Mesa":{"state":["AZ"]},"Berkeley":{"state":["CA"]},"Yokohama":{"country":["JP"]},"Sendai":{"country":["JP"]},"Hiroshima":{"country":["JP"]},"Fukuoka":{"country":["JP"]},"Seoul":{"country":["KR"]},"Halifax":{"province":["NS"]},"Oberhausen":{"country":["DE"]},"Bologna":{"country":["IT"]},"Marseilles":{"country":["FR"]},"Toulouse":{"country":["FR"]},"Zaragoza":{"country":["ES"]},"San Sebastian":{"country":["ES"]},"Zurich":{"country":["CH"]},"Angers":{"country":["FR"]},"Helsinki":{"country":["FI"]},"Centurion":{"country":["ZA"]},"Durban":{"country":["ZA"]},"Cape Town":{"country":["ZA"]},"Burbank":{"state":["CA"]},"Santa Monica":{"state":["CA"]},"Pomona":{"state":["CA"]},"Santa Ana":{"state":["CA"]},"Towson":{"state":["MD"]},"De Pere":{"state":["WI"]},"Pompano Beach":{"state":["FL"]},"Castle Donington":{"country":["UK"]},"Dresden":{"country":["DE"]},"Nuernberg":{"country":["DE"]},"Villeurbanne":{"country":["FR"]},"St. Poelten":{"country":["AT"]},"Naperville":{"state":["IL"]},"Lakewood":{"state":["OH"]},"Cologne":{"country":["DE"]},"Oakville":{"state":["CA"]},"Kelseyville":{"state":["CA"]},"Woodinville":{"state":["WA"]},"Fortitude Valley":{"country":["AU"]},"Staffordshire":{"country":["UK"]},"Luxembourg City":{"country":["LU"]},"Nickelsdorf":{"country":["AT"]},"Interlaken":{"country":["CH"]},"Asheville":{"state":["NC"]},"Santa Cruz":{"state":["CA"]},"Saint-Malo":{"country":["FR"]},"Colmar":{"country":["FR"]},"Istanbul":{"country":["TR"]},"Beverly Hills":{"state":["CA"]},"Tucson":{"state":["AZ"]},"Ridgefield":{"state":["WA"]},"Orem":{"state":["UT"]},"Morrison":{"state":["CO"]},"Noblesville":{"state":["IN"]},"The Woodlands":{"state":["TX"]},"Grand Prairie":{"state":["TX"]},"Assago":{"country":["IT"]},"Belfast":{"country":["UK"]},"Den Bosch":{"country":["NL"]},"West Melbourne":{"country":["AU"]},"Guadalajara":{"country":["MX"]},"Monterrey":{"country":["MX"]},"Alajuela":{"country":["CR"]},"Hammond":{"state":["IN"]},"Knoxville":{"state":["TN"]},"Charlottesville":{"state":["VA"]},"Boca Raton":{"state":["FL"]},"Atlantic City":{"state":["NJ"]},"Uncasville":{"state":["CT"]},"La Jolla":{"state":["CA"]},"Universal City":{"state":["CA"]},"Visalia":{"state":["CA"]},"Long Beach":{"state":["CA"]},"Pioneertown":{"state":["CA"]}}

app.controller('mainController', ['$scope', 'weatherFactory', 'locationFactory', function ($scope, weatherFactory, locationFactory) {

    $scope.weather = null;
    $scope.locations = locationFactory.list;
    $scope.setCity = function () {
        console.log($scope.citySelect);
        weatherFactory.json($scope.citySelect).success(function(response) {
            $scope.weather = response;
        });

    }
}]);

// Factory returns the JSON file of the weather
app.factory('weatherFactory', ['$http', function ($http) {

    var weather = {};
    weather.urlStart = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    weather.urlEnd =  ',&mode=json&appid=fb161b8bdfd1a946ed269b0b2cf42b77';
    weather.json = function (city, country) {
        console.log(city, country)
        var cityModified = city.replace(/ /g,'');
        return $http.get(weather.urlStart + cityModified + ',' + country + weather.urlEnd);
    }
    return weather;
}]);

// Factory returns the cities
app.factory('locationFactory', ['$http', function ($http) {

    var location = {};
    location.list = citiesJson;

    // location.json = $http.get('../json/cities.json').success(function(response){
    //     location.list.push(response);
    //     // debugger;
    // }).error(function(){
    //     console.log('error');
    // });

    return location;
}]);

// Custom filter. Kelvin is returned so it needs to be converted to celcius. 'input' is angular standard.
app.filter('celciusFilter', function () {

    return function (input) {
        return input = Math.round(input - 273.15);
    }
});

// Custom filter. Gets the correct title for the image and is passed back.
app.filter('weatherFilter', function () {

    return function (input) {
        var weather = null;

        console.log(input);
        switch (input) {
            case 'Clear':
                weather = 'sun';
                break;
            case 'Clouds':
                weather = 'clouds';
                break;
            case 'Rain':
                weather = 'rain';
                break;
            case 'Snow':
                weather = 'snow';
                break;
        }
        return input = weather;
    }
});
