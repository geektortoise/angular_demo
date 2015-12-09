angular.module("GeekAnonymes")
.controller("eventsCtrl", function ($scope,$http) {

	$scope.data = {};
	$scope.now = new Date();

	$http.get("events.json")
	.success(function(data) {
		$scope.data.events = data;
	})
	.error(function(error) {
		alert(":'(");
	});
})
.filter("after", function() {
	return function(events, date) {
		if(angular.isArray(events) && angular.isDate(date)) {
			var results = [];
			for(var i= 0;i<events.length;i++){
				if(events[i].date > date) results.push(events[i]);
			}
			return results;
		} else {
			return events;
		}
	}
});
