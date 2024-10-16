// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto'
import { useContext } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { DashboardContext } from '../../context/DashboardContext'

const Chart = () => {
  const { fieldData } = useContext(DashboardContext)
  const options = {
    plugins: {
      legend: {
        position: 'right',
        align: 'center',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 32,
          color: '#0e194e',
        },
      },
    },
  }

  const a11yText = fieldData.silobags.status.map(data => `${data.label}: ${data.value}`)

  return (
    <div className="chart-wrapper">
      <Doughnut 
        data={{
          labels: fieldData.silobags.status.map(data => data.label),
          datasets: [
            {
              label: 'Estatus',
              data: fieldData.silobags.status.map(data => data.value),
              backgroundColor: fieldData.silobags.status.map(data => data.color),
              borderColor: fieldData.silobags.status.map(data => data.color)
            }
          ]
        }}
        options={options}
        role="img"
        aria-label={`Un gráfico circular mostrando la siguiente distribución: ${a11yText}`}
      />
    </div>
  )
}

export default Chart