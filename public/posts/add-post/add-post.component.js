(function() {
    angular.module('app.posts')
    .component('addPost', {
        templateUrl: '/posts/add-post/add-post.component.html',
        controllerAs: 'vm',
        controller: function(posts, $state) {
            var vm = this;
            vm.addPost = function() {
                var newPost = {
                    title: vm.title, 
                    body: vm.body,
                    user: vm.user,
                    date: Date.now()
                };
                posts.add(newPost)
                .then(function() {
                    $state.go('allPosts');
                });
            };
        }
    });
}());