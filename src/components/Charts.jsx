import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactApexChart from "react-apexcharts";
import { getData } from "../redux/action";
import { authContextValue } from "../authContex/ContextData";

function Charts() {
  const { num } = useContext(authContextValue);
  const [emission222, setEmission222] = useState("");
  const [emission233, setEmission233] = useState("");
  const [cartHeight, setCartHeight] = useState(400);
  let emiValue = [];
  const dispatch = useDispatch();
  const dt = useSelector((pre) => pre.reducer.dataValue);
  const data22 = dt?.filter((el) => {
    return el.Year == 2022;
  });
  const data23 = dt?.filter((el) => {
    return el.Year == 2023;
  });
  const emission22 = data22?.map((el) => {
    return el.Emissions;
  });
  const RE_22 = data22?.map((el) => {
    return el.R_E;
  });
  const RE_23 = data23?.map((el) => {
    return el.R_E;
  });
  const emission23 = data23?.map((el) => {
    return el.Emissions;
  });

  const rotateData22 = (val) => {
    let arrData = [];
    for (var i = val; i < emission22.length; i++) {
      arrData.push(emission22[i]);
    }
    for (var i = 0; i < val; i++) {
      arrData.push(emission22[i]);
    }

    return arrData;
  };
  const rotateData23 = (val) => {
    let arrData = [];
    for (var i = val; i < emission23.length; i++) {
      arrData.push(emission23[i]);
    }
    for (var i = 0; i < val; i++) {
      arrData.push(emission23[i]);
    }

    return arrData;
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    const emission2222 = rotateData22(num);
    const emission2333 = rotateData23(num);

    setEmission222(emission2222);
    setEmission233(emission2333);
  }, [num]);

  const [series, setSeries] = useState([
    {
      name: "Emissions",
      type: "column",
      data: emission23,
    },
    {
      name: "R/E",
      type: "line",
      data: RE_23,
    },
    {
      name: "R/E-2022",
      type: "line",
      data: RE_22,
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      height: cartHeight,
      type: "line",
    },
    stroke: {
      width: [0, 2],
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],

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
  console.log(emission222);
  useEffect(() => {
    console.log(emiValue);
    setSeries([
      {
        name: "Emissions-2023",
        type: "column",
        data: emission233.length != 0 ? emission233 : emission23,
      },
      {
        name: "Emissions-2022",
        type: "column",
        data: emission222.length != 0 ? emission222 : emission22,
      },
      {
        name: "R/E-2023",
        type: "line",
        data: RE_23,
      },
      {
        name: "R/E-2022",
        type: "line",
        data: RE_22,
      },
    ]);
  }, [dt, num]);

  return (
    <div className="main1chart">
      <ReactApexChart
        className="chat11"
        options={options}
        series={series}
        type="line"
        height={cartHeight}
      />
    </div>
  );
}

export default Charts;
