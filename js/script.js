(function(){
	var app=angular.module("angularjs",[]);
/******************controlador ejemplo**************************/
	app.controller("informacion",function(){
		this.datos=datos;
	})
	var datos=	{
				nombre:"jose",
				apellido:"tamayo",
				edad:22
				};
/***************************************************************/
/******************JSON DE PAISES COMO EJEMPLO******************/
	app.controller("paises",function($scope,$http){
		//$scope.name="jose";
		$http.get("data/paises.json").success(function(data){
			$scope.informacion=data;
		});
	});
/**************************************************************/
})();












