albumService.$inject = ['$http', 'apiUrl'];

export default function albumService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/albums`)
        .then(res => res.data);
    },
    get(albumId) {
      return $http.get(`${apiUrl}/albums/${albumId}`)
        .then(res => res.data);
    },
    add(album) {
      return $http.post(`${apiUrl}/albums`, album)
        .then(res => res.data);
    },
    remove(albumId) {
      return $http.delete(`${apiUrl}/albums/${albumId}`)
        .then(res => res.data);
    }
  };
} 