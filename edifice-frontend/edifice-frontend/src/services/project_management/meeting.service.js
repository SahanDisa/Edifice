import http from "./../../http-common.js";

class MeetingDataService {
    create(data) {
        return http.post("/meetings", data);
    }

    update(id, data) {
        return http.put(`/meetings/update/${id}`, data);
    }

    delete(id) {
        return http.put(`/meetings/delete/${id}`);
    }

    getAll() {
        return http.get("/meetings/");
    }

    get(id) {
        return http.get(`/meetings/${id}`);
    }
}

export default new MeetingDataService();