import React from "react";
import Image from "next/image";
import Link from "next/link";

function DoctorList({ doctorsList = [], hidden = "Popular Doctors", isLoading }) {
  return (
    <div>
      <h2 className="font-bold text-xl text-lime-600 mb-4">{hidden}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {isLoading ? (
          // 🟢 حالة التحميل (سكلتون)
          Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse border rounded-lg p-3 shadow-sm bg-white"
            >
              <div className="w-full h-[200px] bg-gray-200 rounded-md"></div>
              <div className="space-y-3 mt-3">
                <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
                <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))
        ) : doctorsList.length > 0 ? (
          // 🟢 عرض البيانات
          doctorsList.map((doctor) => (
            <Link href={`/details/${doctor?.documentId}`} key={doctor.documentId}>
              <div className="border-none rounded-lg p-3 shadow-sm bg-white">
                {doctor?.image?.[0]?.url && (
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={`https://appointments.siliconsquire.com${doctor.image[0].url}`}
                      alt={doctor.name || "Doctor"}
                      fill
                      className="object-contain rounded-md"
                      unoptimized
                    />
                  </div>
                )}
                <div className="items-baseline flex flex-col space-y-2">
                  <h2 className="text-lg text-lime-600 font-semibold bg-lime-200 rounded-full mt-3 p-2">
                    {doctor?.category?.name}
                  </h2>

                  <h2>
                    <span className="text-lime-600">Name: </span>
                    {doctor?.name}
                  </h2>
                  <h2>
                    <span className="text-sm text-lime-500">
                      Years of Experience:{" "}
                    </span>
                    {doctor?.years_of_experience}
                  </h2>
                  <h2>
                    <span className="text-lime-600">Address: </span>
                    {doctor?.address}
                  </h2>
                  <h2>
                    <span className="text-sm text-lime-500">Phone: </span>
                    {doctor?.phone}
                  </h2>

                  <h2 className="border-[1px] p-3 border-lime-600 mt-5 cursor-pointer hover:bg-lime-500 hover:text-white transition-all ease-in-out">
                    Book Now
                  </h2>
                </div>
              </div>
            </Link>
          ))
        ) : (
          // 🟢 لو مفيش بيانات
          <p className="text-gray-500">No doctors found.</p>
        )}
      </div>
    </div>
  );
}

export default DoctorList;
