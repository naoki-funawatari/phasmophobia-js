import React from "react";
import judgmentType from "../../data/judgmentType.json";
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
                judgmentType.undetermined.id
              )}
            >
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
            <td
              key={i}
              onClick={onConditionChecked(
                o.responseId,
                judgmentType.determined.id
              )}
            >
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
            <td
              key={i}
              onClick={onConditionChecked(
                o.responseId,
                judgmentType.exclued.id
              )}
            >
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
