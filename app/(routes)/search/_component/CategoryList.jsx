"use client";

import React, { useEffect, useState } from "react";
import Api from "../../../_utils/Api";
import Image from "next/image";
import Link from "next/link";

function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    try {
      const resp = await Api.getCategory();
      setCategoryList(resp.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div className="grid gap-4 mt-5">
      {Array.isArray(categoryList) &&
        categoryList.map((cat) => (
          <Link
            key={cat.id}
            href={`/search/${encodeURIComponent(cat.name)}`}
            className="flex items-center gap-3 p-4 hover:bg-lime-600 rounded transition-colors"
          >
            {cat.icon?.[0]?.url ? (
              <Image
                src={`http://localhost:1337${cat.icon[0].url}`}
                width={40}
                height={40}
                alt={cat.name}
                unoptimized
                className="object-contain rounded"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-300 rounded" />
            )}
            <span className="text-sm font-medium">{cat.name}</span>
          </Link>
        ))}
    </div>
  );
}

export default CategoryList;
