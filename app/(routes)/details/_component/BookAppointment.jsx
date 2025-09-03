"use client"

import React, { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { toast } from "sonner"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import Api from "@/app/_utils/Api"

const BookAppointment = ({ doctor }) => {
  const [date, setDate] = useState() // ✅ يبدأ فاضي
  const [timeSlot, setTimeSlot] = useState([])
  const [selectedTime, setSelectedTime] = useState()
  const { user } = useKindeBrowserClient()

  useEffect(() => {
    getTimeSlots()
  }, [])

  // ✅ منع الأيام الماضية
  const pastDay = (day) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return day < today
  }

  const getTimeSlots = () => {
    const timeList = []
    for (let i = 10; i <= 12; i++) {
      timeList.push({ time: `${i}:00 AM` })
      timeList.push({ time: `${i}:30 AM` })
    }
    for (let i = 1; i <= 5; i++) {
      timeList.push({ time: `${i}:00 PM` })
      timeList.push({ time: `${i}:30 PM` })
    }
    setTimeSlot(timeList)
  }

  const booking = async () => {
    if (!user) {
      toast.error("Please sign in first")
      return
    }
    if (!selectedTime || !date) {
      toast.error("Please select date and time")
      return
    }

    const data = {
      userName: `${user.given_name} ${user.family_name}`,
      email: user.email,
      date: date.toISOString(),
      time: selectedTime,
      doctor: doctor.id,
    }

    try {
      const resp = await Api.bookAppointment(data)
      if (resp.data) {
        toast.success("Appointment Booked Successfully 🎉")
        setSelectedTime(null)
      }
    } catch (error) {
      console.error("Booking Error:", error)
      toast.error("Something went wrong while booking")
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white rounded-full">Book Appointment</Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg p-4">
  <DialogHeader>
    <DialogTitle>Book Appointment</DialogTitle>
  </DialogHeader>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={pastDay}
      className="rounded-lg border"
      classNames={{
        day: "h-10 w-10 text-center rounded-full flex items-center justify-center",
        day_selected: "bg-black text-white rounded-full",
        day_today: "border border-lime-500 font-bold rounded-full",
        day_disabled: "opacity-50 cursor-not-allowed",
      }}
    />

    <div className="grid grid-cols-3 gap-2">
      {timeSlot.map((item) => (
        <button
          key={item.time}
          onClick={() => setSelectedTime(item.time)}
          className={`border p-3 rounded-full text-center cursor-pointer transition-colors duration-300 ease-in-out hover:bg-lime-600 hover:text-white hover:shadow-md 
          ${item.time === selectedTime ? "bg-lime-300 text-black" : ""}`}
        >
          {item.time}
        </button>
      ))}
    </div>
  </div>

  {/* ✅ زرار الحجز ثابت على الموبايل */}
  <div className="mt-6 flex justify-center sm:static sm:mt-6 sticky bottom-0 bg-white p-2">
    <Button onClick={booking} disabled={!date || !selectedTime}>
      Book Appointment
    </Button>
  </div>
</DialogContent>

    </Dialog>
  )
}

export default BookAppointment
