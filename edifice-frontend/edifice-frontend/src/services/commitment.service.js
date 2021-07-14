import http from "./../http-common.js";

class CommitmentDataService {
  getAll(id) {
    return http.get(`/projects/commitment/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/commitment/${id}`);
  }

  create(data) {
    return http.post(`/projects/commitment/`, data);
  }
}

export default new CommitmentDataService();

