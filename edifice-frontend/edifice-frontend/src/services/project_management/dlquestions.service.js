import http from "./../../http-common.js";

class DLQuestionsService {
  create(data) {
    return http.post(`/projects/dlquestions/`, data);
  }

  update(id, data) {
    return http.put(`/projects/dlquestions/update/${id}`, data);
  }

  delete(id) {
    return http.put(`/projects/dlquestions/delete/${id}`);
  }

  getOne(id) {
    return http.get(`/projects/dlquestions/single/${id}`);
  }

  getAll(id) {
    return http.get(`/projects/dlquestions/${id}`);
  }
}

export default new DLQuestionsService();