import { MenuProvider } from "./context/MenuContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Works from "./components/Works";
import Teams from "./components/Teams";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Credits from "./components/Credits";

function App() {
  return (
    <MenuProvider>
      <div className="App">
        <div className="content">
          <Header />
          <Home />
          <Services />
          <Works />
          <Teams />
          <Clients />
        </div>
        <Footer />
        <Credits />
      </div>
    </MenuProvider>
  );
}

export default App;
