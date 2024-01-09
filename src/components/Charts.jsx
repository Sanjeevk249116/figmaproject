import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactApexChart from "react-apexcharts";
import { getData } from '../redux/action';

function Charts() {
    const [cartHeight, setCartHeight] = useState(400);
   
    const dispatch=useDispatch();
    const dt=useSelector((pre)=>pre.reducer.dataValue)
    const data22=dt?.filter((el)=>{
        return el.Year==2022;
    })
    const data23=dt?.filter((el)=>{
        return el.Year==2023;
    })
    const emission22=data22?.map((el)=>{
        return el.Emissions
    })
    const RE_22=data22?.map((el)=>{
        return el.R_E
    })
    const RE_23=data23?.map((el)=>{
        return el.R_E
    })
    const emission23=data23?.map((el)=>{
        return el.Emissions
    })
    const [series, setSeries] = useState([
        {
          name: "Emissions",
          type: "column",
          data: emission23
        },
        {
          name: "R/E",
          type: "line",
          data: [40, 50, 41, 67, 22,20,10,45,7,8,9,10]
        },
        {
          name:'R/E-2022',
          type:'line',
          data:[40, 50, 41, 67, 22,20,10,45,67,28,19,18]
    }
      ]);
    console.log(RE_22)
    
    
       useEffect(()=>{
        dispatch(getData())
       },[])
   

   
    const [options, setOptions] = useState({
      chart: {
        height: cartHeight,
        type: "line",
      },
      stroke: {
        width:[0,2]
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
      
      yaxis: [
        {
          title: {
            text: "Emissions",
          },
        },
        {
          opposite: true,
          title: {
            text: "R/E",
          },
        },
      ],
      
    });
  
   
    useEffect(()=>{
      setSeries([
          {
            name: "Emissions-2023",
            type: "column",
            data: emission23
          },
          {
            name:'Emissions-2022',
            type:'column',
           data: emission22
        },
          {
            name: "R/E-2023",
            type: "line",
            data: RE_23
          },
          {
                name:'R/E-2022',
                type:'line',
                data:RE_22
          }
        ])
    },[dt])

    useEffect(() => {
        const handleResize = () => {
          setCartHeight(window.innerWidth > 600 ? 400 : 250); // Adjust the heights as needed
        };
        handleResize();
    
        window.addEventListener("resize", handleResize);
    
       return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, [emission22]);
    
  
   
  return (
    <div className='main1chart'>
      <ReactApexChart className="chat11"
        options={options}
        series={series}
        type='line'
        height={cartHeight}
      />
    </div>
  )
}

export default Charts
