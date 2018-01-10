(function() {
    angular.module('posts', [])
    .factory('posts', postsFactory);

    function postsFactory($http) {
        function getAll() {
            return $http.get("../posts.json")
            .then(function(res) {
                return res.data;
            });
        }
        function findById(id) {
            var foundPost = {};
            posts.forEach(function(post) {
                if (parseInt(id) === post.postId) {
                    foundPost = post;
                }
            });
            return foundPost;
        }
        return {
            getAll: getAll,
            findById: findById
        };
    }
}());