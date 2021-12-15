import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import Header from '../components/Header';
import '../styles/global.css'
import { store } from '../app/store';
const MyApp = ({ Component, pageProps: { session, ...pageProps} }) => {
  return (
    <SessionProvider  session={session}>
       <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      </Provider>
    </SessionProvider>

  );
};

export default MyApp;
