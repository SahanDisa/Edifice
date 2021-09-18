import http from "./../../http-common.js";

class DLGeneralService {
  create(data) {
    return http.post(`/projects/dlgeneral/`, data);
  }

  update(id, data) {
    return http.put(`/projects/dlgeneral/update/${id}`, data);
  }

  delete(id) {
    return http.put(`/projects/dlgeneral/delete/${id}`);
  }

  getOne(id) {
    return http.get(`/projects/dlgeneral/single/${id}`);
  }

  getAll(id) {
    return http.get(`/projects/dlgeneral/${id}`);
  }
}

export default new DLGeneralService();