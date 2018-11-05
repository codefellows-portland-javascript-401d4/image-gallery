galleryService.$inject = ['$http', 'apiUrl'];


export default function galleryService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/`)
        .then(res => {
          return res.data;
        });
    },

    add(image) {
      return $http.post(`${apiUrl}/`, image)
        .then(res => {
          return res.data;
        });
    },

    remove(id) {
      return $http.delete(`${apiUrl}/${id}`)
        .then(res => {
          return res.data;
        });
    }
  };
}

