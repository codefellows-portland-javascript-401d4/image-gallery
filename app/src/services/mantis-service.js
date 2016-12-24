// $http is Angular's built in AJAX library
mantisService.$inject = ['$http', 'apiUrl'];

// $http gets injected
export default function mantisService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/mantids`)
        // our 'data' is on data property of response ... asynchronous callback
        .then(res => res.data);
    },
    remove(id) {
      return $http.delete(`${apiUrl}/mantids/${id}`)
        .then(res => res.data);
    },
    add(mantis) {
      return $http.post(`${apiUrl}/mantids`, mantis)
        .then(res => res.data);
    }
  };
}
