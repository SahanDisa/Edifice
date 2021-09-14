import http from "../../http-common.js";

class PLAssigneesDataService {
    getAll(id) {
        console.log("getAll wena service ekata aawa");
        return http.get(`/projects/plassignees/${id}`);
    }

    create(data) {
        console.log("create wena service ekata aawa");
        return http.post(`/projects/plassignees/`, data);
    }

    getOne(id){
        return http.get(`/projects/plassignees/single/${id}`);
    }
}

export default new PLAssigneesDataService();