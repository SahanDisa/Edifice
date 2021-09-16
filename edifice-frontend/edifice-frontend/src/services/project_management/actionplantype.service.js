import http from "./../../http-common.js";

class ActionPlanTypeDataService {
  create(data) {
    return http.post(`/projects/actionplantype/`, data);
  }

  update(id, data) {
    return http.put(`/projects/actionplantype/update/${id}`, data);
  }

  delete(id) {
    return http.pu(`/projects/actionplantype/delete/${id}`);
  }

  get(id) {
    return http.get(`/projects/actionplantype/${id}`);
  }

  getOne(id){
    return http.get(`/projects/actionplantype/single/${id}`);
  }

  getAll(id) {
    return http.get(`/projects/actionplantype/all/${id}`);
  }
}

export default new ActionPlanTypeDataService();