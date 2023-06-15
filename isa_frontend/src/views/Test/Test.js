import Navbar from "../../components/Navbar/Navbar";
import History from "./History/History";
import Submit from "./Submit/Submit";
import "./TestStyle.css"

export default function Test(){

    return (
        <>
            <Navbar />
            <div id="test">
                <Submit />
                <History />
            </div>
        </>
    );
}