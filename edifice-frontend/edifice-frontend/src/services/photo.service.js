import http from "./../http-common.js";

class PhotoFileDataService {
  getAll(id) {
    return http.get(`/photofile/`);
  }

  get(id) {
    return http.get(`/photofile/${id}`);
  }

  findByTitle(title) {
    return http.get(`/photofile?title=${title}`);
  }

  create(data) {
    return http.post(`/photofile/`, data);
  }

  getCat(id){
    return http.get(`/photofile/cat/${id}`);
  }

  update(id, data) {
    return http.put(`/photofile/${id}`, data);
  }

  delete(id) {
    return http.delete(`/photofile/${id}`);
  }


}

export default new PhotoFileDataService();