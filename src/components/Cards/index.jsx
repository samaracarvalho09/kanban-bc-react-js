import { useState } from "react";
import styles from "../Cards/styles.module.css";

import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";

export function Cards() {
  const [filtro, setFiltro] = useState('');
  return (
    <>
    {/* Input*/}
    <div className={styles.wrapperInputFilter}>
      <div className={styles.containerFilter}>
        <FunnelSimple size={32} className={styles.filterIcon}/>
        <span className={styles.elementButton}>Filtrar</span>
      </div>

      <div>
       

        <div className={styles.containerInput}>
        <MagnifyingGlass size={24} className={styles.SearchIcon} />
        <input type="text"  placeholder='Busque por cards, assuntos ou responsáveis...'    onChange={(e) => setFiltro(e.target.value)} /> 
        </div>
      </div>
    </div>
    {/* Fim input */}

      <div>
        <div className={styles.wrapperCard}>
          <h3 className={styles.cardTitle}>#boraCodar um Kanban 🧑‍💻</h3>
          <div className={styles.cardContent}>
          <p>
              {filtro && (
                <>
                  Novo desafio do #boraCodar da Rocketseat, onde é proposto
                  construir um quadro de Kanban.
                </>
              )}
            </p>
          </div>
          <div className={styles.wrapperTags}>
            <div className={styles.containerCardTags}>
              <span className={styles.cardTags}>rocketseat</span>
            </div>
            <div className={styles.containerCardTags}>
              <span className={styles.cardTags}>desafio</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
