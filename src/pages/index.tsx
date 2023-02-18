import { Footer } from "@components/Footer";
import { LandingFragment } from "@components/Fragments/Landing";
import { QuotesFragment } from "@components/Fragments/Quotes";
import { Container } from "@components/Standard";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Void Craft | Quotes"
        description="Minecraft Server"
      />
      <Container>
        <LandingFragment />

        <QuotesFragment />

        <Footer />
      </Container>
    </>
  );
};

export default Home;
