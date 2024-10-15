import ChartSection from "../components/chartSection/ChartSection"
import Header from "../components/header/Header"
import MapSection from "../components/mapSection/MapSection"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <ChartSection />
      <MapSection />
    </div>
  )
}

export default Dashboard