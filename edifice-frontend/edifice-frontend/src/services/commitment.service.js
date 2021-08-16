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

  update(id, data) {
    return http.put(`/projects/commitment/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/commitment/${id}`);
  }

  findByTitle(title) {
    return http.get(`/projects/commitment?title=${title}`);
  }


}

export default new CommitmentDataService();

