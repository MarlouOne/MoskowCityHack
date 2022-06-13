import React, { useState } from 'react'
import Data from '../Data/MedianBalance.json'
import { Chart as ChartJS } from 'chart.js/auto'
import { BarChart } from './Charts'

function ThirdChart() {

    const[userData, setUserData] = useState({
        labels: Data.map((data) => data.Type),
        datasets: [{
          label: "Средние траты клиента",
          data: Data.map((data) => data.Amount), 
          backgroundColor: [
            '#06CCFF',
            '#8A8A8A',            
          ], 
        }]
      })

    return (
        <BarChart chartData={userData}/>
   )
};

export {ThirdChart};