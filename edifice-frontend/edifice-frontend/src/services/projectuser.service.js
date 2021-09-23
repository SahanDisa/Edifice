import http from "./../http-common.js";

class ProjectUserDataService {
  create(data) {
    return http.post("/projects/user", data);
  }
  
  addProjectRole(data){
    return http.post("/projects/user/role/", data);
  }
    
  getAll(id) {
    return http.get(`/projects/user/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/user/${id}`);
  }

  getProjectUsers(id){
    return http.get(`/projects/user/project/${id}`);
  }

  getProjectUserProjectDetails(id){
    return http.get(`/projects/user/projectdata/user/${id}`);
  }

  searchUserDetails(id, position){
    return http.get(`/projects/user/projectdata/users/${id}/${position}`);
  }

  getUserAccounts(){
    return http.get(`/projects/user/accounts/list/`);
  }

  update(id, data) {
    return http.put(`/projects/user/${id}`, data);
  }

  delete(id) {
    return http.delete(`/projects/user/${id}`);
  }
}

export default new ProjectUserDataService();