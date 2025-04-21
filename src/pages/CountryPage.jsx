import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryDetails from '../components/CountryDetails';
import { Container } from 'react-bootstrap';

// page that loads and shows details of a single country
const CountryPage = () => {
  const { name } = useParams(); // get country name from the URL
  const [countryData, setCountryData] = useState(null); // store country data

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(res => {
        if (res.data?.length) setCountryData(res.data[0]);
      })
      .catch(err => {
        console.error('failed to load country data:', err);
      });
  }, [name]);

  // loading screen
  if (!countryData) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <p style={{
          fontFamily: "'Bungee Spice', cursive",
          fontSize: '1.5rem',
          color: '#FF79C6',
          textTransform: 'none',
        }}>
          Loading...please wait!
        </p>
      </div>
    );
  }

  return (
    <Container>
      {/* show the country details component */}
      <CountryDetails country={countryData} />
    </Container>
  );
};

export default CountryPage;
