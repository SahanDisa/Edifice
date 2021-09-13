import http from "../http-common.js";

class ScheduleDataService {
  getAll(id) {
    //console.log(id)
    return http.get(`/schedules/list/${id}`);
  }
/*
  getAll() {
    return http.get(`/timesheets/list/`);
  }*/

  get(id) {
    return http.get(`/schedules/${id}`);
  }

  create(data) {
    console.log(data)
    return http.post("/schedules", data);

  }

  update(id, data) {
    return http.put(`/schedules/status/${id}`, data);
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

export default new ScheduleDataService();