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
<Image src={"assets/image\logo.png"}/>
    </div>
  )
}

export default Header