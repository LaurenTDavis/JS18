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

	$scope.theRating = function(rating) {
		$scope.temp = $scope.temp.sort(ratingSort(rating)); 
	}
}

angular.module('myApp').controller('mainController', ['$scope', mainController]);


var ratingSort = function(prop) {
	var sortOrder = 1;
	if(prop[0] === '-') {
		sortOrder = -1;
		prop = prop.substring(1);
	}
	return function(a, b) {
		var result = (a[prop] < b[prop]) ? -1 : (a[prop] > b[prop]) ? 1 : 0;
        return result * sortOrder;
	}
}


