import React from "react";
import judgmentTypes from "../../data/judgmentTypes.json";
import "./Table.scss";

const Filter = ({
  initialItems,
  setItem,
  responses,
  conditions,
  setConditions,
}) => {
  const onConditionChecked = (responseId, judgmentTypeId) => () => {
    const newConditions = conditions.map(o => ({
      responseId: o.responseId,
      responseName: o.responseName,
      judgmentTypeId:
        o.responseId === responseId ? judgmentTypeId : o.judgmentTypeId,
    }));
    setConditions(newConditions);
  };

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
            <td
              key={i}
              onClick={onConditionChecked(
                o.responseId,
                judgmentTypes.undetermined.id
              )}
            >
              <input
                type="radio"
                onChange={onConditionChecked(
                  o.responseId,
                  judgmentTypes.undetermined.id
                )}
                checked={
                  conditions[i].judgmentTypeId === judgmentTypes.undetermined.id
                }
              />
            </td>
          ))}
        </tr>
        <tr>
          <td>確定</td>
          {conditions.map((o, i) => (
            <td
              key={i}
              onClick={onConditionChecked(
                o.responseId,
                judgmentTypes.determined.id
              )}
            >
              <input
                type="radio"
                onChange={onConditionChecked(
                  o.responseId,
                  judgmentTypes.determined.id
                )}
                checked={
                  conditions[i].judgmentTypeId === judgmentTypes.determined.id
                }
              />
            </td>
          ))}
        </tr>
        <tr>
          <td>除外</td>
          {conditions.map((o, i) => (
            <td
              key={i}
              onClick={onConditionChecked(
                o.responseId,
                judgmentTypes.exclued.id
              )}
            >
              <input
                type="radio"
                onChange={onConditionChecked(
                  o.responseId,
                  judgmentTypes.exclued.id
                )}
                checked={
                  conditions[i].judgmentTypeId === judgmentTypes.exclued.id
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
