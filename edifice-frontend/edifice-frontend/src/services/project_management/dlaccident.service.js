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
    console.log("dla service ekata aawa");
    return http.get(`/projects/dlaccident/list/${id}`);
  }
}

export default new DLAccidentService();