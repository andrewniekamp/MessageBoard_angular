(function() {
    'use strict';
    
    angular.module('app', [
        //Shared
        'app.core',
        'posts',

        //Other
        'app.home',
        'app.allPosts',
        'app.singlePost',
        'app.addPost'
    ]);
}());