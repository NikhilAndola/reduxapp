import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container my-4">
        <Shop/>
      </div>
    </>
  );
}

export default App;
