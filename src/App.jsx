import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
import Home from "./pages/Home"
import Message from "./pages/Message";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
