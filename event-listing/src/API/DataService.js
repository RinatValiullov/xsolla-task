import axios from "axios";

class DataService {
  static async getData() {
    const response = await axios.get(
      "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json"
    );
    return response.data;
  }
}

export { DataService };
