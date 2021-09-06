import http from "../../http-common.js";

class PunchlistDataService {
    getAll(id) {
        return http.get(`/projects/punchlist/${id}`);
    }

    create(data) {
        console.log("create wena service ekata aawa")
        return http.post(`/projects/punchlist/`, data);
    }

    getOne(id) {
        return http.get(`/projects/punchlist/single/${id}`);
    }

    getType(id) {
        return http.get(`/projects/punchlist/type/${id}`);
    }
}

export default new PunchlistDataService();