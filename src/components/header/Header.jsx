import { useContext } from "react"
import { DashboardContext } from "../../context/DashboardContext"

const Header = () => {
  const { fieldData } = useContext(DashboardContext)
  return (
    <header>
      <h1>Campo {fieldData.fieldId && fieldData.fieldId}</h1>
    </header>
  )
}

export default Header