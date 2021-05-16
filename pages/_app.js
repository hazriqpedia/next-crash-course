import "../styles/globals.css";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Nav />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
