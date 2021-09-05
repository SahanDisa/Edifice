import http from "../http-common.js";

class EmployeeDataService {
  getAll(id) {
    return http.get(`/employee/${id}`);
  }

  getAll() {
    return http.get(`/employee/`);
  }
  /*  get(id) {
    return http.get(`/projects/${id}`);
  }
  */
  create(data) {
    return http.post("/employee", data);

  }

  update(id, data) {
    return http.put(`/employee/${id}`, data);
  }

  delete(id) {
    return http.delete(`/employee/${id}`);
  }

}

export default new EmployeeDataService();