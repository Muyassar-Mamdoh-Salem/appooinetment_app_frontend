import Image from "next/image";

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
