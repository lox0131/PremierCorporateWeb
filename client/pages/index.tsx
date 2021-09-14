import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBySide from "../components/SideBySide";
import SidebySide from "../components/SideBySide";
import DashBoard  from "../Domains/DashBoard";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <DashBoard />
      <SideBySide />
      <Footer />
    </>
  );
};

export default Home;
