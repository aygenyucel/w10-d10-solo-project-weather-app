import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import CityWeather from "./components/CityWeather";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:countryCode/:cityName" element={<CityWeather />} />
        </Routes>
        {/* <CustomFooter /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
