import { Route } from "react-router-dom";
import DefaultHOC from "./hoc/Default.HOC";
import HomePage from "./Pages/Home.Page.js";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
    <DefaultHOC path = "/" exact component={HomePage} />
    </>
  );
}

export default App;
