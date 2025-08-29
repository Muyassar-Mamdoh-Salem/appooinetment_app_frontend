import React from "react"
import Image from "next/image"
import { GraduationCap, MapPin } from "lucide-react"
import BookAppointment from "./BookAppointment"

function DoctorDetails({ doctor }) {
  if (!doctor) return null // حماية إضافية

  const imageUrl = doctor?.image?.[0]?.url
    ? `http://localhost:1337${doctor.image[0].url}`
    : "/fallback.png" 

  return (
    <div className="border-[1px] p-5 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* صورة الدكتور */}
      <div>
        <Image
          src={imageUrl}
          width={600}
          height={600}
          alt={doctor?.name || "Doctor"}
          className="rounded-lg object-cover"
          unoptimized
        />
      </div>

      {/* معلومات الدكتور */}
      <div className="md:px-10 col-span-2 flex flex-col gap-4 items-baseline">
        <h2 className="font-bold text-2xl">{doctor?.name}</h2>

        <h2 className="flex gap-2 text-gray-500">
          <GraduationCap />
          <span>{doctor?.years_of_experience || "غير محدد"} سنوات خبرة</span>
        </h2>

        <h2 className="flex gap-2 text-gray-500">
          <MapPin />
          <span>{doctor?.address || "غير محدد"}</span>
        </h2>

<h2>phone: {doctor?.phone || "غير محدد"}</h2>
        <BookAppointment doctor={doctor} />

        <div>
          <h1 className="text-[25px] font-bold">About</h1>
          <p className="text-gray-500">
            {doctor?.about || "لا توجد معلومات متاحة"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DoctorDetails
