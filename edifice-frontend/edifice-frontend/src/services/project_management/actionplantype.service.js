import http from "./../../http-common.js";

class ActionPlanTypeDataService {
  getAll(id) {
    return http.get(`/projects/actionplantype/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/actionplantype/${id}`);
  }

  create(data) {
    return http.post(`/projects/actionplantype/`, data);
  }

  update(id, data) {
    return http.put(`/projects/actionplantype/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/actionplantype/${id}`);
  }

  getOne(id){
    return http.get(`/projects/actionplantype/single/${id}`);
  }
}

export default new ActionPlanTypeDataService();