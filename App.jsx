import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AboutUS from "./Pages/home/AboutUs/AboutUs";
import Home from "./Pages/home/Home";
import Creat from "./Pages/creat/Creat";
import { Route, Routes } from "react-router-dom";
import ArticlePage from "./Pages/home/articlePage/ArticlePage";
import NotFound from "./Pages/notFound/NotFound";
function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/creat" element={<Creat />} />
      </Routes>
    </div>
  );
}

export default App;
