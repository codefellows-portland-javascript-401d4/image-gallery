// $http is Angular's built in AJAX library
subjectService.$inject = ['$http', 'apiUrl'];

// $http gets injected
export default function subjectService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/subjects`)
        // our 'data' is on data property of response ... asynchronous callback
        .then(res => res.data);
    },
    remove(id) {
      return $http.delete(`${apiUrl}/subjects/${id}`)
        .then(res => res.data);
    },
    add(subject) {
      return $http.post(`${apiUrl}/subjects`, subject)
        .then(res => res.data);
    }
  };
}
