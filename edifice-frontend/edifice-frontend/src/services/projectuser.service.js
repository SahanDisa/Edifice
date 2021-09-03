import http from "./../http-common.js";

class ProjectUserDataService {
  create(data) {
    return http.post("/projects/user", data);
  }
    
  getAll(id) {
    return http.get(`/projects/user/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/user/${id}`);
  }

  getProjectUsers(id){
    return http.get(`/projects/user/project/{$id}`)
  }

  update(id, data) {
    return http.put(`/projects/user/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/user/${id}`);
  }
}

export default new ProjectUserDataService();