import "./HomePart1Style.css"
import { BrowserRouter as Router, Route, Link ,Routes, useNavigate} from "react-router-dom";  
export default function HomePart1(){

    return (
        <div id="homepart1">
            <div className="left">
                <div className="text1">我们为您提供测试人工智能模型的鲁棒性服务</div>
                <div className="text2">我们的检测方法具有创新性、全面性和直观性</div>
                <div className="button"><Link to="/test">开始测试模型 -></Link></div>
            </div>
            <div className="midlogo">
                
            </div>
            <div className="leftcircle"></div>
            <div className="rightcircle"></div>
            <div className="leftpic"></div>
            <div className="rightpic"></div>
            <div className="right">
            </div>
        </div>
    );
}