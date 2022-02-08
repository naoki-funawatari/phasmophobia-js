import React from "react";
import "./Table.scss";
import judgmentType from "../../data/judgmentType.json";

const Table = ({ items, conditions }) => {
  return (
    <table className="ghost-table">
      <thead>
        <tr>
          <th>名称</th>
          <th>証拠①</th>
          <th>証拠②</th>
          <th>証拠③</th>
          <th>カウント</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => {
          let count = 0;
          let isExclued = false;
          return (
            <tr key={i}>
              <td>{item.ghostName}</td>
              {item.responses.map((response, j) => {
                let irotagu = "undetermined";
                const condition = conditions.find(
                  o => o.responseId === response.id
                );
                if (condition.judgmentTypeId === judgmentType.determined.id) {
                  irotagu = "determined";
                  count++;
                }
                if (condition.judgmentTypeId === judgmentType.exclued.id) {
                  irotagu = "exclued";
                  isExclued = true;
                }
                return (
                  <td key={j} className={irotagu}>
                    {response.name}
                  </td>
                );
              })}
              <td
                className={
                  isExclued
                    ? "exclued"
                    : count === 0
                    ? "zero"
                    : count === 1
                    ? "one"
                    : count === 2
                    ? "two"
                    : "three"
                }
              >
                {count}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
