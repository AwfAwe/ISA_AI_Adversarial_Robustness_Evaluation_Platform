import React, { useEffect, useState } from 'react';
import Form from '../../Test/Process/Form/Form';
import Radar from '../../Test/Process/Radar/Radar';
import axios from "axios";
import "./ReportPostStyle.css"

export default function ReportPost(){
  const baseURL = 'http://localhost:3000';
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
    return(
      <>
        <div id="reportpost">
          <div className='part1'>
            <h1 className='title'>AI模型鲁棒性测试报告</h1>
              <span>测试时间：2023/6/5 13:00</span>
          </div>
          <div className='text1'>
            经过测试分析，您的AI模型鲁棒性评测结果如下：
          </div>
          <div className='img1'>
            <h2>L2范数下折线图展示</h2> 
            <Form data={post.formdata1}/> 
          </div>
          <div className='img4'>
            <h2>L∞范数下折线图展示</h2> 
            <Form data={post.formdata2}/> 
          </div>
          <div className='img2'>
            <h2>L2范数下雷达图展示</h2> 
            <Radar data={post.radardata1}/>
          </div>
          <div className='img3'>
            <h2>L∞范数下雷达图展示展示</h2> 
            <Radar data={post.radardata2}/> 
          </div>
          <div className='conclusion'>
              <span>综合以上实验数据，您的AI模型被检测为鲁棒性良好，需要再进行优化提高！</span>
          </div>
          <div className='none'></div>
        </div>  
      </>
    );

}
  


