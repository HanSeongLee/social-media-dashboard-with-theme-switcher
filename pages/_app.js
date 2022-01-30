import '../styles/globals.scss';
import {ThemeProvider} from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider defaultTheme={'light'}
                     attributes={'class'}
      >
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default MyApp
