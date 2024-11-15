import { Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Login Successful.")
      }
      localStorage.setItem("Users",JSON.stringify(res.data));
    }).catch((err)=>{
      if(err.response){
        console.log(err);
        toast.error("error:" + err.response.data.message)
      }
    })
  }

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>
              
              <h3 className="font-bold text-lg">Login</h3>

              <div className="mt-4">
                <span className="font-semibold">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-1 mt-2 w-80 border rounded-md outline-none hover:bg-slate-100"
                  {...register("email", { required: "Email is required" })}
                />
                <br/>
                {errors.email && (
                  <span className="text-sm text-red-500">{errors.email.message}</span>
                )}
              </div>
              <br />

              <div className="mt-4">
                <span className="font-semibold">Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="px-3 py-1 mt-2 w-80 border rounded-md outline-none hover:bg-slate-100"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">{errors.password.message}</span>
                )}
              </div>
              <br />

              <div className="flex justify-around mt-5">
                <button
                  type="submit" 
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Login
                </button>
                <p>
                  Not Registered?
                  {""}
                  <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                    Signup
                  </Link>
                  {""}
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}
export default Login
