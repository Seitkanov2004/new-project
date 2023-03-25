import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Menu from "./pages/Menu/Menu";
import BurMenu from "./components/Header/burMenu";
import {useState} from "react";

function App() {

    const [menu, setMenu] = useState(false)
    return (
        <div className="App">
            <Header menu={menu} setMenu={setMenu}/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/foods"} element={<Menu/>}/>
            </Routes>

            <BurMenu menu={menu}/>

            <Footer/>

        </div>
    );
}

export default App;
