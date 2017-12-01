app.directive('card', function($window) {
        return {
            restrict: 'E',
            templateUrl: 'templates/card.html',
            scope: {
                content:'=content'
            },
            transclude: true,
            link: function(scope, element) {
                scope.verify = function(index){
                    scope.answered = true;
                    scope.content.options[index+1].selected=true;
                }
                
		    }
        };
    });