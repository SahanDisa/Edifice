import http from "./../http-common.js";

class PaymentDataService {
  getAll(id) {
    return http.get(`/commitments/payment/list/${id}`);
  }

  get(id) {
    return http.get(`/commitments/payment/${id}`);
  }

  create(data) {
    return http.post(`/commitments/payment/`, data);
  }

/*added new*/
update(id, data){
  return http.put(`/commitments/payment/${id}`, data);
}

remove(id){
  return http.delete(`/commitments/payment/${id}`);
}

removeAll(){
  return http.delete(`/commitments/payment`);
}

findByDate(date){
  return http.get(`/commitments/payment?date=${date}`);
}


/*added new*/

}

export default new PaymentDataService();

