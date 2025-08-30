import axios from "axios";

// ✅ نحدد الـ baseURL الافتراضي
const BASE_URL = "http://localhost:1337/api";
const FALLBACK_URL = "http://185.183.182.117:23456/api";

// ✅ إنشاء Axios instance
const axiosGlobal = axios.create({
  baseURL: BASE_URL,
});

// ✅ Interceptor لتجربة fallback لو حصل error
axiosGlobal.interceptors.response.use(
  response => response, // لو response طبيعي، نرجعه
  async error => {
    // لو السيرفر الأساسي مش شغال
    if (error.code === "ERR_NETWORK" || error.response?.status >= 500) {
      // نعمل request مرة تانية للـ fallback URL
      return axios({
        ...error.config,
        baseURL: FALLBACK_URL,
      });
    }
    return Promise.reject(error); // لو مشكلة تانية، نرميها
  }
);

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
 * ✅ حذف حجز بالـ id
 */
const deleteBookingById = (id) => axiosGlobal.delete("/appoinetments/" + id);

/**
 * ✅ حذف حجز بالـ documentId
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
