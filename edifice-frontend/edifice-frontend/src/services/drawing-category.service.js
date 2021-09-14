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

  recent(){
    return http.get(`/projects/drawing-category/data/recent`);
  }

  update(id, data) {
    return http.put(`/projects/drawing-category/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/drawing-category/${id}`);
  }

  
}

export default new DrawingCategoryDataService();