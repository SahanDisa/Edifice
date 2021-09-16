import http from "./../../http-common.js";

class MeetingAttendeesDataService {
    create(data) {
        return http.post("/meetingattendees", data);
    }

    update(id, data) {
        return http.put(`/meetingattendees/update/${id}`, data);
    }

    getAll() {
        return http.get("/meetingattendees/");
    }
}

export default new MeetingAttendeesDataService();