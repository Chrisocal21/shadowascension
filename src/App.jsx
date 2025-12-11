import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Buy from './pages/Buy'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'
import './pages/PageLayout.css'

// Uncomment for local development with Merch page:
// import Merch from './pages/Merch'

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/about" element={<About />} />
          {/* Uncomment for local development: */}
          {/* <Route path="/merch" element={<Merch />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
