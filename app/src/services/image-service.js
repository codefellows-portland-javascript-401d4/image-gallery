imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/images`)
        .then(res => res.data);
    },
    add(image) {
      return $http.post(`${apiUrl}/images`, image)
        .then(res => res.data);
    },
    remove(imageId) {
      return $http.delete(`${apiUrl}/images/${imageId}`)
        .then(res => res.data);
    }
  };
} 