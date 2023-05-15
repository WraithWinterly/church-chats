import { type AppType } from "next/app";
// import { type Session } from "next-auth";
// import { SessionProvider } from "next-auth/react";

// import { api } from "~/utils/api";

import "~/styles/globals.css";
import Layout from "~/components/layout/layout";
import { AppContext } from "~/components/context/app-context";

// When we are ready to add server features, we can uncomment the SessionProvider and api.withTRPC lines

// const MyApp: AppType<{ session: Session | null }> = ({
const MyApp: AppType = ({
  Component,
  // pageProps: { session, ...pageProps },
  pageProps,
}) => {
  return (
    // <SessionProvider session={session}>
    <AppContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext>

    // </SessionProvider>
  );
};

// export default api.withTRPC(MyApp);
export default MyApp;
