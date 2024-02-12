import React from "react";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./Home.scss";
import Header from "../../components/pages/Homepage/header/index.js";
import QuickAccess from "../../components/pages/Homepage/quick-access/index.js";
import UpcomingEvents from "../../components/pages/Homepage/upcoming-events/index.js";
import MyReminders from "../../components/pages/Homepage/my-reminders/index";
function Home() {
  useEffect(() => {
    document.title = "Home page";
  }, []);

  return (
    <div className="HomePasge">
      <Container>
        {/* Header */}
        <Header />
        {/* QuickAccess */}
        <QuickAccess />
        {/* QuickAccess */}
        <UpcomingEvents />
        {/* MyReminders */}
        <MyReminders />
      </Container>
    </div>
  );
}

export default Home;
