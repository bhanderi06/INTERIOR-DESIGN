import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "bootstrap-icons/font/bootstrap-icons.css";
import LogIn from "./pages/login";
import Service from "./pages/service";
import Portfolio from "./pages/portfolio";
import Pavilion from "./pages/pavilion";
import Sevilla from "./pages/sevilla";
import Manila from "./pages/Manila";
import Degin from "./pages/Degin";
import Blog from "./pages/blog";
import Formats from "./pages/post_formats";
import BlogService from "./pages/blog_service";
import Standard from "./pages/standard";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/service" element={<Service />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pavilion" element={<Pavilion />} />
          <Route path="/sevilla" element={<Sevilla />} />
          <Route path="/manila" element={<Manila />} />
          <Route path="/degin" element={<Degin />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-service" element={<BlogService />} />
          <Route path="/formats" element={<Formats />} />
          <Route path="/standard" element={<Standard />} />
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
