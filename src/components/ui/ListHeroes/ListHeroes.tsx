import { FC } from "react"
import { IHeroes } from "../../../types/IHeroes"
import styles from "./ListHeroes.module.css"
import { CardHero } from "../CardHero/CardHero"

interface IListHeroes {
    heroes: IHeroes[],
    title: string
}

export const ListHeroes: FC<IListHeroes> = ({ heroes, title }) => {
    return (
        <div className={styles.containerPrincipalList}>
            <div className={styles.containerTitle}>
                <h2>{title}</h2>
            </div>
            <div className={styles.containerList}>
                {heroes.map((hero) => (
                    <div className={styles.cardWrapper} key={hero.id}>
                        <CardHero hero={hero} />
                    </div>
                ))}
            </div>
        </div>
    );
};
