import { useContext } from 'react'
import { DashboardContext } from '../../context/DashboardContext'
import Chip from '@mui/material/Chip'

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
    </section>
  )
}

export default ChartSection