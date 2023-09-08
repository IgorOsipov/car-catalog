import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import Image from "next/image";
import NotFoundPic from "@/../public/404.png";
import Head from "next/head";

const NotFoundPage: NextPage = () => {
  return (
    <Layout title="404 | Page not found">
      <Head>
        <title>Not Found</title>
      </Head>
      <Image width={900} height={638} src={NotFoundPic} alt="not found" />
    </Layout>
  );
};

export default NotFoundPage;
