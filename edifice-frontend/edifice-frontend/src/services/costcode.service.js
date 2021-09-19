import http from "./../http-common.js";

class CostCodeDataService {
  getAll(id) {
    return http.get(`/projects/costcode/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/costcode/${id}`);
  }

  create(data) {
    return http.post(`/projects/costcode/`, data);
  }

 /*added new*/
update(id, data){
  return http.put(`/projects/costcode/${id}`, data);
}

}
export default new CostCodeDataService();

