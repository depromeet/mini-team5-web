import axios from "axios";

class HttpConnector {
  constructor() {
    this.baseURL = "https://depromeet-mini5-api.herokuapp.com";
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });
  }

  async login({ nickname }) {
    try {
      await this.axiosInstance.post("/login", {
        nickname: nickname
      }, {
        headers: { "Content-Type": "application/json" }
      });

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async getKeywords() {
    try {
      const res = await this.axiosInstance.get("/rank/naver");
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getComments(topic) {
    try {
      const response = await HttpConnector.get(`/board/${topic}/list`);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getComments({ keyword }) {
    try {
      const res = await this.axiosInstance.get(`/board/${keyword}/list`);
      return res.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

export default new HttpConnector();