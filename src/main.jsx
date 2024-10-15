import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.scss'
import { DashboardContextProvider } from './context/DashboardContext.jsx'

createRoot(document.getElementById('root')).render(
  <DashboardContextProvider>
    <App />
  </DashboardContextProvider>
)
