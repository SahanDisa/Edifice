import http from "./../http-common.js";

class SovDataService {
  getAll(id) {
    return http.get(`/commitments/sov/list/${id}`);
  }

  get(id) {
    return http.get(`/commitments/sov/${id}`);
  }

  create(data) {
    return http.post(`/commitments/sov/`, data);
  }
}

export default new SovDataService();

