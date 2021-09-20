import http from "../http-common.js";

class EmployeeDataService {
  getOne(id) {
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

  updateAccountStatus(id) {
    return http.post(`/employee/${id}`);
  }

  delete(id) {
    return http.delete(`/employee/${id}`);
  }

  findlastEmployee(){
    return http.get(`/employee/app/last`);
  }

}

export default new EmployeeDataService();