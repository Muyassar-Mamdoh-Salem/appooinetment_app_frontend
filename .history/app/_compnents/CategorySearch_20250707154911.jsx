"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Api from "../_utils/Api";
import Image from "next/image";

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
        <Button type="submit" className="text-xl">Subscribe</Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {Categories.map((cat, index) => (
          <div key={cat.id || index} className="text-center">
            {cat?.attributes?.icon?.data?.attributes?.url && (
              <Image
                src={cat.attributes.icon.data.attributes.url}
                alt={cat.attributes.name}
                width={100}
                height={100}
                className="mx-auto"
              />
            )}
            <p className="mt-2 text-gray-700">{cat.attributes.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySearch;
