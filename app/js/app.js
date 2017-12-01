var app = angular.module('deeep',[]);

// app.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {

//     // $locationProvider.html5Mode(true);
    
//     $urlRouterProvider.otherwise('/signup');

//     $stateProvider
//         .state('/signup', {
//             url: '/signup',
//             templateUrl: 'view/signup/signup.html'
//         })
//         .state('/confirmation', {
//             url: '/confirmation?email=',
//             templateUrl: 'view/confirmation/confirmation.html'
//         })
//         .state('/listen', {
//             url: '/listen',
//             templateUrl: 'view/listen/listen.html'
//         });
// }])
// .run(function($rootScope){
// 	$rootScope.$on('$stateChangeSuccess', function(){
        
//     });
// });
app.service('Content',['$http','$rootScope',function($http){
    this.load = function(callback){
         $http({
            method: 'GET',
            url: 'js/content.json',
        }).then(function (response) {
            callback(response.data);
        });
    }
}]);

app.controller('main-controller',function($scope,Content){
    $scope.questions = {
    question1:{
        title:'Essa é a questão que vem do servidor.',
        options: {
            1:{
                label: 'option 1',
                selected:false,
                isCorrect: 0
            },
            2:{
                label: 'option 2',
                selected:false,
                isCorrect: 0
            },
            3:{
                label: 'option 3',
                selected:false,
                isCorrect: 1
            }
        },
        feedback: 'Aqui vai o feedback da questão.'
    },
    question2:{
        title:'Essa é a questão que vem do servidor.',
        options: {
            1:{
                label: 'option 1',
                selected:false,
                isCorrect: 0
            },
            2:{
                label: 'option 2',
                selected:false,
                isCorrect: 0
            },
            3:{
                label: 'option 3',
                selected:false,
                isCorrect: 1
            }
        },
        feedback: 'Aqui vai o feedback da questão.'
    }
   }
    // Content.load(function(data){
    //     $scope.questions = data;
    // });
});