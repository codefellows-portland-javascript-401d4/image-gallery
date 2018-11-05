// $http is Angular's built-in AJAX library
imageService.$inject = ['$http', 'apiUrl'];

// $http gets injected
export default function imageService($http, apiUrl) {
    return {
        get() {
            return $http.get(`${apiUrl}/images`)
                // our "data" is on the data prop of res
                .then(res => res.data);
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
