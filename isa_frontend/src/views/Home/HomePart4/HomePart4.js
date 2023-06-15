import HomeCard from "../../../components/HomeCard/HomeCard";
import "./HomePart4Style.css"
export default function HomePart4(){

    return (
        <div id="homepart4">
            <div className="upper"><span>What is the process for testing the robustness of an AI model?</span></div>
            <div className="mid">What can you gain through our platform?</div>
            <div className="lower">
                <HomeCard />
            </div>
        </div>
    );
}