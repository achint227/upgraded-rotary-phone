import http from "../http-common";

class AuthService {
  signIn() {
    return http.get("/auth");
  }

  logout() {
    return http.get("/auth/logout");
  }

  register(data) {
    return http.post("/auth", data);
  }

}

export default new AuthService();