import MainNavbar from '../components/MainNavbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <MainNavbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
