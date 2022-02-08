import responses from "../../data/responseRepository.json";
import judgmentTypes from "../../data/judgmentTypes.json";

const Data = () => {
  console.log([...Object.values(judgmentTypes)]);

  return (
    <tbody>
      {[...Object.values(judgmentTypes)].map(judgmentType => {
        return (
          <tr key={`judgmentType-id${judgmentType.id}`}>
            <th>{judgmentType.name}</th>
            {responses.map(reseponse => {
              return (
                <td key={`data-reseponse-id${reseponse.id}`}>
                  {reseponse.name}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default Data;
