import http from "./../../http-common.js";

class ActionPlanItemDataService {
  getAll(id) {
    return http.get(`/projects/actionplanitem/actionitem/${id}`);
  }
  
  getAllSearch(id) {
    return http.get(`/projects/actionplanitem/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/actionplanitem/${id}`);
  }

  create(data) {
    return http.post(`/projects/actionplanitem/`, data);
  }

  update(id, data) {
    return http.put(`/projects/actionplanitem/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/actionplanitem/${id}`);
  }

  Completed(id){
    return http.get(`/projects/actionplanitem/completed/${id}`);
  }
}

export default new ActionPlanItemDataService();