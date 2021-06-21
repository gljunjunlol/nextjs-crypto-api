import '../styles/globals.css'
import Home from '../components/Home';
import CryptoTile from '../components/CryptoTile';


function MyApp({ Component, pageProps }) {
  return ( 
  <div>

  
  <Component {...pageProps} />
  <Home />
  <br />
  <br />
  <br />
  </div>
  );
}

export default MyApp
