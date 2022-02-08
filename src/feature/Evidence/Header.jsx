import responses from "../../data/responseRepository.json";

const Header = () => (
  <thead>
    <tr>
      <th></th>
      {responses.map(response => (
        <th key={`response-id${response.id}`}>{response.name}</th>
      ))}
    </tr>
  </thead>
);

export default Header;
