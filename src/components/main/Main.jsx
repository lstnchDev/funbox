import React from 'react';
import FeedCard from '../feedCard/FeedCard';
import styles from "./style/main.module.scss"

const catsFood = [
    {
        id: 0,
        title: "Нямушка",
        description: "Печень утки разварная с артишоками.",
        composition: "с фуа-гра",
        portionCount: 10,
        countMouse: 1,
        weight: "0,5",
        availability: true,

    },
    {
        id: 1,
        title: "Нямушка",
        description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        composition: "с рыбой",
        portionCount: 40,
        countMouse: 2,
        weight: "2",
        availability: true,

    },
    {
        id: 2,
        title: "Нямушка",
        description: "Филе из цыплят с трюфелями в бульоне.",
        composition: "с курой",
        portionCount: 100,
        countMouse: 5,
        weight: "5",
        availability: false,

    },
]

const Main = ()=>{ 

    const feedCards = catsFood.map((catFood)=> <FeedCard 
            key={catFood.id}
            title={catFood.title}
            description={catFood.description}
            composition={catFood.composition}
            portionCount={catFood.portionCount}
            countMouse={catFood.countMouse}
            weight={catFood.weight}
            availability={catFood.availability}
            selected={false}
         />)
    return (
        <div className={styles.main_container}>
            <h1 className={styles.title}>Ты сегодня накормил кота?</h1>
            <div className={styles.feedCards}>
                {feedCards}
            </div>
        </div>
    )
}

export default Main;