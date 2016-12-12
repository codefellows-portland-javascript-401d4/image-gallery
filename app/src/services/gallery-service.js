galleryService.$inject = ['$http', 'apiUrl'];


export default function galleryService($http, apiUrl) {
  return {
    get: function() {
      return $http.get(`${apiUrl}/`)
        .then(res => {
          return res.data;
        });
    },

    add: function(image) {
      return $http.post(`${apiUrl}/`, image)
        .then(res => {
          return res.data;
        });
    },

    remove: function(id) {
      return $http.delete(`${apiUrl}/${id}`)
        .then(res => {
          return res.data;
        });
    }
  };
}

