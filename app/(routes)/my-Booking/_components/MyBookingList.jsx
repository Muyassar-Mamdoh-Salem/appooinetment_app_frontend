import React, { useState, useEffect } from "react"
import Image from "next/image"
import CancelAppoinetment from "./CancelAppoinetment"

function MyBookingList({ bookingList: initialList, past }) {
  const [bookings, setBookings] = useState(initialList || [])

  // لو حصل تحديث من الأب
  useEffect(() => {
    setBookings(initialList || [])
  }, [initialList])

  // دالة تمسح العنصر اللي اتلغى
  const handleDeleted = (deletedId) => {
    setBookings((prev) => prev.filter((item) => item.documentId !== deletedId))
  }

  return (
    <div className="grid gap-4 mt-4">
      {bookings.map((item, index) => {
        const doctor = item?.doctor

        const imageUrl = doctor?.image?.[0]?.url
          ? `https://appointments.siliconsquire.com${doctor.image[0].url}`
          : "/fallback.png"

        return (
          <div
            key={item.id || index}
            className="flex items-center gap-4 border p-4 rounded-lg shadow-sm 
             transition-all duration-300 ease-in-out
             hover:shadow-lg hover:scale-[1.02] hover:border-lime-500 hover:bg-gray-50"
          >
            {/* صورة الدكتور */}
            <Image
              src={imageUrl}
              width={120}
              height={120}
              alt={doctor?.name || "Doctor"}
              className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
              unoptimized
            />

            {/* بيانات الحجز */}
            <div className="flex flex-col w-full">
              <h3 className="font-bold grid sm:grid-cols-1  justify-between items-center">
                {doctor?.name || "Unknown Doctor"}
                {!past && (
                  <CancelAppoinetment
                    bookingId={item.documentId}
                    onDeleted={handleDeleted} // ✅ تحديث محلي
                  />
                )}
              </h3>
              <h3 className="text-gray-700">📞 {doctor?.phone}</h3>
              <p className="text-sm text-gray-600">{doctor?.about}</p>
              <p className="text-sm text-gray-500">
                📅 {new Date(item.date).toLocaleDateString("ar-EG")} - 🕒 {item.time}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MyBookingList
