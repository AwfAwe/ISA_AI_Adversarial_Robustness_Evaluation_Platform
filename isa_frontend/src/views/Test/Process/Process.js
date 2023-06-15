import Change from "./Change/Change";
import Form from "./Form/Form";
import "./ProcessStyle.css"
import Radar from "./Radar/Radar";
import React, { useState, useEffect } from 'react';

export default function Process(props){
    const [showComponent, setShowComponent] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
          setShowComponent(true);
        }, 4000);
    
        return () => {
          clearTimeout(timer);
        };
      }, []);
    function handleClick(){
        const tmp = false;
        props.onshowPopup(tmp);
    }
    return (
        <>
            <div id = "process">
                <svg 
                    onClick={handleClick}
                    t="1685956210773" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2368" width="30" height="30"><path d="M952.311261 921.328619 542.892591 510.919389 950.154131 102.671381c8.53028-8.55177 8.53028-22.416546 0-30.967292-8.532327-8.55177-22.360264-8.55177-30.892591 0l-407.262564 408.248008L104.737436 71.704089c-8.53028-8.55177-22.36231-8.55177-30.892591 0-8.529257 8.55177-8.529257 22.416546 0 30.967292l407.262564 408.248008L71.687716 921.328619c-8.529257 8.55177-8.529257 22.416546 0 30.967292 4.26514 4.27435 9.856485 6.41306 15.446807 6.41306 5.590322 0 11.181667-2.13871 15.446807-6.41306l409.41867-410.409231 409.41867 410.409231c4.266164 4.27435 9.855462 6.41306 15.446807 6.41306 5.591345 0 11.17962-2.13871 15.446807-6.41306C960.841541 943.745165 960.841541 929.879366 952.311261 921.328619z" fill="#272636" p-id="2369"></path></svg>
                <Change />
                {/* {showComponent && <Form />} */}
                {showComponent && <Radar />}
            </div>
        </>
    );
}