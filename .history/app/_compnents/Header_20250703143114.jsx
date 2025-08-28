import React from 'react'
import Image from 'next/image'
function Header() {

    const menu =[
        {
            id:1,

name:"Home",
path:"/"
},
{
    id:2,
    name:"Explore",
    path:"/"
},{
    id:3,
    name:"contact us",
    path:"/"
}
    ]
  return (
    <div>Header
        <div className='flex items-center gap-10'>

     
<Image src={"/assets/image/logo.png"} width={100} height={100} alt="    " />

<ul>
    {menu.map((item,index)=>(
    <li key={item.id}>{item.name}</li>
    ))}
</ul>
   </div>

    </div>
  )
}

export default Header