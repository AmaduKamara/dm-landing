import About from "./components/About";
import AllInOne from "./components/AllInOne";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Supports from "./components/Supports";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Supports />
      <AllInOne />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
