import http from "./../http-common.js";

class DirectoryDataService {
  getAll(id) {
    return http.get(`/projects/directory/${id}`);
  }

  create(data) {
    return http.post(`/projects/directory/`, data);
  }
}

export default new DirectoryDataService();