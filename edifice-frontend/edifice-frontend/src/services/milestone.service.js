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
}

export default new MilestoneDataService();