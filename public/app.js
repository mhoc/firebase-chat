
var app = angular.module('chatApp', ['firebase'])

app.controller('ChatCtrl', ['$scope', '$firebase', function($scope, $firebase) {
	
	var msgRef = new Firebase("https://anvil-demo.firebaseio.com/messages")
	var sync = $firebase(msgRef)
	$scope.messages = sync.$asArray()

	$scope.addMessage = function(text) {
		var message = {
			sender: $scope.authData.facebook.displayName,
			text: text
		}
		$scope.messages.$add(message)
		$scope.newMessageText = ""
	}

	$scope.signin = function() {
		msgRef.authWithOAuthPopup('facebook', function(error, authData) {
			$scope.authData = authData
			$scope.$digest()
		})
	}

}])

