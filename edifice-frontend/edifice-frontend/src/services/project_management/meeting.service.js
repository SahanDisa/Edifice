import http from "./../../http-common.js";

class MeetingDataService {
    create(data) {
        return http.post("/projects/meetings", data);
    }

    update(id, data) {
        return http.put(`/projects/meetings/update/${id}`, data);
    }

    delete(id) {
        return http.put(`/projects/meetings/delete/${id}`);
    }

    getAll(id) {
        return http.get(`/projects/meetings/all/${id}`);
    }

    get(id) {
        return http.get(`/projects/meetings/${id}`);
    }

    getLastCatMeeting(id) {
        return http.get(`/projects/meetings/category/${id}`);
    }
}

export default new MeetingDataService();