import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Calender from './pages/Calender'
import Flashcards from './pages/Flashcards'
import Focus from './pages/Focus'
import Notes from './pages/Notes'
import Tts from './pages/Tts'
import './App.css'

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Calender" element={<Calender />} />
        <Route path="/Flashcards" element={<Flashcards />} />
        <Route path="/Focus" element={<Focus />} />
        <Route path="/Notes" element={<Notes />} />
        <Route path="/Tts" element={<Tts />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
