import http from "../http-common.js";

class DesignationDataService {
  getOne(id) {
    return http.get(`/designation/${id}`);
  }

  getAllDesignations() {
    return http.get(`/designation/`);
  }

  getDesforemp(id) {
    return http.get(`/empdes/${id}`);
  }

  getAllEmpDesignations() {
    return http.get(`/empdes/`);
  }
  AssignDesignations(data) {
    return http.post(`/empdes/`,data);
  }

}

export default new DesignationDataService();