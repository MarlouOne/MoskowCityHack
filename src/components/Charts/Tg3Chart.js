import React, { useState } from 'react'
import Data from '../Data/predict_profit_bank_prize_tg.json'
import { Chart as ChartJS } from 'chart.js/auto'
import { BarChart } from './Charts'

function Tg3Chart() {

    const[userData, setUserData] = useState({
        labels: Data.map((data) => data.Name),
        datasets: [{
          label: "Предполагаемый доход банка",
          data: Data.map((data) => data.value),  
          backgroundColor: [
            '#fff',       
          ],          
        }]
      })

    return (
      <div>
        <BarChart chartData={userData}/>
      </div>
   )
};

export {Tg3Chart};