import { Cards } from "../Cards";
import { SearchBar } from "../InputSearch";
import { Header } from "../Header";
import { Menu } from "../Menu";
import { useState } from "react";
import cardsContent from "../../cardsContext";
import { filterItems } from "../InputSearch";

export function Home() {
  const [query, setQuery] = useState("");

const results = filterItems(cardsContent, query);


function handleChange(e) {
  setQuery(e.target.value);
}

 // Filtrar os cards de acordo com suas categorias
 const toDoCard = results.filter((card) => card.category === "To Do");
 const doingCard = results.filter((card) => card.category === "Doing");
 const doneCard = results.filter((card) => card.category === "Done");

  return (
    <div style={{ background: "#7c3aed", display: "flex" }}>
      <div>
        <Menu />

      </div>
        <div>
          <Header />
          <SearchBar query={query} onChange={handleChange} />
          {/* <Cards items={results}/> */}

          <Cards
          toDoCards={toDoCard}
          doingCards={doingCard}
          doneCards={doneCard}
        />  
        </div>
    </div>
  );
}
