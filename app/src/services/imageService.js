imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/images`)
        .then(res => res.data);
    },
    getOne(id) {
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
    }
  };
}