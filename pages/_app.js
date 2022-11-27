import MainNavbar from '../components/Navbars/MainNavbar';
import SubNavbar from '../components/Navbars/SubNavbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <MainNavbar />
      <SubNavbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
