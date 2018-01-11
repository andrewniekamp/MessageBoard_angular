(function() {
    angular.module('app.addPost', [])
    .component('addPost', {
        templateUrl: '/posts/add-post.component.html',
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
                posts.addPost(newPost)
                .then(function() {
                    $state.go('allPosts');
                })
            };
        }
    });
}());