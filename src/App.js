import { useState } from "react";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Menu from "./components/menu.jsx";
import Promotions from "./components/promotions.jsx";
import Events from "./components/events.jsx";
import Contact from "./components/contact.jsx";
import NavigationMenu from "./components/navigation-menu.jsx";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home setActiveSection={setActiveSection} />;
      case "about":
        return <About />;
      case "menu":
        return <Menu />;
      case "promotions":
        return <Promotions />;
      case "events":
        return <Events />;
      case "contact":
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen">
      <NavigationMenu
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {renderSection()}
    </div>
  );
}

export default App;
