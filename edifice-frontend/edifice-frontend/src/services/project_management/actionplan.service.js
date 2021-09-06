import http from "./../../http-common.js";

class ActionPlanDataService {
  getAll(id) {
    return http.get(`/projects/actionplan/action/${id}`);
  }
  
  getAllSearch(id) {
    return http.get(`/projects/actionplan/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/actionplan/${id}`);
  }

  create(data) {
    return http.post(`/projects/actionplan/`, data);
  }

  update(id, data) {
    return http.put(`/projects/actionplan/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/actionplan/${id}`);
  }

  Approved(id){
    return http.get(`/projects/actionplan/approved/${id}`);
  }
}

export default new ActionPlanDataService();