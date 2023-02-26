import Footer from "../components/Footer";
import Nav from "../components/Nav";

import "../styles/style.css";

export default function MyApp({ Component, pageProps }) {
  return <>
      <Nav/>
      <hr />
      <Component {...pageProps} />
      <hr />
      <Footer/>
    </>
}
