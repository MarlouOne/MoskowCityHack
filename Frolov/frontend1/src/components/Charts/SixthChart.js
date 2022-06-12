import React, { useState } from 'react'
import Data from '../Data/vk_group_bar_profit_bank.json'
import { Chart as ChartJS } from 'chart.js/auto'
import { BarChart } from './Charts'

function SixthChart() {

    const[userData, setUserData] = useState({
        labels: Data.map((data) => data.Name),
        datasets: [{
          label: "Возможный доход",
          data: Data.map((data) => data.Value),  
          backgroundColor: [
            '#fff',       
          ],
          
        }]
      })

    return (
        <BarChart style={{width: 500, height: 300}} chartData={userData}/>
   )
};

export {SixthChart};