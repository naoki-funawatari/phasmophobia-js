import responses from "../../data/responseRepository.json";
import judgmentTypes from "../../data/judgmentTypes.json";

const Data = () => {
  return (
    <tbody>
      {[...Object.values(judgmentTypes)].map(judgmentType => {
        return (
          <tr key={`judgmentType-id${judgmentType.id}`}>
            <th>{judgmentType.name}</th>
            {responses.map(reseponse => {
              return (
                <td key={`data-reseponse-id${reseponse.id}`}>
                  <input type="radio" name="" id="" />
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
