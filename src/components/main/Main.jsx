import React from 'react';
import FeedCard from '../feedCard/FeedCard';
import styles from "./style/main.module.scss"

const Main = ()=>{ 
    return (
        <div>
            <h1>Ты сегодня накормил кота?</h1>
            <FeedCard />
        </div>
    )
}

export default Main;