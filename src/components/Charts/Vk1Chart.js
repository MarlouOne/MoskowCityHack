import React, { useState } from 'react'
import Data from '../Data/cost_one_user_vk.json'
import { Chart as ChartJS } from 'chart.js/auto'
import { BarChart } from './Charts'

function Vk1Chart() {

    const[userData, setUserData] = useState({
        labels: Data.map((data) => data.Name),
        datasets: [{
          label: "Стоимость привлечения пользователя",
          data: Data.map((data) => data.value),  
          
          
        }]
      })

    return (
      <div>
        <BarChart chartData={userData}/>
      </div>
   )
};

export {Vk1Chart};