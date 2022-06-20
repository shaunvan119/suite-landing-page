import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainTop from "./components/MainTop";
import MainBottom from "./components/MainBottom";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="wrapper">
        <Routes   >
            <Route path="/" element={[<Header key={1} />,<MainTop key={2} />,<MainBottom key={3}/>,<Footer key={4}/> ]}/>
            <Route path="/contact" element={<Contact key={5}/>}/>
        </Routes>
    </div>
  );
}

export default App;
