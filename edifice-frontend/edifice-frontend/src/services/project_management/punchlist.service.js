import http from "../../http-common.js";

class PunchlistDataService {
    getAll(id) {
        return http.get(`/projects/punchlist/${id}`);
    }

    update(id, data) {
        return http.put(`/projects/punchlist/update/${id}`, data);
    }

    create(data) {
        return http.post(`/projects/punchlist/`, data);
    }

    getOne(id) {
        return http.get(`/projects/punchlist/single/${id}`);
    }

    getType(id) {
        return http.get(`/projects/punchlist/type/${id}`);
    }

    findlastItem(){
        return http.get(`/projects/punchlist/last`);
    }
}

export default new PunchlistDataService();