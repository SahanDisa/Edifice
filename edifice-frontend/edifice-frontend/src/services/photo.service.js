import http from "./../http-common.js";

class PhotoFileDataService {
  getAll(id) {
    return http.get(`/photofile/`);
  }

  get(id) {
    return http.get(`/photofile/${id}`);
  }

  create(data) {
    return http.post(`/photofile/`, data);
  }

  getCat(id){
    return http.get(`/photofile/cat/${id}`);
  }
}

export default new PhotoFileDataService();