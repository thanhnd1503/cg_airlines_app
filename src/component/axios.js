import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5500', // Đường dẫn cơ sở mới
  });

