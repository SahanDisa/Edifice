import http from "../../http-common.js";

class PunchListTypesDataService {
    getAll(id) {
        return http.get(`/projects/punchlisttypes/${id}`);
    }

    create(data) {
        return http.post("/projects/punchlisttypes/", data);
    }

    // getOne(id){
    //     return http.get(`/projects/punchlisttypes/single/${id}`);
    // }

    findlastItem(){
        return http.get(`/projects/punchlisttypes/last`);
    }
}

export default new PunchListTypesDataService();