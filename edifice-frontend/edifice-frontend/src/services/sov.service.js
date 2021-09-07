import http from "./../http-common.js";

class SovDataService {
  getAll(id) {
    return http.get(`/commitments/sov/list/${id}`);
  }

  get(id) {
    return http.get(`/commitments/sov/${id}`);
  }

  create(data) {
    return http.post(`/commitments/sov/`, data);
  }

/*added new*/
update(id, data){
  return http.put(`/commitments/sov/${id}`, data);
}

remove(id){
  return http.delete(`/commitments/sov/${id}`);
}

removeAll(){
  return http.delete(`/commitments/sov`);
}

findByCostCode(id,costCode){
  //return http.get(`/projects/directcost?costCode=${costCode}`);
  //return http.get(`/projects/directcost/list/${id}?costCode=${costCode}`);
  return http.get(`/commitments/sov/list/${id}/${costCode}`);
  //return http.get(`/projects/directcost?costcode=${costCode}`);

}


/*end of added new*/

/*total sovs of a project*/
getTotalSovs(id){

  return http.get(`/commitments/sov/${id}/total`);

}

getSTotalOfCostCodes(id,costCode){

  return http.get(`/commitments/sov/${id}/${costCode}/total`);

}

}

export default new SovDataService();

