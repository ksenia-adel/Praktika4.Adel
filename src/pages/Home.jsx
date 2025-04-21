import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import CountryList from '../components/CountryList';

// homepage with search and country listing
const Home = () => {
  const [allCountries, setAllCountries] = useState([]);       // full list of countries
  const [visibleCountries, setVisibleCountries] = useState([]); // filtered countries
  const [query, setQuery] = useState('');                     // search input
  const [currentPage, setCurrentPage] = useState(1);          // current page
  const itemsPerPage = 12;                                    // countries per page

  // fetch and sort countries on first load
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
        const sorted = res.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setAllCountries(sorted);
        setVisibleCountries(sorted);
      })
      .catch(err => console.error('error loading countries:', err));
  }, []);

  // filter countries when search query changes
  useEffect(() => {
    const filtered = allCountries.filter(country =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setVisibleCountries(filtered);
    setCurrentPage(1); // reset to first page after search
  }, [query, allCountries]);

  const offset = (currentPage - 1) * itemsPerPage;
  const currentItems = visibleCountries.slice(offset, offset + itemsPerPage);

  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center">explore countries</h1>

      {/* search input */}
      <Search setSearch={setQuery} />

      {/* country list with pagination */}
      <CountryList
        countries={currentItems}
        total={visibleCountries.length}
        page={currentPage}
        setPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
    </Container>
  );
};

export default Home;
