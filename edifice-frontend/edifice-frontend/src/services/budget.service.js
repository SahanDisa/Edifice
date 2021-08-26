import http from "./../http-common.js";

class BudgetDataService {
  getAll(id) {
    return http.get(`/projects/budget/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/budget/${id}`);
  }

  create(data) {
    return http.post(`/projects/budget/`, data);
  }

  /*added new*/
  update(id, data){
    return http.put(`/projects/budget/${id}`, data);
  }
  
  remove(id){
    return http.delete(`/projects/budget/${id}`);
  }
  
  removeAll(){
    return http.delete(`/projects/budget`);
  }
  
  findByCostCode(costCode){
    return http.get(`/projects/budget?costCode=${costCode}`);
  }
  
  
  /*end of added new*/


}

export default new BudgetDataService();

