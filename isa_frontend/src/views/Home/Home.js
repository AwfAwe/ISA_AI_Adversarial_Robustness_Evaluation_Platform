import Navbar from "../../components/Navbar/Navbar";
import HomePart1 from "./HomePart1/HomePart1";
import HomePart2 from "./HomePart2/HomePart2";
import HomePart3 from "./HomePart3/HomePart3";
// import HomePart4 from "./HomePart4/HomePart4";
import "./HomeStyle.css"
export default function Home(){
    return (
        <>
            <Navbar />
            <div id="home">
                <HomePart1 />
                <HomePart2 />
                <HomePart3 />
                {/* <HomePart4 /> */}
            </div>
        
        </>
    );
}