import http from "./../../http-common.js";

class ActionPlanDataService {
  getAll(id) {
    return http.get(`/projects/actionplansection/actionsection/${id}`);
  }
  
  getAllSearch(id) {
    return http.get(`/projects/actionplansection/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/actionplansection/${id}`);
  }

  create(data) {
    return http.post(`/projects/actionplansection/`, data);
  }

  update(id, data) {
    return http.put(`/projects/actionplansection/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/actionplansection/${id}`);
  }

  Approved(id){
    return http.get(`/projects/actionplansection/approved/${id}`);
  }
}

export default new ActionPlanDataService();