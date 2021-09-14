import http from "../../http-common.js";

class PunchListTypesDataService {
    getAll(id) {
        console.log("getAll wena service ekata aawa");
        return http.get(`/projects/punchlisttypes/${id}`);
    }

    create(data) {
        console.log("create wena service ekata aawa");
        return http.post(`/projects/punchlisttypes/`, data);
    }

    getOne(id){
        return http.get(`/projects/punchlisttypes/single/${id}`);
    }
}

export default new PunchListTypesDataService();