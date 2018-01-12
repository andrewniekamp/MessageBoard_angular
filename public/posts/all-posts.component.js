(function() {
    angular.module('app.posts')
    .component('allPosts', {
        templateUrl: '/posts/all-posts.component.html',
        controllerAs: 'vm',
        controller: function(posts) {
            var vm = this;
            vm.$onInit = function() {
                posts.getAll()
                .then(function(response) {
                    response.forEach(function(post) {
                        post.date = moment(post.date).format("MMM. DD, YYYY");
                    });
                    vm.posts = response;
                });
            };
        }
    });
}());