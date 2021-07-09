import http from "./../http-common.js";

class BudgetDataService {
  getAll(id) {
    return http.get(`/projects/budget/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/budget/${id}`);
  }

  create(data) {
    return http.post(`/projects/budget/`, data);
  }
}

export default new BudgetDataService();

