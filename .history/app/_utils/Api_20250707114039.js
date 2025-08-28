import axios from "axios";

const axiosGlobal = axios.create({
  baseURL: "http://localhost:1337/api", // تأكد من تشغيل Strapi على هذا الرابط
});

const getCategrory = () => axiosGlobal.get("/categories?populate=*");

export default {
  getCategrory,
};
