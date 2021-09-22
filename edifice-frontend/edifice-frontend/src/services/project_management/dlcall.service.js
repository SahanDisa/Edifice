import http from "./../../http-common.js";

class DLCallService {
  create(data) {
    return http.post(`/projects/dlcall/`, data);
  }

  update(id, data) {
    return http.put(`/projects/dlcall/update/${id}`, data);
  }

  delete(id) {
    return http.put(`/projects/dlcall/delete/${id}`);
  }

  getOne(id) {
    return http.get(`/projects/dlcall/single/${id}`);
  }

  getAllweek(id) {
    return http.get(`/projects/dlcall/${id}`);
  }

  getAll(id) {
    return http.get(`/projects/dlcall/all/${id}`);
  }

  getToday(id) {
    return http.get(`/projects/dlcall/today/${id}`);
  }
}

export default new DLCallService();