import Image from "next/image";

// shad cn
import { Button } from "@/components/ui/button"
npm dlx shadcn@latest add input
// component 
import Hero from "./_compnents/Hero";
import CategorySearch from "./_compnents/CategorySearch";
export default function Home() {
  return (
    <div className="">
<Hero/>
      <CategorySearch/>
    </div>
  );
}
