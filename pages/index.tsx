import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Header from "../components/header";
import Intro from "../components/intro";
import Footer from "../components/footer";
import About from "../components/about";
import Contact from "../components/contact";

export default function Index() {

  return (
    <>
      <Layout>
        <Head>
          <title>{`${CMS_NAME}`}</title>
        </Head>
        <Header />
        <Container>
          <Intro />
          <About />
          <Contact />
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
