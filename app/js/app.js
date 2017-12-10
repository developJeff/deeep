var app = angular.module('deeep',['slick']);

app.service('Content',['$http','$rootScope',function($http){
    this.load = function(callback){
         $http({
            method: 'GET',
            url: 'app/js/content.json',
        }).then(function (response) {
            callback(response.data);
        });
    }
}]);

app.controller('main-controller',function($scope,Content){
    $scope.questions = {
        question1: {
            title: 'Em uma determinada cidade, as mulheres constituem 60% da população. Sabe-se ainda que 10% dos homens e 15% das mulheres são analfabetos. O percentual de habitantes alfabetizados nessa cidade é:',
            options: {
                1: {
                    label: '12%',
                    selected: false,
                    isCorrect: 0
                },
                2: {
                    label: '13%',
                    selected: false,
                    isCorrect: 0
                },
                3: {
                    label: '25%',
                    selected: false,
                    isCorrect: 0
                },
                4: {
                    label: '87%',
                    selected: false,
                    isCorrect: 1
                },
                5: {
                    label: '88%',
                    selected: false,
                    isCorrect: 0
                }
            },
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien velit, aliquet in enim in, convallis pharetra orci. Fusce malesuada consectetur rutrum. Etiam sagittis metus quis ligula varius, in ornare purus placerat.',
            isCorrect: null
        },
        question2: {
            title: 'Em uma cidade com 40.000 habitantes há três clubes recreativos: Colina, Silvestre e Campestre. Feita uma pesquisa, foram obtidos os seguintes resultados: 20% da população freqüenta o Colina; 16% o Silvestre; 14% o Campestre; 8% o Colina e o Silvestre; 5% o Colina e o Campestre; e 4% o Silvestre e o Campestre. Somente 2% freqüentam os três clubes. O número de habitantes que não freqüentam nenhum destes três clubes é:',
            options: {
                1: {
                    label: '26000',
                    selected: false,
                    isCorrect: 1
                },
                2: {
                    label: '30000',
                    selected: false,
                    isCorrect: 0
                },
                3: {
                    label: '28000',
                    selected: false,
                    isCorrect: 0
                },
                4: {
                    label: '32000',
                    selected: false,
                    isCorrect: 0
                },
                5: {
                    label: '34000',
                    selected: false,
                    isCorrect: 0
                }
            },
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien velit, aliquet in enim in, convallis pharetra orci. Fusce malesuada consectetur rutrum. Etiam sagittis metus quis ligula varius, in ornare purus placerat.',
            isCorrect: null
        }
    }
    // Content.load(function(data){
    //     $scope.questions = data;
    // });
});