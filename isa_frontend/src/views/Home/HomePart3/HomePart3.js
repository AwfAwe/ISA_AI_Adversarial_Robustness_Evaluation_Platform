import "./HomePart3Style.css"

export default function HomePart3(){
    const a =require("../../../assets/Home/paper2.png")
    return (
        <>
            <div id="homepart3">
                <div className="left">
                    <div className="text1">我们是谁，我们的产品是什么？</div>
                    <div className="text2">我们是浙江大学的本科生团队，我们可以帮助您测试人工智能模型的鲁棒性。我们的测试方法涵盖了传统的人工智能攻击方法以及我们自主研发的新型<span style={{fontWeight:600, fontSize:"25px"}}>BounceAttack</span>攻击方法。</div>
                </div>
                <div className="right">
                    <img src={a}  alt="pic"></img>
                </div>
            </div>
        </>
    );
}