import axios from "axios";

// ✅ نحدد الـ baseURL بتاع Strapi
const axiosGlobal = axios.create({
  baseURL: "http://localhost:1337/api",
});

/**
 * ✅ نجلب التصنيفات
 */
const getCategory = () =>
  axiosGlobal.get("/categories?fields[0]=name&populate[icon][fields][0]=url");

/**
 * ✅ نجلب كل الأطباء
 */
const getDoctors = () => axiosGlobal.get("/doctors?populate=*");

/**
 * ✅ نجلب الأطباء حسب التصنيف
 */
const getDoctorsByCategory = (category) =>
  axiosGlobal.get(
    "/doctors?populate=*&filters[category][name][$contains]=" + category
  );

/**
 * ✅ نجلب دكتور معين بالـ ID
 */
const getDoctorById = (documentId) =>
  axiosGlobal.get("/doctors/" + documentId + "?populate=*");

/**
 * ✅ إضافة حجز
 */
const bookAppointment = (data) => axiosGlobal.post("/appoinetments", { data });

/**
 * ✅ عرض الحجوزات الخاصة بمستخدم معين عبر الإيميل
 */
const myBookingList = (email) =>
  axiosGlobal.get(
    "/appoinetments?filters[email][$eq]=" +
      email +
      "&populate[doctor][populate]=image"
  );

/**
 * ✅ حذف حجز بالـ id (المدعوم رسميًا من Strapi)
 */
const deleteBookingById = (id) => axiosGlobal.delete("/appoinetments/" + id);

/**
 * ✅ حذف حجز بالـ documentId (لو عامل Route مخصص في Strapi)
 * 🔥 لازم تكون ضايف Custom Endpoint في Strapi زي:
 * DELETE /appoinetments/document/:documentId
 */
const deleteBookingByDocumentId = (documentId) =>
  axiosGlobal.delete("/appoinetments/document/" + documentId);

export default {
  getCategory,
  getDoctors,
  getDoctorsByCategory,
  getDoctorById,
  bookAppointment,
  myBookingList,
  deleteBookingById,
  deleteBookingByDocumentId,
};
