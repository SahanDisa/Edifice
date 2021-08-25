import http from "./../http-common.js";

class PrimeContractDataService {
  getAll(id) {
    return http.get(`/projects/primecontract/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/primecontract/${id}`);
  }

  create(data) {
    return http.post(`/projects/primecontract/`, data);
  }
}

export default new PrimeContractDataService();

