import type { NextPage } from "next";
import Header from "../components/Header";
import Reservations from "../components/Reservations";

const Reservation: NextPage = () => {
  return (
    <>
    <Header />
    <Reservations />
    </>
  );
};

export default Reservation;