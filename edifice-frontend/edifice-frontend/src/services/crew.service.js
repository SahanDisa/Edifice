import http from "../http-common.js";

class CrewDataService {
  getAll(id) {
    console.log("id")
    return http.get(`/crews/list/${id}`);
  }
  /*
   getAll() {
     return http.get(`/crews/list/`);
   }
    get(id) {
     return http.get(`/projects/${id}`);
   }
   */
  create(data) {
    return http.post("/crews", data);

  }
  /*
    update(id, data) {
      return http.put(`/projects/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/projects/${id}`);
    }
  
    deleteAll() {
      return http.delete(`/projects`);
    }*/

  findByTitle(title) {
    return http.get(`/Crews?name=${title}`);
  }
}

export default new CrewDataService();