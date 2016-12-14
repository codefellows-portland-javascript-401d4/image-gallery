imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${ apiUrl }/images`)
        .then(res => res.data);
    },
    remove(id) {
      return $http.delete(`${ apiUrl }/images/${ id }`)
        .then(res => res.data);
    }
  };
}; 
