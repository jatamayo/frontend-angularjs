
(function(){
	var app=angular.module("pokedex",[]);
/***************************************************************/
/******************LLAMADO DE APPI LASTFM******************/


		app.controller("pokeDex",function($scope,$http){
			$http.get("http://pokeapi.co/api/v1/pokemon/1/").success(function(data){
				$scope.informacion=data.name;
				var pokearray=[22];
				pokearray.push("informacion");
				alert(pokearray)

			});

		});



/**************************************************************/


/**************************************************************/
})();












