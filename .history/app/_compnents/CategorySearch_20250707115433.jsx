"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Api from "../_utils/Api";

function CategorySearch() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Api.getCategrory()
      .then((resp) => {
        console.log("✅ Response:", resp.data);
        setCategories(resp.data.data || []);
      })
      .catch((err) => {
        console.error("❌ Error:", err);
      });
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-4 place-items-center">
      <h2 className="font-bold text-3xl text-gray-800">
        <span className="text-lime-600">Search</span> Categories
      </h2>
      <div className="flex place-items-center max-w-sm gap-4">
        <Input type="email" placeholder="Enter your email" className="flex-1" />
        <Button type="submit" className={"text-xl"}>Subscribe</Button>
      </div>

   {categoryList.map((cat,index)=>{

<div> 
  
  <div/>
   })}
      
    </div>
  );
}

export default CategorySearch;
