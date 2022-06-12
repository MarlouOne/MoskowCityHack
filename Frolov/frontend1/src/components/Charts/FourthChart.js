import React, { useState } from 'react'
import Data from '../Data/NewBankCard.json'
import { Chart as ChartJS } from 'chart.js/auto'
import { BarChart } from './Charts'

function FourthChart() {

    const[userData, setUserData] = useState({
        labels: Data.map((data) => data.SystemName),
        datasets: [{
          label: "Типы платежных систем",
          data: Data.map((data) => data.Count),  
        }]
      })

    return (
        <BarChart chartData={userData}/>
   )
};

export {FourthChart};