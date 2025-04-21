import { useNavigate } from 'react-router-dom';

// component that displays details about a specific country
const CountryDetails = ({ country }) => {
  // hook to navigate back to the previous page
  const navigate = useNavigate();

  // extract country information using optional chaining and fallback values
  const countryName = country?.name?.common || 'Unknown';
  const flagUrl = country?.flags?.svg || '';
  const capital = country?.capital?.[0] || 'No capital';
  const population = country?.population 
    ? country.population.toLocaleString() 
    : 'Unknown';
  const area = country?.area 
    ? `${country.area.toLocaleString()} km²` 
    : 'Not defined';

  // if languages exist, convert them into a comma-separated string
  const languages = country?.languages 
    ? Object.values(country.languages).join(', ') 
    : 'Not defined';

  // if currencies exist, map to their names and join into a string
  const currencies = country?.currencies
    ? Object.values(country.currencies).map(currency => currency.name).join(', ')
    : 'No currency';

  return (
    <div className="detail-page">
      <div className="detail-card">
        {/* go back to the previous page */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          Home
        </button>

        {/* country name */}
        <h2 className="detail-title">{countryName}</h2>

        {/* show flag if available, otherwise display a placeholder */}
        <div className="detail-flag-wrapper">
          {flagUrl ? (
            <img
              src={flagUrl}
              alt={`flag of ${countryName}`}
              className="detail-flag"
            />
          ) : (
            <div className="no-flag">No flag available</div>
          )}
        </div>

        {/* show detailed information about the country */}
        <div className="detail-info">
          <p><strong>Capital:</strong> {capital}</p>
          <p><strong>Population:</strong> {population}</p>
          <p><strong>Area:</strong> {area}</p>
          <p><strong>Language:</strong> {languages}</p>
          <p><strong>Currency:</strong> {currencies}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
