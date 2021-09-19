import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Reservations from "../components/Reservations";

const Reservation: NextPage = () => {
  return (
    <>
    <Header />
    <Reservations />
    <Footer/>
    </>
  );
};

export default Reservation;