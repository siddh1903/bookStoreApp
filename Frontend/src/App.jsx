import Home from "./components/Home/Home";
import {Routes, Route, Navigate} from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import Contactus from "../src/Contact/Contactus";
import {Toaster} from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
    const [authUser,setAuthUser] = useAuth();
    console.log(authUser);
    return(<>
    {/* <Home/>
    <Course/> */}
    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contactus" element={<Contactus/>}/>
    </Routes>
    <Toaster/>
    </>
    );
}

export default App;
