import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainTop from "./components/MainTop";
import MainBottom from "./components/MainBottom";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="wrapper">
        <Routes>
            <Route path="/" element={[<Header/>,<MainTop/>,<MainBottom/>,<Footer/> ]}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
