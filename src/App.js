import Header from "./components/Header/Header";
import TopSection from "./components/TopSection/TopSection";
import Tools from "./components/Tools/Tools";
import TrustedBrands from "./components/TrustedBrands/TrustedBrands";
import NewcomerTools from "./components/NewcomerTools/NewcomerTools";
import Testimonial from "./components/Comments/Testimonial";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <TopSection />
      <Tools />
      <TrustedBrands />
      <NewcomerTools />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
