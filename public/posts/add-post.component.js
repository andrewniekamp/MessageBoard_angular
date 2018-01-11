(function() {
    angular.module('app.addPost', [])
    .component('addPost', {
        templateUrl: '/posts/add-post.component.html',
        controllerAs: 'vm'
    });
}());