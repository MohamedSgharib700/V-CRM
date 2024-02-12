import Navbar from "./components/global/Navbar/Navbar";
import Slidebar from "./components/global/Slidebar/Slidebar";
import { useTranslation } from "react-i18next";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Offers from "./pages/OffersInside/index.js";
import OffersOutside from "./pages/OffersOutside/index.js";
import OfferSignal from "./pages/OfferSignal/index.js";
import EventSignal from "./pages/sengilEvent/index.js";
import Events from "./pages/events/index.js";
import Calendar from "./pages/events/calender.jsx";
function App() {
  const { ready } = useTranslation();
  if (ready) {
    return (
      <div className="App">
        <div className="page container-fluid p-0">
          <div className="content-page">
            <Slidebar />
            <div className="content-pages">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/offers-inside" element={<Offers />} />
                <Route path="/offers-outside" element={<OffersOutside />} />
                <Route path="/events" element={<Events />} />
                <Route path="/offer-signal" element={<OfferSignal />} />
                <Route path="/event-signal" element={<EventSignal />} />
                <Route path="/event-clander" element={< Calendar />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <span>Loading...</span>;
}

export default App;
