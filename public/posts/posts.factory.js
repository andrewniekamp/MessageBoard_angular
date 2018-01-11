(function() {
    angular.module('posts', [])
    .factory('posts', postsFactory);

    function postsFactory($http) {
        function getAll() {
            return $http.get("/api/posts")
            .then(function(res) {
                return res.data;
            });
        }
        function findById(id) {
            // Better to store the data locally, or do another get to DB?
            return $http.get("/api/posts/" + id)
            .then(function(res) {
                return res.data;
            });
        }
        function addPost(newPost) {
            return $http.post('/api/posts', newPost);
        }
        return {
            getAll: getAll,
            findById: findById,
            addPost: addPost
        };
    }
}());