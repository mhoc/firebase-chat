
var app = angular.module('chatApp', ['firebase'])

app.controller('ChatCtrl', function($scope, $firebase) {
	var ref = new Firebase("https://anvil-demo.firebaseio.com/messages")
	var sync = $firebase(ref)

	$scope.hideNameBox = false
	$scope.messages = sync.$asArray()

	$scope.addMessage = function(text) {
		$scope.messages.$add({ sender: $scope.name, text: text } )
		$scope.newMessageText = ""
	}

	$scope.setName = function(name) {
		$scope.hideNameBox = true
	}

})

