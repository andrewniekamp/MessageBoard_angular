(function() {
    'use strict';

    angular.module('app.core')
    .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
        var homeState = {
            name: "home",
            url: "/",
            component: "home"
        };
        var allPostsState = {
            name: "allPosts",
            url: "/posts",
            component: "allPosts"
        };
        var singlePostState = {
            name: "singlePost",
            url: "/posts/{id[^\/]+}",
            component: "singlePost"
        };
        $stateProvider.state(homeState);
        $stateProvider.state(allPostsState);
        $stateProvider.state(singlePostState);
        // Had attempted to remove #! from url,
        // Caused issue with page refresh adding '/'
        // Which would give an empty string as param
        // Example: posts/ would go to an empty post
        // $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
    });
}());