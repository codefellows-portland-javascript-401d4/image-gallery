imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
    return {
        get() {
            return $http
                .get(`${apiUrl}/images`)
                .then(images => images.data);
        }
    };
}