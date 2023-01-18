import styles from "./style/feedCard.module.scss"
import catImg from "../../images/cat.svg"
import { useState } from "react"


const FeedCard = ({title, description, composition, portionCount, countMouse, weight, availability, selected, onSelected})=>{

  const [selectedState, setSelected] = useState(false)

  const onClickSelected = () => setSelected(!selectedState)

  const selectedDescription = selectedState ? <p className={styles.description}>{description}</p> : <p className={styles.description}>Чего сидишь? Порадуй котэ, <span onClick={onClickSelected} className={styles.btnBuy}>купи.</span></p>

  const disableCard = availability ? "" : styles.disabled
  const selectedCard = selectedState ? styles.selected : ""

  const feedDescription = availability ? selectedDescription : <p className={styles.disabledDescription}>Печалька, {composition} закончился.</p>
    return (
      <div className={styles.feed_container}>
        <div onClick={onClickSelected} className={`${styles.feed_box} ${selectedCard} ${disableCard}`}>
          <div className={styles.feed_content}>
            <h4>Сказочное заморское яство</h4>
            <h1>{title}</h1>
            <h2>{composition}</h2>
            <p><span className={styles.count}>{portionCount}</span> порций</p>
            <p><span className={styles.count}>{countMouse}</span> мыши в подарок</p>
        </div>
          <div className={styles.feed_bottom}>
            <img src={catImg}/>
            <p className={styles.weight}><span>{weight}</span> кг</p>
          </div>
        </div>
        <div >{feedDescription}</div>
      </div>
    )
}

export default FeedCard;