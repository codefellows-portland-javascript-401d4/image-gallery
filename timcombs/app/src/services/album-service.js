//$http - Angular's built-in AJAX library
albumService.$inject = ['$http', 'apiUrl'];

//$http injection
export default function albumService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/albums`)
        .then(res => res.data); //returns the data property of res obj
    },
    getOne(id) {
      return $http.get(`${apiUrl}/albums/${id}`)
        .then(res => res.data);
    },
    remove(id) {
      return $http.delete(`${apiUrl}/albums/${id}`)
        .then(res => res.data);
    },
    addAlbum(album) {
      return $http.post(`${apiUrl}/albums`, album)
        .then(res => res.data);
    }
  };
}