import {useState} from 'react'
import Head from 'next/head'
import CoinList from '../components/CoinList';
import SearchBar from '../components/SearchBar';
import Layout from '../components/Layout';



export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState('');

  const allCoins = filteredCoins.filter(coin =>
    coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

  const allCoins2 = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    );
    // look for event e
    const handleChange = e => {
      e.preventDefault();

      setSearch(e.target.value.toLowerCase());
    };
  
    
  return (
    <Layout>
      
        <div className='coin_app'>
        <link rel="icon" href="/favicon.ico" />
      
      <SearchBar type='text' placeholder='Search' onChange={handleChange} />
      <CoinList filteredCoins={allCoins} />
      <CoinList filteredCoins={allCoins2} />
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=sgd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  );
const filteredCoins = await res.json();

return {
  props: {
    filteredCoins
    }
  };
};
