import http from "../../http-common.js";

class PunchlistDataService {
    getAll(id) {
        return http.get(`/projects/punchlist/${id}`);
    }

    create(data) {
        return http.post(`/projects/punchlist/`, data);
    }

    getOne(id){
        return http.get(`/projects/punchlist/single/${id}`);
    }
}

export default new PunchlistDataService();