import Slider from 'react-slick';
import Header from './component/Header';
import Banner from './component/Banner';
import About from './component/About';
import SpecialMenu from './component/SpecialMenu';
import Menu from './component/Menu';
import Team from './component/Team';
import Gallery from './component/Gallery';
import Blog from './component/Blog';
import Pricing from './component/Pricing';
import Reservation from './component/Reservation';
import Footer from './component/Footer';
import ColorScheme from './component/ColorScheme';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <div id="loader">
        <div id="status"></div>
      </div> */}
      <Header />
      <Banner />
      <About />
      <SpecialMenu />
      <Menu />
      <Team />
      <Gallery />
      <Blog />
      <Pricing />
      <Reservation />
      <Footer />
      <a href="#" className="scrollup" style={{ display: "none" }}>Scroll</a>
      <ColorScheme />

    </div>
  );
}

export default App;
