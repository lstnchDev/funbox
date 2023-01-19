import React from "react";
import { catsFood } from "../../tools/catsFoot";
import FeedCard from "../feedCard/FeedCard";
import styles from "./style/main.module.scss";

const Main = () => {
  const feedCards = catsFood.map((catFood) => (
    <FeedCard
      key={catFood.id}
      title={catFood.title}
      description={catFood.description}
      composition={catFood.composition}
      portionCount={catFood.portionCount}
      countMouse={catFood.countMouse}
      weight={catFood.weight}
      availability={catFood.availability}
    />
  ));
  return (
    <div className={styles.main_container}>
      <h1 className={styles.title}>Ты сегодня накормил кота?</h1>
      <div className={styles.feedCards}>{feedCards}</div>
    </div>
  );
};

export default Main;
