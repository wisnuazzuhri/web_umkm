import Home from "./components/Home";
import Berita from "./components/Berita";
import Profil from "./components/Profil";
import CustomNavbar from "./components/Navbar";
import Credit from "./components/Credit";

function App() {
  return (
    <div className="overflow-hidden">
      <CustomNavbar />
      <Home />
      <Berita />
      <Profil />
      <Credit />
    </div>
  );
}

export default App;
