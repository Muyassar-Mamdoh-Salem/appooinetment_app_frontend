"use client"
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyBookingList from "./_components/MyBookingList";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"; 
import Api from "@/app/_utils/Api"; 

function MyBooking() {
    const { user } = useKindeBrowserClient();
    const [upcoming, setUpcoming] = useState([]);
    const [past, setPast] = useState([]);
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        if (user?.email) {
            Api.myBookingList(user.email).then((resp) => {
                console.log("my booking", resp.data.data);
                setBookingList(resp.data.data);

                const now = new Date();
                const upcomingBookings = resp.data.data.filter(
                    (b) => new Date(b.date) >= now
                );
                const pastBookings = resp.data.data.filter(
                    (b) => new Date(b.date) < now
                );

                setUpcoming(upcomingBookings);
                setPast(pastBookings);
            });
        }
    }, [user]);

    // فلترة حسب النوع
    const filterBookingList = (type) => {
        const now = new Date();
        return bookingList.filter((item) =>
            type === "UpComing"
                ? new Date(item.date) >= now
                : new Date(item.date) < now
        );
    };

    return (
        <div className="px-4 md:px-10">
            <h2 className="font-bold text-2xl">My Booking</h2>
            <Tabs defaultValue="UpComing" className="w-full mt-8">
                <TabsList className="w-full justify-start">
                    <TabsTrigger value="UpComing">UpComing</TabsTrigger>
                    <TabsTrigger value="Past">Past</TabsTrigger>
                </TabsList>

                <TabsContent value="UpComing">  
                    <MyBookingList updateAppointmentList={()=>{upcomingBookings()}} past={false} bookingList={filterBookingList("UpComing")} />
                </TabsContent>

                <TabsContent value="Past">
                    <MyBookingList updateAppointmentList={()=>{upcomingBookings()}} past={true} bookingList={filterBookingList("Past")} />
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default MyBooking;
