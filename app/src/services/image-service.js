imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}`)
      .then(res => res.data);
    },
    
    add(image) {
      return $http.post(`${apiUrl}`, image)
        .then(res => res.data);
    }
  };

}