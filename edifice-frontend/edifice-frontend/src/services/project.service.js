import http from "./../http-common.js";
import authHeader from './auth-header';
import axios from "axios";

const API_URL = "http://localhost:8080/api/";

class ProjectDataService{
    getAll(){
        return axios.get(API_URL + "projects");
    }
    get(id) {
        return axios.get(API_URL+ "/projects/${id}");
    }
    //write
    create(title,description){
        // return http.post("/projects",data);
        return axios.post(API_URL + "projects", {
            title,description
          },{ headers: authHeader() });
    }
    update(id,data){
        return http.put(`/projects/{id}`,data,{ headers: authHeader() });
    }
    delete(id){
        return http.delete(`/projects/{id}`,{ headers: authHeader() });
    }
    deleteAll(){
        return http.delete(`/projects`,{ headers: authHeader() });
    }
    findByTitle(title) {
        return http.get(`/projects?title=${title}`,{ headers: authHeader() });
    }
}

export default new ProjectDataService();