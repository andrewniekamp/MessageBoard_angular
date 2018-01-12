(function() {
    angular.module('app.posts')
    .component('singlePost', {
        templateUrl: '/posts/single-post.component.html',
        controllerAs: 'vm',
        controller: function(posts, $stateParams) {
            var vm = this;
            vm.$onInit = function() {
                posts.findById($stateParams.id)
                .then(function(response) {
                    response.date = moment(response.date).format("MMM. DD, YYYY");
                    vm.post = response;
                });
            };
        }
    });
}());