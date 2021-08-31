import http from "./../http-common.js";

class ExcelDataService {
  download(id) {
    return http.get(`/excel/${id}/download`);
  }


}

export default new ExcelDataService();

