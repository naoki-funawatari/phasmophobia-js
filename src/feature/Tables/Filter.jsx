import React, { useState } from "react";
import responseRepository from "../../data/responseRepository.json";
import judgmentType from "./judgmentType.json";
import "./Table.scss";
const Filter = ({ initialItems, setItem }) => {
  const responses = responseRepository.responses;
  const initialConditions = responses.map(o => ({
    responseId: o.id,
    responseName: o.name,
    judgmentTypeId: judgmentType.undetermined.id,
  }));
  const [conditions, setConditions] = useState(initialConditions);
  const onConditionChecked = (responseId, judgmentTypeId) => () => {
    const newConditions = conditions.map(o => ({
      responseId: o.responseId,
      responseName: o.responseName,
      judgmentTypeId:
        o.responseId === responseId ? judgmentTypeId : o.judgmentTypeId,
    }));
    setConditions(newConditions);
  };
  console.table(conditions);
  return (
    <table className="ghost-table">
      <thead>
        <tr>
          <th></th>
          {conditions.map((o, i) => (
            <th key={i}>{o.responseName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>未確定</td>
          {conditions.map((o, i) => (
            <td key={i}>
              <input
                type="radio"
                onChange={onConditionChecked(
                  o.responseId,
                  judgmentType.undetermined.id
                )}
                checked={
                  conditions[i].judgmentTypeId === judgmentType.undetermined.id
                }
              />
            </td>
          ))}
        </tr>
        <tr>
          <td>確定</td>
          {conditions.map((o, i) => (
            <td key={i}>
              <input
                type="radio"
                onChange={onConditionChecked(
                  o.responseId,
                  judgmentType.determined.id
                )}
                checked={
                  conditions[i].judgmentTypeId === judgmentType.determined.id
                }
              />
            </td>
          ))}
        </tr>
        <tr>
          <td>除外</td>
          {conditions.map((o, i) => (
            <td key={i}>
              <input
                type="radio"
                onChange={onConditionChecked(
                  o.responseId,
                  judgmentType.exclued.id
                )}
                checked={
                  conditions[i].judgmentTypeId === judgmentType.exclued.id
                }
              />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Filter;
