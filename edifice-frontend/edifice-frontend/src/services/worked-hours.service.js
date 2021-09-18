import http from "../http-common.js";

class WorkedHoursDataService {
  /*  getAll(id) {
      return http.get(`/workedHours/list/${id}`);
    }
  
    getAll() {
      return http.get(`/workedHours/list/`);
    }
      get(id) {
      return http.get(`/projects/${id}`);
    }
    */
  create(data) {
    //console.log(data)
    return http.post("/workedHours", data);

  }

  getTimesheetDetails(id) {
    return http.get(`/workedHours/list/${id}`);
  }

  update(id, data) {
    return http.put(`/workedHours/${id}`, data);
  }
  /*
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
    }*/
  // findPublished(){
  //   return http.get(`/projects?published=`)
  // }
}

export default new WorkedHoursDataService();