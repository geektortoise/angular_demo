angular.module("GeekAnonymes")
.controller("contactCtrl", function ($scope) {
	$scope.addUser = function(user) {
		alert("Bienvenue "+user.name);
	}
});
