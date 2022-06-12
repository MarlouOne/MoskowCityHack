import React, { useState } from 'react'
import Data from '../Data/CreditCardCount.json'
import { Chart as ChartJS } from 'chart.js/auto'
import { LineChart } from './Charts'

function FirstChart() {

    const[userData, setUserData] = useState({
        labels: Data.map((data) => data.CardType),
        datasets: [{
          label: "Количество карт у клиента",
          data: Data.map((data) => data.CardCount),  
        }]
      })

    return (
        <LineChart chartData={userData}/>
   )
};

export {FirstChart};