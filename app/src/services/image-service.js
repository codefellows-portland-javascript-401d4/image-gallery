//$http - Angular's built-in AJAX library
imageService.$inject = ['$http', 'apiUrl'];

//$http injection
export default function imageService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/images`)
        .then(res => res.data); //returns the data property of res obj
    },
    remove(id) {
      return $http.delete(`${apiUrl}/images/${id}`)
        .then(res => res.data);
    },
    addImage(image) {
      return $http.post(`${apiUrl}/images`, image)
        .then(res => res.data);
    }
  };
}