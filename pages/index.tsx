import { NextPage } from "next";
import Head from "next/head";
import { Menu } from "../components/Menu";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home page (Partytown)</title>
      </Head>
      <div>
        <div>Home page (Partytown)</div>
        <Menu />
      </div>
    </>
  );
};

export default Home;
