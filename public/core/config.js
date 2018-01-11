(function() {
    'use strict';

    angular.module('app.core')
    .config(function($stateProvider) {
        var allPostsState = {
            name: "allPosts",
            url: "/posts",
            component: "allPosts"
        };
        var singlePost = {
            name: "singlePost",
            url: "/posts/{id}",
            component: "singlePost"
        };
        $stateProvider.state(allPostsState);
        $stateProvider.state(singlePost);
    });
}());