import http from "./../http-common.js";

class PrimeContractsDataService {
  getAll(id) {
    return http.get(`/projects/prime-contracts/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/prime-contracts/${id}`);
  }

  create(data) {
    return http.post(`/projects/prime-contracts/`, data);
  }
}

export default new PrimeContractsDataService();

