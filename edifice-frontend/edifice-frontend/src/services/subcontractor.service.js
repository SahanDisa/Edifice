import http from "./../http-common.js";

class SubDataService {
  getAll() {
    return http.get("/subcontractor");
  }

  getOne(id) {
    return http.get(`/subcontractor/${id}`);
  }

  create(data) {
    return http.post("/subcontractor", data);
  }

  update(id, data) {
    return http.put(`/subcontractor/${id}`, data);
  }

  delete(id) {
    return http.delete(`/subcontractor/${id}`);
  }

  findByName(companyName) {
    return http.get(`/subcontractor?name=${companyName}`);
  }

  findlastSub(){
    return http.get(`/subcontractor/app/last`);
  }

  deleteAll() {
    return http.delete(`/subcontractor`);
  } 
}

export default new SubDataService();