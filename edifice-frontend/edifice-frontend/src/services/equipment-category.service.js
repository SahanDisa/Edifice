import http from "../http-common.js";

class EquipmentCategoryDataService {
  getAll() {
    return http.get("/categorys");
  }

  create(data) {
    return http.post("/categorys", data);
  }

  findByTitle(title) {
    return http.get(`/categorys/search?name=${title}`);
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
    }
  
    userProjects(id){
      return http.get(`/projects/user/list/${id}`);
    }*/
  // findPublished(){
  //   return http.get(`/projects?published=`)
  // }
}

export default new EquipmentCategoryDataService();