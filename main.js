angular.module('myApp', []);


var mainController = function ($scope) {
	$scope.showQuotes = true;

	$scope.quotes = {
		text: '',
		author: ''
	}

	$scope.temp = []; 

	$scope.addQuote = function() {
		$scope.showQuotes = !$scope.showQuotes;
	}

	$scope.add = function() {
		if ($scope.quotes.text !== '' && $scope.quotes.author != '') {
			$scope.temp.push($scope.quotes);
			$scope.quotes = ''; 
			$scope.addQuote();
		}

	}



}




angular.module('myApp').controller('mainController', ['$scope', mainController])