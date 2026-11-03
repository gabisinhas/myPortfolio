import "./styles/components/app.sass"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/index"

function App() {
  return (
    <div className="page">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
