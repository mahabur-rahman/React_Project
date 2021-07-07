import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import "./components/css/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./components/css/Responsive.scss";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
