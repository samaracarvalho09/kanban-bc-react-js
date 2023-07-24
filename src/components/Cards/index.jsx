import { useState } from "react";
import styles from "../Cards/styles.module.css";

import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";
import cardsContent from "../../cardsContext";


export function Cards({ toDoCards, doingCards, doneCards}) {
  // const toDoCard = cardsContent.filter((card) => card.category === "To Do");
  // const doingCard = cardsContent.filter((card) => card.category === "Doing");
  // const doneCard = cardsContent.filter((card) => card.category === "Done");

  return (
    // <div>  
      <div className={styles.wrapperAllCards}>
        
        <div className={styles.containerCategory}>
          <div>
            <h3 className={styles.categoryTitle}>To Do</h3>
          </div>

          {toDoCards.map((cardContent, index) => (
            <div key={index} className={styles.wrapperCard}>
              <h3 className={styles.cardTitle}>{cardContent.title}</h3>
              <div className={styles.cardContent}>
                <p>{cardContent.content}</p>
              </div>
              <div className={styles.wrapperTags}>
                <div className={styles.containerCardTags}>
                  {cardContent.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.cardTags}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.containerCategory}>
          <div>
            <h3 className={styles.categoryTitle}>Doing</h3>
          </div>
          {doingCards.map((cardContent, index) => (
            <div key={index} className={styles.wrapperCard}>
              <h3 className={styles.cardTitle}>{cardContent.title}</h3>
              <div className={styles.cardContent}>
                <p>{cardContent.content}</p>
              </div>
              <div className={styles.wrapperTags}>
                <div className={styles.containerCardTags}>
                  {cardContent.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.cardTags}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.containerCategory}>
          <div>
            <h3 className={styles.categoryTitle}>Done</h3>
          </div>
          {doneCards.map((cardContent, index) => (
            <div key={index} className={styles.wrapperCard}>
              <h3 className={styles.cardTitle}>{cardContent.title}</h3>
              <div className={styles.cardContent}>
                <p>{cardContent.content}</p>
              </div>
              <div className={styles.wrapperTags}>
                <div className={styles.containerCardTags}>
                  {cardContent.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.cardTags}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
  
  );
}
