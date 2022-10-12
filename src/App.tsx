import React from "react";
import Header from "./containers/header";
import Footer from "./containers/footer";
import MainPage from "./pages/main-page";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
