import Layout from "../components/Layout";
import { AuthProvider } from "../context/authContext";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
