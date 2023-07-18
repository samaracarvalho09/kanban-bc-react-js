import styles from "./../Header/styles.module.css";

import { Pencil } from "@phosphor-icons/react";
export function Header() {
  return (
    <div className={styles.wrapperHeader}>
      <div className={styles.containerEditName}>
        <h3>Meu Kanban</h3>
        <Pencil size={32} className={styles.editIcon} />
      </div>
      <div className={styles.wrapperAvatar}>
     
      </div>
    </div>
  );
}
