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

findByCostCode(costCode){
  return http.get(`/commitments/sov?costCode=${costCode}`);
}


/*added new*/

}

export default new SovDataService();

