import React, { useState } from 'react'
import Data from '../Data/ManToWoman.json'
import { Chart as ChartJS } from 'chart.js/auto'
import { PieChart } from './Charts'

function SecondChart() {

    const[userData, setUserData] = useState({
        labels: Data.map((data) => data.gender),
        datasets: [{
          label: "Соотношение полов",
          data: Data.map((data) => data.count),
          backgroundColor: [
            '#06CCFF',
            '#8A8A8A',            
          ],
        }]
      })

    return (
        <PieChart chartData={userData}/>
   )
};

export {SecondChart};