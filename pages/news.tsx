import { NextPage } from "next";
import Head from "next/head";
import { Menu } from "../components/Menu";

const News: NextPage = () => {
  return (
    <>
      <Head>
        <title>News page (Partytown)</title>
      </Head>
      <div>
        <div>News page (Partytown)</div>
        <Menu />
      </div>
    </>
  );
};

export default News;
