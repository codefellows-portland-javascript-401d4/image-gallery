imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
    return {
        get() {
            return $http.get(`${apiUrl}/images`)
                .then(res => {
                    console.log(res.data);
                    return res.data;
                });
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