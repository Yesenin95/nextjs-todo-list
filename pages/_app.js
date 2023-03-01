import Footer from "../components/Footer";


import "../styles/style.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
