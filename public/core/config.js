(function() {
    'use strict';

    angular.module('app.core')
    .config(function($stateProvider) {
        var allPostsState = {
            name: "allPosts",
            url: "/posts",
            component: "allPosts"
        };
        $stateProvider.state(allPostsState);
    });
}());