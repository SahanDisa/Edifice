import http from "./../http-common.js";

class VendorDataService {
  getAll() {
    return http.get("/vendor");
  }

  getOne(id) {
    return http.get(`/vendor/${id}`);
  }

  create(data) {
    return http.post("/vendor", data);
  }

  update(id, data) {
    return http.put(`/vendor/${id}`, data);
  }

  delete(id) {
    return http.delete(`/vendor/${id}`);
  }

  findByName(companyName) {
    return http.get(`/vendor?name=${companyName}`);
  }

  findlastVendor(){
    return http.get(`/vendor/app/last`);
  }

  deleteAll() {
    return http.delete(`/vendor`);
  } 
}

export default new VendorDataService();