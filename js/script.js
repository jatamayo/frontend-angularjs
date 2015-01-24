(function(){
	var app=angular.module("angularjs",[]);
/******************controlador ejemplo**************************/
	app.controller("tamayo",function(){
		this.regresodatos=info;
	});
	var info={
			nombre:"jose",
			edad:22,
			apellido:"tamayo"
			}
/***************************************************************/
/******************JSON DE PAISES COMO EJEMPLO******************/
	app.controller("lastfm",function($scope,$http){
		//$scope.name="jose";
		$http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=39b875f4c487778289f6bb6a8dc75c24&format=json").success(function(data){
			$scope.informacion=data.tracks.track;
		});
	});
/**************************************************************/
})();












