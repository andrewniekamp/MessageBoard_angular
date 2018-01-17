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
                vm.isFormOpen = false;
                vm.$onChanges = function($changesObj) {
                    // console.log(vm.post);
                    if($changesObj === vm.post) {
                        vm.originalPost = Object.create({}, vm.post);
                    }
                    // else console.log($changesObj)
                    // vm.originalPost = Object.create({}, vm.post);
                };
                vm.editPost = function () {
                    var editedPost = {
                        id: vm.post.id,
                        title: vm.post.title,
                        body: vm.post.body,
                        user: vm.post.user,
                        date: Date.now()
                    };
                    posts.update(editedPost)
                        .then(function () {
                            $state.go('allPosts');
                        });
                };
                vm.cancelUpdate = function() {
                    $state.reload();
                };
                vm.toggle = function() {
                    vm.isFormOpen = !vm.isFormOpen;
                }
            }
        });
}());