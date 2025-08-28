"use client";

import React, { useEffect, useState } from "react";
import { use } from "react";
import Api from "../../../_utils/Api";
import DoctorDetails from "../_component/DoctorDetails";
import Doctoruggestions from "../_component/Doctoruggestions";

function Details(props) {
  const { id } = use(props.params);
  const [doctor, setDoctor] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  // جلب دكتور حسب ID
  const getDoctorById = async () => {
    try {
      const resp = await Api.getDoctorById(id);
      setDoctor(resp.data.data);
    } catch (err) {
      console.error("خطأ في جلب بيانات الدكتور:", err);
    }
  };

  // جلب قائمة أطباء للاقتراحات
  const getSuggestions = async () => {
    try {
      const resp = await Api.getDoctors();
      setSuggestions(resp.data.data);
    } catch (err) {
      console.error("خطأ في جلب الاقتراحات:", err);
    }
  };

  useEffect(() => {
    getDoctorById();
    getSuggestions();
  }, [id]);

  return (
    <div className="p-5  grid-cols-1">
      <h2 className="text-[22px] font-bold mb-5">Details</h2>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
        <div className="col-span-3">
          {doctor && <DoctorDetails doctor={doctor} />}
        </div>

        <div>
          <Doctoruggestions doctors={suggestions} />
        </div>
      </div>
    </div>
  );
}

export default Details;
