import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import DashBoard  from "../Domains/DashBoard";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <DashBoard />
    </>
  );
};

export default Home;
