(function() {
    angular.module('app.toast')
    .factory('toast', toastFactory);

    function toastFactory($mdToast) {
        function makeToast(message) {
            $mdToast.show(
                $mdToast.simple()
                    .textContent(message)
                    .position('top right')
                    .hideDelay(2000)
            );
        }
        return {
            makeToast: makeToast
        };
    }
}());