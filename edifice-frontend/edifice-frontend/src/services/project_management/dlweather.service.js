import http from "./../../http-common.js";

class DLWeatherService {
  create(data) {
    return http.post(`/projects/dlweather/`, data);
  }

  update(id, data) {
    return http.put(`/projects/dlweather/update/${id}`, data);
  }

  delete(id) {
    return http.put(`/projects/dlweather/delete/${id}`);
  }

  getOne(id) {
    return http.get(`/projects/dlweather/single/${id}`);
  }

  getAll(id) {
    return http.get(`/projects/dlweather/${id}`);
  }
}

export default new DLWeatherService();