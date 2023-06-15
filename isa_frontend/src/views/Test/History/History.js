import { useState } from "react";
import "./HistoryStyle.css"

export default function History(){
    const [historyData, setHistoryData] = useState([
        {id:1, number:'1', time:"2023-6-5", result:"详情"},
        {id:2, number:'2', time:"2023-6-5", result:"详情"},
        {id:3, number:'3', time:"2023-6-5", result:"详情"},
    ]);
    const listItems = historyData.map((item)=>{
        return (
            <li key={item.id}>
                <div className="number">{item.id}</div>
                <div className="time">{item.time}</div>
                <div className="result">{item.result}</div>
            </li>
        );
    });
    return (
        <>
            <div id="history">
                <li className="title">
                    <div className="number">项目编号</div>
                    <div className="time">提交时间</div>
                    <div className="result">查看结果</div>
                </li>
                {listItems}
            </div>
        </>
    );
}