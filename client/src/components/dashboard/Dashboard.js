import { useContext, useEffect } from "react"
import CoinContext from "../../context/CoinContext"
import "./dashboard.css"

export const Dashboard = () => {
  const { loginOpen, setLoginOpen } = useContext(CoinContext)

  useEffect(() => {
    setLoginOpen(true)
  }, [])
  return (
    <div className="dashboard-header">
      <h1>Dashboard</h1>
    </div>
  )
}
