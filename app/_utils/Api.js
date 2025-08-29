import axios from "axios";

const axiosGlobal = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api"
});

export const getCategory = () =>
  axiosGlobal.get("/categories?fields[0]=name&populate[icon][fields][0]=url");

export const getDoctors = () => axiosGlobal.get("/doctors?populate=*");

export const getDoctorsByCategory = (category) =>
  axiosGlobal.get(
    "/doctors?populate=*&filters[category][name][$contains]=" + category
  );

export const getDoctorById = (documentId) =>
  axiosGlobal.get("/doctors/" + documentId + "?populate=*");

export const bookAppointment = (data) =>
  axiosGlobal.post("/appoinetments", { data });

export const myBookingList = (email) =>
  axiosGlobal.get(
    "/appoinetments?filters[email][$eq]=" +
      email +
      "&populate[doctor][populate]=image"
  );

export const deleteBookingById = (id) =>
  axiosGlobal.delete("/appoinetments/" + id);

export const deleteBookingByDocumentId = (documentId) =>
  axiosGlobal.delete("/appoinetments/document/" + documentId);

export default {
  getCategory,
  getDoctors,
  getDoctorsByCategory,
  getDoctorById,
  bookAppointment,
  myBookingList,
  deleteBookingById,
  deleteBookingByDocumentId
};
