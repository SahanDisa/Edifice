import http from "./../http-common.js";

class DepartmentDataService {
  getAll(id) {
    return http.get(`/projects/department/${id}`);
  }

  get(id) {
    return http.get(`/projects/department/single/${id}`);
  }

  create(data) {
    return http.post(`/projects/department`, data);
  }
}

export default new DepartmentDataService();