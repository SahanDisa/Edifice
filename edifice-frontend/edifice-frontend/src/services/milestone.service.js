import http from "./../http-common.js";

class MilestoneDataService {
  getAll(id) {
    return http.get(`/projects/milestone/${id}`);
  }

  get(id) {
    return http.get(`/projects/milestone/single/${id}`);
  }

  create(data) {
    return http.post(`/projects/milestone`, data);
  }

  update(id, data) {
    return http.put(`/projects/milestone/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/milestone/${id}`);
  }

  findCompleted(id){
    return http.get(`/projects/milestone/completed/${id}`);
  }
}

export default new MilestoneDataService();