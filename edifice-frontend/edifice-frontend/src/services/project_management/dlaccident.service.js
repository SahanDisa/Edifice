import http from "./../../http-common.js";

class DLAccidentService {
  create(data) {
    return http.post(`/projects/dlaccident/`, data);
  }

  update(id, data) {
    return http.put(`/projects/dlaccident/update/${id}`, data);
  }

  delete(id, data) {
    return http.put(`/projects/dlaccident/delete/${id}`, data);
  }

  getOne(id) {
    return http.get(`/projects/dlaccident/single/${id}`);
  }

  getAll(id) {
    return http.get(`/projects/dlaccident/list/${id}`);
  }
}

export default new DLAccidentService();