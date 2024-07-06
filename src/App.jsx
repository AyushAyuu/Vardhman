import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
// import OpenLink from "./pages/OpenLink";

function App() {
  return (
    <>
      <Header />
      {/* <BrowserRouter> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/open-link" element={<OpenLink />} /> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      <Home />
      <Footer />
    </>
  );
}

export default App;
