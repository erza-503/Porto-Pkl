import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter as Router ,Routes ,Route } from "react-router-dom";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router basename="/Porto-Pkl/">
    <Routes>
      <Route path="/" element={<App />}/>
    </Routes>
  </Router>
);
