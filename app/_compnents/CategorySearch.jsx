"use client"

import React, { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Api from "../_utils/Api"
import Image from "next/image"
import Link from "next/link"

function CategorySearch() {
  const [categoryList, setCategoryList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getCategoryList()
  }, [])

  const getCategoryList = async () => {
    try {
      setLoading(true)
      setError(null)

      // إذا كان الـ API يحتاج توكن، أضف Authorization
      const resp = await Api.getCategory({
        headers: {
          // Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      })

      setCategoryList(resp.data.data || [])
      console.log("Categories:", resp.data.data)
    } catch (err) {
      console.error("Error fetching categories:", err)
      setError("Failed to load categories. Please check API permissions.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mb-10 flex flex-col items-center">
      <h2 className="font-bold text-4xl mb-7">
        <span className="text-lime-600">Search</span> Categories
      </h2>

      <div className="flex w-full max-w-sm items-center mb-6">
        <Input type="email" placeholder="Email" />
        <Button className="bg-lime-600" type="submit">Subscribe</Button>
      </div>

      {loading && <p>Loading categories...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8">
        {categoryList.length > 0 ? (
          categoryList.map((cat, index) => {
            const name = cat.name?.trim()
            const iconUrl = cat.icon?.[0]?.url

            return (
              <Link
                href={`/search/${name}`}
                key={cat.id || index}
                className="text-center p-3 bg-lime-200 m-2 rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer"
              >
                <p className="m-2 text-gray-800">{name}</p>
                {iconUrl && (
                  <Image
                    src={iconUrl.startsWith("http") ? iconUrl : `http://localhost:1337${iconUrl}`}
                    width={150}
                    height={150}
                    alt={name}
                    unoptimized
                    className="h-auto object-contain mx-auto"
                  
                  />
                  
                )}
                
              </Link>
            )
          })
        ) : (
          !loading && <p>No categories available.</p>
        )}
      </div>
    </div>
  )
}

export default CategorySearch
