import http from "../../http-common.js";

class MeetingCategoryDataService {
    getAll(id) {
        console.log("getAll wena service ekata aawa");
        return http.get(`/projects/meetingcategory/${id}`);
    }

    create(data) {
        console.log("create wena service ekata aawa");
        return http.post(`/projects/meetingcategory/`, data);
    }

    getOne(id){
        return http.get(`/projects/meetingcategory/single/${id}`);
    }
}

export default new MeetingCategoryDataService();