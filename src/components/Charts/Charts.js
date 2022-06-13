import React from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'

function BarChart({chartData}) {
  return (
    <Bar data={chartData}/>
  )
}

function LineChart({chartData}) {
    return (
      <Line data={chartData}/>
    )
}

function PieChart({chartData}) {
  return (
    <Pie data={chartData}/>
  )
}
  
export {LineChart, BarChart, PieChart};