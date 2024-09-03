// import React from 'react'
import Login from "./Login"
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className="flex h-screen items-center justify-center  ">
    <div className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" 
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
      onClick={()=> document.getElementById("my_modal_3").close()}>
        ✕
      </Link>
    <h3 className="font-bold text-lg">Signup</h3>
    <div className="mt-4 space-y-2">
      <span> Name</span>
      <br/>
      <input
      {...register("name", { required: true })} 
        type="text"
        placeholder="enter your name"
        className="w-80 px-3 py-1 border  rounded-md outline-none"/>
        <br/>
        {errors.email && <span className="text-sm text-red-500">This field is required</span>}
        <br/>
        <div className="mt-4"><span className="font-semibold">Email</span>
        <br/>
        <input {...register("email", { required: true })} 
        type="email" 
        placeholder="Enter your email" 
        className="px-3 py-1 mt-2 w-80 border rounded-md outline-none hover:bg-slate-100"/>
        <br/>
        {errors.email && <span className="text-sm text-red-500">This field is required</span>}
        </div>
    </div>
    <div className="mt-4">
        <span className="font-semibold">Password</span>
        <br/>
        <input {...register("password", { required: true })}  type="password" placeholder="Enter your Password" className="px-3 py-1 mt-2 w-80 border rounded-md outline-none hover:bg-slate-100" />
        <br/>
        {errors.password && <span className="text-sm text-red-500">This field is required</span>}
    </div>  
    <br/>
    <div className="flex justify-around mt-5">
        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup </button>
        <p className="text-md">
          Have Account?
          {" "}
          <button
            to="/Login"
            className="underline text-blue-500 cursor-pointer"
            onClick={()=>
              document.getElementById("my_modal_3").showModal()
            }
          >
          Login
          </button>
          
          {""} 
          <Login />
        </p>
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup