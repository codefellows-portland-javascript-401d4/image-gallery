imageService.$inject = ['$http'];

export default function imageService($http) {
  return {
    get() {
      console.log('image service');
      return $http.get('http://localhost:3000/api/images')
      .then(res => res.data);
    },
    add(image) {
      return $http.post('http://localhost:3000/api/images', image)
      .then(res => res.data);
    }
  };
}