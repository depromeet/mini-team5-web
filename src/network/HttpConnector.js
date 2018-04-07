import axios from "axios";

class HttpConnector{
  constructor() {
    this.baseURL = "http://172.16.6.194:8080";
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });
  }

  async login({nickname}) {
    try {
      const response = await this.axiosInstance.post("/login", {
        nickname: nickname
      }, {
        headers: { "Content-Type": "application/json"}
      });
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

export default new HttpConnector();