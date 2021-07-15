import http from "./../http-common.js";

class SovDataService {
  getAll(id) {
    return http.get(`/projects/sov/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/sov/${id}`);
  }

  create(data) {
    return http.post(`/projects/sov/`, data);
  }
}

export default new SovDataService();

