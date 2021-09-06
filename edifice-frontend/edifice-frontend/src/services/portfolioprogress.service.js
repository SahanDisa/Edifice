import http from "./../http-common.js";

class PortfolioProgressDataService {
  getAll(id) {
    return http.get(`/projects/portfolioprogress/${id}`);
  }

  get(id) {
    return http.get(`/projects/portfolioprogress/single/${id}`);
  }

  create(data) {
    return http.post(`/projects/portfolioprogress`, data);
  }

  update(id, data) {
    return http.put(`/projects/portfolioprogress/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/portfolioprogress/${id}`);
  }
}

export default new PortfolioProgressDataService;