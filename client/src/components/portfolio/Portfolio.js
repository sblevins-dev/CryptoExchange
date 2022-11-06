import { useContext, useEffect } from "react"
import CoinContext from "../../context/CoinContext"
import "./portfolio.css"

export const Portfolio = () => {
  const { loginOpen, setLoginOpen } = useContext(CoinContext)

  useEffect(() => {
    setLoginOpen(true)
  }, [])
  return (
    <div className="portfolio-header">
      <h1>Portfolio</h1>
    </div>
  )
}
