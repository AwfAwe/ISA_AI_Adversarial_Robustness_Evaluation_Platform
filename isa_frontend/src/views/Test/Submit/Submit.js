import "./SubmitStyle.css"
import React, { useState } from "react";
import Process from "../Process/Process";
import axios from "axios";

export default function Submit(){
      // 使用 useEffect 获取数据
    // useEffect(() => {
    //   axios.get('/api/data')
    //     .then(response => {
    //       setData(response.data);
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // }, []);

    const [selectedFile1, setSelectedFile1] = useState(null);
    function handleFileInputChange1(event) {
      setSelectedFile1(event.target.files[0]);
    }

    const [selectedFile2, setSelectedFile2] = useState(null);
    function handleFileInputChange2(event) {
      setSelectedFile2(event.target.files[0]);
    }
    
    const [selectedFile3, setSelectedFile3] = useState(null);
    function handleFileInputChange3(event) {
      setSelectedFile3(event.target.files[0]);
    }
    const [showPopup, setShowPopup] = useState(false);
    function handleShowPopup(item) {
      setShowPopup(item);
    }


    const baseURL = 'http://localhost:3000';
    React.useEffect(() => {
      axios.get(`${baseURL}/api/model`).then((response) => {
        setSelectedFile1(response.data);
      });
    }, []);


    function handleSubmit1(){
      axios
      .post(baseURL,  selectedFile1)
      .then((response) => {
        setPost(response.data);
      });
    }
    React.useEffect(() => {
      axios.get(`${baseURL}/api/model`).then((response) => {
        setSelectedFile2(response.data);
      });
    }, []);


    function handleSubmit2(){
      axios
      .post(baseURL,  selectedFile2)
      .then((response) => {
        setPost(response.data);
      });
    }
    React.useEffect(() => {
      axios.get(`${baseURL}/api/image`).then((response) => {
        setSelectedFile3(response.data);
      });
    }, []);


    function handleSubmit3(){
      axios
      .post(baseURL,  selectedFile3)
      .then((response) => {
        setPost(response.data);
      });
    }
    
    return (
        <>
            <div id="submit">
                <div className="button1">
                    {/* <span>Submit your Model</span> */}
                    <label htmlFor="file-upload1" className="span1">提交模型</label>
                    <input id="file-upload1" type="file" onChange={handleFileInputChange1} onClick={handleSubmit1} style={{display:"none"}}/>
                </div>
                <div className="button2">
                    {/* <span>Model and picture</span> */}
                    <label htmlFor="file-upload2" className="span2">提交模型 & </label>
                    <label htmlFor="file-upload3" className="span3">图像</label>
                    <input id="file-upload2" type="file" onChange={handleFileInputChange2} onClick={handleSubmit2} style={{display:"none"}} />
                    {/* <span> & </span> */}
                    <input id="file-upload3" type="file" onChange={handleFileInputChange3} onClick={handleSubmit3} style={{display:"none"}}/>
                </div>
                <div className="button3">
                  <span onClick={()=> setShowPopup(true)}>运行</span>
                </div>
                <div className="popup">
                    {showPopup && (<Process onshowPopup={handleShowPopup}/>)}
                </div>
            </div>
        </>
    );
}