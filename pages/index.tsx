import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import React from "react";

export const runtime = "experimental-edge";

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

interface PageProps {}

const HomePage: NextPage<PageProps> = () => {
  return <h1>ad</h1>;
};

export default HomePage;
