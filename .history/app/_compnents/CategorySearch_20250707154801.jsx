"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Api from "../_utils/Api";
import Image from "next/image";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Renders a category search component that fetches and displays a list of categories.
 * 
 * This component uses the `useEffect` hook to make an API call to fetch categories
 * and stores them in local state. It displays a search interface with an input field
 * for email subscription and a list of category images.
 *
 * @component
 */

/*******  be91c6f1-3834-47d3-8f3a-d1ee6c3742b2  *******/
function CategorySearch() {
  const [Categories, setCategories] = useState([]);

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

   {CategoryList.map((cat,index)=>{

<div>
<Image src="cat?.icon[]" />
</div>
   })}
      
    </div>
  );
}

export default CategorySearch;
