import http from "./../../http-common.js";

class MeetingAgendaDataService {
    create(data) {
        return http.post("/meetingagenda", data);
    }

    update(id, data) {
        return http.put(`/meetingagenda/update/${id}`, data);
    }

    delete(id) {
        return http.put(`/meetingagenda/delete/${id}`);
    }

    getAll() {
        return http.get("/meetingagenda/");
    }

    get(id) {
        return http.get(`/meetingagenda/${id}`);
    }
}

export default new MeetingAgendaDataService();