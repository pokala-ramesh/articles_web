// var app = angular.module("articleApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        contoller: 'ArticleListCtrl',
        templateUrl : "static/views/articles-list.html"
    })
    .when("/add", {
        contoller: 'ArticleAddCtrl',
        templateUrl : "static/views/articles-add.html"
    }).otherwise({
        contoller: 'ArticleListCtrl',
        templateUrl : "static/views/articles-list.html"
    });
});