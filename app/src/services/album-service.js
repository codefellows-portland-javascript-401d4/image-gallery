// $http is Angular's built in AJAX library
albumService.$inject = ['$http', 'apiUrl'];

// $http gets injected
export default function albumService($http, apiUrl) {
  return {
    get(album_id) {
      if (!album_id) {
        return this.getAll();
      }
      else {
        return $http.get(`${apiUrl}/albums/${album_id}`)
        // our 'data' is a data property of response ... asynchronous callback
        .then(res => res.data);
      }
    },

    getAll(){
      return $http.get(`${apiUrl}/albums`)
        .then(res => res.data);
    },
    
    remove(id) {
      return $http.delete(`${apiUrl}/albums/${id}`)
        .then(res => res.data);
    },

    add(album) {
      return $http.post(`${apiUrl}/albums`, album)
        .then(res => res.data);
    }
  };
}
