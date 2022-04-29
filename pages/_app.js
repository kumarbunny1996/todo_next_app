import Layout from "../components/Layout";
import { AuthProvider } from "../context/authContext";
import { SnackbarProvider } from "notistack";

// import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

const styles = {
  snack: {
    padding: "10px",
  },
  success: {
    backgroundColor: "var(--geist-success)",
  },
  error: {
    backgroundColor: "var(--geist-error)",
  },
  info: {
    backgroundColor: "var(--geist-primary)",
  },
  warning: {
    backgroundColor: "var(--geist-warning)",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <SnackbarProvider
        preventDuplicate
        elevation={0}
        classes={{
          root: styles.snack,
          variantSuccess: styles.success,
          variantError: styles.error,
          variantWarning: styles.warning,
          variantInfo: styles.info,
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        maxSnack={3}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SnackbarProvider>
    </AuthProvider>
  );
}

export default MyApp;
