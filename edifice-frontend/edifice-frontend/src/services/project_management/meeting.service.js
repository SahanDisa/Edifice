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

    getAll(id) {
        return http.get(`/meetings/all/${id}`);
    }

    get(id) {
        return http.get(`/meetings/${id}`);
    }
}

export default new MeetingDataService();