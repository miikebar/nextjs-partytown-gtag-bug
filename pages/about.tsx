import { NextPage } from "next";
import Head from "next/head";
import { Menu } from "../components/Menu";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About page (Partytown)</title>
      </Head>
      <div>
        <div>About page (Partytown)</div>
        <Menu />
      </div>
    </>
  );
};

export default About;
