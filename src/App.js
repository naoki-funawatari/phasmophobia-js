import { useState } from "react";
import Filter from "./feature/Tables/Filter";
import Table from "./feature/Tables/Table";
import ghostRepository from "./data/ghostRepository.json";
import responseRepository from "./data/responseRepository.json";
import judgmentTypes from "./data/judgmentTypes.json";

import Table2 from "./feature/Evidence/Table";

const App = () => {
  const ghosts = ghostRepository.ghosts;
  const responses = responseRepository;
  const initialItems = ghosts.map(ghost => {
    return {
      ghostId: ghost.id,
      ghostName: ghost.name,
      responses: ghost.responses.map(response => ({
        ...responses.find(o => o.id === response),
      })),
    };
  });
  const [items, setItem] = useState(initialItems);
  const initialConditions = responses.map(o => ({
    responseId: o.id,
    responseName: o.name,
    judgmentTypeId: judgmentTypes.undetermined.id,
  }));
  const [conditions, setConditions] = useState(initialConditions);
  return (
    <>
      <div>
        <Table2 />
      </div>
      <br />
      <div>
        <Filter
          initialItems={initialItems}
          setItem={setItem}
          responses={responses}
          conditions={conditions}
          setConditions={setConditions}
        />
        <br />
        <Table conditions={conditions} items={items} />
      </div>
    </>
  );
};

export default App;
