import { NextPage } from "next";
import { Menu } from "../components/Menu";

const Home: NextPage = () => {
  return (
    <div>
      <div>Home page (Partytown)</div>
      <Menu />
    </div>
  );
};

export default Home;
