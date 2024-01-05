import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Info from "./component/Info";
import Cardsection from "./component/Cardsection";
import Alamat from "./component/Alamat";
import Story from "./component/Story";
import Gallery from "./component/Gallery";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Info />
      <Alamat />
      <Cardsection />
      <Story />
      <Gallery />
      {/* Content lainnya */}
    </div>
  );
}

export default App;
