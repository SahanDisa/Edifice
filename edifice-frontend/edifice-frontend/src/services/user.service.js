import axios from 'axios';
import authHeader from './auth-header';
import http from "./../http-common.js";

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
  // get all project relations of a user
  userProjects(id){
    return http.get(`/projects/user/list/${id}`);
  }
}

export default new UserService();