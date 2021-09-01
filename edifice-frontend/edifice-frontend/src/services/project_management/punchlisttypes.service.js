import http from "../../http-common.js";

class PunchListTypesDataService {
    getAll(id) {
        return http.get(`/projects/punchlist-type/${id}`);
    }

    create(data) {
        console.log("methentath aawoo");
        return http.post(`/projects/punchlist-type/`, data);
    }

    getOne(id){
        return http.get(`/projects/punchlist-type/single/${id}`);
    }
}

export default new PunchListTypesDataService();