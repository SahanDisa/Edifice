import http from "./../../http-common.js";

class ActionPlanItemDataService {
  create(data) {
    return http.post(`/projects/actionplanitem/`, data);
  }

  update(id, data) {
    return http.put(`/projects/actionplanitem/update/${id}`, data);
  }

  delete(id) {
    return http.put(`/projects/actionplanitem/delete/${id}`);
  }

  get(id) {
    return http.get(`/projects/actionplanitem/${id}`);
  }

  getAll(id) {
    return http.get(`/projects/actionplanitem/all/${id}`);
  }

  getSection(id) {
    return http.get(`/projects/actionplanitem/section/${id}`);
  }

  Completed(id){
    return http.get(`/projects/actionplanitem/completed/${id}`);
  }
}

export default new ActionPlanItemDataService();