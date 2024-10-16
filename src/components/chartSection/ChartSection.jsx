import { useContext } from 'react'
import { DashboardContext } from '../../context/DashboardContext'
import Chip from '@mui/material/Chip'
import Card from '../card/Card'
import Chart from './Chart'

const ChartSection = () => {
  const { fieldData } = useContext(DashboardContext)

  return (
    <section className="chart-section">
      <div className="chips-container">
          <Chip
            label={`Total de silobolsas: ${fieldData.silobags.total}`}
            variant="outlined"
            className="custom-chip"
          />
          <Chip label={`Asegurados: ${fieldData.silobags.insured}`} color="success" />
      </div>
      <Card customClassname="chart-card">
        <>
          <h2>Estatus silobolsas</h2>
          <Chart />
        </>
      </Card>
    </section>
  )
}

export default ChartSection