import Navbar from "./Layouts/Navbar";
import ImageGallery from "./Layouts/ImgaeGallery";
import Services from "./Layouts/Services";
import "./App.css";
import "./App.scss";
import "./fa"
import Portfolio from "./Layouts/Portfolio";
function App() {
  return (
    <div className="view">
      <div className="header">
        <Navbar />
      </div>

      <div className="body">
        <ImageGallery />
        <Services />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
