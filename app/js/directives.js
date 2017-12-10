app.directive('card', function($window) {
        return {
            restrict: 'E',
            templateUrl: 'app/templates/card.html',
            scope: {
                content:'=content'
            },
            transclude: true,
            link: function(scope, element) {
                scope.verify = function(index){
                    scope.answered = true;
                    scope.content.options[index+1].selected=true;
                    if(scope.content.options[index+1].isCorrect){
                        scope.isCorrect = true;
                        setTimeout(function(){
                            $(element).parents('slick').slick('slickNext');
                        },2000);
                    }else{
                        scope.isCorrect = false;
                    }
                }
		    }
        };
    });