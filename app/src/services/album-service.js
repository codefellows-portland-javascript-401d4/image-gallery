albumService.$inject = ['$http', apiUrl];

export default function albumService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${ apiUrl }/albums`)
        .then(res => res.data);
    },
    getById(id) {
      return $http.get(`${ apiUrl }/albums/${ id }`)
        .then(res => res.data);
    },
    add(album) {
      return $http.get(`${ apiUrl }/albums`, album)
        .then(res => res.data);
    },
    remove(id) {
      return $http.get(`${ apiUrl }/albums/${ id }`)
        .then(res => res.data);
    }
  };
}
