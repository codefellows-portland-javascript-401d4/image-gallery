imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
    return {
        get() {
            return $http.get(`${apiUrl}/images`)
                .then(res => res.data);
        },
        getById(id) {
            return $http.get(`${apiUrl}/images/${id}`)
                .then(res => res.data);
        },
        remove(id) {
            return $http.delete(`${apiUrl}/images/${id}`)
                .then(res => res.data);
        },
        add(image) {
            return $http.post(`${apiUrl}/images`, image)
                .then(res => res.data);
        },
        put(albumId, imageId) {
            return $http.put(`${apiUrl}/images/${imageId}`, {album: albumId})
                .then(res => res.data);
        }
    };
}