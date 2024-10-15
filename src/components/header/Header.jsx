import { useContext, useState } from "react"
import { DashboardContext } from "../../context/DashboardContext"
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

const Header = () => {
  const { fieldData } = useContext(DashboardContext)
  const [activeTab, setActiveTab] = useState('one')

  const handleChangeTab = (e, newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  return (
    <header className="dashboard-header">
      <div className="header-title">
        <h1>
          Campo {fieldData.fieldId}
          <InsertDriveFileIcon fontSize="large" />
        </h1>
        <div className="header-chips">
          <Chip label={fieldData.status} color="success" />
          <Chip
            label={`Total de granos: ${fieldData.totalGrainsInTons} (tons)`}
            variant="outlined"
            className="custom-chip"
          />
        </div>
      </div>
      <div className="header-actions">
        <Button variant="contained" className="primary-btn">Editar Establecimiento</Button>
        <Button href="#" className="link-btn">Cotizá tu seguro</Button>
        <Button href="#" className="link-btn">Financiate con tus granos</Button>
      </div>
      <div className="header-tabs">
          <Tabs
            value={activeTab}
            onChange={handleChangeTab}
            aria-label="Dashboard tabs"
          >
            <Tab
              value="one"
              label="Principal"
            />
            <Tab value="two" label="Bitácora" />
          </Tabs>
      </div>
    </header>
  )
}

export default Header