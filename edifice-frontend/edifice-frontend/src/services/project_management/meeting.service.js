import http from "./../http-common.js";

class MeetingDataService {
    getAll() {
        return http.get("/projects");
    }

    get(id) {
        return http.get(`/projects/${id}`);
    }

    create(data) {
        return http.post("/projects", data);
    }

    update(id, data) {
        return http.put(`/projects/${id}`, data);
    }

    delete(id) {
        return http.delete(`/projects/${id}`);
    }

    findByTitle(title) {
        return http.get(`/projects?title=${title}`);
    }

    userProjects(id){
        return http.get(`/projects/user/list/${id}`);
    }
}

export default new MeetingDataService();