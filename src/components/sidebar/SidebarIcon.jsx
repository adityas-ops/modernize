import React from 'react'

function SidebarIcon({name,icon,active}) {
  // const [active,setActive]=React.useState(false)
  // const handleClick =()=>{
  //   setActive(!active)
  // }
  return (
   <span  className={` mb-[2px] flex items-center justify-start py-[11px] rounded-[7px] px-[14px] text-[#2a3547] hover:text-white  bg-white hover:bg-[#5D87FF] ${active ? `active`:``} `}>
    <i class={`${icon} text-[21px]`}/>
    <p className='pl-[8px] font-[400] text-[14px] font-jakarta'>{name}</p>
   </span>
  )
}

export default SidebarIcon