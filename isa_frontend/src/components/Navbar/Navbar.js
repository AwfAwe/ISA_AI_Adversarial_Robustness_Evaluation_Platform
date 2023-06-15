import "./NavbarStyle.css"
import { BrowserRouter as Router, Route, Link ,Routes, useNavigate} from "react-router-dom";  
export default function Navbar(){

    return (
        <>
            <div id="navbar">
                <div className="signal"> A&D</div>
                <ul className="list">
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/test">测试</Link></li>
                    <li><Link to="/about">关于</Link></li>
                    <li><Link to="/team">团队</Link></li>
                </ul>
                <div className="button"><Link to="/test">开始探索</Link></div>
            </div>
        </>
    );
}