import http from "../../http-common.js";

class PunchListTypesDataService {
    getAll(id) {
        return http.get(`/projects/punchlisttype/${id}`);
    }

    create(data) {
        console.log("222222");
        return http.post(`/projects/punchlisttype/`, data);
    }

    getOne(id){
        return http.get(`/projects/punchlisttype/single/${id}`);
    }
}

export default new PunchListTypesDataService();