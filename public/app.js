
var app = angular.module('chatApp', ['firebase'])

app.controller('ChatCtrl', ['$scope', '$firebase', function($scope, $firebase) {
	
	var baseRef = new Firebase("https://anvil-demo.firebaseio.com/")
	var msgRef = new Firebase("https://anvil-demo.firebaseio.com/messages")
	
	var sync = $firebase(msgRef)

	$scope.hideNameBox = false
	$scope.messages = sync.$asArray()

	$scope.signin = function() {
		baseRef.authWithOAuthPopup('facebook', function(error, authData) {
			$scope.authData = authData
		})
	}

	$scope.addMessage = function(text) {
		$scope.messages.$add( { sender: $scope.authData.facebook.displayName, text: text } )
		$scope.newMessageText = ""
	}

	$scope.setName = function(name) {
		$scope.hideNameBox = true
	}

}])

