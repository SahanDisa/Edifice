import http from "./../http-common.js";

class DrawRevisionDataService {
  getAll(id) {
    return http.get(`/projects/drawrevision/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/drawrevision/${id}`);
  }

  create(data) {
    return http.post(`/projects/drawrevision/`, data);
  }

  getCat(id){
    return http.get(`/projects/drawrevision/cat/${id}`);
  }

  update(id, data) {
    return http.put(`/projects/drawrevision/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/drawrevision/${id}`);
  }
}

export default new DrawRevisionDataService();