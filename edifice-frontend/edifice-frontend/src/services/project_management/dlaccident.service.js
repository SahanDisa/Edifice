import http from "./../../http-common.js";

class DLAccidentService {
  create(data) {
    return http.post(`/projects/dlaccident/`, data);
  }

  update(id, data) {
    return http.put(`/projects/dlaccident/update/${id}`, data);
  }

  delete(id) {
    return http.put(`/projects/dlaccident/delete/${id}`);
  }

  getOne(id) {
    return http.get(`/projects/dlaccident/single/${id}`);
  }

  getAll(id) {
    return http.get(`/projects/dlaccident/${id}`);
  }
}

export default new DLAccidentService();