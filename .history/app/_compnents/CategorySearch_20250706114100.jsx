import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function CategorySearch() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="font-bold text-3xl text-gray-800"> <span className='text-lime-600'>Search</span> Categories</h2>
      <div className="flex items-center max-w-sm  gap-4">
        <Input type="email" placeholder="Enter your email" className="flex-1" />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  );
}

export default CategorySearch;
