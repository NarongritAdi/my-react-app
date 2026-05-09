import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import WeatherPage from './pages/Weather'
import AboutPage from './pages/About'
import NavBar from './components/Navbar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </>
  )
}

export default App