import http from "./../http-common.js";

class PortfolioDataService {
  getAllDep(id) {
    return http.get(`/projects/department/${id}`);
  }

  getSingleDep(id) {
    return http.get(`/projects/department/single/${id}`);
  }

  getAllMilestones(id){
    return http.get(`/projects/milestone/${id}`);
  }

  getSingleMilestone(id){
    return http.get(`/projects/milestone/single/${id}`);  
  }
}

export default new PortfolioDataService();