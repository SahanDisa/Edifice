import http from "./../http-common.js";

class ProjectDataService {
  getAll() {
    return http.get("/projects");
  }

  get(id) {
    return http.get(`/projects/${id}`);
  }

  create(data) {
    return http.post("/projects", data);
  }

  update(id, data) {
    return http.put(`/projects/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/${id}`);
  }

  deleteAll() {
    return http.delete(`/projects`);
  }

  findByTitle(title) {
    return http.get(`/projects?title=${title}`);
  }
  userProjects(id){
    return http.get(`/projects/user/list/${id}`);
  }
  // findPublished(){
  //   return http.get(`/projects?published=`)
  // }
}

export default new ProjectDataService();