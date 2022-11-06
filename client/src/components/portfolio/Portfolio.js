import { useContext, useEffect } from "react"
import CoinContext from "../../context/CoinContext"
import "./portfolio.css"

export const Portfolio = () => {
  const { setLoginOpen, user } = useContext(CoinContext)

  useEffect(() => {
    if (user === null) {
      setLoginOpen(true)
    }
  }, [])

  return (
    <div className="portfolio-header">
      <h1>Portfolio</h1>
    </div>
  )
}
