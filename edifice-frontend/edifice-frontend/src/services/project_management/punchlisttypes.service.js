import http from "../../http-common.js";

class PunchListTypesDataService {
    getAll(id) {
        return http.get(`/projects/pltypes/${id}`);
    }

    getType(pliid, id) {
        return http.get(`/projects/pltypes/type/${id}/${pliid}`);
    }

    create(data) {
        return http.post(`/projects/pltypes/`, data);
    }

    getOne(id){
        return http.get(`/projects/pltypes/single/${id}`);
    }
}

export default new PunchListTypesDataService();