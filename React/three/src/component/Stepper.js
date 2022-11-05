import React from 'react'
import {Bar, Line,Doughnut,PolarArea, Radar} from "react-chartjs-2"
import Chart from 'chart.js/auto';

const Stepper = () => {
  const mockdata={
    
    labels:["avg","above avg","good","exc"],
    datasets:[{
      label:"mock rating",
      backgroundColor:["red","purple","green","blue"],
      data:[100,140,134,121]
    }]

  }

  const Gender={
    labels:["Male","Female"], 
    datasets:[{
      label:"Gender",
      backgroundColor:["#086288","#ED9232"],
      data:[75,25],
      cutout:150,
      borderColor: [
        "#086288",
        '#ED9232',
      ],
      hoverBorderWidth:20,
      borderRadius:1


    }],
  }
  return (
    <div style={{width:"400px"}}>
      <Bar data={mockdata}/>
      <Line data={mockdata} />
      <Doughnut data={mockdata}/>
      <Doughnut data={Gender}/>

<PolarArea
  data={mockdata}
/>
<Radar data={Gender}/>
    </div>
  )
}

export default Stepper