import { SessionProvider } from 'next-auth/react';
import Header from '../components/Header';
import '../styles/global.css'


const MyApp = ({ Component, pageProps: { session, ...pageProps} }) => {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>

  );
};

export default MyApp;
