import http from "../../http-common.js";

class PunchListTypesDataService {
    getAll(id) {
        console.log("getAll wena service ekata aawa");
        return http.get(`/projects/pltypes/${id}`);
    }

    create(data) {
        console.log("create wena service ekata aawa");
        return http.post(`/projects/pltypes/`, data);
    }

    getOne(id){
        return http.get(`/projects/pltypes/single/${id}`);
    }
}

export default new PunchListTypesDataService();