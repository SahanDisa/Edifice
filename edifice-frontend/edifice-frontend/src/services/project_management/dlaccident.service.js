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

  getAllweek(id) {
    return http.get(`/projects/dlaccident/list/${id}`);
  }

  getAll(id) {
    return http.get(`/projects/dlaccident/list/all/${id}`);
  }

  getToday(id) {
    return http.get(`/projects/dlaccident/today/${id}`);
  }
}

export default new DLAccidentService();