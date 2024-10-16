import { useContext } from "react"
import { DashboardContext } from "../../context/DashboardContext"

const MapSection = () => {
  const { fieldData } = useContext(DashboardContext)
  return (
    <section className="map-section">
      <h2>Ubicación: {fieldData.location.name}</h2>
      <iframe 
        className="location-map" 
        src={fieldData.location.map} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación del campo"
      >
      </iframe>
    </section>
  )
}

export default MapSection