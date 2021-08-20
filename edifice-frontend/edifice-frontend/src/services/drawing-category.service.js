import http from "./../http-common.js";

class DrawingCategoryDataService {
  getAll(id) {
    return http.get(`/projects/drawing-category/${id}`);
  }

  create(data) {
    return http.post(`/projects/drawing-category/`, data);
  }

  getOne(id){
    return http.get(`/projects/drawing-category/single/${id}`);
  }
}

export default new DrawingCategoryDataService();