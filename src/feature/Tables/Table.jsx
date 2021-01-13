import React, { useState } from "react";
import ghostRepository from "../../data/ghostRepository.json";
import responseRepository from "../../data/responseRepository.json";
import "./Table.scss";
const Table = () => {
  const ghosts = ghostRepository.ghosts;
  const responses = responseRepository.responses;
  const initialItems = ghosts.map(ghost => {
    return {
      ghostId: ghost.id,
      ghostName: ghost.name,
      responsesNames: ghost.responses.map(response => {
        return {
          responsesName: responses.find(o => o.id === response).name,
        };
      }),
    };
  });
  const [items, setItem] = useState(initialItems);

  return (
    <table className="ghost-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>名称</th>
          <th>証拠①</th>
          <th>証拠②</th>
          <th>証拠③</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.ghostId}</td>
              <td>{item.ghostName}</td>
              {item.responsesNames.map((responsesName, j) => {
                return <td key={j}>{responsesName.responsesName}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
