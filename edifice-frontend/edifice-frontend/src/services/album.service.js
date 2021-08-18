import http from "./../http-common.js";

class AlbumDataService {
  getAll(id) {
    return http.get(`/projects/photo-album/${id}`);
  }

  create(data) {
    return http.post(`/projects/photo-album/`, data);
  }
}

export default new AlbumDataService();