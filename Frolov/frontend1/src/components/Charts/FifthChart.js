import React, { useState } from 'react'
import Data from '../Data/OldProcent.json'
import { Chart as ChartJS } from 'chart.js/auto'
import { LineChart } from './Charts'

function FifthChart() {

    const[userData, setUserData] = useState({
        labels: Data.map((data) => data.Age),
        datasets: [{
          label: "Возраст клиента",
          data: Data.map((data) => data.Prosent),  
        }]
      })

    return (
        <LineChart chartData={userData}/>
   )
};

export {FifthChart};