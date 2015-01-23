(function(){
	var app=angular.module("angularjs",[]);
/******************controlador ejemplo**************************/
	
/***************************************************************/
/******************JSON DE PAISES COMO EJEMPLO******************/
	app.controller("paises",function($scope,$http){
		//$scope.name="jose";
		$http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=39b875f4c487778289f6bb6a8dc75c24&format=json").success(function(data){
			$scope.informacion=data.tracks.track;
		});
	});
/**************************************************************/
})();












