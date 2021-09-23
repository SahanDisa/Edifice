import http from "./../../http-common.js";

class ActionPlanSectionDataService {
  create(data) {
    return http.post(`/projects/actionplansection/`, data);
  }

  update(id, data) {
    return http.put(`/projects/actionplansection/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/actionplansection/${id}`);
  }

  get(id) {
    return http.get(`/projects/actionplansection/${id}`);
  }

  getAll(id) {
    return http.get(`/projects/actionplansection/all/${id}`);
  }
}

export default new ActionPlanSectionDataService();