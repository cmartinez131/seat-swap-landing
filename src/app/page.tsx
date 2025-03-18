// app/page.tsx
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import PartnerWithUs from "../components/PartnerWithUs";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>ticket-trader-landing – Trade Tickets Live</title>
        <meta
          name="description"
          content="Trade tickets in real time during live sports events. Buy, sell, or swap tickets with ease."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        {/* Insert the new section here */}
        <HowItWorks />
        <PartnerWithUs />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
