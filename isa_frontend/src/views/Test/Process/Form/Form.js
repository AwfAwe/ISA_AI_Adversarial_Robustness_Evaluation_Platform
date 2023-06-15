import "./FormStyle.css"
import * as echarts from 'echarts';
import { useRef ,useEffect, useState} from "react";
import {file_store } from "../../../../storage/store"
export default function Form(){
    const chartRef = useRef(null);
    var mychart = [];
    const option={
        xAxis: {
            // type: 'category',
            name:'query_time',
            data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            // data: {x_data_show}
        },
        yAxis: {
            // type: 'value',
            name:'distance',
        },
        series: [
            {
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            // data: {y_data_show},
                type: 'line',
                smooth: true,
                showAllSymbol: true,
            }
        ],
        tooltip:{trigger:'item'},
    };
    useEffect(() => {
        mychart = echarts.init(chartRef.current);
        mychart.setOption(option);
      }, []);
      const x_data = [];
      const y_data = [];
      var x_data_show = [];
      var y_data_show = [];
      const lines = [];
    function handleFileChange(event) {
        // 获取用户选择的文件
        let file = event.target.files[0];
        // let file = {name: "3.csv",
        //             size: 1662,
        //             type: "text/csv"} 
        // 创建一个FileReader对象
        let reader = new FileReader();
        // 设置读取文件的编码格式
        reader.readAsText(file, 'utf8');
        reader.onload = () => {
            // 获取文件内容，是一个字符串
            let data = reader.result;
            // 按换行符分割字符串，返回一个数组
            let lines_tmp = data.split('\n');
            // 遍历每一行
            for (let line of lines_tmp) {
                // 按逗号分割每一行，返回一个数组
                console.log(typeof line)
                let values = line.split(',');
                // 去除values中第一个和第二个元素，返回一个新数组
                let filteredValues = values.slice(2);
                //   console.log(filteredValues);
                // 把新数组添加到lines数组中
                if(line !=1){
                    x_data.push(filteredValues.slice(0,1));
                    y_data.push(filteredValues.slice(1,2));
                }
                lines.push(filteredValues);
            }
            var json_x = JSON.stringify(x_data); // 将object转换为JSON字符串
            var array_x = JSON.parse(json_x); // 将JSON字符串解析为数组
            var result_x = array_x.map(function(sub) {
                return Number(sub[0]); // 将子数组中的第一个元素转换为数字
            });
            var result_x = result_x.filter(function(num) {
                return !isNaN(num); // 只保留有效的数字
            });
            x_data_show = result_x;
            var json_y = JSON.stringify(y_data); // 将object转换为JSON字符串
            var array_y = JSON.parse(json_y); // 将JSON字符串解析为数组
            var result_y = array_y.map(function(sub) {
                return Number(sub[0]); // 将子数组中的第一个元素转换为数字
            });
            var result_y = result_y.filter(function(num) {
                return !isNaN(num); // 只保留有效的数字
            });
            y_data_show = result_y;
            option.xAxis.data = x_data_show;
            option.series[0].data = y_data_show;
            console.log(mychart);
            mychart.setOption(option);
        } 
    }
    return (
        <>
            <div id="form">
                 <div ref={chartRef} style={{ width: '60%', height: '100%' }}></div>
                 {/* <input type="file" accept=".csv" onChange={handleFileChange} /> */}
            </div>
        </>
    );
}