import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Menu from "./pages/Menu/Menu";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/foods"} element={<Menu/>}/>
            </Routes>
            <Footer/>

        </div>
    );
}

export default App;
