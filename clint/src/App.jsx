import { Route, Routes } from "react-router-dom"
import BuyCradit from "./pages/BuyCradit"
import Home from "./pages/Home"
import Result from "./pages/Result"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./components/Login"
import { useContext } from "react"
import { AppContext } from "./context/AppContext"

function App() {
  const { ShowLogin } = useContext(AppContext)

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      <div className="pointer-events-none absolute -left-40 top-16 h-72 w-72 rounded-full bg-sky-200/70 blur-3xl"></div>
      <div className="pointer-events-none absolute right-0 top-28 h-80 w-80 rounded-full bg-amber-200/70 blur-3xl"></div>
      <div className="relative px-4 py-6 sm:px-10 md:px-14 lg:px-28">
        <Navbar />
        {ShowLogin && <Login />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCradit />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
