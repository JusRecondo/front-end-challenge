import ChartSection from "../components/chartSection/ChartSection"
import Header from "../components/header/Header"
import MapSection from "../components/mapSection/MapSection"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <main className="dashboard-main">
        <ChartSection />
        <MapSection />
      </main>
    </div>
  )
}

export default Dashboard