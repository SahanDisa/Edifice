import http from "./../http-common.js";

class DrawingCategoryDataService {
  getAll(id) {
    return http.get(`/projects/drawing-category/${id}`);
  }

  create(data) {
    return http.post(`/projects/drawing-category/`, data);
  }
}

export default new DrawingCategoryDataService();