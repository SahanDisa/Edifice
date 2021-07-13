import http from "./../http-common.js";

class DirectCostDataService {
  getAll(id) {
    return http.get(`/projects/directcost/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/directcost/${id}`);
  }

  create(data) {
    return http.post(`/projects/directcost/`, data);
  }
}

export default new DirectCostDataService();

