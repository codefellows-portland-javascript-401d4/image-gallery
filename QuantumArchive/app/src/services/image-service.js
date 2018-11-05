imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
    return {
        get() {
            return $http
                .get(`${apiUrl}/images`)
                .then(images => images.data);
        },
        remove(id) {
            return $http.delete(`${apiUrl}/images/${id}`)
                .then(res => res.data);
        },
        add(image) {
            return $http.post(`${apiUrl}/images`, image)
                .then(res => res.data);
        }
    };
}