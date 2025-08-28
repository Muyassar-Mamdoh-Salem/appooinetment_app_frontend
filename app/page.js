"use client"; // 👈 أول سطر
import React, { useEffect, useState } from "react";
import Api from "./_utils/Api";
import Hero from "./_compnents/Hero";
import CategorySearch from "./_compnents/CategorySearch";
import DoctorList from "./_compnents/DoctorList";
import "react-day-picker/dist/style.css";


export default function Home() {
  const [doctorsList, setDoctorsList] = useState([]);

  useEffect(() => {
    Api.getDoctors().then((res) => {
      setDoctorsList(res.data.data);
      console.log("doctors", res.data.data);
    });
  }, []);

  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorList doctorsList={doctorsList} />
    </div>
  );
}
