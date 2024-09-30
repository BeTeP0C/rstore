import React from "react";
import { bd } from "./bd"; 
import './img/products_1.png'
import './img/products_2.png'
import './img/products_3.png'
import './img/products_4.png'
import './img/products_5.png'
import './img/products_6.png'
import './img/products_7.png'
import './img/products_8.png'
import './img/products_9.png'
import styles from "./product.scss";
import styles_prod from "../products.scss"

interface IElement {
    title: string,
    img: string,
    like: boolean,
    manufacturer: string,
    price: string | boolean,
    like_visible: boolean,
    logo_visible: boolean,
    id: number,
}

export interface IProduct {
    title: string,
    elements: Array<IElement>
}

function addEl (el:IElement) {
    const content = []

    content.push(
        <img className={styles.img} src={el.img} alt="" />
    )

    if (el.like_visible) {
        content.push(
            <span></span>
        )
    }

    if (el.logo_visible) {
        content.push(
            <span>
                <img src="" alt="" />
            </span>
        )
    }

    if (el.price != false) {
        content.push(
            <div>
                <h3>{el.title}</h3>
                <span>{el.price}</span>
             </div>
        )
    } else {
        content.push(
            <div>
                <h3 className={styles.title}>{el.title}</h3>
             </div>
        )
    }

    return content
}


export function Product () {
    return (
        <ul className={styles_prod.list}>
            {bd.map(prod => (
                <li className={styles_prod.item} key={Math.random()}>
                    <h2 className={styles.heading}>{prod.title}</h2>
                    <ul className={styles.list} key={Math.random()}>
                        {prod.elements.map(el => (
                            <li className={styles.item} key={el.id}>
                                {addEl(el)}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}