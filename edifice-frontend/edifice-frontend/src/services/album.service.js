import http from "./../http-common.js";

class AlbumDataService {
  getAll(id) {
    return http.get(`/projects/photo-album/${id}`);
  }

  create(data) {
    return http.post(`/projects/photo-album/`, data);
  }

  getOne(id){
    return http.get(`/projects/photo-album/single/${id}`);
  }

  recent(){
    return http.get(`/projects/documents/photo-album/recent`);
  }

  update(id, data) {
    return http.put(`/projects/photo-album/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/photo-album/${id}`);
  }
}

export default new AlbumDataService();