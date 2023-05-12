import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Video from "./pages/Video"

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/video/:id" element={<Video />} />
      </Routes>
    </BrowserRouter>
  )
}
