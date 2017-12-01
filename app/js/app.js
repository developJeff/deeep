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

app.controller('main-controller',function(){
   console.log('funfou');
});