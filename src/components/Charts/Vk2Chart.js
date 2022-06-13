import React, { useState } from 'react'
import Data from '../Data/predict_match_users_vk.json'
import { Chart as ChartJS } from 'chart.js/auto'
import { BarChart } from './Charts'

function Vk2Chart() {

    const[userData, setUserData] = useState({
        labels: Data.map((data) => data.Name),
        datasets: [{
          label: "Количество новых пользователей",
          data: Data.map((data) => data.value),  

        }]
      })

    return (
      <div>
        <BarChart chartData={userData}/>
      </div>
   )
};

export {Vk2Chart};