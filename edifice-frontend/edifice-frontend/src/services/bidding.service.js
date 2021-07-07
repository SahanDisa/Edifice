import http from "./../http-common.js";

class BiddingDataService {
  getAll(id) {
    return http.get(`/projects/bidding/list/${id}`);
  }

  get(id) {
    return http.get(`/projects/bidding/${id}`);
  }

  create(data) {
    return http.post(`/projects/bidding/`, data);
  }
}

export default new BiddingDataService();
