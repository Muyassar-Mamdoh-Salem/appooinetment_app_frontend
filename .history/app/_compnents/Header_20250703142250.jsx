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
        <div className='flex justify-between items-center'>

     
<Image src={"/assets/image/logo.png"} width={100} height={100} />
<ul>
    {menu.map((item,index)=>(
    <li>{item.name}</li>
    ))}
</ul>
   </div>
    </div>
  )
}

export default Header