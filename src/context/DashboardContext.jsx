import { createContext } from "react"
import PropTypes from "prop-types"
import fieldData from '../assets/data.json'

export const DashboardContext = createContext({})

export const DashboardContextProvider = ({ children }) => {
  console.log(fieldData)
  return (
    <DashboardContext.Provider
      value={{fieldData}}  
    >
      {children}
    </DashboardContext.Provider>
  )
}

DashboardContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
