import type { NextPage } from "next";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/containers/Home"));

const Home: NextPage = () => {
  return <HomePage />;
};

export default Home;
