imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/albums`)
        .then(res => res.data);
    },
    getImages(album){
      return $http.get(`${apiUrl}/albums/${album._id}`)
        .then(res => res.data);
    },
    add(album) {
      return $http.post(`${apiUrl}/albums`, album)
        .then(res => res.data);
    },
    remove(album) {
      return $http.delete(`${apiUrl}/albums/${album._id}`)
        .then(res => res.data);
    }
  };
}