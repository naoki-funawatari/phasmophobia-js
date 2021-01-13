import React, { useState } from "react";
import responseRepository from "../../data/responseRepository.json";
import "./Table.scss";
const Filter = ({ initialItems, setItem }) => {
  const responses = responseRepository.responses;
  const initialConditions = responses.map(o => ({
    responseId: o.id,
    responseName: o.name,
    checked: true,
  }));
  const [conditions, setConditions] = useState(initialConditions);
  const onConditionChecked = (responseId, checked) => () => {
    const newConditions = conditions.map(o => ({
      responseId: o.responseId,
      responseName: o.responseName,
      checked: o.responseId === responseId ? checked : o.checked,
    }));
    console.log(newConditions);
    setConditions(newConditions);
  };
  return (
    <table className="ghost-table">
      <thead>
        <tr>
          {conditions.map(o => (
            <th>{o.responseName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {conditions.map(o => (
            <td>
              <input
                type="radio"
                onClick={onConditionChecked(o.responseId, true)}
                checked={o.checked}
              />
            </td>
          ))}
        </tr>
        <tr>
          {conditions.map(o => (
            <td>
              <input
                type="radio"
                onClick={onConditionChecked(o.responseId, false)}
                checked={!o.checked}
              />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Filter;
