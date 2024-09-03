import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import Course from "../components/Course";


function Courses() {
return (<>
    <Navbar/>
    <div className="min-h-screen">
        <Course/>
    </div>
    
    <Footer/>
</>
)
}

export default Courses;