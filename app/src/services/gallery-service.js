galleryService.$inject = ['$http', 'apiUrl'];


export default function galleryService($http, apiUrl) {
  return {
    getAlbums() {
      return $http.get(`${apiUrl}/`)
        .then(res => {
          return res.data;
        });
    },

    getAlbum(id) {
      return $http.get(`${apiUrl}/albums/${id}`)
        .then(res => {
          return res.data;
        });
    },

    addAlbum(album) {
      return $http.post(`${apiUrl}/albums/`, album)
        .then(res => {
          return res.data;
        });
    },

    addImage(image) {
      return $http.post(`${apiUrl}/`, image)
        .then(res => {
          return res.data;
        });
    },

    getImage(id) {
      return $http.get(`${apiUrl}/images/${id}`)
        .then(res => {
          return res.data;
        });
    },

    updateImage(id) {
      return $http.put(`${apiUrl}/images/${id}`)
        .then(res => {
          return res.data;
        });
    },

    removeImage(id) {
      return $http.delete(`${apiUrl}/images/${id}`)
        .then(res => {
          return res.data;
        });
    }

  };
}

