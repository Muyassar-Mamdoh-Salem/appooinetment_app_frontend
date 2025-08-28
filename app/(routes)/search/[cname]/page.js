"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Api from "../../../_utils/Api";

import DoctorList from "../../../_compnents/DoctorList";

export default function SearchCategoryPage() {
  const [doctorsList, setDoctorsList] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (!params?.cname) return;

    Api.getDoctors().then((res) => {
      const filteredDoctors = res.data.data.filter(
        (doc) =>
          doc.category?.name?.toLowerCase() === params.cname.toLowerCase()
      );
      setDoctorsList(filteredDoctors);
    });
  }, [params]);

  return (
    <div>
      <DoctorList doctorsList={doctorsList} hidden={params?.cname} />
    </div>
  );
}
