import type { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./Home.module.scss";
import Layout from "@/components/layout/Layout";

const Home: FC = () => {
  return (
    <Layout>
      <h1>Hello World</h1>
    </Layout>
  );
};

export default Home;
