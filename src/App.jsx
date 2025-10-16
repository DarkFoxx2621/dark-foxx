import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services/Services';
import WebDev from './components/Services/WebDev';
import AppDev from './components/Services/AppDev';
import Cloud from './components/Services/Cloud';
import GameDev from './components/Services/GameDev';
import AIMLDev from './components/Services/AIMLDev';
import Product from './components/Product';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />

          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/services' element={<Services />} />
              <Route path='/products' element={<Product />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />

              {/* Servies  */}

              <Route path="/services/web" element={<WebDev />} />
              <Route path="/services/app" element={<AppDev />} />
              <Route path="/services/cloud" element={<Cloud />} />
              <Route path="/services/game" element={<GameDev />} />
              <Route path="/services/aiml" element={<AIMLDev />} />

            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
