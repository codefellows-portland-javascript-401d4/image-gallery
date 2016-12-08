imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}`)
      .then(res => res.data);
    }
  };
}