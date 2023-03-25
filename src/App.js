import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Menu from "./pages/Menu/Menu";
import BurMenu from "./components/Header/burMenu";

function App() {
    return (
        <div className="App">
            <Header/>
            <BurMenu/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/foods"} element={<Menu/>}/>
            </Routes>
            <Footer/>

        </div>
    );
}

export default App;
