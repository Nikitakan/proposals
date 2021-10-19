import React from "react";
import FooterHome from "../Footer/FooterHome";
import Header from "../Headers/Header";
import Banner from "./Banner";
import Row from "./HomeRowProducts/Row";
import Nav from "./Nav";

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Banner />
      <Row />
      <FooterHome />
    </div>
  );
};

export default Home;
