import React from "react"
import axios from "axios"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

function CancelAppoinetment({ bookingId, onDeleted }) {
  const cancelClick = async () => {
    try {
      await axios.delete(`http://localhost:1337/api/appoinetments/${bookingId}`)

      toast.success("Appointment has been canceled ✅")

      // ندي إشعار للأب (MyBookingList) إنه يحذف الحجز من الـ state
      if (onDeleted) onDeleted(bookingId)
    } catch (error) {
      console.error("❌ Error deleting booking:", error)
      toast.error("Something went wrong, please try again")
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button  >
          Cancel Appointment
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this appointment.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
          <AlertDialogAction onClick={cancelClick}>
            Yes, Cancel
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default CancelAppoinetment
