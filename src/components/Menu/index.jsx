import logo from "../../assets/logo.svg";
import iconeAjuste from "../../assets/ajustes.svg";
import iconeBoards from "../../assets/boards.svg";
import iconeRelatorios from "../../assets/relatorios.svg";
import iconeEquipe from "../../assets/equipes.svg";

import styles from "../Menu/styles.module.css";
export function Menu() {
  return (
    <div className={styles.wrapperMenu}>
      <div>
        <img className={styles.iconLogo} src={logo} />

        <div className={styles.wrapperIcons}>
          <span>
            <img src={iconeBoards} />
            Boards
          </span>
          <span>
            <img src={iconeEquipe} />
            Equipes
          </span>
          <span>
            <img src={iconeRelatorios} />
            Relatórios
          </span>
          <span>
            <img src={iconeAjuste} />
            Ajustes
          </span>
        </div>
      </div>
    </div>
  );
}
