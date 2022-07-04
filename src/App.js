import About from "./components/About";
import AllInOne from "./components/AllInOne";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Supports from "./components/Supports";
import Pricing from './components/Pricing';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Supports />
      <AllInOne />
      <Pricing />
    </div>
  );
}

export default App;
