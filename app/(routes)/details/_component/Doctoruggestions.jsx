"use client";

import React, { useState, useEffect } from "react";
import Api from "@/app/_utils/Api";
import Link from "next/link";
import Image from "next/image";

function Doctoruggestions() {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctorsList();
  }, []);

  const getDoctorsList = () => {
    Api.getDoctors().then((resp) => {
      console.log("doctors", resp.data.data);
      setDoctorList(resp.data.data);
    });
  };

  if (!doctorList || doctorList.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-5">
        ⚠️ لا يوجد دكاترة لعرضهم
      </p>
    );
  }

  return (
    <div className="p-4 ">
      <h2 className="text-lg font-bold mb-4 text-lime-600">🩺 Suggesstions</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
        {doctorList.slice(0, 5).map((doctor) => {
          const imageUrl = doctor?.image?.[0]?.url
            ? `https://appointments.siliconsquire.com${doctor.image[0].url}`
            : "/fallback.png";

          return (
            <Link
              key={doctor.documentId}
              href={`/details/${doctor.documentId}`}
              className="sm:border-1 rounded-lg "
            >
              <div className="flex p-4 hover:shadow-md transition gap-4  ">
                <Image
                  src={imageUrl}
                  alt={doctor?.name || "Doctor"}
                  width={100}
                  height={100}
                  className=" object-cover"
                  unoptimized
                />
                <div className="flex flex-col justify-center  ">
                  <span className="text-lime-600 bg-lime-200 rounded-full p-1 text-[12px] font-semibold">
                    {doctor?.category?.name || "Uncategorized"}
                  </span>
                  <span className="mt-2 font-medium">{doctor?.name || "Unknown Doctor"}</span>
                  <span className="mt-1 text-sm text-gray-500">
                    {doctor?.years_of_experience
                      ? `${doctor.years_of_experience} years Experience`
                      : "Experience not specified"}
                  </span>
                  <span className="mt-1 text-xs text-gray-400">
                    {doctor?.address || "Address not specified"}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Doctoruggestions;
