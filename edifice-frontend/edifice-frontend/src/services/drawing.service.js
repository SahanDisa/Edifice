import http from "./../http-common.js";

class DrawingDataService {
  getAll(id) {
    return http.get(`/projects/drawing/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/drawing/${id}`);
  }

  create(data) {
    return http.post(`/projects/drawing/`, data);
  }

  getCat(id){
    return http.get(`/projects/drawing/cat/${id}`);
  }

  update(id, data) {
    return http.put(`/projects/drawing/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/drawing/${id}`);
  }
}

export default new DrawingDataService();

