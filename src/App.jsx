import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/about"
import Contact from "./pages/contact"
import Blog from "./pages/blog"
import BlogDetails from "./pages/blogDetails"


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About /> } />
        <Route path="/contact" element={<Contact /> } />
        <Route path="/blog" element={<Blog /> } />
        <Route path="/blog/:id" element={<BlogDetails /> } />
      </Routes>

      <Footer />
    </>
  )
}

export default App
