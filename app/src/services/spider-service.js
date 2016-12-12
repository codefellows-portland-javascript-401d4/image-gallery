// $http is Angular's built in AJAX library
spiderService.$inject = ['$http', 'apiUrl'];

// $http gets injected
export default function spiderService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/spiders`)
        // our 'data' is on data property of response
        .then(res => res.data);
    },
    remove(id) {
      return $http.delete(`${apiUrl}/spiders/${id}`)
        .then(res => res.data);
    },
    add(spider) {
      return $http.post(`${apiUrl}/spiders`, spider)
        .then(res => res.data);
    }
  };
}
