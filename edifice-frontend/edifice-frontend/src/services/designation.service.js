import http from "../http-common.js";

class DesignationDataService {
  getOne(id) {
    return http.get(`/designation/${id}`);
  }

  getAllDesignations() {
    return http.get(`/designation/`);
  }

}

export default new DesignationDataService();