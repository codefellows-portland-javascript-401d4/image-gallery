albumService.$inject = ['$http', 'apiUrl'];

export default function albumService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/albums`)
        .then(res => res.data);
    },
    getId(id) {
      return $http.get(`${apiUrl}/albums/${id}`)
        .then(res => res.data);
    },
    post(album) {
      return $http.post(`${apiUrl}/albums`, album)
        .then(res => res.data);
    },
    remove(id) {
      return $http.delete(`${apiUrl}/albums/${id}`)
        .then(res => res.data);
    }
  };
}