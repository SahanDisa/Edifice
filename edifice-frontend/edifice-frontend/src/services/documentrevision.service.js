import http from "./../http-common.js";

class DocumentRevisionDataService {
  getAll(id) {
    return http.get(`/projects/documentrevision/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/documentrevision/${id}`);
  }

  create(data) {
    return http.post(`/projects/documentrevision/`, data);
  }

  getCat(id){
    return http.get(`/projects/documentrevision/cat/${id}`);
  }

  update(id, data) {
    return http.put(`/projects/documentrevision/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/documentrevision/${id}`);
  }
}

export default new DocumentRevisionDataService();