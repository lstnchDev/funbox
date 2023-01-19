import styles from "./style/feedCard.module.scss";
import catImg from "../../images/cat.svg";
import { useState } from "react";

const FeedCard = ({
  title,
  description,
  composition,
  portionCount,
  countMouse,
  weight,
  availability,
}) => {
  const [selectedState, setSelected] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setSelected(!selectedState);
    setClicked(true);
  };
  const handleMouseLeave = () => setClicked(false);

  const isHovered = selectedState && clicked ? styles.hoverSelected : "";
  const isSelected = selectedState ? (
    <p className={styles.description}>{description}</p>
  ) : (
    <p className={styles.description}>
      Чего сидишь? Порадуй котэ,{" "}
      <span onClick={handleClick} className={styles.btnBuy}>
        купи.
      </span>
    </p>
  );

  const isDisabled = availability ? "" : styles.disabled;
  const isSelectedCard = selectedState ? styles.selected : "";
  const overlayBox = availability ? "" : <div className={styles.overlay}></div>;

  const mouse = () => {
    if (countMouse % 10 === 1 && countMouse % 100 !== 11) {
      return "мышь";
    } else if (
      countMouse % 10 > 1 &&
      countMouse % 10 < 5 &&
      (countMouse % 100 < 11 || countMouse % 100 > 14)
    ) {
      return "мыши";
    } else {
      return "мышей";
    }
  };

  const feedDescription = availability ? (
    isSelected
  ) : (
    <p className={styles.disabledDescription}>
      Печалька, {composition} закончился.
    </p>
  );

  return (
    <div className={styles.feed_container}>
      <div
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={`${styles.feed_box} ${isSelectedCard} ${isDisabled} ${isHovered}`}
      >
        {overlayBox}
        <div className={styles.feed_content}>
          <h4>Сказочное заморское яство</h4>
          <p className={styles.title}>{title}</p>
          <p className={styles.composition}>{composition}</p>
          <p>
            <span className={styles.count}>{portionCount}</span> порций
          </p>
          <p>
            <span className={styles.count}>
              {countMouse === 1 ? "" : countMouse}
            </span>{" "}
            {mouse()} в подарок
          </p>
        </div>
        <div className={styles.feed_bottom}>
          <img alt="cat" src={catImg} />
          <div className={styles.weight_container}>
            <p className={styles.weight}>
              <span className={styles.weight_count}>{weight}</span> кг
            </p>
          </div>
        </div>
      </div>
      <div className={styles.description_container}>{feedDescription}</div>
    </div>
  );
};

export default FeedCard;
