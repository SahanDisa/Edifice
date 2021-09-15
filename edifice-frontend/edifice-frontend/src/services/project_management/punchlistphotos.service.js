import http from "../../http-common.js";

class PLPhotosDataService {
  getAll(id) {
    return http.get(`/projects/plphotos/${id}`);
  }

  get(id) {
    return http.get(`/projects/plphotos/single/${id}`);
  }

  create(data) {
    return http.post(`/projects/plphotos/`, data);
  }
}

export default new PLPhotosDataService();