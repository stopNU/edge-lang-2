import Layout from "components/Layout";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import React from "react";

export const runtime = "experimental-edge";

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

interface PageProps {
  locale: string;
}

const HomePage: NextPage<PageProps> = () => {
  return (
    <Layout locale={"en"}>
      <h1>ad</h1>
    </Layout>
  );
};

export default HomePage;
