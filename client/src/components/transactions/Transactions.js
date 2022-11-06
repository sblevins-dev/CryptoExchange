import { useContext, useEffect } from "react"
import CoinContext from "../../context/CoinContext"
import "./transactions.css"

export const Transactions = () => {
  const { loginOpen, setLoginOpen } = useContext(CoinContext)

  useEffect(() => {
    setLoginOpen(true)
  }, [])
  return (
    <div className="transactions-header">
      <h1>Transactions</h1>
    </div>
  )
}
