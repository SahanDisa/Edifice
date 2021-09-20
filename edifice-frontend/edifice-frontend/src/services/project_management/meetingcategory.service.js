import http from "./../../http-common.js";

class MeetingCategoryDataService {
    create(data) {
        return http.post("/projects/meetingcategory", data);
    }

    update(id, data) {
        return http.put(`/projects/meetingcategory/update/${id}`, data);
    }

    delete(id) {
        return http.put(`/projects/meetingcategory/delete/${id}`);
    }

    getAll(id) {
        return http.get(`/projects/meetingcategory/all/${id}`);
    }

    get(id) {
        return http.get(`/projects/meetingcategory/${id}`);
    }
}

export default new MeetingCategoryDataService();