import styles from "./styles.module.css";
import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";
import cardsContent from "../../cardsContext";
import { useState } from "react";


export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) => item.content.toLowerCase().includes(query))
}
export function SearchBar({ query, onChange}) {


  return (
    <div className={styles.wrapperInputFilter}>
      <div className={styles.containerFilter}>
        <FunnelSimple size={32} className={styles.filterIcon} />
        <span className={styles.elementButton}>Filtrar</span>
      </div>

     
        <div className={styles.containerInput}>
          <MagnifyingGlass size={24} className={styles.SearchIcon} />
          <input
            type="text"
            placeholder="Busque por cards, assuntos ou responsáveis..."
            value={query}
            onChange={onChange}
          />
        
      </div>
    </div>
  );
}
