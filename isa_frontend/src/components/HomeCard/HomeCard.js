import "./HomeCardStyle.css"
import { useState, useEffect } from "react";
import {ReactComponent as security} from "../../assets/Home/HomeCard/安全.svg"
export default function HomeCard(){
    const [HomeCardInfo1, setHomeCardInfo1] = useState([
        {id:1, icon:require(''),  text: 'a', sign:'+'},
        {id:2, icon:require('../../assets/Home/HomeCard/折线图.svg'),  text: 'a', sign:'+'},
        {id:3, icon:require('../../assets/Home/HomeCard/雷达图.svg'),  text: 'a', sign:'+'}
    ]);
    useEffect(() => {
        const tmp = [...HomeCardInfo1];
        tmp[0].icon = security;
        setHomeCardInfo1(tmp);
      }, []);
    const [HomeCardInfo2, setHomeCardInfo2] = useState([
        {id:1, icon:require('../../assets/Home/HomeCard/上传.svg'),  text: 'a', sign:'+'},
        {id:2, icon:require('../../assets/Home/HomeCard/折线图.svg'),  text: 'a', sign:'+'},
        {id:3, icon:require('../../assets/Home/HomeCard/雷达图.svg'),  text: 'a', sign:'+'}
    ]);
    const listItems1 = HomeCardInfo1.map((item)=>{
        return(
            <li key={item.id}>
                <div className="icon">{item.icon}</div>
                <div className="text">{item.text}</div>
                <div className="sign">{item.sign}</div>
            </li>
        );
    });
    const listItems2 = HomeCardInfo2.map((item)=>{
        return(
            <li key={item.id}>
                <div className="icon" style={{backgroundImage:`url(${item.icon})`}}></div>
                <div className="text">{item.text}</div>
                <div className="sign">{item.sign}</div>
            </li>
        );
    });
    return (
        <>
            <div id="homecard">
                <div className="leftcard">
                    {listItems1}
                </div>
                <div className="rightcard">
                    {listItems2}
                </div>
            </div>
        </>
    );
}