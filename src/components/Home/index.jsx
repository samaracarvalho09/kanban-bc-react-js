import { Cards } from "../Cards";
import { SearchBar } from "../InputSearch";
import { Header } from "../Header";
import { Menu } from "../Menu";
import { useState } from "react";
import cardsContent from "../../cardsContext";
import { filterItems } from "../InputSearch";
import { Filter } from "../Filter";

export function Home() {
  return (
    <div style={{ background: "#7c3aed", display: "flex" }}>
      <div>
        <Menu />
      </div>
      <div>
        <Header />
        <Filter />
      </div>
    </div>
  );
}
