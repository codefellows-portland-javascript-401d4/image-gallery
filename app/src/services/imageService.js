imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/images`)
        .then(res => res.data);
    },
    remove(id) {
      return $http.delete(`${apiUrl}/images/${id}`)
        .then(res => res.data);
    },
    addImage(image) {
      return $http.post(`${apiUrl}/images`, image)
        .then(res => res.data);
    },
    addAlbum(album) {
      return $http.post(`${apiUrl}/albums`, album)
        .then(res => res.data);
    }
  };
}