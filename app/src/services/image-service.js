imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
  return {
    get() {
      console.log('image service get');
      return $http.get(`${apiUrl}/images`)
      .then(res => res.data);
    },
    add(image) {
      console.log('image service add');
      return $http.post(`${apiUrl}/images`, image)
      .then(res => res.data);
    }
  };
}