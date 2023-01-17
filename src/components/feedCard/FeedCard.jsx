import styles from "./style/feedCard.module.scss"
import catImg from "../../images/cat.svg"


const FeedCard = ()=>{
    return (
      <div>
          <div>
            <h4>Сказочное заморское яство</h4>
            <h1>Нямушка</h1>
            <h2>с фуа-гра</h2>
            <p>10 порций</p>
            <p>мышь в подарок</p>
            <img src={catImg}/>
            <p>0,5 кг</p>
        </div>
        <p>Чего сидишь? Порадуй котэ, <a>купи.</a></p>
      </div>
    )
}

export default FeedCard;