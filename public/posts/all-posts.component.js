(function() {
    angular.module('app.allPosts', [])
    .component('allPosts', {
        templateUrl: '/posts/all-posts.component.html',
        controllerAs: 'vm',
        controller: function(posts) {
            var vm = this;
            vm.$onInit = function() {
                posts.getAll()
                .then(function(response) {
                    vm.posts = response;
                });
            };
        }
    });
}());