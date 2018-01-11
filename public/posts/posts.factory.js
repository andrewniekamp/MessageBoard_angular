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
            return $http.get("../posts.json")
            .then(function(res) {
                res.data.forEach(function(post) {
                    if (parseInt(id) === post.id) {
                        foundPost = post;
                    }
                });
                return foundPost;
            });
        }
        return {
            getAll: getAll,
            findById: findById
        };
    }
}());