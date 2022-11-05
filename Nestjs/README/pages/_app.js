import "bootstrap/dist/css/bootstrap.min.css";
import "nprogress/nprogress.css";
import "../styles/global.scss";
import "../styles/fonts.scss";
import "../styles/colors.scss";
import "../styles/width.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Meta from "@/molecules/Meta";
import AdminLayout from "@/organisms/AdminLayout";
import ServiceLayout from "@/organisms/ServicesLayout";
import UserLayout from "@/organisms/UserLayout";
import { SessionProvider } from "next-auth/react";
import Auth from "components/auth";

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith("/admin/")) {
    return (
      <SessionProvider session={pageProps.session}>
        <Auth>
          <ThemeProvider theme={theme}>
            <Meta />
            <AdminLayout>
              <Component {...pageProps} />
            </AdminLayout>
          </ThemeProvider>
        </Auth>
      </SessionProvider>
    );
  }

  if (router.pathname.startsWith("/service/")) {
    return (
      <SessionProvider session={pageProps.session}>
        <Auth>
          <ThemeProvider theme={theme}>
            <Meta />

            <ServiceLayout>
              <Component {...pageProps} />
            </ServiceLayout>
          </ThemeProvider>
        </Auth>
      </SessionProvider>
    );
  }

  if (router.pathname.startsWith("/user/")) {
    return (
      <ThemeProvider theme={theme}>
        <Meta />
        <UserLayout>
          <Component {...pageProps} />
        </UserLayout>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Meta /> <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
