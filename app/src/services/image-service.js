imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/images`)
        .then(res => res.data);
    },
    add(pirate) {
      return $http.post(`${apiUrl}/pirates`, pirate)
      .then(res => res.data);
    }
  };
}