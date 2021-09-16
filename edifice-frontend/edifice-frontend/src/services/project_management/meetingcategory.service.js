import http from "./../../http-common.js";

class MeetingCategoryDataService {
    create(data) {
        return http.post("/meetingcategory", data);
    }

    update(id, data) {
        return http.put(`/meetingcategory/update/${id}`, data);
    }

    delete(id) {
        return http.put(`/meetingcategory/delete/${id}`);
    }

    getAll() {
        return http.get("/meetingcategory/");
    }

    get(id) {
        return http.get(`/meetingcategory/${id}`);
    }
}

export default new MeetingCategoryDataService();