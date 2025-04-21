import { Link } from 'react-router-dom';

// component that shows a grid of countries with pagination
const CountryList = ({ countries, total, page, setPage, itemsPerPage }) => {
  return (
    <div>
      {/* layout grid for country cards */}
      <div className="country-grid">
        {countries.map((country) => (
          <div className="country-card" key={country.cca3}>
            {/* clicking the flag will take the user to that country's detail page */}
            <Link to={`/country/${country.name.common}`}>
              <img
                src={country.flags?.png || 'https://via.placeholder.com/150'}
                alt={`flag of ${country.name.common}`}
                className="flag-img clickable"
              />
            </Link>
            {/* display the name of the country */}
            <h3>{country.name.common}</h3>
          </div>
        ))}
      </div>

      {/* buttons for changing the page */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(total / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            // highlight the active page
            className={`page-btn ${index + 1 === page ? 'active' : ''}`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
