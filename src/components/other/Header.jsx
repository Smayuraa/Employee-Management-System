import React, { useState } from "react";
const Header=(props)=>{

  // const[username,setUsername]=useState('')
  // if(!data)
  // {
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser=()=>{
    localStorage.setItem('logOutUser','')
    props.changeUser('')
    //window.location.reload()
  }

  return(
    <>
    <div className="flex items-end justify-between">
        <h1 className="text-white text-2xl font-medium">Hello <br/> <span className=" text-3xl font-semibold"> {props.data ? `${props.data.firstName} 👋` : 'admin 👋'} </span></h1>
        <button onClick={logOutUser} className="text-white text-lg font-medium bg-red-600 rounded-sm px-5 py-2"> Log Out</button>
    </div>
    </>
  )
}
export default Header