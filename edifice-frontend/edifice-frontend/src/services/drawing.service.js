import http from "./../http-common.js";

class DrawingDataService {
  getAll(id) {
    return http.get(`/projects/drawing/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/${id}`);
  }

  create(data) {
    return http.post("/projects/drawing", data);
  }
}

export default new DrawingDataService();

