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

findByCostCode(id,costCode){
  //return http.get(`/projects/directcost?costCode=${costCode}`);
  //return http.get(`/projects/directcost/list/${id}?costCode=${costCode}`);
  return http.get(`/projects/budget/list/${id}/${costCode}`);
  //return http.get(`/projects/directcost?costcode=${costCode}`);
}

  /*end of added new*/


/*total budget of a project*/
getTotalBudget(id){

  return http.get(`/projects/budget/${id}/total`);

}

getBudgetOverview(id){

  return http.get(`/projects/budget/${id}/total/overview`);

}

}
export default new BudgetDataService();

