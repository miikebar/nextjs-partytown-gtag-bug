import { NextPage } from "next";
import Head from "next/head";
import { Menu } from "../components/Menu";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact page (Partytown)</title>
      </Head>
      <div>
        <div>Contact page (Partytown)</div>
        <Menu />
      </div>
    </>
  );
};

export default Contact;
