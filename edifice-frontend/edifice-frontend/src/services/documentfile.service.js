import http from "./../http-common.js";

class DocumentDataService {
  getAll(id) {
    return http.get(`/projects/documents/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/documents/${id}`);
  }

  create(data) {
    return http.post(`/projects/documents/`, data);
  }

  getCat(id){
    return http.get(`/projects/documents/cat/${id}`);
  }
}

export default new DocumentDataService();