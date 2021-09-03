import http from "./../http-common.js";

class DirectCostDataService {
  getAll(id) {
    return http.get(`/projects/directcost/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/directcost/${id}`);
  }

  create(data) {
    return http.post(`/projects/directcost/`, data);
  }

/*added new*/
update(id, data){
  return http.put(`/projects/directcost/${id}`, data);
}

remove(id){
  return http.delete(`/projects/directcost/${id}`);
}

removeAll(){
  return http.delete(`/projects/directcost`);
}

findByCostCode(id,costCode){
  //return http.get(`/projects/directcost?costCode=${costCode}`);
  //return http.get(`/projects/directcost/list/${id}?costCode=${costCode}`);
  return http.get(`/projects/directcost/list/${id}/${costCode}`);
  //return http.get(`/projects/directcost?costcode=${costCode}`);

}


/*end of added new*/
getDTotalOfCostCodes(id,costCode){

  return http.get(`/projects/directcost/${id}/${costCode}/total`);

}

}

export default new DirectCostDataService();

