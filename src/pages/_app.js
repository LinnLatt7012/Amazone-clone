import Header from '../components/Header';
import '../styles/global.css'


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>

  );
};

export default MyApp;
