import "./RadarStyle.css";
import * as echarts from 'echarts';
import { useRef ,useEffect, useState} from "react";
export default function Radar(){
    const chartRef = useRef(null);
    var mychart = [];
    const option = {
        title: {
          // text: 'Basic Radar Chart'
        },
        legend: {
          // data: ['Allocated Budget', 'Actual Spending']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            // { name: 'HSJA_L2', max: 35000 },
            // { name: 'Bounce_L2', max: 35000 },
            // { name: 'Sign-OPT_L2', max: 35000 },
            // { name: 'RamBo_L2', max: 35000 },
            // { name: 'Rays_L2', max: 35000 },
            // { name: 'SurFree_L2', max: 35000 },
            // { name: 'AHA_L2', max: 35000 },
            
            { name: 'HSJA', max: 35000 },
            { name: 'Bounce', max: 35000 },
            { name: 'Sign-OPT', max: 35000 },
            { name: 'RamBo', max: 35000 },
            { name: 'Rays', max: 35000 },
            { name: 'SurFree', max: 35000 },
            { name: 'AHA', max: 35000 },
          ]
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              // {
              //   value: [15000, 35000, 20000, 30000, 30000, 18000, 12000],
              //   // name: 'Allocated Budget'
              // },
              {
                value: [17000, 34000, 16000, 26000, 18000, 20000, 28000],
                // name: 'Actual Spending'
              }
            ]
          }
        ]
      };

      useEffect(()=>{
        mychart = echarts.init(chartRef.current);
        mychart.setOption(option);
      },[]);
    return(
        <div id="radar">
            <div ref={chartRef} style={{ width: '70%', height: "100%" }}></div>
        </div>
    );
}
