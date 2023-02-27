import Footer from "../components/Footer";
import Todo from "../components/Todo";

import "../styles/style.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Todo/>
      <Footer />
    </>
  );
}
