
var app = angular.module('articleApp',  ["ngRoute"]);
app.controller('ArticleListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.results = [1,2,3];
        

        // $http.get('/get_articles').success(function(resp){
        //     $scope.articles = resp;
        // });
        $scope.loadArticles = function() {
            $http.get('/get_articles').then(function(resp){
                $scope.articles = resp.data;
            });
        }

        $scope.upVote = function(id){
            $http.put('/up_vote/'+id).then(function(resp){
                $scope.loadArticles();
                $scope.voteStatus = true;
            });
        }

        $scope.loadArticles()

    }
]);
app.controller('ArticleAddCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.addArticle = function(){
            $http.post('/add_article', {"title": $scope.title, "author": $scope.author, "content": $scope.content})
            .then(function(results) {
                $scope.addStatus = true;
                $scope.title = '';
                $scope.author = '';
                $scope.content = '';
            })
        };
        $scope.closeMsg = function(){
            $scope.addStatus = false;
        }
    }
]);
app.controller('navCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.setActive = function(state){
            $scope.state = state;
        };
    }
]);
