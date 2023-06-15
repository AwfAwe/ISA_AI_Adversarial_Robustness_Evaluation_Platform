import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"
import Home from "../Home/Home";
import Report from "../Report/Report";
import Test from "../Test/Test";
export default function PageController(){

    return(
        <>
            <Routes>
                <Route path="" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/test" element={<Test />}/>                   
                <Route path="/report" element={<Report />}/>                   
            </Routes>
        </>
    )
}