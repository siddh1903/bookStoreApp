
import { useForm } from "react-hook-form"

function Contact() {
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
    <h3 className="font-bold text-4xl">Contact Us</h3>
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
        <span className="font-semibold">Message</span>
        <br/>
        <textarea {...register("message", { required: true })}  type="text" placeholder="Enter your message" className="px-3 py-7 mt-2 w-80 textarea textarea-bordered text-wrap border rounded-md outline-none hover:bg-slate-200" />
        <br/>
        {errors.message && <span className="text-sm text-red-500">This field is required</span>}
    </div>  
    <br/>
    <div className="flex justify-around mt-5">
        <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">Submit </button>
        </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Contact;