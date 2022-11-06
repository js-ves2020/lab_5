import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/home/home";
import Custom from "./components/custom/custom";
import Latest from "./components/latest_courses/latest";
import Contact from "./components/contact_us/contact";
const App =()=>{
return(
  <>
  <Navbar/>
  <Home/>
  <Custom/>
  <Latest/>
  <Contact/>
  </>
)
}
export default App