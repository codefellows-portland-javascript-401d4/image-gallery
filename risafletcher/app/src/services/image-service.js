imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/images`)
        .then(res => res.data);
    },
    add(img) {
      return $http.post(`${apiUrl}/images`, img)
        .then(res => res.data);
    },
    remove(id) {
      return $http.delete(`${apiUrl}/images/${id}`)
        .then(res => res.data);
    }
  };
}