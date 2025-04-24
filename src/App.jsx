import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import "./styles/components/app.sass"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/index"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
