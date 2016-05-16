//
var angular: any;

var app = angular.module('app', []);

app.directive('player', ()=>{
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'player.html',
		controller: 'playController'
	}
});

app.controller('playController', ['$scope','$http', ($scope , $http)=>{
	$scope.puntuacion = 0;
	$scope.puntuacionPc = 0;
	$scope.choicePc = 'piedra'
	$scope.choice = document.getElementById('eleccion').addEventListener('click', function(e){
		$scope.choicePlayer = e.path[0].alt;
		$scope.choicePc = eleccion();
		ganador($scope.choicePlayer , $scope.choicePc , $scope);
	});

}]);


function eleccion(): string{
	const eleccion = ['papel','tijera','piedra','spock','lagarto'];
	var resultadoPc : number = numeroRandom(0, 4);
	var choicePc = eleccion[resultadoPc];
	return choicePc;
}


function numeroRandom (min:number, max:number):number {
  return Math.floor(Math.random() * (max - min) + min);
}



function ganador (player:string , pc:string , scope):any{
    if(player === pc ){
        scope.ganador = 'Empataste';
    }else{
        if(player === 'piedra' && (pc === 'tijera' || pc === 'lagarto')){
            scope.ganador = 'Ganaste';
            scope.puntuacion ++;
            console.log(player + ' '+ pc);
        }
        else if(player === 'tijera' && (pc === 'papel' || pc === 'lagarto')){
            scope.ganador = 'Ganaste';
            scope.puntuacion ++;
            console.log(player + ' '+ pc);
        }

        else if(player === 'papel' && (pc === 'spock' || pc === 'piedra')){
            scope.ganador = 'Ganaste';
            scope.puntuacion ++;
            console.log(player + ' '+ pc);
        }

        else if(player === 'spock' && (pc === 'piedra' || pc === 'tijera')){
            scope.ganador = 'Ganaste';
            scope.puntuacion ++;
            console.log(player + ' '+ pc);
        }

        else if(player === 'lagarto' && (pc === 'papel' || pc === 'spock')){
            scope.ganador = 'Ganaste';
            scope.puntuacion ++;
            console.log(player + ' '+ pc);
        }
        else{
            scope.ganador = 'Perdiste';
            scope.puntuacionPc ++;  
            console.log(player + ' '+ pc);        
        }
    }
}