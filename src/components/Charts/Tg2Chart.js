import React, { useState } from 'react'
import Data from '../Data/predict_match_user_tg.json'
import { Chart as ChartJS } from 'chart.js/auto'
import { BarChart } from './Charts'

function Tg2Chart() {

    const[userData, setUserData] = useState({
        labels: Data.map((data) => data.Name),
        datasets: [{
          label: "Количество новых пользователей",
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

export {Tg2Chart};