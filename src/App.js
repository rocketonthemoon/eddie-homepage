import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Works from "./components/Works";
import Teams from "./components/Teams";
import Clients from "./components/Clients";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Works />
      <Teams />
      <Clients />
    </div>
  );
}

export default App;
