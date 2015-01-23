// Javascript Code.
(function (){
	var app=angular.module("frontendAngularjs",[]);
	.service("response"($http){
		this.getAll=function(success, failure){}
			$http.get("nombre de la appi")
				.success(success)
				.error(failure);
	})
	.controller("controllerAngularjs",function($scope,response){
		$scope.name="carl";
		response.getAll(function(data){
			$scope.response=data.response;
		});
		});
	});

})();

























