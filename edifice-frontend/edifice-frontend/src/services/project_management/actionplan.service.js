import http from "./../../http-common.js";

class ActionPlanDataService {
  create(data) {
    return http.post(`/projects/actionplan/`, data);
  }

  update(id, data) {
    return http.put(`/projects/actionplan/update/${id}`, data);
  }

  delete(id) {
    return http.put(`/projects/actionplan/delete/${id}`);
  }

  getOne(id) {
    return http.get(`/projects/actionplan/single/${id}`);
  }

  getAll(id) {
    return http.get(`/projects/actionplan/action/${id}`);
  }

  getType(id){
    return http.get(`/projects/actionplan/type/${id}`);
  }

  getApproved(id){
    return http.get(`/projects/actionplan/approved/${id}`);
  }
}

export default new ActionPlanDataService();