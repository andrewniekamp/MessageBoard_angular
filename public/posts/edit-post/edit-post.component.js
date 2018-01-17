(function () {
    angular.module('app.posts')
        .component('editPost', {
            bindings: {
                post: "<"
            },
            templateUrl: '/posts/edit-post/edit-post.component.html',
            controllerAs: 'vm',
            controller: function (posts, $state) {
                var vm = this;
                vm.editPost = function () {
                    var editedPost = {
                        id: vm.post.id,
                        title: vm.newTitle || vm.title,
                        body: vm.newBody || vm.body,
                        user: vm.newUser || vm.user,
                        date: Date.now()
                    };
                    posts.update(editedPost)
                        .then(function () {
                            $state.go('allPosts');
                        });
                };
            }
        });
}());