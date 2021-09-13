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

  getStatus(status){
    return http.get(`/projects/documents/status/${status}`);
  }

  recent(){
    return http.get(`/projects/documents/data/recent`);
  }

  update(id, data) {
    return http.put(`/projects/documents/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/documents/${id}`);
  }
}

export default new DocumentDataService();