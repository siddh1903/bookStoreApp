import Home from "./components/Home/Home";
import {Routes, Route} from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import Contactus from "../src/Contact/Contactus";

function App() {
    return(<>
    {/* <Home/>
    <Course/> */}
    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contactus" element={<Contactus/>}/>
    </Routes>
    </>
    );
}

export default App;
