(function() {
    angular.module('app.posts')
    .factory('posts', postsFactory);

    function postsFactory($http) {
        function getAll() {
            return $http.get("/api/posts")
            .then(function(res) {
                return res.data;
            });
        }
        function findById(id) {
            return $http.get("/api/posts/" + id)
            .then(function(res) {
                return res.data;
            });
        }
        function add(newPost) {
            return $http.post('/api/posts', newPost);
        }
        function update(post) {
            return $http.put('/api/posts/' + post.id, post);
        }
        return {
            getAll: getAll,
            findById: findById,
            add: add,
            update: update
        };
    }
}());