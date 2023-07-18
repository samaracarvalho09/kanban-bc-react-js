import styles from '../../components/FilterItems/styles.module.css'
import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";

export function FilterItems() {
  return (
    <div className={styles.wrapperInputFilter}>
      <div className={styles.containerFilter}>
        <FunnelSimple size={32} className={styles.filterIcon}/>
        <span className={styles.elementButton}>Filtrar</span>
      </div>

      <div>
       

        <div className={styles.containerInput}>
        <MagnifyingGlass size={24} className={styles.SearchIcon} />
        <input type="text"  placeholder='Busque por cards, assuntos ou responsáveis...'/> 
        </div>
      </div>
    </div>
  );
}
