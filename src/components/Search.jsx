import { Form } from 'react-bootstrap';

// search bar that updates the search term when user types
const Search = ({ setSearch }) => (
  <Form className="mb-4">
    {/* text input for country name */}
    <Form.Control
      type="text"
      placeholder="enter country name..."
      onChange={(e) => setSearch(e.target.value)}
    />
  </Form>
);

export default Search;
