albumService.$inject = ['$http', 'apiUrl'];

export default function albumService($http, apiUrl) {
    return {
        getAll() {
            return $http
                .get(`${apiUrl}/albums`)
                .then(albums => albums.data);
        },
        getAlbum(name) {
            return $http
                .get(`${apiUrl}/albums/${name}`)
                .then(album => album.data);
        },
        remove(id) {
            return $http
                .delete(`${apiUrl}/albums/${id}`)
                .then(res => res.data);
        },
        add(album) {
            return $http
                .post(`${apiUrl}/albums`, album)
                .then(res => res.data);
        }
    };
}