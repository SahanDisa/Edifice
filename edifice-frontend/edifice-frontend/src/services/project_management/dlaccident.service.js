import http from "./../../http-common.js";

class DLAccidentService {
  create(data) {
    return http.post(`/projects/accidentlog/`, data);
  }

  update(id, data) {
    return http.put(`/projects/accidentlog/update/${id}`, data);
  }

  delete(id) {
    return http.put(`/projects/accidentlog/delete/${id}`);
  }

  getOne(id) {
    return http.get(`/projects/accidentlog/single/${id}`);
  }

  getAll(id) {
    console.log("dla service ekata aawa");
    return http.get(`/projects/accidentlog/list/${id}`);
  }
}

export default new DLAccidentService();