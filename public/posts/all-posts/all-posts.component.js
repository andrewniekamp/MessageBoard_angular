(function() {
    angular.module('app.posts')
    .component('allPosts', {
        templateUrl: '/posts/all-posts/all-posts.component.html',
        controllerAs: 'vm',
        controller: function(posts, NgTableParams) {
            var vm = this;
            vm.$onInit = function() {
                posts.getAll()
                .then(function(response) {
                    response.forEach(function(post) {
                        post.date = moment(post.date).format('MMM. DD, YYYY HH:MM:SS');
                    });
                    vm.posts = response;
                    vm.tableParams = new NgTableParams({}, { dataset: vm.posts});
                });
            };
        }
    });
}());