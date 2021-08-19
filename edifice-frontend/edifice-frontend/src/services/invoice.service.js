import http from "./../http-common.js";

class InvoiceDataService {
  getAll(id) {
    return http.get(`/commitments/invoice/list/${id}`);
  }

  get(id) {
    return http.get(`/commitments/invoice/${id}`);
  }

  create(data) {
    return http.post(`/commitments/invoice/`, data);
  }

/*added new*/
update(id, data){
  return http.put(`/commitments/invoice/${id}`, data);
}

remove(id){
  return http.delete(`/commitments/invoice/${id}`);
}

removeAll(){
  return http.delete(`/commitments/invoice`);
}

findByCostCode(costCode){
  return http.get(`/commitments/invoice?costCode=${costCode}`);
}


/*added new*/

}

export default new InvoiceDataService();

