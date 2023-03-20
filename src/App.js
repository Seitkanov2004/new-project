import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={"/"} element={ <Home/> } />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
