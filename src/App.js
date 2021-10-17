import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Projects from "./pages/Project";
import Service from "./pages/Service";
import Technologie from "./pages/Technologie";
import About from "./pages/About";
import Quotes from "./pages/Quotes";
import FolderHandler from "./functions/FolderHandler";

function App() {
  const [styles, setStyles] = useState({
    backgroundImage: `url("${process.env.PUBLIC_URL}/back/background.jpg")`,
  });
  useEffect(() => {
    setTimeout(() => {
      FolderHandler();
    }, 500);
    setInterval(() => {
      var random = Math.floor(Math.random() * 10);
      var background = [
        "background.jpg",
        "background1.jpg",
        "background2.jpg",
        "background3.jpg",
        "background4.jpg",
        "background5.jfif",
        "background6.jpg",
        "background7.jpg",
        "background8.jfif",
        "background9.png",
      ];
      var back = background[random];
      setStyles({
        backgroundImage: `url(${process.env.PUBLIC_URL}"/back/${back}")`,
      });
    }, 60000);
  }, []);
  return (
    <Router>
      <div className="container" style={styles} onLoad={FolderHandler}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/services">
            <Service />
          </Route>
          <Route exact path="/technologies">
            <Technologie />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/about/bestofquotes">
            <Quotes />
          </Route>
          <Router path="*">
            <NotFound />
          </Router>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
